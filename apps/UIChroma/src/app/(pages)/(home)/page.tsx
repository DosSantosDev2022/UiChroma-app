import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { GET_HOME_PAGE_DATA } from '@/utils/getHomePageData'
import { Button } from '@repo/chromaui/components/button/Button.tsx'
import Link from 'next/link'


export default async function Home() {
  const { documentationPage } = await GET_HOME_PAGE_DATA()
  return (
    <div className=" flex h-full max-w-4xl flex-col px-4 sm:px-6 lg:px-8">

      <section className="flex h-full flex-col pb-10 pt-16">
        <div className="space-y-6">
          <RichText
            content={documentationPage?.section.content.raw}
            renderers={defaultRenderers}
          />
        </div>

        <div className="flex w-full mt-4 items-center justify-start gap-2">
          <Button
            variant="Shine"
            asChild
            className="flex w-40 items-center justify-center text-base"
          >
            <Link href={'/starter'}>Primeiros passos</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="flex w-40 items-center justify-center text-base"
          >
            <Link href={'/'}>Documentação</Link>
          </Button>
        </div>
      </section>


      <article className="mt-10 space-y-6  px-2 py-3">
        <RichText
          content={documentationPage.section02.content.raw}
          renderers={defaultRenderers}
        />
      </article>
    </div>
  )
}
