import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export const DEMO_SCREENS = {
  discover: "/screens/discover.png",
  map: "/screens/map.png",
  saved: "/screens/saved.png",
  how: "/screens/how.png",
} as const;

export type DemoScreen = keyof typeof DEMO_SCREENS;

const ORDER: DemoScreen[] = ["discover", "map", "saved", "how"];

type Keyframe = {
  t: number;
  screen: DemoScreen;
  fx: number;
  fy: number;
  fo: number;
  px: number;
  py: number;
  tap?: boolean;
};

const KEYFRAMES: Keyframe[] = [
  { t: 0, screen: "discover", fx: 52, fy: 84, fo: 0, px: 0, py: 0 },
  { t: 450, screen: "discover", fx: 54, fy: 68, fo: 1, px: 0, py: 0 },
  { t: 1600, screen: "discover", fx: 50, fy: 46, fo: 1, px: 0, py: -5.5 },
  { t: 2300, screen: "discover", fx: 51, fy: 40, fo: 1, px: 0, py: -6.5 },
  { t: 2500, screen: "discover", fx: 51, fy: 40, fo: 1, px: 0, py: -6.5, tap: true },
  { t: 3400, screen: "map", fx: 40, fy: 62, fo: 1, px: 0, py: 0 },
  { t: 4600, screen: "map", fx: 61, fy: 48, fo: 1, px: 4, py: 3 },
  { t: 4900, screen: "map", fx: 61, fy: 48, fo: 1, px: 4, py: 3, tap: true },
  { t: 5800, screen: "saved", fx: 50, fy: 64, fo: 1, px: 0, py: 0 },
  { t: 7000, screen: "saved", fx: 48, fy: 42, fo: 1, px: 0, py: -5 },
  { t: 7400, screen: "saved", fx: 48, fy: 42, fo: 1, px: 0, py: -5, tap: true },
  { t: 8300, screen: "how", fx: 52, fy: 54, fo: 0.85, px: 0, py: 0 },
  { t: 10800, screen: "how", fx: 52, fy: 82, fo: 0, px: 0, py: 0 },
  { t: 11800, screen: "discover", fx: 52, fy: 84, fo: 0, px: 0, py: 0 },
];

const LOOP = 12400;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOut(t: number) {
  return 1 - (1 - t) ** 3;
}

function sample(ms: number): Keyframe & { tapId: number | null } {
  const t = ((ms % LOOP) + LOOP) % LOOP;
  let i = 0;
  for (let n = 0; n < KEYFRAMES.length - 1; n++) {
    if (KEYFRAMES[n + 1].t <= t) i = n + 1;
  }
  const a = KEYFRAMES[i];
  const b = KEYFRAMES[i + 1] ?? a;
  const u = b.t === a.t ? 1 : Math.min(1, (t - a.t) / (b.t - a.t));
  const e = easeOut(u);
  return {
    t,
    screen: a.screen,
    fx: lerp(a.fx, b.fx, e),
    fy: lerp(a.fy, b.fy, e),
    fo: lerp(a.fo, b.fo, e),
    px: lerp(a.px, b.px, e),
    py: lerp(a.py, b.py, e),
    tapId: a.tap && t - a.t < 90 ? a.t : null,
  };
}

export function PhoneDemo({
  className,
  alt,
  autoplay = true,
  screen,
}: {
  className?: string;
  alt: string;
  autoplay?: boolean;
  screen?: DemoScreen;
}) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.35 });
  const playing = autoplay && reduceMotion !== true && inView;

  const [active, setActive] = useState<DemoScreen>(screen ?? "discover");
  const [pressed, setPressed] = useState(false);
  const [ripple, setRipple] = useState<{ id: number; x: number; y: number } | null>(
    null,
  );

  const fx = useMotionValue(52);
  const fy = useMotionValue(84);
  const fo = useMotionValue(0);
  const fingerLeft = useTransform(fx, (v) => `${v}%`);
  const fingerTop = useTransform(fy, (v) => `${v}%`);

  const clock = useRef(0);
  const origin = useRef<number | null>(null);
  const screenRef = useRef(active);
  const tapRef = useRef<number | null>(null);
  const pressTimer = useRef(0);

  useEffect(() => {
    if (!autoplay && screen) {
      setActive(screen);
      screenRef.current = screen;
    }
  }, [autoplay, screen]);

  useEffect(() => {
    ORDER.forEach((id) => {
      const img = new Image();
      img.src = DEMO_SCREENS[id];
    });
  }, []);

  useAnimationFrame((time) => {
    if (!playing) {
      origin.current = null;
      return;
    }
    if (origin.current == null) origin.current = time - clock.current;
    clock.current = time - origin.current;
    const k = sample(clock.current);
    fx.set(k.fx);
    fy.set(k.fy);
    fo.set(k.fo);
    if (k.screen !== screenRef.current) {
      screenRef.current = k.screen;
      setActive(k.screen);
    }
    if (k.tapId != null && tapRef.current !== k.tapId) {
      tapRef.current = k.tapId;
      setPressed(true);
      setRipple({ id: k.tapId, x: k.fx, y: k.fy });
      window.clearTimeout(pressTimer.current);
      pressTimer.current = window.setTimeout(() => setPressed(false), 160);
    }
  });

  const live = autoplay ? active : (screen ?? active);

  return (
    <motion.div
      ref={rootRef}
      className="phone-demo relative mx-auto w-fit"
      animate={{ scale: pressed ? 0.975 : 1 }}
      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="phone-demo-stage relative">
        <img
          src={DEMO_SCREENS.discover}
          alt=""
          aria-hidden="true"
          className={cn("no-outline invisible h-auto w-auto max-w-full", className)}
        />
        {ORDER.map((id) => (
          <motion.img
            key={id}
            src={DEMO_SCREENS[id]}
            alt={id === live ? alt : ""}
            className="phone-demo-screen no-outline pointer-events-none absolute inset-0 size-full object-contain"
            animate={{ opacity: id === live ? 1 : 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {playing ? (
          <motion.span
            aria-hidden="true"
            className="phone-touch"
            style={{
              left: fingerLeft,
              top: fingerTop,
              opacity: fo,
            }}
          />
        ) : null}

        {playing && ripple ? (
          <span
            key={ripple.id}
            aria-hidden="true"
            className="phone-ripple"
            style={{ left: `${ripple.x}%`, top: `${ripple.y}%` }}
          />
        ) : null}
      </div>
    </motion.div>
  );
}
