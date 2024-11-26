import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { SearchReleases } from '@/components/pages/releases/searchRelease/searchReleases'
import { GET_RELEASES } from '@/utils/getReleasesData'
import { Badge } from '@repo/chromaui/components/bedge/Bedge.tsx'
import { format } from 'date-fns'

interface ReleasePageParams {
  searchParams: {
    query: string
  }
}

export default async function ReleasePage({ searchParams }: ReleasePageParams) {
  const { releasePage } = await GET_RELEASES(searchParams.query)

  if (!releasePage) {
    return (
      <div>
        <h1>Releases não encontradas</h1>
      </div>
    )
  }

  return (
    <div className="relative flex h-full max-w-5xl flex-col px-4 sm:px-6 lg:px-8">
      <SearchReleases />
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-extrabold">{releasePage.title}</h1>
        <p className="text-primary-950 text-lg font-normal">
          {releasePage.description}
        </p>
      </div>

      <div className="mt-20 space-y-4">
        {releasePage.releases.map((release) => (
          <div
            key={release.id}
            className="flex flex-col gap-2 rounded-md border p-4 shadow-sm"
          >
            <div className="flex flex-col gap-2">
              <span className="text-secondary-400 text-base font-normal">
                {format(new Date(release.date), 'dd/MM/yyyy')}
              </span>
              <div className="flex items-center gap-3">
                <h4 className="text-primary-950 text-3xl font-bold">
                  {release.title}
                </h4>
                <Badge variant="accent" children={release.version} />
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {release.commits.map((commit) => (
                <li
                  key={commit.id}
                  className="gap-2 text-base font-light leading-7 tracking-wider"
                >
                  <RichText
                    renderers={defaultRenderers}
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
