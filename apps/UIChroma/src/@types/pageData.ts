import { RichTextContent } from '@graphcms/rich-text-types'

interface Section {
  id: string
  title: string
  description: string
  content: {
    raw: RichTextContent
  }
}

export interface PageDataTypes {
  documentationPage: {
    id: string
    title: string
    slug: string
    section: Section | null
    section02: Section | null
    section03: Section | null
    section04: Section | null
    section05: Section | null
  }
}
