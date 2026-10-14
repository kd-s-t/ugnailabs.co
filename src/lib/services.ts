import type { LucideIcon } from "lucide-react";
import {
  Brain,
  ClipboardCheck,
  Cpu,
  Globe,
  Link2,
  Scan,
  Smartphone,
} from "lucide-react";

export type Service = {
  name: string;
  blurb: string;
  icon: LucideIcon;
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
    icon: Smartphone,
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
    name: "QA",
    blurb: "Regression, field checks, and release confidence before ship.",
    icon: ClipboardCheck,
  },
];
