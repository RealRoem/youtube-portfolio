import type { ReactNode } from 'react'

import type { ButtonVariant } from '@/styles/theme'

import type { FeaturedVideo, StatItem } from './creator'

export interface ErrorBoundaryProps {
  readonly children: ReactNode
}

export interface ErrorBoundaryState {
  readonly hasError: boolean
}

export interface PageLayoutProps {
  readonly children: ReactNode
}

export interface ButtonProps {
  readonly children: ReactNode
  readonly href: string
  readonly ariaLabel: string
  readonly variant?: ButtonVariant
  readonly className?: string
}

export interface SectionProps {
  readonly children: ReactNode
  readonly id: string
  readonly className?: string
  readonly labelledBy?: string
}

export interface RevealProps {
  readonly children: ReactNode
  readonly className?: string
  readonly delay?: number
}

export interface StatCardProps {
  readonly stat: StatItem
}

export interface VideoCardProps {
  readonly video: FeaturedVideo
}

export interface CoinParticle {
  readonly id: number
  readonly x: number
  readonly y: number
}

export interface CoinBurstProps {
  readonly children: ReactNode
  readonly ariaLabel: string
  readonly className?: string
}

export interface TickerProps {
  readonly items: readonly string[]
}
