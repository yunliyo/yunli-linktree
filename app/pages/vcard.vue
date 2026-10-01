<script setup lang="ts">
const appConfig = useAppConfig()

useHead({ title: '名片' })
definePageMeta({ headerText: '很高兴认识你' })

const work = {
	organization: '自由职业',
	title: '个人开发者',
	phone: '+8613896074726',
	address: '重庆市渝中区华福巷36号',
	postalCode: '400015',
}

const contacts = [
	{ icon: 'ri:building-line', label: '单位', value: work.organization },
	{ icon: 'ri:briefcase-line', label: '职务', value: work.title },
	{ icon: 'ri:phone-line', label: '电话', value: work.phone, url: `tel:${work.phone}` },
	{ icon: 'ri:mail-line', label: '邮箱', value: appConfig.author.email, url: `mailto:${appConfig.author.email}` },
	{ icon: 'ri:map-pin-line', label: '地址', value: work.address },
	{ icon: 'hugeicons:mailbox', label: '邮编', value: work.postalCode },
	{ icon: 'ri:global-line', label: '主页', value: appConfig.author.homepage, url: appConfig.author.homepage },
	{ icon: 'ri:github-line', label: 'GitHub', value: 'github.com/yunliyo', url: 'https://github.com/yunliyo' },
]

function saveVcard() {
	const vcf = [
		'BEGIN:VCARD',
		'VERSION:1.0',
		`FN:${appConfig.author.name}`,
		`ORG:${work.organization}`,
		`TITLE:${work.title}`,
		`TEL:${work.phone}`,
		`EMAIL:${appConfig.author.email}`,
		`ADR:;;${work.address};;;;${work.postalCode}`,
		`URL:${appConfig.author.homepage}`,
		'END:VCARD',
	].join('\n')
	const blob = new Blob([vcf], { type: 'text/vcard' })
	const link = document.createElement('a')
	link.href = URL.createObjectURL(blob)
	link.download = `${appConfig.author.name}.vcf`
	link.click()
	URL.revokeObjectURL(link.href)
}
</script>

<template>
<div class="vcard-page">
	<div class="vcard">
		<header class="vcard-header">
			<NuxtPicture class="vcard-avatar" :src="appConfig.author.avatar" :alt="`${appConfig.author.name} 的头像`" width="96" height="96" />
			<div class="vcard-name">
				<h1>{{ appConfig.author.name }}</h1>
				<p>{{ appConfig.description }}</p>
			</div>
		</header>

		<p class="vcard-slogan">{{ appConfig.subtitle }}</p>

		<ul class="vcard-contacts">
			<li v-for="item in contacts" :key="item.label">
				<Icon :name="item.icon" />
				<span class="vcard-contact-label">{{ item.label }}</span>
				<a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.value }}</a>
				<span v-else>{{ item.value }}</span>
			</li>
		</ul>

		<footer class="vcard-actions">
			<ZButton icon="ri:download-2-line" text="保存名片" primary @click="saveVcard" />
			<ZButton icon="ri:linktree-logo" text="更多链接" to="/links" />
		</footer>
	</div>
</div>
</template>

<style lang="scss" scoped>
.vcard-page {
	display: flex;
	justify-content: center;
	padding: 2rem 1rem;
}

.vcard {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 420px;
	padding: 2rem;
	border: 1px solid var(--c-border);
	border-radius: 1rem;
	background: var(--c-bg-1);
	box-shadow: 0 8px 32px var(--ld-shadow);
}

.vcard-header {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.vcard-avatar {
	width: 96px;
	height: 96px;
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid var(--c-border);

	:deep(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.vcard-name {
	h1 {
		font-size: 1.5rem;
	}

	p {
		color: var(--c-text-2);
	}
}

.vcard-slogan {
	margin: 1.25rem 0;
	padding: 0.75rem 1rem;
	border-radius: 0.5rem;
	background: var(--c-bg-soft);
	color: var(--c-text-2);
	font-style: italic;
	text-align: center;
}

.vcard-contacts {
	display: grid;
	gap: 0.75rem;
	margin: 0.5rem 0 1.5rem;

	li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	a {
		color: var(--c-primary);
		word-break: break-all;
	}

	.vcard-contact-label {
		flex-shrink: 0;
		color: var(--c-text-2);
	}
}

.vcard-actions {
	text-align: center;
}
</style>
