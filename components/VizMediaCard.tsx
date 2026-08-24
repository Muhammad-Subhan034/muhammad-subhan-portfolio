"use client";

import Image from "next/image";
import type { VizItem } from "@/lib/visualizations";

export default function VizMediaCard({
  item,
  accent = "var(--signal)",
  large = false,
}: {
  item: VizItem;
  accent?: string;
  large?: boolean;
}) {
  return (
    <div
      style={{ ["--accent" as string]: accent }}
      className="overflow-hidden rounded-sm border border-paper/12 bg-ink-raised transition-colors duration-300 hover:border-[var(--accent)]/60 hover:shadow-[0_0_40px_-16px_var(--accent)]"
    >
      <div
        className={`relative w-full overflow-hidden border-b border-paper/10 bg-ink ${large ? "aspect-[16/8]" : "aspect-video"}`}
      >
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
            sizes={large ? "100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
            className="object-cover object-top"
          />
        )}
      </div>
      <div className={large ? "p-6 md:p-8" : "p-5"}>
        <h3 className={`font-display font-bold text-paper ${large ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {item.title}
        </h3>
        <p className={`mt-2 leading-relaxed text-dim ${large ? "max-w-2xl text-base" : "text-sm"}`}>
          {item.caption}
        </p>
      </div>
    </div>
  );
}
