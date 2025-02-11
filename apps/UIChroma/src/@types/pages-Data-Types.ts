import { RichTextContent } from '@graphcms/rich-text-types'

interface Section {
  identifier: string
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
    sectionOne?: Section | null
    sectionTwo?: Section | null
    sectionThree?: Section | null
    sectionFour?: Section | null
    sectionFive?: Section | null
    sectionSix?: Section | null
    sectionSeven?: Section | null
    developing?: boolean
  }
}
