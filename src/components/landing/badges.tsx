import { Mountain, UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const icons = [Mountain, UtensilsCrossed];
const tints = ["bg-palma-tint text-palma", "bg-mango-tint text-mango"];

export function Badges() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line bg-sand">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="label-caps text-muted">
            {t.badges.index} — {t.badges.eyebrow}
          </p>
          <h2 className="mt-3 text-section font-bold tracking-tight text-ink">
            {t.badges.title}
          </h2>
          <p className="mt-5 max-w-md text-body leading-relaxed text-muted">
            {t.badges.lede}
          </p>
          <ul className="mt-8 space-y-3">
            {t.badges.items.map((item, i) => {
              const Icon = icons[i] ?? Mountain;
              return (
                <li
                  key={item.name}
                  className="flex gap-4 rounded-md bg-paper p-5 shadow-card"
                >
                  <span
                    className={cn(
                      "inline-flex size-11 shrink-0 items-center justify-center rounded-sm",
                      tints[i] ?? "bg-sand text-ink",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="display text-display-tile text-ink">
                      {item.name}
                    </p>
                    <p className="mt-1 text-subheadline leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg shadow-card">
          <img
            src="/table.jpg"
            alt=""
            className="no-outline aspect-4/3 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
