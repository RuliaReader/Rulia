interface Content {
  id: string
  seriesId: string
  seriesTitle: string
  libraryId: string
  name: string
  url: string
  number: number
  created: string
  lastModified: string
  fileLastModified: string
  sizeBytes: number
  size: string
  media: Media
  metadata: Metadata
  readProgress?: ReadProgress
  deleted: boolean
  fileHash: string
  oneshot: boolean
}

interface Media {
  status: string
  mediaType: string
  pagesCount: number
  comment: string
}

interface Metadata {
  title: string
  titleLock: boolean
  summary: string
  summaryLock: boolean
  number: string
  numberLock: boolean
  numberSort: number
  numberSortLock: boolean
  releaseDate: any
  releaseDateLock: boolean
  authors: any[]
  authorsLock: boolean
  tags: any[]
  tagsLock: boolean
  isbn: string
  isbnLock: boolean
  links: any[]
  linksLock: boolean
  created: string
  lastModified: string
}

interface ReadProgress {
  page: number
  completed: boolean
  readDate: string
  created: string
  lastModified: string
}

interface Pageable {
  sort: Sort
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

interface Sort2 {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

interface KomgaBooksResponse {
  content: Content[]
  pageable: Pageable
  last: boolean
  totalElements: number
  totalPages: number
  size: number
  number: number
  sort: Sort2
  first: boolean
  numberOfElements: number
  empty: boolean
}

export type {
  KomgaBooksResponse
}
