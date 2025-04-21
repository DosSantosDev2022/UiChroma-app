import { CardImage } from '@/components/packages'

const CardImagePreview = () => {
	return (
		<div className='flex w-full items-center justify-center'>
			<CardImage
				image='https://images.unsplash.com/photo-1721332155484-5aa73a54c6d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				title='Create color scales in seconds.'
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi.'
			/>
		</div>
	)
}

export default CardImagePreview
