import { MyQueryResponse } from '@/types/releases'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { format } from 'date-fns'
import { RichText } from '@/components/global/rich-text'
import { SearchReleases } from '@/components/global/searchReleases'
import { Button } from '@repo/ui/components/button.tsx'
import Link from 'next/link'

const GET_RELEASES = async (term: string): Promise<MyQueryResponse> => {
  const query = `
    query MyQuery($term: String!) {
    releasePage(where: {slug: "release-page"}) {
    releases(where: {_search: $term}, orderBy: date_DESC) {
      id
      version
      date
      title
      commits {
        id
        description {
          raw
        }
      }
    }
  }
}
`
  const variables = { term }
  return fetchHygraphQuery(query, variables)
}

export default async function ReleasePage({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const { releasePage } = await GET_RELEASES(searchParams?.query || '')

  return (
    <div className=" p-4">
      <div className="flex flex-col gap-3">
        <h6 className="text-4xl font-extrabold text-primary-900">
          {`Resultado da busca para ${searchParams?.query}`}
        </h6>
      </div>

      <div className="mt-20 space-y-4">
        <SearchReleases />

        {releasePage?.releases.length === 0 ? (
          <div className="flex  w-full items-center justify-center">
            <p className="mt-32 text-center text-xl  font-semibold text-red-500">
              Nenhuma release encontrada
            </p>
          </div>
        ) : (
          releasePage?.releases.map((release) => (
            <div
              key={release.id}
              className="flex flex-col gap-2 rounded-md border p-4 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <span className="text-base font-normal text-zinc-400">
                  {format(new Date(release.date), 'dd/MM/yyyy')}
                </span>
                <div className="flex items-center gap-3">
                  <h4 className="text-3xl font-bold text-primary-900">
                    {release.title}
                  </h4>
                  <span className="w-14 rounded-xl bg-primary-900 px-1 py-2 text-center text-sm font-light text-secondary-50">
                    {release.version}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-4">
                {release.commits.map((commit) => (
                  <li
                    key={commit.id}
                    className="gap-2 text-base font-light leading-7 tracking-wider text-primary-600"
                  >
                    <RichText
                      renderers={{
                        bold: ({ children }) => (
                          <b className="font-bold text-primary-900">
                            {children}
                          </b>
                        ),
                        ul: ({ children }) => (
                          <ul className="space-y-1">{children}</ul>
                        ),
                        p: ({ children }) => (
                          <p className="mt-5 text-base font-light text-primary-600">
                            {children}
                          </p>
                        ),
                        h5: ({ children }) => (
                          <h5 className="mb-2 mt-2 text-lg font-medium text-primary-900">
                            {children}
                          </h5>
                        ),
                      }}
                      content={commit.description.raw}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
      <Button
        className="fixed bottom-4 right-8 flex w-16 animate-bounce items-center justify-center text-center"
        asChild
      >
        <Link href={'/releases'}>Voltar</Link>
      </Button>
    </div>
  )
}
