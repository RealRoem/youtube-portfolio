export const LoadingFallback = (): React.JSX.Element => (
  <div
    aria-label="Loading portfolio section"
    className="flex min-h-40 items-center justify-center bg-ink-950 text-paper-300"
  >
    <span className="h-4 w-4 animate-ping rounded-sm bg-coin-300" />
  </div>
)
