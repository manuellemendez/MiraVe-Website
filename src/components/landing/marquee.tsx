import { neighborhoods } from "@/lib/copy";
import { useLanguage } from "@/lib/language";

export function Marquee() {
  const { t } = useLanguage();
  const items = [...neighborhoods, ...t.marquee];

  return (
    <div className="marquee-track overflow-hidden border-y border-mango/25 bg-arena py-3 select-none">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={`${copyIndex}-${item}`} className="inline-flex items-center gap-5 px-5">
                <span className="label-caps text-ink/75">{item}</span>
                <span className="size-1 shrink-0 rounded-full bg-clay/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
