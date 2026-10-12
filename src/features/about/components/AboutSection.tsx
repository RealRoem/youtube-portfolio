import { memo } from 'react'

import { Reveal, Section } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { AboutSectionProps } from '@/features/about/types'
import { theme } from '@/styles/theme'

const CARD_ACCENTS: readonly string[] = [
  'bg-sky-300 text-ink-950',
  'bg-pop-300 text-ink-950',
  'bg-cash-300 text-ink-950',
]
const CARD_OFFSETS: readonly string[] = ['', 'lg:mt-16', 'lg:mt-32']

export const AboutSection = memo(
  ({ points }: AboutSectionProps): React.JSX.Element => (
    <Section className={theme.layout.sectionAbout} id={SECTION_IDS.about} labelledBy="about-title">
      <Reveal className="max-w-3xl">
        <h2 className={theme.text.sectionTitle} id="about-title">
          I like making Roblox feel easier, faster, and more fun.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-start">
        {points.map((point, index) => (
          <Reveal
            className={CARD_OFFSETS[index] ?? ''}
            delay={index * STAGGER_DELAY_SECONDS}
            key={point.title}
          >
            <article className={theme.surface.card}>
              <p
                className={`inline-flex items-center gap-2 rounded-lg border-4 border-ink-950 px-3 py-1 font-display text-sm uppercase tracking-wide ${CARD_ACCENTS[index] ?? ''}`}
              >
                {point.eyebrow}
              </p>
              <h3 className={theme.text.cardTitle}>{point.title}</h3>
              <p className={`mt-5 ${theme.text.cardBody}`}>{point.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
)

AboutSection.displayName = 'AboutSection'
