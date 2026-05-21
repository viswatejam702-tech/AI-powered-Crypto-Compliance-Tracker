import { Section } from "@/components/ui/Section";
import { LANDING_STEPS } from "@/lib/landing-content";

export function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      ariaLabelledby="how-heading"
      className="bg-surface-overlay/50"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="how-heading" className="text-display-sm text-ink">
          From rule change to reviewed in minutes
        </h2>
        <p className="mt-4 text-body text-ink-muted">
          Set up once. Stay compliant continuously.
        </p>
      </div>
      <ol className="mt-16 grid gap-8 md:grid-cols-3" role="list">
        {LANDING_STEPS.map((item) => (
          <li key={item.step}>
            <span
              className="font-mono text-caption font-semibold text-brand"
              aria-hidden="true"
            >
              {item.step}
            </span>
            <h3 className="mt-2 text-title text-ink">{item.title}</h3>
            <p className="mt-2 text-body text-ink-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
