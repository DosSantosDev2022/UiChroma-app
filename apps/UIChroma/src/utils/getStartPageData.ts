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
    section: Section | null;
    section02: Section | null;
    section03: Section | null;
    section04: Section | null;
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