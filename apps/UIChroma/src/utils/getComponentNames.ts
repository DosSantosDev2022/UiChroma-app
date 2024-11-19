import { fetchHygraphQuery } from "@/app/api/cms/hygraph"

interface QueryProps {
  pageComponents: {
    id: string
    slug: string
    name: string
  }[]
}

export const GET_COMPONENTS_NAME = async (): Promise<QueryProps> => {
  const query = `
      query MyQuery {
      pageComponents(first: 100) {
        id
        slug
        name
      }
    }
  `
  return fetchHygraphQuery(query)
}