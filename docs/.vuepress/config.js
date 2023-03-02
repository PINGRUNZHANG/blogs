module.exports = {
  base: '/Blogs/',
  title: 'XXX的博客',
  description: 'YYY',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    logo: '/jianshi.png',
    authorAvatar: '/jianshi.png',
    type: 'blog',
    author: 'Shark Xu',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Shark Xu 的博客',
        items: [
          { text: '掘金', link: 'https://juejin.cn/user/233526039432445' },
          { text: 'Github', link: 'https://github.com/Xusssyyy' },
        ],
      },
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '博客', // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: 'Tag', // 默认文案 “标签”
      },
    },
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  plugins: [
    [
      'cursor-effects',
      {
        size: 4, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
  ],
};
