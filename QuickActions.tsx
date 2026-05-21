import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CTASection } from "./CTASection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { LogoBarSection } from "./LogoBarSection";
import { PricingSection } from "./PricingSection";

/** Server-composed landing — content in landing-content.ts */
export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <LogoBarSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
