import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '雨过天晴',
  titleTemplate: ':title - xiaoyu',
  description: '代码与雨都会带来变化',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '导航', link: '/' },
      {
        text: '前端物语',
        items: [
          { text: 'ai导航', link: '/navigation/navigation-1' },
          { text: 'vue导航', link: '/navigation/navigation-2' },
        ],
      },
      { text: '笔记', link: '/notes' },
      { text: "xiaoyu's", link: '/individual' },
    ],
    sidebar: {
      '/navigation/': [
        {
          items: [
            { text: 'ai导航', link: '/navigation/navigation-1' },
            { text: 'vue导航', link: '/navigation/navigation-2' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/luxiaoyu822' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present luxiaoyu',
    },
  },
})
