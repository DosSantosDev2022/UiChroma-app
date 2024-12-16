import { Colord, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

const generateAccentColor = (base: Colord) => {
  const hsl = base.toHsl()

  // Para tons muito claros
  if (hsl.l > 80) {
    return colord('#4f46e5') // Tom azul/roxo vibrante
  }

  // Para tons médios
  if (hsl.l > 50) {
    return base.rotate(120).saturate(0.3).lighten(0.1)
  }

  // Para tons muito escuros
  return base.darken(0.3).saturate(0.3).lighten(0.6)
}

// Gera um foreground bem contrastado
const generateContrastForeground = (color: string) => {
  const base = colord(color)

  // Se a cor base for clara, escureça o foreground
  if (base.isLight()) {
    return base.darken(0.5).desaturate(0.2).toHex()
  }

  // Se a cor base for escura, clareie o foreground
  return base.lighten(0.8).saturate(0.2).toHex()
}

const generateMutedColor = () => {
  return colord('#e4e4e7') // Cor neutra de cinza
}

export const generateTheme = (baseColor: string) => {
  const base = colord(baseColor)

  // Gera a cor accent
  const accentColor = generateAccentColor(base)
  const darkAccentColor = generateAccentColor(base.mix('#000000', 0.2))

  // Gera a cor muted
  const mutedColor = generateMutedColor()

  return {
    name: 'Base Color',
    colors: {
      // Light mode
      background: base.mix('#ffffff', 0.95).toHex(),
      foreground: base.mix('#000000', 0.9).toHex(),

      primary: base.toHex(),
      primary_hover: base.mix('#ffffff', 0.2).toHex(),
      primary_foreground: generateContrastForeground(base.toHex()),

      secondary: base.mix('#ffffff', 0.7).toHex(),
      secondary_hover: base.mix('#ffffff', 0.6).toHex(),
      secondary_foreground: generateContrastForeground(
        base.mix('#ffffff', 0.7).toHex()
      ),

      accent: accentColor.toHex(),
      accent_hover: accentColor.mix('#ffffff', 0.2).toHex(),
      accent_foreground: generateContrastForeground(accentColor.toHex()),

      muted: mutedColor.toHex(),
      muted_hover: mutedColor.mix('#ffffff', 0.2).toHex(),
      muted_foreground: generateContrastForeground(mutedColor.toHex()),

      // Danger, warning, success remain unchanged
      danger: '#ff5a5a',
      danger_hover: '#e04848',
      danger_foreground: '#f8f8f8',
      warning: '#f5c542',
      warning_hover: '#e6b63c',
      warning_foreground: '#1a1a1a',
      success: '#5cb85c',
      success_hover: '#4cae4c',
      success_foreground: '#f8f8f8',

      border: base.mix('#000000', 0.7).toHex(),
      ring: base.mix('#000000', 0.6).toHex(),

      chart1: base.toHex(),
      chart2: base.rotate(60).toHex(),
      chart3: base.rotate(120).toHex(),
      chart4: base.rotate(180).toHex(),
      chart5: base.rotate(240).toHex(),

      // Dark mode
      dark_background: '#000000',
      dark_foreground: '#FFFFFF',

      dark_primary: base.mix('#000000', 0.7).toHex(),
      dark_primary_hover: base.mix('#000000', 0.6).toHex(),
      dark_primary_foreground: base.mix('#FFFFFF', 0.9).toHex(),

      dark_secondary: base.mix('#000000', 0.8).toHex(),
      dark_secondary_hover: base.mix('#000000', 0.7).toHex(),
      dark_secondary_foreground: base.mix('#FFFFFF', 0.8).toHex(),

      dark_muted: mutedColor.mix('#000000', 0.8).toHex(),
      dark_muted_hover: mutedColor.mix('#000000', 0.7).toHex(),
      dark_muted_foreground: mutedColor.mix('#FFFFFF', 0.7).toHex(),

      dark_accent: darkAccentColor.toHex(),
      dark_accent_hover: darkAccentColor.mix('#000000', 0.5).toHex(),
      dark_accent_foreground: generateContrastForeground(
        darkAccentColor.toHex()
      ),

      dark_danger: '#ff5a5a',
      dark_danger_hover: '#e04848',
      dark_danger_foreground: '#f8f8f8',
      dark_warning: '#f5c542',
      dark_warning_hover: '#e6b63c',
      dark_warning_foreground: '#1a1a1a',
      dark_success: '#5cb85c',
      dark_success_hover: '#4cae4c',
      dark_success_foreground: '#f8f8f8',

      dark_border: base.mix('#000000', 0.15).toHex(),
      dark_ring: base.toHex(),

      dark_chart1: base.mix('#000000', 0.7).toHex(),
      dark_chart2: base.rotate(60).mix('#000000', 0.7).toHex(),
      dark_chart3: base.rotate(120).mix('#000000', 0.7).toHex(),
      dark_chart4: base.rotate(180).mix('#000000', 0.7).toHex(),
      dark_chart5: base.rotate(240).mix('#000000', 0.7).toHex()
    }
  }
}
