import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Bambú - Flexible Tech Care for Everyone",
  description:
    "Professional computer and device maintenance that grows with your needs. From quick fixes to comprehensive care plans, we keep your technology running smoothly.",
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
