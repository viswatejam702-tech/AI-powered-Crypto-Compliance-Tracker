import { Section } from "@/components/ui/Section";
import { FeatureCard } from "./FeatureCard";
import { LANDING_FEATURES } from "@/lib/landing-content";

export function FeaturesSection() {
  return (
    <Section id="features" ariaLabelledby="features-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="features-heading" className="text-display-sm text-ink">
          Built for compliance teams, not traders
        </h2>
        <p className="mt-4 text-body text-ink-muted">
          Everything you need to monitor regulatory change — without another noisy crypto news feed.
        </p>
      </div>
      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {LANDING_FEATURES.map((feature) => (
          <li key={feature.title}>
            <FeatureCard {...feature} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
