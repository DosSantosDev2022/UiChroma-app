import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { GET_PAGE_DATA } from '@/services/get-page-data'
import { Button } from '@repo/ChromaUI/components'
import Link from 'next/link'

export default async function Home() {
  const slug = 'home-page'
  const { documentationPage } = await GET_PAGE_DATA(slug)
  return (
    <div className=" flex  w-full flex-col px-4 sm:px-6 lg:px-8">
      <section className="flex w-full flex-col pb-0 pt-0 lg:pb-10 lg:pt-16">
        {documentationPage.sectionOne && (
          <RichText
            content={documentationPage?.sectionOne.content.raw}
            renderers={defaultRenderers}
          />
        )}

        <div className="mt-4 flex w-full items-center justify-start gap-2">
          <Button sizes="sm" variants="shine" asChild>
            <Link href={'/starter'}>Início</Link>
          </Button>
          <Button sizes="sm" variants="shine" asChild>
            <Link href={'/'}>Documentação</Link>
          </Button>
        </div>
      </section>

      <article className="mt-10 space-y-6  px-2 py-3">
        {documentationPage.sectionTwo && (
          <RichText
            content={documentationPage.sectionTwo.content.raw}
            renderers={defaultRenderers}
          />
        )}
      </article>
    </div>
  )
}
