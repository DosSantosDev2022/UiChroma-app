
const baseConfig = {
  content: [
    '../../apps/*/src/**/*.{js,ts,jsx,tsx}', // Para aplicações no monorepo
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}', // Para pacotes compartilhados
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: 'hsl(var(--primary))',
        'primary-hover': 'hsl(var(--primary-hover))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-hover': 'hsl(var(--secondary-hover))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-hover': 'hsl(var(--muted-hover))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-hover': 'hsl(var(--accent-hover))',
        'accent-foreground': 'hsl(var(--accent-foreground))',

        danger: 'hsl(var(--danger))',
        'danger-hover': 'hsl(var(--danger-hover))',
        'danger-foreground': 'hsl(var(--danger-foreground))',
        warning: 'hsl(var(--warning))',
        'warning-hover': 'hsl(var(--warning-hover))',
        'warning-foreground': 'hsl(var(--warning-foreground))',
        success: 'hsl(var(--success))',
        'success-hover': 'hsl(var(--success-hover))',
        'success-foreground': 'hsl(var(--success-foreground))',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        'chart-1': 'hsl(var(--chart1))',
        'chart-2': 'hsl(var(--chart2))',
        'chart-3': 'hsl(var(--chart3))',
        'chart-4': 'hsl(var(--chart4))',
        'chart-5': 'hsl(var(--chart5))',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-top': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-bottom': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-to-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-to-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out forwards',
        'slide-in-from-top': 'slide-in-from-top 0.5s ease-out forwards',
        'slide-out-to-top': 'slide-out-to-top 0.5s ease-out forwards',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.5s ease-out forwards',
        'slide-out-to-bottom': 'slide-out-to-bottom 0.5s ease-out forwards',
        'slide-in-from-left': 'slide-in-from-left 0.5s ease-out forwards',
        'slide-out-to-left': 'slide-out-to-left 0.5s ease-out forwards',
        'slide-in-from-right': 'slide-in-from-right 0.5s ease-out forwards',
        'slide-out-to-right': 'slide-out-to-right 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwind-merge'),
    require('tailwind-scrollbar'),
  ],
};

export default baseConfig
