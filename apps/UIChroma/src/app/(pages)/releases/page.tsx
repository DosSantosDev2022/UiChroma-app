import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { Title } from '@/components/global/title/title'
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

  return (
    <div className="relative flex h-full max-w-5xl flex-col px-4 sm:px-6 lg:px-8">
      <SearchReleases />
      {!releasePage || !releasePage.releases.length ? (
        <div className="mt-10 flex flex-col items-center justify-center">
          <Title>Releases não encontradas</Title>
          <p className="text-base text-muted-foreground">
            Nenhum componente encontrado para sua pesquisa.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 border">
            <Title>{releasePage.title}</Title>
            <p className="text-base font-normal text-muted-foreground">
              {releasePage.description}
            </p>
          </div>

          <div className="mb-20 mt-20 space-y-4">
            {releasePage.releases.map((release) => (
              <div
                key={release.id}
                className="flex flex-col gap-2 rounded-md border p-4 shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-normal text-muted-foreground">
                    {format(new Date(release.date), 'dd/MM/yyyy')}
                  </span>
                  <div className="flex items-center gap-3">
                    <Title
                      as="h4"
                      className="text-xl font-bold text-foreground"
                    >
                      {release.title}
                    </Title>
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
        </>
      )}
    </div>
  )
}
