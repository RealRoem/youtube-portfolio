import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { COIN_COUNT, COIN_LIFETIME_MS } from '@/constants'

import { useCoinBurst } from './useCoinBurst'

describe('useCoinBurst', (): void => {
  beforeEach((): void => {
    vi.useFakeTimers()
  })

  afterEach((): void => {
    vi.useRealTimers()
  })

  describe('when a burst is triggered', (): void => {
    it('should start without coins', (): void => {
      const { result } = renderHook(() => useCoinBurst())

      expect(result.current.coins).toHaveLength(0)
    })

    it('should spawn a full batch of coins with unique ids', (): void => {
      const { result } = renderHook(() => useCoinBurst())

      act(() => {
        result.current.burst()
      })

      expect(result.current.coins).toHaveLength(COIN_COUNT)
      expect(new Set(result.current.coins.map((coin) => coin.id)).size).toBe(COIN_COUNT)
    })

    it('should remove the coins after their lifetime', (): void => {
      const { result } = renderHook(() => useCoinBurst())

      act(() => {
        result.current.burst()
      })
      act(() => {
        vi.advanceTimersByTime(COIN_LIFETIME_MS)
      })

      expect(result.current.coins).toHaveLength(0)
    })
  })
})
