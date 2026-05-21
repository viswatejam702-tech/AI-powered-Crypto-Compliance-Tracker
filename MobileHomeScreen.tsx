import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { LANDING_HERO } from "@/lib/landing-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border pb-20 pt-16 sm:pb-28 sm:pt-24">
      {/* Vercel-style subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)] opacity-40"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <Badge>{LANDING_HERO.eyebrow}</Badge>
        <h1 className="mx-auto mt-6 max-w-3xl text-display-lg text-ink sm:text-[2.75rem]">
          {LANDING_HERO.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-body text-ink-muted sm:text-lg">
          {LANDING_HERO.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href={LANDING_HERO.primaryCta.href} size="lg">
            {LANDING_HERO.primaryCta.label}
          </LinkButton>
          <LinkButton href={LANDING_HERO.secondaryCta.href} variant="secondary" size="lg">
            {LANDING_HERO.secondaryCta.label}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
