<script setup lang="ts">
useHead({ title: '简历' })
definePageMeta({ headerText: '个人简历' })

useSeoMeta({
	description: '简历-李强-物联网工程师',
	robots: 'noindex, nofollow',
})

interface ResumeInfo {
	icon: string
	label: string
	value: string
	url?: string
}

interface ResumeEntry {
	name: string
	desc?: string
	role?: string
	link?: string
	from: string
	to?: string
	techs?: string[]
	ordered?: boolean
	items: string[]
}

const name = '李强'

const infos: ResumeInfo[] = [
	{ icon: 'ri:smartphone-line', label: '电话', value: '+86 13896074726' },
	{ icon: 'ri:mail-line', label: '邮箱', value: 'yunliyo@foxmail.com', url: 'mailto:yunliyo@foxmail.com' },
	{ icon: 'ri:github-line', label: 'GitHub', value: 'github.com/yunliyo', url: 'https://github.com/yunliyo' },
	{ icon: 'ri:calendar-2-line', label: '出生年月', value: '199703' },
	{ icon: 'ri:men-line', label: '性别', value: '男' },
	{ icon: 'ri:school-line', label: '学校', value: '重庆城市管理职业大学' },
	{ icon: 'ri:book-line', label: '专业', value: '物联网应用技术' },
	{ icon: 'ri:book-2-line', label: '辅修专业', value: '现代殡葬技术与管理' },
	{ icon: 'ri:graduation-cap-line', label: '学历', value: '全日制专科（2018届）' },
	{ icon: 'ri:certificate-line', label: '证书', value: '华为认证物联网高级工程师' },
]

const skills: string[] = [
	'掌握 Linux 和 Windows Server 服务器的基本操作；',
	'掌握 HTML,CSS,JavaScript,Typescript,PHP,SQL 语言，能完成博客和文档网站的开发和维护；',
	'熟练使用 Git 和 SVN 版本管理工具；',
	'熟练使用古现代汉语和英语，略懂古英语，能够独立完成中英文文档编写；',
	'熟悉 DITA 结构化写作方法；',
	'掌握 Office、Axure、Adobe、OBS 等多媒体工具，能够输出产品原型、图片、视频、音频。',
	'熟练使用海内外 AI 大模型，能够编写优质 Prompt 提示词和优质 Skills.md 技能，将 AI Agent + MCP + Skills 融入日常开发，大幅提升工程效率。',
]

