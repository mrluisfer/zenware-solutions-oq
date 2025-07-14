import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "../../ui/timeline";
import { HowWeWorkCard } from "./how-we-work-card";
import { Steps } from ".";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type HowWeWorkTimelineProps = {
  steps: Array<Steps>;
};

export const HowWeWorkTimeline = ({ steps }: HowWeWorkTimelineProps) => {
  return (
    <Timeline defaultValue={0} orientation="horizontal">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {steps.map((step, id) => {
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
                <TimelineTitle className="sr-only">{step.title}</TimelineTitle>
                <TimelineIndicator
                  className="group-data-[orientation=horizontal]/timeline:top-8"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brand-500), var(--color-accent-500))",
                  }}
                />
              </TimelineHeader>
              <TimelineContent>
                <HowWeWorkCard id={id} step={step} />
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </motion.div>
    </Timeline>
  );
};
