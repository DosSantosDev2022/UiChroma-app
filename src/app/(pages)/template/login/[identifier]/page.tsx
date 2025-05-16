import { GET_TEMPLATES } from '@/services/get-Templates'
import { notFound } from 'next/navigation'
import ComponentPreview from '@/components/pages/preview/component-Preview'
import { Button } from '@/components/packages'
import { IoArrowBack } from 'react-icons/io5'
import Link from 'next/link'

type Props = {
	params: { identifier: string }
}

export default async function PreviewPage({ params }: Props) {
	const { template } = await GET_TEMPLATES('login')

	const componentData = template?.templateCode.find(
		(item) => item.identifier === params.identifier,
	)

	if (!componentData) return notFound()

	return (
		<div className='min-h-screen p-10 bg-muted/20'>
			<div className='w-full max-w-6xl  mx-auto shadow-md p-2'>
				<div className='mb-10 p-4 flex justify-end gap-1'>
					{/* Botão flutuante para voltar */}
					<Button
						variants='ghost'
						sizes='xs'
						className=' top-5 left-5 z-50'
						aria-label='Voltar'
						asChild
					>
						<Link href={'/template/login'}>
							Voltar
							<IoArrowBack size={20} />
						</Link>
					</Button>
				</div>
				<h1 className='text-2xl font-bold mb-6'>{componentData.name}</h1>
				<ComponentPreview path='templates' componentData={componentData} />
			</div>
		</div>
	)
}
