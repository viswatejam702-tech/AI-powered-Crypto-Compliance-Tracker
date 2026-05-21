import { MobileHomeScreen } from "@/components/mobile/MobileHomeScreen";
import { MobileShell } from "@/components/mobile/MobileShell";

export const metadata = {
  title: "Mobile — Crypto Compliance Tracker",
  description: "Fintech dark theme mobile UI preview",
};

export default function MobilePreviewPage() {
  return (
    <MobileShell title="Compliance">
      <MobileHomeScreen />
    </MobileShell>
  );
}
