import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// HTML 笔记配置
const htmlNote = defineNoteConfig({
  dir: 'Html',
  link: '/Html',
  sidebar: 'auto',
})
// CSS 笔记配置
const cssNote = defineNoteConfig({
  dir: 'CSS',
  link: '/CSS',
  sidebar: 'auto',
})
// CSS 笔记配置
const JavaScriptNote = defineNoteConfig({
  dir: 'Javascript',
  link: '/Javascript',
  sidebar: 'auto',
})
// Koa 笔记配置
const KoaNote = defineNoteConfig({
  dir: 'Koa',
  link: '/Koa',
  sidebar: 'auto',
})
// Koa 笔记配置
const ExpressNote = defineNoteConfig({
  dir: 'Express',
  link: '/Express',
  sidebar: 'auto',
})
// Git 笔记配置
const GitNote = defineNoteConfig({
  dir: 'Git',
  link: '/Git',
  sidebar: 'auto',
})
// Vue 笔记配置
const VueNote = defineNoteConfig({
  dir: 'Vue',
  link: '/Vue',
  sidebar: 'auto',
})
// React 笔记配置
const ReactNote = defineNoteConfig({
  dir: 'React',
  link: '/React',
  sidebar: 'auto',
})
// Angular 笔记配置
const AngularNote = defineNoteConfig({
  dir: 'Angular',
  link: '/Angular',
  sidebar: 'auto',
})
// Vite 笔记配置
const ViteNote = defineNoteConfig({
  dir: 'Vite',
  link: '/Vite',
  sidebar: 'auto',
})
// Babel 笔记配置
const BabelNote = defineNoteConfig({
  dir: 'Babel',
  link: '/Babel',
  sidebar: 'auto',
})
// NodeJs 笔记配置
const NodeJsNote = defineNoteConfig({
  dir: 'NodeJs',
  link: '/NodeJs',
  sidebar: 'auto',
})
// UniApp 笔记配置
const UniAppNote = defineNoteConfig({
  dir: 'UniApp',
  link: '/UniApp',
  sidebar: 'auto',
})
// Webpack 笔记配置
const WebpackNote = defineNoteConfig({
  dir: 'Webpack',
  link: '/Webpack',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [htmlNote, cssNote, JavaScriptNote, KoaNote, ExpressNote, GitNote, VueNote, ReactNote, AngularNote, ViteNote, BabelNote, NodeJsNote, UniAppNote, WebpackNote],
})
