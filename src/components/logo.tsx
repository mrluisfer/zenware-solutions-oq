import coloredLogo from "@/assets/logo.svg";
import lightLogo from "@/assets/logo-light.svg";
import Image from "next/image";

export const Logo = ({
  className,
  light = true,
  width = 24,
  height = 24,
}: {
  className?: string;
  light?: boolean;
  width: number;
  height: number;
}) => {
  const logoSrc = light ? lightLogo : coloredLogo;

  return (
    <Image
      src={logoSrc}
      alt="Bambu"
      className={className}
      width={width}
      height={height}
    />
  );
};
