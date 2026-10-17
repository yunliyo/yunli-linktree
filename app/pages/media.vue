<script setup lang="ts">
useHead({ title: '新媒体矩阵' })
definePageMeta({ headerText: '我运营的新媒体账号' })

interface MediaItem {
  icon: string
  label: string
  url?: string
  nickname?: string
}

const profile = {
  nickname: '韵狸YUNLI',
  bio: '一个热爱诗词书画的程序员',
}

const domesticMedia: MediaItem[] = [
  { icon: 'ri:weibo-line', label: '微博', url: 'https://weibo.com/u/4064704638', nickname: '@韵狸YUNLI'},
  { icon: 'ri:wechat-line', label: '微信公众号', nickname: '@韵狸'},
  { icon: 'ri:wechat-line', label: '微信视频号', nickname: '@韵狸YUNLI'},
  { icon: 'arcticons:baidu-tieba', label: '贴吧', url: 'https://tieba.baidu.com/home/main', nickname: '@韵狸'},
  { icon: 'ri:zhihu-line', label: '知乎', url: 'https://www.zhihu.com/people/hu-li-50-35', nickname: '@韵狸'},
  { icon: 'ri:bilibili-fill', label: 'B站', url: 'https://space.bilibili.com/9976765', nickname: '@落叶满汀洲'},
  { icon: 'ri:tiktok-fill', label: '抖音', url: 'https://www.douyin.com/user/MS4wLjABAAAAhxQrfpFRzs7XpFF2m0H7yBCx76Ki1yoGI-DkGmAx89gyogB4EhBHasjEVWG1f2EJ', nickname: '@落叶满汀洲'},
  { icon: 'simple-icons:kuaishou', label: '快手', url: 'https://www.kuaishou.com/profile/3xi54cvpfeaze7e', nickname: '@韵狸'},
  { icon: 'simple-icons:xiaohongshu', label: '小红书', url: 'https://www.xiaohongshu.com/user/profile/6abd22e50000000013021000', nickname: '@韵狸'},
  { icon: 'arcticons:dewu', label: '得物', url: 'https://www.dewu.com', nickname: '@韵狸'},
  { icon: 'simple-icons:baidu', label: '百家号', url: 'https://www.baidu.com', nickname: '@韵狸'},
  { icon: 'icon-park-solid:jinritoutiao', label: '头条号', url: 'https://toutiao.com', nickname: '@韵狸'},
  { icon: 'tabler:planet', label: '知识星球', url: 'https://www.zsxq.com', nickname: '@犹为君'},
  { icon: 'ri:discuss-line', label: '即刻', url: 'https://web.okjike.com/u/2e92b0f4-6694-4901-810b-d4b8c737cc35', nickname: '@韵狸'},
  { icon: 'tabler:universe', label: '小宇宙', url: 'https://www.xiaoyuzhoufm.com/', nickname: '@韵狸'},
  { icon: 'simple-icons:douban', label: '豆瓣', url: 'https://www.douban.com', nickname: '@韵狸'},
  { icon: 'tabler:brand-netease-music', label: '网易云音乐', url: 'https://music.163.com', nickname: '@韵狸'},
  { icon: 'ri:store-fill', label: '闲鱼小铺', url: 'https://www.goofish.com/personal?userId=2221279259371', nickname: '@CatHut'},
  { icon: 'ri:store-2-fill', label: '孔网书摊', url: 'https://shop.kongfz.com/715788', nickname: '@狸庐书摊'},
]

