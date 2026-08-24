import Reveal from "./Reveal";

const LINKS = [
  { label: "Email", href: "mailto:muhammadsubhanmsk@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-subhan-2694032551" },
  { label: "GitHub", href: "https://github.com/Muhammad-Subhan034" },
  { label: "Call", href: "tel:+923034343999" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal as="p" className="font-mono text-[11px] uppercase tracking-widest text-signal">
        Get in touch
      </Reveal>
      <Reveal as="h2" delay={0.05} className="mt-3 max-w-xl font-display text-3xl font-bold text-paper md:text-4xl">
        Every project above is live and open source — start there, then reach out.
      </Reveal>
      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-paper/20 px-6 py-3 font-mono text-[13px] uppercase tracking-wide text-paper transition-colors hover:bg-ink-raised"
          >
            {link.label} →
          </a>
        ))}
      </Reveal>
    </section>
  );
}
