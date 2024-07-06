import { Button } from '@repo/ui/components/button.tsx'

export default function ButtonPreview() {
  const variantes = [
    {
      type: 'primary',
    },
    {
      type: 'secundary',
    },
    {
      type: 'outline',
    },
    {
      type: 'highlight',
    },
    {
      type: 'disabled',
    },
    {
      type: 'link',
    },
    {
      type: 'danger',
    },
    {
      type: 'warning',
    },
  ]
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-2">
      {variantes.map((variant) => (
        <Button key={variant.type} variant={variant.type}>
          {variant.type}
        </Button>
      ))}
    </div>
  )
}
