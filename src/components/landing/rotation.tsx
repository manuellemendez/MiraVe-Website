import { Bookmark, Star, Utensils } from "lucide-react";
import { places, rotatePlaces } from "@/lib/copy";
import { useLanguage } from "@/lib/language";

export function Rotation() {
  const { t, lang } = useLanguage();
  const rotation = rotatePlaces(places);

  return (
    <section id="hoy" className="scroll-mt-20 border-b border-line bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-xl">
          <p className="label-caps text-muted">
            {t.rotation.index} — {t.rotation.eyebrow}
          </p>
          <h2 className="mt-3 text-section font-bold tracking-tight text-ink">
            {t.rotation.title}
          </h2>
          <p className="mt-5 text-body leading-relaxed text-muted">
            {t.rotation.lede}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {rotation.map((place, i) => (
            <article
              key={place.name}
              className="relative rounded-lg bg-paper p-5 shadow-card transition-[box-shadow] duration-150 hover:shadow-card-hover sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="label-caps text-control">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {place.rare ? (
                      <span className="inline-flex items-center rounded-pill bg-palma-tint px-2.5 py-1 text-caption1 font-semibold text-palma">
                        {t.rotation.rare}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="display text-display-card text-ink">
                    {place.name}
                  </h3>
                  <p className="mt-2 text-footnote text-muted">
                    {place.closed ? (
                      <>
                        <span className="text-carbon">{t.rotation.closed}</span>
                        {place.cash ? (
                          <>
                            {" · "}
                            <span className="text-mango">{t.rotation.cash}</span>
                          </>
                        ) : null}
                        <br />
                      </>
                    ) : null}
                    {lang === "es" ? place.cuisineEs : place.cuisineEn}
                    {" · "}
                    {place.barrio}
                    {" · "}
                    {place.price}
                  </p>
                </div>
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-clay">
                  <Bookmark className="size-5 fill-clay" />
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-sm bg-sand text-ink">
                    <Utensils className="size-4" />
                  </span>
                  <div>
                    <p className="text-subheadline font-medium text-ink">
                      {lang === "es" ? place.dishEs : place.dishEn}
                    </p>
                    <p className="text-caption1 text-muted">{t.rotation.known}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-sm bg-sand text-ink">
                    <Star className="size-4" />
                  </span>
                  <p className="text-subheadline text-muted">
                    {t.rotation.noReviews}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
