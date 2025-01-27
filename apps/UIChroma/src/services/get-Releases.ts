import { ReleasePage } from '@/@types/page-releases-Types'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

export const GET_RELEASES = async (
  searchTerm?: string
): Promise<ReleasePage> => {
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
  `
  return fetchHygraphQuery(
    query,
    { searchTerm: searchTerm || '' },
    { cache: 'no-cache' /* revalidate: 60 * 60 * 24 */ }
  )
}
