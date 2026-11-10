"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Download, FolderOpen, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { AppleIcon } from "@/components/platform-icons";
import { cn } from "@/lib/utils";

/** Drop the build at this path when ready to ship. */
const BIRI_MACOS_DOWNLOAD = "/downloads/Biri.dmg";



const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: MessageSquare,
    title: "Offline chat",
    detail: "Talk to local Ollama models. After download, no cloud round-trip.",
  },
  {
    icon: FolderOpen,
    title: "Open a folder",
    detail: "Code with the model in your project. Diffs you accept, files that stay local.",
  },
  {
    icon: Shield,
    title: "Private by default",
    detail: "Your work never leaves the Mac. What happens here stays unseen.",
  },
] as const;

export function BiriPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden bg-[#0c1012] text-[#e8eef0]">
      <div className="site-grain opacity-[0.05] mix-blend-soft-light" aria-hidden />

      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-[#0c1012]/70 backdrop-blur-xl">
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
              "radial-gradient(70% 55% at 50% 35%, rgba(30, 90, 95, 0.35), transparent 58%), radial-gradient(45% 40% at 70% 70%, rgba(212, 160, 48, 0.12), transparent 55%), linear-gradient(180deg, #0c1012 0%, #101618 48%, #0c1012 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,238,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,238,240,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
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
                  "radial-gradient(circle, rgba(212,160,48,0.28) 0%, transparent 68%)",
                filter: "blur(28px)",
              }}
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.45, 0.85, 0.45], scale: [0.95, 1.05, 0.95] }
              }
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/products/biri-logo.png"
              alt="Biri"
              width={160}
              height={160}
              priority
              className="size-28 rounded-[1.65rem] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:size-40 sm:rounded-[2rem]"
            />
          </motion.div>

          <motion.h1
            className="mt-8 font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,5.5rem)] font-semibold leading-none tracking-tight text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            Biri
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
          >
            An invisible city of craft. Your code never leaves the Mac.
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
                <a href={BIRI_MACOS_DOWNLOAD} download="Biri.dmg" />
              }
              size="lg"
              className="h-11 rounded-md bg-[#1ec8b0] px-6 text-[#0c1012] hover:bg-[#2ad4bc]"
            >
              <Download data-icon="inline-start" className="size-4" />
              Download now
              <span className="ml-1.5 inline-flex items-center gap-1.5 border-l border-[#0c1012]/20 pl-2 text-[#0c1012]/70">
                <AppleIcon className="size-3.5 opacity-90" />
                macOS
              </span>
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#features" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-white/20 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
            >
              See what it does
            </Button>
          </motion.div>
        </div>
      </header>

      <section
        id="features"
        className="relative border-t border-white/8"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-[0.3em] text-[#1ec8b0] uppercase">
              Local AI
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              Native macOS. Models on disk.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/55">
              Chat offline, open a project folder, drop screenshots, and track
              usage per project. Built for Apple Silicon and Ollama.
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
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#1ec8b0]/12 text-[#1ec8b0] ring-1 ring-[#1ec8b0]/25">
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
              "radial-gradient(55% 70% at 50% 100%, rgba(212,160,48,0.14), transparent 55%), linear-gradient(180deg, #0a0c0e 0%, #0c1012 100%)",
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
            <p className="text-xs font-medium tracking-[0.3em] text-[#d4a030] uppercase">
              Built for blackout
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              World War 3 is coming. The grid will go dark.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Blackout worldwide. No internet. No electricity from the grid.
              Just your solar panels, your laptop, and Biri, with models already
              on disk.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-white/8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(30,90,95,0.22), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-[0.3em] text-[#d4a030] uppercase">
              Somewhere unseen
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              An invisible city of craft.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/55">
              Find it when the lights go out. A product of UgnAI Labs Co.
            </p>
            <div className="mt-10">
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
          ©2026 UgnAI Labs Co. · Biri
        </p>
      </footer>
    </div>
  );
}