const experiences: ResumeEntry[] = [
	{
		name: '自由职业',
		desc: '个人开发者&个人投资者',
		from: '2026.07',
		items: [
			'开源项目：深度参与 GitHub 生态建设，聚焦 CMS 与静态站点生成器类开源项目，涵盖功能特性开发、Bug 修复、性能优化、文档翻译与国际化适配等多维度贡献，持续追踪社区需求与技术演进，与核心维护者保持高效协作；',
			'投资组合管理：构建并动态优化跨资产类别投资组合，涵盖 A 股、港股、美股、ETF、公募基金、黄金现货、加密货币等品种，资产管理规模达七位数人民币；',
			'量化分析：基于宏观经济学框架与计量模型进行市场研判，擅长基本面分析（行业景气度、财报解读）与技术分析（量价关系、趋势跟踪）相结合的投资决策体系；',
			'风险控制：严格执行仓位管理与止损机制，构建以风险平价为核心的多资产配置模型，实现最大回撤可控下的收益最大化；',
			'加密资管：深度参与 DeFi 生态研究，精通链上数据分析与智能合约安全审计，把握 Web3.0 投资机遇，配置占比约总持仓 20%；',
			'黄金投资：基于实际利率、美元指数与地缘政治风险进行黄金走势分析，采用定投与波段操作相结合策略，对冲系统性风险；',
			'跨境投资：具备港美股账户管理经验，熟悉离岸资产配置逻辑，捕捉海外市场估值修复机会；',
			'持续迭代：建立投资复盘体系，定期复盘交易记录与市场逻辑，迭代优化投资策略，形成可持续的正向收益循环。',
		],
	},
	{
		name: '自由职业',
		desc: '个人开发者',
		from: '2018.07',
		to: '2026.06',
		items: [
			'架构设计：具备模块解耦、分层架构、状态管理体系设计能力，主导过多个平台从 0 到 1 的技术选型与架构落地；',
			'产品原型：负责产品需求分析、用户研究和竞品分析，输出产品功能规划和交互原型，主导产品策略制定与迭代优化；',
			'产品设计：深度参与 UI/UE/UX 方案设计，具备信息架构梳理与交互流程优化经验，推动设计与工程高度协同；',
			'全栈交付：前端（Vue/Vite/React/Nuxt/Next）+ 后端（NodeJS）+ 数据库（MySQL/MongoDB）全链路独立开发，不依赖他人完成完整功能闭环；',
			'运营推广：负责产品上线后的数据分析、用户反馈收集、市场推广策略制定，形成产品迭代闭环，提升用户满意度。',
			'新媒体运营: 负责产品的社交媒体账号运营，与用户互动，提升品牌知名度。',
			'AI 驱动开发：深度使用 Claude Code / Cursor / Codex / Trae / Qwen Code / CodeBuddy 等 AI 编程工具，将 AI Agent + MCP + Skills 融入日常开发，大幅提升工程效率。',
		],
	},
	{
		name: '华为（实习）',
		desc: '技术文档工程师',
		from: '2018.03',
		to: '2018.06',
		ordered: true,
		items: [
			'负责华为产品的文档、教程、最佳实践等形式的完整内容体系，为用户快速上手使用产品提供完整的支撑；',
			'参与制定和改进华为云文档体系，包括流程、规范、工具、质量持续提升计划等，并能将其有效落地。',
			'和产品团队紧密联系，根据产品定位设计产品信息模型，组织内容开发，保持内容、产品的强一致性和准确性；',
			'负责整合、分析各渠道的用户反馈，制定内容改进方案建议、跟踪改进进度及改进效果，负责用户体验持续改进计划；',
			'负责对产品团队进行文档写作培训、文档质量标准宣导，提高技术团队整体写作能力。',
		],
	},
	{
		name: '京东方（实习）',
		desc: '技术文档工程师',
		from: '2017.06',
		to: '2017.12',
		ordered: true,
		items: [
			'负责配合制定，编写产品资料，技术文档编写规范及相关模板；',
			'负责按文件管理流程进行文档版本控制及维护技术文档信息的准确，完整；',
			'协助项目技术负责人进行使用维护说明书，用户手册的编写，排版，审核和修订；',
			'负责协助制作演示幻灯片；',
			'责为其他部门提供文档支持；',
			'根据产品发展方向，规划产品资料信息传播方式及信息内容；',
			'收集和分析资料需求，规划资料清单并完成大纲设计；',
			'调研用户并建立用户角色模型，根据用户角色落入资料规划，提升资料整体信息体验；',
			'利用互联网工具，充分与用户交流，促进信息传播，提升用户满意度。',
		],
	},
]

