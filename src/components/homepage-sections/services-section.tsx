"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Laptop,
  Monitor,
  Clock,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { HomepageSections } from "@/constants/homepage-sections";
import { HomePageTitle } from "./title";
import { TryHealthCheckButton } from "./try-health-check-button";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const icons = [Smartphone, Laptop, Monitor, Clock, Users, Shield];

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

export function ServicesSection() {
  const t = useTranslations("HomePage.ServicesSection");

  const services = t.raw("services") as {
    title: string;
    description: string;
    features: { title: string; content: string }[];
  }[];

  return (
    <section
      id={HomepageSections.SERVICES}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <HomePageTitle title={t("title")} description={t("description")} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="min-h-[440px] max-h-[540px] h-fit border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-50/30 rounded-3xl group hover:scale-105 flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <Accordion type="single" collapsible className="w-full">
                      {service.features.map((feature, featureId) => (
                        <AccordionItem
                          value={`${index}-${featureId}`}
                          key={`${index}-${featureId}`}
                          className="py-2"
                        >
                          <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
                            <span className="flex items-center gap-3">
                              <div
                                className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"
                                aria-hidden="true"
                              />
                              <span>{feature.title}</span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent
                            className="text-muted-foreground ps-7 pb-2"
                            style={{ maxHeight: "7.5rem", overflowY: "auto" }} // ~120px
                          >
                            {feature.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center space-x-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            {t("ctaViewAll")}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <TryHealthCheckButton label={t("ctaHealthCheck")} />
        </motion.div>
      </div>
    </section>
  );
}
