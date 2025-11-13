import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const gradientStops = [
  '#5e2e84',
  '#722a7e 12%',
  '#7f2473 23%',
  '#8c1d67 35%',
  '#ad1a66 46%',
  '#ca1664 57%',
  '#e21262 66%',
  '#b95b98 74%',
  '#8381c1 81%',
  '#009de0 87%',
  '#93b2b8 92%',
  '#d0c686 96%',
  '#ffd829',
].join(',')

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './error.vue',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bam: {
          primary: '#8b1c66',
          paars: '#5f2f86',
          roze: '#e31362',
          geel: '#ffd827',
          blauw: '#0080c7',
          lichtblauw: '#009de1',
          donkerblauw: '#1e125e',
          oranje: '#f4a240',
        },
        text: {
          DEFAULT: '#111827',
          muted: '#4b5563',
        },
        border: {
          DEFAULT: '#e5e7eb',
          strong: '#d1d5db',
        },
      },
      backgroundImage: {
        'festival-gradient': `linear-gradient(315deg,${gradientStops})`,
      },
      fontFamily: {
        display: ['"Interstate"', '"Merriweather Sans"', 'sans-serif'],
        body: ['"Merriweather Sans"', '"Interstate"', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text.DEFAULT'),
            '--tw-prose-headings': theme('colors.bam.primary'),
            '--tw-prose-lead': theme('colors.text.muted'),
            '--tw-prose-links': theme('colors.bam.roze'),
            '--tw-prose-bold': theme('colors.text.DEFAULT'),
            '--tw-prose-hr': theme('colors.border.DEFAULT'),
            '--tw-prose-quotes': theme('colors.bam.donkerblauw'),
            '--tw-prose-quote-borders': theme('colors.bam.geel'),
            '--tw-prose-captions': theme('colors.text.muted'),
            '--tw-prose-code': theme('colors.bam.oranje'),
            '--tw-prose-pre-bg': '#1f2937',
            '--tw-prose-pre-code': '#f3f4f6',
            '--tw-prose-td-borders': theme('colors.border.strong'),
            '--tw-prose-th-borders': theme('colors.border.strong'),
            'a': {
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'color 150ms ease',
              color: theme('colors.bam.primary'),
            },
            'a:hover': {
              color: theme('colors.bam.donkerblauw'),
              textDecoration: 'underline',
            },
            'h1': {
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            },
            'h2': {
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            },
            'blockquote': {
              fontStyle: 'normal',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#e5e7eb',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': '#cbd5f5',
            '--tw-prose-links': theme('colors.bam.geel'),
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-hr': '#4b5563',
            '--tw-prose-quotes': '#f3f4f6',
            '--tw-prose-quote-borders': '#4b5563',
            '--tw-prose-captions': '#cbd5f5',
            '--tw-prose-code': theme('colors.bam.geel'),
            '--tw-prose-pre-code': '#cbd5f5',
            '--tw-prose-pre-bg': '#1f1b2d',
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config
