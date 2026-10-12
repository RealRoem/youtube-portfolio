import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { CoinBurst } from './CoinBurst'

const label = 'Make coins pop'

describe('CoinBurst', (): void => {
  describe('when rendered', (): void => {
    it('should expose a labelled button around its content', (): void => {
      renderWithProviders(<CoinBurst ariaLabel={label}>Avatar</CoinBurst>)

      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    })

    it('should have no accessibility violations', async (): Promise<void> => {
      const { container } = renderWithProviders(<CoinBurst ariaLabel={label}>Avatar</CoinBurst>)

      expect(await axe(container)).toHaveNoViolations()
    })
  })

  describe('when the button is clicked', (): void => {
    it('should spawn decorative coins', async (): Promise<void> => {
      const user = userEvent.setup()
      const { container } = renderWithProviders(<CoinBurst ariaLabel={label}>Avatar</CoinBurst>)

      await user.click(screen.getByRole('button', { name: label }))

      expect(container.querySelectorAll('[aria-hidden="true"] > span').length).toBeGreaterThan(0)
    })
  })
})
