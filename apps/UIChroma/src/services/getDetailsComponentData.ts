import { ComponentsPageData } from '@/@types/components'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

export const GET_DETAILS_COMPONENT = async (
  slug: string
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
            title
            blockCode
          }
          utilities {
            title
            description
            blockCode
          }
          sampleCode {
            title
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
        }
     }
  `
  const variables = { slug }
  return fetchHygraphQuery(query, variables, {
    cache: 'no-cache'
  })
}
