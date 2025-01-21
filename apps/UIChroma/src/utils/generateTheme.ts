import { Colord, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

// Gera uma cor accent harmoniosa com mais suavidade
const generateAccentColor = (base: Colord) => {
  const hsl = base.toHsl()

  if (hsl.l > 80) {
    return colord('#4f46e5') // Tom azul/roxo vibrante
  }

  if (hsl.l > 50) {
    return base.rotate(45).saturate(0.2).lighten(0.15)
  }

  return base.darken(0.25).saturate(0.25).lighten(0.5)
}

// Gera um foreground com bom contraste (escurece ou clareia com harmonia)
const generateContrastForeground = (color: string) => {
  const base = colord(color)
  const isLight = base.isLight()

  if (isLight) {
    return base.darken(0.4).desaturate(0.1).toHslString()
  }

  return base.lighten(0.8).saturate(0.1).toHslString()
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
        background: base.mix('#ffffff', 0.95).toHslString(),
        foreground: base.mix('#000000', 0.9).toHslString(),

        primary: base.toHslString(),
        primary_hover: base.mix('#ffffff', 0.15).toHslString(),
        primary_foreground: generateContrastForeground(base.toHslString()),

        secondary: base.mix('#ffffff', 0.7).toHslString(),
        secondary_hover: base.mix('#ffffff', 0.6).toHslString(),
        secondary_foreground: generateContrastForeground(
          base.mix('#ffffff', 0.7).toHslString()
        ),

        accent: accentColor.toHslString(),
        accent_hover: accentColor.mix('#ffffff', 0.1).toHslString(),
        accent_foreground: generateContrastForeground(
          accentColor.toHslString()
        ),

        danger: 'hsl(0, 100%, 67%)',
        danger_hover: 'hsl(0, 72%, 60%)',
        danger_foreground: 'hsl(0, 0%, 97%)',

        warning: 'hsl(46, 89%, 60%)',
        warning_hover: 'hsl(46, 76%, 56%)',
        warning_foreground: 'hsl(0, 0%, 10%)',

        success: 'hsl(122, 37%, 58%)',
        success_hover: 'hsl(122, 41%, 51%)',
        success_foreground: 'hsl(0, 0%, 97%)',

        muted: mutedColor.toHslString(),
        muted_hover: mutedColor.mix('#ffffff', 0.3).toHslString(),
        muted_foreground: generateContrastForeground(mutedColor.toHslString()),

        border: base.mix('#ffff', 0.95).toHslString(),
        ring: base.mix('#000000', 0.6).toHslString(),
        input: base.mix('#cbd5e1', 0.15).toHslString(),

        chart1: base.toHslString(),
        chart2: base.rotate(30).toHslString(), // Menos intensidade
        chart3: base.rotate(60).toHslString(),
        chart4: base.rotate(90).toHslString(),
        chart5: base.rotate(120).toHslString()
      },

      dark: {
        background: base.mix('#000000', 0.95).toHslString(),
        foreground: base.mix('#ffffff', 0.9).toHslString(),

        primary: base.mix('#000000', 0.7).toHslString(),
        primary_hover: base.mix('#000000', 0.6).toHslString(),
        primary_foreground: base.mix('#FFFFFF', 0.9).toHslString(),

        secondary: base.mix('#000000', 0.8).toHslString(),
        secondary_hover: base.mix('#000000', 0.7).toHslString(),
        secondary_foreground: base.mix('#FFFFFF', 0.8).toHslString(),

        muted: mutedColor.mix('#000000', 0.8).toHslString(),
        muted_hover: mutedColor.mix('#000000', 0.7).toHslString(),
        muted_foreground: mutedColor.mix('#FFFFFF', 0.7).toHslString(),

        accent: darkAccentColor.toHslString(),
        accent_hover: darkAccentColor.mix('#000000', 0.5).toHslString(),
        accent_foreground: generateContrastForeground(
          darkAccentColor.toHslString()
        ),

        danger: 'hsl(0, 100%, 67%)',
        danger_hover: 'hsl(0, 72%, 60%)',
        danger_foreground: 'hsl(0, 0%, 97%)',

        warning: 'hsl(46, 89%, 60%)',
        warning_hover: 'hsl(46, 76%, 56%)',
        warning_foreground: 'hsl(0, 0%, 10%)',

        success: 'hsl(122, 37%, 58%)',
        success_hover: 'hsl(122, 41%, 51%)',
        success_foreground: 'hsl(0, 0%, 97%)',

        border: base.mix('#000000', 0.9).toHslString(),
        ring: base.toHslString(),
        input: base.mix('#00000', 0.18).toHslString(),

        chart1: base.mix('#000000', 0.7).toHslString(),
        chart2: base.rotate(30).mix('#000000', 0.7).toHslString(),
        chart3: base.rotate(60).mix('#000000', 0.7).toHslString(),
        chart4: base.rotate(90).mix('#000000', 0.7).toHslString(),
        chart5: base.rotate(120).mix('#000000', 0.7).toHslString()
      }
    }
  }
}
