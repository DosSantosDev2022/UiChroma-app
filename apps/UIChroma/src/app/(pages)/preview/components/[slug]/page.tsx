import { HeroComponents } from '@/components/ui/heroComponents'
import {
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardHeader,
  ClipBoardLabel,
  ClipBoardContainer,
} from '@repo/ChromaUI/components/clipboard.tsx'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { DataQueryComponent, getStaticPathsTypes } from '@/types/components'
import ComponentPreview from '@/components/componentPreview/componentPreview'
import { inter } from '@/assets/fonts'
import { NavigateThroughSections } from '@/components/navigationScroll/NavigateThroughSections'
import { FaCircleCheck } from 'react-icons/fa6'
import { DocLinks } from '@/components/documentationslink/docLinks'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { pagesectionlinks } from '@/config/navigationLinks'

interface ComponentDetailsProps {
  params: {
    slug: string
  }
}

export const revalidate = 60 * 60 * 24

export const dynamicParams = true

export async function generateStaticParams() {
  const response = await fetchHygraphQuery<{ components: getStaticPathsTypes[] }>(`
      query {
       components {
        slug
       }
      }
    `
  )

    return response.components.map((component) => ({
      slug: component.slug
    }))
}

const GET_DETAILS_COMPONENT = async (slug: string): Promise<DataQueryComponent> => {
  const query = `
      query MyQuery($slug: String!) {
        component(where: {slug: $slug}) {
          slug
          tag {
            tagName
          }
          componentName
          description
           featureList {
              content
           }
          dependencie {
            id
            title
            description
            command
          }
          codeString
          codeUsage
          utilities
          utilitiesDescription
          animations
          doclinks {
            label
            url
            id
          }
       }
     }
  `
  const variables = { slug }
  return fetchHygraphQuery(query, variables)
}



