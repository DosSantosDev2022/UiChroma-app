import { Colors } from "@/@types/colorsState";


export const generateCodeCss = (colors: Colors) => {
  return `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        :root {
          --background: ${colors.background};
          --foreground: ${colors.foreground};
          --primary: ${colors.primary};
          --primary-hover: ${colors.primary_hover}
          --primary-foreground: ${colors.primary_foreground};
          --secondary: ${colors.secondary};
          --secondary-hover: ${colors.secondary_hover}
          --secondary-foreground: ${colors.secondary_foreground};
          --muted: ${colors.muted};
          --muted-hover: ${colors.muted_hover}
          --muted-foreground: ${colors.muted_foreground};
          --accent: ${colors.accent};
          --accent-hover ${colors.accent_hover}
          --accent-foreground: ${colors.accent_foreground};

          --danger: ${colors.danger};
          --danger-hover: ${colors.danger_hover}
          --danger-foreground: ${colors.danger_foreground};
          --warning: ${colors.warning}
          --warning-hover: ${colors.warning_hover}
          --warning-foreground: ${colors.warning_foregorund}
          --sucess: ${colors.sucess}
          --sucess-hover: ${colors.sucess_hover}
          --sucess-foreground: ${colors.sucess_foreground}

          --border: ${colors.border};
          --ring: ${colors.ring};
          --chart-1: ${colors.chart1};
          --chart-2: ${colors.chart2};
          --chart-3: ${colors.chart3};
          --chart-4: ${colors.chart4};
          --chart-5: ${colors.chart5};
       }

        .dark {
          --background: ${colors.dark_background};
          --foreground: ${colors.dark_foreground};
          --primary: ${colors.dark_primary};
          --primary-hover: ${colors.dark_primary_hover}
          --primary-foreground: ${colors.dark_primary_foreground};
          --secondary: ${colors.dark_secondary};
          --secondary-hover: ${colors.dark_secondary_hover}
          --secondary-foreground: ${colors.dark_secondary_foreground};
          --muted: ${colors.dark_muted};
          --muted-hover: ${colors.dark_muted_hover}
          --muted-foreground: ${colors.dark_muted_foreground};
          --accent: ${colors.dark_accent};
          --accent-hover: ${colors.dark_accent_hover}
          --accent-foreground: ${colors.dark_accent_foreground};

          --danger: ${colors.dark_danger};
          --danger-hover: ${colors.dark_danger_hover}
          --danger-foreground: ${colors.dark_danger_foreground};
          --warning: ${colors.dark_warning}
          --warning: ${colors.dark_warning_hover}
          --warning-foreground: ${colors.dark_warning_foregorund}
          --sucess: ${colors.dark_sucess}
          --sucess: ${colors.dark_sucess_hover}
          --sucess-foreground: ${colors.dark_secondary_foreground}

          --border: ${colors.dark_border};
          --ring: ${colors.dark_ring};
          --chart-1: ${colors.dark_chart1};
          --chart-2: ${colors.dark_chart2};
          --chart-3: ${colors.dark_chart3};
          --chart-4: ${colors.dark_chart4};
          --chart-5: ${colors.dark_chart5};
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