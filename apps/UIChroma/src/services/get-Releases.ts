import type { ReleasePage } from '@/@types/page-releases-Types'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

export const GET_RELEASES = async (
	searchTerm?: string,
	startDate?: string,
	endDate?: string,
): Promise<ReleasePage | null> => {
	const query = `
     query MyQuery($searchTerm: String, $startDate: Date, $endDate: Date) {
      releasePage(where: { slug: "release-page" }) {
        title
        description
        releases(
          orderBy: date_DESC
          where: {
            AND: [
              { OR: [{ title_contains: $searchTerm }] }
              { OR: [{ date_gte: $startDate }, { date_gte: $startDate }] }
              { OR: [{ date_lte: $endDate }, { date_lte: $endDate }] }
            ]
          }
        ) {
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
		{
			searchTerm: searchTerm || '',
			startDate: startDate || '1900-01-01',
			endDate: endDate || '2100-12-31',
		},
		{ cache: 'no-cache' },
	)
}
