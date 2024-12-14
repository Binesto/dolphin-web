import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

export const texts = {
  'title-h1': [
    '3.5rem',
    {
      lineHeight: '4rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h2': [
    '3rem',
    {
      lineHeight: '3.5rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h3': [
    '2.5rem',
    {
      lineHeight: '3rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h4': [
    '2rem',
    {
      lineHeight: '2.5rem',
      letterSpacing: '-0.005em',
      fontWeight: '500',
    },
  ],
  'title-h5': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'title-h6': [
    '1.25rem',
    {
      lineHeight: '1.75rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'label-xl': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'label-lg': [
    '1.125rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'label-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.011em',
      fontWeight: '500',
    },
  ],
  'label-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '-0.006em',
      fontWeight: '500',
    },
  ],
  'label-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'paragraph-xl': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  'paragraph-lg': [
    '1.125rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  'paragraph-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.011em',
      fontWeight: '400',
    },
  ],
  'paragraph-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '-0.006em',
      fontWeight: '400',
    },
  ],
  'paragraph-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0em',
      fontWeight: '400',
    },
  ],
  'subheading-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '0.06em',
      fontWeight: '500',
    },
  ],
  'subheading-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '0.06em',
      fontWeight: '500',
    },
  ],
  'subheading-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0.04em',
      fontWeight: '500',
    },
  ],
  'subheading-2xs': [
    '.6875rem',
    {
      lineHeight: '.75rem',
      letterSpacing: '0.02em',
      fontWeight: '500',
    },
  ],
  'doc-label': [
    '1.125rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'doc-paragraph': [
    '1.125rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
} as unknown as Record<string, string>;

export const shadows = {
  'regular-xs': '0 1px 2px 0 #0a0d1408',
  'regular-sm': '0 2px 4px #1b1c1d0a',
  'regular-md': '0 16px 32px -12px #0e121b1a',
  'button-primary-focus': [
    '0 0 0 2px theme(colors.bg[white-0])',
    '0 0 0 4px theme(colors.primary[alpha-10])',
  ],
  'button-important-focus': [
    '0 0 0 2px theme(colors.bg[white-0])',
    '0 0 0 4px theme(colors.neutral[alpha-16])',
  ],
  'button-error-focus': [
    '0 0 0 2px theme(colors.bg[white-0])',
    '0 0 0 4px theme(colors.red[alpha-10])',
  ],
  'fancy-buttons-neutral': ['0 1px 2px 0 #1b1c1d7a', '0 0 0 1px #242628'],
  'fancy-buttons-primary': [
    '0 1px 2px 0 #0e121b3d',
    '0 0 0 1px theme(colors.primary[base])',
  ],
  'fancy-buttons-error': [
    '0 1px 2px 0 #0e121b3d',
    '0 0 0 1px theme(colors.error[base])',
  ],
  'fancy-buttons-stroke': [
    '0 1px 3px 0 #0e121b1f',
    '0 0 0 1px theme(colors.stroke[soft-200])',
  ],
  'toggle-switch': ['0 6px 10px 0 #0e121b0f', '0 2px 4px 0 #0e121b08'],
  'switch-thumb': ['0 4px 8px 0 #1b1c1d0f', '0 2px 4px 0 #0e121b14'],
  tooltip: ['0 12px 24px 0 #0e121b0f', '0 1px 2px 0 #0e121b08'],
} as unknown as Record<string, string>;

export const borderRadii = {
  '10': '.625rem',
  '20': '1.25rem',
} as unknown as Record<string, string>;

