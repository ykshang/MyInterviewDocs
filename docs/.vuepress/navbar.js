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
        { text: 'Web 基础知识', link: '/notes/WebBasic/' },
      ]
    }, {
      text: '主流框架',
      items: [
        { text: 'Vue', link: '/notes/Vue/' },
        { text: 'React', link: '/notes/React/' },
        { text: 'Angular', link: '/notes/Angular/' },
        { text: 'UniApp', link: '/notes/UniApp/' },
      ]
    }]
  }, {
    text: '前端进阶',
    items: [
      {
        text: '轻应用框架',
        items: [
          { text: 'Node.js', link: '/notes/NodeJs/' },
          { text: 'Express', link: '/notes/Express/' },
          { text: 'Koa', link: '/notes/Koa/' },
        ]
      }, {
        text: '数据库',
        items: [
          { text: 'MongoDB', link: '/notes/MongoDB/' },
        ]
      },
    ]
  }, {
    text: '工程化',
    items: [
      { text: 'Webpack', link: '/notes/Webpack/' },
      { text: 'Vite', link: '/notes/Vite/' },
      { text: 'Babel', link: '/notes/Babel/' },
      { text: 'Gulp', link: '/notes/Gulp/' },
      { text: 'Grunt', link: '/notes/Grunt/' },
    ]
  }, {
    text: '项目管理',
    items: [{
      text: '代码管理',
      items: [
        { text: 'Git', link: '/notes/Git/' },
        { text: 'SVN', link: '/notes/SVN/' },
      ]
    }]
  }, {
    text: '计算机基础',
    items: [
      { text: '算法', link: '/notes/Algorithm/' },
      { text: '设计模式', link: '/notes/DesignPattern/' },
      { text: '网络相关', link: '/notes/Network/' },
      { text: '信息安全', link: '/notes/Security/' },
    ]
  },
])
