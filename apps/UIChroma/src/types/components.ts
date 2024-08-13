interface Tag {
  tagName: string
}

export interface Feature {
  id?: string
  item: string
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
  features: Feature[]
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
  features: Feature[]
  dependencie: Dependencie[]
  codeString: string

}

export interface DataQueryComponent {
  component: Component
}

export interface DataQueryHooks{
  hook:Hook[]
}
