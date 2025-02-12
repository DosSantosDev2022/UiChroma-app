import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { NavigateThroughSections } from '@/components/global/NavigateThroughSections'
import { linksNavigationMap } from '@/enums/links-nav-pages'
import { GET_PAGE_DATA } from '@/services/get-page-data'

export default async function ThemesPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { documentationPage } = await GET_PAGE_DATA(slug)
  const links = linksNavigationMap[slug] || []

  if (documentationPage.developing) {
    return (
      <div className="flex h-full w-full items-center justify-center border border-border p-14">
        <div className="flex w-full flex-col items-center justify-center space-y-3 text-center">
          <h1 className=" text-4xl font-bold text-foreground">
            A página {documentationPage.title} está em desenvolvimento 🚧
          </h1>
          <p className="mt-2 max-w-[720px] font-normal text-muted-foreground">
            Esta documentação ainda está em desenvolvimento, estamos trabalhando
            para disponibiliza-lo o mais breve possível.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <section className="col-span-3 w-full rounded-md border  border-border p-4 shadow-sm">
          <h1 className=" text-3xl font-extrabold tracking-tight lg:text-6xl">
            {documentationPage.title}
          </h1>
          <div className={'space-y-16 pb-10 pt-8'}>
            {documentationPage.sectionOne && (
              <RichText
                id={documentationPage.sectionOne.identifier}
                content={documentationPage.sectionOne.content.raw}
                renderers={defaultRenderers}
              />
            )}

            {documentationPage.sectionTwo && (
              <RichText
                id={documentationPage.sectionTwo.identifier}
                content={documentationPage.sectionTwo.content.raw}
                renderers={defaultRenderers}
              />
            )}

            {documentationPage.sectionThree && (
              <RichText
                id={documentationPage.sectionThree.identifier}
                content={documentationPage.sectionThree.content.raw}
                renderers={defaultRenderers}
              />
            )}

            {documentationPage.sectionFour && (
              <RichText
                id={documentationPage.sectionFour.identifier}
                content={documentationPage.sectionFour.content.raw}
                renderers={defaultRenderers}
              />
            )}

            {documentationPage.sectionFive && (
              <RichText
                id={documentationPage.sectionFive.identifier}
                content={documentationPage.sectionFive.content.raw}
                renderers={defaultRenderers}
              />
            )}

            {documentationPage.sectionSix && (
              <RichText
                id={documentationPage.sectionSix.identifier}
                content={documentationPage.sectionSix.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>
        </section>

        <section className="sticky top-0 col-span-1 hidden h-screen w-full space-y-2 border border-border px-8 py-5 shadow-sm lg:block">
          <NavigateThroughSections links={links} />
        </section>
      </div>
    </>
  )
}
