import { Button } from '@repo/ui/components/button.tsx'

export default function ButtonPreview() {
  const variantes: { type: "primary" | "secundary" | "outline" | "highlight" | "disabled" | "link" | "danger" | "warning" | "Swipe" | "Shine" }[] = [
    { type: 'primary' },
    { type: 'secundary' },
    { type: 'outline' },
    { type: 'highlight' },
    { type: 'disabled' },
    { type: 'link' },
    { type: 'danger' },
    { type: 'warning' },
    { type: 'Swipe' },
    { type: 'Shine' }
  ]


  return (
    <div className="flex w-full flex-wrap items-center  gap-2">
      {/* Exemplos do componente button utilizando as variantes */}
      {variantes.map((variant) => (
        <Button key={variant.type} variant={variant.type} sizes='sm'>
          {variant.type}
        </Button>
      ))}

      {/* Exemplo do componente button recebendo estados */}
      <Button isLoading variant={'primary'} sizes='sm'>Loading</Button>

    </div>
  )
}
