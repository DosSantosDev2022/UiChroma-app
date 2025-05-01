import type { ComponentsPageData } from '@/@types/page-components-types'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

export const GET_DETAILS_COMPONENT = async (
	slug: string,
): Promise<ComponentsPageData> => {
	const query = `
      query MyQuery($slug: String!) {
        pageComponent(where: {slug: $slug}) {
           id
          name
          version
          slug
          description
          docsLinks {
            id
            title
            label
            url
          }
          features {
            id
            name
          }
          sourceCode {
            description
            name
            blockCode
          }
          utilities {
            name
            description
            blockCode
          }
          sampleCode {
            name
            description
            blockCode
          }
          dependencies {
            id
            title
            description
            command
          }
          developing
          navigateThroughSections {
            id
            label
            url
          }
        }
     }
  `
	const variables = { slug }
	return fetchHygraphQuery(query, variables, {
		cache: 'force-cache',
    revalidate: 60 * 60 * 24 // revalida a cada 1 dia
	})
}
