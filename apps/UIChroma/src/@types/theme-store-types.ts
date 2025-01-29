import { HslColor } from 'colord'
import { Theme } from './colors-themes-types'

export interface ThemeState {
  lightColors: Theme['light']
  darkColors: Theme['dark']
  selectedColor: HslColor | string | null
  customColor: HslColor
  theme: 'light' | 'dark'
  setSelectedColor: (colorLabel: string) => void
  setCustomColor: (color: HslColor) => void
  setTheme: (theme: 'light' | 'dark') => void
  updateLightColor: (colorKey: keyof Theme['light'], newColor: string) => void
  updateDarkColor: (colorKey: keyof Theme['dark'], newColor: string) => void
}
