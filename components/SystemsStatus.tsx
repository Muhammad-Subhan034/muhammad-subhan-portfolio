"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PROJECTS, CATEGORY_COLOR } from "@/lib/projects";

export default function SystemsStatus() {
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(rowRefs.current, { opacity: 1, x: 0 });
      gsap.set(dotRefs.current, { backgroundColor: "var(--signal)" });
      return;
    }

    gsap.set(rowRefs.current, { opacity: 0, x: -8 });

    const tl = gsap.timeline({ delay: 0.4 });
    PROJECTS.forEach((_, i) => {
      tl.to(rowRefs.current[i], { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }, i * 0.09);
      tl.fromTo(
        dotRefs.current[i],
        { scale: 1.8, opacity: 0.4 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" },
        i * 0.09
      );
    });

    const failsafe = window.setTimeout(() => {
      if (tl.progress() < 1) tl.progress(1);
    }, 3500);

    return () => {
      window.clearTimeout(failsafe);
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full max-w-sm rounded-sm border border-paper/12 bg-ink-raised p-6">
      <p className="font-mono text-[11px] uppercase tracking-widest text-dim">
        8 systems — all live
      </p>
      <div className="mt-5 space-y-2.5">
        {PROJECTS.map((p, i) => (
          <div
            key={p.slug}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className="flex items-center gap-3"
          >
            <span
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: CATEGORY_COLOR[p.category] }}
            />
            <span className="font-mono text-sm text-paper">{p.name}</span>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-wide text-dim">
              {p.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
