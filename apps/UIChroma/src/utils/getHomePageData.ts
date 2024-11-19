import { HomePageData } from "@/@types/homepage"
import { fetchHygraphQuery } from "@/app/api/cms/hygraph"

export const GET_HOME_PAGE_DATA = async (): Promise<HomePageData> => {
  const query = `
      query MyQuery {
      documentationPage(where: {slug: "home-page"}) {
        id
        slug
        title
        section {
          title
          description
          content {
            raw
          }
        }
        section02 {
          title
          description
          content {
            raw
          }
        }
        section03 {
          title
          description
          content {
            raw
          }
        }
        section04 {
          title
          description
          content {
            raw
          }
        }
        section05 {
          title
          id
          content {
            raw
          }
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}
