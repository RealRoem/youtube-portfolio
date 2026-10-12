import { memo } from 'react'

import { SCENE_SPARKLES } from '@/features/contact/constants'

export const CoinSparkles = memo(
  (): React.JSX.Element => (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
      {SCENE_SPARKLES.map((sparkle) => (
        <svg
          className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-sparkle"
          key={`${String(sparkle.left)}-${String(sparkle.top)}`}
          style={{
            left: `${String(sparkle.left)}%`,
            top: `${String(sparkle.top)}%`,
            animationDelay: `${String(sparkle.delaySeconds)}s`,
          }}
          viewBox="0 0 24 24"
        >
          <path d="M12 0 14.5 9.5 24 12 14.5 14.5 12 24 9.5 14.5 0 12 9.5 9.5Z" fill="#fff4bf" />
        </svg>
      ))}
    </div>
  )
)

CoinSparkles.displayName = 'CoinSparkles'
