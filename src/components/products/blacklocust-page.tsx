"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  FlaskConical,
  ScanSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const BLACKLOCUST_APP = "https://black-locust-zvjh.vercel.app/";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: Database,
    title: "Upload a dataset",
    detail:
      "Bring labeled images. BlackLocust wires them into a train-ready set.",
  },
  {
    icon: FlaskConical,
    title: "Train on Yolo26",
    detail:
      "Kick a training job. Watch progress, keep the weights that matter.",
  },
  {
    icon: ScanSearch,
    title: "Test the model",
    detail:
      "Run detections on new images. See boxes, scores, and what still needs work.",
  },
] as const;

export function BlackLocustPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden bg-[#0a0a0a] text-[#f4f4f0]">
      <div className="site-grain opacity-[0.06] mix-blend-soft-light" aria-hidden />

      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-[#0a0a0a]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
          <Link
            href="/#lab"
            className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Lab
          </Link>
          <Link href="/" className="transition hover:opacity-80">
            <Logo
              className="gap-2"
              markClassName="size-7 sm:size-8"
              inverted
            />
          </Link>
        </div>
      </nav>

      <header className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-14 sm:pt-16">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(65% 50% at 50% 32%, rgba(245, 196, 0, 0.22), transparent 55%), radial-gradient(40% 35% at 80% 75%, rgba(245, 196, 0, 0.08), transparent 50%), linear-gradient(180deg, #0a0a0a 0%, #111009 50%, #0a0a0a 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,196,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(245,196,0,0.07) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 40%, black, transparent)",
          }}
          aria-hidden
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-24">
          <motion.div
            className="relative"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(circle, rgba(245,196,0,0.45) 0%, transparent 68%)",
                filter: "blur(28px)",
              }}
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.5, 0.95, 0.5], scale: [0.94, 1.06, 0.94] }
              }
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/products/blacklocust-logo.png"
              alt="BlackLocust"
              width={160}
              height={160}
              priority
              className="size-28 rounded-[1.65rem] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.55)] ring-1 ring-[#f5c400]/35 sm:size-40 sm:rounded-[2rem]"
            />
          </motion.div>

          <motion.h1
            className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.6rem,8vw,5rem)] font-semibold leading-[0.95] tracking-tight text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            BlackLocust
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
          >
            An AI trainer powered by Yolo26. Upload. Train. Test.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease }}
          >
            <Button
              nativeButton={false}
              render={
                <a
                  href={BLACKLOCUST_APP}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              size="lg"
              className="h-11 rounded-md bg-[#f5c400] px-6 text-[#0a0a0a] hover:bg-[#ffd21a]"
            >
              Open BlackLocust
              <ArrowUpRight data-icon="inline-end" className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#features" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-white/20 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
            >
              See the loop
            </Button>
          </motion.div>
        </div>
      </header>

      <section id="features" className="relative border-t border-white/8">
        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-[0.3em] text-[#f5c400] uppercase">
              Vision
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              Dataset to detection in three steps.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/55">
              Train custom object detection without wrestling a research stack.
              Built for people who need a model that works on their data.
            </p>
          </motion.div>

          <ul className="mt-16 grid gap-0 border-t border-white/10 sm:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                    "border-white/10 py-8 sm:px-6 sm:py-10",
                    index > 0 && "border-t sm:border-t-0 sm:border-l",
                  )}
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#f5c400]/12 text-[#f5c400] ring-1 ring-[#f5c400]/30">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="mt-5 text-[10px] font-medium tracking-[0.22em] text-white/35 uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {feature.detail}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 120%, rgba(245,196,0,0.16), transparent 55%), linear-gradient(180deg, #0a0a0a 0%, #12100a 100%)",
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
            <p className="text-xs font-medium tracking-[0.3em] text-[#f5c400] uppercase">
              Sharp vision
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              See what matters. Ignore the rest.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Named for a swarm that finds its target. BlackLocust is a product
              of UgnAI Labs Co., cooking custom detectors for real scenes.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={BLACKLOCUST_APP}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                size="lg"
                className="h-11 rounded-md bg-[#f5c400] px-6 text-[#0a0a0a] hover:bg-[#ffd21a]"
              >
                Open BlackLocust
                <ArrowUpRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="/#lab" />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-white/20 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft data-icon="inline-start" className="size-3.5" />
                Back to the lab
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="mt-auto border-t border-white/8 py-10 text-center">
        <p className="text-xs text-white/40">
          ©2026 UgnAI Labs Co. · BlackLocust
        </p>
      </footer>
    </div>
  );
}
