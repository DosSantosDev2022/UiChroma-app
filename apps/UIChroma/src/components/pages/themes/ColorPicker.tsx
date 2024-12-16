'use client'

import { useState } from 'react'

interface SelectorColorsProps {
  color: string
  onChange: (color: string) => void
}

export function ColorPicker({ color, onChange }: SelectorColorsProps) {
  const [localColor, setLocalColor] = useState(color)

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setLocalColor(newColor)
    onChange(newColor) // Passa o valor para o pai
  }

  return (
    <div className="relativa flex w-full flex-1 items-center ">
      <label
        className="border-border/20  absolute ml-2 block h-9 w-9 cursor-pointer rounded-full border"
        style={{
          backgroundColor: localColor
        }}
      >
        <input
          type="color"
          value={localColor}
          onChange={handleColorChange}
          className="cursor-pointer opacity-0"
        />
      </label>
      <input
        className="border-border/60 flex h-14 w-full rounded-full border bg-background px-3 py-1 pl-14 text-base font-medium text-muted-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="colors"
        value={localColor}
        onChange={handleColorChange}
      />
    </div>
  )
}
