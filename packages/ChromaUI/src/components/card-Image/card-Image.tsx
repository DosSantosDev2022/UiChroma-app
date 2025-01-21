import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardImageProps {
  image: string
  title: string
}

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardImageProps
>(({ className, image, title, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        'max-w-xsma relative h-96 max-h-96 w-80 overflow-hidden rounded-2xl p-0 shadow-sm',
        className
      )}
      {...props}
    >
      {/* Imagem de fundo */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradiente sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent"></div>

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h1 className="text-4xl font-bold text-accent-foreground">{title}</h1>
      </div>
    </div>
  )
})

CardImage.displayName = 'CardImage'

export { CardImage }
