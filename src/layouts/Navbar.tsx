import { Menu } from 'lucide-react'
import { memo, useState } from 'react'

import { Button, ScrollProgress } from '@/components'
import { CREATOR_NAME } from '@/constants'
import { navigationItems, sponsorshipNavItem } from '@/data'
import { cx } from '@/utils'

export const Navbar = memo((): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-ink-950 bg-ink-800">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          className="flex items-center gap-3 rounded-lg font-display text-xl tracking-wide text-paper-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
          href="#hero"
        >
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-lg border-4 border-ink-950 bg-coin-300 text-ink-950 shadow-blockSm"
          >
            R
          </span>
          {CREATOR_NAME}
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              className="rounded-lg px-1 font-bold text-paper-300 transition-colors duration-150 hover:text-coin-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <Button ariaLabel={sponsorshipNavItem.label} href={sponsorshipNavItem.href}>
            {sponsorshipNavItem.label}
          </Button>
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-4 border-ink-500 bg-ink-700 text-paper-100 shadow-blockSm focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 lg:hidden"
          onClick={() => {
            setIsOpen((current) => !current)
          }}
          type="button"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
      </nav>
      <div
        aria-label="Mobile navigation"
        className={cx(
          'border-t-4 border-ink-950 bg-ink-800 px-5 py-5 lg:hidden',
          isOpen ? 'block' : 'hidden'
        )}
        id="mobile-navigation"
        role="navigation"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          {navigationItems.map((item) => (
            <a
              className="rounded-lg py-2 font-bold text-paper-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              href={item.href}
              key={item.href}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
          <Button ariaLabel={sponsorshipNavItem.label} href={sponsorshipNavItem.href}>
            {sponsorshipNavItem.label}
          </Button>
        </div>
      </div>
      <ScrollProgress />
    </header>
  )
})

Navbar.displayName = 'Navbar'
