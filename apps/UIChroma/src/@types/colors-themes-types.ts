export type Colors = {
  background: string
  foreground: string
  primary: string
  primary_hover: string
  primary_foreground: string
  secondary: string
  secondary_hover: string
  secondary_foreground: string
  accent: string
  accent_hover: string
  accent_foreground: string
  muted: string
  muted_hover: string
  muted_foreground: string
  danger: string
  danger_hover: string
  danger_foreground: string
  warning: string
  warning_hover: string
  warning_foreground: string
  success: string
  success_hover: string
  success_foreground: string
  border: string
  input: string
  ring: string
  chart1?: string
  chart2?: string
  chart3?: string
  chart4?: string
  chart5?: string
}

export type Theme = {
  label: string
  light: Colors
  dark: Colors
}
