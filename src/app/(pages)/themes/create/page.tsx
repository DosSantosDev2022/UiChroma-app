import { ColorModeSelector } from '@/components/pages/themes/ColorModeSelector'
import { ModalCodeCss } from '@/components/pages/themes/ModalCodeCss'
import { ExempleComponents } from '@/components/pages/themes/exempleComponents'
import { ModalTemplates } from '@/components/pages/themes/modaltemplates'
import { Button } from '@/components/packages'
import Link from 'next/link'

export default function ThemeCreatePage() {
	return (
		<div className='flex flex-col space-y-10'>
			<section className='p-4'>
				<div className='w-full space-y-3'>
					<h1 className='text-3xl font-extrabold tracking-wide sm:text-4xl lg:text-7xl'>
						Gerador de temas UI
					</h1>
					<p className='text-base font-normal text-muted-foreground'>
						Crie facilmente temas personalizados a partir de uma única cor
						que você pode copiar e colar em seus aplicativos.
					</p>
					<Button
						className='rounded-md'
						asChild
						sizes='sm'
						variants='shine'
					>
						<Link href={'/docs/themes'}>Documentação</Link>
					</Button>
				</div>
			</section>

			<section className='rounded-md border border-border px-6 py-4'>
				<div className='p-3 w-full '>
					<div className='flex items-start justify-end w-full border border-border rounded-lg gap-2 p-4 '>
						{/* Seletor para o Light Mode */}
						<ColorModeSelector mode='light' />
						{/* Seletor para o Dark Mode */}
						<ColorModeSelector mode='dark' />

						<ModalTemplates />
						<ModalCodeCss />
					</div>
				</div>
				<ExempleComponents />
			</section>
		</div>
	)
}
