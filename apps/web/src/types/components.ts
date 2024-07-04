interface Tag {
  tagName: string
}

interface Feature {
  id: string
  item: string
}

interface Dependencie {
  id: string
  title: string
  command: string
}

interface Component {
  id:string
  slug: string
  tag: Tag
  componentName: string
  description: string
  features: Feature[]
  dependencie: Dependencie[]
  codeString: string
}

export interface DataQuery {
  components: Component[]
}
