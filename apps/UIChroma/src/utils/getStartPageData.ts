import { fetchHygraphQuery } from "@/app/api/cms/hygraph";
import { RichTextContent } from "@graphcms/rich-text-types";

interface Section {
  id: string;
  title: string;
  description: string;
  content: {
    raw: RichTextContent
  }
}

interface GetStarterData {
  documentationPage: {
    id: string;
    title: string;
    slug: string;
    section: Section;
    section02: Section;
    section03: Section;
    section04: Section;
  }
}

export const GET_STARTER_PAGE_DATA = async (): Promise<GetStarterData> => {
  const query = `
    query MyQuery {
      documentationPage(where: {slug: "getstarter"}) {
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
      }
    }
  `
  return fetchHygraphQuery(query)
}