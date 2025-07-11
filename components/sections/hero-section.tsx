"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight, Play } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Logo Animation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-brand-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Leaf className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6" variants={fadeInUp}>
            <span className="bg-gradient-to-r from-brand-600 via-accent-600 to-brand-700 bg-clip-text text-transparent">
              Bambú
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-8 font-medium" variants={fadeInUp}>
            Flexible tech care for everyone
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Professional computer and device maintenance that grows with your needs. From quick fixes to comprehensive
            care plans, we keep your technology running smoothly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" variants={fadeInUp}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-brand-200 text-brand-700 hover:bg-brand-50 px-8 py-6 text-lg rounded-2xl group bg-transparent"
            >
              <Link href="/health-check">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Try Health Check
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-slate-500"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full" />
              <span>90-day warranty on all repairs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full" />
              <span>24-48 hour turnaround</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full" />
              <span>Certified technicians</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
