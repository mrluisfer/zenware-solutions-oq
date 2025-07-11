"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Leaf, ArrowLeft, CheckCircle, Loader2, Mail, Phone, User, Smartphone, MessageSquare } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 300 },
}

const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400 },
}

interface FormData {
  name: string
  email: string
  phone: string
  deviceType: string
  serviceRequested: string
  hearAboutUs: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    serviceRequested: "",
    hearAboutUs: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.serviceRequested.trim()) {
      newErrors.serviceRequested = "Please describe what you need help with"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Navigation */}
        <motion.nav
          className="w-full bg-white/80 backdrop-blur-md border-b border-emerald-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6 py-4 flex items-center">
            <motion.button
              className="flex items-center space-x-3 text-slate-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsSubmitted(false)}
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to form</span>
            </motion.button>
          </div>
        </motion.nav>

        {/* Success Message */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Thank You!
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              We've received your service request and will be in touch within 2 hours during business days. Our team is
              already reviewing your needs to provide the best possible solution.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg text-slate-500">
                Need immediate assistance? Call us at{" "}
                <span className="font-semibold text-emerald-600">(555) 123-TECH</span>
              </p>

              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    deviceType: "",
                    serviceRequested: "",
                    hearAboutUs: "",
                  })
                }}
                variant="outline"
                className="mt-6 border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-2xl px-8 py-6"
                {...buttonHover}
              >
                Submit Another Request
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <motion.nav
        className="w-full bg-white/80 backdrop-blur-md border-b border-emerald-100"
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

          <motion.a
            href="/"
            className="text-slate-600 hover:text-emerald-600 transition-colors flex items-center space-x-2"
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">Contact Bambú</h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Request a service or ask us anything!
          </motion.p>

          <motion.p className="text-lg text-slate-500 max-w-2xl mx-auto" {...fadeInUp} transition={{ delay: 0.4 }}>
            Whether your device needs a quick fix or comprehensive care, we're here to help. Tell us what's going on and
            we'll get back to you with a solution.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl" {...scaleOnHover}>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-slate-800">Service Request Form</CardTitle>
                <p className="text-slate-600 mt-2">Fill out the details below and we'll take care of the rest</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Label htmlFor="name" className="text-slate-700 font-medium flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Full Name *</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className={`rounded-2xl border-slate-200 focus:border-emerald-500 py-6 ${
                        errors.name ? "border-red-300 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Label htmlFor="email" className="text-slate-700 font-medium flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className={`rounded-2xl border-slate-200 focus:border-emerald-500 py-6 ${
                        errors.email ? "border-red-300 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <Label htmlFor="phone" className="text-slate-700 font-medium flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Phone Number</span>
                      <span className="text-slate-400 text-sm">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="rounded-2xl border-slate-200 focus:border-emerald-500 py-6"
                    />
                  </motion.div>

                  {/* Device Type */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <Label className="text-slate-700 font-medium flex items-center space-x-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Device Type</span>
                    </Label>
                    <Select
                      value={formData.deviceType}
                      onValueChange={(value) => handleInputChange("deviceType", value)}
                    >
                      <SelectTrigger className="rounded-2xl border-slate-200 focus:border-emerald-500 py-6">
                        <SelectValue placeholder="Select your device type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="desktop">Desktop Computer</SelectItem>
                        <SelectItem value="smartphone">Smartphone</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  {/* Service Description */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <Label htmlFor="service" className="text-slate-700 font-medium">
                      What can we help you with? *
                    </Label>
                    <Textarea
                      id="service"
                      value={formData.serviceRequested}
                      onChange={(e) => handleInputChange("serviceRequested", e.target.value)}
                      placeholder="Describe your issue, what's not working, or what service you need. The more details you provide, the better we can help!"
                      className={`rounded-2xl border-slate-200 focus:border-emerald-500 min-h-[120px] resize-none ${
                        errors.serviceRequested ? "border-red-300 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.serviceRequested && <p className="text-red-500 text-sm">{errors.serviceRequested}</p>}
                  </motion.div>

                  {/* How did you hear about us */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <Label className="text-slate-700 font-medium">
                      How did you hear about us? <span className="text-slate-400 text-sm">(optional)</span>
                    </Label>
                    <Select
                      value={formData.hearAboutUs}
                      onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                    >
                      <SelectTrigger className="rounded-2xl border-slate-200 focus:border-emerald-500 py-6">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="friend">Friend or Family</SelectItem>
                        <SelectItem value="review">Online Reviews</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      {...buttonHover}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        "Send Service Request"
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* Contact Info */}
                <motion.div
                  className="text-center pt-6 border-t border-slate-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <p className="text-sm text-slate-500 mb-3">Need immediate help? We're here for you:</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">(555) 123-TECH</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Mail className="w-4 h-4" />
                      <span>hello@bambu.tech</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-3">
                    We typically respond within 2 hours during business days
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
