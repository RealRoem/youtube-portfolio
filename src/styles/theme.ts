export const designTokens = {
  colors: {
    ink: {
      950: '#0b0924',
      900: '#130f3d',
      800: '#1c1759',
      700: '#2a2380',
      600: '#3b32b0',
      500: '#6a5fe0',
    },
    coin: {
      100: '#fff4bf',
      300: '#ffd23f',
      400: '#f5b301',
      700: '#8a5a00',
    },
    cash: {
      300: '#6ee7a0',
      400: '#34d17a',
      700: '#0d6b3a',
    },
    sky: {
      300: '#7dd3fc',
      400: '#38bdf8',
    },
    pop: {
      300: '#ff9bd2',
      400: '#ff6ec0',
    },
    paper: {
      100: '#fffdf5',
      300: '#d4d1f5',
      500: '#a9a5e8',
    },
    discord: '#6574d9',
  },
  shadows: {
    block: '0 6px 0 0 #0b0924',
    blockSm: '0 4px 0 0 #0b0924',
    cta: '0 6px 0 0 #8a5a00',
    ctaPressed: '0 0 0 0 #8a5a00',
    cash: '0 6px 0 0 #0d6b3a',
    lift: '0 10px 0 0 #0b0924',
  },
  backgrounds: {
    studs: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.07) 0 3px, transparent 4px)',
    about:
      'radial-gradient(circle at 12% 18%, rgba(56, 189, 248, 0.22), transparent 38%), radial-gradient(circle at 88% 78%, rgba(255, 110, 192, 0.2), transparent 38%), repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.035) 0 16px, transparent 16px 32px)',
    receipt:
      'repeating-linear-gradient(-45deg, rgba(110, 231, 160, 0.09) 0 12px, transparent 12px 24px)',
    checker:
      'conic-gradient(rgba(255, 255, 255, 0.045) 25%, transparent 0 50%, rgba(255, 255, 255, 0.045) 0 75%, transparent 0)',
    blueprint:
      'linear-gradient(rgba(125, 211, 252, 0.13) 2px, transparent 2px), linear-gradient(90deg, rgba(125, 211, 252, 0.13) 2px, transparent 2px)',
    zigzagUp:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='16'%3E%3Cpath d='M0 16 16 0 32 16Z' fill='%231c1759'/%3E%3C/svg%3E\")",
    zigzagDown:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='16'%3E%3Cpath d='M0 0 16 16 32 0Z' fill='%231c1759'/%3E%3C/svg%3E\")",
  },
} as const

export const theme = {
  layout: {
    page: 'min-h-screen text-paper-100 antialiased',
    sectionHero: 'bg-ink-900 bg-studs bg-[length:32px_32px]',
    sectionAbout: 'bg-ink-900 bg-about',
    sectionStats: 'relative bg-ink-800 bg-receipt',
    sectionVideos: 'bg-ink-900 bg-checker bg-[length:64px_64px]',
    sectionSponsorship: 'bg-ink-950 bg-blueprint bg-[length:40px_40px]',
    zigzagTop: 'pointer-events-none absolute inset-x-0 -top-4 h-4 bg-zigzag-up bg-repeat-x',
    zigzagBottom: 'pointer-events-none absolute inset-x-0 -bottom-4 h-4 bg-zigzag-down bg-repeat-x',
  },
  text: {
    eyebrow:
      'inline-flex items-center rounded-lg border-2 border-ink-500 bg-ink-800 px-3 py-1 font-display text-sm uppercase tracking-wider text-sky-300',
    sectionTitle: 'font-display text-4xl leading-[1.05] tracking-tight text-paper-100 sm:text-6xl',
    cardTitle: 'mt-4 font-display text-2xl leading-snug text-paper-100',
    body: 'text-lg leading-8 text-paper-300',
    cardBody: 'leading-7 text-paper-300',
    accentLink:
      'font-bold text-cash-300 underline decoration-2 underline-offset-4 transition-colors duration-150 hover:text-cash-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300',
  },
  icon: {
    accent: 'text-cash-300',
  },
  sticker:
    'absolute z-10 rounded-lg border-4 border-ink-950 bg-pop-300 px-3 py-1 font-display text-sm uppercase tracking-wide text-ink-950 shadow-blockSm',
  surface: {
    card: 'h-full rounded-2xl border-4 border-ink-950 bg-ink-700 p-6 shadow-block transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-1 hover:animate-wiggle hover:shadow-lift sm:p-8',
    panel: 'rounded-3xl border-4 border-ink-950 bg-ink-700 shadow-block',
    statBase:
      'h-full rounded-2xl border-4 border-ink-950 p-6 shadow-block transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-1 hover:animate-wiggle hover:shadow-lift',
    statDefault: 'bg-ink-700',
    statHighlight: 'bg-cash-300 text-ink-950 shadow-cash',
    videoCard:
      'group overflow-hidden rounded-2xl border-4 border-ink-950 bg-ink-700 shadow-block transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-1 hover:animate-wiggle hover:shadow-lift',
  },
  button: {
    base: 'inline-flex min-h-12 w-full items-center justify-center rounded-xl border-4 px-6 font-display text-base uppercase tracking-wide transition-[background-color,transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:animate-wiggle active:translate-y-1 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:w-auto',
    variants: {
      primary:
        'border-ink-950 bg-coin-300 text-ink-950 shadow-cta hover:bg-coin-100 active:shadow-ctaPressed',
      secondary:
        'border-ink-500 bg-ink-700 text-paper-100 shadow-block hover:bg-ink-600 active:shadow-none',
      ghost: 'border-transparent text-paper-300 hover:text-paper-100',
    },
  },
  hero: {
    title:
      'mt-6 max-w-4xl font-display text-5xl leading-[1] tracking-tight text-paper-100 sm:text-7xl lg:text-8xl',
    titleMark: 'rounded-xl bg-cash-300 px-3 text-ink-950 [box-decoration-break:clone]',
    body: 'mt-8 max-w-2xl text-lg leading-8 text-paper-300',
    xpTrack: 'h-4 overflow-hidden rounded-full border-4 border-ink-950 bg-ink-950',
    xpFill: 'h-full rounded-full bg-cash-300',
    profilePanel:
      'relative animate-bob rounded-3xl border-4 border-ink-950 bg-ink-700 p-8 shadow-block sm:p-10 lg:rotate-2',
    avatarFrame: 'rounded-3xl border-4 border-ink-950 bg-sky-300 p-1 shadow-block',
    profileTitle: 'mt-6 font-display text-4xl tracking-tight text-paper-100',
    metricCard: 'rounded-xl border-4 border-ink-950 bg-ink-900 p-4 text-center',
    metricValue: 'font-display text-2xl tracking-tight text-paper-100',
    metricLabel: 'mt-1 text-xs font-bold uppercase tracking-wide text-paper-500',
  },
} as const

export type ButtonVariant = keyof typeof theme.button.variants
