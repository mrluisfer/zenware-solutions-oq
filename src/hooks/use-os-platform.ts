import { useEffect, useState } from "react";

export type OSPlatform = "windows" | "mac" | "linux" | "unix" | "other";

function detectOS(): OSPlatform {
  if (typeof window === "undefined") return "other";
  const platform = window.navigator.platform.toLowerCase();
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (platform.startsWith("win") || userAgent.includes("windows")) {
    return "windows";
  }
  if (platform.startsWith("mac") || userAgent.includes("mac")) {
    return "mac";
  }
  if (
    platform.startsWith("linux") ||
    userAgent.includes("linux") ||
    userAgent.includes("x11")
  ) {
    return "linux";
  }
  if (
    userAgent.includes("unix") ||
    userAgent.includes("freebsd") ||
    userAgent.includes("openbsd") ||
    userAgent.includes("sunos")
  ) {
    return "unix";
  }
  return "other";
}

export function useOSPlatform() {
  const [os, setOS] = useState<OSPlatform>("other");

  useEffect(() => {
    setOS(detectOS());
  }, []);

  return os;
}
