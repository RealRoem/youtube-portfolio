import { memo } from 'react'

import type { TickerProps } from '@/types'

export const Ticker = memo(
  ({ items }: TickerProps): React.JSX.Element => (
    <div aria-hidden="true" className="overflow-hidden py-8">
      <div className="-mx-4 -rotate-1 overflow-hidden border-y-4 border-ink-950 bg-pop-300 py-3">
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul className="flex shrink-0 items-center" key={copy}>
              {items.map((item) => (
                <li
                  className="flex items-center font-display text-2xl uppercase tracking-wide text-ink-950"
                  key={item}
                >
                  <span className="px-6">{item}</span>
                  <span>&#9733;</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
)

Ticker.displayName = 'Ticker'
