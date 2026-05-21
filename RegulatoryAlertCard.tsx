import { Container } from "@/components/ui/Container";
import { LANDING_LOGOS } from "@/lib/landing-content";

export function LogoBarSection() {
  return (
    <section className="border-b border-border py-12" aria-label="Customers">
      <Container>
        <p className="text-center text-caption font-medium uppercase tracking-wider text-ink-subtle">
          Trusted by legal teams at
        </p>
        <ul
          className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
          role="list"
        >
          {LANDING_LOGOS.map((name) => (
            <li
              key={name}
              className="text-body font-medium text-ink-subtle opacity-70"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
