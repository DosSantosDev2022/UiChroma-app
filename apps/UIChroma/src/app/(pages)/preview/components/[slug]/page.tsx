import { HeroComponents } from '@/components/ui/heroComponents'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import {
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardHeader,
  ClipBoardLabel,
  ClipBoardContainer,
} from '@repo/ui/components/clipboard.tsx'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { DataQueryComponent } from '@/types/components'
import ComponentPreview from '@/components/componentPreview/componentPreview'
import { inter } from '@/assets/fonts'
import { NavigateThroughSections } from '@/components/navigationScroll/NavigateThroughSections'
import { FaCircleCheck } from 'react-icons/fa6'
import { DocLinks } from '@/components/documentationslink/docLinks'


interface ComponentDetailsProps {
  params: {
    slug: string
  }
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
          features {
            item
          }
          dependencie {
            id
            title
            command
          }
          codeString
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
 
  if (!component) {
    return <div>Componente não encontrado</div>
  }

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

  const pagesectionlinks = [
    {
      text: 'Início',
      url: 'inicio',
    },
    {
      text: 'Features',
      url: 'feature',
    },
    {
      text: 'Preview',
      url: 'preview',
    },
    {
      text: 'CopyCode',
      url: 'copyCode',
    },
    {
      text: 'Dependencias',
      url: 'dependencias',
    },
    {
      text: 'Como usar',
      url: 'como-usar',
    },
  ]
  return (
    <div className='flex gap-6 justify-between w-full'>
      <section className="px-8 py-5 w-full border rounded-md shadow-sm">
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
              {component.features.map((feature) => (

                <li
                  key={feature.id}
                  className="flex items-center gap-2 text-primary-800"
                >
                  <FaCircleCheck size={18} />
                  {feature.item}
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
            <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`} >
              Código fonte
            </h4>
            <ClipBoardContainer>
              <ClipBoardHeader className="bg-primary-950">
                <ClipBoardLabel>{component.componentName}</ClipBoardLabel>
                <ClipBoardAction
                  className="bg-primary-900 hover:bg-primary-700"
                  copyText={component.codeString || ''}
                />
              </ClipBoardHeader>
              <ClipBoardArea className=" h-full bg-primary-950/90 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
                <SyntaxHighlighter
                  language="jsx"
                  style={dracula}
                  customStyle={{
                    maxWidth:'768px',
                    width: '768px',
                    height:'100%',
                    padding: '22px',
                    borderRadius: '12px',
                    background: 'none',
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'unset',
                  }}
                  showLineNumbers
                >
                  {component.codeString || ''}
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
                className="flex w-full flex-col items-start gap-2 text-zinc-600"
                key={dep.id}
              >
                <span className="flex items-center gap-3 text-lg font-semibold">
                  <IoIosArrowDroprightCircle
                    size={24}
                    className="text-primary-600"
                  />
                  {dep.title}
                </span>

                <ClipBoardContainer className="">
                  <ClipBoardHeader className="bg-primary-950">
                    <ClipBoardLabel>{dep.title}</ClipBoardLabel>
                    <ClipBoardAction
                      copyText={dep.command}
                      className="bg-primary-900 hover:bg-primary-700"
                    />
                  </ClipBoardHeader>
                  <ClipBoardArea className="h-full bg-primary-950/90">
                    {dep.command}{' '}
                  </ClipBoardArea>
                </ClipBoardContainer>
              </div>
            ))}
          </div>
        </div>


        {component.animations ? (
          <div className="space-y-3">
            <h4 className="mt-10 text-2xl font-extrabold ">
              Animações para utilizar neste componente
            </h4>
            <div id="copyCode">
              <ClipBoardContainer>
                <ClipBoardHeader className="bg-primary-950">
                  <ClipBoardLabel>{'tailwind.config.js.'}</ClipBoardLabel>
                  <ClipBoardAction
                    className="bg-primary-900 hover:bg-primary-700"
                    copyText={component.animations || ''}
                  />
                </ClipBoardHeader>
                <ClipBoardArea className="h-full bg-primary-950/90">
                  <SyntaxHighlighter
                    language="jsx"
                    style={dracula}
                    customStyle={{
                      width: '100%',
                      padding: '22px',
                      borderRadius: '12px',
                      background: 'none',
                      scrollbarWidth: '-moz-initial',
                      scrollbarColor: 'auto',
                    }}
                    showLineNumbers
                  >
                    {component.animations || ''}
                  </SyntaxHighlighter>
                </ClipBoardArea>
              </ClipBoardContainer>
            </div>
          </div>
        ) : (
          <></>
        )}



        <div id="como-usar"></div>
      </section>

      <section className='w-80 h-screen border sticky top-0 px-8 py-5 space-y-6'>
        <h4 className='font-bold text-base'>Navegue nessa página</h4>

        <NavigateThroughSections links={pagesectionlinks} />
      </section>
    </div>
  )
}
