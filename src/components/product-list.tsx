"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { platformMeta } from "@/components/platform-icons";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const rowLayout =
  "relative grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-x-3 gap-y-3 sm:grid-cols-[2.5rem_minmax(0,1fr)_auto_auto] sm:items-center sm:gap-x-6";

type ProductListProps = {
  items: Product[];
};

export function ProductList({ items }: ProductListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ul className="mt-16">
      {items.map((product, index) => {
        const content = (
          <>
            <span className="col-start-1 row-start-1 w-10 font-[family-name:var(--font-display)] text-sm text-muted-foreground/70 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="col-start-2 row-start-1 min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3
                  className={cn(
                    "font-[family-name:var(--font-display)] text-lg font-semibold transition sm:text-xl",
                    product.accent === "red"
                      ? "text-ugnai-red group-hover:text-ugnai-red-dim"
                      : "text-brand-ink group-hover:text-brand-blue",
                  )}
                >
                  {product.name}
                </h3>
                <span className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  {product.tag}
                </span>
                {product.comingSoon ? (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "rounded-md",
                      product.accent === "red"
                        ? "bg-ugnai-red/12 text-ugnai-red-dim"
                        : "bg-accent text-accent-foreground",
                    )}
                  >
                    {product.statusLabel ?? "Coming soon"}
                  </Badge>
                ) : product.href && product.live !== false ? (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "rounded-md",
                      product.accent === "red"
                        ? "bg-ugnai-red/12 text-ugnai-red-dim"
                        : "bg-brand-teal/15 text-brand-ink",
                    )}
                  >
                    Live
                  </Badge>
                ) : null}
                {typeof product.users === "number" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground tabular-nums">
                    <Users className="size-3.5 shrink-0 opacity-70" aria-hidden />
                    {product.users.toLocaleString()}{" "}
                    {product.users === 1 ? "user" : "users"}
                  </span>
                ) : null}
              </div>
              {product.meaning ? (
                <p
                  className={cn(
                    "mt-1 text-xs font-medium tracking-wide sm:text-[13px]",
                    product.accent === "red"
                      ? "text-ugnai-red/80"
                      : "text-muted-foreground",
                  )}
                >
                  {product.meaning}
                </p>
              ) : null}
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {product.blurb}
              </p>
              {product.platforms?.length ? (
                <ul className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  {product.platforms.map((key) => {
                    const { label, Icon } = platformMeta[key];
                    return (
                      <li
                        key={key}
                        className="inline-flex items-center gap-1 rounded-md bg-muted/70 px-2 py-1 text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase"
                      >
                        <Icon className="opacity-80" />
                        {label}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
              {product.href ? (
                <p
                  className={cn(
                    "mt-2 text-xs font-medium tracking-wide break-all",
                    product.accent === "red"
                      ? "text-ugnai-red/90"
                      : "text-brand-blue/80",
                  )}
                >
                  {product.href.replace(/^https?:\/\//, "")}
                </p>
              ) : null}
            </div>
            {product.image ? (
              <div
                className={cn(
                  "col-start-2 row-start-2 flex items-center sm:col-start-3 sm:row-start-1 sm:justify-self-end",
                  product.wideImageLg
                    ? "h-12 w-full max-w-60 sm:h-[4.5rem] sm:w-64 sm:max-w-none"
                    : product.wideImage
                      ? "h-12 w-full max-w-56 sm:h-16 sm:w-56 sm:max-w-none"
                      : "size-16 sm:size-24",
                )}
              >
                <Image
                  src={product.image}
                  alt=""
                  width={
                    product.wideImageLg ? 256 : product.wideImage ? 224 : 96
                  }
                  height={
                    product.wideImageLg ? 72 : product.wideImage ? 64 : 96
                  }
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : null}
            {product.href ? (
              <ArrowUpRight
                aria-hidden
                className={cn(
                  "col-start-3 row-start-1 mt-0.5 size-5 text-muted-foreground/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:col-start-4 sm:mt-0",
                  product.accent === "red"
                    ? "group-hover:text-ugnai-red"
                    : "group-hover:text-brand-blue",
                )}
              />
            ) : (
              <span
                className="col-start-3 row-start-1 hidden size-5 sm:col-start-4 sm:block"
                aria-hidden
              />
            )}
          </>
        );

        return (
          <motion.li
            key={product.name}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease,
            }}
            className="border-t border-border/80 last:border-b"
          >
            {product.href ? (
              <a
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block px-1 py-7 transition sm:px-4 sm:py-8"
              >
                <span
                  className={cn(
                    "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    product.accent === "red"
                      ? "bg-ugnai-red/10"
                      : "bg-brand-blue/8",
                  )}
                  aria-hidden
                />
                <span className={rowLayout}>{content}</span>
              </a>
            ) : (
              <div className={cn(rowLayout, "px-1 py-7 sm:px-4 sm:py-8")}>
                {content}
              </div>
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}
