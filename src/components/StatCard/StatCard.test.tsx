import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'
import type { StatItem } from '@/types'

import { StatCard } from './StatCard'

const stat: StatItem = {
  label: 'Highlighted metric',
  value: 10247,
  suffix: '',
  description: 'Description for highlighted metric.',
  highlight: true,
}

const standardStat: StatItem = {
  label: 'Standard metric',
  value: 35200,
  suffix: '+',
}

describe('StatCard', (): void => {
  describe('when rendered with a highlighted stat', (): void => {
    it('should show the label and sponsor-facing description', (): void => {
      renderWithProviders(<StatCard stat={stat} />)

      expect(screen.getByText(stat.label)).toBeInTheDocument()
      expect(screen.getByText('Description for highlighted metric.')).toBeInTheDocument()
    })

    it('should render standard stats without a description', (): void => {
      renderWithProviders(<StatCard stat={standardStat} />)

      expect(screen.getByText(standardStat.label)).toBeInTheDocument()
      expect(screen.queryByText(/Description/)).not.toBeInTheDocument()
    })
  })
})
