"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  CheckCircle,
  Loader2,
  Mail,
  Phone,
  User,
  Smartphone,
  MapPin,
  Clock,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  deviceType: string;
  serviceRequested: string;
  hearAboutUs: string;
}

interface FormErrors {
  [key: string]: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    serviceRequested: "",
    hearAboutUs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.serviceRequested.trim()) {
      newErrors.serviceRequested = "Please describe what you need help with";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      deviceType: "",
      serviceRequested: "",
      hearAboutUs: "",
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent-50">
        <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-brand-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
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
              We've received your service request and will be in touch within 2
              hours during business days. Our team is already reviewing your
              needs to provide the best possible solution.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg text-slate-500">
                Need immediate assistance? Call us at{" "}
                <a
                  href="tel:555-123-8324"
                  className="font-semibold text-brand-600 hover:text-brand-700"
                >
                  (555) 123-TECH
                </a>
              </p>

              <Button
                onClick={resetForm}
                variant="outline"
                className="mt-6 border-brand-200 text-brand-600 hover:bg-brand-50 rounded-2xl px-8 py-6 bg-transparent"
              >
                Submit Another Request
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent-50">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Contact Bambú
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Request a service or ask us anything!
          </motion.p>

          <motion.p
            className="text-lg text-slate-500 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Whether your device needs a quick fix or comprehensive care, we're
            here to help. Tell us what's going on and we'll get back to you with
            a solution.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ready to give your tech the care it deserves? We're here to
                    help with any questions or service needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Phone
                      </h4>
                      <p className="text-slate-600">(555) 123-TECH</p>
                      <p className="text-sm text-slate-500">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Email
                      </h4>
                      <p className="text-slate-600">hello@bambu.tech</p>
                      <p className="text-sm text-slate-500">
                        We respond within 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Service Area
                      </h4>
                      <p className="text-slate-600">Greater Metro Area</p>
                      <p className="text-sm text-slate-500">
                        On-site service available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Turnaround
                      </h4>
                      <p className="text-slate-600">24-48 hours</p>
                      <p className="text-sm text-slate-500">
                        Emergency service available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              {...fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    Service Request Form
                  </CardTitle>
                  <p className="text-slate-600 mt-2">
                    Fill out the details below and we'll take care of the rest
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <Label
                        htmlFor="name"
                        className="text-slate-700 font-medium flex items-center space-x-2"
                      >
                        <User className="w-4 h-4" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                        className={`rounded-2xl border-slate-200 focus:border-brand-500 py-6 ${
                          errors.name ?
                            "border-red-300 focus:border-red-500"
                          : ""
                        }`}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-red-500 text-sm"
                          role="alert"
                        >
                          {errors.name}
                        </p>
                      )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <Label
                        htmlFor="email"
                        className="text-slate-700 font-medium flex items-center space-x-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        className={`rounded-2xl border-slate-200 focus:border-brand-500 py-6 ${
                          errors.email ?
                            "border-red-300 focus:border-red-500"
                          : ""
                        }`}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-500 text-sm"
                          role="alert"
                        >
                          {errors.email}
                        </p>
                      )}
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <Label
                        htmlFor="phone"
                        className="text-slate-700 font-medium flex items-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Phone Number</span>
                        <span className="text-slate-400 text-sm">
                          (optional)
                        </span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="(555) 123-4567"
                        className="rounded-2xl border-slate-200 focus:border-brand-500 py-6"
                      />
                    </motion.div>

                    {/* Device Type */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <Label className="text-slate-700 font-medium flex items-center space-x-2">
                        <Smartphone className="w-4 h-4" />
                        <span>Device Type</span>
                      </Label>
                      <Select
                        value={formData.deviceType}
                        onValueChange={(value) =>
                          handleInputChange("deviceType", value)
                        }
                      >
                        <SelectTrigger className="rounded-2xl border-slate-200 focus:border-brand-500 py-6">
                          <SelectValue placeholder="Select your device type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl">
                          <SelectItem value="laptop">Laptop</SelectItem>
                          <SelectItem value="desktop">
                            Desktop Computer
                          </SelectItem>
                          <SelectItem value="smartphone">Smartphone</SelectItem>
                          <SelectItem value="tablet">Tablet</SelectItem>
                          <SelectItem value="gaming">Gaming Console</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    {/* Service Description */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <Label
                        htmlFor="service"
                        className="text-slate-700 font-medium"
                      >
                        What can we help you with? *
                      </Label>
                      <Textarea
                        id="service"
                        value={formData.serviceRequested}
                        onChange={(e) =>
                          handleInputChange("serviceRequested", e.target.value)
                        }
                        placeholder="Describe your issue, what's not working, or what service you need. The more details you provide, the better we can help!"
                        className={`rounded-2xl border-slate-200 focus:border-brand-500 min-h-[120px] resize-none ${
                          errors.serviceRequested ?
                            "border-red-300 focus:border-red-500"
                          : ""
                        }`}
                        aria-describedby={
                          errors.serviceRequested ? "service-error" : undefined
                        }
                      />
                      {errors.serviceRequested && (
                        <p
                          id="service-error"
                          className="text-red-500 text-sm"
                          role="alert"
                        >
                          {errors.serviceRequested}
                        </p>
                      )}
                    </motion.div>

                    {/* How did you hear about us */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <Label className="text-slate-700 font-medium">
                        How did you hear about us?{" "}
                        <span className="text-slate-400 text-sm">
                          (optional)
                        </span>
                      </Label>
                      <Select
                        value={formData.hearAboutUs}
                        onValueChange={(value) =>
                          handleInputChange("hearAboutUs", value)
                        }
                      >
                        <SelectTrigger className="rounded-2xl border-slate-200 focus:border-brand-500 py-6">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl">
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="friend">
                            Friend or Family
                          </SelectItem>
                          <SelectItem value="review">Online Reviews</SelectItem>
                          <SelectItem value="advertisement">
                            Advertisement
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white rounded-2xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ?
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Request...
                          </>
                        : "Send Service Request"}
                      </Button>
                    </motion.div>
                  </form>

                  {/* Additional Info */}
                  <motion.div
                    className="text-center pt-6 border-t border-slate-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <p className="text-xs text-slate-400">
                      We typically respond within 2 hours during business days.
                      Your information is secure and will never be shared.
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
