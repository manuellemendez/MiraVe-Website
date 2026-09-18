import { useLanguage } from "@/lib/language";

export function Principles() {
  const { t } = useLanguage();

  return (
    <section id="como" className="scroll-mt-20 border-b border-line bg-blanco">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="label-caps text-muted">
            {t.principles.index} — {t.principles.eyebrow}
          </p>
          <h2 className="mt-3 max-w-md text-section font-bold tracking-tight text-ink">
            {t.principles.title}
          </h2>
          <p className="mt-5 max-w-sm text-body leading-relaxed text-muted">
            {t.principles.lede}
          </p>
        </div>

        <ol className="overflow-hidden rounded-md bg-paper shadow-card">
          {t.principles.items.map((item, i) => (
            <li
              key={item.title}
              className="flex gap-4 border-b border-line px-5 py-6 last:border-b-0 sm:gap-5 sm:px-7 sm:py-7"
            >
              <span className="display mt-0.5 w-8 shrink-0 text-display-tile text-control">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-title3 font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-subheadline leading-relaxed text-muted sm:text-body">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
