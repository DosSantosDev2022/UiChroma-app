import { RichTextContent } from "@graphcms/rich-text-types"

interface Tag {
  tagName: string
}

export interface FeatureList {
  content: string
}

interface Dependencie {
  id: string
  title: string
  command: string
}

export interface DocLinks {
    id: string
    label : string
    url:string
}

interface Component {
  id:string
  slug: string
  tag: Tag
  componentName: string
  description: string
  featureList: FeatureList[]
  dependencie: Dependencie[]
  codeString: string
  animations:string
  doclinks: DocLinks[]
}

interface Hook {
  id:string
  slug: string
  tag: Tag
  hookName: string
  description: string
  featureList: FeatureList[]
  codeString: string
  doclinks: DocLinks[]
  usage: {
    raw: RichTextContent
  }
}

export interface DataQueryComponent {
  component: Component
}

export interface DataQueryHooks{
  hook:Hook[]
}
