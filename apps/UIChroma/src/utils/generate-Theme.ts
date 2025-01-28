import { Colord, colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import mixPlugin from 'colord/plugins/mix'

extend([a11yPlugin, mixPlugin])

// Função para gerar contraste de foreground
const generateContrast = (
  color: string,
  lightContrast = '#ffffff',
  darkContrast = '#000000'
) => {
  const base = colord(color)
  return base.contrast(lightContrast) >= 4.5 ? lightContrast : darkContrast
}

// Função para criar cores secundárias
const generateSecondaryColor = (base: Colord) => base.lighten(0.45)

// Função para criar cores suaves (muted)
const generateMutedColor = (base: Colord, mode: 'light' | 'dark') => {
  return mode === 'light'
    ? base.darken(0.2).toHex()
    : base.saturate(0.2).toHex()
} // Cinza padrão

// Função para gerar cores de destaque (accent)
const generateAccentColor = (primary: Colord, secondary: Colord) =>
  primary.mix(secondary, 0.5).saturate(0.3)

// Função para gerar tons de hover
const generateHoverColor = (base: Colord) => base.lighten(0.1)

// Função para gerar tons de gráficos
const generateChartColors = (base: Colord) =>
  Array.from({ length: 5 }, (_, i) =>
    base
      .rotate(i * 30)
      .saturate(0.3 + i * 0.1)
      .lighten(0.1)
      .toHex()
  )

// Função para criar cores de borda
const generateBorderColor = (background: Colord, mode: 'light' | 'dark') => {
  return mode === 'light'
    ? background.darken(0.1).toHex() // Light mode: mais escura
    : background.lighten(0.1).toHex() // Dark mode: mais clara
}

const generateInputColor = (background: Colord, mode: 'light' | 'dark') => {
  return mode === 'light'
    ? background.darken(0.1).toHex() // Light mode: mais escura
    : background.lighten(0.1).toHex() // Dark mode: mais clara
}

// Função para gerar cores principais
const generateModeColors = (
  base: Colord,
  mode: 'light' | 'dark',
  primary: Colord,
  secondary: Colord,
  accent: Colord,
  chartColors: string[]
) => {
  const isLight = mode === 'light'

  const background = isLight
    ? base.lighten(0.9).toHex()
    : base.darken(0.8).toHex()
  const foreground = generateContrast(background)

  const muted = generateMutedColor(base, mode)
  const mutedForeground = generateContrast(muted, '#a1a1aa', '#3f3f46')

  const border = generateBorderColor(base, mode)
  const input = generateInputColor(base, mode)

  return {
    background,
    foreground,

    primary: primary.toHex(),
    primary_foreground: generateContrast(primary.toHex()),
    primary_hover: generateHoverColor(primary).toHex(),

    secondary: secondary.toHex(),
    secondary_foreground: generateContrast(secondary.toHex()),
    secondary_hover: generateHoverColor(secondary).toHex(),

    muted: muted,
    muted_foreground: mutedForeground,
    muted_hover: generateHoverColor(colord(muted)).toHex(),

    accent: accent.toHex(),
    accent_foreground: generateContrast(accent.toHex()),
    accent_hover: generateHoverColor(accent).toHex(),

    danger: '#dc2626', // Vermelho padrão
    danger_foreground: '#ffffff',
    danger_hover: generateHoverColor(colord('#dc2626')).toHex(),

    warning: '#fbbf24', // Amarelo padrão
    warning_foreground: '#000000',
    warning_hover: generateHoverColor(colord('#fbbf24')).toHex(),

    success: '#10b981', // Verde padrão
    success_foreground: '#ffffff',
    success_hover: generateHoverColor(colord('#10b981')).toHex(),

    border: border,
    input: input,
    ring: primary.toHex(),

    chart1: chartColors[0],
    chart2: chartColors[1],
    chart3: chartColors[2],
    chart4: chartColors[3],
    chart5: chartColors[4]
  }
}

// Função principal para criar o tema
export const generateTheme = (primaryColor: string) => {
  const baseLight = colord('#f7fafc') // Cor base para o modo claro
  const baseDark = colord('#18181b') // Cor base para o modo escuro
  const primary = colord(primaryColor)
  const secondary = generateSecondaryColor(primary)
  const accent = generateAccentColor(primary, secondary)
  const chartColors = generateChartColors(primary)

  return {
    name: 'Generated Theme',
    colors: {
      light: generateModeColors(
        baseLight,
        'light',
        primary,
        secondary,
        accent,
        chartColors
      ),
      dark: generateModeColors(
        baseDark,
        'dark',
        primary,
        secondary,
        accent,
        chartColors
      )
    }
  }
}
