import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { RichText } from '@/components/global/cms/rich-text'
import { GET_PAGE_DATA } from '@/services/get-page-data'

export default async function Home() {
	const slug = 'home-page'
	const { documentationPage } = await GET_PAGE_DATA(slug)
	return (
		<div className=' flex w-full flex-col px-4 sm:max-w-4xl sm:px-6 lg:px-8'>
			<section className='flex w-full flex-col pb-0 pt-0 lg:pb-10 lg:pt-16'>
				{documentationPage.sectionOne && (
					<RichText
						content={documentationPage?.sectionOne.content.raw}
						renderers={defaultRenderers}
					/>
				)}
			</section>

			<section className='mt-10 space-y-6  px-2 py-3'>
				{documentationPage.sectionTwo && (
					<RichText
						content={documentationPage.sectionTwo.content.raw}
						renderers={defaultRenderers}
					/>
				)}
			</section>
		</div>
	)
}
