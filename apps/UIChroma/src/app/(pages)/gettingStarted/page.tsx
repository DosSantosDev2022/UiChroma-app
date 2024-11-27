import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { RichText } from '@/components/global/cms/rich-text'
import { NavigateThroughSections } from '@/components/global/navigationScroll/NavigateThroughSections'
import { links } from '@/enums/documentation'
import { GET_STARTER_PAGE_DATA } from '@/utils/getStartPageData'

export default async function Starter() {
  const { documentationPage } = await GET_STARTER_PAGE_DATA()
  console.log('dados', documentationPage)
  return (
    <div className="grid grid-cols-4 gap-4">
      <section className="col-span-3 w-full rounded-md  border px-8 py-5 shadow-sm ">
        <div className=" space-y-20 border pb-10 pt-16">
          <div id="Introdução" className="flex flex-col gap-3  ">
            <h3>{documentationPage.title}</h3>
            {documentationPage.section && (
              <RichText
                content={documentationPage.section?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>

          <div id="Primeiros-Passos" className="flex  flex-col gap-3 ">
            {documentationPage.section02 && (
              <RichText
                content={documentationPage.section02?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>

          <div id="Instalação" className="flex  flex-col gap-3 ">
            {documentationPage.section03 && (
              <RichText
                content={documentationPage.section03?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>

          <div id="Usando" className="flex  flex-col gap-3 ">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>

          <div id="Personalização" className="flex  flex-col gap-3 ">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>

          <div id="Exemplos" className="flex  flex-col gap-3 ">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>

          <div id="Exemplos2" className="flex  flex-col gap-3 ">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </div>
        </div>
      </section>

      <section className="sticky top-0 col-span-1 h-screen w-full space-y-6 border px-8 py-5">
        <h4 className="text-base font-bold">Navegue nessa página</h4>

        <NavigateThroughSections links={links} />
      </section>
    </div>
  )
}
