import { Colors } from '@/@types/colors-themes-types'

export const defaultColors: Colors = {
  // Tema modo light
  light: {
    background: '#ffffff',
    foreground: '#1a1a1a',
    primary: '#5d3f97',
    primary_hover: '#432e6e',
    primary_foreground: '#ffffff',
    secondary: '#99b3ff',
    secondary_hover: '#c2c2c2',
    secondary_foreground: '#000000',
    accent: '#99b3ff',
    accent_hover: '#b3c2ff',
    accent_foreground: '#262626',
    muted: '#999999',
    muted_hover: '#adadad',
    muted_foreground: '#1a1a1a',

    danger: '#ff5a5a',
    danger_hover: '#e04848',
    danger_foreground: '#f8f8f8',
    warning: '#f5c542',
    warning_hover: '#e6b63c',
    warning_foreground: '#1a1a1a',
    success: '#5cb85c',
    success_hover: '#4cae4c',
    success_foreground: '#f8f8f8',

    border: '#181515',
    input: '#1d1a1a',
    ring: '#1d1a1a',

    chart1: '#3f3636',
    chart2: '#3f3f36',
    chart3: '#363f36',
    chart4: '#363f3f',
    chart5: '#36363f'
  },

  // Tema modo dark
  dark: {
    background: '#000000',
    foreground: '#FFFFFF',

    primary: '#181515',
    primary_hover: '#1d1a1a',
    primary_foreground: '#eae9e9',
    secondary: '#121010',
    secondary_hover: '#181515',
    secondary_foreground: '#d5d3d3',
    accent: '#2c2c2d',
    accent_hover: '#404041',
    accent_foreground: '#f7f7f8',
    muted: '#999999',
    muted_hover: '#4a4a4a',
    muted_foreground: '#1a1a1a',

    danger: '#ff5a5a',
    danger_hover: '#e04848',
    danger_foreground: '#f8f8f8',
    warning: '#f5c542',
    warning_hover: '#e6b63c',
    warning_foreground: '#1a1a1a',
    success: '#5cb85c',
    success_hover: '#4cae4c',
    success_foreground: '#d5d3d3',

    border: '#362f2f',
    ring: '#362f2f',
    input: '#362f2f',

    chart1: '#181515',
    chart2: '#181815',
    chart3: '#181815',
    chart4: '#151818',
    chart5: '#151515'
  }
}

export const templateTailwindColors = [
  // Slate
  { label: 'Slate-500', value: '#64748b' },
  { label: 'Slate-700', value: '#334155' },
  { label: 'Slate-900', value: '#0f172a' },

  // Gray
  { label: 'Gray-500', value: '#6b7280' },
  { label: 'Gray-700', value: '#374151' },
  { label: 'Gray-900', value: '#111827' },

  // Zinc
  { label: 'Zinc-500', value: '#71717a' },
  { label: 'Zinc-700', value: '#3f3f46' },
  { label: 'Zinc-900', value: '#18181b' },

  // Neutral
  { label: 'Neutral-500', value: '#737373' },
  { label: 'Neutral-700', value: '#404040' },
  { label: 'Neutral-900', value: '#171717' },

  // Stone
  { label: 'Stone-500', value: '#78716c' },
  { label: 'Stone-700', value: '#44403c' },
  { label: 'Stone-900', value: '#1c1917' },

  // Red
  { label: 'Red-500', value: '#ef4444' },
  { label: 'Red-700', value: '#b91c1c' },
  { label: 'Red-900', value: '#7f1d1d' },

  // Orange
  { label: 'Orange-500', value: '#f97316' },
  { label: 'Orange-700', value: '#c2410c' },
  { label: 'Orange-900', value: '#7c2d12' },

  // Amber
  { label: 'Amber-500', value: '#f59e0b' },
  { label: 'Amber-700', value: '#b45309' },
  { label: 'Amber-900', value: '#78350f' },

  // Yellow
  { label: 'Yellow-500', value: '#eab308' },
  { label: 'Yellow-700', value: '#a16207' },
  { label: 'Yellow-900', value: '#713f12' },

  // Lime
  { label: 'Lime-500', value: '#84cc16' },
  { label: 'Lime-700', value: '#4d7c0f' },
  { label: 'Lime-900', value: '#365314' },

  // Green
  { label: 'Green-500', value: '#22c55e' },
  { label: 'Green-700', value: '#15803d' },
  { label: 'Green-900', value: '#14532d' },

  // Emerald
  { label: 'Emerald-500', value: '#10b981' },
  { label: 'Emerald-700', value: '#047857' },
  { label: 'Emerald-900', value: '#064e3b' },

  // Teal
  { label: 'Teal-500', value: '#14b8a6' },
  { label: 'Teal-700', value: '#0f766e' },
  { label: 'Teal-900', value: '#134e4a' },

  // Cyan
  { label: 'Cyan-500', value: '#06b6d4' },
  { label: 'Cyan-700', value: '#0e7490' },
  { label: 'Cyan-900', value: '#164e63' },

  // Sky
  { label: 'Sky-500', value: '#0ea5e9' },
  { label: 'Sky-700', value: '#0369a1' },
  { label: 'Sky-900', value: '#0c4a6e' },

  // Blue
  { label: 'Blue-500', value: '#3b82f6' },
  { label: 'Blue-700', value: '#1d4ed8' },
  { label: 'Blue-900', value: '#1e3a8a' },

  // Indigo
  { label: 'Indigo-500', value: '#6366f1' },
  { label: 'Indigo-700', value: '#4338ca' },
  { label: 'Indigo-900', value: '#312e81' },

  // Violet
  { label: 'Violet-500', value: '#8b5cf6' },
  { label: 'Violet-700', value: '#6d28d9' },
  { label: 'Violet-900', value: '#4c1d95' },

  // Purple
  { label: 'Purple-500', value: '#a855f7' },
  { label: 'Purple-700', value: '#7e22ce' },
  { label: 'Purple-900', value: '#581c87' },

  // Fuchsia
  { label: 'Fuchsia-500', value: '#d946ef' },
  { label: 'Fuchsia-700', value: '#a21caf' },
  { label: 'Fuchsia-900', value: '#701a75' },

  // Pink
  { label: 'Pink-500', value: '#ec4899' },
  { label: 'Pink-700', value: '#be185d' },
  { label: 'Pink-900', value: '#831843' },

  // Rose
  { label: 'Rose-500', value: '#f43f5e' },
  { label: 'Rose-700', value: '#be123c' },
  { label: 'Rose-900', value: '#881337' }
]
