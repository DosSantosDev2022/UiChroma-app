import { Button, ButtonProps } from '@repo/ChromaUI/components'

const ButtonPreview = () => {
  const variantes: ButtonProps['variants'][] = [
    'primary',
    'secondary',
    'outline',
    'accent',
    'disabled',
    'link',
    'danger',
    'warning',
    'success',
    'swipe',
    'shine',
    'ghost'
  ]

  return (
    <div className="flex w-full flex-wrap gap-6">
      {/* Exemplos do componente button utilizando as variantes */}
      {variantes.map((variant) => (
        <Button key={variant} variants={variant} sizes="xs">
          {variant}
        </Button>
      ))}
    </div>
  )
}

export default ButtonPreview
