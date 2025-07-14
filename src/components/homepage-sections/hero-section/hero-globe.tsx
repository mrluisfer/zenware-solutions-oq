import { Globe } from "@/components/magicui/globe";
import { globeConfig } from "@/constants/globe-config";
import { SupportedOS } from "@/constants/supported-os";
import { useOSPlatform } from "@/hooks/use-os-platform";
import { COBEOptions } from "cobe";

export const HeroGlobe = () => {
  const os = useOSPlatform();

  if (os === SupportedOS.WINDOWS || os === SupportedOS.OTHER) {
    return null; // For some reason, the globe doesn't render correctly on Windows
  }

  return (
    <Globe
      className="size-[340px] md:size-[420px] lg:size-[540px] xl:size-[800px] -z-10 left-0 opacity-20"
      config={globeConfig as COBEOptions}
    />
  );
};
