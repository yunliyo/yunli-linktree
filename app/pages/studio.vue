<script setup lang="ts">
const appConfig = useAppConfig()
const { source, ready, copyright, date, markReady, fail } = useBingWallpaper()

const year = new Date().getFullYear()

useHead({ title: '工作室' })
definePageMeta({ headerText: '雪山千古冷，独照峨眉峰' })

/** 壁纸日期，接口返回格式为 YYYYMMDD */
const wallpaperDate = computed(() => {
	const value = date.value
	if (value.length !== 8 || !Number.isInteger(Number(value)))
		return ''
	return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`
})

const about = [
	'犹为君工作室，简称“犹为君”，英文名称 “Still for Thee”，出自唐代常建的“惊鸿照影微月，清光犹为君”，Slogan 为“一深月色，只为君来”。',
	'旗下品牌有雪山诗派（Snow Mountain Poetry Society）、狸庐（CatHut）、平仄云 / 零一云（ZeroneRhyme Cloud）。',
	'始创于 2018 年 7 月，是由个人开发者韵狸打造的诗意平台，致力于提升全民诗词创作水平，是一个诗社大军里的后起之秀。大力培养新人，钻研古典诗歌和现代诗歌创作，致力于诗词的弘扬和发展，收纳各方幽人雅士，聚五湖四海之墨，提倡优雅的学习环境和交流场所，以“精神自由，追求极致”“雪山千古冷，独照峨眉峰”为宗旨，集中主要力量，为诗的复兴、文学的复兴充当急先锋作用。',
	'同时也是一家致力于推动企业数字化转型的创新型科技工作室，专注于大数据、云计算及科技解决方案的研发与应用，为客户提供从网站建设到品牌运营的全方位服务。凭借前沿的技术实力和深厚的行业洞察，助力企业优化运营效率、提升市场竞争力，携手共创智慧未来。',
]

/** 分站：对应 xxx.liqiang.info 子域名 */
const stations = [
	'starter',
	'landing',
	'docs',
	'saas',
	'dashboard',
	'portfolio',
	'changelog',
].map(name => ({ name, url: `https://${name}.liqiang.info` }))

/** 首屏个人信息栏的快捷入口 */
const authorLinks = [
	{ icon: 'ri:article-line', text: 'Blog', url: 'https://liqiang.info' },
	{ icon: 'ri:github-line', text: 'GitHub', url: 'https://github.com/yunliyo' },
	{ icon: 'ri:mail-line', text: appConfig.author.email, url: `mailto:${appConfig.author.email}` },
]

const contacts = [
	{ icon: 'ri:mail-line', text: appConfig.author.email, url: `mailto:${appConfig.author.email}` },
	{ icon: 'ri:github-line', text: 'GitHub', url: 'https://github.com/yunliyo' },
	{ icon: 'ri:global-line', text: '官网', url: appConfig.author.homepage },
]

const socials = [
	{ icon: 'ri:github-line', text: 'GitHub', url: 'https://github.com/yunliyo' },
	{ icon: 'ri:article-line', text: 'Blog', url: 'https://liqiang.info' },
]

const beian = [
	{ icon: 'ri:shield-check-line', text: '未ICP备0000000000号', url: 'https://beian.miit.gov.cn/' },
	{ icon: 'ri:police-car-line', text: '未公网安备00000000000000号', url: 'https://beian.mps.gov.cn/#/query/webSearch' },
]
</script>

<template>
<div class="studio">
	<!-- Bing 每日壁纸背景：本地兜底图 + 壁纸淡入 + 渐隐遮罩 -->
	<div class="studio-bg" aria-hidden="true">
		<div class="studio-bg-fallback" />
		<img
			v-if="source"
			class="studio-bg-image"
			:class="{ ready }"
			:src="source"
			alt=""
			@load="markReady"
			@error="fail"
		>
		<div class="studio-bg-veil" />
	</div>

	<!-- 首屏 -->
	<section class="studio-hero">
		<header class="studio-wordmark">
			{{ appConfig.author.name }}YUNLI
		</header>

		<div class="studio-hero-main">
			<h1 class="studio-title">
				犹为君工作室
			</h1>
			<p class="studio-slogan">
				让我们生活的世界充满诗意。
			</p>
			<div class="studio-actions">
				<ZButton icon="ri:home-4-line" text="主页" to="/" primary />
				<ZButton class="ghost" icon="ri:article-line" text="博客" to="https://liqiang.info" />
			</div>
		</div>

		<footer class="studio-hero-footer">
			<div class="studio-author">
				<p class="studio-author-name">
					{{ appConfig.author.name }}YUNLI
				</p>
				<p class="studio-author-desc">
					{{ appConfig.description }}。
				</p>
				<ul class="studio-author-links">
					<li v-for="item in authorLinks" :key="item.text">
						<ZRawLink class="studio-link" :to="item.url">
							<Icon :name="item.icon" />
							<span>{{ item.text }}</span>
						</ZRawLink>
					</li>
				</ul>
			</div>

			<div class="studio-legal">
				<p v-if="copyright" class="studio-legal-wallpaper">
					<Icon name="ri:image-line" />
					<span>{{ copyright }}</span>
				</p>
				<p v-if="wallpaperDate" class="studio-legal-wallpaper">
					Bing 每日壁纸 · {{ wallpaperDate }}
				</p>
				<p>© 2015-{{ year }} Yunli.</p>
				<p v-for="item in beian" :key="item.text">
					<Icon :name="item.icon" />
					<a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
				</p>
			</div>
		</footer>
	</section>

	<!-- 正文 -->
	<div class="studio-body">
		<section class="studio-panel">
			<h2 class="studio-panel-title">
				关于
			</h2>
			<p v-for="(paragraph, index) in about" :key="index" class="studio-paragraph">
				{{ paragraph }}
			</p>
		</section>

		<section class="studio-panel">
			<h2 class="studio-panel-title">
				联系我们
			</h2>
			<ul class="studio-links">
				<li v-for="item in contacts" :key="item.text">
					<ZRawLink class="studio-link" :to="item.url">
						<Icon :name="item.icon" />
						<span>{{ item.text }}</span>
					</ZRawLink>
				</li>
			</ul>
		</section>

		<section class="studio-panel">
			<h2 class="studio-panel-title">
				分站
			</h2>
			<ul class="studio-stations">
				<li v-for="item in stations" :key="item.name">
					<ZRawLink class="studio-station" :to="item.url || undefined">
						<span>{{ item.name }}</span>
						<Icon v-if="item.url" name="ri:arrow-right-up-line" />
					</ZRawLink>
				</li>
			</ul>
		</section>

		<section class="studio-panel">
			<h2 class="studio-panel-title">
				社媒
			</h2>
			<ul class="studio-links">
				<li v-for="item in socials" :key="item.text">
					<ZRawLink class="studio-link" :to="item.url">
						<Icon :name="item.icon" />
						<span>{{ item.text }}</span>
					</ZRawLink>
				</li>
			</ul>
		</section>
	</div>
</div>
</template>

<style lang="scss" scoped>
.studio {
	--s-fg: hsl(0deg 0% 100% / 96%);
	--s-fg-dim: hsl(0deg 0% 100% / 72%);
	--s-line: hsl(0deg 0% 100% / 16%);
	--s-glass: hsl(215deg 25% 8% / 45%);
	--s-shadow: hsl(215deg 30% 4% / 35%);

	// 抵消 main 的内边距，让首屏通栏铺满
	margin: -1rem -5vw 0;
	color: var(--s-fg);
}

.studio-bg {
	position: fixed;
	overflow: hidden;
	inset: 0;
	background-color: hsl(215deg 25% 8%);
	z-index: -1;
}

.studio-bg-fallback {
	position: absolute;
	inset: 0;
	background: url("/bg.png") center / cover no-repeat;
}

.studio-bg-image {
	position: absolute;
	opacity: 0;
	inset: 0;
	width: 100%;
	height: 100%;
	transition: opacity 1.2s ease-out;
	object-fit: cover;

	&.ready {
		opacity: 1;
	}
}

.studio-bg-veil {
	position: absolute;
	inset: 0;
	background:
		linear-gradient(to bottom, hsl(215deg 30% 5% / 55%), hsl(215deg 30% 5% / 8%) 45%, hsl(215deg 30% 5% / 78%)),
		linear-gradient(to right, hsl(215deg 30% 5% / 45%), transparent 55%, hsl(215deg 30% 5% / 35%));
}

.studio-hero {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 3rem;
	min-height: calc(100dvh - 48px);
	padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 6rem);
}

.studio-wordmark {
	font-size: clamp(0.85rem, 1.3vw, 1.1rem);
	font-weight: 600;
	letter-spacing: 0.4em;
	text-shadow: 0 2px 12px var(--s-shadow);
	text-transform: uppercase;
	animation: studio-fade-up 0.6s ease-out both;
}

.studio-hero-main {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
}

.studio-title {
	font-size: clamp(2.75rem, 8vw, 6rem);
	font-weight: 600;
	letter-spacing: 0.08em;
	line-height: 1.05;
	text-shadow: 0 4px 28px var(--s-shadow);
	animation: studio-fade-up 0.8s ease-out both;
}

.studio-slogan {
	font-size: clamp(1rem, 1.6vw, 1.35rem);
	letter-spacing: 0.12em;
	text-shadow: 0 2px 12px var(--s-shadow);
	color: var(--s-fg-dim);
	animation: studio-fade-up 0.8s 0.1s ease-out both;
}

.studio-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 0.9rem;
	margin-top: 0.5rem;
	animation: studio-fade-up 0.8s 0.2s ease-out both;
	// ZButton 自带相邻间隔，避免与 gap 叠加
	:deep(.button + .button) {
		margin-left: 0;
	}
	// 博客按钮：玻璃描边风格，融入壁纸背景
	:deep(.button.ghost) {
		border-color: var(--s-line);
		background-color: hsl(0deg 0% 100% / 12%);
		box-shadow: none;
		backdrop-filter: blur(0.75rem);
		color: var(--s-fg);

		&:hover {
			background-color: hsl(0deg 0% 100% / 20%);
			filter: none;
		}

		&:active {
			background-color: hsl(0deg 0% 100% / 28%);
			filter: none;
		}
	}
}

