/**
 * Bing 每日壁纸
 *
 * 优先级：
 * 1. 站内服务端接口 `/api/background/bing`（服务端代理请求 Bing 官方接口，无跨域问题）
 * 2. 公开镜像接口（纯静态部署、无 Node 服务时兜底）
 * 3. 本地 `public/bg.png`（始终作为底层兜底背景）
 */
interface BingWallpaper {
	url: string
	uhd?: string
	title?: string
	copyright?: string
	date?: string
}

const MIRROR_SOURCES = [
	'https://api.dujin.org/bing/1920.php',
	'https://bing.img.run/1920x1080.php',
]

export function useBingWallpaper() {
	/** 实际生效的壁纸地址，为空时仅显示本地兜底图 */
	const source = ref('')
	/** 壁纸是否已加载完成（用于淡入） */
	const ready = ref(false)
	/** 壁纸标题（镜像兜底时为空） */
	const title = ref('')
	/** 壁纸版权信息（镜像兜底时为空） */
	const copyright = ref('')
	/** 壁纸日期，格式 YYYYMMDD（镜像兜底时为空） */
	const date = ref('')

	/** 标记壁纸已加载完成 */
	const markReady = () => {
		ready.value = true
	}

	/** 壁纸加载失败，回退到本地兜底图 */
	const fail = () => {
		source.value = ''
		ready.value = false
	}

	/** 预加载图片，确认可访问后再切换，避免闪烁/破图 */
	const preload = (url: string) =>
		new Promise<boolean>((resolve) => {
			const img = new Image()
			img.onload = () => resolve(true)
			img.onerror = () => resolve(false)
			img.src = url
		})

	const resolveSource = async (): Promise<string> => {
		try {
			const data = await $fetch<BingWallpaper>('/api/background/bing', {
				timeout: 6000,
			})
			if (data?.url) {
				title.value = data.title ?? ''
				copyright.value = data.copyright ?? ''
				date.value = data.date ?? ''
				return data.url
			}
		}
		catch {
			// 忽略：静态部署时可能不存在服务端接口
		}

		for (const mirror of MIRROR_SOURCES) {
			if (await preload(mirror))
				return mirror
		}

		return ''
	}

	onMounted(async () => {
		const url = await resolveSource()
		if (!url)
			return

		if (await preload(url))
			source.value = url
	})

	return { source, ready, title, copyright, date, markReady, fail }
}
