"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Leaf,
  Shield,
  Clock,
  Users,
  Wrench,
  Smartphone,
  Laptop,
  Monitor,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

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

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
}

export default function BambuLanding() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-emerald-100 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Bambú
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors">
              About
            </a>
            <Button
              variant="ghost"
              onClick={() => setIsContactOpen(true)}
              className="text-slate-600 hover:text-emerald-600"
            >
              Contact
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Leaf className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              Bambú
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Flexible tech care for everyone
          </motion.p>

          <motion.p
            className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Professional computer and device maintenance that grows with your needs. From quick fixes to comprehensive
            care plans, we keep your technology running smoothly.
          </motion.p>

          <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => setIsContactOpen(true)}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple, transparent process designed around your convenience
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Phone,
                title: "Contact Us",
                description:
                  "Reach out via phone, email, or our online form. We respond within 2 hours during business days.",
              },
              {
                icon: CheckCircle,
                title: "Assessment",
                description: "We evaluate your device and provide a clear diagnosis with transparent pricing upfront.",
              },
              {
                icon: Wrench,
                title: "Expert Care",
                description:
                  "Our certified technicians handle your device with precision and care using quality parts.",
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "Every repair comes with our 90-day warranty and ongoing support for peace of mind.",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-3xl"
                  {...scaleOnHover}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Complete Tech Care</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From smartphones to servers, we handle all your technology needs with expertise and care
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Smartphone,
                title: "Mobile Devices",
                description:
                  "Screen repairs, battery replacements, and software troubleshooting for all smartphone and tablet brands.",
              },
              {
                icon: Laptop,
                title: "Laptops & Notebooks",
                description:
                  "Hardware upgrades, virus removal, performance optimization, and comprehensive system maintenance.",
              },
              {
                icon: Monitor,
                title: "Desktop Systems",
                description:
                  "Custom builds, component upgrades, system optimization, and preventive maintenance services.",
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                description:
                  "Most repairs completed within 24-48 hours. Emergency services available for critical business needs.",
              },
              {
                icon: Users,
                title: "Business Solutions",
                description:
                  "Bulk device management, maintenance contracts, and dedicated support for small to medium businesses.",
              },
              {
                icon: Shield,
                title: "Data Protection",
                description:
                  "Secure data handling, backup services, and recovery solutions to keep your information safe.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl"
                  {...scaleOnHover}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real experiences from people who trust us with their technology
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Chen",
                role: "Small Business Owner",
                avatar: "SC",
                content:
                  "Bambú saved my business when our main computer crashed right before tax season. They recovered everything and had us back up in 24 hours. Incredible service!",
                rating: 5,
              },
              {
                name: "Marcus Rodriguez",
                role: "Freelance Designer",
                avatar: "MR",
                content:
                  "I've been using Bambú for all my tech needs for over a year. Their preventive maintenance keeps my equipment running perfectly, and their prices are always fair.",
                rating: 5,
              },
              {
                name: "Emily Watson",
                role: "College Student",
                avatar: "EW",
                content:
                  "My laptop screen cracked the day before finals. Bambú fixed it the same day and even gave me a student discount. They really understand what matters to their customers.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-3xl"
                  {...scaleOnHover}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-800 text-center">Get In Touch</DialogTitle>
            <DialogDescription className="text-center text-slate-600">
              Ready to give your tech the care it deserves? Let's talk!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div className="space-y-4">
              <Input placeholder="Your Name" className="rounded-xl border-slate-200 focus:border-emerald-500" />
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border-slate-200 focus:border-emerald-500"
              />
              <Input placeholder="Phone Number" className="rounded-xl border-slate-200 focus:border-emerald-500" />
              <Textarea
                placeholder="Tell us about your tech needs..."
                className="rounded-xl border-slate-200 focus:border-emerald-500 min-h-[100px]"
              />
            </div>

            <Button
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl py-6"
              onClick={() => setIsContactOpen(false)}
            >
              Send Message
            </Button>

            <div className="text-center space-y-2 pt-4 border-t border-slate-100">
              <p className="text-sm text-slate-500">Or reach us directly:</p>
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-TECH</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Mail className="w-4 h-4" />
                  <span>hello@bambu.tech</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Bambú</span>
            </div>

            <div className="flex items-center space-x-8 text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Serving the Greater Metro Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Bambú Tech Care. All rights reserved. • Flexible tech care for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
