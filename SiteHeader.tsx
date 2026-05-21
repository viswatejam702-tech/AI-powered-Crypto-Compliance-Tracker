import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { LANDING_CTA } from "@/lib/landing-content";

export function CTASection() {
  return (
    <Section className="pb-28">
      <div className="rounded-lg border border-border bg-gradient-to-br from-brand-muted to-surface-raised px-8 py-16 text-center shadow-card sm:px-16">
        <h2 className="text-display-sm text-ink">{LANDING_CTA.title}</h2>
        <p className="mt-4 text-body text-ink-muted">{LANDING_CTA.subtitle}</p>
        <LinkButton href={LANDING_CTA.href} size="lg" className="mt-8">
          {LANDING_CTA.label}
        </LinkButton>
      </div>
    </Section>
  );
}
