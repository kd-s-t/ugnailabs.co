import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  inverted?: boolean;
};

export function Logo({
  className,
  markClassName,
  showWordmark = true,
  inverted = false,
}: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        inverted ? "text-white" : "text-brand-ink",
        className,
      )}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden={!showWordmark}
        className={cn("size-9 shrink-0 sm:size-11", markClassName)}
      >
        <defs>
          <linearGradient
            id="ugnai-mark"
            x1="8"
            y1="56"
            x2="56"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1A4FD6" />
            <stop offset="0.5" stopColor="#1A9AD0" />
            <stop offset="1" stopColor="#1EC8B0" />
          </linearGradient>
        </defs>
        <path
          d="M14 14c0-3.3 2.7-6 6-6h7.2c2.2 0 4.1 1.4 4.8 3.5L46 52.2c.9 2.6-1 5.3-3.8 5.3h-7.4c-2.3 0-4.3-1.5-5-3.7L18.6 22.4A8.4 8.4 0 0 0 14 20.2V14Z"
          fill="url(#ugnai-mark)"
        />
        <path
          d="M38.5 11.5c2.2-3.2 7.2-2.4 8.2 1.3.5 1.9-.4 3.8-2.1 4.7-2.7 1.4-5.9-.2-6.2-3.3-.1-1.1.3-2.1 1.1-2.7Z"
          fill="url(#ugnai-mark)"
        />
      </svg>
      {showWordmark ? (
        <span className="font-[family-name:var(--font-display)] text-[1.05rem] leading-none tracking-tight whitespace-nowrap sm:text-[1.7rem]">
          <span className="font-semibold">
            Ugn
            <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
              AI
            </span>
          </span>{" "}
          <span
            className={cn(
              "font-normal",
              inverted ? "text-white/55" : "text-muted-foreground",
            )}
          >
            Labs
          </span>
        </span>
      ) : (
        <span className="sr-only">UgnAI Labs</span>
      )}
    </span>
  );
}
