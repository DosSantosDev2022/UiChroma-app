import type { RichTextContent } from '@graphcms/rich-text-types'

interface Commit {
  id: string
  description: {
    raw: RichTextContent
  }
}

interface Release {
  id: string
  version: string
  date: string
  title: string
  commits: Commit[]
}

export interface ReleasePage {
  releasePage: {
    title: string
    description: string
    releases: Release[]
  }
}
