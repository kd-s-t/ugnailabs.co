"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, FlaskConical, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { ContactDialog } from "@/components/contact-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { ProductList } from "@/components/product-list";
import {
  GithubIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "@/components/social-icons";
import { experiments } from "@/lib/experiments";
import { products } from "@/lib/products";
import { services } from "@/lib/services";
import { socialLinks } from "@/lib/social";
import { team } from "@/lib/team";
import { cn } from "@/lib/utils";

const socialIcon = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  "Stack Overflow": StackOverflowIcon,
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
}

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const [contactOpen, setContactOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden">
      <div className="site-grain" aria-hidden />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />

      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/40 bg-[rgba(238,243,246,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
          <a href="#" className="transition hover:opacity-80">
            <Logo className="gap-2" markClassName="size-7 sm:size-8" />
          </a>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              nativeButton={false}
              render={<a href="#services" />}
              variant="ghost"
              size="sm"
              className="rounded-md text-muted-foreground"
            >
              Services
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#products" />}
              variant="ghost"
              size="sm"
              className="hidden rounded-md text-muted-foreground sm:inline-flex"
            >
              Products
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#lab" />}
              variant="ghost"
              size="sm"
              className="hidden rounded-md text-muted-foreground md:inline-flex"
            >
              <FlaskConical data-icon="inline-start" className="size-3.5" />
              Lab
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#crew" />}
              variant="ghost"
              size="sm"
              className="hidden rounded-md text-muted-foreground lg:inline-flex"
            >
              Crew
            </Button>
            <Button
              size="sm"
              className="ml-1 rounded-md"
              onClick={() => setContactOpen(true)}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      <header
        ref={heroRef}
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-background pb-16 pt-28 sm:items-center sm:pb-0 sm:pt-16"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--mesh)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18,22,28,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,22,28,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 35% 45%, black, transparent)",
          }}
          aria-hidden
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="mx-auto w-full max-w-6xl px-5 sm:px-8"
        >
          <motion.div
            className="accent-line h-1 w-28 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal sm:w-36"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease }}
            aria-hidden
          />

          <motion.h1
            className="mt-6 max-w-[15ch] font-[family-name:var(--font-display)] text-[clamp(2.1rem,5.6vw,4.1rem)] font-semibold leading-[1.05] tracking-tight text-brand-ink"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
          >
            Software that connects people, places, and decisions.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease }}
          >
            UgnAI Labs Co. builds products for ops, payments, hospitality, and
            creative work from Cebu to the world.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease }}
          >
            <Button
              nativeButton={false}
              render={<a href="#services" />}
              size="lg"
              className="h-11 rounded-md px-6"
            >
              See what we offer
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-border/80 bg-white/50 px-5 backdrop-blur-sm"
              onClick={() => setContactOpen(true)}
            >
              <Mail data-icon="inline-start" />
              Contact us
            </Button>
          </motion.div>
        </motion.div>

        <motion.a
          href="#services"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase sm:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Scroll
          <ArrowDown className="size-3.5 animate-bounce" />
        </motion.a>
      </header>

      <section
        id="services"
        className="relative overflow-hidden border-t border-white/10 bg-brand-ink"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 20% 30%, rgba(26,79,214,0.28), transparent 55%), radial-gradient(45% 50% at 85% 70%, rgba(30,200,176,0.22), transparent 50%), radial-gradient(30% 30% at 60% 90%, rgba(255,180,80,0.12), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <motion.div
            className="text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-[0.3em] text-brand-teal uppercase">
              Offered services
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              What we build with you.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Full-stack delivery across web, mobile, chain, AI, AR, IoT, and QA.
            </p>
          </motion.div>

          <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.li
                  key={service.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <Card className="h-full rounded-2xl border-0 bg-[#151b24] py-8 text-center text-white ring-1 ring-white/10 transition hover:ring-brand-teal/40">
                    <CardContent className="flex flex-col items-center gap-3 px-4 sm:gap-4">
                      <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/25 to-brand-teal/25 ring-1 ring-brand-teal/30">
                        <Icon
                          className="size-6 text-brand-teal"
                          strokeWidth={1.75}
                        />
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-base font-semibold tracking-tight sm:text-lg">
                        {service.name}
                      </span>
                      <span className="text-xs leading-relaxed text-white/50">
                        {service.blurb}
                      </span>
                    </CardContent>
                  </Card>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <main id="products" className="relative border-t border-border/70 bg-background">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-[0.3em] text-brand-blue uppercase">
              Products
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-brand-ink">
              Tools we ship under UgnAI Labs.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              From barangay command centers to court bookings and escrow rails,
              each product solves a real operational problem.
            </p>
          </motion.div>

          <ProductList items={products} />
        </div>
      </main>

      <section
        id="lab"
        className="relative border-t border-border/70 bg-white"
      >
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-brand-blue uppercase">
              <FlaskConical className="size-3.5 shrink-0" strokeWidth={2} />
              Lab
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-brand-ink">
              Still cooking...
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Research builds and prototypes we explore before they become full
              products.
            </p>
          </motion.div>

          <ProductList items={experiments} />
        </div>
      </section>

      <section
        id="crew"
        className="relative border-t border-border/70 bg-[linear-gradient(180deg,#ffffff_0%,#eef3f6_100%)]"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-[0.3em] text-brand-teal uppercase">
              Crew
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-brand-ink">
              The crew behind the labs.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Engineering, design, quality, support, and machine learning from
              Cebu.
            </p>
          </motion.div>

          <ul className="mt-16 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {team.map((person, index) => (
              <motion.li
                key={person.name}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease,
                }}
                className="border-t border-border/80 py-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-white",
                      "bg-gradient-to-br from-brand-blue to-brand-teal",
                    )}
                    aria-hidden
                  >
                    {initials(person.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-brand-ink">
                        {person.name}
                      </h3>
                      {person.showSocial ? (
                        <span className="inline-flex items-center gap-2.5">
                          {socialLinks.map((link) => {
                            const Icon = socialIcon[link.label];
                            return (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={link.label}
                                className="inline-flex text-muted-foreground transition hover:text-brand-ink"
                              >
                                <Icon className="size-4" />
                              </a>
                            );
                          })}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {person.role}
                    </p>
                    <p className="mt-1 text-[11px] font-medium tracking-[0.16em] text-brand-blue/80 uppercase">
                      {person.focus}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {person.blurb}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="relative mt-auto overflow-hidden border-t border-border/70 bg-brand-ink text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 80% at 15% 20%, rgba(26,79,214,0.45), transparent 55%), radial-gradient(50% 60% at 90% 80%, rgba(30,200,176,0.35), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-[10px] font-medium tracking-[0.3em] text-white/55 uppercase">
            Built by
          </p>
          <Image
            src="/ugnai-labs.png"
            alt="UgnAI Labs"
            width={242}
            height={120}
            className="mt-4 h-14 w-auto object-contain brightness-0 invert sm:h-16"
          />
          <p className="mt-4 text-xs text-white/55">
            ©2026 UgnAI Labs Co. All rights reserved.
          </p>
          <a
            href="/dti-certificate-demo.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex opacity-90 transition hover:opacity-100"
          >
            <Image
              src="/dti-logo.png"
              alt="DTI Certificate of Business Name Registration"
              width={180}
              height={79}
              className="h-9 w-auto object-contain sm:h-10"
            />
          </a>
          <nav
            aria-label="Footer"
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {[
              { href: "#services", label: "Services" },
              { href: "#products", label: "Products" },
              { href: "#lab", label: "Lab" },
              { href: "#crew", label: "Crew" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map((item) => (
              <Button
                key={item.label}
                nativeButton={false}
                render={<a href={item.href} />}
                variant="ghost"
                size="sm"
                className="rounded-md text-white/65 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-md text-white/65 hover:bg-white/10 hover:text-white"
              onClick={() => setContactOpen(true)}
            >
              Contact
            </Button>
          </nav>
        </div>
      </footer>
    </div>
  );
}