const projects: ResumeEntry[] = [
	{
		name: '龙榆生先生纪念网站（longyusheng.org）',
		desc: '非营利组织网站',
		role: '参与者',
		link: 'https://github.com/yunliyo/longyusheng.org',
		from: '2018.07',
		techs: ['XML', 'XSLT', 'VScode', 'Git'],
		items: [
			'内容策略：负责网站内容规划与信息架构设计，梳理龙榆生先生诗词作品、学术文章、书信手稿等数字资源的分类体系与呈现逻辑；',
			'文档编写：整理、校注龙榆生先生诗词创作背景、版本考证、生平事迹等学术内容，确保资料的权威性与准确性；',
			'结构化写作：采用 XML + XSLT 技术栈实现文档结构化编写，建立统一的内容标签体系，便于跨格式输出与检索；',
			'多格式发布：负责输出 HTML、PDF、CHM、EPUB 等多格式文档，满足不同用户场景的阅读需求；',
			'质量把控：制定内容审核流程，校验文本、标点、注释与引文，确保线上内容的完整性与可读性；',
			'版本管理：使用 Git 进行文档版本控制，维护历史修订记录，支持多人协作的内容更新。',
		],
	},
	{
		name: 'onelink',
		desc: '仿 linktree 设计风格的个人主页',
		role: '开发者',
		link: '已归档',
		from: '2018.05',
		to: '2018.06',
		techs: ['Vue', 'Vite', 'Nuxt', 'PHP', 'MySQL', 'Redis', 'Uni-App', 'Flutter', 'Git'],
		items: [
			'服务端：采用 LNMP(Linux+Nginx+MySQL+PHP) 高性能架构，结合 Redis 缓存优化响应速度；',
			'Web端：采用现代前端技术栈（Vue+Vite+Nuxt）实现响应式设计，完美适配桌面、移动、平板、智能手表、电视及车机等多种设备；',
			'移动端：基于 Uni-App 框架 开发，高效产出兼容 Android、iOS、HarmonyOS 原生应用及微信小程序；',
			'桌面端：基于 Flutter 框架 开发，实现一套代码构建高性能 Windows、macOS、Linux 原生桌面应用；',
			'版本控制：使用 Git 进行严格的版本管理与协作。',
			'技术文档：负责编写项目的技术文档，包括功能模块、数据库设计、接口文档等。',
		],
	},
	{
		name: '韵狸博客',
		desc: '个人博客',
		role: '开发者',
		link: 'https://liqiang.info',
		from: '2017.10',
		techs: ['Nuxt', 'Vue', 'Scss', 'TypeScript', 'Git'],
		items: [
			'设计灵感来源于 hexo-theme-stellar 主题；',
			'响应式设计和夜间模式：支持移动端和桌面端，同时适配系统颜色偏好，确保在不同设备上都能提供良好的阅读体验；',
			'兼容性：样式在多个浏览器上兼容良好（如安卓夸克 APP），在 Chrome 上显示美观，并且有适当的回退策略；',
			'订阅源：支持 Atom 订阅源，能显示文章封面（由于 Nuxt Content 特性，订阅源中只有摘要）；',
			'SEO 优化：使用 Nuxt SEO 插件，优化搜索引擎的收录和排名。',
		],
	},
	{
		name: 'Yunli-V2',
		desc: '新版个人网站',
		role: '开发者',
		link: 'https://x.liqiang.info',
		from: '2019.08',
		techs: ['Nuxt', 'Vue', 'TypeScript', 'JavaScript', 'Pinia', 'Vueuse', 'SCSS', 'Git'],
		items: [
			'架构设计：基于 Nuxt 3 框架构建现代化个人主页，采用模块化设计，实现多页面路由管理和组件化开发；',
			'技术栈：使用 Vue 3 + TypeScript 进行类型安全开发，结合 Pinia 状态管理和 VueUse 工具库提升开发效率；',
			'样式系统：采用 SCSS 预处理器构建响应式样式，支持深色模式切换和主题定制；',
			'SEO 优化：集成 Nuxt SEO 插件，优化搜索引擎收录和排名，提升网站可见性；',
			'性能优化：利用 Nuxt 的自动导入、代码分割和懒加载特性，优化首屏加载速度和用户体验；',
			'版本管理：使用 Git 进行严格的版本控制，维护清晰的项目提交历史。',
		],
	},
	{
		name: 'Yunli',
		desc: '个人网站',
		role: '开发者',
		link: '已归档',
		from: '2015.10',
		techs: ['HTML', 'CSS', 'JavaScript', 'Git'],
		items: [
			'原生 HTML + CSS + JS 开发，类似于 Linktree 的功能，用于在一个页面上集中展示多个社交媒体链接和个人资源链接',
			'具备博客展示功能，采用 Markdown 运行时渲染，简化了内容创作流程；',
			'使用 Git 进行严格的版本管理。',
			'采用 PakePlus 工具，将 Web 转换为桌面应用和 App 应用，便于用户在不同设备上浏览。',
		],
	},
]

const extras: string[] = [
	'热爱诗词书画，有个人作品集《猗兰集》《愚顽集》《明漪集》《兰蓠集》。',
]

function isUrl(url?: string) {
	return !!url?.startsWith('http')
}

function displayLink(url?: string) {
	if (!url)
		return ''
	const index = url.indexOf('://')
	const text = index === -1 ? url : url.slice(index + 3)
	return text.endsWith('/') ? text.slice(0, -1) : text
}

