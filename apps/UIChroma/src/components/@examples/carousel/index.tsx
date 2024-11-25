
import { Carousel, } from '@repo/ChromaUI/components/Carousel/Carousel.tsx'
import Image from 'next/image'

export default function CarouselPreview() {
  return (
    <>
      <Carousel>
        <Image
        width={400}
        height={200}
          src="https://via.placeholder.com/400x400"
          alt="Slide 1"
          className="w-full object-contain"
        />
        <Image src="https://via.placeholder.com/400x400"
        width={400}
        height={200}
          alt="Slide 2"
          className="w-full object-contain" />
        <Image src="https://via.placeholder.com/400x400"
        width={400}
        height={200}
          alt="Slide 3"
          className="w-full object-contain" />
      </Carousel>


    </>
  )
}