import { ColorsState } from "@/@types/colorsState";


export const generateCodeCss = (colors: ColorsState) => {
  return `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        :root {
          --background: ${colors.background};
          --foreground: ${colors.foreground};
          --card: ${colors.card};
          --card-foreground: ${colors.cardForeground};
          --popover: ${colors.popover};
          --popover-foreground: ${colors.popoverForeground};
          --primary: ${colors.primary};
          --primary-foreground: ${colors.primaryForeground};
          --secondary: ${colors.secondary};
          --secondary-foreground: ${colors.secondaryForeground};
          --muted: ${colors.muted};
          --muted-foreground: ${colors.mutedForeground};
          --accent: ${colors.accent};
          --accent-foreground: ${colors.accentForeground};
          --destructive: ${colors.destructive};
          --destructive-foreground: ${colors.destructiveForeground};
          --border: ${colors.border};
          --input: ${colors.input};
          --ring: ${colors.ring};
          --chart-1: ${colors.chart1};
          --chart-2: ${colors.chart2};
          --chart-3: ${colors.chart3};
          --chart-4: ${colors.chart4};
          --chart-5: ${colors.chart5};
       }

        .dark {
          --background: ${colors.darkBackground};
          --foreground: ${colors.darkForeground};
          --card: ${colors.darkCard};
          --card-foreground: ${colors.darkCardForeground};
          --popover: ${colors.darkPopover};
          --popover-foreground: ${colors.darkPopoverForeground};
          --primary: ${colors.darkPrimary};
          --primary-foreground: ${colors.darkPrimaryForeground};
          --secondary: ${colors.darkSecondary};
          --secondary-foreground: ${colors.darkSecondaryForeground};
          --muted: ${colors.darkMuted};
          --muted-foreground: ${colors.darkMutedForeground};
          --accent: ${colors.darkAccent};
          --accent-foreground: ${colors.darkAccentForeground};
          --destructive: ${colors.darkDestructive};
          --destructive-foreground: ${colors.darkDestructiveForeground};
          --border: ${colors.darkBorder};
          --input: ${colors.darkInput};
          --ring: ${colors.darkRing};
          --chart-1: ${colors.darkChart1};
          --chart-2: ${colors.darkChart2};
          --chart-3: ${colors.darkChart3};
          --chart-4: ${colors.darkChart4};
          --chart-5: 3${colors.darkChart5};
          } 
      }
        
   `
};

export const generateTailwindConfig = () => {
  return `

    import type { Config } from 'tailwindcss'

  const config: Config = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: 'hsl(var(--card))',
            'card-foreground': 'hsl(var(--card-foreground))',
            'popover: 'hsl(var(--popover))',
            'popover-foreground': 'hsl(var(--popover-foreground))',
            'primary: 'hsl(var(--primary))',
            'primary-foreground': 'hsl(var(--primary-foreground))',
            'secondary: 'hsl(var(--secondary))',
            'secondary-foreground': 'hsl(var(--secondary-foreground))',
            'muted: 'hsl(var(--muted))',
            'muted-foreground': 'hsl(var(--muted-foreground))',
            'accent: 'hsl(var(--accent))',
            'accent-foreground': 'hsl(var(--accent-foreground))',
            'destructive: 'hsl(var(--destructive))',
            'destructive-foreground': 'hsl(var(--destructive-foreground))',
            'border: 'hsl(var(--border))',
            'input: 'hsl(var(--input))',
            'ring: 'hsl(var(--ring))',
            'chart-1': 'hsl(var(--chart-1))',
            'chart-2': 'hsl(var(--chart-2))',
            'chart-3': 'hsl(var(--chart-3))',
            'chart-4': 'hsl(var(--chart-4))',
            'chart-5': 'hsl(var(--chart-5))',
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
      };

     export default config
    `
}