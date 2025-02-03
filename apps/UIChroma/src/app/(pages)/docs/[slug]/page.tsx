import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { NavigateThroughSections } from '@/components/global/NavigateThroughSections'
import { Title } from '@/components/global/title'
import { linksNavigationMap } from '@/enums/links-nav-pages'
import { GET_PAGE_DATA } from '@/services/get-page-data'

interface ThemesPageParams {
  params: {
    slug: string
  }
}

export default async function ThemesPage({ params }: ThemesPageParams) {
  const { documentationPage } = await GET_PAGE_DATA(params.slug)
  const links = linksNavigationMap[params.slug] || []
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <section className="col-span-3 w-full rounded-md  border border-border p-4 shadow-sm">
          <Title>{documentationPage.title}</Title>
          <div className={' space-y-10 pb-10 pt-8'}>
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

        <section className="sticky top-0 col-span-1 h-screen w-full space-y-2 border border-border px-8 py-5 shadow-sm">
          <NavigateThroughSections links={links} />
        </section>
      </div>
    </>
  )
}
