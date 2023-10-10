interface IBilibiliApi<T> {
  data: T
  code: number
  msg: string
}

interface IMangaCategoryListItem {
  title: string
  season_id: number
  vertical_cover: string
}

interface IMangaSearchResult {
  list: {
    id: number
    title: string
    vertical_cover: string
  }[]
}

interface IMangaSeason {
  id: number
  title: string
  evaluate: string
  vertical_cover: string
  ep_list: {
    id: number
    short_title: string
    ord: number
    is_locked: boolean
  }[]
}

type MangaListFilterOptions = Array<{
  label: string,
  name: string | number,
  options: Array<{ label: string, value: string }>
}>

/**
 * This function will be invoked in manga list page.
 * The returned data will be used as the filter options for the manga list.
 */
async function setMangaListFilterOptions () {
  const url = 'https://manga.bilibili.com/twirp/comic.v1.Comic/AllLabel?device=pc&platform=web'

  try {
    const result: MangaListFilterOptions = [
      { label: '题材', name: 'styles', options: [{ label: '全部', value: '-1' }] },
      { label: '地区', name: 'areas', options: [{ label: '全部', value: '-1' }] },
      { label: '进度', name: 'status', options: [{ label: '全部', value: '-1' }] },
      { label: '收费', name: 'prices', options: [{ label: '全部', value: '-1' }] },
      { label: '排序', name: 'orders', options: [] }
    ]

    const rawResponse = await window.Rulia.httpRequest({
      url,
      method: 'POST',
      contentType: 'application/json'
    })

    const response = JSON.parse(rawResponse) as IBilibiliApi<Record<string, { id: number, name: string }[]>>

    if (response.code !== 0) {
      throw new Error('SERVER_RESPONSE_CODE_' + response.code)
    }

    Object.keys(response.data).forEach(key => {
      const filterOption = result.find(item => item.name === key)
      if (filterOption) {
        const newOptions = (response.data?.[key] ?? []).map(item => ({
          label: item.name,
          value: item.id.toString()
        }))
        filterOption.options.push(...newOptions)
      }
    })

    window.Rulia.endWithResult(result)
  } catch (error) {
    window.Rulia.endWithResult([])
  }
}

async function getMangaListByCategory (page: number, pageSize: number, filterOptions: Record<string, string>) {
  const url = 'https://manga.bilibili.com/twirp/comic.v1.Comic/ClassPage?device=pc&platform=web'
  try {
    const payload = {
      style_id: -1,
      area_id: 2,
      is_finish: -1,
      order: 3,
      page_num: page,
      page_size: pageSize,
      is_free: -1
    }

    if (filterOptions.styles) {
      payload.style_id = parseInt(filterOptions.styles)
    }
    if (filterOptions.areas) {
      payload.area_id = parseInt(filterOptions.areas)
    }
    if (filterOptions.status) {
      payload.is_finish = parseInt(filterOptions.status)
    }
    if (filterOptions.prices) {
      payload.is_free = parseInt(filterOptions.prices)
    }
    if (filterOptions.orders) {
      payload.order = parseInt(filterOptions.orders)
    }

    const rawResponse = await window.Rulia.httpRequest({
      url,
      method: 'POST',
      payload: JSON.stringify(payload),
      contentType: 'application/json'
    })

    const response = JSON.parse(rawResponse) as IBilibiliApi<IMangaCategoryListItem[]>
    if (response.code !== 0) {
      throw new Error('SERVER_RESPONSE_CODE_' + response.code)
    }

    const result: IGetMangaListResult = {
      list: response.data.map(item => ({
        title: item.title,
        url: `https://manga.bilibili.com/detail/mc${item.season_id}`,
        coverUrl: item.vertical_cover + '@500w.jpg'
      }))
    }

    window.Rulia.endWithResult(result)
  } catch (error) {
    window.Rulia.endWithException((error as Error).message)
  }
}

async function getMangaListBySearching (page: number, pageSize: number, keyword: string) {
  const url = 'https://manga.bilibili.com/twirp/comic.v1.Comic/Search?device=pc&platform=web'
  try {
    const rawResponse = await window.Rulia.httpRequest({
      url,
      method: 'POST',
      payload: JSON.stringify({
        key_word: keyword,
        page_num: page,
        page_size: pageSize
      }),
      contentType: 'application/json'
    })

    const response = JSON.parse(rawResponse) as IBilibiliApi<IMangaSearchResult>

    if (response.code !== 0) {
      throw new Error('SERVER_RESPONSE_CODE_' + response.code)
    }

    const result: IGetMangaListResult = {
      list: response.data.list.map(item => ({
        title: item.title,
        url: `https://manga.bilibili.com/detail/mc${item.id}`,
        coverUrl: item.vertical_cover + '@500w.jpg'
      }))
    }

    window.Rulia.endWithResult(result)
  } catch (error) {
    window.Rulia.endWithException((error as Error).message)
  }
}

/**
 * Get manga list for manga list page.
 * This function will be invoked by Rulia in the manga list page.
 *
 * @param {string} page Page number. Please notice this arg will be passed from Rulia in string type.
 * @param {string} pageSize Page size. Please notice this arg will be passed from Rulia in string type.
 * @param {string} keyword The search keyword. It will empty when user doesn't provide it.
 * @param {string} rawFilterOptions The filter options.
 * @returns
 */
