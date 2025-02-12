import { v4 as uuid } from 'uuid'

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
  { id: string; label: string; url: string }[]
> = {
  themes: [
    {
      label: 'Introdução',
      url: 'Introdução',
      id: uuid()
    },
    {
      label: 'Estrutura',
      url: 'Estrutura',
      id: uuid()
    },
    {
      label: 'Tailwind CSS',
      url: 'Tailwind css',
      id: uuid()
    },
    {
      label: 'Temas',
      url: 'Temas',
      id: uuid()
    },
    {
      label: 'Cores',
      url: 'Cores',
      id: uuid()
    },
    {
      label: 'HSL',
      url: 'HSL',
      id: uuid()
    }
  ],
  dark: [
    {
      label: 'Introdução',
      url: 'Introdução',
      id: uuid()
    },
    {
      label: 'Ativando Dark Mode',
      url: 'Ativando',
      id: uuid()
    },
    {
      label: 'Alternândo Tema',
      url: 'Alternancia',
      id: uuid()
    },
    {
      label: 'Salvando preferência',
      url: 'Preferencia',
      id: uuid()
    }
  ],
  gettingstarted: [
    {
      label: 'Introdução',
      url: 'Introdução',
      id: uuid()
    },
    {
      label: 'Primeiros Passos',
      url: 'PrimeirosPassos',
      id: uuid()
    },
    {
      label: 'Instalação',
      url: 'Instalação',
      id: uuid()
    },
    {
      label: 'Como usar',
      url: 'Usando',
      id: uuid()
    },
    {
      label: 'Personalização',
      url: 'Personalização',
      id: uuid()
    },
    {
      label: 'Exemplos',
      url: 'Exemplos',
      id: uuid()
    }
  ],
  cli: [
    {
      label: 'Introdução',
      url: 'Introdução',
      id: uuid()
    },
    {
      label: 'O que faz?',
      url: 'oquefaz',
      id: uuid()
    }
  ]
}
