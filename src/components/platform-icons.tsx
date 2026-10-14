import { Globe, Hexagon, Scan, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function AppleIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("size-3.5", className)}
    >
      <path d="M16.365 1.43c0 1.14-.418 2.206-1.182 3.024-.807.87-2.13 1.54-3.242 1.45-.146-1.09.42-2.23 1.16-3.01.81-.86 2.21-1.49 3.264-1.464zM20.72 17.29c-.55 1.27-.81 1.84-1.52 2.96-.99 1.56-2.39 3.5-4.12 3.51-1.53.02-1.93-.99-4.02-.98-2.08.01-2.53.99-4.06.97-1.73-.02-3.05-1.77-4.04-3.33C1.34 17.7-.2 12.78 1.7 9.4c.95-1.68 2.64-2.74 4.47-2.76 1.66-.03 3.23 1.12 4.02 1.12.78 0 2.67-1.38 4.5-1.18.77.03 2.92.31 4.3 2.34-.11.07-2.57 1.5-2.54 4.47.03 3.54 3.1 4.72 3.15 4.74-.02.06-.49 1.7-1.02 2.96z" />
    </svg>
  );
}

export function AndroidIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("size-3.5", className)}
    >
      <path d="M17.523 9.27l1.54-2.67a.5.5 0 10-.866-.5l-1.56 2.7A8.9 8.9 0 0012 8c-1.6 0-3.09.42-4.38.99L6.06 6.1a.5.5 0 10-.866.5l1.54 2.67C4.1 10.62 2.5 13.1 2.5 16h19c0-2.9-1.6-5.38-3.977-6.73zM8.25 13.25a.75.75 0 110-1.5.75.75 0 010 1.5zm7.5 0a.75.75 0 110-1.5.75.75 0 010 1.5zM5 17.5h14V21a1 1 0 01-1 1h-1.25v-1.75a.75.75 0 00-1.5 0V22H8.75v-1.75a.75.75 0 00-1.5 0V22H6a1 1 0 01-1-1v-3.5z" />
    </svg>
  );
}

export function WebIcon({ className }: IconProps) {
  return <Globe className={cn("size-3.5", className)} strokeWidth={1.75} />;
}

export function AiIcon({ className }: IconProps) {
  return <Sparkles className={cn("size-3.5", className)} strokeWidth={1.75} />;
}

export function BlockchainIcon({ className }: IconProps) {
  return <Hexagon className={cn("size-3.5", className)} strokeWidth={1.75} />;
}

export function ArIcon({ className }: IconProps) {
  return <Scan className={cn("size-3.5", className)} strokeWidth={1.75} />;
}

export const platformMeta = {
  ios: { label: "iOS", Icon: AppleIcon },
  android: { label: "Android", Icon: AndroidIcon },
  web: { label: "Web", Icon: WebIcon },
  ai: { label: "AI", Icon: AiIcon },
  blockchain: { label: "Blockchain", Icon: BlockchainIcon },
  ar: { label: "AR", Icon: ArIcon },
} as const;
