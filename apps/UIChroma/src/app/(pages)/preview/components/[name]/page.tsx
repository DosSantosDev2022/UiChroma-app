import { HeroComponents } from '@/components/ui/heroComponents'
import { Feature } from '@/components/feature/feature'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import {
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardHeader,
  ClipBoardLabel,
  ClipBoardContainer,
} from '@repo/ui/components/clipboard.tsx'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { NavigationScrollView } from '@/components/navigationScroll/navigationScrollView'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { DataQuery } from '@/types/components'
import ComponentPreview from '@/components/componentPreview/componentPreview'

interface ComponentDetailsProps {
  params: {
    name: string
  }
}

const GET_DETAILS_COMPONENT = async (): Promise<DataQuery> => {
  const query = `
      query MyQuery {
      components {
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
      }
    }
  `
  return fetchHygraphQuery(query)
}

export default async function ComponentDetails({
  params,
}: ComponentDetailsProps) {
  const { components } = await GET_DETAILS_COMPONENT()

  const componentData = components.find(
    (component) =>
      component.componentName.toLowerCase() === params.name.toLowerCase(),
  )

  if (!componentData) {
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

  return (
    <div className=" grid w-full grid-cols-12 gap-10">
      <section className="col-span-9 h-screen w-full overflow-y-scroll px-8 py-5 scrollbar-thin scrollbar-track-secondary-50 scrollbar-thumb-primary-900">
        <div id="inicio">
          <HeroComponents
            content="Componente"
            name={componentData?.componentName}
            description={componentData?.description}
          />
        </div>
        <div id="feature">
          <Feature feature={componentData?.features || []} />
        </div>

        <div id="exemplo" className="flex flex-col gap-32">
          <div className="space-y-5">
            <h4 className="mt-10 text-3xl font-extrabold tracking-[2.16px] text-cyan-900">
              Preview do componente
            </h4>
            <div className="bg-primary-100 flex h-full w-full flex-shrink-0 items-start justify-center rounded-lg border p-8 shadow-md">
              <ComponentPreview componentData={componentData} />
            </div>
          </div>

          <div id="copyCode " className='space-y-4'>
            <h4 className="mt-10 text-2xl font-extrabold ">
              Código fonte do componente
            </h4>
            <ClipBoardContainer>
              <ClipBoardHeader className="bg-primary-950">
                <ClipBoardLabel>{componentData.componentName}</ClipBoardLabel>
                <ClipBoardAction
                  className="bg-primary-900 hover:bg-primary-700"
                  copyText={componentData.codeString || ''}
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
                    scrollbarWidth: 'none',
                    scrollbarColor: 'auto',
                  }}
                  showLineNumbers
                >
                  {componentData.codeString || ''}
                </SyntaxHighlighter>
              </ClipBoardArea>
            </ClipBoardContainer>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="mt-10 text-2xl font-extrabold ">
            Dependências para utilizar esse componente
          </h4>

          <div id="dependencias" className="space-y-6">
            {componentData.dependencie.map((dep) => (
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


        {componentData.animations ? (
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
                    copyText={componentData.animations || ''}
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
                      scrollbarWidth: 'none',
                      scrollbarColor: 'auto',
                    }}
                    showLineNumbers
                  >
                    {componentData.animations || ''}
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
      <section className="sticky top-0 col-span-3 h-screen   p-2 ">
        <h4 className="mb-8 ml-4 text-2xl font-semibold ">Navegação</h4>

        <NavigationScrollView />
      </section>
    </div>
  )
}
