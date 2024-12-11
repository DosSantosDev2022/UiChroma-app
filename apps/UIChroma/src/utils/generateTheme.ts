import { Colord, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

const toHslWithoutFormat = (color: string) => {
  const { h, s, l } = colord(color).toHsl()
  return `${h.toFixed(0)} ${s.toFixed(0)}% ${l.toFixed(0)}%`
}

const generateAccentColor = (base: Colord) => {
  const hsl = base.toHsl()

  // Para tons muito claros
  if (hsl.l > 80) {
    return colord({ h: 250, s: 60, l: 50 }) // Tom azul/roxo vibrante
  }

  // Para tons médios
  if (hsl.l > 50) {
    return base.rotate(120).saturate(0.3).lighten(0.1) // Gira para um tom mais distante (verde/azul)
  }

  // Para tons muito escuros
  return colord({ h: 200, s: 70, l: 40 }) // Azul vibrante como fallback
}

// Gera um foreground bem contrastado
const generateContrastForeground = (color: string) => {
  const base = colord(color)

  // Se a cor base for clara, escureça o foreground
  if (base.isLight()) {
    return base.darken(0.5).desaturate(0.2).toHslString() // Escurecendo a cor
  }
  // Se a cor base for escura, clareie o foreground
  return base.lighten(0.8).saturate(0.2).toHslString() // Clareando a cor
}

export const generateTheme = (baseColor: string) => {
  const base = colord(baseColor)
  // Gera a cor accent
  const accentColor = generateAccentColor(base)
  const darkAccentColor = generateAccentColor(base.mix('#000000', 0.7))

  return {
    name: 'Base Color',
    colors: {
      // Light mode
      background: toHslWithoutFormat(base.mix('#ffffff', 0.95).toHslString()),
      foreground: toHslWithoutFormat(base.mix('#000000', 0.9).toHslString()),

      primary: toHslWithoutFormat(base.toHslString()),
      primary_hover: toHslWithoutFormat(base.mix('#ffffff', 0.2).toHslString()),
      primary_foreground: toHslWithoutFormat(
        generateContrastForeground(base.toHslString())
      ), // Ajustado

      secondary: toHslWithoutFormat(base.mix('#ffffff', 0.7).toHslString()),
      secondary_hover: toHslWithoutFormat(
        base.mix('#ffffff', 0.6).toHslString()
      ),
      secondary_foreground: toHslWithoutFormat(
        generateContrastForeground(base.mix('#ffffff', 0.7).toHslString())
      ), // Ajustado

      accent: toHslWithoutFormat(accentColor.toHslString()),
      accent_hover: toHslWithoutFormat(
        accentColor.mix('#ffffff', 0.2).toHslString()
      ),
      accent_foreground: toHslWithoutFormat(
        generateContrastForeground(accentColor.toHslString())
      ),

      muted: toHslWithoutFormat(base.mix('#ffffff', 0.9).toHslString()),
      muted_hover: toHslWithoutFormat(base.mix('#ffffff', 0.8).toHslString()),
      muted_foreground: toHslWithoutFormat(
        generateContrastForeground(base.mix('#ffffff', 0.9).toHslString())
      ), // Ajustado

      // Danger, warning, success remain unchanged
      danger: '0 65% 55%',
      danger_hover: '0 65% 45%',
      danger_foreground: '0 0% 98%',
      warning: '40 90% 60%',
      warning_hover: '40 90% 50%',
      warning_foreground: '0 0% 10%',
      success: '140 45% 45%',
      success_hover: '140 45% 35%',
      success_foreground: '0 0% 98%',

      border: toHslWithoutFormat(base.mix('#000000', 0.7).toHslString()),
      ring: toHslWithoutFormat(base.mix('#000000', 0.6).toHslString()),

      chart1: toHslWithoutFormat(base.toHslString()),
      chart2: toHslWithoutFormat(base.rotate(60).toHslString()),
      chart3: toHslWithoutFormat(base.rotate(120).toHslString()),
      chart4: toHslWithoutFormat(base.rotate(180).toHslString()),
      chart5: toHslWithoutFormat(base.rotate(240).toHslString()),

      // Dark mode
      dark_background: toHslWithoutFormat('#000000'),
      dark_foreground: toHslWithoutFormat('#FFFFFF'),

      dark_primary: toHslWithoutFormat(base.mix('#000000', 0.7).toHslString()),
      dark_primary_hover: toHslWithoutFormat(
        base.mix('#000000', 0.6).toHslString()
      ),
      dark_primary_foreground: toHslWithoutFormat(
        base.mix('#FFFFFF', 0.9).toHslString()
      ),
      dark_secondary: toHslWithoutFormat(
        base.mix('#000000', 0.8).toHslString()
      ),
      dark_secondary_hover: toHslWithoutFormat(
        base.mix('#000000', 0.7).toHslString()
      ),
      dark_secondary_foreground: toHslWithoutFormat(
        base.mix('#FFFFFF', 0.8).toHslString()
      ),
      dark_muted: toHslWithoutFormat(base.mix('#000000', 0.85).toHslString()),
      dark_muted_hover: toHslWithoutFormat(
        base.mix('#000000', 0.75).toHslString()
      ),
      dark_muted_foreground: toHslWithoutFormat(
        base.mix('#FFFFFF', 0.7).toHslString()
      ),
      dark_accent: toHslWithoutFormat(darkAccentColor.toHslString()),
      dark_accent_hover: toHslWithoutFormat(
        darkAccentColor.mix('#000000', 0.5).toHslString()
      ),
      dark_accent_foreground: toHslWithoutFormat(
        generateContrastForeground(darkAccentColor.toHslString())
      ),

      dark_danger: '0 65% 55%',
      dark_danger_hover: '0 65% 45%',
      dark_danger_foreground: '0 0% 98%',
      dark_warning: '40 90% 60%',
      dark_warning_hover: '40 90% 50%',
      dark_warning_foreground: '0 0% 10%',
      dark_success: '140 45% 45%',
      dark_success_hover: '140 45% 35%',
      dark_success_foreground: '0 0% 98%',

      dark_border: toHslWithoutFormat(base.mix('#000000', 0.15).toHslString()),
      dark_ring: toHslWithoutFormat(base.toHslString()),

      dark_chart1: toHslWithoutFormat(base.mix('#000000', 0.7).toHslString()),
      dark_chart2: toHslWithoutFormat(
        base.rotate(60).mix('#000000', 0.7).toHslString()
      ),
      dark_chart3: toHslWithoutFormat(
        base.rotate(120).mix('#000000', 0.7).toHslString()
      ),
      dark_chart4: toHslWithoutFormat(
        base.rotate(180).mix('#000000', 0.7).toHslString()
      ),
      dark_chart5: toHslWithoutFormat(
        base.rotate(240).mix('#000000', 0.7).toHslString()
      )
    }
  }
}
