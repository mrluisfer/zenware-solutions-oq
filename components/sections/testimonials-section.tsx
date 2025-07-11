"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Small Business Owner",
    avatar: "SC",
    content:
      "Bambú saved my business when our main computer crashed right before tax season. They recovered everything and had us back up in 24 hours. Incredible service!",
    rating: 5,
    company: "Chen's Accounting Services",
  },
  {
    name: "Marcus Rodriguez",
    role: "Freelance Designer",
    avatar: "MR",
    content:
      "I've been using Bambú for all my tech needs for over a year. Their preventive maintenance keeps my equipment running perfectly, and their prices are always fair.",
    rating: 5,
    company: "Rodriguez Design Studio",
  },
  {
    name: "Emily Watson",
    role: "College Student",
    avatar: "EW",
    content:
      "My laptop screen cracked the day before finals. Bambú fixed it the same day and even gave me a student discount. They really understand what matters to their customers.",
    rating: 5,
    company: "State University",
  },
  {
    name: "David Kim",
    role: "IT Manager",
    avatar: "DK",
    content:
      "We've partnered with Bambú for our company's device maintenance. Their business solutions have saved us time and money while keeping our team productive.",
    rating: 5,
    company: "TechStart Inc.",
  },
  {
    name: "Lisa Thompson",
    role: "Photographer",
    avatar: "LT",
    content:
      "When my camera's memory card corrupted with a wedding shoot on it, Bambú recovered every single photo. They're not just tech experts—they're lifesavers.",
    rating: 5,
    company: "Thompson Photography",
  },
  {
    name: "James Wilson",
    role: "Retired Teacher",
    avatar: "JW",
    content:
      "I was intimidated by technology issues, but the Bambú team explained everything clearly and patiently. They made the whole process stress-free.",
    rating: 5,
    company: "Lincoln Elementary (Retired)",
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

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-50 to-accent-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">What Our Customers Say</h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from people who trust us with their technology
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-3xl group hover:scale-105 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-brand-600" />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-12 h-12 ring-2 ring-brand-200">
                      <AvatarFallback className="bg-gradient-to-br from-brand-500 to-accent-600 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                      <p className="text-xs text-brand-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <blockquote className="text-slate-600 leading-relaxed italic">"{testimonial.content}"</blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">500+</div>
              <div className="text-sm text-slate-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">98%</div>
              <div className="text-sm text-slate-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">24hr</div>
              <div className="text-sm text-slate-600">Avg. Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">5★</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
