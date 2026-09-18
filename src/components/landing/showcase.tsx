import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const screens: Record<string, string> = {
  discover: "/screens/discover.png",
  map: "/screens/map.png",
  saved: "/screens/saved.png",
  how: "/screens/how.png",
};

export function Showcase() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof t.showcase.tabs)[number]["id"]>(
    "discover",
  );
  const current =
    t.showcase.tabs.find((tab) => tab.id === active) ?? t.showcase.tabs[0];

  return (
    <section id="app" className="scroll-mt-20 border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="label-caps text-muted">
            {t.showcase.index} — {t.showcase.eyebrow}
          </p>
          <h2 className="mt-3 text-section font-bold tracking-tight text-ink">
            {t.showcase.title}
          </h2>
          <p className="mt-5 max-w-md text-body leading-relaxed text-muted">
            {t.showcase.lede}
          </p>

          <div
            className="mt-8 flex flex-col gap-1"
            role="tablist"
            aria-label={t.showcase.eyebrow}
          >
            {t.showcase.tabs.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "flex min-h-11 items-start gap-4 rounded-md px-4 py-3 text-left transition-colors",
                  active === tab.id
                    ? "bg-foam text-cream"
                    : "text-ink hover:bg-sand",
                )}
              >
                <span
                  className={cn(
                    "label-caps mt-0.5",
                    active === tab.id ? "text-cream/55" : "text-control",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-headline font-semibold">
                    {tab.label}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block text-footnote",
                      active === tab.id ? "text-cream/70" : "text-muted",
                    )}
                  >
                    {tab.caption}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            key={active}
            src={screens[active]}
            alt={current?.label}
            className="phone-shot no-outline mx-auto h-auto max-h-phone w-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
