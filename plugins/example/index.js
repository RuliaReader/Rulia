async function getMangaList (page = 1, pageSize = 10, keyword = '') {
  // Let's say we get 2 mangas to return.
  const result = {
    list: [
      { title: 'Awesome manga 01', url: 'https://some-manga.com/s1', cover: 'https://some-cover.jpg' },
      { title: 'Awesome manga 02', url: 'https://some-manga.com/s2', cover: 'https://some-cover.jpg' }
    ]
  }

  window.Rulia.endWithResult(result)
}

async function getMangaData (url = '') {
  // Parameter "url" will be "https://some-manga.com/s1" or "https://some-manga.com/s2".
  // Get id from this url to request detail data.
  // Let's say we have the data for 1.

  const result = {
    title: 'Awesome manga 01',
    description: 'Awesome manga series 01 is out!',
    coverUrl: 'https://some-cover.jpg',
    chapterList: [
      { title: 'CH.01', url: 'https://some-manga.com/s1/ch1' },
      { title: 'CH.02', url: 'https://some-manga.com/s1/ch2' },
      { title: 'CH.03', url: 'https://some-manga.com/s1/ch3' }
    ],
    lastReadChapter: {
      title: 'CH.02',
      url: 'https://some-manga.com/s1/ch2'
    }
  }

  window.Rulia.endWithResult(result)
}

async function getChapterImageList (chapterUrl = '') {
  // Parameter "chapterUrl" will be something like "https://some-manga.com/s1/1".
  // You can get necessary information from this url.
  // Let's say you have read image url from server.
  const result = [
    { url: 'https://some-manga.com/s1/ch1/image/01.jpg', width: 1000, height: 1600 },
    { url: 'https://some-manga.com/s1/ch1/image/02.jpg', width: 1000, height: 1600 },
    { url: 'https://some-manga.com/s1/ch1/image/03.jpg', width: 1000, height: 1600 }
  ]

  window.Rulia.endWithResult(result)
}

async function getImageUrl (imageUrl = '') {
  // Parameter "imageUrl" will be something like "https://some-manga.com/s1/ch1/image/01.jpg".
  // This function will be invoked when Rulia is going to download an image.
  // You can deal with some authorization in function.
  // Let's say we don't need to do authorization stuff, thus all we need is to return imageUrl directly.
  return imageUrl
}
