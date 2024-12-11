import { Badge } from '@repo/chromaui/components/bedge/Bedge.tsx'

type BadgeType = {
  variant: 'primary' | 'secondary' | 'accent'
  children: string
}

export default function BedgePreview() {
  const types: BadgeType[] = [
    {
      variant: 'primary',
      children: 'Primary'
    },
    {
      variant: 'secondary',
      children: 'Secondary'
    },
    {
      variant: 'accent',
      children: 'Accent'
    }
  ]

  return (
    <div className="flex items-center justify-center gap-2">
      {types.map((type) => (
        <Badge
          key={type.variant}
          className="w-[85px]"
          variant={type.variant}
          children={type.children}
        />
      ))}
    </div>
  )
}
