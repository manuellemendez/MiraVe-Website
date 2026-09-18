import { createFileRoute } from "@tanstack/react-router";
import { Badges } from "@/components/landing/badges";
import { City } from "@/components/landing/city";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Marquee } from "@/components/landing/marquee";
import { Principles } from "@/components/landing/principles";
import { Rotation } from "@/components/landing/rotation";
import { Showcase } from "@/components/landing/showcase";
import { Strip } from "@/components/landing/strip";
import { Waitlist } from "@/components/landing/waitlist";
import { LanguageProvider } from "@/lib/language";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Strip />
        <Rotation />
        <Principles />
        <Showcase />
        <Badges />
        <City />
        <Waitlist />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
