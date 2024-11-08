
export interface getStaticPathsTypes {
  slug: string
}

interface Tag {
  tagName: string
}

export interface FeatureList {
  content: string
}

interface Dependencie {
  id: string
  title: string
  description: string
  command: string
}

export interface DocLinks {
  id: string
  label: string
  url: string
}

interface Component {
  id: string
  slug: string
  tag: Tag
  componentName: string
  description: string
  featureList: FeatureList[]
  dependencie: Dependencie[]
  codeString: string
  codeUsage: string
  utilities: string
  utilitiesDescription: string
  animations: string
  doclinks: DocLinks[]
}

export interface DataQueryComponent {
  component: Component
}