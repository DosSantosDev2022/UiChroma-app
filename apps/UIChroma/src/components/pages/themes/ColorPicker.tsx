'use client'
import { useEffect, useState } from 'react'

interface SelectorColorsProps {
  color: string
  onChange: (color: string) => void
}

const ColorPicker = ({ color, onChange }: SelectorColorsProps) => {
  const [localColor, setLocalColor] = useState(color)

  useEffect(() => {
    setLocalColor(color)
  }, [color])

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setLocalColor(newColor)
    onChange(newColor) // Passa o valor para o pai
  }

  return (
    <div className="relative flex w-full flex-1 items-center  ">
      <label
        className=" absolute  ml-2 block h-9 w-9 cursor-pointer rounded-full border border-border "
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
        className="flex h-14 w-full rounded-full border border-border bg-background px-3 py-1 pl-14 text-base font-medium text-muted-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="colors"
        value={localColor}
        onChange={handleColorChange}
      />
    </div>
  )
}

export { ColorPicker }

