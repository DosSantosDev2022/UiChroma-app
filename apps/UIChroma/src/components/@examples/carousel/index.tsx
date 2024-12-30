import { Carousel } from '@repo/ChromaUI/components/'

const CarouselPreview = () => {
  const images = [
    'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9i1lgr0dm0vdk8bz7z',
    'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9w1lgw0dm0xix4el9s',
    'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9x1l5306lrvktybxvf'
  ]

  return (
    <>
      <div className="mx-auto mt-8 w-full max-w-4xl">
        <Carousel url={images} />
      </div>
    </>
  )
}

export default CarouselPreview
