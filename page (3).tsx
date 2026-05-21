@tailwind base;
@tailwind components;
@tailwind utilities;

@import "../styles/tokens.css";
@import "../styles/mobile-tokens.css";

@layer base {
  html {
    @apply antialiased;
  }
  body {
    @apply bg-surface font-sans text-body text-ink;
  }
  :focus-visible {
    outline: 2px solid var(--color-focus-ring);
    outline-offset: 2px;
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
}

@layer utilities {
  .motion-safe-transition {
    transition-property: color, background-color, border-color, box-shadow, transform, opacity;
    transition-duration: var(--motion-normal);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (prefers-reduced-motion: reduce) {
    .motion-safe-transition {
      transition: none;
    }
  }
}
