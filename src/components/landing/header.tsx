import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MorphicNav, useActiveSection } from "@/components/landing/morphic-nav";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onDark = !scrolled;

  const links = [
    { href: "#hoy", label: t.nav.eat },
    { href: "#como", label: t.nav.how },
    { href: "#app", label: t.nav.app },
    { href: "#lista", label: t.nav.list },
  ];
  const [active] = useActiveSection(links.map((l) => l.href));

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-10% 0px 0px 0px" },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200",
        onDark
          ? "bg-foam/90 text-cream shadow-nav-dark backdrop-blur-md"
          : "bg-blanco/90 text-ink shadow-nav backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex min-h-11 items-center gap-2.5">
          <img
            src="/logo.jpg"
            alt=""
            className="no-outline size-9 rounded-xs sm:size-10"
          />
          <span
            className={cn(
              "font-display text-lg font-extrabold uppercase tracking-tight sm:text-xl",
              onDark ? "text-cream" : "text-ink",
            )}
          >
            Mira Ve
          </span>
        </a>

        <MorphicNav links={links} onDark={onDark} className="hidden md:flex" />

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex rounded-pill p-1",
              onDark ? "bg-cream/10" : "bg-sand",
            )}
            role="group"
            aria-label="Language"
          >
            {(["es", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "inline-flex h-8 min-w-10 items-center justify-center rounded-pill px-2.5 text-caption1 font-semibold tracking-wide transition-colors",
                  lang === code
                    ? onDark
                      ? "bg-cream text-foam"
                      : "bg-foam text-cream"
                    : onDark
                      ? "text-cream/70 hover:text-cream"
                      : "text-muted hover:text-ink",
                )}
                aria-pressed={lang === code}
              >
                {t.lang[code]}
              </button>
            ))}
          </div>
          <Button
            asChild
            size="sm"
            variant={onDark ? "inverse" : "foam"}
            className="hidden sm:inline-flex"
          >
            <a href="#lista">{t.nav.cta}</a>
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-pill md:hidden",
              onDark ? "text-cream" : "text-ink",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          className={cn(
            "border-t px-4 py-3 md:hidden",
            onDark ? "border-cream/10" : "border-line",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? "location" : undefined}
                className={cn(
                  "inline-flex h-11 items-center rounded-sm px-3 text-headline font-medium",
                  onDark ? "text-cream" : "text-ink",
                  active === link.href && "font-semibold",
                  active === link.href && (onDark ? "bg-cream/10" : "bg-sand"),
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              variant={onDark ? "inverse" : "foam"}
              className="mt-2"
            >
              <a href="#lista" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
