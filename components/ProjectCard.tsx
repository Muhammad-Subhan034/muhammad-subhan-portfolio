"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CATEGORY_COLOR, type Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const color = CATEGORY_COLOR[project.category];
  const cardRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateX: py * -6,
      rotateY: px * 6,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 900,
    });
  }

  function onMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ ["--cat-color" as string]: color }}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-paper/12 bg-ink-raised transition-colors duration-300 [transform-style:preserve-3d] hover:border-[var(--cat-color)]/60 hover:shadow-[0_0_40px_-12px_var(--cat-color)]"
    >
      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-paper/10 bg-ink">
          <Image
            src={project.preview}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-paper/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
        </div>
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide"
            style={{ color, backgroundColor: `color-mix(in srgb, ${color} 16%, transparent)` }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
            {project.category}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-dim">Live</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold text-paper">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-dim">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-dim">{project.description}</p>
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-xs text-dim">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3 pt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="flex-1 rounded-sm bg-signal px-4 py-2 text-center font-mono text-[11px] uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
          >
            View live →
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="flex-1 rounded-sm border border-paper/20 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-wide text-paper hover:bg-ink"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
