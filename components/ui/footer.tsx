"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Computer Repair", href: "/services/computer-repair" },
    { name: "Mobile Devices", href: "/services/mobile-devices" },
    { name: "Business Solutions", href: "/services/business" },
    { name: "Data Recovery", href: "/services/data-recovery" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Support", href: "/contact" },
    { name: "Service Status", href: "/status" },
    { name: "Warranty Info", href: "/warranty" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">Bambú</span>
            </motion.div>

            <motion.p
              className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Flexible tech care for everyone. Professional computer and device maintenance that grows with your needs.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-brand-400" />
                <span>(555) 123-TECH</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-brand-400" />
                <span>hello@bambu.tech</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-brand-400" />
                <span>Greater Metro Area</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="w-5 h-5 text-brand-400" />
                <span>Mon-Fri 9AM-6PM</span>
              </div>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-brand-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-brand-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-brand-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              className="text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              © 2024 Bambú Tech Care. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-brand-400 transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              className="flex items-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/privacy" className="text-slate-400 hover:text-brand-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-brand-400 transition-colors">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
