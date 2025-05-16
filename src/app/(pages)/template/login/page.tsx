import { inter } from '@/assets/fonts'
import { CodeBlock } from '@/components/global/codeBlock/codeBlock'
import { NavigateThroughSections } from '@/components/global/NavigateThroughSections'
import { Title } from '@/components/global/title'
import {
	Badge,
	Button,
	ClipBoardAction,
	ClipBoardArea,
	ClipBoardContainer,
	ClipBoardHeader,
	ClipBoardLabel,
} from '@/components/packages'
import ComponentPreview from '@/components/pages/preview/component-Preview'
import { DocLinks } from '@/components/pages/preview/doc-Links'
import { GET_TEMPLATES } from '@/services/get-Templates'
import Link from 'next/link'
import { FaCircleCheck } from 'react-icons/fa6'

export default async function LoginandRegister() {
	const { template } = await GET_TEMPLATES('login')

	return (
		<div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
			<section className='col-span-3 w-full rounded-md border border-border p-3 shadow-sm sm:p-4'>
				<div className='space-y-10 pb-0 pt-0'>
					<div id='start'>
						<div className='flex w-full flex-col'>
							<div className='mt-2 flex  items-center justify-between gap-3 sm:justify-start'>
								<Title as='h1' className={`${inter.className}`}>
									{template?.name}
								</Title>
								<Badge variant='accent' size='md'>
									{`v.${template?.version}`}
								</Badge>
							</div>
							<p className='mt-2.5 w-full max-w-4xl text-base font-normal text-muted-foreground'>
								{template?.description}
							</p>
						</div>
						<DocLinks links={template?.docsLinks ?? []} />
					</div>

					<div id='features'>
						<div className='space-y-4'>
							<Title as='h3' className={`${inter.className}`}>
								Features
							</Title>
							<ul className='flex flex-col items-start gap-2'>
								{template?.features.map((feature, index) => (
									<li key={feature.id} className='flex items-center gap-2'>
										<FaCircleCheck className='text-primary' size={18} />
										<span className='text-base font-bold'>
											{feature.name}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{template?.templateCode.map((template) => (
						<div
							className='space-y-4 border border-border p-2 rounded-xl'
							key={template.id}
							id={template.identifier}
						>
							<div className='flex flex-col w-full gap-2 p-2'>
								<div className='flex flex-col gap-4'>
									<Title
										as='h3'
										className={`lg:text-2xl text-xl ${inter.className}`}
									>
										{template.name}
									</Title>
									<p>{template.description}</p>

									<ComponentPreview
										path='templates'
										componentData={template}
									/>
								</div>
								<Button variants='ghost' sizes='full' asChild>
									<Link href={`login/${template.identifier}`}>
										Ver preview em tela cheia
									</Link>
								</Button>
							</div>

							<div id='copyCode' className='space-y-4'>
								<ClipBoardContainer>
									<ClipBoardHeader>
										<ClipBoardLabel>Copiar componente</ClipBoardLabel>
										<ClipBoardAction copyText={template.blockCode || ''} />
									</ClipBoardHeader>
									<ClipBoardArea>
										<CodeBlock code={template.blockCode || ''} />
									</ClipBoardArea>
								</ClipBoardContainer>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className='sticky top-0 col-span-1 h-screen hidden space-y-2 border border-border px-8 py-4 shadow-sm lg:block'>
				<NavigateThroughSections
					links={template?.navigateThroughSections ?? []}
				/>
			</section>
		</div>
	)
}
