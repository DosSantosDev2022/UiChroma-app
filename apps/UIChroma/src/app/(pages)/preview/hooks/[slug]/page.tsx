import {pagesectionlinks} from '@/config/navigationLinks'
import { HeroComponents } from '@/components/ui/heroComponents'
import {
  ClipBoardContainer,
  ClipBoardHeader,
  ClipBoardAction,
  ClipBoardArea,
  ClipBoardLabel,
} from '@repo/ui/components/clipboard.tsx'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { DataQueryHooks } from '@/types/components'
import { inter } from '@/assets/fonts'
import { FaCircleCheck } from 'react-icons/fa6'
import { NavigateThroughSections } from '@/components/navigationScroll/NavigateThroughSections'
import { DocLinks } from '@/components/documentationslink/docLinks'
import { RichText } from '@/components/ui/rich-text'

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
        featureList {
          content
       }
        codeString
         doclinks {
            label
            url
            id
        }
        usage {
          raw
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}

interface UsePaginationDetailsParams {
  params: {
    slug: string
  }
}


export default async function UsePaginationDetails({ params }: UsePaginationDetailsParams) {
  const { hook } = await GET_HOOKS_DETAILS()
  const hookitem = hook.find((hook) => hook.hookName.toLowerCase() === params.slug.toLowerCase())
  
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
    <div className='flex gap-6 justify-between w-full'>
    <section className="px-8 py-5 max-w-4xl border rounded-md shadow-sm">
      <div id='inicio'>
        <HeroComponents
          type="Custom Hooks"
          name={hookitem.hookName}
          description={hookitem.description}
        />
        <DocLinks links={hookitem.doclinks} />
      </div>

      <div id='feature'>
        <div className="w-full space-y-4">
          <h1 className={`mt-10 text-3xl font-extrabold tracking-[2.16px]
             text-primary-900 ${inter.className}`} >
            Features
          </h1>
          <ul className="flex flex-col items-start gap-2">
            {hookitem.featureList.map((feature,index) => (
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
            {/* <ComponentPreview componentData={component} /> */}
          </div>
        </div>

        <div id="como-usar" className='space-y-4'>
          <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`} >
            Como usar
          </h4>

          <RichText content={hookitem.usage.raw} renderers={{
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
                code_block: ({children}) => (
                  <pre
                  className="w-full overflow-x-auto rounded-xl bg-primary-950 px-10 py-5 shadow-lg
               scrollbar-thin scrollbar-track-primary-900 scrollbar-thumb-primary-800"
                >
                  <code className="text-zinc-300">{children}</code>
                </pre>
                )
              }} 
              
              />
        </div>

        <div id="copyCode" className='space-y-4 '>
          <h4 className={`mt-10 text-3xl font-extrabold tracking-[2.16px] text-primary-900 ${inter.className}`} >
            Código fonte
          </h4>
          <ClipBoardContainer>
            <ClipBoardHeader className="bg-primary-950">
              <ClipBoardLabel>{hookitem.hookName}</ClipBoardLabel>
              <ClipBoardAction
                className="bg-primary-900 hover:bg-primary-700"
                copyText={hookitem.codeString || ''}
              />
            </ClipBoardHeader>
            <ClipBoardArea className=" h-full bg-primary-950/90 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
              <SyntaxHighlighter
                language="jsx"
                style={darcula}
                customStyle={{
                  maxWidth:'768px',
                  width: '768px',
                  height:'100%',
                  padding: '22px',
                  borderRadius: '12px',
                  background: 'none',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'unset',
                  color:'white',
                  colorRendering:'optimizeQuality',
                  
                }}
                showLineNumbers
              >
                {hookitem.codeString || ''}
              </SyntaxHighlighter>
            </ClipBoardArea>
          </ClipBoardContainer>
        </div>
      </div>

    </section>

    <section className='w-80 h-screen border sticky top-0 px-8 py-5 space-y-6'>
      <h4 className='font-bold text-base'>Navegue nessa página</h4>

      <NavigateThroughSections links={pagesectionlinks} />
    </section>
  </div>
  )
}
