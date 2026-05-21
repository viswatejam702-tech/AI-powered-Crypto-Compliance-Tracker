"use client";

import { useState } from "react";
import { ComplianceStatusHero } from "./ComplianceStatusHero";
import { MobileBottomNav } from "./MobileBottomNav";
import { QuickActions } from "./QuickActions";
import {
  RegulatoryAlertCard,
  type RegulatoryAlert,
} from "./RegulatoryAlertCard";

const SAMPLE_ALERTS: RegulatoryAlert[] = [
  {
    id: "1",
    title: "SEC staff guidance update on crypto asset custody for broker-dealers",
    jurisdiction: "US",
    regulationId: "SEC-2024-014",
    relativeTime: "2h ago",
    severity: "attention",
    dueLabel: "Review by May 28",
  },
  {
    id: "2",
    title: "MiCA implementing technical standards — stablecoin reserve requirements",
    jurisdiction: "EU",
    regulationId: "EU-MiCA-RTS",
    relativeTime: "5h ago",
    severity: "info",
  },
  {
    id: "3",
    title: "FCA final notice: enforcement action framework for crypto ATM operators",
    jurisdiction: "UK",
    regulationId: "FCA-ENF-09",
    relativeTime: "1d ago",
    severity: "critical",
    dueLabel: "Immediate legal review",
  },
];

export function MobileHomeScreen() {
  const [alerts, setAlerts] = useState(SAMPLE_ALERTS);
  const [activeTab, setActiveTab] = useState<"home" | "alerts" | "search" | "settings">("home");

  const handleAcknowledge = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <>
      <header className="shrink-0 px-[var(--m-screen-inset)] pb-[var(--m-space-2)] pt-[var(--m-space-1)]">
        <p className="text-[var(--m-text-caption)] text-[var(--m-ink-tertiary)]">
          Good morning
        </p>
        <h1 className="text-[var(--m-text-display)] font-semibold leading-[var(--m-leading-display)] text-[var(--m-ink-primary)]">
          Compliance
        </h1>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto pb-[var(--m-space-2)]">
        <ComplianceStatusHero
          score={84}
          pendingReview={alerts.length}
          jurisdictionsMonitored={5}
        />

        <QuickActions />

        <section
          aria-labelledby="recent-alerts-heading"
          className="mt-[var(--m-space-3)] px-[var(--m-screen-inset)]"
        >
          <div className="mb-[var(--m-space-2)] flex items-center justify-between">
            <h2
              id="recent-alerts-heading"
              className="text-[var(--m-text-title)] font-semibold leading-[var(--m-leading-title)] text-[var(--m-ink-primary)]"
            >
              Needs review
            </h2>
            <span
              className="text-[var(--m-text-caption)] text-[var(--m-ink-tertiary)]"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {alerts.length} items
            </span>
          </div>
          <ul className="flex flex-col gap-[var(--m-space-1)]" role="list">
            {alerts.map((alert) => (
              <li key={alert.id}>
                <RegulatoryAlertCard
                  alert={alert}
                  onAcknowledge={handleAcknowledge}
                />
              </li>
            ))}
          </ul>
          {alerts.length === 0 && (
            <p className="rounded-[var(--m-radius-md)] border border-dashed border-[var(--m-border)] py-[var(--m-space-4)] text-center text-[var(--m-text-body)] text-[var(--m-ink-secondary)]">
              All caught up. We&apos;ll notify you when rules change.
            </p>
          )}
        </section>

        {/* Secure action reassurance — emotional trust */}
        <p className="mx-[var(--m-screen-inset)] mt-[var(--m-space-3)] flex items-center justify-center gap-[var(--m-space-1)] text-[var(--m-text-caption)] text-[var(--m-ink-tertiary)]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden="true"
            className="shrink-0 opacity-70"
          >
            <path d="M3 5V3.5a3 3 0 116 0V5h1v5H2V5h1zm1 0h4V3.5a2 2 0 10-4 0V5z" />
          </svg>
          <span>Acknowledgments are encrypted and audit-logged</span>
        </p>
      </div>

      <MobileBottomNav
        active={activeTab}
        alertBadge={alerts.length}
        onChange={setActiveTab}
      />
    </>
  );
}
