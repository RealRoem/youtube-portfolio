import type { ContactLink } from '@/types'

export interface ContactSectionProps {
  readonly links: readonly ContactLink[]
}

export interface SparklePosition {
  readonly left: number
  readonly top: number
  readonly delaySeconds: number
}
