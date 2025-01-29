'use client'

import { Theme } from '@/@types/colors-themes-types'
import { Title } from '@/components/global/title'
import { useThemeStore } from '@/store/use-Theme-Store'
import { useEffect, useState } from 'react'
import { HslStringColorPicker } from 'react-colorful'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

interface ColorModeSelectorProps {
  mode: 'light' | 'dark'
}

const ColorModeSelector = ({ mode }: ColorModeSelectorProps) => {
  const {
    darkColors,
    lightColors,
    setTheme,
    theme,
    updateDarkColor,
    updateLightColor
  } = useThemeStore()
  const [openPicker, setOpenPicker] = useState<string | null>(null)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const colors = mode === 'light' ? lightColors : darkColors
  const handleColorChange =
    mode === 'light'
      ? (newColor: string, key: keyof Theme['light']) =>
        updateLightColor(key, newColor)
      : (newColor: string, key: keyof Theme['dark']) =>
        updateDarkColor(key, newColor)

  const icon =
    mode === 'dark' ? <FaMoon className="mr-2" /> : <MdSunny className="mr-2" />

  const title = mode === 'dark' ? 'Dark Mode' : 'Light Mode'

  return (
    <div className=" flex flex-col items-center space-y-4 px-2 py-2.5">
      <div
        onClick={() => setTheme(mode)}
        className="flex w-full cursor-pointer items-center justify-start rounded-md border border-border px-2 py-1.5 duration-300 active:scale-95"
      >
        {icon}
        <Title as="h4" className="text-xl">
          {title}
        </Title>
      </div>
      <div className="custom-scrollbar max-h-[360px] overflow-y-auto rounded-md border border-border px-2 py-1.5 shadow-sm">
        {Object.keys(colors).map((key) => {
          const colorKey = key as keyof Theme['light'] | keyof Theme['dark']
          return (
            <div key={key} className="mt-6 flex flex-col items-start">
              <span className="mb-2 ml-6 text-start text-sm capitalize text-muted-foreground">
                {colorKey}
              </span>
              {/* Div para abrir o picker */}
              <div className="flex items-center justify-center gap-6">
                <div
                  className="h-10 w-10 cursor-pointer rounded-md border duration-300 active:scale-95"
                  style={{ backgroundColor: colors[colorKey] }}
                  onClick={() => setOpenPicker(openPicker === key ? null : key)}
                />
                <span>{colors[colorKey]}</span>
              </div>
              {/* Picker visível apenas se a cor for clicada */}
              {openPicker === key && (
                <div className="absolute left-1/3 top-14 z-10 mt-2 rounded-md bg-white p-2 shadow-md dark:bg-gray-800">
                  <HslStringColorPicker
                    color={colors[colorKey]}
                    onChange={(newColor: string) =>
                      handleColorChange(newColor, colorKey)
                    }
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ColorModeSelector }

