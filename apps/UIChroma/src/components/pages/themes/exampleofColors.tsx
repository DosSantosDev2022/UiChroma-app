import { Colors } from "@/@types/colorsState";
import { colord } from "colord";

interface ExampleofColorsProps {
  Colors: Colors
}

export function ExampleofColors({ Colors }: ExampleofColorsProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap shadow-sm rounded border px-6 py-4">
      {['primary', 'secondary', 'accent', 'muted', 'background', 'foreground'].map((key) => (
        <div
          key={key}
          className="w-28 h-28 rounded-md border border-border cursor-pointer flex items-center justify-center"
          style={{ backgroundColor: Colors[key as keyof Colors] }}
        >
          <span
            className="font-bold"
            style={{
              color: colord(Colors[key as keyof Colors]).isLight() ? "#000" : "#FFF",
            }}
          >{key.replace(/A[A-Z]/g, "$&").toLowerCase()} </span>
        </div>
      ))}
    </div>
  )
}