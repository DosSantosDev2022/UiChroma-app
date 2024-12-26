import { Badge } from '@repo/ChromaUI/components'

type BadgeType = {
  variant: 'primary' | 'secondary' | 'accent'
  children: string
}

const BedgePreview = () => {
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
          variant={type.variant}
          size={'lg'}
          children={type.children}
        />
      ))}
    </div>
  )
}

export default BedgePreview
