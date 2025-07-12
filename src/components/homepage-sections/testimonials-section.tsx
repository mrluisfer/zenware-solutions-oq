"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { HomepageSections } from "@/constants/homepage-sections";
import { HomePageTitle } from "./title";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { NumberTicker } from "../magicui/number-ticker";

export function TestimonialsSection() {
  const t = useTranslations("HomePage.TestimonialsSection");

  const testimonials = t.raw("testimonials") as {
    name: string;
    role: string;
    avatar: string;
    content: string;
    rating: number;
    company: string;
  }[];

  const trustIndicators = t.raw("trustIndicators") as Array<{
    value: string;
    label: string;
    symbol?: string;
  }>;

  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  function TestimonialCard({
    avatar,
    name,
    role,
    content,
    rating,
    company,
    id,
  }: (typeof testimonials)[0] & {
    id: number;
  }) {
    const isEven = (id: number) => id % 2 === 0;

    return (
      <figure
        className={cn(
          "relative w-72 h-full cursor-pointer overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group hover:scale-105 px-5 py-6",
          isEven(id) ? "bg-brand-100/90" : "bg-white/80"
        )}
      >
        <div className="flex items-center space-x-4 mb-3">
          <Avatar className="w-12 h-12 ring-2 ring-brand-200">
            <AvatarFallback className="bg-gradient-to-br from-brand-500 to-accent-600 text-white font-semibold">
              {avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <figcaption className="font-semibold text-slate-800">
              {name}
            </figcaption>
            <p className="text-xs text-slate-500">{role}</p>
            <p className="text-xs text-brand-600 font-medium">{company}</p>
          </div>
        </div>
        <div className="flex space-x-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-slate-600 leading-relaxed italic text-sm">
          "{content}"
        </blockquote>
      </figure>
    );
  }

  return (
    <section
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-50 to-accent-50"
      id={HomepageSections.TESTIMONIALS}
    >
      <div className="container mx-auto">
        <HomePageTitle title={t("title")} description={t("description")} />

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-10 gap-3">
          <Marquee pauseOnHover className="[--duration:32s]">
            {firstRow.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.name + idx}
                id={idx}
                {...testimonial}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:38s]">
            {secondRow.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.name + idx}
                id={idx}
                {...testimonial}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-brand-50/70 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-accent-50/70 to-transparent"></div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {trustIndicators.map((indicator, idx) => (
              <div className="text-center group" key={idx}>
                <div className="flex items-center justify-center">
                  <NumberTicker
                    value={parseInt(indicator.value, 10)}
                    decimalPlaces={0}
                    className="text-3xl font-bold text-brand-600 mb-2"
                  >
                    {indicator.value}
                  </NumberTicker>
                  {indicator.symbol && (
                    <span className="font-semibold text-slate-500 group-hover:text-brand-900 transition">
                      {indicator.symbol}
                    </span>
                  )}
                </div>
                <div className="text-sm text-slate-600 group-hover:text-brand-900">
                  {indicator.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
