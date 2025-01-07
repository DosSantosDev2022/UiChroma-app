'use client'
import React, { ReactNode, useEffect, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import useCarousel from '../../hooks/useCarousel'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const CarouselButton = ({
  direction,
  onClick
}: {
  direction: 'prev' | 'next'
  onClick: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === 'prev' ? 'Previous Slide' : 'Next Slide'}
    className={twMerge(
      'absolute top-1/2 -translate-y-1/2 transform rounded-full p-2',
      'bg-transparent text-primary-foreground duration-300 hover:bg-primary-hover hover:text-primary-foreground focus:outline-none active:scale-95',
      direction === 'prev' ? 'left-4' : 'right-4'
    )}
  >
    {direction === 'prev' ? (
      <IoIosArrowBack size={20} />
    ) : (
      <IoIosArrowForward size={20} />
    )}
  </button>
)

interface CarouselIndicatorsProps {
  itemsLength: number
  currentIndex: number
  goToSlide: (index: number) => void
}

const CarouselIndicators = ({
  currentIndex,
  itemsLength,
  goToSlide
}: CarouselIndicatorsProps) => (
  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
    {Array.from({ length: itemsLength }).map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => goToSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={twMerge(
          'h-2 w-2 rounded-full transition-all duration-300',
          index === currentIndex
            ? 'scale-110 bg-primary'
            : 'bg-secondary hover:bg-primary-hover'
        )}
      />
    ))}
  </div>
)

const Carousel = ({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 5000
}: CarouselProps) => {
  const { currentIndex, nextSlide, prevSlide, goToSlide, updateItemsLength } =
    useCarousel(autoPlay, autoPlayInterval)

  const itemsRef = useRef<ReactNode[]>([])

  useEffect(() => {
    const childrenArray = React.Children.toArray(children)
    itemsRef.current = childrenArray
    updateItemsLength(childrenArray.length)
  }, [children, updateItemsLength])

  return (
    <div
      className={twMerge('relative h-96 w-full overflow-hidden', className)}
      aria-live="polite"
    >
      {/* Conteúdo do Carrossel */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {itemsRef.current.map((child, index) => (
          <div key={index} className="h-full w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <CarouselButton direction="prev" onClick={prevSlide} />
      <CarouselButton direction="next" onClick={nextSlide} />

      {/* indicadores */}
      <CarouselIndicators
        itemsLength={itemsRef.current.length}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </div>
  )
}

export { Carousel }

