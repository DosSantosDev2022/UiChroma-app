import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export const Carousel = ({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 3000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = React.Children.toArray(children)
  const totalItems = items.length

  // Funções de navegação
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  // AutoPlay
  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval])

  return (
    <div className={twMerge('relative overflow-hidden w-full', className)}>
      {/* Conteúdo do Carrossel */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${totalItems * 100}%`,
        }}
      >
        {React.Children.map(items, (child) => (
          <div className="w-full flex-shrink-0">{child}</div>
        ))}
      </div>

      {/* Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
        aria-label="Previous Slide"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
        aria-label="Next Slide"
      >
        &#9654;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={twMerge(
              'w-2.5 h-2.5 rounded-full',
              currentIndex === index
                ? 'bg-gray-800'
                : 'bg-gray-400 hover:bg-gray-600',
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
