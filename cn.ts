"use client";

interface QuickAction {
  id: string;
  label: string;
  icon: string;
}

const DEFAULT_ACTIONS: QuickAction[] = [
  { id: "search", label: "Search rules", icon: "⌕" },
  { id: "export", label: "Audit log", icon: "⎘" },
  { id: "jurisdictions", label: "Regions", icon: "◉" },
  { id: "team", label: "Team", icon: "◎" },
];

interface QuickActionsProps {
  actions?: QuickAction[];
}

/** Horizontal thumb-scroll — fintech pattern for secondary tasks */
export function QuickActions({ actions = DEFAULT_ACTIONS }: QuickActionsProps) {
  return (
    <section aria-label="Quick actions" className="mt-[var(--m-space-3)]">
      <h2 className="mb-[var(--m-space-1)] px-[var(--m-screen-inset)] text-[var(--m-text-caption)] font-medium uppercase tracking-wider text-[var(--m-ink-tertiary)]">
        Quick actions
      </h2>
      <ul
        className="flex gap-[var(--m-space-1)] overflow-x-auto px-[var(--m-screen-inset)] pb-[var(--m-space-0-5)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
      >
        {actions.map((action) => (
          <li key={action.id} className="shrink-0">
            <button
              type="button"
              className="flex min-h-[var(--m-touch-min)] min-w-[104px] flex-col items-center justify-center gap-[var(--m-space-0-5)] rounded-[var(--m-radius-md)] border border-[var(--m-border)] bg-[var(--m-surface-elevated)] px-[var(--m-space-2)] text-[var(--m-text-caption)] text-[var(--m-ink-secondary)] transition-colors duration-[var(--m-motion-fast)] active:bg-[var(--m-surface-overlay)]"
            >
              <span className="text-lg text-[var(--m-brand)]" aria-hidden="true">
                {action.icon}
              </span>
              {action.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
