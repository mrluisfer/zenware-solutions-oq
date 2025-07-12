import { useTranslations } from "next-intl";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/homepage-sections/hero-section";
import { HowItWorksSection } from "@/components/homepage-sections/how-it-works-section";
import { ServicesSection } from "@/components/homepage-sections/services-section";
import { TestimonialsSection } from "@/components/homepage-sections/testimonials-section";
import { CTASection } from "@/components/homepage-sections/cta-section";
import { Footer } from "@/components/homepage-sections/footer";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function HomePage() {
  const t = useTranslations("HomePage.HeroSection");
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
