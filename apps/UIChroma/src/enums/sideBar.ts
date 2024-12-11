import { FaHome } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { IoDocumentText } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'
import { MdNewReleases } from 'react-icons/md'
import { v4 as uuid } from 'uuid'

export enum NavigationLinksSideBar {
  HOME = 'Home',
  GETTING_STARTED = 'Primeiros passos',
  DOCUMENTATION = 'Documentação',
  RELEASES = 'Releases',
}

export enum NavigationUrls {
  HOME = '/',
  GETTING_STARTED = '/gettingStarted',
  DOCUMENTATION = '/documentation',
  RELEASES = '/releases',
}

interface LinkItem {
  id: string
  name: NavigationLinksSideBar
  Url: NavigationUrls
  icon: IconType
}

export const links: LinkItem[] = [
  {
    id: uuid(),
    name: NavigationLinksSideBar.HOME,
    Url: NavigationUrls.HOME,
    icon: FaHome,
  },
  {
    id: uuid(),
    name: NavigationLinksSideBar.GETTING_STARTED,
    Url: NavigationUrls.GETTING_STARTED,
    icon: IoIosRocket,
  },
  {
    id: uuid(),
    name: NavigationLinksSideBar.DOCUMENTATION,
    Url: NavigationUrls.DOCUMENTATION,
    icon: IoDocumentText,
  },
  {
    id: uuid(),
    name: NavigationLinksSideBar.RELEASES,
    Url: NavigationUrls.RELEASES,
    icon: MdNewReleases,
  },
]

export const themes = [
  {
    label: 'Documentação',
    url: 'themes/docs',
  },
  {
    label: 'Criar tema',
    url: 'themes/create',
  },
]
