import { Button, ButtonProps } from '@repo/ChromaUI/components'

const ButtonPreview = () => {
  const variantes: ButtonProps['variants'][] = [
    'primary',
    'secundary',
    'outline',
    'accent',
    'disabled',
    'link',
    'danger',
    'warning',
    'success',
    'swipe',
    'shine'
  ]

  return (
    <div className="grid grid-cols-6 gap-2">
      {/* Exemplos do componente button utilizando as variantes */}
      {variantes.map((variant) => (
        <Button key={variant} variants={variant} sizes="xs">
          {variant}
        </Button>
      ))}

      {/* Exemplo do componente button recebendo estado de loading */}
      <Button loading={true} variants={'secundary'} sizes="xs">
        Loading
      </Button>
    </div>
  )
}

export default ButtonPreview
