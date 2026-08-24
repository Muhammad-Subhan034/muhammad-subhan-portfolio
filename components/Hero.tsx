"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import NetworkField from "./NetworkField";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const masks = rootRef.current?.querySelectorAll<HTMLElement>(".mask i") ?? [];
    const rest = rootRef.current?.querySelectorAll<HTMLElement>("[data-hero-fade]") ?? [];

    if (reduceMotion) return;

    gsap.set(masks, { yPercent: 110 });
    gsap.set(rest, { opacity: 0, y: 16 });

    document.documentElement.style.overflow = "hidden";
    const release = () => {
      document.documentElement.style.overflow = "";
    };

    const tl = gsap.timeline({ delay: 0.15, onComplete: release });
    tl.to(masks, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.045 });
    tl.fromTo(
      rest,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 },
      "-=0.6"
    );

    const failsafe = window.setTimeout(() => {
      if (tl.progress() < 1) tl.progress(1);
      release();
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      tl.kill();
      release();
    };
  }, []);

  return (
    <section id="top" ref={rootRef} className="relative overflow-hidden">
      <NetworkField />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="max-w-2xl">
        <div>
          <div data-hero-fade className="mb-6 flex items-center gap-4">
            <Image
              src="/profile.jpg"
              alt="Muhammad Subhan"
              width={56}
              height={56}
              className="rounded-full border border-paper/15 object-cover"
              priority
            />
            <div>
              <p className="font-display text-sm font-bold text-paper">Muhammad Subhan</p>
              <p className="font-mono text-[11px] uppercase tracking-wide text-dim">
                AI systems, shipped
              </p>
            </div>
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-paper sm:text-6xl md:text-7xl">
            <span className="mask">
              <i>
                AI systems,
                <br />
                data visualized.
              </i>
            </span>
            <br />
            <span className="mask">
              <i className="text-signal">Zero placeholders.</i>
            </span>
          </h1>
          <p data-hero-fade className="mt-7 max-w-md text-lg leading-relaxed text-dim">
            Every build here is real, not mocked: trained models, verified
            outputs, real bugs found and fixed before shipping. All live,
            all open source.
          </p>
          <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-sm bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              See the work →
            </a>
            <a
              href="https://github.com/Muhammad-Subhan034"
              className="rounded-sm border border-paper/20 px-6 py-3 font-mono text-[13px] uppercase tracking-wide text-paper transition-colors hover:bg-ink-raised"
            >
              GitHub profile
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
