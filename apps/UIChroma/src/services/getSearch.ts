import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

interface GetSearch {
  pageComponents: {
    id: string
    slug: string
    name: string
  }[]
}

export const GET_SEARCH = (): Promise<GetSearch> => {
  const query = `
      query MyQuery {
      pageComponents {
        id
        slug
        name
      }
    }
  `
  return fetchHygraphQuery(query)
}
