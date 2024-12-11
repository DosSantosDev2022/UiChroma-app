'use client'
import { useState } from 'react'
import { SketchPicker } from 'react-color'

interface SelectorColorsProps {
  color: string
  onChange: (color: any) => void
}
export function ColorPicker({ color, onChange }: SelectorColorsProps) {
  const [activePickers, setActivePickers] = useState(false)
  const togglePicker = () => {
    setActivePickers((prev) => !prev)
  }

  return (
    <>
      <div className="flex  h-14 w-full flex-col rounded-full border px-2 py-2.5 shadow-sm md:relative">
        <div
          onClick={togglePicker}
          className="flex cursor-pointer items-center justify-between gap-2 duration-500 active:scale-95"
        >
          <label className="ml-4 font-semibold text-muted-foreground">
            Base Color
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <div
              className="h-8 w-8 cursor-pointer rounded-full border border-border"
              style={{ backgroundColor: `hsl(${color})` }}
            />
          </div>
        </div>
        {activePickers && (
          <div
            className="absolute left-0 top-full z-50 mt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <SketchPicker
              color={color} // Cor atual como base
              onChange={onChange} // Chamar função ao mudar cor
            />
          </div>
        )}
      </div>
    </>
  )
}
