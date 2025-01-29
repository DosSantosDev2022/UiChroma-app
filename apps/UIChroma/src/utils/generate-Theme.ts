import { Theme } from '@/@types/colors-themes-types'
import { Colord, colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import mixPlugin from 'colord/plugins/mix'

extend([a11yPlugin, mixPlugin])

// Gera contraste foreground baseado no background
const generateContrast = (
  color: string,
  lightContrast = '#ffffff',
  darkContrast = '#000000'
) => {
  const base = colord(color)
  return base.contrast(lightContrast) >= 4.5 ? lightContrast : darkContrast
}

// Define as cores secundárias mais claras
const generateSecondaryColor = (base: Colord) =>
  base.desaturate(0.3).lighten(0.6)

// Define cores suaves (muted) com base no tema
const generateMutedColor = (mode: 'light' | 'dark') => {
  if (mode === 'light') {
    return {
      muted: '#f3f4f6',
      mutedForeground: '#6b7280', // Corrigido para 'mutedForeground'
      muted_hover: '#f3f4f6'
    }
  } else {
    return {
      muted: '#1C202A',
      mutedForeground: '#9aa0a7',
      muted_hover: '#4a4a4a'
    }
  }
}

// Gera cores de destaque (accent)
const generateAccentColor = (primary: Colord, secondary: Colord) =>
  primary.mix(secondary, 0.5).saturate(0.4).lighten(0.3)

// Gera tons de hover
const generateHoverColor = (base: Colord) => base.lighten(0.1)

// Função para gerar tons de gráficos
const generateChartColors = (base: Colord) =>
  Array.from(
    { length: 5 },
    (_, i) =>
      base
        .rotate(i * 30)
        .saturate(0.3 + i * 0.1)
        .lighten(0.1)
        .toHex() || '#00000'
  )

// Define as cores de borda
const generateBorderColor = (background: Colord, mode: 'light' | 'dark') => {
  return mode === 'light'
    ? background.darken(0.1).toHex() // Light mode: mais escura
    : background.lighten(0.1).toHex() // Dark mode: mais clara
}

// Gera cores de input
const generateInputColor = (background: Colord, mode: 'light' | 'dark') => {
  return mode === 'light'
    ? background.lighten(0.1).toHex() // Light mode: mais escura
    : background.darken(0.1).toHex() // Dark mode: mais clara
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
    ? base.lighten(0.9).mix(base).toHex()
    : base.darken(0.8).mix(base).toHex()
  const foreground = generateContrast(background)

  const mutedColors = generateMutedColor(mode)

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

    muted: mutedColors.muted,
    muted_foreground: mutedColors.mutedForeground,
    muted_hover: mutedColors.muted_hover,

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
export const generateTheme = (primaryColor: string): Theme => {
  const baseLight = colord('#f7fafc') // Cor base para o modo claro
  const baseDark = colord('#18181b') // Cor base para o modo escuro
  const primary = colord(primaryColor)
  const secondary = generateSecondaryColor(primary)
  const accent = generateAccentColor(primary, secondary)
  const chartColors = generateChartColors(primary)

  return {
    label: 'Generated Theme',
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
