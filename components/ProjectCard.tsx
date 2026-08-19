import Image from "next/image";
import { CATEGORY_COLOR, type Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const color = CATEGORY_COLOR[project.category];

  return (
    <div className="group overflow-hidden rounded-sm border border-paper/12 bg-ink-raised transition-colors hover:border-paper/25">
      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-paper/10 bg-ink">
          <Image
            src={project.preview}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </a>
      <div className="p-6">
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
        <div className="mt-5 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-sm bg-signal px-4 py-2 text-center font-mono text-[11px] uppercase tracking-wide text-ink"
          >
            View live →
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-sm border border-paper/20 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-wide text-paper hover:bg-ink"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