const config = {
  darkMode: ['class'],
  safelist: ['.dark'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        '0': 'var(--gray-0)',
        '50': 'var(--gray-50)',
        '100': 'var(--gray-100)',
        '200': 'var(--gray-200)',
        '300': 'var(--gray-300)',
        '400': 'var(--gray-400)',
        '500': 'var(--gray-500)',
        '600': 'var(--gray-600)',
        '700': 'var(--gray-700)',
        '800': 'var(--gray-800)',
        '900': 'var(--gray-900)',
        '950': 'var(--gray-950)',
        'alpha-24': 'var(--gray-alpha-24)',
        'alpha-16': 'var(--gray-alpha-16)',
        'alpha-10': 'var(--gray-alpha-10)',
      },
      slate: {
        '0': 'var(--slate-0)',
        '50': 'var(--slate-50)',
        '100': 'var(--slate-100)',
        '200': 'var(--slate-200)',
        '300': 'var(--slate-300)',
        '400': 'var(--slate-400)',
        '500': 'var(--slate-500)',
        '600': 'var(--slate-600)',
        '700': 'var(--slate-700)',
        '800': 'var(--slate-800)',
        '900': 'var(--slate-900)',
        '950': 'var(--slate-950)',
        'alpha-24': 'var(--slate-alpha-24)',
        'alpha-16': 'var(--slate-alpha-16)',
        'alpha-10': 'var(--slate-alpha-10)',
      },
      neutral: {
        '0': 'var(--neutral-0)',
        '50': 'var(--neutral-50)',
        '100': 'var(--neutral-100)',
        '200': 'var(--neutral-200)',
        '300': 'var(--neutral-300)',
        '400': 'var(--neutral-400)',
        '500': 'var(--neutral-500)',
        '600': 'var(--neutral-600)',
        '700': 'var(--neutral-700)',
        '800': 'var(--neutral-800)',
        '900': 'var(--neutral-900)',
        '950': 'var(--neutral-950)',
        'alpha-24': 'var(--neutral-alpha-24)',
        'alpha-16': 'var(--neutral-alpha-16)',
        'alpha-10': 'var(--neutral-alpha-10)',
      },
      blue: {
        '50': 'var(--blue-50)',
        '100': 'var(--blue-100)',
        '200': 'var(--blue-200)',
        '300': 'var(--blue-300)',
        '400': 'var(--blue-400)',
        '500': 'var(--blue-500)',
        '600': 'var(--blue-600)',
        '700': 'var(--blue-700)',
        '800': 'var(--blue-800)',
        '900': 'var(--blue-900)',
        '950': 'var(--blue-950)',
        'alpha-24': 'var(--blue-alpha-24)',
        'alpha-16': 'var(--blue-alpha-16)',
        'alpha-10': 'var(--blue-alpha-10)',
      },
      orange: {
        '50': 'var(--orange-50)',
        '100': 'var(--orange-100)',
        '200': 'var(--orange-200)',
        '300': 'var(--orange-300)',
        '400': 'var(--orange-400)',
        '500': 'var(--orange-500)',
        '600': 'var(--orange-600)',
        '700': 'var(--orange-700)',
        '800': 'var(--orange-800)',
        '900': 'var(--orange-900)',
        '950': 'var(--orange-950)',
        'alpha-24': 'var(--orange-alpha-24)',
        'alpha-16': 'var(--orange-alpha-16)',
        'alpha-10': 'var(--orange-alpha-10)',
      },
      red: {
        '50': 'var(--red-50)',
        '100': 'var(--red-100)',
        '200': 'var(--red-200)',
        '300': 'var(--red-300)',
        '400': 'var(--red-400)',
        '500': 'var(--red-500)',
        '600': 'var(--red-600)',
        '700': 'var(--red-700)',
        '800': 'var(--red-800)',
        '900': 'var(--red-900)',
        '950': 'var(--red-950)',
        'alpha-24': 'var(--red-alpha-24)',
        'alpha-16': 'var(--red-alpha-16)',
        'alpha-10': 'var(--red-alpha-10)',
      },
      green: {
        '50': 'var(--green-50)',
        '100': 'var(--green-100)',
        '200': 'var(--green-200)',
        '300': 'var(--green-300)',
        '400': 'var(--green-400)',
        '500': 'var(--green-500)',
        '600': 'var(--green-600)',
        '700': 'var(--green-700)',
        '800': 'var(--green-800)',
        '900': 'var(--green-900)',
        '950': 'var(--green-950)',
        'alpha-24': 'var(--green-alpha-24)',
        'alpha-16': 'var(--green-alpha-16)',
        'alpha-10': 'var(--green-alpha-10)',
      },
      yellow: {
        '50': 'var(--yellow-50)',
        '100': 'var(--yellow-100)',
        '200': 'var(--yellow-200)',
        '300': 'var(--yellow-300)',
        '400': 'var(--yellow-400)',
        '500': 'var(--yellow-500)',
        '600': 'var(--yellow-600)',
        '700': 'var(--yellow-700)',
        '800': 'var(--yellow-800)',
        '900': 'var(--yellow-900)',
        '950': 'var(--yellow-950)',
        'alpha-24': 'var(--yellow-alpha-24)',
        'alpha-16': 'var(--yellow-alpha-16)',
        'alpha-10': 'var(--yellow-alpha-10)',
      },
      purple: {
        '50': 'var(--purple-50)',
        '100': 'var(--purple-100)',
        '200': 'var(--purple-200)',
        '300': 'var(--purple-300)',
        '400': 'var(--purple-400)',
        '500': 'var(--purple-500)',
        '600': 'var(--purple-600)',
        '700': 'var(--purple-700)',
        '800': 'var(--purple-800)',
        '900': 'var(--purple-900)',
        '950': 'var(--purple-950)',
        'alpha-24': 'var(--purple-alpha-24)',
        'alpha-16': 'var(--purple-alpha-16)',
        'alpha-10': 'var(--purple-alpha-10)',
      },
      sky: {
        '50': 'var(--sky-50)',
        '100': 'var(--sky-100)',
        '200': 'var(--sky-200)',
        '300': 'var(--sky-300)',
        '400': 'var(--sky-400)',
        '500': 'var(--sky-500)',
        '600': 'var(--sky-600)',
        '700': 'var(--sky-700)',
        '800': 'var(--sky-800)',
        '900': 'var(--sky-900)',
        '950': 'var(--sky-950)',
        'alpha-24': 'var(--sky-alpha-24)',
        'alpha-16': 'var(--sky-alpha-16)',
        'alpha-10': 'var(--sky-alpha-10)',
      },
      pink: {
        '50': 'var(--pink-50)',
        '100': 'var(--pink-100)',
        '200': 'var(--pink-200)',
        '300': 'var(--pink-300)',
        '400': 'var(--pink-400)',
        '500': 'var(--pink-500)',
        '600': 'var(--pink-600)',
        '700': 'var(--pink-700)',
        '800': 'var(--pink-800)',
        '900': 'var(--pink-900)',
        '950': 'var(--pink-950)',
        'alpha-24': 'var(--pink-alpha-24)',
        'alpha-16': 'var(--pink-alpha-16)',
        'alpha-10': 'var(--pink-alpha-10)',
      },
      teal: {
        '50': 'var(--teal-50)',
        '100': 'var(--teal-100)',
        '200': 'var(--teal-200)',
        '300': 'var(--teal-300)',
        '400': 'var(--teal-400)',
        '500': 'var(--teal-500)',
        '600': 'var(--teal-600)',
        '700': 'var(--teal-700)',
        '800': 'var(--teal-800)',
        '900': 'var(--teal-900)',
        '950': 'var(--teal-950)',
        'alpha-24': 'var(--teal-alpha-24)',
        'alpha-16': 'var(--teal-alpha-16)',
        'alpha-10': 'var(--teal-alpha-10)',
      },
      white: {
        DEFAULT: '#fff',
        'alpha-24': 'var(--white-alpha-24)',
        'alpha-16': 'var(--white-alpha-16)',
        'alpha-10': 'var(--white-alpha-10)',
      },
      black: {
        DEFAULT: '#000',
        'alpha-24': 'var(--black-alpha-24)',
        'alpha-16': 'var(--black-alpha-16)',
        'alpha-10': 'var(--black-alpha-10)',
      },
      primary: {
        dark: 'var(--primary-dark)',
        darker: 'var(--primary-darker)',
        base: 'var(--primary-base)',
        'alpha-24': 'var(--primary-alpha-24)',
        'alpha-16': 'var(--primary-alpha-16)',
        'alpha-10': 'var(--primary-alpha-10)',
      },
      static: {
        black: 'var(--static-black)',
        white: 'var(--static-white)',
      },
      bg: {
        'strong-950': 'var(--bg-strong-950)',
        'surface-800': 'var(--bg-surface-800)',
        'sub-300': 'var(--bg-sub-300)',
        'soft-200': 'var(--bg-soft-200)',
        'weak-50': 'var(--bg-weak-50)',
        'white-0': 'var(--bg-white-0)',
      },
      text: {
        'strong-950': 'var(--text-strong-950)',
        'sub-600': 'var(--text-sub-600)',
        'soft-400': 'var(--text-soft-400)',
        'disabled-300': 'var(--text-disabled-300)',
        'white-0': 'var(--text-white-0)',
      },
      stroke: {
        'strong-950': 'var(--stroke-strong-950)',
        'sub-300': 'var(--stroke-sub-300)',
        'soft-200': 'var(--stroke-soft-200)',
        'white-0': 'var(--stroke-white-0)',
      },
      faded: {
        dark: 'var(--faded-dark)',
        base: 'var(--faded-base)',
        light: 'var(--faded-light)',
        lighter: 'var(--faded-lighter)',
      },
      information: {
        dark: 'var(--information-dark)',
        base: 'var(--information-base)',
        light: 'var(--information-light)',
        lighter: 'var(--information-lighter)',
      },
      warning: {
        dark: 'var(--warning-dark)',
        base: 'var(--warning-base)',
        light: 'var(--warning-light)',
        lighter: 'var(--warning-lighter)',
      },
      error: {
        dark: 'var(--error-dark)',
        base: 'var(--error-base)',
        light: 'var(--error-light)',
        lighter: 'var(--error-lighter)',
      },
      success: {
        dark: 'var(--success-dark)',
        base: 'var(--success-base)',
        light: 'var(--success-light)',
        lighter: 'var(--success-lighter)',
      },
      away: {
        dark: 'var(--away-dark)',
        base: 'var(--away-base)',
        light: 'var(--away-light)',
        lighter: 'var(--away-lighter)',
      },
      feature: {
        dark: 'var(--feature-dark)',
        base: 'var(--feature-base)',
        light: 'var(--feature-light)',
        lighter: 'var(--feature-lighter)',
      },
      verified: {
        dark: 'var(--verified-dark)',
        base: 'var(--verified-base)',
        light: 'var(--verified-light)',
        lighter: 'var(--verified-lighter)',
      },
      highlighted: {
        dark: 'var(--highlighted-dark)',
        base: 'var(--highlighted-base)',
        light: 'var(--highlighted-light)',
        lighter: 'var(--highlighted-lighter)',
      },
      stable: {
        dark: 'var(--stable-dark)',
        base: 'var(--stable-base)',
        light: 'var(--stable-light)',
        lighter: 'var(--stable-lighter)',
      },
      social: {
        apple: 'var(--social-apple)',
        twitter: 'var(--social-twitter)',
        github: 'var(--social-github)',
        notion: 'var(--social-notion)',
        tidal: 'var(--social-tidal)',
        amazon: 'var(--social-amazon)',
        zendesk: 'var(--social-zendesk)',
      },
      overlay: {
        DEFAULT: 'var(--overlay)',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontSize: {
      ...texts,
      inherit: 'inherit',
    },
    boxShadow: {
      ...shadows,
      none: defaultTheme.boxShadow.none,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      borderRadius: {
        ...borderRadii,
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
          to: { height: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
