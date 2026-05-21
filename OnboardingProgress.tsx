import { Section } from "@/components/ui/Section";
import { PricingCard } from "./PricingCard";
import { LANDING_PRICING } from "@/lib/landing-content";

export function PricingSection() {
  return (
    <Section id="pricing" ariaLabelledby="pricing-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="pricing-heading" className="text-display-sm text-ink">
          Plans that scale with your jurisdictions
        </h2>
        <p className="mt-4 text-body text-ink-muted">
          Transparent pricing for growing legal teams. All plans include a 14-day trial.
        </p>
      </div>
      <ul className="mt-16 grid gap-8 lg:grid-cols-3" role="list">
        {LANDING_PRICING.map((tier) => (
          <li key={tier.name}>
            <PricingCard {...tier} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
