import Link from "next/link";
import { DashboardEmptyState } from "@/components/dashboard/DashboardEmptyState";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-onboarding px-4 py-12 sm:px-6">
      <Link
        href="/"
        className="text-caption text-ink-muted hover:text-brand focus-visible:shadow-focus"
      >
        ← Home
      </Link>
      <h1 className="mt-4 text-display-sm text-ink">Dashboard</h1>
      <p className="mt-2 text-body text-ink-muted">
        Onboarding complete. Regulatory monitoring will appear here.
      </p>
      <DashboardEmptyState />
    </main>
  );
}
