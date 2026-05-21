interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface-raised p-6 shadow-card motion-safe-transition hover:border-border-strong hover:shadow-elevated">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-muted text-lg text-brand"
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="mt-4 text-title text-ink">{title}</h3>
      <p className="mt-2 text-body text-ink-muted">{description}</p>
    </article>
  );
}
