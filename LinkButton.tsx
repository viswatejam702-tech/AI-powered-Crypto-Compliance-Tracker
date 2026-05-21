"use client";

interface ComplianceStatusHeroProps {
  score: number;
  pendingReview: number;
  jurisdictionsMonitored: number;
}

/** Industry pattern: compliance pulse — one hero metric, earned urgency */
export function ComplianceStatusHero({
  score,
  pendingReview,
  jurisdictionsMonitored,
}: ComplianceStatusHeroProps) {
  const statusLabel =
    score >= 90 ? "Healthy" : score >= 70 ? "Attention needed" : "Review required";
  const statusColor =
    score >= 90
      ? "var(--m-success)"
      : score >= 70
        ? "var(--m-attention)"
        : "var(--m-critical)";

  return (
    <section
      aria-labelledby="compliance-pulse-heading"
      className="mx-[var(--m-screen-inset)] rounded-[var(--m-radius-lg)] border border-[var(--m-border)] bg-[var(--m-surface-raised)] p-[var(--m-space-2)]"
      style={{ boxShadow: "var(--m-glow-brand)" }}
    >
      <p
        id="compliance-pulse-heading"
        className="text-[var(--m-text-caption)] leading-[var(--m-leading-caption)] text-[var(--m-ink-tertiary)]"
      >
        Compliance pulse
      </p>
      <div className="mt-[var(--m-space-1)] flex items-end justify-between gap-[var(--m-space-2)]">
        <div>
          <p
            className="font-semibold text-[var(--m-text-display)] leading-[var(--m-leading-display)] text-[var(--m-ink-primary)]"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {score}
            <span className="text-[var(--m-text-title)] font-normal text-[var(--m-ink-secondary)]">
              /100
            </span>
          </p>
          <p
            className="mt-[var(--m-space-0-5)] text-[var(--m-text-caption)] font-medium"
            style={{ color: statusColor }}
          >
            {statusLabel}
          </p>
        </div>
        <div className="flex flex-col items-end gap-[var(--m-space-0-5)] text-right">
          <span
            className="rounded-[var(--m-radius-full)] px-[var(--m-space-1)] py-[var(--m-space-0-5)] text-[var(--m-text-caption)] font-medium"
            style={{
              background: pendingReview > 0 ? "var(--m-attention-dim)" : "var(--m-success-dim)",
              color: pendingReview > 0 ? "var(--m-attention)" : "var(--m-success)",
            }}
          >
            {pendingReview} to review
          </span>
          <span className="text-[var(--m-text-caption)] text-[var(--m-ink-tertiary)]">
            {jurisdictionsMonitored} jurisdictions
          </span>
        </div>
      </div>
    </section>
  );
}
