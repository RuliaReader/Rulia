interface Metadata {
  status: string
  statusLock: boolean
  title: string
  titleLock: boolean
  titleSort: string
  titleSortLock: boolean
  summary: string
  summaryLock: boolean
  readingDirection: string
  readingDirectionLock: boolean
  publisher: string
  publisherLock: boolean
  ageRating: any
  ageRatingLock: boolean
  language: string
  languageLock: boolean
  genres: any[]
  genresLock: boolean
  tags: any[]
  tagsLock: boolean
  totalBookCount: any
  totalBookCountLock: boolean
  sharingLabels: any[]
  sharingLabelsLock: boolean
  links: any[]
  linksLock: boolean
  alternateTitles: any[]
  alternateTitlesLock: boolean
  created: string
  lastModified: string
}

interface BooksMetadata {
  authors: any[]
  tags: any[]
  releaseDate: any
  summary: string
  summaryNumber: string
  created: string
  lastModified: string
}

interface KomgaSeriesResponse {
  id: string
  libraryId: string
  name: string
  url: string
  created: string
  lastModified: string
  fileLastModified: string
  booksCount: number
  booksReadCount: number
  booksUnreadCount: number
  booksInProgressCount: number
  metadata: Metadata
  booksMetadata: BooksMetadata
  deleted: boolean
  oneshot: boolean
}

export type {
  KomgaSeriesResponse
}
