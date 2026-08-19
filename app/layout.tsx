import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GrainOverlay from "@/components/GrainOverlay";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Muhammad Subhan",
  description:
    "Eight production-styled AI agent systems, each built end to end — real models, real evals, real bugs found and fixed, all deployed and open source.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${jetbrains.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink text-paper font-body antialiased">
        <SmoothScrollProvider>
          <GrainOverlay />
          <ScrollProgress />
          <CustomCursor />
          <Nav />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
