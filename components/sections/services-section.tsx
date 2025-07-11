"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Laptop, Monitor, Clock, Users, Shield, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Devices",
    description:
      "Screen repairs, battery replacements, and software troubleshooting for all smartphone and tablet brands.",
    features: ["Screen repair", "Battery replacement", "Software fixes", "Water damage recovery"],
  },
  {
    icon: Laptop,
    title: "Laptops & Notebooks",
    description: "Hardware upgrades, virus removal, performance optimization, and comprehensive system maintenance.",
    features: ["Performance tuning", "Virus removal", "Hardware upgrades", "System cleanup"],
  },
  {
    icon: Monitor,
    title: "Desktop Systems",
    description: "Custom builds, component upgrades, system optimization, and preventive maintenance services.",
    features: ["Custom builds", "Component upgrades", "System optimization", "Preventive maintenance"],
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most repairs completed within 24-48 hours. Emergency services available for critical business needs.",
    features: ["24-48 hour service", "Emergency repairs", "Express options", "Status updates"],
  },
  {
    icon: Users,
    title: "Business Solutions",
    description: "Bulk device management, maintenance contracts, and dedicated support for small to medium businesses.",
    features: ["Bulk discounts", "Maintenance contracts", "Priority support", "On-site service"],
  },
  {
    icon: Shield,
    title: "Data Protection",
    description: "Secure data handling, backup services, and recovery solutions to keep your information safe.",
    features: ["Data backup", "Recovery services", "Security audits", "Privacy protection"],
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

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">Complete Tech Care</h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From smartphones to servers, we handle all your technology needs with expertise and care
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-50/30 rounded-3xl group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
