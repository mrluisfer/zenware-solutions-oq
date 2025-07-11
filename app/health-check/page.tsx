import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { TechHealthCheck } from "@/components/features/tech-health-check"

export const metadata: Metadata = {
  title: "Tech Health Check - Free Device Diagnostic",
  description:
    "Get a quick assessment of your device's health with our interactive Tech Health Check. Takes less than 2 minutes and provides personalized recommendations.",
}

export default function HealthCheckPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <TechHealthCheck />
      </main>
      <Footer />
    </>
  )
}
