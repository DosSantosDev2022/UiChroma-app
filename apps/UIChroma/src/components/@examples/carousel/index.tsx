import {
  CarouselContainer,
  CarouselRoot,
} from '@repo/ChromaUI/components/Carousel/Carousel.tsx'
import Image from 'next/image'

export default function CarouselPreview() {
  const images = [
    {
      id: 'slide01',
      url: 'https://placehold.co/600x400/png',
      alt: 'slide-01',
    },
    {
      id: 'slide02',
      url: 'https://placehold.co/600x400/png',
      alt: 'slide-02',
    },
    {
      id: 'slide03',
      url: 'https://placehold.co/600x400/png',
      alt: 'slide-03',
    },
  ]

  return (
    <>
      <CarouselRoot>
        {images.map((image) => (
          <CarouselContainer key={image.id}>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              src={image.url}
              alt={image.alt}
            />
          </CarouselContainer>
        ))}
      </CarouselRoot>
    </>
  )
}
