import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { ScrollProgress } from './ScrollProgress'

describe('ScrollProgress', (): void => {
  describe('when rendered at the top of the page', (): void => {
    it('should be decorative and hide the level-up badge', (): void => {
      const { container } = renderWithProviders(<ScrollProgress />)

      expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
      expect(container.querySelector('p')).toBeNull()
    })
  })
})
