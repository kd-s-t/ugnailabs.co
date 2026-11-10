import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { tools } from "@/lib/tools";

export function ToolsPage() {
  return (
    <div className="relative min-h-full bg-background">
      <div className="site-grain" aria-hidden />
      <header className="border-b border-border/70 bg-[rgba(238,243,246,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-5 sm:h-16 sm:px-8">
          <Link href="/" className="transition hover:opacity-80">
            <Logo className="gap-2" markClassName="size-7 sm:size-8" />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition hover:text-brand-ink"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium tracking-[0.3em] text-brand-blue uppercase">
          Lab
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-brand-ink">
          Tools
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Internal lab utilities for UgnAI Labs.
        </p>

        <ul className="mt-10 space-y-3">
          {tools.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={`/tools/${tool.slug}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-white/80 px-4 py-4 transition hover:border-brand-blue/35 hover:bg-white"
              >
                <span className="min-w-0">
                  <span className="block font-[family-name:var(--font-display)] text-base font-semibold text-brand-ink">
                    {tool.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {tool.blurb}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand-blue" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