async function getMangaList (page: string, pageSize: string, keyword?: string, rawFilterOptions?: string) {
  const pageNum = parseInt(page)
  const pageSizeNum = parseInt(pageSize)

  // I separated the task into two functions because Bilibili requires distinct APIs for
  // searching and listing.
  if (keyword) {
    return await getMangaListBySearching(pageNum, pageSizeNum, keyword)
  }

  let filterOptions: Record<string, string> = {}
  if (rawFilterOptions) {
    try {
      filterOptions = JSON.parse(rawFilterOptions)
    } catch (error) {
      filterOptions = {}
    }
  }
  return await getMangaListByCategory(pageNum, pageSizeNum, filterOptions)
}

/**
 * Get data of a single manga.
 * This function will be invoked by Rulia when user clicks a certain manga
 * in the manga list page.
 *
 * @param {string} dataPageUrl This url is from the function "getMangaList".
 * @returns
 */
async function getMangaData (dataPageUrl: string) {
  // The url arg is something like 'https://manga.bilibili.com/detail/mc25717'.

  const seasonIdMatchExp = /mc(\d+)$/ // Get season id from the url.
  const seasonIdMatch = dataPageUrl.match(seasonIdMatchExp)
  if (!seasonIdMatch || seasonIdMatch.length < 2) {
    window.Rulia.endWithException('NO_SEASON_ID_GOT')
    return
  }

  const seasonId = parseInt(seasonIdMatch[1])
  if (isNaN(seasonId)) {
    window.Rulia.endWithException('INVALID_SEASON_ID')
    return
  }

  const url = 'https://manga.bilibili.com/twirp/comic.v1.Comic/ComicDetail?device=pc&platform=web'
  try {
    const rawResponse = await window.Rulia.httpRequest({
      url,
      method: 'POST',
      payload: JSON.stringify({
        comic_id: seasonId
      }),
      contentType: 'application/json'
    })

    const response = JSON.parse(rawResponse) as IBilibiliApi<IMangaSeason>

    const episodeList = response.data.ep_list
      .slice()
      .filter(item => !item.is_locked)

    episodeList.sort((a, b) => a.ord - b.ord)

    const result: IGetMangaDataResult = {
      title: response.data.title,
      description: response.data.evaluate,
      coverUrl: response.data.vertical_cover + '@500w.jpg',
      chapterList: episodeList.map(item => ({
        title: item.short_title,
        url: `https://manga.bilibili.com/mc${seasonId}/${item.id}`
      }))
    }
    window.Rulia.endWithResult(result)
  } catch (error) {
    window.Rulia.endWithException((error as Error).message)
  }
}

/**
 * Get image urls of all images from a single episode.
 *
 * @param {string} chapterUrl This url is from the result of the function 'getMangaData'.
 */
async function getChapterImageList (chapterUrl: string) {
  // The 'episodeUrl' is in the form of 'https://manga.bilibili.com/mc28201/463667'.

  const episodeIdMatchExp = /(\d+)$/
  const episodeIdMatch = chapterUrl.match(episodeIdMatchExp)
  const episodeId = parseInt(episodeIdMatch?.[0] ?? '')
  if (isNaN(episodeId)) {
    window.Rulia.endWithException('NO_EPISODE_ID_GOT')
    return
  }

  const url = 'https://manga.bilibili.com/twirp/comic.v1.Comic/GetImageIndex?device=pc&platform=web'
  try {
    const rawResponse = await window.Rulia.httpRequest({
      url,
      method: 'POST',
      payload: JSON.stringify({
        ep_id: episodeId
      }),
      contentType: 'application/json'
    })
    const response = await JSON.parse(rawResponse) as IBilibiliApi<{
      images: {
        path: string
        x: number
        y: number
      }[]
      host: string
    }>

    if (response.code !== 0) {
      throw new Error('SERVER_RESPONSE_CODE_' + response.code)
    }

    const imageList = response.data.images
    const result: IRuliaChapterImage[] = imageList.map(item => ({
      url: item.path,
      width: item.x,
      height: item.y
    }))
    window.Rulia.endWithResult(result)
  } catch (error) {
    window.Rulia.endWithException((error as Error).message)
  }
}

/**
 * This function will be invoked when Rulia is going to download a image.
 *
 * Since some websites require special verification before downloading images,
 * you may need to implement these verification logics within this method.
 * If the target website doesn't need special logic, you can just directly
 * return the parameter 'url'.
 *
 * @param {string} path This url is from the result of the function 'getChapterImageList'
 */
async function getImageUrl (path: string) {
  // 'path' is in the form of '/bfs/manga/3a6b12f0f9d64a9a5401e0933087a060a022cec4.jpg'.

  const payload = {
    urls: JSON.stringify([path + '@1100w.jpg'])
  }

  try {
    const rawResponse = await window.Rulia.httpRequest({
      url: 'https://manga.bilibili.com/twirp/comic.v1.Comic/ImageToken?device=pc&platform=web',
      method: 'POST',
      payload: JSON.stringify(payload),
      contentType: 'application/json'
    })
    const response = JSON.parse(rawResponse) as IBilibiliApi<{url: string, token: string}[]>

    const imageUrl = response.data?.[0]?.url ?? ''
    const token = response.data?.[0]?.token ?? ''

    if (!imageUrl || !token) {
      throw new Error('NO_IMAGE_URL_OR_TOKEN')
    }

    const fullUrl = imageUrl + '?token=' + token
    window.Rulia.endWithResult(fullUrl)
  } catch (error) {
    window.Rulia.endWithException((error as Error).message)
  }
}
