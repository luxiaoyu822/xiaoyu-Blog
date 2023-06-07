import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '雨过天晴',
  titleTemplate: ':title - xiaoyu',
  description: '代码与雨都会带来变化',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '导航', link: '/nav' },
      {
        text: '前端童话',
        items: [
          { text: 'HTML 基础知识', link: '/f-knowledges/html/started' },
          { text: 'CSS 基础知识', link: '/f-knowledges/css/started' },
          {
            text: 'JavaScript 基础知识',
            link: '/f-knowledges/javascript/started',
          },
          {
            text: 'ECMAScript 新增',
            link: '/f-knowledges/ecma/es6',
          },
          {
            text: '网络知识',
            link: '/f-knowledges/network/base',
          },

          // { text: 'Nodejs 基础知识', link: '/f-knowledges/nodejs' },
          // { text: 'Vuejs 基础知识', link: '/f-knowledges/vue' },
        ],
        activeMatch: '^/f-knowledges',
      },
      { text: '笔记', link: '/notes' },
      { text: "xiaoyu's", link: '/individual' },
    ],
    sidebar: {
      '/f-knowledges/': [
        {
          text: 'HTML 基础知识',
          collapsed: true,
          items: [{ text: 'HTML 入门', link: '/f-knowledges/html/started' }],
        },
        {
          text: 'CSS 基础知识',
          collapsed: true,
          items: [{ text: 'CSS 入门', link: '/f-knowledges/css/started' }],
        },
        {
          text: 'JavaScript 基础知识',
          collapsed: true,
          items: [
            {
              text: 'JavaScript 入门',
              link: '/f-knowledges/javascript/started',
            },
          ],
        },
        {
          text: 'ECMAScript 新增',
          collapsed: true,
          items: [{ text: 'ES6 新增', link: '/f-knowledges/ecma/es6' }],
        },
        {
          text: '网络知识',
          collapsed: true,
          items: [
            { text: '基础知识', link: '/f-knowledges/network/base' },
            { text: 'HTTP 知识', link: '/f-knowledges/network/http' },
          ],
        },
        // { text: 'Nodejs 基础知识', link: '/f-knowledges/nodejs' },
        // { text: 'Vuejs 基础知识', link: '/f-knowledges/vue' },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/luxiaoyu822' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present luxiaoyu',
    },
  },
})
