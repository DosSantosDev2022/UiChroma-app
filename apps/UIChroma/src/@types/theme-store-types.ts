import { Theme } from './colors-themes-types'

export interface ThemeState {
  lightColors: Theme['light']
  darkColors: Theme['dark']
  selectedColor: string | null
  theme: 'light' | 'dark'
  setSelectedColor: (colorLabel: string) => void
  setTheme: (theme: 'light' | 'dark') => void
  updateLightColor: (colorKey: keyof Theme['light'], newColor: string) => void
  updateDarkColor: (colorKey: keyof Theme['dark'], newColor: string) => void
}
