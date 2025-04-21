import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { RichText } from '@/components/global/cms/rich-text'
import { FiltersReleases } from '@/components/pages/releases/filters-Releases'
import { GET_RELEASES } from '@/services/get-Releases'
import { Badge } from '@/components/packages'
import { format } from 'date-fns'

export default async function ReleasePage({
	searchParams,
}: {
	searchParams: Promise<{
		query?: string
		startDate?: string
		endDate?: string
	}>
}) {
	const { query, startDate, endDate } = await searchParams
	const { releasePage = null } =
		(await GET_RELEASES(query, startDate, endDate)) ?? {}

	return (
		<div className='relative mb-10 flex max-w-5xl flex-col px-4 sm:px-6 lg:px-8'>
			<FiltersReleases />
			{!releasePage || !releasePage.releases.length ? (
				<div className='mt-10 flex flex-col items-center justify-center'>
					<h1 className='text-3xl font-extrabold tracking-wide lg:text-6xl'>
						Releases não encontradas
					</h1>
					<p className='text-base text-muted-foreground mt-4'>
						Nenhum componente encontrado para sua pesquisa.
					</p>
				</div>
			) : (
				<>
					<div className='mt-8 flex flex-col gap-3'>
						<h1 className='text-3xl font-extrabold tracking-wide lg:text-6xl'>
							{releasePage.title}
						</h1>
						<p className='text-base font-normal text-muted-foreground'>
							{releasePage.description}
						</p>
					</div>

					<div className='mb-20 mt-10 space-y-4'>
						{releasePage.releases.map((release) => (
							<div
								key={release.id}
								className='flex flex-col gap-2 rounded-md border border-border p-4 shadow-sm'
							>
								<div className='flex flex-col gap-2'>
									<span className='text-sm font-normal text-muted-foreground'>
										{format(new Date(release.date), 'dd/MM/yyyy')}
									</span>
									<div className='flex items-center gap-3'>
										<h4 className='text-3xl font-bold tracking-wide'>
											{release.title}
										</h4>
										<Badge size='md' variant='primary'>
											{release.version}
										</Badge>
									</div>
								</div>

								<ul className='flex flex-col gap-4'>
									{release.commits.map((commit) => (
										<li
											key={commit.id}
											className='gap-2 text-base font-light leading-7 tracking-wider'
										>
											<RichText
												renderers={defaultRenderers}
												content={commit.description.raw}
											/>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}
