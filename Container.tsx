import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { LANDING_NAV } from "@/lib/landing-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-ink-inverse"
      >
        Skip to main content
      </a>
      <Container as="nav" aria-label="Main" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-title text-ink motion-safe-transition hover:text-brand focus-visible:shadow-focus"
        >
          Compliance<span className="text-brand">Tracker</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {LANDING_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-body text-ink-muted motion-safe-transition hover:text-ink focus-visible:shadow-focus"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/mobile"
            className="hidden text-body text-ink-muted hover:text-ink sm:inline focus-visible:shadow-focus"
          >
            Mobile
          </Link>
          <LinkButton href="/onboarding" size="md">
            Start free
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}
