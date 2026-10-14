import type { Metadata } from "next";
import { Figtree, Sora } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "UgnAI Labs Co.",
  description:
    "UgnAI Labs Co. builds software that connects people, places, and decisions, from DRRM command to payments, hospitality, and creative tools.",
  openGraph: {
    title: "UgnAI Labs Co.",
    description: "Software that connects people, places, and decisions.",
    images: ["/ugnai-labs.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(display.variable, body.variable, "h-full antialiased")}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
