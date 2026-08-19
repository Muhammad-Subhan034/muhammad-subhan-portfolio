import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Real models, not mocked responses",
    body: "Every classifier here is actually trained — sklearn logistic regression on real synthetic-but-principled data, with genuine held-out evals. A suspiciously perfect accuracy score gets treated as a bug, not a win — Hireflow's 66%, Redline's 55% on 8 classes, and Ledgerly's 88% are all real, honest numbers with visible confusion where the task is genuinely hard.",
  },
  {
    n: "02",
    title: "Tested with real inputs, not the easiest stand-in",
    body: "Resume and invoice uploads were tested with actually-generated PDFs, DOCX files, and photos — not just pasted text — which is exactly how a real bug got caught: PDF parsing was silently broken in production the whole time, invisible in local dev, found only by testing the deployed URL with a real file.",
  },
  {
    n: "03",
    title: "Verification reused, not reinvented",
    body: "Verascope's independent NLI-entailment faithfulness check — checking a generated claim against its source with a model that isn't grading its own homework — gets reused verbatim in Reelmind for chapter summaries. Good verification infrastructure is worth carrying across projects, not rebuilding each time.",
  },
  {
    n: "04",
    title: "A human stays on the trigger",
    body: "Hireflow never auto-rejects a candidate. Prospex holds high-value replies for review. Ledgerly's auto-approve threshold is a real slider, not decoration. None of these systems take an irreversible action without someone choosing to let it.",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="border-t border-paper/10 bg-ink-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal as="p" className="font-mono text-[11px] uppercase tracking-widest text-signal">
          How these get built
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper/10 bg-paper/10 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05} className="bg-ink p-7">
              <span className="font-display text-3xl font-extrabold text-paper/20">{p.n}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-paper">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
