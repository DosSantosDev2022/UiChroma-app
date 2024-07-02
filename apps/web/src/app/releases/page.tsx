import { MyQueryResponse } from '@/types/releases'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

import { format } from 'date-fns'

import { RichText } from '@/components/global/rich-text'

import { SearchReleases } from '@/components/global/searchReleases'

const GET_RELEASES = async (): Promise<MyQueryResponse> => {
  const query = `
    query MyQuery{
    releasePage(where: {slug: "release-page"}) {
    title
    description
    releases(orderBy: date_DESC) {
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

  return fetchHygraphQuery(query)
}

export default async function ReleasePage() {
  const { releasePage } = await GET_RELEASES()

  return (
    <div className=" p-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-extrabold text-primary-900">
          {releasePage?.title}
        </h1>
        <p className="text-lg font-normal text-primary-800 ">
          {releasePage?.description}
        </p>
      </div>

      <div className="mt-20 space-y-4">
        <SearchReleases />

        {releasePage.releases.map((releases) => (
          <div
            key={releases.id}
            className="flex flex-col gap-2 rounded-md border p-4 shadow-sm"
          >
            <div className="flex flex-col gap-2">
              <span className="text-base font-normal text-secondary-400">
                {format(new Date(releases.date), 'dd/MM/yyyy')}
              </span>
              <div className="flex items-center gap-3">
                <h4 className="text-3xl font-bold text-primary-900">
                  {releases.title}{' '}
                </h4>
                <span className=" w-14 rounded-xl bg-primary-900 px-1 py-2 text-center text-sm font-light text-secondary-50">
                  {releases.version}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {releases.commits.map((commit) => (
                <li
                  key={commit.id}
                  className=" gap-2 text-base font-light leading-7 tracking-wider text-primary-600"
                >
                  <RichText
                    renderers={{
                      bold: ({ children }) => (
                        <b className="font-bold text-primary-900">{children}</b>
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
        ))}
      </div>
    </div>
  )
}
