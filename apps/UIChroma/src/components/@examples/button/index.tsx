import { Button } from '@repo/ui/components/button.tsx'

export default function ButtonPreview() {
  const variantes = [
    { type: 'primary' },
    { type: 'secundary' },
    { type: 'outline' },
    { type: 'highlight' },
    { type: 'disabled' },
    { type: 'link' },
    { type: 'danger' },
    { type: 'warning' },
  ]
  
  const animates = [
    { type: 'Swipe' },
    { type: 'Shine' }
  ]
  
  return (
    <div className="flex w-full flex-wrap items-center  gap-2">
      {variantes.map((variant) => (
        <Button  key={variant.type} variant={variant.type} sizes='default'>
          {variant.type}
        </Button>
      ))}

     
       <Button  isLoading  variant={'primary'} sizes='default'>Loading</Button>
       {animates.map((animate) => (
        <Button key={animate.type} animate={animate.type} variant={'none'} sizes='default'>{animate.type}</Button>
       ))}
    </div>
  )
}
