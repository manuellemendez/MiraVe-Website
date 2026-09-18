import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const REVIEWS = [
  { who: "Camila", place: "El Deleite del Mar", barrio: "Granada", stars: 5, local: true },
  { who: "Andrés", place: "Ioenta", barrio: "San Antonio", stars: 5, local: true },
  { who: "Valentina", place: "Palomulata", barrio: "La Flora", stars: 4, local: false },
  { who: "Mateo", place: "Platillos Voladores", barrio: "Centro", stars: 5, local: true },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

function StarRow({ value }: { value: number }) {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    setLit(0);
    const timers: number[] = [];
    for (let i = 1; i <= value; i++) {
      timers.push(window.setTimeout(() => setLit(i), 140 + i * 95));
    }
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [value]);

  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        const on = i < lit;
        return (
          <motion.span
            key={i}
            className="inline-flex"
            initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            animate={{
              opacity: on ? 1 : 0.3,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          >
            <Star
              className={cn(
                "size-3.5",
                on ? "fill-cream text-cream" : "fill-none text-cream/45",
              )}
              strokeWidth={1.6}
            />
          </motion.span>
        );
      })}
    </div>
  );
}

function ReviewCard({
  review,
  localLabel,
  className,
}: {
  review: (typeof REVIEWS)[number];
  localLabel: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{
        opacity: 0,
        y: -12,
        filter: "blur(4px)",
        transition: { duration: 0.15, ease: "easeIn" },
      }}
      transition={{ duration: 0.4, ease: EASE }}
      className={cn(
        "pointer-events-none w-[11.75rem] rounded-sm border border-cream/15 bg-foam/88 p-3 shadow-nav-dark backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-caption1 font-semibold text-cream">{review.who}</p>
        {review.local ? (
          <span className="label-caps text-[0.625rem] text-cream/55">{localLabel}</span>
        ) : (
          <span className="text-caption2 text-cream/40">{review.barrio}</span>
        )}
      </div>
      <p className="mt-0.5 truncate text-footnote text-cream/65">{review.place}</p>
      <div className="mt-2 flex items-center gap-2">
        <StarRow value={review.stars} />
        <span className="text-caption2 tabular-nums text-cream/50">{review.stars},0</span>
      </div>
    </motion.div>
  );
}

export function ReviewFloats() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.35 });
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);
  const playing = reduce !== true && inView;
  const localLabel = t.hero.reviewBadge;

  useEffect(() => {
    if (!playing) return;
    const leftTick = window.setInterval(() => {
      setLeft((v) => (v + 2) % REVIEWS.length);
    }, 6400);
    let rightTick = 0;
    const delay = window.setTimeout(() => {
      const rotate = () => setRight((v) => (v + 2) % REVIEWS.length);
      rotate();
      rightTick = window.setInterval(rotate, 6400);
    }, 3000);
    return () => {
      window.clearInterval(leftTick);
      window.clearInterval(rightTick);
      window.clearTimeout(delay);
    };
  }, [playing]);

  const leftReview = REVIEWS[left]!;
  const rightReview = REVIEWS[right]!;

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 z-10 hidden sm:block">
      <AnimatePresence mode="wait">
        <ReviewCard
          key={`l-${leftReview.who}`}
          review={leftReview}
          localLabel={localLabel}
          className="absolute top-[16%] left-0 -translate-x-[38%] lg:-translate-x-[48%]"
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <ReviewCard
          key={`r-${rightReview.who}`}
          review={rightReview}
          localLabel={localLabel}
          className="absolute top-[50%] right-0 translate-x-[38%] lg:translate-x-[52%]"
        />
      </AnimatePresence>
    </div>
  );
}