.studio-hero-footer {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
	gap: 2rem 3rem;
	animation: studio-fade-up 0.8s 0.3s ease-out both;
}

.studio-author {
	display: grid;
	gap: 0.4rem;
	text-shadow: 0 2px 12px var(--s-shadow);
}

.studio-author-name {
	font-size: clamp(1.1rem, 1.8vw, 1.5rem);
	font-weight: 600;
}

.studio-author-desc {
	font-size: 0.85rem;
	color: var(--s-fg-dim);
}

.studio-author-links {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem 1.25rem;
	margin-top: 0.3rem;
	font-size: 0.8rem;
}

.studio-legal {
	display: grid;
	justify-items: end;
	gap: 0.3rem;
	font-size: 0.75rem;
	text-align: end;
	text-shadow: 0 2px 12px var(--s-shadow);
	color: var(--s-fg-dim);

	p {
		display: flex;
		align-items: center;
		gap: 0.35em;
	}

	a:hover {
		color: var(--s-fg);
	}

	@media (max-width: $breakpoint-mobile) {
		justify-items: start;
		text-align: start;
	}
}

.studio-legal-wallpaper {
	opacity: 0.85;
	max-width: 22rem;
}

.studio-body {
	display: grid;
	gap: 1.25rem;
	padding: 3.5rem clamp(1.25rem, 5vw, 6rem) 4rem;
}

