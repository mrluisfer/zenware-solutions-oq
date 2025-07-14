import { SupportedOS } from "@/constants/supported-os";
import { useEffect, useState } from "react";

// export type OSPlatform = "windows" | "mac" | "linux" | "unix" | "other";
export type OSPlatform =
  | SupportedOS.WINDOWS
  | SupportedOS.MAC
  | SupportedOS.LINUX
  | SupportedOS.UNIX
  | SupportedOS.OTHER;

function detectOS(): OSPlatform {
  if (typeof window === "undefined") return SupportedOS.OTHER;
  const platform = window.navigator.platform.toLowerCase();
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (platform.startsWith("win") || userAgent.includes("windows")) {
    return SupportedOS.WINDOWS;
  }
  if (platform.startsWith("mac") || userAgent.includes("mac")) {
    return SupportedOS.MAC;
  }
  if (
    platform.startsWith("linux") ||
    userAgent.includes("linux") ||
    userAgent.includes("x11")
  ) {
    return SupportedOS.LINUX;
  }
  if (
    userAgent.includes("unix") ||
    userAgent.includes("freebsd") ||
    userAgent.includes("openbsd") ||
    userAgent.includes("sunos")
  ) {
    return SupportedOS.UNIX;
  }
  return SupportedOS.OTHER;
}

export function useOSPlatform() {
  const [os, setOS] = useState<OSPlatform>(SupportedOS.OTHER);

  useEffect(() => {
    setOS(detectOS());
  }, []);

  return os;
}
