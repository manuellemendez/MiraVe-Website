import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { neighborhoods } from "@/lib/copy";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mira-ve-waitlist";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readList(): unknown[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const fieldClass =
  "mt-2 h-14 w-full rounded-sm bg-sand px-4 text-body text-ink outline-none placeholder:text-control focus:outline-2 focus:outline-offset-2 focus:outline-foam";

export function Waitlist() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [barrio, setBarrio] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validEmail(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    setSending(true);
    const entry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      barrio,
      at: new Date().toISOString(),
    };
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...readList(), entry]),
    );
    window.setTimeout(() => {
      setSending(false);
      setDone(true);
    }, 400);
  }

  return (
    <section id="lista" className="scroll-mt-20 bg-foam text-cream">
      <div className="relative overflow-hidden">
        <div className="hero-grain pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="label-caps text-cream/55">{t.waitlist.eyebrow}</p>
            <h2 className="mt-3 text-section font-bold tracking-tight text-cream">
              {t.waitlist.title}
            </h2>
            <p className="mt-5 max-w-md text-body leading-relaxed text-cream/65">
              {t.waitlist.lede}
            </p>
          </div>

          {done ? (
            <div
              className="rounded-lg bg-paper p-8 text-ink shadow-card"
              role="status"
              aria-live="polite"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-foam text-cream">
                <Check className="size-6" />
              </span>
              <h3 className="mt-5 text-title1 font-bold tracking-tight text-ink">
                {t.waitlist.successTitle}
              </h3>
              <p className="mt-3 text-muted">{t.waitlist.successBody}</p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setDone(false);
                  setName("");
                  setEmail("");
                  setBarrio("");
                }}
              >
                {t.waitlist.another}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-lg bg-paper p-6 text-ink shadow-card sm:p-8"
            >
              <label className="block text-footnote font-medium text-muted">
                {t.waitlist.name}
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.waitlist.namePh}
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="mt-4 block text-footnote font-medium text-muted">
                {t.waitlist.email}
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false);
                  }}
                  placeholder={t.waitlist.emailPh}
                  type="email"
                  required
                  autoComplete="email"
                  className={cn(fieldClass, error && "outline-2 outline-alert")}
                />
              </label>
              <label className="mt-4 block text-footnote font-medium text-muted">
                {t.waitlist.barrio}
                <select
                  value={barrio}
                  onChange={(e) => setBarrio(e.target.value)}
                  className={fieldClass}
                >
                  <option value="">{t.waitlist.barrioPh}</option>
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              {error ? (
                <p className="mt-3 text-footnote text-alert">{t.waitlist.error}</p>
              ) : null}
              <Button type="submit" size="lg" className="mt-6 w-full" disabled={sending}>
                {sending ? t.waitlist.sending : t.waitlist.submit}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
