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

interface DocLinks {
    id: string
    label : string
    icon: string
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
  docLinks: DocLinks[]
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
