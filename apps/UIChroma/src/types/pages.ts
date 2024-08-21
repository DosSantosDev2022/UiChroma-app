import { RichTextContent } from '@graphcms/rich-text-types'

export interface HomePageData {
  homePage: {
    id: string
    sectionHero: {
      raw: RichTextContent
    }
    sectionIntroduction: {
      raw: RichTextContent
    }
  }
}

export interface GetStarterData {
  getstarted: {
    introduction: {
      raw: RichTextContent
    }
    quickstart: {
      raw: RichTextContent
    }
    instalation: {
      raw: RichTextContent
    }
    useComponents: {
      raw: RichTextContent
    }
    customization: {
      raw: RichTextContent
    }
    examples: {
      raw: RichTextContent
    }
    contributions: {
      raw: RichTextContent
    }
  }
}

export interface GetPathLinks {
  components: {
    id: string
    slug: string
    componentName: string
  }[]
}
