import Image from "next/image";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="relative isolate min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-atmosphere.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--hero-veil), var(--mesh)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18,22,28,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(18,22,28,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          }}
          aria-hidden
        />

        <div className="mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-6 py-20 sm:px-10">
          <Image
            src="/ugnai-labs.png"
            alt="UgnAI Labs"
            width={606}
            height={300}
            priority
            className="animate-rise h-20 w-auto object-contain sm:h-28 md:h-32"
          />

          <h1 className="animate-rise animate-rise-delay-1 mt-8 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.65rem,3.8vw,2.65rem)] font-semibold leading-[1.12] tracking-tight text-[var(--brand-ink)]">
            Software that connects people, places, and decisions.
          </h1>

          <p className="animate-rise animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            UgnAI Labs Co. builds products for ops, payments, hospitality, and
            creative work — shipping from Cebu to the world.
          </p>

          <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-[var(--brand-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-blue)]"
            >
              See what we build
            </a>
            <a
              href="mailto:hello@ugnailabs.com"
              className="text-sm font-medium text-[var(--muted)] underline-offset-4 transition hover:text-[var(--brand-blue)] hover:underline"
            >
              hello@ugnailabs.com
            </a>
          </div>
        </div>
      </header>

      <main id="products" className="relative border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
          <p className="text-xs font-medium tracking-[0.28em] text-[var(--muted)] uppercase">
            Products
          </p>
          <h2 className="mt-3 max-w-lg font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--brand-ink)] sm:text-4xl">
            Tools we ship under UgnAI Labs.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--muted)]">
            From barangay command centers to court bookings and escrow rails —
            each product is built to solve a real operational problem.
          </p>

          <ul className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {products.map((product) => {
              const inner = (
                <>
                  <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden bg-white/70 sm:size-16">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt=""
                        width={64}
                        height={64}
                        className="size-full object-contain p-2"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="brand-sheen bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-teal)] bg-clip-text font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-transparent"
                      >
                        LUWAS
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--brand-ink)] sm:text-xl">
                        {product.name}
                      </h3>
                      {product.comingSoon ? (
                        <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase">
                          Coming soon
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                      {product.blurb}
                    </p>
                  </div>
                  {product.href ? (
                    <span
                      aria-hidden
                      className="hidden text-[var(--muted)] transition group-hover:text-[var(--brand-blue)] sm:inline"
                    >
                      →
                    </span>
                  ) : null}
                </>
              );

              return (
                <li key={product.name}>
                  {product.href ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-4 py-7 transition hover:bg-white/40 sm:items-center sm:gap-6 sm:py-8"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 py-7 sm:items-center sm:gap-6 sm:py-8">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <footer className="mt-auto border-t border-[var(--line)] bg-white px-6 py-12 sm:px-10 sm:py-14">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <p className="text-[10px] font-medium tracking-[0.28em] text-[var(--muted)] uppercase">
            Built by
          </p>
          <Image
            src="/ugnai-labs.png"
            alt="UgnAI Labs"
            width={202}
            height={100}
            className="mt-3 h-14 w-auto object-contain sm:h-16"
          />
          <p className="mt-3 text-xs text-[var(--muted)]">
            ©2026 UgnAI Labs Co. All rights reserved.
          </p>
          <nav
            aria-label="Footer"
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase"
          >
            <a
              href="#products"
              className="transition hover:text-[var(--brand-blue)]"
            >
              Products
            </a>
            <a
              href="mailto:hello@ugnailabs.com"
              className="transition hover:text-[var(--brand-blue)]"
            >
              Contact
            </a>
            <a
              href="https://luwasph.com/about"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--brand-blue)]"
            >
              About
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
