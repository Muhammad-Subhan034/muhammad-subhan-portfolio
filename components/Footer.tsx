export default function Footer() {
  return (
    <footer className="mt-auto border-t border-paper/10 bg-[#08090a] text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg font-bold">Muhammad Subhan</p>
        <p className="max-w-md text-sm text-dim">
          Eight AI agent systems, each built end to end and deployed live —
          see{" "}
          <a href="#work" className="underline decoration-dim/40 underline-offset-4 hover:text-paper">
            the work
          </a>{" "}
          above.
        </p>
        <a
          href="https://github.com/Muhammad-Subhan034"
          className="font-mono text-[12px] uppercase tracking-wide text-dim underline decoration-dim/40 underline-offset-4 hover:text-paper"
        >
          github.com/Muhammad-Subhan034
        </a>
      </div>
    </footer>
  );
}
