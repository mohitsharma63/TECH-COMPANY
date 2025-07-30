import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AwardsSection } from "@/components/awards-section";
import { ServicesSection } from "@/components/services-section";
import { MissionVisionSection } from "@/components/mission-vision-section";
import { StatsSection } from "@/components/stats-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { IndustriesSection } from "@/components/industries-section";
import { TechnologiesSection } from "@/components/technologies-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AwardsSection />
      <ServicesSection />
      <MissionVisionSection />
      <StatsSection />
      <PortfolioSection />
      <IndustriesSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
