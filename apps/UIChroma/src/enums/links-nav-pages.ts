export enum NavigationLinks {
  INTRODUCTION = 'Introdução',
  GETTING_STARTED = 'Primeiros-Passos',
  INSTALLATION = 'Instalação',
  USING_COMPONENTS = 'Usando',
  CUSTOMIZATION = 'Personalização',
  EXAMPLES = 'Exemplos'
}

export const links = [
  { text: NavigationLinks.INTRODUCTION, url: NavigationLinks.INTRODUCTION },
  {
    text: NavigationLinks.GETTING_STARTED,
    url: NavigationLinks.GETTING_STARTED
  },
  { text: NavigationLinks.INSTALLATION, url: NavigationLinks.INSTALLATION },
  {
    text: NavigationLinks.USING_COMPONENTS,
    url: NavigationLinks.USING_COMPONENTS
  },
  { text: NavigationLinks.CUSTOMIZATION, url: NavigationLinks.CUSTOMIZATION },
  { text: NavigationLinks.EXAMPLES, url: NavigationLinks.EXAMPLES }
]

export const linksNavigationMap: Record<
  string,
  { label: string; href: string }[]
> = {
  themes: [
    { label: 'Introdução', href: 'Introdução' },
    { label: 'Estrutura', href: 'Estrutura' },
    { label: 'Tailwind CSS', href: 'Tailwind css' },
    { label: 'Temas', href: 'Temas' },
    { label: 'Cores', href: 'Cores' },
    { label: 'HSL', href: 'HSL' }
  ],
  dark: [
    { label: 'Introdução', href: 'Introdução' },
    { label: 'Ativando Dark Mode', href: 'Ativando' },
    { label: 'Alternândo Tema', href: 'Alternancia' },
    { label: 'Salvando preferência', href: 'Preferencia' }
  ],
  gettingstarted: [
    { label: 'Introdução', href: 'Introdução' },
    { label: 'Primeiros Passos', href: 'PrimeirosPassos' },
    { label: 'Instalação', href: 'Instalação' },
    { label: 'Como usar', href: 'Usando' },
    { label: 'Personalização', href: 'Personalização' },
    { label: 'Exemplos', href: 'Exemplos' }
  ],
  cli: [
    { label: 'Introdução', href: 'Introdução' },
    { label: 'O que faz?', href: 'oquefaz' }
  ]
}
