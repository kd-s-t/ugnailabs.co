import Link from "next/link";
import { Logo } from "@/components/logo";

type LegalPageProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function LegalPage({ title, description, children }: LegalPageProps) {
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
          Legal
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-brand-ink">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-muted-foreground/80 uppercase">
          Last updated · 14 Oct 2026
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {children}
        </div>
      </main>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-brand-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}
