import type { PageDataTypes } from '@/@types/pages-Data-Types'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

export const GET_PAGE_DATA = async (
	slug: string,
): Promise<PageDataTypes> => {
	const query = `
  query MyQuery($slug: String!) {
  documentationPage(where: {slug: $slug}) {
    id
    title
    slug
    sectionOne {
      identifier
      id
      name
      description
      content {
        raw
      }
    }
    sectionTwo {
      identifier
      id
      name
      description
      content {
        raw
      }
    }
    sectionThree {
      identifier
      id
      name
      description
      content {
        raw
      }
    }
    sectionFour {
      identifier
      id
      name
      description
      content {
        raw
      }
    }
    sectionFive {
      identifier
      id
      name
      description
      content {
        raw
      }
    }
    sectionSix {
      identifier
      id
      name
      description
      content {
        raw
      }
    }
    sectionSeven {
      identifier
      id
      name
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
		slug,
	}
	return fetchHygraphQuery(query, variables, { cache: 'force-cache', revalidate: 60 * 60 * 24 })
}
