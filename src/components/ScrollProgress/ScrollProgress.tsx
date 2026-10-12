import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { memo, useState } from 'react'

import { LEVEL_UP_LABEL, LEVEL_UP_THRESHOLD } from '@/constants'

export const ScrollProgress = memo((): React.JSX.Element => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })
  const [isMaxed, setIsMaxed] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsMaxed(latest >= LEVEL_UP_THRESHOLD)
  })

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-full">
      <motion.div
        className="h-2 origin-left border-b-4 border-ink-950 bg-cash-300"
        style={{ scaleX }}
      />
      <AnimatePresence>
        {isMaxed ? (
          <motion.p
            animate={{ scale: 1, rotate: -6 }}
            className="absolute right-4 top-4 rounded-lg border-4 border-ink-950 bg-pop-300 px-3 py-1 font-display text-sm uppercase tracking-wide text-ink-950 shadow-blockSm"
            exit={{ scale: 0, rotate: 0 }}
            initial={{ scale: 0, rotate: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          >
            {LEVEL_UP_LABEL}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
})

ScrollProgress.displayName = 'ScrollProgress'