function getTechIcon(tech: string): string {
	const iconMap: Record<string, string> = {
		'XML': 'vscode-icons:file-type-xml',
		'XSLT': 'vscode-icons:file-type-xml',
		'VScode': 'vscode-icons:file-type-vscode',
		'Git': 'vscode-icons:file-type-git',
		'Vue': 'vscode-icons:file-type-vue',
		'Vite': 'vscode-icons:file-type-vite',
		'Nuxt': 'vscode-icons:file-type-nuxt',
		'PHP': 'vscode-icons:file-type-php',
		'MySQL': 'vscode-icons:file-type-mysql',
		'Redis': 'vscode-icons:file-type-redis',
		'Uni-App': 'vscode-icons:file-type-uni',
		'Flutter': 'vscode-icons:file-type-flutter',
		'Scss': 'vscode-icons:file-type-scss',
		'SCSS': 'vscode-icons:file-type-scss',
		'TypeScript': 'vscode-icons:file-type-typescript',
		'HTML': 'vscode-icons:file-type-html',
		'CSS': 'vscode-icons:file-type-css',
		'JavaScript': 'vscode-icons:file-type-js',
		'Pinia': 'vscode-icons:file-type-pinia',
		'Vueuse': 'vscode-icons:file-type-vue',
		'VueUse': 'vscode-icons:file-type-vue',
	}
	return iconMap[tech] || 'vscode-icons:file-type-default'
}
</script>

<template>
<div class="resume">
	<ZLink class="resume-builder" to="https://nuxt.com">
		Built with <Icon name="ph:nuxt-logo-fill" /> Nuxt
	</ZLink>

	<article class="resume-paper">
		<h1 class="resume-name">
			{{ name }}
		</h1>

		<ul class="resume-infos">
			<li v-for="info in infos" :key="info.label" class="resume-info">
				<Icon class="resume-info-icon" :name="info.icon" />
				<span class="resume-info-label">{{ info.label }}：</span>
				<ZLink v-if="info.url" :to="info.url">{{ info.value }}</ZLink>
				<span v-else>{{ info.value }}</span>
			</li>
		</ul>

		<section class="resume-section">
			<h2>个人技能</h2>
			<ul class="resume-list">
				<li v-for="skill in skills" :key="skill">
					{{ skill }}
				</li>
			</ul>
		</section>

		<section class="resume-section">
			<h2>工作经历</h2>
			<div v-for="entry in experiences" :key="`${entry.name}-${entry.from}`" class="resume-entry resume-entry-card">
				<header class="resume-entry-header">
					<div class="resume-entry-header-left">
						<strong class="resume-entry-name">{{ entry.name }}</strong>
						<span v-if="entry.desc" class="resume-entry-meta">
							<span class="resume-entry-desc">{{ entry.desc }}</span>
						</span>
					</div>
					<time class="resume-entry-time">{{ entry.from }} - {{ entry.to || '至今' }}</time>
				</header>
				<component
					:is="entry.ordered ? 'ol' : 'ul'"
					class="resume-list"
					:class="{ 'resume-list-ordered': entry.ordered }"
				>
					<li v-for="item in entry.items" :key="item">
						{{ item }}
					</li>
				</component>
			</div>
		</section>

		<section class="resume-section">
			<h2>项目经验</h2>
			<div v-for="entry in projects" :key="entry.name" class="resume-entry resume-entry-project">
				<header class="resume-entry-header">
					<div class="resume-entry-header-left">
						<strong class="resume-entry-name">{{ entry.name }}</strong>
						<span v-if="entry.desc || entry.role" class="resume-entry-meta">
							<span v-if="entry.desc" class="resume-entry-desc">{{ entry.desc }}</span>
							<template v-if="entry.desc && entry.role">
								<span class="resume-entry-separator">·</span>
							</template>
							<span v-if="entry.role" class="resume-entry-role">{{ entry.role }}</span>
						</span>
					</div>
					<time class="resume-entry-time">{{ entry.from }} - {{ entry.to || '至今' }}</time>
				</header>
				<div class="resume-entry-body">
					<div v-if="entry.techs?.length" class="resume-techs">
						<span v-for="tech in entry.techs" :key="tech" class="resume-tech">
							<Icon :name="getTechIcon(tech)" class="resume-tech-icon" />
							{{ tech }}
						</span>
					</div>
					<ZLink v-if="isUrl(entry.link)" class="resume-entry-link" :to="entry.link ?? ''">{{ displayLink(entry.link) }}</ZLink>
					<span v-else-if="entry.link" class="resume-entry-note">{{ entry.link }}</span>
				</div>
				<ul class="resume-list">
					<li v-for="item in entry.items" :key="item">
						{{ item }}
					</li>
				</ul>
			</div>
		</section>

		<section class="resume-section">
			<h2>其他</h2>
			<ul class="resume-list">
				<li v-for="item in extras" :key="item">
					{{ item }}
				</li>
			</ul>
		</section>
	</article>
