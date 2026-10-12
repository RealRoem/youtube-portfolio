import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { memo } from 'react'

import { avatarJpg, avatarWebp } from '@/assets/images'
import { Button, CoinBurst, Reveal, Section } from '@/components'
import {
  COIN_BURST_LABEL,
  CREATOR_HANDLE,
  HERO_STICKER_LABEL,
  MAILTO_SPONSORSHIP_URL,
} from '@/constants'
import type { HeroSectionProps } from '@/features/hero/types'
import { theme } from '@/styles/theme'

export const HeroSection = memo(
  ({ metrics }: HeroSectionProps): React.JSX.Element => (
    <Section
      className={`relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 ${theme.layout.sectionHero}`}
      id="hero"
      labelledBy="hero-title"
    >
      <span
        aria-hidden="true"
        className="absolute left-[47%] top-[18%] hidden h-10 w-10 rotate-12 animate-bob rounded-lg border-4 border-ink-950 bg-sky-300 lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[14%] left-[42%] hidden h-8 w-8 -rotate-12 animate-bob rounded-lg border-4 border-ink-950 bg-pop-300 [animation-delay:1.2s] lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute right-[3%] top-[12%] hidden h-12 w-12 rotate-6 animate-bob rounded-full border-4 border-ink-950 bg-cash-300 [animation-delay:2s] lg:block"
      />
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className={theme.text.eyebrow}>{CREATOR_HANDLE} creator portfolio</p>
          <h1 className={theme.hero.title} id="hero-title">
            Roblox videos people <span className={theme.hero.titleMark}>want to see</span>
          </h1>
          <p className={theme.hero.body}>
            I make fast tips, longer guides, and challenge-style videos around Roblox tycoon and
            simulator games. My audience watch the videos because they want to play smarter and be
            more efficient.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              ariaLabel="Contact Roem for sponsorship"
              className="animate-nudge"
              href={MAILTO_SPONSORSHIP_URL}
            >
              Contact for sponsorship
            </Button>
            <Button
              ariaLabel="Scroll to featured videos"
              href="#featured-videos"
              variant="secondary"
            >
              See my formats
              <ArrowDownRight aria-hidden="true" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Reveal>
        <Reveal className="relative" delay={0.12}>
          <div className={theme.hero.profilePanel}>
            <p className={`${theme.sticker} -right-3 -top-5 rotate-12`}>{HERO_STICKER_LABEL}</p>
            <div className="flex flex-col items-center text-center">
              <CoinBurst ariaLabel={COIN_BURST_LABEL}>
                <div className={theme.hero.avatarFrame}>
                  <picture>
                    <source srcSet={avatarWebp} type="image/webp" />
                    <img
                      alt="Real Roem channel avatar"
                      className="h-40 w-40 rounded-2xl object-cover sm:h-48 sm:w-48"
                      height={192}
                      src={avatarJpg}
                      width={192}
                    />
                  </picture>
                </div>
              </CoinBurst>
              <h2 className={theme.hero.profileTitle}>Real_Roem</h2>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div className={theme.hero.metricCard} key={metric.label}>
                  <p className={theme.hero.metricValue}>{metric.value}</p>
                  <p className={theme.hero.metricLabel}>{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-paper-300">
                <span>Next goal</span>
                <span>50K subscribers</span>
              </div>
              <div
                aria-label="Progress to 50K subscribers"
                aria-valuemax={50}
                aria-valuemin={0}
                aria-valuenow={35}
                className={`mt-2 ${theme.hero.xpTrack}`}
                role="progressbar"
              >
                <motion.div
                  className={theme.hero.xpFill}
                  initial={{ scaleX: 0 }}
                  style={{ width: '70%', transformOrigin: 'left' }}
                  transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileInView={{ scaleX: 1 }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
)

HeroSection.displayName = 'HeroSection'
