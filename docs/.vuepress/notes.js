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
export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [htmlNote, cssNote, JavaScriptNote],
})
