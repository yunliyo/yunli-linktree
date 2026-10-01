<script setup lang="ts">
import { ZLink } from '#components'

useHead({ title: '免责声明' })
definePageMeta({ headerText: '个人经营声明' })

</script>

<template>
<div class="disclaimer">
	<ZField label="一">
		<P>本站域名为通用、多重含义、描述性的域名，为独立的私人所有，可能会出现商业化运营，但是与任何公众人物、公司、组织、品牌、商品、软件、服务、商标无关。</P>
	</ZField>
	<ZField label="二">
        <p>依照《电子商务法》《市场主体登记管理条例》《网络交易监督管理办法》相关规定：个人销售自产农副产品、家庭手工业产品；个人利用自身技能从事依法无须取得许可的便民劳务活动；零星小额交易活动；以及依照法律、行政法规规定不需要进行登记的情形，无需办理市场主体登记。</p>
	</ZField>
	<ZField label="三">
        <p>本站采用<ZLink to="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">署名—非商业性使用—相同方式共享 4.0 许可协议（CC BY-NC-SA 4.0）</ZLink>，转载请保留原文链接及署名。</p>
	</ZField>
</div>
</template>

<style lang="scss" scoped>
.disclaimer {
	p {
		margin: 0.5rem 0;
		color: var(--c-text-2);
		line-height: 1.5;
	}
}
</style>
