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
      { text: 'ChatGPT', link: 'https://gpt.lu-xiaoyu.com' },
      {
        text: '前端童话',
        items: [
          { text: 'HTML 相关知识', link: '/f-knowledge/html/started' },
          { text: 'CSS 相关知识', link: '/f-knowledge/css/started' },
          {
            text: 'JavaScript 相关知识',
            link: '/f-knowledge/javascript/started',
          },
          {
            text: 'ECMAScript 语法',
            link: '/f-knowledge/ecma/es6',
          },
          {
            text: 'Web开发知识',
            link: '/f-knowledge/network/base',
          },
        ],
        activeMatch: '^/f-knowledge',
      },
      {
        text: '笔记心得',
        items: [
          { text: '常用命令', link: '/notes/command' },
          { text: '随心记', link:'/notes/raop/myw'}
        ],
        activeMatch: '^/notes',
      },
      { text: "xiaoyu's", link: '/individual' },
    ],
    sidebar: {
      '/f-knowledge/': [
        {
          text: 'HTML 相关知识',
          collapsed: true,
          items: [{ text: 'HTML 入门', link: '/f-knowledge/html/started' }],
        },
        {
          text: 'CSS 相关知识',
          collapsed: true,
          items: [
              { text: 'CSS 入门', link: '/f-knowledge/css/started' },
              { text: '伪类和伪元素', link: '/f-knowledge/css/pseudo' },
          ],
        },
        {
          text: 'JavaScript 相关知识',
          collapsed: true,
          items: [
            {text: 'JavaScript 入门', link: '/f-knowledge/javascript/started'},
            {text: '递归函数', link: '/f-knowledge/javascript/recursion'},
            {text: '正则表达式', link: '/f-knowledge/javascript/regexp'},
            {text: 'JavaScript 常用方法', link: '/f-knowledge/javascript/common-method'},
          ],
        },
        {
          text: 'ECMAScript 语法',
          collapsed: true,
          items: [{ text: 'ES6 部分摘要', link: '/f-knowledge/ecma/es6' }],
        },
        {
          text: 'Web开发知识',
          collapsed: true,
          items: [
            { text: '互联网起步', link: '/f-knowledge/network/base' },
            { text: 'HTTP 概述', link: '/f-knowledge/network/http' },
          ],
        },
      ],
      '/notes/':[
        {
          text:'常用命令',
          link:'/notes/command'
        },
        {
          text:'随心记',
          collapsed:true,
          items:[
            { text:'搭建个人网站',link:"/notes/raop/myw"}
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/luxiaoyu822' }],
    footer: {
      message:
      `<a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备2023012132号-1</a>
       <a target="_blank" style="display:flex;justify-content: center;align-items: center;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011302321556">
          <img style="width:18px;height:18px" src="/gongan.png"/>苏公网安备 32011302321556号
       </a>
      `,
    },
    lastUpdatedText: '上次更新',
    darkModeSwitchLabel:'外观主题',
    returnToTopLabel:'返回顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
})
