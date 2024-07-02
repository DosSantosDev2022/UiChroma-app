import { HeroComponents } from '@/components/global/heroComponents'
import { Feature } from '@/components/global/feature'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import {
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardHeader,
  ClipBoardName,
  ClipBoardContainer,
} from '@repo/ui/components/clipboard.tsx'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { NavigationScrollView } from '@/components/global/navigationScrollView'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { DataQuery } from '@/types/components'
import ComponentPreview from '@/components/global/componentPreview'

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

  console.log(componentData)

  if (!componentData) {
    return <div>Componente não encontrado</div>
  }

  /* if (!ComponentPreview) {
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
  } */

  return (
    <div className="2 grid w-full grid-cols-12 gap-10">
      <section className="col-span-9 h-screen w-full overflow-y-scroll p-2 scrollbar-thin scrollbar-track-secondary-50 scrollbar-thumb-primary-900">
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
            <div className="flex h-full w-full flex-shrink-0 items-start justify-center rounded-lg border bg-zinc-700 p-8 shadow-md">
              <ComponentPreview componentData={componentData} />
            </div>
          </div>

          <ClipBoardContainer id="copyCode">
            <ClipBoardHeader>
              <ClipBoardName>{componentData.componentName}</ClipBoardName>
              <ClipBoardAction
                className=""
                copyText={componentData.codeString || ''}
              />
            </ClipBoardHeader>
            <ClipBoardArea className="h-full">
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

        <div className="space-y-3">
          <h4 className="mt-10 text-2xl font-extrabold  text-cyan-900">
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
                    className="text-cyan-800"
                  />
                  {dep.title}
                </span>

                <ClipBoardContainer className="">
                  <ClipBoardHeader>
                    <ClipBoardName>{dep.title}</ClipBoardName>
                    <ClipBoardAction copyText={dep.command} />
                  </ClipBoardHeader>
                  <ClipBoardArea className="h-full">
                    {dep.command}{' '}
                  </ClipBoardArea>
                </ClipBoardContainer>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sticky top-0 col-span-3 h-screen   p-2 ">
        <h4 className="mb-8 ml-4 text-2xl font-semibold text-primary-900">
          Navegação
        </h4>

        <NavigationScrollView />
      </section>
    </div>
  )
}
