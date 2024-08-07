import { hooks } from '@/lib/hooks'
import { HeroComponents } from '@/components/ui/heroComponents'
import {
  ClipBoardContainer,
  ClipBoardHeader,

  ClipBoardAction,
  ClipBoardArea,
  ClipBoardLabel,
} from '@repo/ui/components/clipboard.tsx'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { DataQueryHooks } from '@/types/components'
import { NavigationScrollView } from '@/components/navigationScroll/navigationScrollView'
import { Feature } from '@/components/feature/feature'

const GET_HOOKS_DETAILS = async (): Promise<DataQueryHooks> => {
  const query = `
     query MyQuery {
      hook {
        slug
        tag {
          tagName
        }
        hookName
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


interface UsePaginationDetailsParams {
  params: {
    name: string
  }
}

export default async function UsePaginationDetails({ params }: UsePaginationDetailsParams) {
  const { hook } = await GET_HOOKS_DETAILS()
  const hookitem = hook.find((hook) => hook.hookName.toLowerCase() === params.name.toLowerCase())

  if (!hookitem) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <span className="text-center text-4xl font-bold text-zinc-600">
          Preview não disponível para este hook.
        </span>
        <p className="mt-2 w-[768px]  p-2 text-center text-zinc-500">
          Este hook ainda está em desenvolvimento, estamos trabalhando
          para garantir o hook seja bem elaborado e construído com as melhores
          práticas do mercado, assim garantimos também que o seu projeto esteja
          em alto nível.
        </p>
      </div>
    )
  }

  return (
    <div className='grid w-full grid-cols-12 gap-10'>
      <section className='col-span-9 h-screen w-full overflow-y-scroll px-8 py-5 scrollbar-thin scrollbar-track-secondary-50 scrollbar-thumb-primary-900'>
        <div id="inicio">
          <HeroComponents
            content="Custom Hooks"
            name={hookitem?.hookName}
            description={hookitem?.description}
          />
        </div>

        <div id="feature">
          <Feature feature={hookitem?.features || []} />
        </div>

        <div id="copyCode" className='space-y-4'>

          <h4 className="mt-10 text-2xl font-extrabold ">
            Código fonte do hook
          </h4>
          <ClipBoardContainer>
            <ClipBoardHeader className="bg-primary-950">
              <ClipBoardLabel>{hookitem?.hookName}</ClipBoardLabel>
              <ClipBoardAction className="bg-primary-900 hover:bg-primary-700" copyText={hookitem?.codeString || ''} />
            </ClipBoardHeader>
            <ClipBoardArea className="h-full  bg-primary-950/90">
              <SyntaxHighlighter
                language="jsx"
                style={dracula}
                customStyle={{
                  width: '100%',
                  padding: '22px',
                  borderRadius: '12px',
                  background: 'none',
                }}
                showLineNumbers
              >
                {hookitem?.codeString || ''}
              </SyntaxHighlighter>
            </ClipBoardArea>
          </ClipBoardContainer>
        </div>

        <div className='mt-10' id="como-usar">
          <h5 className=" text-2xl font-extrabold ">Como usar o nosso custom hook?</h5>
        </div>
      </section>
      <section className="sticky top-0 col-span-3 h-screen   p-2 ">
        <h4 className="mb-8 ml-4 text-2xl font-semibold ">Navegação</h4>

        <NavigationScrollView />
      </section>
    </div>
  )
}
