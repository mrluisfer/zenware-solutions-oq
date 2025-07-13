"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Play, ChevronDown } from "lucide-react";
import { HomepageSections } from "@/constants/homepage-sections";
import { Logo } from "../../logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { TryHealthCheckButton } from "../try-health-check-button";
import { useTranslations } from "next-intl";
import { TranslationKeys } from "@/types/translation-keys";
import { Globe } from "../../magicui/globe";
import { COBEOptions } from "cobe";
import { AuroraText } from "../../magicui/aurora-text";
import { IconContainer } from "../../icon-container";
import { globeConfig } from "@/constants/globe-config";
import { HeroGlobe } from "./hero-globe";

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

const brandNameColors = [
  "#16a34a", // brand-600
  "#14b8a6", // accent-500
  "#4ade80", // brand-400
  "#0f766e", // accent-700
];

export function HeroSection() {
  const isMobile = useIsMobile();
  const logoSize = isMobile ? 48 : 80;
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
        <HeroGlobe />

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
            <IconContainer>
              <Logo
                width={logoSize}
                height={logoSize}
                className="text-white absolute"
              />
            </IconContainer>
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
