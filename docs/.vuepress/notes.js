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


export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [htmlNote, cssNote, JavaScriptNote, KoaNote, ExpressNote, GitNote, VueNote, ReactNote, AngularNote],
})
