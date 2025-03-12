// docs/.vuepress/config.js
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
var config_default = defineUserConfig({
  base: "/MyBlog/",
  lang: "zh-CN",
  title: "\u91CD\u6784\u4EBA\u751F",
  description: "",
  head: [
    // 配置站点图标
    ["link", { rel: "icon", type: "image/png", href: "https://theme-plume.vuejs.press/favicon-32x32.png" }]
  ],
  bundler: viteBundler(),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',
    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',
    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,
    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },
    /* 博客文章页面链接前缀 */
    article: "/article/",
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },
    plugins: {
      git: true,
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ["html", "css", "java", "vue", "shell", "bash", "typescript", "javascript"],
        twoslash: true,
        // 启用 twoslash
        whitespace: true,
        // 启用 空格/Tab 高亮
        lineNumbers: true
        // 启用行号
      },
      /* 本地搜索, 默认启用 */
      // search: true,
      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },
      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,
      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        // pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
        // caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
        // plot: true,         // 启用隐秘文本语法 !!xxxx!!
        // bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
        // youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
        // artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
        // audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
        icons: true,
        // 启用内置图标语法  :[icon-name]:
        // codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
        // replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
        // codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
        // jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
        // npmTo: true,        // 启用 npm-to 容器  ::: npm-to
        demo: true,
        // 启用 demo 容器  ::: demo
        // repl: {             // 启用 代码演示容器
        //   go: true,         // ::: go-repl
        //   rust: true,       // ::: rust-repl
        //   kotlin: true,     // ::: kotlin-repl
        // },
        imageSize: "local"
        // 启用 自动填充 图片宽高属性，避免页面抖动
      }
      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,
      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },
      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,
      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    }
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ29kZV9NeUJsb2cvcGx1bWUtYmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ29kZV9NeUJsb2dcXFxccGx1bWUtYmxvZ1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NvZGVfTXlCbG9nL3BsdW1lLWJsb2cvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xuaW1wb3J0IHsgcGx1bWVUaGVtZSB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogJy9NeUJsb2cvJyxcbiAgbGFuZzogJ3poLUNOJyxcbiAgdGl0bGU6ICdcdTkxQ0RcdTY3ODRcdTRFQkFcdTc1MUYnLFxuICBkZXNjcmlwdGlvbjogJycsXG5cbiAgaGVhZDogW1xuICAgIC8vIFx1OTE0RFx1N0Y2RVx1N0FEOVx1NzBCOVx1NTZGRVx1NjgwN1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiAnaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9mYXZpY29uLTMyeDMyLnBuZycgfV0sXG4gIF0sXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLCAvLyBcdTdBRDlcdTcwQjlcdThGODNcdTU5MjdcdUZGMENcdTk4NzVcdTk3NjJcdTY1NzBcdTkxQ0ZcdThGODNcdTU5MUFcdTY1RjZcdUZGMENcdTRFMERcdTVFRkFcdThCQUVcdTU0MkZcdTc1MjhcblxuICB0aGVtZTogcGx1bWVUaGVtZSh7XG4gICAgLyogXHU2REZCXHU1MkEwXHU2MEE4XHU3Njg0XHU5MEU4XHU3RjcyXHU1N0RGXHU1NDBELCBcdTY3MDlcdTUyQTlcdTRFOEUgU0VPLCBcdTc1MUZcdTYyMTAgc2l0ZW1hcCAqL1xuICAgIC8vIGhvc3RuYW1lOiAnaHR0cHM6Ly95b3VyX3NpdGVfdXJsJyxcblxuICAgIC8qIFx1NjU4N1x1Njg2M1x1NEVEM1x1NUU5M1x1OTE0RFx1N0Y2RVx1RkYwQ1x1NzUyOFx1NEU4RSBlZGl0TGluayAqL1xuICAgIC8vIGRvY3NSZXBvOiAnJyxcbiAgICAvLyBkb2NzRGlyOiAnZG9jcycsXG4gICAgLy8gZG9jc0JyYW5jaDogJycsXG5cbiAgICAvKiBcdTk4NzVcdTUxODVcdTRGRTFcdTYwNkYgKi9cbiAgICAvLyBlZGl0TGluazogdHJ1ZSxcbiAgICAvLyBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgICAvLyBjb250cmlidXRvcnM6IHRydWUsXG4gICAgLy8gY2hhbmdlbG9nOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIFx1NTM1QVx1NUJBMlxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvYmFzaWMvI2Jsb2dcbiAgICAgKi9cbiAgICAvLyBibG9nOiBmYWxzZSwgLy8gXHU3OTgxXHU3NTI4XHU1MzVBXHU1QkEyXG4gICAgLy8gYmxvZzoge1xuICAgIC8vICAgcG9zdExpc3Q6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFx1OTg3NVxuICAgIC8vICAgdGFnczogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU2ODA3XHU3QjdFXHU5ODc1XG4gICAgLy8gICBhcmNoaXZlczogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1RjUyXHU2ODYzXHU5ODc1XG4gICAgLy8gICBjYXRlZ29yaWVzOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTUyMDZcdTdDN0JcdTk4NzVcbiAgICAvLyAgIHBvc3RDb3ZlcjogJ3JpZ2h0JywgLy8gXHU2NTg3XHU3QUUwXHU1QzAxXHU5NzYyXHU0RjREXHU3RjZFXG4gICAgLy8gICBwYWdpbmF0aW9uOiAxNSwgLy8gXHU2QkNGXHU5ODc1XHU2NjNFXHU3OTNBXHU2NTg3XHU3QUUwXHU2NTcwXHU5MUNGXG4gICAgLy8gfSxcblxuICAgIC8qIFx1NTM1QVx1NUJBMlx1NjU4N1x1N0FFMFx1OTg3NVx1OTc2Mlx1OTRGRVx1NjNBNVx1NTI0RFx1N0YwMCAqL1xuICAgIGFydGljbGU6ICcvYXJ0aWNsZS8nLFxuXG4gICAgLyoqXG4gICAgICogXHU3RjE2XHU4QkQxXHU3RjEzXHU1QjU4XHVGRjBDXHU1MkEwXHU1RkVCXHU3RjE2XHU4QkQxXHU5MDFGXHU1RUE2XG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9iYXNpYy8jY2FjaGVcbiAgICAgKi9cbiAgICBjYWNoZTogJ2ZpbGVzeXN0ZW0nLFxuXG4gICAgLyoqXG4gICAgICogXHU0RTNBIG1hcmtkb3duIFx1NjU4N1x1NEVGNlx1ODFFQVx1NTJBOFx1NkRGQlx1NTJBMCBmcm9udG1hdHRlciBcdTkxNERcdTdGNkVcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNhdXRvZnJvbnRtYXR0ZXJcbiAgICAgKi9cbiAgICAvLyBhdXRvRnJvbnRtYXR0ZXI6IHtcbiAgICAvLyAgIHBlcm1hbGluazogdHJ1ZSwgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NkMzOFx1NEU0NVx1OTRGRVx1NjNBNVxuICAgIC8vICAgY3JlYXRlVGltZTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU1MjFCXHU1RUZBXHU2NUY2XHU5NUY0XG4gICAgLy8gICB0aXRsZTogdHJ1ZSwgICAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTY4MDdcdTk4OThcbiAgICAvLyB9LFxuXG4gICAgcGx1Z2luczoge1xuICAgICAgZ2l0OiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBTaGlraSBcdTRFRTNcdTc4MDFcdTlBRDhcdTRFQUVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2lucy9jb2RlLWhpZ2hsaWdodC9cbiAgICAgICAqL1xuICAgICAgc2hpa2k6IHtcbiAgICAgICAgLy8gXHU1RjNBXHU3MEM4XHU1RUZBXHU4QkFFXHU5ODg0XHU4QkJFXHU0RUUzXHU3ODAxXHU1NzU3XHU5QUQ4XHU0RUFFXHU4QkVEXHU4QTAwXHVGRjBDXHU2M0QyXHU0RUY2XHU5RUQ4XHU4QkE0XHU1MkEwXHU4RjdEXHU2MjQwXHU2NzA5XHU4QkVEXHU4QTAwXHU0RjFBXHU0RUE3XHU3NTFGXHU0RTBEXHU1RkM1XHU4OTgxXHU3Njg0XHU2NUY2XHU5NUY0XHU1RjAwXHU5NTAwXG4gICAgICAgIGxhbmd1YWdlczogWydodG1sJywgJ2NzcycsICdqYXZhJywgJ3Z1ZScsICdzaGVsbCcsICdiYXNoJywgJ3R5cGVzY3JpcHQnLCAnamF2YXNjcmlwdCddLFxuICAgICAgICB0d29zbGFzaDogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4IHR3b3NsYXNoXG4gICAgICAgIHdoaXRlc3BhY2U6IHRydWUsIC8vIFx1NTQyRlx1NzUyOCBcdTdBN0FcdTY4M0MvVGFiIFx1OUFEOFx1NEVBRVxuICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4XHU4ODRDXHU1M0Y3XG4gICAgICB9LFxuXG4gICAgICAvKiBcdTY3MkNcdTU3MzBcdTY0MUNcdTdEMjIsIFx1OUVEOFx1OEJBNFx1NTQyRlx1NzUyOCAqL1xuICAgICAgLy8gc2VhcmNoOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIEFsZ29saWEgRG9jU2VhcmNoXG4gICAgICAgKiBcdTU0MkZcdTc1MjhcdTZCNjRcdTY0MUNcdTdEMjJcdTk3MDBcdTg5ODFcdTVDMDYgXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyIHNlYXJjaCBcdThCQkVcdTdGNkVcdTRFM0EgZmFsc2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2lucy9zZWFyY2gvI2FsZ29saWEtZG9jc2VhcmNoXG4gICAgICAgKi9cbiAgICAgIC8vIGRvY3NlYXJjaDoge1xuICAgICAgLy8gICBhcHBJZDogJycsXG4gICAgICAvLyAgIGFwaUtleTogJycsXG4gICAgICAvLyAgIGluZGV4TmFtZTogJycsXG4gICAgICAvLyB9LFxuXG4gICAgICAvKiBcdTY1ODdcdTdBRTBcdTVCNTdcdTY1NzBcdTdFREZcdThCQTFcdTMwMDFcdTk2MDVcdThCRkJcdTY1RjZcdTk1RjRcdUZGMENcdThCQkVcdTdGNkVcdTRFM0EgZmFsc2UgXHU1MjE5XHU3OTgxXHU3NTI4ICovXG4gICAgICAvLyByZWFkaW5nVGltZTogdHJ1ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBtYXJrZG93biBlbmhhbmNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvbWFya2Rvd24tZW5oYW5jZS9cbiAgICAgICAqL1xuICAgICAgLy8gbWFya2Rvd25FbmhhbmNlOiB7XG4gICAgICAvLyAgIGNoYXJ0anM6IHRydWUsXG4gICAgICAvLyAgIGVjaGFydHM6IHRydWUsXG4gICAgICAvLyAgIG1lcm1haWQ6IHRydWUsXG4gICAgICAvLyAgIGZsb3djaGFydDogdHJ1ZSxcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogIG1hcmtkb3duIHBvd2VyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbi9tYXJrZG93bi1wb3dlci9cbiAgICAgICAqL1xuICAgICAgbWFya2Rvd25Qb3dlcjoge1xuICAgICAgICAvLyBwZGY6IHRydWUsICAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBQREYgXHU1RDRDXHU1MTY1IEBbcGRmXSgveHh4LnBkZilcbiAgICAgICAgLy8gY2FuaXVzZTogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjggY2FuaXVzZSBcdThCRURcdTZDRDUgIEBbY2FuaXVzZV0oZmVhdHVyZV9uYW1lKVxuICAgICAgICAvLyBwbG90OiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1OTY5MFx1NzlEOFx1NjU4N1x1NjcyQ1x1OEJFRFx1NkNENSAhIXh4eHghIVxuICAgICAgICAvLyBiaWxpYmlsaTogdHJ1ZSwgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBiaWxpYmlsaVx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFtiaWxpYmlsaV0oYmlkKVxuICAgICAgICAvLyB5b3V0dWJlOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSB5b3V0dWJlXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW3lvdXR1YmVdKHZpZGVvX2lkKVxuICAgICAgICAvLyBhcnRQbGF5ZXI6IHRydWUsICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBhcnRQbGF5ZXIgXHU2NzJDXHU1NzMwXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW2FydFBsYXllcl0odXJsKVxuICAgICAgICAvLyBhdWRpb1JlYWRlcjogdHJ1ZSwgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NVx1OTdGM1x1OTg5MVx1NjcxN1x1OEJGQlx1NTI5Rlx1ODBGRCBcdThCRURcdTZDRDUgQFthdWRpb1JlYWRlcl0odXJsKVxuICAgICAgICBpY29uczogdHJ1ZSwgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1x1OEJFRFx1NkNENSAgOltpY29uLW5hbWVdOlxuICAgICAgICAvLyBjb2RlcGVuOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBjb2RlcGVuIFx1OEJFRFx1NkNENSBAW2NvZGVwZW5dKHVzZXIvc2xhc2gpXG4gICAgICAgIC8vIHJlcGxpdDogdHJ1ZSwgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IHJlcGxpdCBcdThCRURcdTZDRDUgQFtyZXBsaXRdKHVzZXIvcmVwbC1uYW1lKVxuICAgICAgICAvLyBjb2RlU2FuZGJveDogdHJ1ZSwgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBjb2RlU2FuZGJveCBcdThCRURcdTZDRDUgQFtjb2RlU2FuZGJveF0oaWQpXG4gICAgICAgIC8vIGpzZmlkZGxlOiB0cnVlLCAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGpzZmlkZGxlIFx1OEJFRFx1NkNENSBAW2pzZmlkZGxlXSh1c2VyL2lkKVxuICAgICAgICAvLyBucG1UbzogdHJ1ZSwgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBucG0tdG8gXHU1QkI5XHU1NjY4ICA6OjogbnBtLXRvXG4gICAgICAgIGRlbW86IHRydWUsICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IGRlbW8gXHU1QkI5XHU1NjY4ICA6OjogZGVtb1xuICAgICAgICAvLyByZXBsOiB7ICAgICAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBcdTRFRTNcdTc4MDFcdTZGMTRcdTc5M0FcdTVCQjlcdTU2NjhcbiAgICAgICAgLy8gICBnbzogdHJ1ZSwgICAgICAgICAvLyA6OjogZ28tcmVwbFxuICAgICAgICAvLyAgIHJ1c3Q6IHRydWUsICAgICAgIC8vIDo6OiBydXN0LXJlcGxcbiAgICAgICAgLy8gICBrb3RsaW46IHRydWUsICAgICAvLyA6Ojoga290bGluLXJlcGxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgaW1hZ2VTaXplOiAnbG9jYWwnLCAvLyBcdTU0MkZcdTc1MjggXHU4MUVBXHU1MkE4XHU1ODZCXHU1MTQ1IFx1NTZGRVx1NzI0N1x1NUJCRFx1OUFEOFx1NUM1RVx1NjAyN1x1RkYwQ1x1OTA3Rlx1NTE0RFx1OTg3NVx1OTc2Mlx1NjI5Nlx1NTJBOFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBcdTU3MjggTWFya2Rvd24gXHU2NTg3XHU0RUY2XHU0RTJEXHU1QkZDXHU1MTY1XHU1MTc2XHU0RUQ2IG1hcmtkb3duIFx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVx1MzAwMlxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL21hcmtkb3duL2luY2x1ZGUvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duSW5jbHVkZTogdHJ1ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBNYXJrZG93biBcdTY1NzBcdTVCNjZcdTUxNkNcdTVGMEZcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2lucy9tYXJrZG93bi1tYXRoL1xuICAgICAgICovXG4gICAgICAvLyBtYXJrZG93bk1hdGg6IHtcbiAgICAgIC8vICAgdHlwZTogJ2thdGV4JyxcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogXHU2QzM0XHU1MzcwXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvd2F0ZXJtYXJrL1xuICAgICAgICovXG4gICAgICAvLyB3YXRlcm1hcms6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogXHU4QkM0XHU4QkJBIGNvbW1lbnRzXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvY29tbWVudHMvXG4gICAgICAgKi9cbiAgICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAgIC8vICAgcHJvdmlkZXI6ICcnLCAvLyBcIkFydGFsa1wiIHwgXCJHaXNjdXNcIiB8IFwiVHdpa29vXCIgfCBcIldhbGluZVwiXG4gICAgICAvLyAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICAvLyAgIHJlcG86ICcnLFxuICAgICAgLy8gICByZXBvSWQ6ICcnLFxuICAgICAgLy8gICBjYXRlZ29yeTogJycsXG4gICAgICAvLyAgIGNhdGVnb3J5SWQ6ICcnLFxuICAgICAgLy8gICBtYXBwaW5nOiAncGF0aG5hbWUnLFxuICAgICAgLy8gICByZWFjdGlvbnNFbmFibGVkOiB0cnVlLFxuICAgICAgLy8gICBpbnB1dFBvc2l0aW9uOiAndG9wJyxcbiAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFx1NTJBMFx1NUJDNlx1NTI5Rlx1ODBGRFxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9lbmNyeXB0aW9uL1xuICAgICAqL1xuICAgIC8vIGVuY3J5cHQ6IHt9LFxuICB9KSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNTLFNBQVMsbUJBQW1CO0FBQ2xVLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsa0JBQWtCO0FBRTNCLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBRWIsTUFBTTtBQUFBO0FBQUEsSUFFSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxhQUFhLE1BQU0sb0RBQW9ELENBQUM7QUFBQSxFQUN4RztBQUFBLEVBRUEsU0FBUyxZQUFZO0FBQUEsRUFDckIsZ0JBQWdCO0FBQUE7QUFBQSxFQUVoQixPQUFPLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOEJoQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1ULE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVlQLFNBQVM7QUFBQSxNQUNQLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0wsT0FBTztBQUFBO0FBQUEsUUFFTCxXQUFXLENBQUMsUUFBUSxPQUFPLFFBQVEsT0FBTyxTQUFTLFFBQVEsY0FBYyxZQUFZO0FBQUEsUUFDckYsVUFBVTtBQUFBO0FBQUEsUUFDVixZQUFZO0FBQUE7QUFBQSxRQUNaLGFBQWE7QUFBQTtBQUFBLE1BQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1Ba0NBLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUWIsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTVAsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTU4sV0FBVztBQUFBO0FBQUEsTUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9GLENBQUM7QUFDSCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
