"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookOpenIcon, InfoIcon, Leaf, LifeBuoyIcon, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { navigationLinks } from "./navigation-links";
import { cn } from "@/lib/utils";
import { Logo } from "../logo";
import { useTranslations } from "next-intl";
import { TranslationKeys } from "@/types/translation-keys";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ScrollProgress } from "../magicui/scroll-progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { ShimmerButton } from "../magicui/shimmer-button";
import { RainbowButton } from "../magicui/rainbow-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations<TranslationKeys>("Navbar");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ?
            "bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm"
          : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-0 2xl:px-8 relative">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Logo width={24} height={24} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                  {t("brandName")}
                </span>
              </Link>
            </motion.div>
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-3">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ?
                      <>
                        <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                          {t(link.label)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                          <ul
                            className={cn(
                              link.type === "description" ?
                                "min-w-64"
                              : "min-w-48"
                            )}
                          >
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {/* Display icon if present */}
                                  {link.type === "icon" && "icon" in item && (
                                    <div className="flex items-center gap-2 group">
                                      {item.icon === "BookOpenIcon" && (
                                        <BookOpenIcon
                                          size={16}
                                          className="text-brand-700 group-hover:text-brand-600 opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "LifeBuoyIcon" && (
                                        <LifeBuoyIcon
                                          size={16}
                                          className="text-brand-700 group-hover:text-brand-600 opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "InfoIcon" && (
                                        <InfoIcon
                                          size={16}
                                          className="text-brand-700 group-hover:text-brand-600 opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      <span>{t(item.label)}</span>
                                    </div>
                                  )}

                                  {/* Display label with description if present */}
                                  {
                                    (
                                      link.type === "description" &&
                                      "description" in item
                                    ) ?
                                      <div className="space-y-1">
                                        <div className="font-medium">
                                          {t(item.label)}
                                        </div>
                                        <p className="text-muted-foreground line-clamp-2 text-xs">
                                          {t(item.description)}
                                        </p>
                                      </div>
                                      // Display simple label if not icon or description type
                                    : !link.type ||
                                      (link.type !== "icon" &&
                                        link.type !== "description" && (
                                          <span>{t(item.label)}</span>
                                        ))

                                  }
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    : <NavigationMenuLink
                        href={link.href}
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                      >
                        {t(link.label)}
                      </NavigationMenuLink>
                    }
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <RainbowButton variant="outline" asChild>
              <Link href="/">{t("seeYourOrdersLink")}</Link>
            </RainbowButton>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-6">
                    {navigationLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          pathname === item.href ?
                            "text-brand-600"
                          : "text-slate-600 hover:text-brand-600"
                        }`}
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          {isMobile ? null : (
            <ScrollProgress className="top-[80px] from-[#22c55e] via-[#14b8a6] to-[#4ade80]" />
          )}
        </div>
      </motion.nav>
    </>
  );
}
