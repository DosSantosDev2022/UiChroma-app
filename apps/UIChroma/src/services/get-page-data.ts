import { PageDataTypes } from '@/@types/pages-Data-Types'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

export const GET_PAGE_DATA = async (slug: string): Promise<PageDataTypes> => {
  const query = `
  query MyQuery($slug: String!) {
  documentationPage(where: {slug: $slug}) {
    id
    title
    slug
    sectionOne {
      id
      title
      description
      content {
        raw
      }
    }
    sectionTwo {
      id
      title
      description
      content {
        raw
      }
    }
    sectionThree {
      id
      title
      description
      content {
        raw
      }
    }
    sectionFour {
      id
      title
      description
      content {
        raw
      }
    }
    sectionFive {
      id
      title
      description
      content {
        raw
      }
    }
    sectionSix {
      id
      title
      description
      content {
        raw
      }
    }
    sectionSeven {
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
  const variables = {
    slug
  }
  return fetchHygraphQuery(query, variables)
}
