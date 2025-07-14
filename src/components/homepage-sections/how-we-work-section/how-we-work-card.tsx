import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { Phone, CheckCircle, Wrench, Shield } from "lucide-react";

type HowWeWorkCardProps = {
  id: number;
  step: {
    title: string;
    description: string;
    timelineContent: string;
  };
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const icons = [Phone, CheckCircle, Wrench, Shield];

export const HowWeWorkCard = ({ id, step }: HowWeWorkCardProps) => {
  const Icon = icons[id];

  return (
    <motion.div key={id} variants={fadeInUp}>
      <Card
        className="h-full min-h-[370px] flex flex-col justify-between border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm rounded-3xl group hover:scale-105 gap-0 md:gap-1 xl:gap-6"
        style={{
          boxShadow:
            "0 6px 32px 0 rgb(34 197 94 / 0.06), 0 1.5px 5.5px 0 rgb(20 83 45 / 0.02)",
        }}
      >
        <CardHeader className="text-center pb-4 relative">
          {/* Step Number */}
          <div
            className="hidden xl:flex absolute -top-4 -right-4 w-12 h-12 rounded-2xl items-center justify-center text-white font-bold text-lg shadow-lg"
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
            className="text-lg xl:text-xl font-bold"
            style={{ color: "var(--color-brand-800)" }}
          >
            {step.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-center px-3 xl:px-6">
          <p className="leading-relaxed text-center text-slate-600">
            {step.description}
          </p>
          <div
            className="mt-5 text-xs xl:text-sm font-medium rounded-xl py-2 px-3 shadow-inner"
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
  );
};
