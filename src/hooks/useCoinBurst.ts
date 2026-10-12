import { useCallback, useState } from 'react'

import {
  COIN_COUNT,
  COIN_LIFETIME_MS,
  COIN_MAX_DISTANCE_PX,
  COIN_MIN_DISTANCE_PX,
} from '@/constants'
import type { CoinParticle } from '@/types'

interface UseCoinBurstResult {
  readonly coins: readonly CoinParticle[]
  readonly burst: () => void
}

let nextCoinId = 0

const createCoinBatch = (): readonly CoinParticle[] =>
  Array.from({ length: COIN_COUNT }, (_, index): CoinParticle => {
    const angle = Math.PI + (Math.PI * (index + Math.random() * 0.8)) / COIN_COUNT
    const distance =
      COIN_MIN_DISTANCE_PX + Math.random() * (COIN_MAX_DISTANCE_PX - COIN_MIN_DISTANCE_PX)

    nextCoinId += 1

    return { id: nextCoinId, x: Math.cos(angle) * distance, y: Math.sin(angle) * distance }
  })

export const useCoinBurst = (): UseCoinBurstResult => {
  const [coins, setCoins] = useState<readonly CoinParticle[]>([])

  const burst = useCallback((): void => {
    const batch = createCoinBatch()
    const batchIds = new Set(batch.map((coin) => coin.id))

    setCoins((current) => [...current, ...batch])
    window.setTimeout(() => {
      setCoins((current) => current.filter((coin) => !batchIds.has(coin.id)))
    }, COIN_LIFETIME_MS)
  }, [])

  return { coins, burst }
}
