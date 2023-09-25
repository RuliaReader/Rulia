import type { KomgaBooksResponse } from './types/book'
import type { KomgaBookImage } from './types/book-image'
import type { KomgaSeriesResponse } from './types/series'
import type { KomgaSeriesListResponse } from './types/series-list'

async function getMangaList (page: string, pageSize: string, keyword?: string) {
  const userConfig = window.Rulia.getUserConfig()
  const baseUrl = userConfig.baseUrl
  if (!baseUrl) {
    return window.Rulia.endWithException('Please provide baseUrl in plugin config')
  }

  try {
    const query = new URLSearchParams()
    query.append('page', (parseInt(page) - 1).toString())
    query.append('size', pageSize)
    if (keyword) {
      query.append('search', keyword)
    }

    const rawResponse = await window.Rulia.httpRequest({
      url: `${baseUrl}/api/v1/series`,
      method: 'GET',
      payload: query.toString()
    })

    const response = JSON.parse(rawResponse) as KomgaSeriesListResponse

    const result: IGetMangaListResult = {
      list: response.content.map(item => ({
        title: item.name,
        url: JSON.stringify({
          seriesId: item.id,
          libraryId: item.libraryId
        }),
        coverUrl: `${baseUrl}/api/v1/series/${item.id}/thumbnail`
      }))
    }

    window.Rulia.endWithResult(result)
  } catch (error) {
    window.Rulia.endWithException((error as Error).message)
  }
}

async function getMangaData (metadata: string) {
  const userConfig = window.Rulia.getUserConfig()
  const baseUrl = userConfig.baseUrl
  if (!baseUrl) {
    return window.Rulia.endWithException('Please provide baseUrl in plugin config')
  }

  const { seriesId } = JSON.parse(metadata) as {
    seriesId: string
    libraryId: string
  }

  const result: IGetMangaDataResult = {
    title: '',
    description: '',
    coverUrl: `${baseUrl}/api/v1/series/${seriesId}/thumbnail`,
    chapterList: []
  }

  // Get chapter list.
  try {
    const query = new URLSearchParams()
    query.append('sort', 'metadata.numberSort,asc')
    query.append('unpaged', 'true')

    const rawResponse = await window.Rulia.httpRequest({
      url: `${baseUrl}/api/v1/series/${seriesId}/books`,
      method: 'GET',
      payload: query.toString()
    })

    const response = JSON.parse(rawResponse) as KomgaBooksResponse
    result.chapterList = response.content.map(item => ({
      title: item.name,
      url: item.id // BookId.
    }))
  } catch (error) {
    return window.Rulia.endWithException((error as Error).message)
  }

  // Get manga info.
  try {
    const rawResponse = await window.Rulia.httpRequest({
      url: `${baseUrl}/api/v1/series/${seriesId}`,
      method: 'GET'
    })
    const response = JSON.parse(rawResponse) as KomgaSeriesResponse
    result.title = response.name
    result.description = response.metadata.summary
  } catch (error) {
    return window.Rulia.endWithException((error as Error).message)
  }

  window.Rulia.endWithResult(result)
}

async function getChapterImageList (bookId: string) {
  const userConfig = window.Rulia.getUserConfig()
  const baseUrl = userConfig.baseUrl
  if (!baseUrl) {
    return window.Rulia.endWithException('Please provide baseUrl in plugin config')
  }

  try {
    const rawResponse = await window.Rulia.httpRequest({
      url: `${baseUrl}/api/v1/books/${bookId}/pages`,
      method: 'GET'
    })
    const response = await JSON.parse(rawResponse) as KomgaBookImage[]

    const result: IRuliaChapterImage[] = response.map(item => ({
      url: `${baseUrl}/api/v1/books/${bookId}/pages/${item.number}`,
      width: item.width,
      height: item.height
    }))
    window.Rulia.endWithResult(result)
  } catch (error) {
    window.Rulia.endWithException((error as Error).message)
  }
}

function getImageUrl (url: string) {
  window.Rulia.endWithResult(url)
}
