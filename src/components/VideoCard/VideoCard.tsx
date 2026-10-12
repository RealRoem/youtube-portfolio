import { Play } from 'lucide-react'
import { memo } from 'react'

import { theme } from '@/styles/theme'
import type { VideoCardProps } from '@/types'

export const VideoCard = memo(
  ({ video }: VideoCardProps): React.JSX.Element => (
    <article className={theme.surface.videoCard}>
      <a
        aria-label={`Watch ${video.title} on YouTube`}
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
        href={video.watchUrl}
        rel="noreferrer"
        target="_blank"
      >
        <div className="aspect-video overflow-hidden border-b-4 border-ink-950">
          <picture>
            <source srcSet={video.thumbnailWebpUrl} type="image/webp" />
            <img
              alt={video.thumbnailAlt}
              className="h-full w-full object-cover"
              height={720}
              loading="lazy"
              src={video.thumbnailUrl}
              width={1280}
            />
          </picture>
        </div>
        <div className="p-6">
          <p className="inline-flex rounded-lg border-4 border-ink-950 bg-sky-300 px-3 py-1 font-display text-sm uppercase tracking-wide text-ink-950">
            {video.theme}
          </p>
          <h3 className="mt-4 font-display text-2xl leading-tight text-paper-100 transition-colors duration-150 group-hover:text-coin-300">
            {video.title}
          </h3>
          <p className="mt-5 inline-flex items-center gap-2 font-bold text-cash-300">
            <Play aria-hidden="true" className="h-4 w-4 fill-current" />
            Watch on YouTube
          </p>
        </div>
      </a>
    </article>
  )
)

VideoCard.displayName = 'VideoCard'
