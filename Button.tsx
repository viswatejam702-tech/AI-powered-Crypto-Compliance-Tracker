import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-raised py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-title text-ink">Crypto Compliance Tracker</p>
          <p className="mt-1 text-caption text-ink-subtle">
            © {new Date().getFullYear()} · Regulatory monitoring for legal teams
          </p>
        </div>
        <ul className="flex flex-wrap gap-6 text-body text-ink-muted">
          <li>
            <Link href="/onboarding" className="hover:text-ink focus-visible:shadow-focus">
              Product
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-ink focus-visible:shadow-focus">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/mobile" className="hover:text-ink focus-visible:shadow-focus">
              Mobile
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
