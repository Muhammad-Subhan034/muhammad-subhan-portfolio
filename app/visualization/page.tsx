import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VizMediaCard from "@/components/VizMediaCard";
import Footer from "@/components/Footer";
import { D3_EXPERIMENTS, POWERBI_DASHBOARDS, PYDASH_ITEM } from "@/lib/visualizations";

export const metadata: Metadata = {
  title: "Data Visualization — Muhammad Subhan",
  description:
    "Interactive D3.js experiments, Power BI dashboards (including the Softec 2025 winning entry), and a real medical-analytics build from an AI Engineer internship at Ioptime.",
};

export default function VisualizationPage() {
  return (
    <>
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24">
          <Link
            href="/#work"
            className="font-mono text-[11px] uppercase tracking-widest text-dim transition-colors hover:text-paper"
          >
            ← Back home
          </Link>
          <Reveal
            as="h1"
            delay={0.05}
            className="mt-5 max-w-2xl font-display text-4xl font-bold text-paper md:text-5xl"
          >
            Data Visualization
          </Reveal>
          <Reveal delay={0.1} className="mt-4 max-w-xl text-lg leading-relaxed text-dim">
            Interactive D3.js builds, Power BI dashboards, and a real dashboard from an
            internship, each with a quick note on what it's actually showing.
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <Reveal as="p" className="font-mono text-[11px] uppercase tracking-widest text-signal">
            D3.js experiments
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 max-w-xl font-display text-2xl font-bold text-paper md:text-3xl">
            Five builds, five different chart mechanics, no dataviz library beyond D3 itself.
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {D3_EXPERIMENTS.map((item, i) => (
              <Reveal key={item.slug} variant="scale-in" delay={(i % 3) * 0.06}>
                <VizMediaCard item={item} accent="var(--cat-hr)" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <Reveal as="p" className="font-mono text-[11px] uppercase tracking-widest text-signal">
            Power BI
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 max-w-xl font-display text-2xl font-bold text-paper md:text-3xl">
            Three dashboards, three different datasets.
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POWERBI_DASHBOARDS.map((item, i) => (
              <Reveal key={item.slug} variant="scale-in" delay={(i % 3) * 0.06}>
                <VizMediaCard item={item} accent="var(--cat-finance)" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <Reveal as="p" className="font-mono text-[11px] uppercase tracking-widest text-signal">
            PyDash
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 max-w-xl font-display text-2xl font-bold text-paper md:text-3xl">
            From the internship, not a personal project.
          </Reveal>
          <div className="mt-8 max-w-2xl">
            <Reveal variant="scale-in">
              <VizMediaCard item={PYDASH_ITEM} accent="var(--cat-multimodal)" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
