import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { RichText } from '@/components/global/cms/rich-text'
import { NavigateThroughSections } from '@/components/global/navigationScroll/NavigateThroughSections'
import { links } from '@/config/starterPage.json'
import { GET_STARTER_PAGE_DATA } from '@/utils/getStartPageData'





export default async function Starter() {
  const { documentationPage } = await GET_STARTER_PAGE_DATA()


  return (
    <div className='grid grid-cols-4 gap-4'>
      <section className="px-8 py-5 col-span-3  w-full border rounded-md shadow-sm ">
        <div className=" space-y-20 pb-10 pt-16 border">
          <div id='Introdução' className="flex flex-col gap-3  ">
            <h3>{documentationPage.title}</h3>
            <RichText
              content={documentationPage.section?.content.raw}
              renderers={defaultRenderers}
            />
          </div>

          <div id='Primeiros-Passos' className="flex  flex-col gap-3 ">
            <RichText
              content={documentationPage.section02?.content.raw}
              renderers={defaultRenderers}
            />
          </div>

          <div id='Instalação' className="flex  flex-col gap-3 ">
            <RichText
              content={documentationPage.section03?.content.raw}
              renderers={defaultRenderers}
            />
          </div>

          <div id='Usando' className="flex  flex-col gap-3 ">
            <RichText
              content={documentationPage.section04?.content.raw}
              renderers={defaultRenderers}
            />
          </div>

          <div id='Personalização' className="flex  flex-col gap-3 ">
            <RichText
              content={documentationPage.section04?.content.raw}
              renderers={defaultRenderers}
            />
          </div>

          <div id='Exemplos' className="flex  flex-col gap-3 ">
            <RichText
              content={documentationPage.section04?.content.raw}
              renderers={defaultRenderers}
            />
          </div>

          <div className="flex  flex-col gap-3 ">
            <RichText
              content={documentationPage.section04?.content.raw}
              renderers={defaultRenderers}
            />
          </div>
        </div>
      </section>

      <section className='w-full col-span-1 h-screen border sticky top-0 px-8 py-5 space-y-6'>
        <h4 className='font-bold text-base'>Navegue nessa página</h4>

        <NavigateThroughSections links={links} />
      </section>
    </div>
  )
}
