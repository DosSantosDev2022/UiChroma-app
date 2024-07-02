import type { RichTextContent } from '@graphcms/rich-text-types'


type Commit = {
  id: string
  description: {
    raw: RichTextContent
  }
}

type Release = {
  id: string
  version: string
  date: string // ou Date, dependendo do formato no GraphQL schema
  title: string
  commits: Commit[]
}

type ReleasePage = {
  title: string
  description: string
  releases: Release[]
}

export type MyQueryResponse = {
  releasePage: ReleasePage
}
