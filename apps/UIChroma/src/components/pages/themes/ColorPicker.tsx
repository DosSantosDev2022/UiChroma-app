'use client'
import { useState } from "react";
import { SketchPicker } from "react-color";

interface SelectorColorsProps {
  color: string;
  onChange: (color: any) => void;
}
export function ColorPicker({ color, onChange }: SelectorColorsProps) {
  const [activePickers, setActivePickers] = useState(false)
  const togglePicker = () => {
    setActivePickers((prev) => !prev)
  };

  return (
    <>
      <div className="md:relative  flex flex-col border rounded-full w-full h-14 shadow-sm px-2 py-2.5">
        <div
          onClick={togglePicker}
          className="flex items-center justify-between gap-2 cursor-pointer active:scale-95 duration-500"
        >
          <label className="ml-4 font-semibold text-muted-foreground">
            Base Color
          </label>
          <div className="flex items-center gap-2 flex-wrap">
            <div
              className="w-8 h-8 rounded-full border border-border cursor-pointer"
              style={{ backgroundColor: `hsl(${color})` }}
            />
          </div>
        </div>
        {activePickers && (
          <div
            className="absolute top-full left-0 z-50 mt-2"
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