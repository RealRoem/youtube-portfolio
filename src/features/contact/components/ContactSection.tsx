import { memo } from 'react'

import { bannerJpg, bannerWebp } from '@/assets/images'
import { Button, Reveal, Section } from '@/components'
import { SECTION_IDS, SPONSORSHIP_EMAIL } from '@/constants'
import { CoinSparkles } from '@/features/contact/components/CoinSparkles'
import type { ContactSectionProps } from '@/features/contact/types'
import { theme } from '@/styles/theme'

export const ContactSection = memo(
  ({ links }: ContactSectionProps): React.JSX.Element => (
    <Section
      className="relative isolate overflow-hidden border-t-4 border-ink-950 bg-ink-900 pb-0 pt-24 lg:aspect-[1920/1069] lg:pt-[7vw]"
      id={SECTION_IDS.contact}
      labelledBy="contact-title"
    >
      <Reveal>
        <div className={`${theme.surface.panel} mx-auto max-w-2xl p-8 text-center sm:p-12`}>
          <h2 className={theme.text.sectionTitle} id="contact-title">
            Tell me if you are interested
          </h2>
          <p className={`mt-6 ${theme.text.body}`}>
            Send the product, the goal, the timeline, and the links. I will look at how it can fit
            naturally into the kind of videos I already make
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            {links.map((link) => (
              <Button
                ariaLabel={link.ariaLabel}
                href={link.href}
                key={link.href}
                variant={link.brand === 'email' ? 'primary' : 'secondary'}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <p className="mt-6 font-bold text-paper-300">
            Prefer email? <span className="text-paper-100">{SPONSORSHIP_EMAIL}</span>
          </p>
        </div>
      </Reveal>
      <picture aria-hidden="true">
        <source srcSet={bannerWebp} type="image/webp" />
        <img
          alt=""
          className="-mx-5 mt-12 block h-auto w-[calc(100%+2.5rem)] max-w-none border-t-4 border-ink-950 sm:-mx-8 sm:w-[calc(100%+4rem)] lg:absolute lg:inset-0 lg:-z-10 lg:m-0 lg:h-full lg:w-full lg:border-0 lg:object-cover lg:object-bottom"
          height={1069}
          loading="lazy"
          src={bannerJpg}
          width={1920}
        />
      </picture>
      <CoinSparkles />
    </Section>
  )
)

ContactSection.displayName = 'ContactSection'
