import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };

const PILL_EASE = [0.22, 1, 0.36, 1] as const;

export function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState("");
  const lockUntil = useRef(0);
  const key = hrefs.join("|");

  useEffect(() => {
    const ids = hrefs.map((h) => h.replace("#", ""));

    const update = () => {
      if (performance.now() < lockUntil.current) return;

      const hero = document.getElementById("top");
      if (hero && hero.getBoundingClientRect().bottom > window.innerHeight - 8) {
        setActive((prev) => (prev === "" ? prev : ""));
        return;
      }

      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 96) current = `#${id}`;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [key]);

  const select = (href: string) => {
    lockUntil.current = performance.now() + 700;
    setActive(href);
  };

  return [active, select] as const;
}

export function MorphicNav({
  links,
  onDark,
  className,
}: {
  links: NavLink[];
  onDark: boolean;
  className?: string;
}) {
  const hrefs = links.map((l) => l.href);
  const [active, select] = useActiveSection(hrefs);
  const reduceMotion = useReducedMotion();

  const pillTransition =
    reduceMotion === true
      ? { duration: 0 }
      : { type: "tween" as const, duration: 0.2, ease: PILL_EASE };

  return (
    <nav className={cn("flex justify-center", className)} aria-label="Primary">
      <LayoutGroup id="site-nav">
        <div
          className={cn(
            "relative flex rounded-sm p-1",
            onDark ? "bg-cream/15" : "bg-sand",
          )}
        >
          {links.map((link) => {
            const isActive = link.href === active;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => select(link.href)}
                className={cn(
                  "relative z-10 inline-flex h-9 items-center px-3.5 whitespace-nowrap",
                  "label-caps transition-colors duration-150 ease-out motion-reduce:transition-none",
                  isActive
                    ? onDark
                      ? "font-semibold text-foam"
                      : "font-semibold text-cream"
                    : onDark
                      ? "text-cream/75 hover:text-cream"
                      : "text-muted hover:text-ink",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="site-nav-pill"
                    className={cn(
                      "absolute inset-0 -z-10 rounded-xs",
                      onDark ? "bg-cream" : "bg-foam",
                    )}
                    transition={pillTransition}
                  />
                ) : null}
                {link.label}
              </a>
            );
          })}
        </div>
      </LayoutGroup>
    </nav>
  );
}
