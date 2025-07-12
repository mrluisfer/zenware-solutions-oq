import { HomepageSections } from "@/constants/homepage-sections";

export const navigationLinks = [
  { href: `/#${HomepageSections.HERO}`, label: "homeLink" },
  { label: "servicesLink", href: `/#${HomepageSections.SERVICES}` },
  {
    label: "featuresLink",
    submenu: true,
    type: "description",
    items: [
      {
        href: `/#${HomepageSections.TESTIMONIALS}`,
        label: "testimonialsLink",
        description: "testimonialsLinkDescription",
      },
      {
        href: "/health-check",
        label: "healthCheckLink",
        description: "healthCheckLinkDescription",
      },
    ],
  },
  // {
  //   label: "Pricing",
  //   submenu: true,
  //   type: "simple",
  //   items: [
  //     { href: "#", label: "Product A" },
  //     { href: "#", label: "Product B" },
  //     { href: "#", label: "Product C" },
  //     { href: "#", label: "Product D" },
  //   ],
  // },
  { label: "contactLink", href: "/contact" },
  { label: "pricingLink", href: "/pricing" },
  // {
  //   label: "aboutLink",
  //   href: "/about",
  //   submenu: true,
  //   type: "icon",
  //   items: [
  //     { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
  //     { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
  //     { href: "#", label: "About Us", icon: "InfoIcon" },
  //   ],
  // },
];
