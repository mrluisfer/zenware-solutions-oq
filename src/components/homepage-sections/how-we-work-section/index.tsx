"use client";

import { HomePageTitle } from "../title";
import { useTranslations } from "next-intl";
import { TranslationKeys } from "@/types/translation-keys";
import { HowWeWorkTimeline } from "./how-we-work-timeline";
import { HowWeWorkFlex } from "./how-we-work-flex";

export type Steps = {
  title: string;
  description: string;
  timelineContent: string;
  date: string;
};

export function HowWeWorkSection() {
  const t = useTranslations<TranslationKeys>("HomePage.HowWeWorksSection");

  const steps = t.raw("steps") as Array<Steps>;

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

        <div className="hidden xl:block">
          <HowWeWorkTimeline steps={steps} />
        </div>
        <div className="block xl:hidden">
          <HowWeWorkFlex steps={steps} />
        </div>
      </div>
    </section>
  );
}
