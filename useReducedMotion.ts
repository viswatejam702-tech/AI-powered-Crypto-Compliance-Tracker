"use client";

import type { ReactNode } from "react";

interface MobileShellProps {
  children: ReactNode;
  title?: string;
}

/** Device frame + safe areas for mobile preview */
export function MobileShell({ children, title = "Compliance" }: MobileShellProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050608] p-6">
      <div
        data-theme="mobile-fintech-dark"
        className="mobile-fintech relative flex h-[812px] w-[375px] flex-col overflow-hidden rounded-[2rem] border border-[var(--m-border)] bg-[var(--m-surface-base)] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        role="application"
        aria-label="Crypto Compliance Tracker mobile app"
      >
        {/* Status bar */}
        <div
          className="flex shrink-0 items-center justify-between px-[var(--m-screen-inset)] pt-3"
          aria-hidden="true"
        >
          <span
            className="text-[13px] font-medium text-[var(--m-ink-primary)]"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            9:41
          </span>
          <span className="text-[11px] text-[var(--m-ink-tertiary)]">{title}</span>
          <span className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-sm bg-[var(--m-ink-tertiary)]" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[var(--m-ink-tertiary)]" />
            <span className="h-2.5 w-4 rounded-sm bg-[var(--m-ink-secondary)]" />
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>

        {/* Home indicator */}
        <div className="flex shrink-0 justify-center pb-2 pt-1" aria-hidden="true">
          <span className="h-1 w-28 rounded-full bg-[var(--m-ink-tertiary)] opacity-40" />
        </div>
      </div>
    </div>
  );
}
