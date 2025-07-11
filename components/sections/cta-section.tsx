"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Calendar, MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-brand-500 to-accent-600 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-16 text-center text-white relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24" />
              </div>

              <div className="relative z-10">
                <motion.h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ready to Get Started?
                </motion.h2>

                <motion.p
                  className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Don't let tech troubles slow you down. Get expert care for your devices today and experience the Bambú
                  difference.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-brand-600 hover:bg-brand-50 px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <Link href="/contact">
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Get Free Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-6 text-lg rounded-2xl group bg-transparent"
                  >
                    <Link href="/health-check">
                      <Calendar className="mr-2 w-5 h-5" />
                      Try Health Check
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">(555) 123-TECH</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/30" />
                  <div className="text-sm">
                    <span className="font-medium">Open:</span> Mon-Fri 9AM-6PM
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/30" />
                  <div className="text-sm">
                    <span className="font-medium">Response:</span> Within 2 hours
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
