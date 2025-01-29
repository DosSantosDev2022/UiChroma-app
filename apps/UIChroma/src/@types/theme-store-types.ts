import { Theme } from './colors-themes-types'

export interface ThemeState {
  lightColors: Theme['light']
  darkColors: Theme['dark']
  selectedColor: string | null
  customColor: string
  theme: 'light' | 'dark'
  setSelectedColor: (colorLabel: string) => void
  setCustomColor: (color: string) => void
  setTheme: (theme: 'light' | 'dark') => void
  updateLightColor: (colorKey: keyof Theme['light'], newColor: string) => void
  updateDarkColor: (colorKey: keyof Theme['dark'], newColor: string) => void
}