</div>
</template>

<style lang="scss" scoped>
.resume {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
}

.resume-builder {
	align-self: flex-end;
	opacity: 0.6;
	font-size: 0.8em;
}

.resume-paper {
	width: 100%;
	max-width: 19cm;
	padding: 2rem;
	border: 1px solid var(--c-border);
	border-radius: 1rem;
	box-shadow: 0 8px 32px var(--ld-shadow);
	background-color: var(--c-bg-1);
	font-size: 0.95em;
	letter-spacing: 0.02em;
}

.resume-name {
	margin-bottom: 1rem;
	font-size: 1.6em;
	text-align: center;
}

.resume-infos {
	column-count: 2;
	column-gap: 1.5rem;

	.resume-info {
		break-inside: avoid;
	}

	.resume-info-icon {
		margin-right: 0.3em;
		color: var(--c-text-3);
	}

	.resume-info-label {
		color: var(--c-text-2);
	}
}

.resume-section {
	margin-top: 1.5rem;

	> h2 {
		margin-bottom: 0.5rem;
		padding-bottom: 0.2em;
		border-bottom: 1px solid var(--c-border);
		font-size: 1.1em;
	}
}

.resume-entry {
	& + .resume-entry {
		margin-top: 1rem;
	}

	&.resume-entry-project {
		padding: 0;
		border: none;
		border-radius: 0;
		background-color: transparent;
	}
}

.resume-entry-header {
	display: flex;
	flex-wrap: wrap;
	align-items: baseline;
	justify-content: space-between;
	gap: 0.5rem 1rem;
	line-height: 1.6;

	.resume-entry-header-left {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.3em;
	}

	.resume-entry-name {
		font-size: 1em;
	}

	.resume-entry-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.2em;
	}

	.resume-entry-desc {
		font-weight: normal;
		color: var(--c-text-2);
	}

	.resume-entry-separator {
		color: var(--c-text-3);
	}

	.resume-entry-role {
		font-weight: normal;
		color: var(--c-text-2);
	}

	.resume-entry-time {
		color: var(--c-text-2);
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}
}

.resume-entry-body {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	margin-top: 0.5rem;
}

.resume-list {
	padding-inline-start: 1.3em;
	list-style: disc;

	li {
		margin: 0.3em 0;
	}

	&.resume-list-ordered {
		list-style: decimal;
	}
}

.resume-techs {
	display: flex;
	flex-wrap: wrap;
	gap: 0.25rem;
	padding-inline-start: 0;
	list-style: none;

	.resume-tech {
		display: inline-flex;
		align-items: center;
		gap: 0.15em;
		padding: 0.05em 0.3em;
		border-radius: 0.2em;
		background-color: var(--c-bg-1);
		font-size: 0.8em;
		color: var(--c-text-2);
		white-space: nowrap;

		.iconify {
			font-size: 0.9em;
			flex-shrink: 0;
		}
	}
}

@media (max-width: $breakpoint-mobile) {
	.resume-paper {
		padding: 1.25rem;
	}

	.resume-infos {
		column-count: 1;
	}
}

@media print {
	.resume {
		gap: 0;
	}

	.resume-builder {
		display: none;
	}

	/* 打印时强制基本信息双栏，左右各五行 */
	.resume-infos {
		column-count: 2;
		column-gap: 1.5rem;
	}

	.resume-paper {
		/* 打印时强制为白底黑字，避免深色模式打印出深色背景 */
		--c-bg-1: #FFF;
		--c-bg-2: #F2F2F2;
		--c-border: #D9D9D9;
		--c-text-1: #000;
		--c-text-2: #444;
		--c-text-3: #666;
		--c-primary: #000;
		--ld-shadow: transparent;

		max-width: none;
		padding: 0;
		border: none;
		border-radius: 0;
		box-shadow: none;
		background-color: transparent;
		font-size: 10.5pt;
	}
}
</style>