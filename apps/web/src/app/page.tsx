import { inter } from '@/app/fonts'
import { Button } from '@repo/ui/components/button.tsx'
import Link from 'next/link'
import { fetchHygraphQuery } from './api/cms/hygraph'
import { HomePageData } from '@/types/pages'
import { RichText } from '@/components/global/rich-text'

const GET_HOME_PAGE_DATA = async (): Promise<HomePageData> => {
  const query =`
      query MyQuery {
      homePage(where: {slug: "home"}) {
        id
        sectionHero {
          raw
        }
        sectionIntroduction {
          raw
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}

export default async function Home() {
  const {homePage} = await GET_HOME_PAGE_DATA()
  return (
    <div className="w-full space-y-2  p-6  ">
      <section className="flex flex-col items-center gap-6">
        <RichText content={homePage.sectionHero.raw}
          renderers={{
          h1:({children}) => <h1 className={` ${inter.className} font-bold text-primary-900 text-7xl`} >{children}</h1>,
          p:({children}) =><p className='text-primary-800 font-normal text-lg'>{children}</p>
        }}/>

        <div className="flex w-full items-center justify-center gap-2">
          <Button
            variant="primary"
            asChild
            className="flex items-center justify-center"
          >
            <Link href={'/starter'}>Primeiros passos</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="flex items-center justify-center"
          >
            <Link href={'/'}>Documentação</Link>
          </Button>
        </div>
      </section>

      <div className="mt-10 space-y-2  px-2 py-3">
        <RichText content={homePage.sectionIntroduction.raw}
        renderers={{
          h3:({children}) =>(
            <h3
          className={`${inter.className} text-start text-2xl
           font-extrabold tracking-tight text-primary-900 `}
        >
          {children}
        </h3>
          ),
        p:({children}) => (
          <p className='w-[768px] text-base font-normal text-primary-900'>{children}</p>
        ),

        code_block: ({ children }) => (
          <pre className="bg-zinc-950 w-[768px]  p-4 rounded-md overflow-x-auto
          scrollbar-thin scrollbar-track-blumine-900 scrollbar-thumb-blumine-50">
            <code className="text-zinc-50">{children}</code>
          </pre>
        ),
        li: ({ children }) => (
          <ul className="text-primary-800">{children}</ul>
        ),
        ul: ({ children }) => (
          <ul className="space-y-4">{children}</ul>
        ),
        ol: ({ children }) => (
          <ul className="space-y-4">{children}</ul>
        ),
        }}
        />
      </div>
    </div>
  )
}
