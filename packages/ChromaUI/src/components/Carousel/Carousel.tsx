import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

interface CarouselProps {
  children: ReactNode
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const CarouselContainer = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={twMerge('relative h-full w-full', className)}
    {...props}
    ref={ref}
  />
))

CarouselContainer.displayName = 'CarouselContainer'

const CarouselButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & { direction: 'prev' | 'next' }
>(({ direction, className, ...props }, ref) => (
  <button
    type="button"
    className={twMerge(
      `absolute top-1/2 -translate-y-1/2 transform rounded-full bg-accent-foreground p-2 text-accent duration-300 hover:bg-accent-foreground/70 focus:outline-none active:scale-95 ${
        direction === 'prev' ? 'left-4' : 'right-4'
      }`,
      className
    )}
    {...props}
    ref={ref}
  />
))

CarouselButton.displayName = 'CarouselButton'

const CarouselRoot = ({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 5000
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = useMemo(() => React.Children.toArray(children), [children])
  const totalItems = items.length

  // Funções de navegação
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  // AutoPlay
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval])

  return (
    <div
      className={twMerge(
        'relative h-96 w-full  overflow-hidden border',
        className
      )}
      aria-live="polite"
    >
      {/* Conteúdo do Carrossel */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: '100%'
        }}
      >
        {React.Children.map(items, (child) => (
          <div className="h-full w-full flex-shrink-0">{child}</div>
        ))}
      </div>

      {/* Navegação */}
      <CarouselButton
        direction="prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <IoIosArrowBack />
      </CarouselButton>
      <CarouselButton
        direction="next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <IoIosArrowForward />
      </CarouselButton>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={twMerge(
              'h-2.5 w-2.5 rounded-full',
              currentIndex === index
                ? 'bg-accent'
                : 'bg-accent-foreground hover:bg-accent-foreground/70'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export { CarouselContainer, CarouselRoot }
