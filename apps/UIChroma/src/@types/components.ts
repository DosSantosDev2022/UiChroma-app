type DocsLinks = {
  id: string
  title: string
  label: string
  url: string
}

type Features = {
  id: string
  name: string
}

type Utilities = {
  title: string
  description: string
  blockCode: string
}

type Dependencies = {
  id: string
  title: string
  description: string
  command: string
}

export interface ComponentsPageData {
  pageComponent: {
    id: string
    slug: string
    name: string
    version: string
    description: string
    docsLinks: DocsLinks[]
    features: Features[]
    sourceCode: {
      description: string
      title: string
      blockCode: string
    }
    utilities: Utilities
    sampleCode: {
      title: string
      description: string
      blockCode: string
    }
    dependencies: Dependencies[]
    developing: boolean
  }
}
