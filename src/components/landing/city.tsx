import { useLanguage } from "@/lib/language";

export function City() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/cali.jpg"
        alt=""
        className="no-outline absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-foam/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <p className="label-caps text-on-photo/70">{t.city.kicker}</p>
        <h2 className="mt-4 max-w-xl text-section font-bold tracking-tight text-on-photo sm:text-display-page">
          {t.city.title}
        </h2>
        <p className="mt-6 max-w-lg text-body leading-relaxed text-on-photo/85">
          {t.city.lede}
        </p>
      </div>
    </section>
  );
}
