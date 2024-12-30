'use client'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import useCarousel from '../../hooks/useCarousel'

interface CarouselProps {
  url: string[] // Array de URLs de imagens
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
      'bg-primary text-primary-foreground duration-300 hover:bg-primary-hover hover:text-primary-foreground focus:outline-none active:scale-95',
      direction === 'prev' ? 'left-4' : 'right-4'
    )}
  >
    {direction === 'prev' ? <IoIosArrowBack /> : <IoIosArrowForward />}
  </button>
)

interface CarouselIndicatorsProps {
  url: string[]
  goToSlide: (index: number) => void
}

const CarouselIndicators = ({ url, goToSlide }: CarouselIndicatorsProps) => (
  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
    {url.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => goToSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={twMerge(
          'h-2 w-2 rounded-full bg-secondary transition-all duration-300',
          'hover:bg-secondary-hover-hover hover:scale-110',
          `active:bg-primary`
        )}
      />
    ))}
  </div>
)

const Carousel = ({
  url,
  className,
  autoPlay = false,
  autoPlayInterval = 5000
}: CarouselProps) => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
    url.length,
    autoPlay,
    autoPlayInterval
  )

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
        {url.map((url, index) => (
          <div key={index} className="h-full w-full flex-shrink-0">
            <img
              src={url}
              alt={`Slide image ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <CarouselButton direction="prev" onClick={prevSlide} />
      <CarouselButton direction="next" onClick={nextSlide} />

      {/* indicadores */}
      <CarouselIndicators url={url} goToSlide={goToSlide} />
    </div>
  )
}

export { Carousel }
