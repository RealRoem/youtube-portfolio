import { motion, useReducedMotion } from 'framer-motion'
import { memo } from 'react'

import { useCoinBurst } from '@/hooks'
import type { CoinBurstProps } from '@/types'
import { cx } from '@/utils'

export const CoinBurst = memo(
  ({ children, ariaLabel, className }: CoinBurstProps): React.JSX.Element => {
    const { coins, burst } = useCoinBurst()
    const shouldReduceMotion = useReducedMotion()

    if (shouldReduceMotion) {
      return <div className={className}>{children}</div>
    }

    return (
      <div className={cx('relative', className)}>
        <button
          aria-label={ariaLabel}
          className="block rounded-3xl focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
          onClick={burst}
          type="button"
        >
          {children}
        </button>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid place-items-center"
        >
          {coins.map((coin) => (
            <motion.span
              animate={{
                x: coin.x,
                y: [0, coin.y, coin.y + 90],
                opacity: [1, 1, 0],
                scale: [0.4, 1, 1],
                rotate: 360,
              }}
              className="absolute grid h-8 w-8 place-items-center rounded-full border-4 border-ink-950 bg-coin-300 font-display text-sm text-ink-950"
              initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
              key={coin.id}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              $
            </motion.span>
          ))}
        </span>
      </div>
    )
  }
)

CoinBurst.displayName = 'CoinBurst'