export default async function ComponentDetails({
  params,
}: ComponentDetailsProps) {
  const { component } = await GET_DETAILS_COMPONENT(params.slug)

  if (!ComponentPreview) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <span className="text-center text-4xl font-bold text-zinc-600">
          Preview não disponível para este componente.
        </span>
        <p className="mt-2 w-[768px]  p-2 text-center text-zinc-500">
          Este componente ainda está em desenvolvimento, estamos trabalhando
          para garantir um componente bem elaborado e construído com as melhores
          práticas do mercado, assim garantimos também que o seu projeto esteja
          em alto nível.
        </p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      <section className="px-8 py-5 col-span-3  w-full border rounded-md shadow-sm ">
        <div id='inicio'>
          <HeroComponents
            type="Componente"
            name={component.componentName}
            description={component.description}
          />
          <DocLinks links={component.doclinks} />
        </div>

        <div id='feature'>
          <div className="w-full space-y-4">
            <h1 className={`mt-10 text-3xl font-extrabold tracking-[2.16px]
               text-primary-900 ${inter.className}`} >
              Features
            </h1>
            <ul className="flex flex-col items-start gap-2">
              {component.featureList.map((feature, index) => (

                <li
                  key={index}
                  className="flex items-center gap-2 text-primary-800"
                >
                  <FaCircleCheck size={18} />
                  {feature.content}
                </li>

              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div id='preview' className="space-y-5">
            <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`} >
              Preview
            </h4>
            <div className="bg-transparent  flex h-full w-full flex-shrink-0 items-start justify-center rounded-lg border p-8 shadow-sm">
              <ComponentPreview componentData={component} />
            </div>
          </div>

          <div id="copyCode" className='space-y-4 '>
            <div className='space-y-2'>
              <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`} >
                Código fonte
              </h4>
              <p className='text-base font-normal text-primary-900'>
                Oferecemos o código fonte completo deste componente, pronto para
                usar em sua aplicação, basta copiar e criar o arquivo em seu projeto
                utilizando o código abaixo.
              </p>
            </div>
            <ClipBoardContainer>
              <ClipBoardHeader className="bg-primary-950">
                <ClipBoardLabel>Copiar componente</ClipBoardLabel>
                <ClipBoardAction
                  className="bg-primary-900 hover:bg-primary-700"
                  copyText={component.codeString || ''}
                />
              </ClipBoardHeader>
              <ClipBoardArea className=" h-full bg-primary-950/90 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
                <SyntaxHighlighter
                  language="jsx"
                  style={darcula}
                  customStyle={{
                    maxWidth: '768px',
                    width: '768px',
                    height: '100%',
                    padding: '22px',
                    borderRadius: '12px',
                    background: 'none',
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'unset',
                    color: 'white',
                    colorRendering: 'optimizeQuality',

                  }}
                  showLineNumbers
                >
                  {component.codeString || ''}
                </SyntaxHighlighter>
              </ClipBoardArea>
            </ClipBoardContainer>
          </div>

          {component.utilities && (
            <div id="utilities" className='space-y-4 '>
              <div className='space-y-2'>
                <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`} >
                  Utilidades
                </h4>
                <p className='text-base font-normal text-primary-900'>
                  {component.utilitiesDescription}
                </p>
              </div>


              <ClipBoardContainer>
                <ClipBoardHeader className="bg-primary-950">
                  <ClipBoardLabel>Copiar utilidades</ClipBoardLabel>
                  <ClipBoardAction
                    className="bg-primary-900 hover:bg-primary-700"
                    copyText={component.utilities || ''}
                  />
                </ClipBoardHeader>
                <ClipBoardArea className=" h-full bg-primary-950/90 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
                  <SyntaxHighlighter
                    language="jsx"
                    style={darcula}
                    customStyle={{
                      maxWidth: '768px',
                      width: '768px',
                      height: '100%',
                      padding: '22px',
                      borderRadius: '12px',
                      background: 'none',
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'unset',
                      color: 'white',
                      colorRendering: 'optimizeQuality',

                    }}
                    showLineNumbers
                  >
                    {component.utilities || ''}
                  </SyntaxHighlighter>
                </ClipBoardArea>
              </ClipBoardContainer>
            </div>
          )}

          <div id="como-usar" className='space-y-4 '>
            <div className='space-y-2'>
              <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`} >
                Exemplo de uso
              </h4>
              <p className='text-base font-normal text-primary-900'>
                Aqui esta um exemplo de como utilizar o nosso componente em sua aplicação React.
              </p>
            </div>


            <ClipBoardContainer>
              <ClipBoardHeader className="bg-primary-950">
                <ClipBoardLabel>Copiar exemplo de uso</ClipBoardLabel>
                <ClipBoardAction
                  className="bg-primary-900 hover:bg-primary-700"
                  copyText={component.codeUsage || ''}
                />
              </ClipBoardHeader>
              <ClipBoardArea className=" h-full bg-primary-950/90 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
                <SyntaxHighlighter
                  language="jsx"
                  style={darcula}
                  customStyle={{
                    maxWidth: '768px',
                    width: '768px',
                    height: '100%',
                    padding: '22px',
                    borderRadius: '12px',
                    background: 'none',
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'unset',
                    color: 'white',
                    colorRendering: 'optimizeQuality',

                  }}
                  showLineNumbers
                >
                  {component.codeUsage || ''}
                </SyntaxHighlighter>
              </ClipBoardArea>
            </ClipBoardContainer>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`}>
            Dependências
          </h4>

          <div id="dependencias" className="space-y-6">
            {component.dependencie.map((dep) => (
              <div
                className="flex w-full flex-col items-start gap-4 text-zinc-600"
                key={dep.id}
              >
                <p className="flex items-center gap-3 text-base font-normal">
                  {dep.description}
                </p>

                <ClipBoardContainer className="">
                  <ClipBoardHeader className="bg-primary-950">
                    <ClipBoardLabel>{dep.title}</ClipBoardLabel>
                    <ClipBoardAction
                      copyText={dep.command}
                      className="bg-primary-900 hover:bg-primary-700"
                    />
                  </ClipBoardHeader>
                  <ClipBoardArea className="h-full bg-primary-950/90">
                    <SyntaxHighlighter
                      language="jsx"
                      style={darcula}
                      customStyle={{
                        width: '100%',
                        padding: '4px',
                        borderRadius: '8px',
                        background: 'none',
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'auto',
                      }}
                    >
                      {dep.command}
                    </SyntaxHighlighter>
                  </ClipBoardArea>
                </ClipBoardContainer>
              </div>
            ))}
          </div>
        </div>


        {component.animations && (
          <div className="space-y-4">
            <h4 className="text-2xl font-extrabold text-primary-900 mt-10">
              Animações para utilizar neste componente
            </h4>
            <ClipBoardContainer>
              <ClipBoardHeader className="bg-primary-950">
                <ClipBoardLabel>tailwind.config.js</ClipBoardLabel>
                <ClipBoardAction
                  className="bg-primary-900 hover:bg-primary-700"
                  copyText={component.animations}
                />
              </ClipBoardHeader>
              <ClipBoardArea className="bg-primary-950/90">
                <SyntaxHighlighter
                  language="jsx"
                  style={darcula}
                  customStyle={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    background: 'none',
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'auto',
                  }}
                  showLineNumbers
                >
                  {component.animations}
                </SyntaxHighlighter>
              </ClipBoardArea>
            </ClipBoardContainer>
          </div>
        )}

      </section>

      <section className='w-full col-span-1 h-screen border sticky top-0 px-8 py-5 space-y-6'>
        <h4 className='font-bold text-base'>Navegue nessa página</h4>

        <NavigateThroughSections links={pagesectionlinks} />
      </section>
    </div>
  )
}
