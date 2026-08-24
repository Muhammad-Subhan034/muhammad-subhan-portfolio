"use client";

import Image from "next/image";
import type { VizItem } from "@/lib/visualizations";

export default function VizMediaCard({ item, accent = "var(--signal)" }: { item: VizItem; accent?: string }) {
  return (
    <div
      style={{ ["--accent" as string]: accent }}
      className="overflow-hidden rounded-sm border border-paper/12 bg-ink-raised transition-colors duration-300 hover:border-[var(--accent)]/60 hover:shadow-[0_0_40px_-16px_var(--accent)]"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-paper/10 bg-ink">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={item.src}
            alt={`${item.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-paper">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-dim">{item.caption}</p>
      </div>
    </div>
  );
}
