import { Colord, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import a11yPlugin from 'colord/plugins/a11y'

extend([mixPlugin, a11yPlugin])

// Gera uma cor accent harmoniosa com mais suavidade
const generateAccentColor = (base: Colord) => {
  const brightness = base.brightness()
  const isLight = base.isLight()

  if (brightness > 0.8) {
    return colord('#4f46e5') // Azul-roxo vibrante
  }

  if (brightness > 0.5) {
    return base
      .rotate(isLight ? 20 : -20)
      .saturate(0.3)
      .lighten(0.1)
  }

  return base.darken(0.3).saturate(0.4)
}

// Gera um foreground com bom contraste (escurece ou clareia com harmonia)
const generateContrastForeground = (color: string) => {
  const base = colord(color)
  return base.contrast('white') > 4.5 ? '#ffffff' : base.lighten(0.8).toHex()
}

// Gera uma cor muted mais suave
const generateMutedColor = (base: Colord) => {
  return base.desaturate(0.5).lighten(0.4)
}

// Gera cores para charts com rotações harmônicas
const generateChartColors = (base: Colord) => {
  return [
    base.toHex(),
    base.rotate(30).saturate(0.2).toHex(),
    base.rotate(60).saturate(0.3).toHex(),
    base.rotate(90).saturate(0.4).toHex(),
    base.rotate(120).saturate(0.5).toHex()
  ]
}

// Função principal para gerar tema
export const generateTheme = (baseColor: string) => {
  const base = colord(baseColor)

  const accentColor = generateAccentColor(base)
  const mutedColor = generateMutedColor(base)
  const chartColors = generateChartColors(base)

  return {
    name: 'Generated Theme',
    colors: {
      light: {
        background: base.mix('#ffffff', 0.9).toHex(),
        foreground: generateContrastForeground(
          base.mix('#FFFFFF', 0.2).toHex()
        ),

        primary: base.toHex(),
        primary_hover: base.lighten(0.15).toHex(),
        primary_foreground: generateContrastForeground(base.toHex()),

        secondary: base.mix('#ffffff', 0.7).toHex(),
        secondary_hover: base.mix('#ffffff', 0.6).toHex(),
        secondary_foreground: generateContrastForeground(
          base.mix('#ffffff', 0.7).toHex()
        ),

        accent: accentColor.toHex(),
        accent_hover: accentColor.lighten(0.1).toHex(),
        accent_foreground: generateContrastForeground(accentColor.toHex()),

        muted: mutedColor.toHex(),
        muted_hover: mutedColor.lighten(0.2).toHex(),
        muted_foreground: generateContrastForeground(mutedColor.toHex()),

        danger: '#e11d48',
        danger_hover: '#be123c',
        danger_foreground: '#ffffff',

        warning: '#f59e0b',
        warning_hover: '#d97706',
        warning_foreground: '#1f2937',

        success: '#10b981',
        success_hover: '#059669',
        success_foreground: '#ffffff',

        border: base.mix('#ffffff', 0.85).toHex(),
        ring: accentColor.toHex(),

        chart1: chartColors[0],
        chart2: chartColors[1],
        chart3: chartColors[2],
        chart4: chartColors[3],
        chart5: chartColors[4]
      },

      dark: {
        background: base.mix('#000000', 0.9).toHex(),
        foreground: generateContrastForeground(
          base.mix('#000000', 0.8).toHex()
        ),

        primary: base.darken(0.3).toHex(),
        primary_hover: base.darken(0.2).toHex(),
        primary_foreground: generateContrastForeground(
          base.darken(0.3).toHex()
        ),

        secondary: base.darken(0.4).toHex(),
        secondary_hover: base.darken(0.3).toHex(),
        secondary_foreground: generateContrastForeground(
          base.darken(0.4).toHex()
        ),

        accent: accentColor.darken(0.2).toHex(),
        accent_hover: accentColor.darken(0.1).toHex(),
        accent_foreground: generateContrastForeground(
          accentColor.darken(0.2).toHex()
        ),

        muted: mutedColor.darken(0.3).toHex(),
        muted_hover: mutedColor.darken(0.2).toHex(),
        muted_foreground: generateContrastForeground(
          mutedColor.darken(0.3).toHex()
        ),

        danger: '#e11d48',
        danger_hover: '#be123c',
        danger_foreground: '#ffffff',

        warning: '#f59e0b',
        warning_hover: '#d97706',
        warning_foreground: '#1f2937',

        success: '#10b981',
        success_hover: '#059669',
        success_foreground: '#ffffff',

        border: base.mix('#000000', 0.8).toHex(),
        ring: accentColor.darken(0.2).toHex(),

        chart1: chartColors[0],
        chart2: chartColors[1],
        chart3: chartColors[2],
        chart4: chartColors[3],
        chart5: chartColors[4]
      }
    }
  }
}
