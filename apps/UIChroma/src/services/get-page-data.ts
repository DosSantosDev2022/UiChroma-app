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
      identifier
      id
      title
      description
      content {
        raw
      }
    }
    sectionTwo {
      identifier
      id
      title
      description
      content {
        raw
      }
    }
    sectionThree {
      identifier
      id
      title
      description
      content {
        raw
      }
    }
    sectionFour {
      identifier
      id
      title
      description
      content {
        raw
      }
    }
    sectionFive {
      identifier
      id
      title
      description
      content {
        raw
      }
    }
    sectionSix {
      identifier
      id
      title
      description
      content {
        raw
      }
    }
    sectionSeven {
      identifier
      id
      title
      description
      content {
        raw
      }
    }
    developing
  }
}
  `
  const variables = {
    slug
  }
  return fetchHygraphQuery(query, variables, { cache: 'no-cache' })
}
