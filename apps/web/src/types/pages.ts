import { RichTextContent } from "@graphcms/rich-text-types"

export interface HomePageData {
  homePage: {
    id: string
    sectionHero:{
      raw : RichTextContent
    }
    sectionIntroduction: {
      raw : RichTextContent
    }
  }
}

export interface GetStarterData {
  getstarted:{
    content: {
      raw:RichTextContent
    }
  }
}