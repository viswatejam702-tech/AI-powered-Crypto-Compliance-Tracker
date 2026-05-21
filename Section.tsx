"use client";

type TabId = "home" | "alerts" | "search" | "settings";

interface MobileBottomNavProps {
  active: TabId;
  alertBadge?: number;
  onChange?: (tab: TabId) => void;
}

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "alerts", label: "Alerts", icon: "!" },
  { id: "search", label: "Search", icon: "⌕" },
  { id: "settings", label: "Settings", icon: "⚙" },
];

export function MobileBottomNav({
  active,
  alertBadge = 0,
  onChange,
}: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="flex shrink-0 border-t border-[var(--m-border)] bg-[var(--m-surface-raised)]"
      style={{ minHeight: "var(--m-bottom-nav)" }}
    >
      <ul className="flex w-full" role="list">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <li key={tab.id} className="flex-1">
              <button
                type="button"
                aria-current={isActive ? "page" : undefined}
                onClick={() => onChange?.(tab.id)}
                className="relative flex min-h-[var(--m-touch-min)] w-full flex-col items-center justify-center gap-[2px] text-[11px] transition-colors duration-[var(--m-motion-fast)]"
                style={{
                  color: isActive ? "var(--m-brand)" : "var(--m-ink-tertiary)",
                }}
              >
                <span className="text-[18px]" aria-hidden="true">
                  {tab.icon}
                </span>
                {tab.label}
                {tab.id === "alerts" && alertBadge > 0 && (
                  <span
                    className="absolute right-[calc(50%-20px)] top-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold text-[var(--m-surface-base)]"
                    style={{
                      background: "var(--m-critical)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                    aria-label={`${alertBadge} unread alerts`}
                  >
                    {alertBadge > 9 ? "9+" : alertBadge}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
