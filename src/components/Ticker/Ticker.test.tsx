import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { Ticker } from './Ticker'

const items: readonly string[] = ['Guides', 'Tips']

describe('Ticker', (): void => {
  describe('when rendered with items', (): void => {
    it('should repeat the items so the loop is seamless', (): void => {
      const { container } = renderWithProviders(<Ticker items={items} />)

      expect(container.querySelectorAll('li')).toHaveLength(items.length * 2)
    })

    it('should be hidden from assistive technology', (): void => {
      const { container } = renderWithProviders(<Ticker items={items} />)

      expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
