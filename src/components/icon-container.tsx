import { ReactNode } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import clsx from "clsx";

export function IconContainer({
  children,
  className = "",
  logoSize = 56,
}: {
  children?: ReactNode;
  className?: string;
  logoSize?: number;
}) {
  return (
    <NeonGradientCard
      className={clsx(
        "relative w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center mx-auto mb-6 shadow-2xl bg-gradient-to-br from-brand-500 to-accent-600",
        className
      )}
      neonColors={{
        firstColor: "var(--color-brand-500)",
        secondColor: "var(--color-accent-600)",
      }}
    >
      <span className="pointer-events-none z-10 flex items-center justify-center w-full h-full">
        {children ?? (
          <svg width={logoSize} height={logoSize} className="text-white" />
        )}
      </span>
    </NeonGradientCard>
  );
}
