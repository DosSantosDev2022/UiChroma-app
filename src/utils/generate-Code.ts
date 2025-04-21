import type { Theme } from '@/@types/colors-themes-types'

export const generateCodeCss = (
	lightColors: Theme['light'],
	darkColors: Theme['dark'],
) => {
	return `
      @import 'tailwindcss';

      @custom-variant dark (&:is(.dark *));

      @theme {
        --color-background: var(--background);
        --color-foreground: var(--foreground);
        --color-primary: var(--primary);
        --color-primary-hover: var(--primary-hover);
        --color-primary-foreground: var(--primary-foreground);
        --color-secondary: var(--secondary);
        --color-secondary-hover: var(--secondary-hover);
        --color-secondary-foreground: var(--secondary-foreground);
        --color-muted: var(--muted);
        --color-muted-hover: var(--muted-hover);
        --color-muted-foreground: var(--muted-foreground);
        --color-accent: var(--accent);
        --color-accent-hover: var(--accent-hover);
        --color-accent-foreground: var(--accent-foreground);
        --color-danger: var(--danger);
        --color-danger-hover: var(--danger-hover);
        --color-danger-foreground: var(--danger-foreground);
        --color-warning: var(--warning);
        --color-warning-hover: var(--warning-hover);
        --color-warning-foreground: var(--warning-foreground);
        --color-success: var(--success);
        --color-success-hover: var(--success-hover);
        --color-success-foreground: var(--success-foreground);
        --color-border: var(--border);
        --color-input: var(--input);
        --color-ring: var(--ring);
        --color-chart-1: var(--chart-1);
        --color-chart-2: var(--chart-2);
        --color-chart-3: var(--chart-3);
        --color-chart-4: var(--chart-4);
        --color-chart-5: var(--chart-5);

        --animate-accordion-down: accordion-down 0.4s ease-out;
        --animate-accordion-up: accordion-up 0.4s ease-out;
        --animate-dropdown-in: dropdown-in 0.4s ease-out;
        --animate-dropdown-up: dropdown-up 0.4s ease-out;
        --animate-modal-in: modal-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        --animate-modal-out: modal-out 0.25s cubic-bezier(0.4, 0, 0.2, 1);

        @keyframes accordion-down {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--accordion-content-height);
          }
        }
        @keyframes accordion-up {
          from {
            height: var(--accordion-content-height);
          }
          to {
            height: 0;
            opacity: 0;
          }
        }
        @keyframes dropdown-in {
          from {
            height: 0;
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            height: var(--dropdown-content-height);
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes dropdown-up {
          from {
            height: var(--dropdown-content-height);
            opacity: 1;
            transform: scale(1);
          }
          to {
            height: 0;
            opacity: 0;
            transform: scale(0.95);
          }
        }
        @keyframes modal-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes modal-out {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.95);
          }
        }
      }

      @layer base {
        :root {
          --background: ${lightColors.background};
          --foreground: ${lightColors.foreground};

          --primary: ${lightColors.primary};
          --primary-hover: ${lightColors.primary_hover};
          --primary-foreground: ${lightColors.primary_foreground};
          --secondary: ${lightColors.secondary};
          --secondary-hover: ${lightColors.secondary_hover};
          --secondary-foreground: ${lightColors.secondary_foreground};
          --muted: ${lightColors.muted};
          --muted-hover: ${lightColors.muted_hover};
          --muted-foreground: ${lightColors.muted_foreground};
          --accent: ${lightColors.accent};
          --accent-hover: ${lightColors.accent_hover};
          --accent-foreground: ${lightColors.accent_foreground};

          --danger: ${lightColors.danger};
          --danger-hover: ${lightColors.danger_hover};
          --danger-foreground: ${lightColors.danger_foreground};
          --warning: ${lightColors.warning};
          --warning-hover: ${lightColors.warning_hover};
          --warning-foreground: ${lightColors.warning_foreground};
          --success: ${lightColors.success};
          --success-hover: ${lightColors.success_hover};
          --success-foreground: ${lightColors.success_foreground};

          --border: ${lightColors.border};
          --ring: ${lightColors.ring};
          --input: ${lightColors.input};

          --chart-1: ${lightColors.chart1};
          --chart-2: ${lightColors.chart2};
          --chart-3: ${lightColors.chart3};
          --chart-4: ${lightColors.chart4};
          --chart-5: ${lightColors.chart5};
       }

        .dark {
          --background: ${darkColors.background};
          --foreground: ${darkColors.foreground};

          --primary: ${darkColors.primary};
          --primary-hover: ${darkColors.primary_hover};
          --primary-foreground: ${darkColors.primary_foreground};
          --secondary: ${darkColors.secondary};
          --secondary-hover: ${darkColors.secondary_hover};
          --secondary-foreground: ${darkColors.secondary_foreground};
          --muted: ${darkColors.muted};
          --muted-hover: ${darkColors.muted_hover};
          --muted-foreground: ${darkColors.muted_foreground};
          --accent: ${darkColors.accent};
          --accent-hover: ${darkColors.accent_hover};
          --accent-foreground: ${darkColors.accent_foreground};

          --danger: ${darkColors.danger};
          --danger-hover: ${darkColors.danger_hover};
          --danger-foreground: ${darkColors.danger_foreground};
          --warning: ${darkColors.warning};
          --warning-hover: ${darkColors.warning_hover};
          --warning-foreground: ${darkColors.warning_foreground};
          --success: ${darkColors.success};
          --success-hover: ${darkColors.success_hover};
          --success-foreground: ${darkColors.success_foreground};

          --border: ${darkColors.border};
          --ring: ${darkColors.ring};
          --input: ${darkColors.input};

          --chart-1: ${darkColors.chart1};
          --chart-2: ${darkColors.chart2};
          --chart-3: ${darkColors.chart3};
          --chart-4: ${darkColors.chart4};
          --chart-5: ${darkColors.chart5};
        }
      }
  `
}
