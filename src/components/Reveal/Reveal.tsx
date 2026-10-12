import { motion } from 'framer-motion'
import { memo } from 'react'

import {
  REVEAL_DISTANCE_PX,
  REVEAL_SPRING,
  REVEAL_START_ROTATE_DEG,
  REVEAL_START_SCALE,
  VIEWPORT_ONCE_AMOUNT,
} from '@/constants'
import type { RevealProps } from '@/types'

export const Reveal = memo(
  ({ children, className, delay = 0 }: RevealProps): React.JSX.Element => (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: REVEAL_DISTANCE_PX,
        scale: REVEAL_START_SCALE,
        rotate: -REVEAL_START_ROTATE_DEG,
      }}
      transition={{ ...REVEAL_SPRING, delay }}
      viewport={{ once: true, amount: VIEWPORT_ONCE_AMOUNT }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
    >
      {children}
    </motion.div>
  )
)

Reveal.displayName = 'Reveal'
