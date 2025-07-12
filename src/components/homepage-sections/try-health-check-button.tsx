import Link from "next/link";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { TranslationKeys } from "@/types/translation-keys";

interface TryHealthCheckButtonProps extends ComponentProps<"button"> {
  href?: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
  size?: "icon" | "default" | "sm" | "lg" | null | undefined;
}

export const TryHealthCheckButton = ({
  href = "/health-check",
  label,
  icon = (
    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
  ),
  className = "",
  size,
  ...props
}: TryHealthCheckButtonProps) => {
  return (
    <Button
      asChild
      size={size}
      className={clsx(
        "border-2 border-brand-200 text-brand-700 hover:bg-brand-50 px-8 py-6 text-lg rounded-2xl group bg-transparent",
        className
      )}
      {...props}
    >
      <Link href={href}>
        {icon}
        {label}
      </Link>
    </Button>
  );
};
