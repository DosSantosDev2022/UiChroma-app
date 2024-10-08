import { inter } from '@/assets/fonts'
import { Button } from '@repo/ui/components/button.tsx'
import Link from 'next/link'
import { fetchHygraphQuery } from './api/cms/hygraph'
import { HomePageData } from '@/types/pages'
import { RichText } from '@/components/ui/rich-text'

const GET_HOME_PAGE_DATA = async (): Promise<HomePageData> => {
  const query = `
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
  const { homePage } = await GET_HOME_PAGE_DATA()
  return (
    <div className=" flex h-full max-w-4xl flex-col px-4 sm:px-6 lg:px-8">

      <section className="flex h-full flex-col pb-10 pt-16">
        <div className="space-y-6">
          <RichText
            content={homePage.sectionHero.raw}
            renderers={{
              h1: ({ children }) => (
                <h1
                  className={` ${inter.className} text-6xl font-bold text-primary-900`}
                >
                  {children}
                </h1>
              ),
              p: ({ children }) => (
                <p className="text-lg font-normal text-primary-800">
                  {children}
                </p>
              ),
            }}
          />
        </div>

        <div className="flex w-full items-center justify-start gap-2">
          <Button
            variant="Shine"
            asChild
            className="flex w-40 items-center justify-center text-base"
          >
            <Link href={'/starter'}>Primeiros passos</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="flex w-40 items-center justify-center text-base"
          >
            <Link href={'/'}>Documentação</Link>
          </Button>
        </div>
      </section>


      <article className="mt-10 space-y-6  px-2 py-3">
        <RichText
          content={homePage.sectionIntroduction.raw}
          renderers={{
            h3: ({ children }) => (
              <h3
                className={`${inter.className} text-start text-2xl
           font-extrabold tracking-tight text-primary-900 `}
              >
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-base font-normal text-primary-900">
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
            li: ({ children }) => (
              <li className=" text-primary-900">{children}</li>
            ),
            ul: ({ children }) => (
              <ul className="ml-6 mt-1 list-disc space-y-4 px-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="  mt-2 space-y-2 px-2">{children}</ol>
            ),
          }}
        />
      </article>
    </div>
  )
}
