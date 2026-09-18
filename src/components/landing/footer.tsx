import { useLanguage } from "@/lib/language";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-cream/10 bg-foam text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-title2 font-extrabold uppercase tracking-tight">
            {t.footer.mark}
          </p>
          <p className="mt-2 max-w-sm text-footnote text-cream/65">{t.footer.line}</p>
        </div>
        <p className="label-caps text-cream/45">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
