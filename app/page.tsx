import { AdminSection } from "@/components/admin-section";
import { AppShell } from "@/components/app-shell";
import { ChatPanel } from "@/components/chat-panel";
import { DashboardSection } from "@/components/dashboard-section";
import { ExtraIncomeSection } from "@/components/extra-income-section";
import { GoalsSimulationSection } from "@/components/goals-simulation-section";
import { HeroSection } from "@/components/hero-section";
import { OnboardingAuthSection } from "@/components/onboarding-auth-section";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <AppShell>
      <HeroSection />
      <ChatPanel />
      <DashboardSection />
      <ExtraIncomeSection />
      <GoalsSimulationSection />
      <OnboardingAuthSection />
      <PricingSection />
      <AdminSection />
    </AppShell>
  );
}
