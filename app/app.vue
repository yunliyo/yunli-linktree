<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
	ogType: 'profile',
	description: appConfig.description,
	ogImage: appConfig.author.avatar,
})
</script>

<template>
<ZSidebar />
<div class="content">
	<ZHeader />
	<main>
		<NuxtPage />
	</main>
</div>
</template>

<!-- eslint-disable-next-line vue/enforce-style-attribute -->
<style lang="scss">
#z-root {
	display: flex;
	justify-content: center;
	height: 100vh;
	height: 100dvh;

	> .content {
		flex-grow: 1;
		overflow: auto;

		> main {
			padding: 1rem 5vw;
		}
	}

	// 打印时解除视口高度与滚动容器限制，让内容完整分页输出
	@media print {
		display: block;
		height: auto;

		> .content {
			overflow: visible;

			> main {
				padding: 0;
			}
		}
	}
}

@page {
	margin: 12mm 10mm;
}

// 打印时统一为白底浅色，避免深色模式输出深色背景
@media print {
	:root,
	:root.dark,
	:root.light {
		--c-bg: #FFF;

		background-color: #FFF;
		color-scheme: light;
	}
}
</style>
