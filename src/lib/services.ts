import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  ClipboardCheck,
  Cpu,
  Globe,
  Link2,
  Scan,
} from "lucide-react";
import {
  AndroidIcon,
  AppleIcon,
  HeadbandIcon,
} from "@/components/platform-icons";

export type ServiceIcon = LucideIcon | ComponentType<{ className?: string }>;

export type Service = {
  name: string;
  blurb: string;
  icon?: LucideIcon;
  icons?: ServiceIcon[];
};

export const services: Service[] = [
  {
    name: "Web",
    blurb: "Product sites and ops dashboards that ship clean.",
    icon: Globe,
  },
  {
    name: "Mobile",
    blurb: "iOS and Android apps for field and guest flows.",
    icons: [AppleIcon, AndroidIcon],
  },
  {
    name: "Blockchain",
    blurb: "Escrow, wallets, and on-chain settlement rails.",
    icon: Link2,
  },
  {
    name: "AI",
    blurb: "Vision, triage, and local models wired into real products.",
    icon: Brain,
  },
  {
    name: "AR",
    blurb: "Overlays, HUD, and camera-space tooling on live video.",
    icon: Scan,
  },
  {
    name: "IoT",
    blurb: "Sensors, devices, and live signals in the loop.",
    icon: Cpu,
  },
  {
    name: "EEG",
    blurb: "Brainwave capture, pattern training, and BCI control loops.",
    icons: [HeadbandIcon],
  },
  {
    name: "QA",
    blurb: "Regression, field checks, and release confidence before ship.",
    icon: ClipboardCheck,
  },
];
