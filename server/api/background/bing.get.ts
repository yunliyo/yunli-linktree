interface BingImage {
  url?: string
  urlbase?: string
  title?: string
  copyright?: string
  startdate?: string
}

interface BingResponse {
  images?: BingImage[]
}

/**
 * 代理请求 Bing 官方每日壁纸接口，返回可直接使用的图片地址。
 * 官方接口：https://www.bing.com/HPImageArchive.aspx
 */
export default defineEventHandler(async () => {
  const data = await $fetch<BingResponse>(
    'https://www.bing.com/HPImageArchive.aspx',
    {
      params: { format: 'js', idx: 0, n: 1, mkt: 'zh-CN' },
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36',
      },
      timeout: 8000,
    },
  )

  const image = data.images?.[0]
  if (!image?.urlbase) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Bing wallpaper unavailable',
    })
  }

  const base = 'https://www.bing.com'

  return {
    url: `${base}${image.urlbase}_1920x1080.jpg`,
    uhd: `${base}${image.urlbase}_UHD.jpg`,
    title: image.title ?? '',
    copyright: image.copyright ?? '',
    date: image.startdate ?? '',
  }
})
