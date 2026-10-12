import type { Config } from 'tailwindcss'

import { designTokens } from './src/styles/theme'

const { backgrounds } = designTokens

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...designTokens.colors,
      },
      fontFamily: {
        display: ['"Lilita One"', 'ui-rounded', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '8rem',
        'section-sm': '4rem',
      },
      boxShadow: {
        ...designTokens.shadows,
      },
      backgroundImage: {
        studs: backgrounds.studs,
        about: backgrounds.about,
        receipt: backgrounds.receipt,
        checker: backgrounds.checker,
        blueprint: backgrounds.blueprint,
        'zigzag-up': backgrounds.zigzagUp,
        'zigzag-down': backgrounds.zigzagDown,
      },
      keyframes: {
        bob: {
          '0%, 100%': { translate: '0 0' },
          '50%': { translate: '0 -10px' },
        },
        wiggle: {
          '0%, 100%': { rotate: '0deg' },
          '25%': { rotate: '-3deg' },
          '50%': { rotate: '2.5deg' },
          '75%': { rotate: '-1.5deg' },
        },
        nudge: {
          '0%, 86%, 100%': { rotate: '0deg' },
          '89%': { rotate: '-4deg' },
          '92%': { rotate: '4deg' },
          '95%': { rotate: '-3deg' },
          '98%': { rotate: '2deg' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(90deg)', opacity: '1' },
        },
      },
      animation: {
        bob: 'bob 4s ease-in-out infinite',
        wiggle: 'wiggle 0.3s ease-in-out',
        nudge: 'nudge 6s ease-in-out infinite',
        ticker: 'ticker 30s linear infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
