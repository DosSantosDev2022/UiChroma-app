import type { MyQueryResponse } from '@/@types/template-Page-types';
import { fetchHygraphQuery } from './../app/api/cms/hygraph';
export const GET_TEMPLATES = async (slug: string):Promise<MyQueryResponse> => {
  const query = `
    query MyQuery($slug: String!){
      template(where: {slug: $slug}){
        slug
        name
        description
        version
        docsLinks {
          id
          label
          url
        }
        features {
          id
          name
        }
        templateCode {
          id
          name
          identifier
          description
          blockCode
        }
        navigateThroughSections {
         id
         label
         url
        }
      }
    }
  `
  const variable = {slug}
  return fetchHygraphQuery(query, variable, {
    cache: 'no-cache',
    /* revalidate: 60 * 60 * 24 // revalida a cada 1 dia */
  })
}