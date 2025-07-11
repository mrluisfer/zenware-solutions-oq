"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle, Wrench, Shield } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Reach out via phone, email, or our online form. We respond within 2 hours during business days.",
    step: "01",
  },
  {
    icon: CheckCircle,
    title: "Assessment",
    description: "We evaluate your device and provide a clear diagnosis with transparent pricing upfront.",
    step: "02",
  },
  {
    icon: Wrench,
    title: "Expert Care",
    description: "Our certified technicians handle your device with precision and care using quality parts.",
    step: "03",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every repair comes with our 90-day warranty and ongoing support for peace of mind.",
    step: "04",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">How It Works</h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent process designed around your convenience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-3xl group hover:scale-105">
                <CardHeader className="text-center pb-4 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed text-center">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Flow Connector (Desktop) */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-accent-200 to-brand-200 transform -translate-y-1/2" />
          <div className="flex justify-between items-center">
            {steps.map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-gradient-to-br from-brand-500 to-accent-600 rounded-full shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
