import { GetStarterData } from '@/@types/pages'
import { inter } from '@/assets/fonts'
import { NavigateThroughSections } from '@/components/navigationScroll/NavigateThroughSections'
import { RichText } from '@/components/ui/rich-text'
import { randomUUID } from 'crypto'
import { fetchHygraphQuery } from '../../api/cms/hygraph'

const GET_STARTER_PAGE_DATA = async (): Promise<GetStarterData> => {
  const query = `
    query MyQuery {
      getstarted(where: {slug: "getstarter"}) {
        introduction {
          raw
        }
        quickstart {
          raw
        }
        instalation {
          raw
        }
        useComponents {
          raw
        }
        customization {
          raw
        }
        examples {
          raw
        }
        contributions {
          raw
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}

const pagesectionlinks = [
  {
    id: randomUUID(),
    text: 'Introdução',
    url: 'Introdução',
  },
  {
    id: randomUUID(),
    text: 'Primeiros Passos',
    url: 'Primeiros-Passos',
  },
  {
    id: randomUUID(),
    text: 'Instalação',
    url: 'Instalação',
  },
  {
    id: randomUUID(),
    text: 'Usando os Componentes',
    url: 'Usando',
  },
  {
    id: randomUUID(),
    text: 'Personalização',
    url: 'Personalização',
  },
  {
    id: randomUUID(),
    text: 'Exemplos',
    url: 'Exemplos',
  },
]
export default async function Starter() {
  const { getstarted } = await GET_STARTER_PAGE_DATA()
  return (
    <div className='grid grid-cols-4 gap-4'>
      <section className="px-8 py-5 col-span-3  w-full border rounded-md shadow-sm ">
        <div className=" space-y-20 pb-10 pt-16 ">
          <div id='Introdução' className="flex flex-col gap-3  ">
            <RichText
              content={getstarted.introduction.raw}
              renderers={{
                h1: ({ children }) => (
                  <h1 className={` ${inter.className} text-4xl font-bold `}>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2
                    className={`text-start text-2xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h2>
                ),
                h6: ({ children }) => (
                  <h6
                    className={`text-start text-xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className=" w-full text-base font-normal text-primary-900 ">
                    {children}
                  </p>
                ),

                li: ({ children }) => <li className=" ">{children}</li>,
                ul: ({ children }) => (
                  <ul className="ml-6 mt-1 list-disc space-y-4 px-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="  mt-2 space-y-2 px-2">{children}</ol>
                ),
              }}
            />
          </div>

          <div id='Primeiros-Passos' className="flex  flex-col gap-3 ">
            <RichText
              content={getstarted.quickstart.raw}
              renderers={{
                h3: ({ children }) => (
                  <h1 className={`text-4xl font-bold `}>{children}</h1>
                ),
                h6: ({ children }) => (
                  <h6
                    className={`text-start text-xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className=" w-full text-base font-normal text-primary-900">
                    {children}
                  </p>
                ),
                li: ({ children }) => <li className=" ">{children}</li>,
                ul: ({ children }) => (
                  <ul className="ml-6 mt-1 list-disc space-y-4 px-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="  mt-2 space-y-2 px-2">{children}</ol>
                ),
              }}
            />
          </div>

          <div id='Instalação' className="flex  flex-col gap-3 ">
            <RichText
              content={getstarted.instalation.raw}
              renderers={{
                h3: ({ children }) => (
                  <h1 className={`text-4xl font-bold `}>{children}</h1>
                ),
                h6: ({ children }) => (
                  <h6
                    className={`text-start text-xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className=" w-full text-base font-normal text-primary-900 ">
                    {children}
                  </p>
                ),
                li: ({ children }) => <li className=" ">{children}</li>,
                ul: ({ children }) => (
                  <ul className="ml-6 mt-1 list-disc space-y-4 px-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="  mt-2 space-y-2 px-2">{children}</ol>
                ),
                code_block: ({ children }) => (
                  <pre
                    className="w-full overflow-x-auto rounded-xl bg-primary-950 px-10 py-5 shadow-lg
                 scrollbar-thin scrollbar-track-primary-900 scrollbar-thumb-primary-800"
                  >
                    <code className="text-zinc-50">{children}</code>
                  </pre>
                ),
              }}
            />
          </div>

          <div id='Usando' className="flex  flex-col gap-3 ">
            <RichText
              content={getstarted.useComponents.raw}
              renderers={{
                h3: ({ children }) => (
                  <h1 className={`text-4xl font-bold `}>{children}</h1>
                ),
                h6: ({ children }) => (
                  <h6
                    className={`text-start text-xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className=" w-full text-base font-normal text-primary-900 ">
                    {children}
                  </p>
                ),
              }}
            />
          </div>

          <div id='Personalização' className="flex  flex-col gap-3 ">
            <RichText
              content={getstarted.customization.raw}
              renderers={{
                h3: ({ children }) => (
                  <h3 className={`text-4xl font-bold `}>{children}</h3>
                ),
                h6: ({ children }) => (
                  <h6
                    className={`text-start text-xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className=" w-full text-base font-normal text-primary-900 ">
                    {children}
                  </p>
                ),
                code_block: ({ children }) => (
                  <pre
                    className="w-full overflow-x-auto rounded-xl bg-primary-950 px-10 py-5 shadow-lg
                 scrollbar-thin scrollbar-track-primary-900 scrollbar-thumb-primary-800"
                  >
                    <code className="text-zinc-50">{children}</code>
                  </pre>
                ),
              }}
            />
          </div>

          <div id='Exemplos' className="flex  flex-col gap-3 ">
            <RichText
              content={getstarted.examples.raw}
              renderers={{
                h3: ({ children }) => (
                  <h3 className={`text-4xl font-bold `}>{children}</h3>
                ),
                h6: ({ children }) => (
                  <h6
                    className={`text-start text-xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className=" w-full text-base font-normal text-primary-900 ">
                    {children}
                  </p>
                ),
                code_block: ({ children }) => (
                  <pre
                    className="w-full overflow-x-auto rounded-xl bg-primary-950 px-10 py-5 shadow-lg
                 scrollbar-thin scrollbar-track-primary-900 scrollbar-thumb-primary-800"
                  >
                    <code className="text-zinc-50">{children}</code>
                  </pre>
                ),
              }}
            />
          </div>

          <div className="flex  flex-col gap-3 ">
            <RichText
              content={getstarted.contributions.raw}
              renderers={{
                h3: ({ children }) => (
                  <h3 className={`text-4xl font-bold `}>{children}</h3>
                ),
                h6: ({ children }) => (
                  <h6
                    className={`text-start text-xl
       font-extrabold tracking-tight `}
                  >
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className=" w-full text-base font-normal text-primary-900 ">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </section>

      <section className='w-full col-span-1 h-screen border sticky top-0 px-8 py-5 space-y-6'>
        <h4 className='font-bold text-base'>Navegue nessa página</h4>

        <NavigateThroughSections links={pagesectionlinks} />
      </section>
    </div>
  )
}
