import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '随想笔记', link: '/blog/' },
  // { text: '杂谈', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '前端基础',
    items: [{
      text: '基础',
      items: [
        { text: 'Html', link: '/notes/Html/' },
        { text: 'CSS', link: '/notes/CSS/' },
        { text: 'Javascript', link: '/notes/Javascript/' },
      ]
    }, {
      text: '三大框架',
      items: [
        { text: 'Vue', link: '/notes/Vue/' },
        { text: 'React', link: '/notes/React/' },
        { text: 'Angular', link: '/notes/Angular/' },
      ]
    }, {
      text: '进阶',
      items: [
        { text: 'Express', link: '/notes/Express/' },
        { text: 'Koa', link: '/notes/Koa/' },
      ]
    }]
  }, {
    text: '工程化',
    items: [
      { text: 'Webpack', link: '/blog/' },
      { text: 'Babel', link: '/blog/' },
      { text: 'Gulp', link: '/blog/' },
      { text: 'Grunt', link: '/blog/' },
    ]
  }, {
    text: '项目管理',
    items: [{
      text: '代码管理',
      items: [
        { text: 'Git', link: '/notes/Git/' },
        { text: 'SVN', link: '/' },
      ]
    }]
  },
])
