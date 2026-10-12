import { motion } from 'framer-motion'
import { memo } from 'react'

import { STAT_BONUS_LABEL } from '@/constants'
import { useAnimatedCounter } from '@/hooks'
import { theme } from '@/styles/theme'
import type { StatCardProps } from '@/types'
import { cx, formatCompactNumber } from '@/utils'

export const StatCard = memo(({ stat }: StatCardProps): React.JSX.Element => {
  const { value, ref } = useAnimatedCounter({ target: stat.value })
  const isComplete = value >= stat.value

  return (
    <article
      className={cx(
        'relative',
        theme.surface.statBase,
        stat.highlight ? theme.surface.statHighlight : theme.surface.statDefault
      )}
    >
      {stat.highlight ? (
        <p className={`${theme.sticker} -right-3 -top-4 rotate-6`}>{STAT_BONUS_LABEL}</p>
      ) : null}
      <p
        className={cx(
          'text-sm font-extrabold uppercase tracking-wide',
          stat.highlight ? 'text-ink-950' : 'text-sky-300'
        )}
      >
        {stat.label}
      </p>
      <p className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">
        <motion.span
          animate={{ scale: isComplete ? [1, 1.18, 1] : 1 }}
          className="inline-block origin-left"
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <span ref={ref}>{formatCompactNumber(value)}</span>
          {stat.suffix}
        </motion.span>
      </p>
      {stat.description ? (
        <p className="mt-4 text-sm font-semibold leading-6 text-ink-950">{stat.description}</p>
      ) : null}
    </article>
  )
})

StatCard.displayName = 'StatCard'