const overseasMedia: MediaItem[] = [
  { icon: 'simple-icons:onlyfans', label: 'OnlyFans', url: 'https://www.onlyfans.com', nickname: '@韵狸' },
  { icon: 'ri:facebook-line', label: 'Facebook', url: 'https://www.facebook.com/yunli0324', nickname: '@韵狸'},
  { icon: 'ri:instagram-line', label: 'Instagram', url: 'https://www.instagram.com/yunli0324', nickname: '@韵狸'},
  { icon: 'ri:threads-fill', label: 'Threads', url: 'https://www.threads.com/yunli0324', nickname: '@韵狸'},
  { icon: 'ri:twitter-x-line', label: 'X', url: 'https://x.com/engr_poet_yunli', nickname: '@韵狸'},
  { icon: 'ri:bluesky-fill', label: 'Bluesky', url: 'https://bsky.app/profile/yunli0324.bsky.social', nickname: '@韵狸'},
  { icon: 'ri:mastodon-fill', label: 'Mastodon', url: 'https://mastodon.social/@yunliyo0324', nickname: '@韵狸'},
  { icon: 'ri:youtube-line', label: 'YouTube', url: 'https://www.youtube.com/@yunliyo0324', nickname: '@韵狸'},
  { icon: 'ri:tiktok-fill', label: 'TikTok', url: 'https://www.tiktok.com/@yunli0324', nickname: '@韵狸' },
  { icon: 'arcticons:lemon8', label: 'Lemon8', url: 'https://www.lemon8-app.com/@yunli0324', nickname: '@韵狸' },
  { icon: 'ri:vk-line', label: 'VK', url: 'https://vk.com', nickname: '@韵狸' },
  { icon: 'ri:snapchat-line', label: 'Snapchat', url: 'https://www.snapchat.com', nickname: '@韵狸' },
  { icon: 'ri:pinterest-line', label: 'Pinterest', url: 'https://www.pinterest.com', nickname: '@韵狸' },
  { icon: 'ri:twitch-line', label: 'Twitch', url: 'https://www.twitch.tv', nickname: '@韵狸' },
  { icon: 'simple-icons:quora', label: 'Quora', url: 'https://www.quora.com', nickname: '@韵狸' },
  { icon: 'ri:reddit-line', label: 'Reddit', url: 'https://www.reddit.com', nickname: '@韵狸' },
  { icon: 'simple-icons:pixiv', label: 'Pixiv', url: 'https://www.pixiv.net', nickname: '@韵狸' },
  { icon: 'simple-icons:niconico', label: 'Niconico', url: 'https://www.niconico.net', nickname: '@韵狸' },
  { icon: 'ri:linkedin-line', label: 'LinkedIn', url: 'https://www.linkedin.com/', nickname: '@Linden Lee' },
  { icon: 'ri:messenger-line', label: 'Messenger', url: 'https://m.me/yunli0324', nickname: '@韵狸'},
  { icon: 'ri:whatsapp-line', label: 'WhatsApp', url: 'https://wa.me/yunliyo', nickname: '@韵狸'},
  { icon: 'ri:line-line', label: 'Line', url: 'https://line.me', nickname: '@韵狸' },
  { icon: 'ri:telegram-line', label: 'Telegram', url: 'https://t.me/yunliyo', nickname: '@韵狸'},
  { icon: 'ri:discord-line', label: 'Discord', url: 'https://discord.com/users/883996733686816808', nickname: '@韵狸'},
  { icon: 'ri:store-3-fill', label: 'Shop', url: 'https://shop.liqiang.info', nickname: '@Yunli-Shop'},
]
</script>

<template>
<div class="media-page">
  <div class="media-header">
    <h1 class="media-nickname">{{ profile.nickname }}</h1>
    <p class="media-bio">{{ profile.bio }}</p>
  </div>

  <section class="media-section">
    <h2 class="media-section-title">中国大陆</h2>
    <div class="media-grid">
      <template v-for="item in domesticMedia" :key="item.label">
        <a
          v-if="item.url"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="media-card"
        >
          <Icon :name="item.icon" class="media-card-icon" />
          <div class="media-card-body">
            <span class="media-card-label">{{ item.label }}</span>
            <span class="media-card-nickname">{{ item.nickname }}</span>
          </div>
        </a>
        <div v-else class="media-card media-card-disabled">
          <Icon :name="item.icon" class="media-card-icon" />
          <div class="media-card-body">
            <span class="media-card-label">{{ item.label }}</span>
            <span class="media-card-nickname">{{ item.nickname }}</span>
          </div>
        </div>
      </template>
    </div>
  </section>

  <section class="media-section">
    <h2 class="media-section-title">海外</h2>
    <div class="media-grid">
      <a
        v-for="item in overseasMedia"
        :key="item.label"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="media-card"
      >
        <Icon :name="item.icon" class="media-card-icon" />
        <div class="media-card-body">
          <span class="media-card-label">{{ item.label }}</span>
          <span class="media-card-nickname">{{ item.nickname }}</span>
        </div>
      </a>
    </div>
  </section>

  <footer class="media-footer">
    <p>&copy; {{ new Date().getFullYear() }} 韵狸YUNLI</p>
  </footer>
</div>
</template>

<style lang="scss" scoped>
.media-page {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
}

.media-header {
  text-align: center;
  margin-bottom: 2rem;
}

.media-nickname {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 0.5rem;
}

.media-section {
  margin-bottom: 2.5rem;
}

.media-section-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--c-text);
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--c-primary);
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.75rem;
}

.media-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border: 1px solid var(--c-border);
  border-radius: 0.75rem;
  background: var(--c-bg-1);
  color: var(--c-text-1);
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: var(--c-primary);
    background: var(--c-primary-soft);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--ld-shadow);
  }

  &:active {
    transform: translateY(0);
  }
}

.media-card-disabled {
  opacity: 0.6;
  cursor: not-allowed;

  &:hover {
    border-color: var(--c-border);
    background: var(--c-bg-1);
    transform: none;
    box-shadow: none;
  }
}

.media-card-icon {
  flex-shrink: 0;
  width: 1.75rem;
  font-size: 1.5rem;
  color: var(--c-primary);
}

.media-card-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.media-card-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--c-text);
}

.media-card-nickname {
  font-size: 0.8rem;
  color: var(--c-text-2);
}

.media-card-bio {
  font-size: 0.75rem;
  color: var(--c-text-3);
}

.media-footer {
  text-align: center;
  padding-top: 1.5rem;

  p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--c-text-3);
  }
}

@media (max-width: $breakpoint-mobile) {
  .media-page {
    padding: 1rem 0.5rem 3rem;
  }

  .media-grid {
    grid-template-columns: 1fr;
  }

  .media-nickname {
    font-size: 1.5rem;
  }
}
</style>