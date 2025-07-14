import { motion } from "motion/react";
import { HowWeWorkCard } from "./how-we-work-card";
import { Steps } from ".";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const HowWeWorkFlex = ({ steps }: { steps: Array<Steps> }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {steps.map((step, id) => {
        return (
          <HowWeWorkCard key={step.title.toLowerCase()} id={id} step={step} />
        );
      })}
    </motion.div>
  );
};
