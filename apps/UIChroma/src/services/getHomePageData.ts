import { HomePageData } from '@/@types/homepage'
import { PageDataTypes } from '@/@types/pageData'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

export const GET_HOME_PAGE_DATA = async (): Promise<PageDataTypes> => {
  const query = `
      query MyQuery {
      documentationPage(where: {slug: "home-page"}) {
        id
        slug
        title
        sectionOne {
          title
          description
          content {
            raw
          }
        }
        sectionTwo {
          title
          description
          content {
            raw
          }
        }
        sectionThree {
          title
          description
          content {
            raw
          }
        }
        sectionFour {
          title
          description
          content {
            raw
          }
        }
        sectionFive {
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
