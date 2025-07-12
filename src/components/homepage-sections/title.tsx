import { ReactNode } from "react";
import { motion } from "motion/react";

export const HomePageTitle = ({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-800">
        {title}
      </h2>
      <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed text-slate-600">
        {description}
      </p>
    </motion.div>
  );
};
