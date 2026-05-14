import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        midnight: 'rgb(var(--color-midnight) / <alpha-value>)',
        slate: {
          DEFAULT: 'rgb(var(--color-slate) / <alpha-value>)',
          line: 'rgb(var(--color-slate-line) / <alpha-value>)'
        },
        bone: 'rgb(var(--color-bone) / <alpha-value>)',
        moon: 'rgb(var(--color-moon) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-dim': 'rgb(var(--color-accent-dim) / <alpha-value>)'
      },
      fontFamily: {
        sans: [
          'var(--font-sans-latin)',
          'var(--font-sans-jp)',
          'system-ui',
          'sans-serif'
        ],
        display: [
          'var(--font-display-latin)',
          'var(--font-display-jp)',
          'serif'
        ],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
