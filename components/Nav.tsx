"use client";

import { useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/visualization", label: "Visualization" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/97">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/#top" className="font-display text-lg font-bold tracking-tight text-paper">
          Muhammad Subhan
        </a>

        <nav className="hidden items-center gap-1 font-mono text-[13px] uppercase tracking-wide md:flex">
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
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm px-3 py-1.5 text-dim transition-colors hover:bg-ink-raised hover:text-paper"
          >
            Resume
          </a>
          <a
            href="https://github.com/Muhammad-Subhan034"
            className="ml-2 rounded-sm bg-signal px-3 py-1.5 text-ink"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-paper/15 text-paper md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-paper transition-transform duration-200 ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[5px] h-[1.5px] w-4 bg-paper transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[10px] h-[1.5px] w-4 bg-paper transition-transform duration-200 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-paper/10 px-6 py-3 font-mono text-[13px] uppercase tracking-wide md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-sm px-2 py-2.5 text-dim transition-colors hover:bg-ink-raised hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="block rounded-sm px-2 py-2.5 text-dim transition-colors hover:bg-ink-raised hover:text-paper"
          >
            Resume
          </a>
          <a
            href="https://github.com/Muhammad-Subhan034"
            className="mt-2 block rounded-sm bg-signal px-2 py-2.5 text-center text-ink"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
