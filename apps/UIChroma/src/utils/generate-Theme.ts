import { Colord, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

// Gera uma cor accent harmoniosa com mais suavidade
const generateAccentColor = (base: Colord) => {
  const hex = base.toHex()

  if (base.brightness() > 0.8) {
    return colord('#4f46e5') // Tom azul/roxo vibrante
  }

  if (base.brightness() > 0.5) {
    return base.rotate(45).saturate(0.2).lighten(0.15)
  }

  return base.darken(0.25).saturate(0.25).lighten(0.5)
}

// Gera um foreground com bom contraste (escurece ou clareia com harmonia)
const generateContrastForeground = (color: string) => {
  const base = colord(color)
  const isLight = base.isLight()

  if (isLight) {
    return base.darken(0.4).desaturate(0.1).toHex()
  }

  return base.lighten(0.8).saturate(0.1).toHex()
}

// Gera uma cor muted mais suave
const generateMutedColor = (base: Colord) => {
  return base.desaturate(0.6).lighten(0.3)
}

export const generateTheme = (baseColor: string) => {
  const base = colord(baseColor)

  const accentColor = generateAccentColor(base)
  const darkAccentColor = generateAccentColor(base.mix('#000000', 0.2))
  const mutedColor = generateMutedColor(base)

  return {
    name: 'Base Color',
    colors: {
      light: {
        background: base.mix('#ffffff', 0.95).toHex(),
        foreground: base.mix('#000000', 0.9).toHex(),

        primary: base.toHex(),
        primary_hover: base.mix('#ffffff', 0.15).toHex(),
        primary_foreground: generateContrastForeground(base.toHex()),

        secondary: base.mix('#ffffff', 0.7).toHex(),
        secondary_hover: base.mix('#ffffff', 0.6).toHex(),
        secondary_foreground: generateContrastForeground(
          base.mix('#ffffff', 0.7).toHex()
        ),

        accent: accentColor.toHex(),
        accent_hover: accentColor.mix('#ffffff', 0.1).toHex(),
        accent_foreground: generateContrastForeground(accentColor.toHex()),

        danger: '#e11d48', // Hex direto
        danger_hover: '#be123c',
        danger_foreground: '#ffffff', // Hex direto

        warning: '#f59e0b',
        warning_hover: '#d97706',
        warning_foreground: '#1f2937',

        success: '#10b981',
        success_hover: '#059669',
        success_foreground: '#ffffff',

        muted: mutedColor.toHex(),
        muted_hover: mutedColor.mix('#ffffff', 0.3).toHex(),
        muted_foreground: generateContrastForeground(mutedColor.toHex()),

        border: base.mix('#ffff', 0.95).toHex(),
        ring: base.mix('#000000', 0.6).toHex(),
        input: base.mix('#cbd5e1', 0.15).toHex(),

        chart1: base.toHex(),
        chart2: base.rotate(30).toHex(), // Menos intensidade
        chart3: base.rotate(60).toHex(),
        chart4: base.rotate(90).toHex(),
        chart5: base.rotate(120).toHex()
      },

      dark: {
        background: base.mix('#000000', 0.95).toHex(),
        foreground: base.mix('#ffffff', 0.9).toHex(),

        primary: base.mix('#000000', 0.7).toHex(),
        primary_hover: base.mix('#000000', 0.6).toHex(),
        primary_foreground: base.mix('#FFFFFF', 0.9).toHex(),

        secondary: base.mix('#000000', 0.8).toHex(),
        secondary_hover: base.mix('#000000', 0.7).toHex(),
        secondary_foreground: base.mix('#FFFFFF', 0.8).toHex(),

        muted: mutedColor.mix('#000000', 0.8).toHex(),
        muted_hover: mutedColor.mix('#000000', 0.7).toHex(),
        muted_foreground: mutedColor.mix('#FFFFFF', 0.7).toHex(),

        accent: darkAccentColor.toHex(),
        accent_hover: darkAccentColor.mix('#000000', 0.5).toHex(),
        accent_foreground: generateContrastForeground(darkAccentColor.toHex()),

        danger: '#e11d48',
        danger_hover: '#be123c',
        danger_foreground: '#ffffff',

        warning: '#f59e0b',
        warning_hover: '#d97706',
        warning_foreground: '#1f2937',

        success: '#10b981',
        success_hover: '#059669',
        success_foreground: '#ffffff',

        border: base.mix('#000000', 0.9).toHex(),
        ring: base.toHex(),
        input: base.mix('#00000', 0.18).toHex(),

        chart1: base.mix('#000000', 0.7).toHex(),
        chart2: base.rotate(30).mix('#000000', 0.7).toHex(),
        chart3: base.rotate(60).mix('#000000', 0.7).toHex(),
        chart4: base.rotate(90).mix('#000000', 0.7).toHex(),
        chart5: base.rotate(120).mix('#000000', 0.7).toHex()
      }
    }
  }
}
