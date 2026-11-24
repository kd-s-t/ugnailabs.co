"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  Bird,
  Bitcoin,
  Brain,
  Building2,
  Calendar,
  Clapperboard,
  Drone,
  FileText,
  Film,
  Glasses,
  Home,
  MapPin,
  Mic,
  Radar,
  Radio,
  Scan,
  Search,
  Sparkles,
  Split,
  Store,
  Swords,
  Target,
  Truck,
  Trophy,
  Users,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import type {
  ProductLanding,
  ProductLandingIcon,
} from "@/lib/product-landings";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const icons: Record<ProductLandingIcon, LucideIcon> = {
  shield: Shield,
  split: Split,
  bitcoin: Bitcoin,
  home: Home,
  calendar: Calendar,
  mapPin: MapPin,
  trophy: Trophy,
  users: Users,
  radio: Radio,
  brain: Brain,
  radar: Radar,
  store: Store,
  truck: Truck,
  drone: Drone,
  activity: Activity,
  clapperboard: Clapperboard,
  sparkles: Sparkles,
  film: Film,
  target: Target,
  scan: Scan,
  bird: Bird,
  search: Search,
  building: Building2,
  fileText: FileText,
  glasses: Glasses,
  mic: Mic,
  swords: Swords,
};

type ProductLandingPageProps = {
  product: ProductLanding;
};

