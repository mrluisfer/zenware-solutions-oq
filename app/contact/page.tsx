import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - Get Expert Tech Support",
  description:
    "Get in touch with Bambú for professional computer and device maintenance. Request a service or ask us anything - we respond within 2 hours.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
