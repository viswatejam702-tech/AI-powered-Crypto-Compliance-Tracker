"use client";

export type AlertSeverity = "info" | "attention" | "critical";

export interface RegulatoryAlert {
  id: string;
  title: string;
  jurisdiction: string;
  regulationId: string;
  relativeTime: string;
  severity: AlertSeverity;
  dueLabel?: string;
}

const severityStyles: Record<
  AlertSeverity,
  { rail: string; chipBg: string; chipText: string }
> = {
  info: {
    rail: "var(--m-info)",
    chipBg: "var(--m-info-dim)",
    chipText: "var(--m-info)",
  },
  attention: {
    rail: "var(--m-attention)",
    chipBg: "var(--m-attention-dim)",
    chipText: "var(--m-attention)",
  },
  critical: {
    rail: "var(--m-critical)",
    chipBg: "var(--m-critical-dim)",
    chipText: "var(--m-critical)",
  },
};

interface RegulatoryAlertCardProps {
  alert: RegulatoryAlert;
  onAcknowledge?: (id: string) => void;
}

export function RegulatoryAlertCard({ alert, onAcknowledge }: RegulatoryAlertCardProps) {
  const s = severityStyles[alert.severity];

  return (
    <article
      className="relative flex min-h-[56px] gap-[var(--m-space-2)] rounded-[var(--m-radius-md)] border border-[var(--m-border-subtle)] bg-[var(--m-surface-raised)] p-[var(--m-space-2)] pl-[var(--m-space-3)]"
      aria-labelledby={`alert-title-${alert.id}`}
    >
      <span
        className="absolute left-0 top-[var(--m-space-2)] bottom-[var(--m-space-2)] w-1 rounded-r-full"
        style={{ background: s.rail }}
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-[var(--m-space-1)]">
          <span
            className="rounded-[var(--m-radius-sm)] px-[var(--m-space-1)] py-[var(--m-space-0-5)] text-[11px] font-semibold uppercase tracking-wide"
            style={{ background: s.chipBg, color: s.chipText }}
          >
            {alert.jurisdiction}
          </span>
          <span
            className="font-[family-name:var(--m-font-mono)] text-[var(--m-text-mono)] leading-[var(--m-leading-mono)] text-[var(--m-ink-tertiary)]"
          >
            {alert.regulationId}
          </span>
          <time
            className="ml-auto text-[var(--m-text-caption)] text-[var(--m-ink-tertiary)]"
            style={{ fontVariantNumeric: "tabular-nums" }}
            dateTime={alert.relativeTime}
          >
            {alert.relativeTime}
          </time>
        </div>
        <h3
          id={`alert-title-${alert.id}`}
          className="mt-[var(--m-space-1)] line-clamp-2 text-[var(--m-text-body)] font-medium leading-[var(--m-leading-body)] text-[var(--m-ink-primary)]"
        >
          {alert.title}
        </h3>
        {alert.dueLabel && (
          <p className="mt-[var(--m-space-0-5)] text-[var(--m-text-caption)] text-[var(--m-attention)]">
            {alert.dueLabel}
          </p>
        )}
        {onAcknowledge && (
          <button
            type="button"
            onClick={() => onAcknowledge(alert.id)}
            className="mt-[var(--m-space-2)] min-h-[var(--m-touch-min)] w-full rounded-[var(--m-radius-sm)] bg-[var(--m-brand-dim)] text-[var(--m-text-body)] font-medium text-[var(--m-brand)] transition-colors duration-[var(--m-motion-fast)] active:opacity-80"
          >
            Mark reviewed
          </button>
        )}
      </div>
    </article>
  );
}
