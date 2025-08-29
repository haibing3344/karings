import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Karing官网",
  description: "Karing官网 - 新一代网络代理工具，界面简洁清晰，功能强大，全平台支持，Karing客户端下载地址，Karing使用教程",
  lang: 'zh-CN',
  cleanUrls: false, // 禁用干净URL，保留.html后缀
  head: [
    ['meta', { name: 'keywords', content: 'Karing,Karing官网,Karing下载,网络代理,代理工具' }],
    ['meta', { name: 'author', content: 'Karing Team' }],
    ['meta', { property: 'og:title', content: 'Karing官网' }],
    ['meta', { property: 'og:description', content: 'Karing - 新一代网络代理工具，界面简洁清晰，功能强大，全平台支持' }],
    ['meta', { property: 'og:url', content: 'https://karings.uk' }],
    ['link', { rel: 'canonical', href: 'https://karings.uk' }],
    ['script', { 
      async: true, 
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2394457707130437',
      crossorigin: 'anonymous'
    }]
  ],
  lastUpdated: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'Karing',
    nav: [
      { text: '介绍', link: '/' },
      { text: '下载', link: '/download.md' },
      { text: '教程', link: '/quickstart/index.md' },
      { text: '🎉机场推荐', link: 'feed.md' },
      { text: '常见问题', link: '/faq.md' }
    ],

    sidebar: {
      '/quickstart/index.md': [
        {
          text: '使用教程',
          items: [
            { text: '快速入门', link: '/quickstart/' },
            { text: '进阶教程', link: '/quickstart/advanced.md' }
          ]
        }
      ],
      '/faq': [
        {
          text: '常见问题',
          items: [
            { text: 'Karing App常见问题', link: '/faq.html#karing-app' },
            { text: '华为鸿蒙系统如何安装？', link: '/harmonyos.md' }
          ]
        }
      ]
    },
      // 文章翻页
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
    },
        
      // 移动端 - 外观
    darkModeSwitchLabel: '外观',
        
      // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',
        
    // 移动端 - menu
    sidebarMenuLabel: '菜单',
        
    outlineTitle: '本页导航',
    search: {
      provider: 'local'
    },

    footer: {
      message: 'Karing官网，Karing客户端下载，Karing机场推荐，Karing使用教程',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="/"> Karing 官网</a>`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KaringX/karing' }
    ]
  },
  
  // 站点地图
  sitemap: {
    hostname: 'https://karings.uk'
  },
  
  // 语法高亮配置
  markdown: {
    // 将mdx-code-block映射到markdown语法
    languageAlias: {
      'mdx-code-block': 'markdown'
    }
  }
})
