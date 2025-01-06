import animations from "@repo/animations-ui"
const baseConfig = {
  content: [
    '../../apps/*/src/**/*.{js,ts,jsx,tsx}', // Para aplicações no monorepo
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}', // Para pacotes compartilhados
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-hover': 'var(--secondary-hover)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-hover': 'var(--muted-hover)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-foreground': 'var(--accent-foreground)',

        danger: 'var(--danger)',
        'danger-hover': 'var(--danger-hover)',
        'danger-foreground': 'var(--danger-foreground)',
        warning: 'var(--warning)',
        'warning-hover': 'var(--warning-hover)',
        'warning-foreground': 'var(--warning-foreground)',
        success: 'var(--success)',
        'success-hover': 'var(--success-hover)',
        'success-foreground': 'var(--success-foreground)',

        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',

        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',
      },
      ...animations
    },
  },
  plugins: [
    require('tailwind-merge'),
    require('tailwind-scrollbar'),
  ],
};

export default baseConfig
