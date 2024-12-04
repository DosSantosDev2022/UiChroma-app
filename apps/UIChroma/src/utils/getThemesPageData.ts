import { PageDataTypes } from "@/@types/pageData";
import { fetchHygraphQuery } from "@/app/api/cms/hygraph";


export const GET_THEMES_PAGE_DATA = async (): Promise<PageDataTypes> => {
  const query = `
    query MyQuery {
      documentationPage(where: {slug: "theme"}) {
        id
        title
        slug
        section {
          id
          title
          description
          content {
            raw
          }
        }
        section02 {
          id
          title
          description
          content {
            raw
          }
        }
        section03 {
          id
          title
          description
          content {
            raw
          }
        }
        section04 {
          id
          title
          description
          content {
            raw
          }
        }
          section05 {
          id
          title
          description
          content {
            raw
          }
        }
      }
    }
  `
  return fetchHygraphQuery(query, undefined, { cache: 'no-cache' })
}