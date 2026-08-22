import { PROJECTS } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectGrid() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal as="p" className="font-mono text-[11px] uppercase tracking-widest text-signal">
        The work
      </Reveal>
      <Reveal
        as="h2"
        variant="clip-wipe"
        delay={0.05}
        className="mt-3 max-w-2xl font-display text-3xl font-bold text-paper md:text-4xl"
      >
        Nine domains, one standard: build it real, verify it, ship it.
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug} variant="scale-in" delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
