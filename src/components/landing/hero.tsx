import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

function mapRange(v: number, in0: number, in1: number, out0: number, out1: number) {
  const t = clamp01((v - in0) / (in1 - in0));
  return out0 + (out1 - out0) * t;
}

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLImageElement>(null);
  const washRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const zooming = reduceMotion !== true;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1.55]);
  const contentY = useTransform(scrollYProgress, [0, 0.22, 0.48], [0, 0, -40]);
  const ghostScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.28]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!zooming) return;
    if (blurRef.current) {
      blurRef.current.style.opacity = String(mapRange(v, 0, 0.5, 0, 1));
    }
    if (washRef.current) {
      washRef.current.style.opacity = String(
        v < 0.35
          ? mapRange(v, 0, 0.35, 0, 0.22)
          : mapRange(v, 0.35, 0.55, 0.22, 0.92),
      );
    }
    if (imageWrapRef.current) {
      imageWrapRef.current.style.opacity = String(mapRange(v, 0.45, 0.85, 1, 0));
    }
    if (contentRef.current) {
      contentRef.current.style.opacity = String(
        v < 0.22 ? 1 : mapRange(v, 0.22, 0.48, 1, 0),
      );
    }
  });

  return (
    <section
      id="top"
      ref={containerRef}
      className="hero-pin relative bg-foam text-cream"
    >
      <div className="hero-pin-inner">
        <motion.div
          className="pointer-events-none absolute inset-0 will-change-transform"
          style={zooming ? { scale: imageScale } : undefined}
        >
          <div ref={imageWrapRef} className="absolute inset-0">
            <img
              src="/cali.jpg"
              alt=""
              className="absolute inset-0 size-full object-cover no-outline"
            />
            <img
              ref={blurRef}
              src="/cali.jpg"
              alt=""
              className="absolute inset-0 size-full object-cover no-outline blur-md opacity-0"
            />
          </div>
        </motion.div>
        <div
          ref={washRef}
          className="pointer-events-none absolute inset-0 bg-foam opacity-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foam via-foam/70 to-foam/25" />
        <div className="hero-grain pointer-events-none absolute inset-0" />

        <div className="pointer-events-none absolute top-1/2 left-0 hidden -translate-y-1/2 sm:block">
          <motion.p
            className="ghost-mark display text-ghost origin-left whitespace-nowrap select-none"
            aria-hidden="true"
            style={zooming ? { scale: ghostScale } : undefined}
          >
            MIRA VE
          </motion.p>
        </div>

        <motion.div
          className="relative min-h-dvh"
          style={zooming ? { y: contentY } : undefined}
        >
          <div
            ref={contentRef}
            className="mx-auto grid min-h-dvh max-w-6xl items-center gap-4 px-4 pt-20 pb-4 sm:gap-10 sm:px-6 sm:pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-24"
          >
            <div>
              <p className="stagger-item label-caps mb-6 inline-flex items-center gap-3 text-cream/55">
                <span className="h-px w-5 bg-cream/30" />
                {t.hero.kicker}
              </p>
              <h1 className="stagger-item display max-w-xl text-display-page text-cream">
                {t.hero.title}
              </h1>
              <p className="stagger-item mt-6 max-w-md text-body leading-relaxed text-cream/65">
                {t.hero.lede}
              </p>
              <div className="stagger-item mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="inverse">
                  <a href="#lista">{t.hero.cta}</a>
                </Button>
                <Button asChild variant="inverseOutline" size="lg">
                  <a href="#como">
                    {t.hero.secondary}
                    <ArrowDown className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="stagger-item mt-8 flex flex-wrap gap-2">
                {t.hero.chips.map((chip, i) => (
                  <span
                    key={chip}
                    className="inline-flex h-10 items-center gap-2 rounded-pill border border-cream/15 bg-cream/10 px-3.5 text-subheadline text-cream"
                  >
                    {i === 0 ? (
                      <span className="size-1.5 rounded-full bg-signal" />
                    ) : null}
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="stagger-item relative mx-auto w-full max-w-xs lg:max-w-sm">
              <img
                src="/screens/discover.png"
                alt={t.hero.title}
                className="phone-shot no-outline mx-auto h-auto max-h-56 w-auto max-w-full sm:max-h-80 lg:max-h-phone"
              />
              <span className="absolute top-8 -left-3 hidden rounded-md border border-cream/15 bg-foam/80 px-3 py-2 text-caption1 font-semibold tracking-wide text-cream uppercase backdrop-blur-sm sm:block">
                {t.hero.floatLocal}
              </span>
              <span className="absolute top-1/2 -right-3 hidden -translate-y-1/2 rounded-md border border-cream/15 bg-foam/80 px-3 py-2 text-caption1 font-semibold tracking-wide text-cream uppercase backdrop-blur-sm sm:block lg:-right-6">
                {t.hero.floatFair}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
