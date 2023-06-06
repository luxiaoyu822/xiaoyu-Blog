import { navLinks } from '../.vitepress/types/navLinkTypes'

const NavData: Array<navLinks> = [
  {
    title: '官方 AI 导航',
    item: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: 'OpenAI旗下对话工具',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://openai.com/favicon.ico',
        title: 'GPT-4',
        desc: 'OpenAI旗下最新的GPT4模型',
        link: 'https://openai.com/research/gpt-4',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney',
        desc: 'AI图像和插画生成工具',
        link: 'https://www.midjourney.com',
      },
      {
        icon: '/icons/wenxinyiyan.png',
        title: '文新一言',
        desc: '百度全新一代知识增强大语言模型',
        link: 'https://yiyan.baidu.com/',
      },
      {
        icon: '/icons/tongyiqianwen.png',
        title: '通义千问',
        desc: '阿里旗下智能对话模型',
        link: 'https://qianwen.aliyun.com/',
      },
    ],
  },
  {
    title: '免费 ChatGPT 镜像站点',
    item: [
      {
        icon: '/icons/mianfeigpt.svg',
        title: 'GPT 镜像对话工具',
        desc: '基于 GPT-3.5,使用稳定',
        link: 'https://chat2.jinshutuan.com/#/chat/1686016257098',
      },
      {
        icon: '/icons/mianfeigpt.svg',
        title: 'GPT 镜像对话工具',
        desc: '	免费AI绘画/GPT-3.5；付费GPT-4',
        link: 'https://ai.x-code.fun/web/',
      },
    ],
  },
  {
    title: 'Vue 生态',
    item: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vuex',
        desc: '适用于 vue2 和 vue3 的状态管理库',
        link: 'https://vuex.vuejs.org/',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite',
        desc: '下一代的前端工具链',
        link: 'https://cn.vitejs.dev/',
      },
      {
        icon: './icons/element-logo-small.svg',
        title: 'ElementUI',
        desc: '适用于 vue2 的桌面端组件库',
        link: 'https://element.eleme.cn/#/zh-CN',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org',
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant',
      },
    ],
  },
  {
    title: 'CSS 相关',
    item: [
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com',
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '检测浏览器对前端 API 相关特性支持程度',
        link: 'https://caniuse.com',
      },
      {
        icon: './icons/animatecss.ico',
        title: 'Animate.css',
        desc: 'CSS动画库之一',
        link: 'https://caniuse.com',
      },
    ],
  },
  {
    title: '小程序相关',
    item: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn',
      },
      {
        icon: 'https://open.weixin.qq.com/favicon.ico',
        title: '微信开放平台',
        desc: '让你的程序接入微信',
        link: 'https://open.weixin.qq.com/',
      },
    ],
  },
  {
    title: 'Node 相关',
    item: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com',
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com',
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn',
      },
    ],
  },
  {
    title: '可视化',
    item: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: './icons/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        title: 'Three.js',
        desc: 'JavaScript 3D 库',
        link: 'https://threejs.org',
      },
    ],
  },
  {
    title: '编译&构建&打包',
    item: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev',
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com',
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build',
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn',
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io',
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs',
      },
    ],
  },
  {
    title: '站点生成器',
    item: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN',
      },
    ],
  },
  {
    title: '图标库',
    item: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official',
      },
      {
        icon: 'https://fontawesome.com/favicon.ico',
        title: 'fontawesome 图标库',
        desc: 'FontAwesome 是互联网的图标库和工具包，被数以百万计的设计师、开发人员和内容创作者使用。',
        link: 'https://fontawesome.com/',
      },
    ],
  },
  {
    title: '前端学习资料',
    item: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com',
      },
      {
        icon: 'https://www.w3school.com.cn/ui2019/logo-16-red.png',
        title: 'W3School',
        desc: '领先的 Web 技术教程',
        link: 'https://www.w3school.com.cn/',
      },
    ],
  },
  {
    title: '社区',
    item: [
      {
        title: 'Github',
        icon: 'https://github.com/favicon.ico',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com',
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com',
      },
      {
        title: '博客园',
        icon: '/icons/cnblogs.svg',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com',
      },
    ],
  },
  {
    title: '摸鱼神器',
    item: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        desc: '网站热榜聚合',
        link: 'https://momoyu.cc',
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        desc: '流行的二次元弹幕网',
        link: 'https://www.bilibili.com',
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        desc: '全球最大的视频分享平台',
        link: 'https://www.youtube.com',
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn',
      },
      {
        title: '我不是盐神',
        icon: 'https://onehu.xyz/img/fluid.png',
        desc: '一个有趣的小说网',
        link: 'https://onehu.xyz/',
      },
    ],
  },
]

export default NavData
