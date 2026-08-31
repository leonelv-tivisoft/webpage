'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

type Props = {
  videoId: string;
  title: string;
  /** Tailwind aspect-ratio class for the player frame. */
  aspectClassName?: string;
};

/**
 * Renders a lightweight thumbnail first and only loads the YouTube iframe on click,
 * to keep the page fast and avoid third-party scripts on initial load.
 */
export default function YouTubeEmbed({
  videoId,
  title,
  aspectClassName = 'aspect-video',
}: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden bg-slate-900 ${aspectClassName}`}>
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
          aria-label={`Reproducir video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-slate-950/25 transition group-hover:bg-slate-950/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 transition group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
