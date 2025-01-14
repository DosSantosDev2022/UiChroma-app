import { Colord, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

// Gera uma cor accent harmoniosa com mais suavidade
const generateAccentColor = (base: Colord) => {
  const hsl = base.toHsl()

  // Para tons claros (luminância > 80)
  if (hsl.l > 80) {
    return colord('#4f46e5') // Tom azul/roxo vibrante
  }

  // Para tons médios (luminância > 50)
  if (hsl.l > 50) {
    return base.rotate(45).saturate(0.2).lighten(0.15) // Ajuste para não ser tão saturado
  }

  // Para tons escuros
  return base.darken(0.25).saturate(0.25).lighten(0.5) // Menos escuro e saturado
}

// Gera um foreground com bom contraste (escurece ou clareia com harmonia)
const generateContrastForeground = (color: string) => {
  const base = colord(color)
  const isLight = base.isLight()

  // Ajuste de contraste suave
  if (isLight) {
    return base.darken(0.4).desaturate(0.1).toHex() // Menos escuro
  }

  return base.lighten(0.8).saturate(0.1).toHex() // Menos claro
}

// Gera uma cor muted mais suave
const generateMutedColor = (base: Colord) => {
  return base.desaturate(0.6).lighten(0.3) // Suaviza mais para um tom agradável
}

export const generateTheme = (baseColor: string) => {
  const base = colord(baseColor)

  // Gera as cores baseadas na cor principal
  const accentColor = generateAccentColor(base)
  const darkAccentColor = generateAccentColor(base.mix('#000000', 0.2))
  const mutedColor = generateMutedColor(base)

  return {
    name: 'Base Color',
    colors: {
      // Light mode
      light: {
        background: base.mix('#ffffff', 0.95).toHex(),
        foreground: base.mix('#000000', 0.9).toHex(),

        primary: base.toHex(),
        primary_hover: base.mix('#ffffff', 0.15).toHex(), // Menos saturado
        primary_foreground: generateContrastForeground(base.toHex()),

        secondary: base.mix('#ffffff', 0.7).toHex(),
        secondary_hover: base.mix('#ffffff', 0.6).toHex(),
        secondary_foreground: generateContrastForeground(
          base.mix('#ffffff', 0.7).toHex()
        ),

        accent: accentColor.toHex(),
        accent_hover: accentColor.mix('#ffffff', 0.1).toHex(), // Menos saturado para hover
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
        input: base.mix('#cbd5e1', 0.15).toHex(),

        chart1: base.toHex(),
        chart2: base.rotate(30).toHex(), // Menos intensidade
        chart3: base.rotate(60).toHex(),
        chart4: base.rotate(90).toHex(),
        chart5: base.rotate(120).toHex()
      },

      // Dark mode
      dark: {
        background: '#000000',
        foreground: '#FFFFFF',

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

        danger: '#ff5a5a',
        danger_hover: '#e04848',
        danger_foreground: '#f8f8f8',
        warning: '#f5c542',
        warning_hover: '#e6b63c',
        warning_foreground: '#1a1a1a',
        success: '#5cb85c',
        success_hover: '#4cae4c',
        success_foreground: '#f8f8f8',

        border: base.mix('#000000', 0.15).toHex(),
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