.studio-panel {
	padding: clamp(1.5rem, 3vw, 2.25rem);
	border: 1px solid var(--s-line);
	border-radius: 1.25rem;
	box-shadow: 0 1rem 2.5rem var(--s-shadow);
	background-color: var(--s-glass);
	backdrop-filter: blur(1.25rem) saturate(1.2);
}

.studio-panel-title {
	display: flex;
	align-items: center;
	gap: 0.75em;
	margin-bottom: 1.25rem;
	font-size: 1.15rem;
	font-weight: 600;
	letter-spacing: 0.2em;

	&::before {
		content: "";
		width: 4px;
		height: 1.1em;
		border-radius: 4px;
		background-color: var(--c-primary);
	}

	&::after {
		content: "";
		flex-grow: 1;
		height: 1px;
		background: linear-gradient(to right, var(--s-line), transparent);
	}
}

.studio-paragraph {
	line-height: 1.9;
	text-align: justify;
	color: var(--s-fg-dim);

	& + & {
		margin-top: 0.75em;
	}
}

.studio-links {
	display: flex;
	flex-wrap: wrap;
	gap: 0.6rem 1.5rem;
	font-size: 0.9rem;
}

.studio-link {
	display: inline-flex;
	align-items: center;
	gap: 0.35em;
	color: var(--s-fg-dim);
	transition: color 0.2s, transform 0.2s;

	&:hover {
		color: var(--s-fg);
		transform: translateY(-1px);
	}
}

.studio-stations {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
	gap: 0.75rem;
}

.studio-station {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5em;
	padding: 0.7em 1em;
	border: 1px solid var(--s-line);
	border-radius: 0.75rem;
	background-color: hsl(0deg 0% 100% / 6%);
	font-size: 0.9rem;
	letter-spacing: 0.05em;
	transition: background-color 0.2s, border-color 0.2s, transform 0.2s;

	&[href] {
		color: var(--s-fg);

		&:hover {
			border-color: hsl(0deg 0% 100% / 35%);
			background-color: hsl(0deg 0% 100% / 12%);
			transform: translateY(-2px);
		}
	}
}

@keyframes studio-fade-up {
	from {
		opacity: 0;
		transform: translateY(1rem);
	}

	to {
		opacity: 1;
		transform: none;
	}
}

@media (prefers-reduced-motion: reduce) {
	.studio-hero * {
		animation: none;
	}
}
</style>
