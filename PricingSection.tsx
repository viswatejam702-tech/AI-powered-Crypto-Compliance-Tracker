import { LinkButton } from "@/components/ui/LinkButton";

const CHECKLIST = [
  { label: "Connect Slack for critical alerts", done: false },
  { label: "Review your first regulatory brief", done: false },
  { label: "Invite a colleague from legal", done: false },
] as const;

export function DashboardEmptyState() {
  return (
    <div className="mt-8 rounded-lg border border-dashed border-border bg-surface-raised p-8 text-center shadow-card">
      <p className="text-title text-ink">Your monitoring feed is warming up</p>
      <p className="mx-auto mt-2 max-w-md text-body text-ink-muted">
        We&apos;re indexing sources for your jurisdictions. Sample alerts will appear
        within 24 hours — or preview the mobile experience now.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <LinkButton href="/mobile" variant="primary">
          Preview mobile app
        </LinkButton>
        <LinkButton href="/" variant="secondary">
          Back to home
        </LinkButton>
      </div>
      <ul className="mx-auto mt-8 max-w-sm text-left" role="list" aria-label="Setup checklist">
        {CHECKLIST.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 border-t border-border py-3 text-body text-ink-muted first:border-t-0"
          >
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-caption"
              aria-hidden="true"
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
