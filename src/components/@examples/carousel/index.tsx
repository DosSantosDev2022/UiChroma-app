import { Carousel } from '@/components/packages'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

const CarouselPreview = () => {
	const images = [
		{
			id: uuidv4(),
			src: 'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9i1lgr0dm0vdk8bz7z',
			alt: 'Slide imagem 001',
		},

		{
			id: uuidv4(),
			src: 'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9w1lgw0dm0xix4el9s',
			alt: 'Slide imagem 002',
		},
		{
			id: uuidv4(),
			src: 'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9x1l5306lrvktybxvf',
			alt: 'Slide imagem 003',
		},
	]

	return (
		<>
			<div className='mx-auto mt-8 w-full max-w-4xl'>
				<Carousel autoPlay>
					{images.map((img, index) => (
						<Image
							width={1034}
							height={689}
							key={img.id}
							alt={img.alt}
							src={img.src}
							style={{ maxWidth: '100%', height: 'auto' }}
						/>
					))}
				</Carousel>
			</div>
		</>
	)
}

export default CarouselPreview
