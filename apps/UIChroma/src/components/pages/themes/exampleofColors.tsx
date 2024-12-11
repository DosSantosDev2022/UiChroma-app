import { Colors } from '@/@types/colorsState'
import { colord } from 'colord'

interface ExampleofColorsProps {
  Colors: Colors
}

export function ExampleofColors({ Colors }: ExampleofColorsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded border px-6 py-4 shadow-sm">
      {[
        'primary',
        'secondary',
        'accent',
        'muted',
        'background',
        'foreground',
      ].map((key) => (
        <div
          key={key}
          className="flex h-28 w-28 cursor-pointer  items-center justify-center rounded-md border"
          style={{
            backgroundColor: `hsl(${Colors[key as keyof Colors]})`,
          }}
        >
          <span
            className="font-bold"
            style={{
              color: colord(`hsl(${Colors[key as keyof Colors]})`).isLight()
                ? '#000'
                : '#FFF',
            }}
          >
            {key.replace(/A[A-Z]/g, '$&').toLowerCase()}{' '}
          </span>
        </div>
      ))}
    </div>
  )
}
