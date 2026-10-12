import { Component, type ErrorInfo, type ReactNode } from 'react'

import type { ErrorBoundaryProps, ErrorBoundaryState } from '@/types'

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    globalThis.reportError(
      new Error(`Application render failure: ${error.message}`, { cause: info })
    )
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-ink-950 px-6 text-center text-paper-100">
          <section aria-labelledby="error-title" className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.36em] text-coin-300">
              Portfolio unavailable
            </p>
            <h1 id="error-title" className="mt-4 font-display text-4xl">
              Something failed while loading Roem&apos;s portfolio.
            </h1>
            <p className="mt-4 text-paper-300">
              Refresh the page or contact the sponsorship team directly by email.
            </p>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}
