import { useLanguage } from "@/lib/language";

export function Strip() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {t.strip.items.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0"
            >
              <span className="display mt-0.5 shrink-0 text-display-tile text-control">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-headline font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-footnote leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
