import { MyQueryResponse } from '@/@types/releases'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

import { format } from 'date-fns'

import { RichText } from '@/components/ui/rich-text'

import { SearchReleases } from '@/components/searchRelease/searchReleases'

interface ReleasePageParams {
  searchParams : {
    query: string
  }
}

const GET_RELEASES = async (searchTerm?: string): Promise<MyQueryResponse> => {
  const query = `
    query MyQuery($searchTerm: String) {
      releasePage(where: { slug: "release-page" }) {
        title
        description
        releases(orderBy: date_DESC, where: { title_contains: $searchTerm }) {
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
  `;

  // Chama a função de busca com `searchTerm` ou `null` se o termo de pesquisa não for fornecido
  return fetchHygraphQuery(query, { searchTerm: searchTerm || '' });
};

// Componente ReleasePage
export default async function ReleasePage({ searchParams }: ReleasePageParams) {
  const { releasePage } = await GET_RELEASES(searchParams.query);
 console.log(searchParams.query)
  // Verifica se releasePage existe antes de renderizar o conteúdo
  if (!releasePage) {
    return (
      <div>
        <h1>Releases não encontradas</h1>
      </div>
    );
  }

  return (
    <div className="relative flex h-full max-w-5xl flex-col px-4 sm:px-6 lg:px-8">
      <SearchReleases />
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-extrabold">{releasePage.title}</h1>
        <p className="text-lg font-normal text-primary-950">{releasePage.description}</p>
      </div>

      <div className="mt-20 space-y-4">
        
        {releasePage.releases.map((release) => (
          <div
            key={release.id}
            className="flex flex-col gap-2 rounded-md border p-4 shadow-sm"
          >
            <div className="flex flex-col gap-2">
              <span className="text-base font-normal text-secondary-400">
                {format(new Date(release.date), 'dd/MM/yyyy')}
              </span>
              <div className="flex items-center gap-3">
                <h4 className="text-3xl font-bold text-primary-950">{release.title}</h4>
                <span className="w-16 rounded-lg border bg-primary-900 px-1 py-2 text-center text-sm font-light text-secondary-50 shadow-xl">
                  {release.version}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {release.commits.map((commit) => (
                <li
                  key={commit.id}
                  className="gap-2 text-base font-light leading-7 tracking-wider"
                >
                  <RichText
                    renderers={{
                      bold: ({ children }) => <b className="font-bold">{children}</b>,
                      li: ({ children }) => <li className="px-2 py-1">{children}</li>,
                      ul: ({ children }) => (
                        <ul className="ml-6 mt-1 list-disc space-y-4 px-2">{children}</ul>
                      ),
                      p: ({ children }) => (
                        <p className="mt-5 text-base font-medium">{children}</p>
                      ),
                      h5: ({ children }) => (
                        <h5 className="mb-2 mt-2 text-lg font-bold">{children}</h5>
                      ),
                    }}
                    content={commit.description.raw}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
