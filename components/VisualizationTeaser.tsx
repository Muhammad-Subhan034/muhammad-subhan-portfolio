import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const PREVIEWS = [
  "/visualization/D3_5-poster.jpg",
  "/visualization/chicago_crime_report.jpg",
  "/visualization/D3_1-poster.jpg",
  "/visualization/py-dash-poster.jpg",
];

export default function VisualizationTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <Reveal as="p" className="font-mono text-[11px] uppercase tracking-widest text-signal">
            Also on this site
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-bold text-paper md:text-4xl">
            Data visualization work.
          </Reveal>
          <Reveal delay={0.1} className="mt-4 max-w-md text-dim">
            Five interactive D3.js builds, a Softec 2025 award-winning Power BI dashboard, two
            more Power BI dashboards, and a real medical-analytics build from an internship.
          </Reveal>
          <Reveal delay={0.15} className="mt-7">
            <Link
              href="/visualization"
              data-cursor-hover
              className="inline-block rounded-sm bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              View visualization work →
            </Link>
          </Reveal>
        </div>
        <Reveal variant="scale-in" delay={0.1}>
          <Link href="/visualization" data-cursor-hover className="group grid grid-cols-2 gap-3">
            {PREVIEWS.map((src) => (
              <div
                key={src}
                className="relative aspect-video overflow-hidden rounded-sm border border-paper/12 bg-ink-raised"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