export function ProductLandingPage({ product }: ProductLandingPageProps) {
  const reduceMotion = useReducedMotion();
  const backHref = product.section === "lab" ? "/#lab" : "/#products";
  const backLabel = product.section === "lab" ? "Lab" : "Products";
  const accent = product.accent;
  const rgb = product.accentRgb;
  const light = product.tone === "light";
  const ink = light ? "#1a1a1a" : "#e8eef0";
  const muted = light ? "text-black/55" : "text-white/55";
  const soft = light ? "text-black/45" : "text-white/45";
  const body = light ? "text-black/60" : "text-white/60";
  const hairline = light ? "border-black/10" : "border-white/8";
  const hairlineStrong = light ? "border-black/10" : "border-white/10";
  const outlineBtn = light
    ? "h-11 rounded-md border-black/15 bg-white/60 px-5 text-[#1a1a1a] hover:bg-white hover:text-[#1a1a1a]"
    : "h-11 rounded-md border-white/20 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white";
  const ctaInk = light ? "#1a1a1a" : product.bg;

  return (
    <div
      className="relative flex min-h-full flex-col overflow-x-hidden"
      style={{ backgroundColor: product.bg, color: ink }}
    >
      <div className="site-grain opacity-[0.05] mix-blend-soft-light" aria-hidden />

      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b backdrop-blur-xl",
          hairline,
        )}
        style={{ backgroundColor: `${product.bg}bf` }}
      >
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
          <Link
            href={backHref}
            className={cn(
              "inline-flex items-center gap-2 text-sm transition",
              muted,
              light ? "hover:text-black" : "hover:text-white",
            )}
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            {backLabel}
          </Link>
          <Link href="/" className="transition hover:opacity-80">
            <Logo
              className="gap-2"
              markClassName="size-7 sm:size-8"
              inverted={!light}
            />
          </Link>
        </div>
      </nav>

      <header className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-14 sm:pt-16">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(65% 50% at 50% 32%, rgba(${rgb}, 0.22), transparent 55%), radial-gradient(40% 35% at 80% 75%, rgba(${rgb}, 0.08), transparent 50%), linear-gradient(180deg, ${product.bg} 0%, ${product.bg} 100%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(${rgb},0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.07) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 40%, black, transparent)",
          }}
          aria-hidden
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-24">
          <motion.div
            className="relative mx-auto flex w-full justify-center"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[min(100%,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(${rgb},0.4) 0%, transparent 68%)`,
                filter: "blur(28px)",
              }}
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.45, 0.9, 0.45], scale: [0.95, 1.05, 0.95] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                width={product.wideImage ? 380 : 160}
                height={product.wideImage ? 100 : 160}
                priority
                className={cn(
                  "mx-auto block object-contain",
                  product.wideImage
                    ? "h-20 w-auto max-w-[min(100%,20rem)] sm:h-28"
                    : "size-28 rounded-[1.65rem] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:size-40 sm:rounded-[2rem]",
                )}
                style={
                  product.wideImage
                    ? undefined
                    : { boxShadow: `0 0 0 1px rgba(${rgb},0.3)` }
                }
              />
            ) : (
              <div
                className="flex size-28 items-center justify-center rounded-[1.65rem] sm:size-40 sm:rounded-[2rem]"
                style={{
                  background: `linear-gradient(145deg, rgba(${rgb},0.35), rgba(${rgb},0.08))`,
                  boxShadow: `0 0 0 1px rgba(${rgb},0.35)`,
                }}
              >
                <span
                  className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
                  style={{ color: accent }}
                >
                  {product.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </motion.div>

          <motion.p
            className="mt-8 text-xs font-medium tracking-[0.3em] uppercase"
            style={{ color: accent }}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            {product.tag}
          </motion.p>

          <motion.h1
            className="mt-3 max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-tight"
            style={{ color: light ? accent : "#ffffff" }}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease }}
          >
            {product.name}
          </motion.h1>

          {product.meaning ? (
            <motion.p
              className={cn("mt-3 max-w-lg text-sm", soft)}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
            >
              {product.meaning}
            </motion.p>
          ) : null}

          <motion.p
            className={cn(
              "mt-5 max-w-md text-base leading-relaxed sm:text-lg",
              body,
            )}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
          >
            {product.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease }}
          >
            {product.statusLabel ? (
              <span
                className="inline-flex h-11 items-center rounded-md px-4 text-sm font-medium tracking-wide"
                style={{
                  backgroundColor: `rgba(${rgb},0.12)`,
                  color: accent,
                  boxShadow: `inset 0 0 0 1px rgba(${rgb},0.35)`,
                }}
              >
                {product.statusLabel}
              </span>
            ) : null}
            {product.cta ? (
              <Button
                nativeButton={false}
                render={
                  <a
                    href={product.cta.href}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                size="lg"
                className="h-11 rounded-md px-6"
                style={{
                  backgroundColor: accent,
                  color: ctaInk,
                }}
              >
                {product.cta.label}
                <ArrowUpRight data-icon="inline-end" className="size-4" />
              </Button>
            ) : null}
            <Button
              nativeButton={false}
              render={<a href="#features" />}
              variant="outline"
              size="lg"
              className={outlineBtn}
            >
              See what it does
            </Button>
          </motion.div>
        </div>
      </header>

      <section id="features" className={cn("relative border-t", hairline)}>
        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: accent }}
            >
              {product.tag}
            </p>
            <h2
              className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
              style={{ color: ink }}
            >
              {product.description}
            </h2>
          </motion.div>

          <ul
            className={cn(
              "mt-16 grid gap-0 border-t sm:grid-cols-3",
              hairlineStrong,
            )}
          >
            {product.features.map((feature, index) => {
              const Icon = icons[feature.icon];
              return (
                <motion.li
                  key={feature.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease,
                  }}
                  className={cn(
                    "py-8 sm:px-6 sm:py-10",
                    hairlineStrong,
                    index > 0 && "border-t sm:border-t-0 sm:border-l",
                  )}
                >
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-full ring-1"
                    style={{
                      backgroundColor: `rgba(${rgb},0.12)`,
                      color: accent,
                      boxShadow: `inset 0 0 0 1px rgba(${rgb},0.28)`,
                    }}
                  >
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3
                    className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold"
                    style={{ color: ink }}
                  >
                    {feature.title}
                  </h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", muted)}>
                    {feature.detail}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={cn("relative overflow-hidden border-t", hairline)}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(55% 70% at 50% 100%, rgba(${rgb},0.18), transparent 55%)`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p
              className="text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: accent }}
            >
              {product.closingEyebrow}
            </p>
            <h2
              className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
              style={{ color: ink }}
            >
              {product.closingTitle}
            </h2>
            <p
              className={cn(
                "mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-lg",
                muted,
              )}
            >
              {product.closingBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {product.cta ? (
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={product.cta.href}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  size="lg"
                  className="h-11 rounded-md px-6"
                  style={{
                    backgroundColor: accent,
                    color: ctaInk,
                  }}
                >
                  {product.cta.label}
                  <ArrowUpRight data-icon="inline-end" className="size-4" />
                </Button>
              ) : null}
              <Button
                nativeButton={false}
                render={<a href={backHref} />}
                variant="outline"
                size="lg"
                className={outlineBtn}
              >
                <ArrowLeft data-icon="inline-start" className="size-3.5" />
                Back to {backLabel.toLowerCase()}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className={cn("mt-auto border-t py-10 text-center", hairline)}>
        <p className={cn("text-xs", soft)}>
          ©2026 UgnAI Labs Co. · {product.name}
        </p>
      </footer>
    </div>
  );
}
