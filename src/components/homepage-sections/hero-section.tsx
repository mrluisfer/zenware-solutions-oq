"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Play, ChevronDown } from "lucide-react";
import { HomepageSections } from "@/constants/homepage-sections";
import { Logo } from "../logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { TryHealthCheckButton } from "./try-health-check-button";
import { useTranslations } from "next-intl";
import { TranslationKeys } from "@/types/translation-keys";
import { Globe } from "../magicui/globe";
import { COBEOptions } from "cobe";
import { AuroraText } from "../magicui/aurora-text";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const globeConfig: Omit<COBEOptions, "onRender"> = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [250 / 255, 253 / 255, 244 / 255], // brand-50 (#f0fdf4)
  markerColor: [34 / 255, 197 / 255, 94 / 255], // brand-500 (#22c55e)
  glowColor: [20 / 255, 184 / 255, 166 / 255 / 5], // accent-500 (#14b8a6)
  markers: [
    { location: [19.4326, -99.1332], size: 0.13 }, // Mexico City
    { location: [20.6597, -103.3496], size: 0.07 }, // Guadalajara
    { location: [25.6866, -100.3161], size: 0.06 }, // Monterrey
    { location: [16.7531, -93.1156], size: 0.045 }, // Tuxtla Gtz, Chiapas
    { location: [21.1619, -86.8515], size: 0.045 }, // Cancun
    { location: [19.7008, -101.1844], size: 0.04 }, // Morelia

    // Latin America
    { location: [4.711, -74.0721], size: 0.045 }, // Bogotá
    { location: [-12.0464, -77.0428], size: 0.04 }, // Lima
    { location: [-34.6037, -58.3816], size: 0.045 }, // Buenos Aires
    { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo

    // Some international locations for diversity
    { location: [40.7128, -74.006], size: 0.06 }, // New York
    { location: [48.8566, 2.3522], size: 0.045 }, // Paris
    { location: [35.6895, 139.6917], size: 0.045 }, // Tokio
    { location: [51.5074, -0.1278], size: 0.04 }, // London
  ],
};

const brandNameColors = [
  "#16a34a", // brand-600
  "#14b8a6", // accent-500
  "#4ade80", // brand-400
  "#0f766e", // accent-700
];

export function HeroSection() {
  const isMobile = useIsMobile();
  const logoSize = isMobile ? 48 : 64;
  const t = useTranslations<TranslationKeys>("HomePage.HeroSection");

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-accent-50 overflow-hidden"
      id={HomepageSections.HERO}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 xl:pb-32 relative z-10">
        <Globe
          className="size-[340px] md:size-[420px] lg:size-[540px] xl:size-[800px] -z-10 left-0 opacity-20"
          config={globeConfig as COBEOptions}
        />

        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Logo Animation */}
          <motion.div
            className="mb-8 z-10 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-brand-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Logo
                width={logoSize}
                height={logoSize}
                className="text-white absolute"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="sr-only bg-gradient-to-r from-brand-600 via-accent-600 to-brand-700 bg-clip-text text-transparent">
              {t("brandName")}
            </span>
            <AuroraText
              className="not-sr-only"
              colors={[
                "var(--color-brand-600)",
                "var(--color-accent-500)",
                "var(--color-brand-400)",
                "var(--color-accent-700)",
              ]}
            >
              {t("brandName")}
            </AuroraText>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-8 font-medium"
            variants={fadeInUp}
          >
            {t("subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="/contact">
                {t("getStartedButton")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <TryHealthCheckButton label={t("tryHealthCheck")} />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-slate-500"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full" />
              <span>{t("90DaysWarranty")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full" />
              <span>{t("hourTurnaround")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full" />
              <span>{t("certifiedTechnicians")}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center space-y-[-8px]"
        >
          <ChevronDown className="h-6 w-6 text-slate-400" strokeWidth={2.2} />
          <ChevronDown className="h-6 w-6 text-slate-300" strokeWidth={2.2} />
          <ChevronDown className="h-6 w-6 text-slate-200" strokeWidth={2.2} />
        </motion.div>
      </motion.div>
    </section>
  );
}
