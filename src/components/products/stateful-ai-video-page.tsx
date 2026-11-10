"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Clapperboard,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NpmIcon } from "@/components/platform-icons";
import { cn } from "@/lib/utils";

const NPM_URL = "https://www.npmjs.com/package/stateful-ai-video";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: Clapperboard,
    title: "Sample clips",
    detail:
      "Pull frames and short windows from a longer video without losing the timeline.",
  },
  {
    icon: Layers,
    title: "Keep structured memory",
    detail:
      "Persist JSON watch-state across steps so the next call knows what already happened.",
  },
  {
    icon: BrainCircuit,
    title: "Adjudicate endings",
    detail:
      "Ask a multimodal model to decide point endings, continuity, or outcomes with that memory in hand.",
  },
] as const;

export function StatefulAiVideoPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden bg-[#070b12] text-[#e8eef4]">
      <div className="site-grain opacity-[0.05] mix-blend-soft-light" aria-hidden />

      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-[#070b12]/75 backdrop-blur-xl">
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
              "radial-gradient(65% 50% at 50% 32%, rgba(34, 211, 198, 0.18), transparent 55%), radial-gradient(40% 40% at 75% 70%, rgba(30, 58, 95, 0.45), transparent 50%), linear-gradient(180deg, #070b12 0%, #0c1420 48%, #070b12 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,198,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,198,0.06) 1px, transparent 1px)",
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
                  "radial-gradient(circle, rgba(34,211,198,0.35) 0%, transparent 68%)",
                filter: "blur(28px)",
              }}
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.45, 0.9, 0.45], scale: [0.95, 1.06, 0.95] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/products/stateful-ai-video-logo.png"
              alt="stateful-ai-video"
              width={160}
              height={160}
              priority
              className="size-28 rounded-[1.65rem] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.5)] ring-1 ring-teal-400/30 sm:size-40 sm:rounded-[2rem]"
            />
          </motion.div>

          <motion.h1
            className="mt-8 max-w-[14ch] font-[family-name:var(--font-display)] text-[clamp(2.2rem,7vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            stateful-ai-video
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
          >
            Stateful AI video memory for multimodal models. Persist structured
            watch-state across frames.
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
                <a href={NPM_URL} target="_blank" rel="noreferrer" />
              }
              size="lg"
              className="h-11 rounded-md bg-teal-400 px-6 text-[#070b12] hover:bg-teal-300"
            >
              <NpmIcon className="size-4" />
              View on npm
              <ArrowUpRight data-icon="inline-end" className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#features" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-white/20 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
            >
              How it works
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
            <p className="text-xs font-medium tracking-[0.3em] text-teal-400 uppercase">
              NPM package
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              Video that remembers what it saw.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/55">
              Stateless frame dumps forget the story. This loop carries structured
              memory so each model call builds on the last.
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
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-teal-400/12 text-teal-400 ring-1 ring-teal-400/30">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
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
              "radial-gradient(55% 70% at 50% 100%, rgba(34,211,198,0.12), transparent 55%), linear-gradient(180deg, #070b12 0%, #0a121c 100%)",
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
            <p className="text-xs font-medium tracking-[0.3em] text-teal-400 uppercase">
              Install
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              One package. A memory loop for video.
            </h2>
            <pre className="mx-auto mt-8 max-w-lg overflow-x-auto rounded-lg bg-black/50 px-5 py-4 text-left font-mono text-sm text-teal-300 ring-1 ring-white/10">
              <code>npm install stateful-ai-video</code>
            </pre>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/55">
              A product of UgnAI Labs Co. Published on npm for video memory
              loops and multimodal wrappers.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button
                nativeButton={false}
                render={
                  <a href={NPM_URL} target="_blank" rel="noreferrer" />
                }
                size="lg"
                className="h-11 rounded-md bg-teal-400 px-6 text-[#070b12] hover:bg-teal-300"
              >
                View on npm
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
          ©2026 UgnAI Labs Co. · stateful-ai-video
        </p>
      </footer>
    </div>
  );
}
