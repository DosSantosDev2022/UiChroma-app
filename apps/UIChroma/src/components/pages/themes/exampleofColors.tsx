import { Colors } from '@/@types/colorsState'
import { Title } from '@/components/global/title/title'
import { colord } from 'colord'

interface ExampleofColorsProps {
  lightColors: Colors
  darkColors: Colors
}

export function ExampleofColors({
  darkColors,
  lightColors
}: ExampleofColorsProps) {
  const colorKeys = [
    'primary',
    'secondary',
    'accent',
    'muted',
    'background',
    'foreground',
    'danger',
    'warning',
    'success'
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded border px-6 py-4 shadow-sm">
      {/* Exibindo cores do tema Light */}
      <div className="flex flex-col ">
        <Title as="h4" className="mb-2  text-xl">
          Light Mode
        </Title>
        <div className="flex gap-2">
          {colorKeys.map((key) => (
            <div
              key={key}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border p-1.5"
              style={{
                backgroundColor: `${lightColors[key as keyof Colors]}`
              }}
            >
              <span
                className="text-[11.5px] font-bold"
                style={{
                  color: colord(`${lightColors[key as keyof Colors]}`).isLight()
                    ? '#000'
                    : '#FFF'
                }}
              >
                {key.replace(/A[A-Z]/g, '$&').toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Exibindo cores do tema Dark */}
      <div className="flex flex-col">
        <Title className="mb-2  text-xl">Dark Mode</Title>
        <div className="flex gap-2">
          {colorKeys.map((key) => (
            <div
              key={`dark-${key}`}
              className="flex h-20 w-20  items-center justify-center rounded-2xl border p-1.5"
              style={{
                backgroundColor: `${darkColors[`dark_${key}` as keyof Colors]}`
              }}
            >
              <span
                className="text-[11.5px] font-bold"
                style={{
                  color: colord(
                    `${darkColors[`dark_${key}` as keyof Colors]}`
                  ).isLight()
                    ? '#000'
                    : '#FFF'
                }}
              >
                {key.replace(/A[A-Z]/g, '$&').toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
