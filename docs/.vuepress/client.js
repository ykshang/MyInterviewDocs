import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import CustomComponent from './theme/components/Custom.vue'
import demo1 from './theme/demo/demo1.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './theme/styles/custom.css'
export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    app.use(ElementPlus);
    app.component('CustomComponent', CustomComponent)
    app.component('demo1', demo1)
  },
})
