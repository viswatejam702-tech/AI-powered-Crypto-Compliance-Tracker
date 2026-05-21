import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/cn";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  cta: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-lg border p-6 motion-safe-transition",
        highlighted
          ? "border-brand bg-surface-raised shadow-elevated ring-1 ring-brand"
          : "border-border bg-surface-raised shadow-card hover:border-border-strong"
      )}
    >
      <h3 className="text-title text-ink">{name}</h3>
      <p className="mt-1 text-caption text-ink-muted">{description}</p>
      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-display-sm text-ink" style={{ fontVariantNumeric: "tabular-nums" }}>
          {price}
        </span>
        {period && (
          <span className="text-body text-ink-subtle">{period}</span>
        )}
      </p>
      <ul className="mt-6 flex flex-1 flex-col gap-3" role="list">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2 text-body text-ink-muted">
            <span className="text-success" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <LinkButton
        href="/onboarding"
        variant={highlighted ? "primary" : "secondary"}
        className="mt-8 w-full"
        fullWidth
      >
        {cta}
      </LinkButton>
    </article>
  );
}
