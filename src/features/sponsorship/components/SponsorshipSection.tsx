import { Check } from 'lucide-react'
import { memo } from 'react'

import { Reveal, Section } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { SponsorshipSectionProps } from '@/features/sponsorship/types'
import { theme } from '@/styles/theme'

export const SponsorshipSection = memo(
  ({ values }: SponsorshipSectionProps): React.JSX.Element => (
    <Section
      className={theme.layout.sectionSponsorship}
      id={SECTION_IDS.sponsorship}
      labelledBy="sponsorship-title"
    >
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className={theme.text.sectionTitle} id="sponsorship-title">
            A sponsorship should feel like part of the video
          </h2>
          <p className={`mt-6 ${theme.text.body}`}>
            I want sponsor integrations to feel useful and easy to understand. If the product fits
            the audience, I can explain it in my own voice and make it feel natural in the video
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className={`${theme.surface.panel} overflow-hidden`}>
            <div className="flex items-center justify-between border-b-4 border-ink-950 bg-ink-950 px-6 py-4">
              <p className="font-display text-xl uppercase tracking-wide text-coin-300">
                Sponsor quest
              </p>
            </div>
            <ol className="divide-y-4 divide-ink-950">
              {values.map((value, index) => (
                <Reveal delay={index * STAGGER_DELAY_SECONDS} key={value.title}>
                  <li className="flex gap-4 p-6">
                    <span
                      aria-hidden="true"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border-4 border-ink-950 bg-cash-300 text-ink-950"
                    >
                      <Check className="h-5 w-5" strokeWidth={4} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-snug text-paper-100">
                        {value.title}
                      </h3>
                      <p className={`mt-2 ${theme.text.cardBody}`}>{value.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  )
)

SponsorshipSection.displayName = 'SponsorshipSection'
