interface DocsLinks {
  id: string
  title: string
  label: string
  url: string
}

interface Features {
  id: string
  name: string
}

interface Utilities {
  title: string
  description: string
  blockCode: string
}

interface Dependencies {
  id: string
  title: string
  description: string
  command: string
}

interface blockCode {
  title: string
  description: string
  blockCode: string
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
    sourceCode: blockCode
    utilities: Utilities
    sampleCode: blockCode
    dependencies: Dependencies[]
    developing: boolean
  }
}
