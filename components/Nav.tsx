"use client";

const links = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/97">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-paper">
          Muhammad Subhan
        </a>
        <nav className="flex items-center gap-1 font-mono text-[13px] uppercase tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-1.5 text-dim transition-colors hover:bg-ink-raised hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Muhammad-Subhan034"
            className="ml-2 rounded-sm bg-signal px-3 py-1.5 text-ink"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
