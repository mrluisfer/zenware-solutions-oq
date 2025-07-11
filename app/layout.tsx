import "@/app/polyfills" // 👈 must run first
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Bambú - Flexible Tech Care for Everyone",
    template: "%s | Bambú Tech Care",
  },
  description:
    "Professional computer and device maintenance that grows with your needs. From quick fixes to comprehensive care plans, we keep your technology running smoothly.",
  keywords: ["computer repair", "device maintenance", "tech support", "laptop repair", "smartphone repair"],
  authors: [{ name: "Bambú Tech Care" }],
  creator: "Bambú Tech Care",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bambu.tech",
    title: "Bambú - Flexible Tech Care for Everyone",
    description: "Professional computer and device maintenance that grows with your needs.",
    siteName: "Bambú Tech Care",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambú - Flexible Tech Care for Everyone",
    description: "Professional computer and device maintenance that grows with your needs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
