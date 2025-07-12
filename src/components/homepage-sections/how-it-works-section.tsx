"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Wrench, Shield } from "lucide-react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "../ui/timeline";
import { HomePageTitle } from "./title";
import { useTranslations } from "next-intl";
import { TranslationKeys } from "@/types/translation-keys";

const icons = [Phone, CheckCircle, Wrench, Shield];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HowItWorksSection() {
  const t = useTranslations<TranslationKeys>("HomePage.HowWeWorksSection");

  const steps = t.raw("steps") as Array<{
    title: string;
    description: string;
    timelineContent: string;
    date: string;
  }>;

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, var(--color-brand-50), var(--color-accent-50) 60%, #fff 100%)",
      }}
    >
      <div className="container mx-auto">
        <HomePageTitle title={t("title")} description={t("description")} />

        <Timeline defaultValue={0} orientation="horizontal">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {steps.map((step, id) => {
              const Icon = icons[id];
              return (
                <TimelineItem
                  key={step.title.toLowerCase()}
                  step={id + 1}
                  className="group-data-[orientation=horizontal]/timeline:mt-0 opacity-85 hover:opacity-100 transition-opacity"
                >
                  <TimelineHeader>
                    <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8" />
                    <TimelineDate
                      className="mb-10 font-semibold"
                      style={{ color: "var(--color-brand-600)" }}
                    >
                      {step.date}
                    </TimelineDate>
                    <TimelineTitle className="sr-only">
                      {step.title}
                    </TimelineTitle>
                    <TimelineIndicator
                      className="group-data-[orientation=horizontal]/timeline:top-8"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-brand-500), var(--color-accent-500))",
                      }}
                    />
                  </TimelineHeader>
                  <TimelineContent>
                    <motion.div key={id} variants={fadeInUp}>
                      <Card
                        className="h-full min-h-[370px] flex flex-col justify-between border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm rounded-3xl group hover:scale-105"
                        style={{
                          boxShadow:
                            "0 6px 32px 0 rgb(34 197 94 / 0.06), 0 1.5px 5.5px 0 rgb(20 83 45 / 0.02)",
                        }}
                      >
                        <CardHeader className="text-center pb-4 relative">
                          {/* Step Number */}
                          <div
                            className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                            style={{
                              background:
                                "linear-gradient(135deg, var(--color-brand-500), var(--color-accent-600))",
                            }}
                          >
                            {`0${id + 1}`}
                          </div>
                          <motion.div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                            style={{
                              background:
                                "linear-gradient(135deg, var(--color-brand-500), var(--color-accent-500))",
                            }}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <CardTitle
                            className="text-xl font-bold"
                            style={{ color: "var(--color-brand-800)" }}
                          >
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-center">
                          <p className="leading-relaxed text-center text-slate-600">
                            {step.description}
                          </p>
                          <div
                            className="mt-5 text-sm font-medium rounded-xl py-2 px-3 shadow-inner"
                            style={{
                              background: "var(--color-brand-50)",
                              color: "var(--color-brand-900)",
                            }}
                          >
                            {step.timelineContent}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </motion.div>
        </Timeline>
      </div>
    </section>
  );
}
