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
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "https://theme-plume.vuejs.press/favicon-32x32.png" }]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovQ29kZV9NeUJsb2cvcGx1bWUtYmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ29kZV9NeUJsb2dcXFxccGx1bWUtYmxvZ1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NvZGVfTXlCbG9nL3BsdW1lLWJsb2cvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xuaW1wb3J0IHsgcGx1bWVUaGVtZSB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogJy9NeUJsb2cvJyxcbiAgbGFuZzogJ3poLUNOJyxcbiAgdGl0bGU6ICdcdTkxQ0RcdTY3ODRcdTRFQkFcdTc1MUYnLFxuICBkZXNjcmlwdGlvbjogJycsXG5cbiAgaGVhZDogW1xuICAgIC8vIFx1OTE0RFx1N0Y2RVx1N0FEOVx1NzBCOVx1NTZGRVx1NjgwN1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBzaXplczogJzMyeDMyJywgaHJlZjogJ2h0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZmF2aWNvbi0zMngzMi5wbmcnIH1dLFxuICBdLFxuXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSwgLy8gXHU3QUQ5XHU3MEI5XHU4RjgzXHU1OTI3XHVGRjBDXHU5ODc1XHU5NzYyXHU2NTcwXHU5MUNGXHU4RjgzXHU1OTFBXHU2NUY2XHVGRjBDXHU0RTBEXHU1RUZBXHU4QkFFXHU1NDJGXHU3NTI4XG5cbiAgdGhlbWU6IHBsdW1lVGhlbWUoe1xuICAgIC8qIFx1NkRGQlx1NTJBMFx1NjBBOFx1NzY4NFx1OTBFOFx1N0Y3Mlx1NTdERlx1NTQwRCwgXHU2NzA5XHU1MkE5XHU0RThFIFNFTywgXHU3NTFGXHU2MjEwIHNpdGVtYXAgKi9cbiAgICAvLyBob3N0bmFtZTogJ2h0dHBzOi8veW91cl9zaXRlX3VybCcsXG5cbiAgICAvKiBcdTY1ODdcdTY4NjNcdTRFRDNcdTVFOTNcdTkxNERcdTdGNkVcdUZGMENcdTc1MjhcdTRFOEUgZWRpdExpbmsgKi9cbiAgICAvLyBkb2NzUmVwbzogJycsXG4gICAgLy8gZG9jc0RpcjogJ2RvY3MnLFxuICAgIC8vIGRvY3NCcmFuY2g6ICcnLFxuXG4gICAgLyogXHU5ODc1XHU1MTg1XHU0RkUxXHU2MDZGICovXG4gICAgLy8gZWRpdExpbms6IHRydWUsXG4gICAgLy8gbGFzdFVwZGF0ZWQ6IHRydWUsXG4gICAgLy8gY29udHJpYnV0b3JzOiB0cnVlLFxuICAgIC8vIGNoYW5nZWxvZzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBcdTUzNUFcdTVCQTJcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNibG9nXG4gICAgICovXG4gICAgLy8gYmxvZzogZmFsc2UsIC8vIFx1Nzk4MVx1NzUyOFx1NTM1QVx1NUJBMlxuICAgIC8vIGJsb2c6IHtcbiAgICAvLyAgIHBvc3RMaXN0OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTY1ODdcdTdBRTBcdTUyMTdcdTg4NjhcdTk4NzVcbiAgICAvLyAgIHRhZ3M6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjgwN1x1N0I3RVx1OTg3NVxuICAgIC8vICAgYXJjaGl2ZXM6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NUY1Mlx1Njg2M1x1OTg3NVxuICAgIC8vICAgY2F0ZWdvcmllczogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1MjA2XHU3QzdCXHU5ODc1XG4gICAgLy8gICBwb3N0Q292ZXI6ICdyaWdodCcsIC8vIFx1NjU4N1x1N0FFMFx1NUMwMVx1OTc2Mlx1NEY0RFx1N0Y2RVxuICAgIC8vICAgcGFnaW5hdGlvbjogMTUsIC8vIFx1NkJDRlx1OTg3NVx1NjYzRVx1NzkzQVx1NjU4N1x1N0FFMFx1NjU3MFx1OTFDRlxuICAgIC8vIH0sXG5cbiAgICAvKiBcdTUzNUFcdTVCQTJcdTY1ODdcdTdBRTBcdTk4NzVcdTk3NjJcdTk0RkVcdTYzQTVcdTUyNERcdTdGMDAgKi9cbiAgICBhcnRpY2xlOiAnL2FydGljbGUvJyxcblxuICAgIC8qKlxuICAgICAqIFx1N0YxNlx1OEJEMVx1N0YxM1x1NUI1OFx1RkYwQ1x1NTJBMFx1NUZFQlx1N0YxNlx1OEJEMVx1OTAxRlx1NUVBNlxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvYmFzaWMvI2NhY2hlXG4gICAgICovXG4gICAgY2FjaGU6ICdmaWxlc3lzdGVtJyxcblxuICAgIC8qKlxuICAgICAqIFx1NEUzQSBtYXJrZG93biBcdTY1ODdcdTRFRjZcdTgxRUFcdTUyQThcdTZERkJcdTUyQTAgZnJvbnRtYXR0ZXIgXHU5MTREXHU3RjZFXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9iYXNpYy8jYXV0b2Zyb250bWF0dGVyXG4gICAgICovXG4gICAgLy8gYXV0b0Zyb250bWF0dGVyOiB7XG4gICAgLy8gICBwZXJtYWxpbms6IHRydWUsICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTZDMzhcdTRFNDVcdTk0RkVcdTYzQTVcbiAgICAvLyAgIGNyZWF0ZVRpbWU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NTIxQlx1NUVGQVx1NjVGNlx1OTVGNFxuICAgIC8vICAgdGl0bGU6IHRydWUsICAgICAgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU2ODA3XHU5ODk4XG4gICAgLy8gfSxcblxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGdpdDogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogU2hpa2kgXHU0RUUzXHU3ODAxXHU5QUQ4XHU0RUFFXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvY29kZS1oaWdobGlnaHQvXG4gICAgICAgKi9cbiAgICAgIHNoaWtpOiB7XG4gICAgICAgIC8vIFx1NUYzQVx1NzBDOFx1NUVGQVx1OEJBRVx1OTg4NFx1OEJCRVx1NEVFM1x1NzgwMVx1NTc1N1x1OUFEOFx1NEVBRVx1OEJFRFx1OEEwMFx1RkYwQ1x1NjNEMlx1NEVGNlx1OUVEOFx1OEJBNFx1NTJBMFx1OEY3RFx1NjI0MFx1NjcwOVx1OEJFRFx1OEEwMFx1NEYxQVx1NEVBN1x1NzUxRlx1NEUwRFx1NUZDNVx1ODk4MVx1NzY4NFx1NjVGNlx1OTVGNFx1NUYwMFx1OTUwMFxuICAgICAgICBsYW5ndWFnZXM6IFsnaHRtbCcsICdjc3MnLCAnamF2YScsICd2dWUnLCAnc2hlbGwnLCAnYmFzaCcsICd0eXBlc2NyaXB0JywgJ2phdmFzY3JpcHQnXSxcbiAgICAgICAgdHdvc2xhc2g6IHRydWUsIC8vIFx1NTQyRlx1NzUyOCB0d29zbGFzaFxuICAgICAgICB3aGl0ZXNwYWNlOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggXHU3QTdBXHU2ODNDL1RhYiBcdTlBRDhcdTRFQUVcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1ODg0Q1x1NTNGN1xuICAgICAgfSxcblxuICAgICAgLyogXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyLCBcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjggKi9cbiAgICAgIC8vIHNlYXJjaDogdHJ1ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGdvbGlhIERvY1NlYXJjaFxuICAgICAgICogXHU1NDJGXHU3NTI4XHU2QjY0XHU2NDFDXHU3RDIyXHU5NzAwXHU4OTgxXHU1QzA2IFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMiBzZWFyY2ggXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvc2VhcmNoLyNhbGdvbGlhLWRvY3NlYXJjaFxuICAgICAgICovXG4gICAgICAvLyBkb2NzZWFyY2g6IHtcbiAgICAgIC8vICAgYXBwSWQ6ICcnLFxuICAgICAgLy8gICBhcGlLZXk6ICcnLFxuICAgICAgLy8gICBpbmRleE5hbWU6ICcnLFxuICAgICAgLy8gfSxcblxuICAgICAgLyogXHU2NTg3XHU3QUUwXHU1QjU3XHU2NTcwXHU3RURGXHU4QkExXHUzMDAxXHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XHVGRjBDXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlIFx1NTIxOVx1Nzk4MVx1NzUyOCAqL1xuICAgICAgLy8gcmVhZGluZ1RpbWU6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogbWFya2Rvd24gZW5oYW5jZVxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL21hcmtkb3duLWVuaGFuY2UvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duRW5oYW5jZToge1xuICAgICAgLy8gICBjaGFydGpzOiB0cnVlLFxuICAgICAgLy8gICBlY2hhcnRzOiB0cnVlLFxuICAgICAgLy8gICBtZXJtYWlkOiB0cnVlLFxuICAgICAgLy8gICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICAvLyB9LFxuXG4gICAgICAvKipcbiAgICAgICAqICBtYXJrZG93biBwb3dlclxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW4vbWFya2Rvd24tcG93ZXIvXG4gICAgICAgKi9cbiAgICAgIG1hcmtkb3duUG93ZXI6IHtcbiAgICAgICAgLy8gcGRmOiB0cnVlLCAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggUERGIFx1NUQ0Q1x1NTE2NSBAW3BkZl0oL3h4eC5wZGYpXG4gICAgICAgIC8vIGNhbml1c2U6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4IGNhbml1c2UgXHU4QkVEXHU2Q0Q1ICBAW2Nhbml1c2VdKGZlYXR1cmVfbmFtZSlcbiAgICAgICAgLy8gcGxvdDogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTk2OTBcdTc5RDhcdTY1ODdcdTY3MkNcdThCRURcdTZDRDUgISF4eHh4ISFcbiAgICAgICAgLy8gYmlsaWJpbGk6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYmlsaWJpbGlcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYmlsaWJpbGldKGJpZClcbiAgICAgICAgLy8geW91dHViZTogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgeW91dHViZVx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFt5b3V0dWJlXSh2aWRlb19pZClcbiAgICAgICAgLy8gYXJ0UGxheWVyOiB0cnVlLCAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYXJ0UGxheWVyIFx1NjcyQ1x1NTczMFx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFthcnRQbGF5ZXJdKHVybClcbiAgICAgICAgLy8gYXVkaW9SZWFkZXI6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjVcdTk3RjNcdTk4OTFcdTY3MTdcdThCRkJcdTUyOUZcdTgwRkQgXHU4QkVEXHU2Q0Q1IEBbYXVkaW9SZWFkZXJdKHVybClcbiAgICAgICAgaWNvbnM6IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTUxODVcdTdGNkVcdTU2RkVcdTY4MDdcdThCRURcdTZDRDUgIDpbaWNvbi1uYW1lXTpcbiAgICAgICAgLy8gY29kZXBlbjogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgY29kZXBlbiBcdThCRURcdTZDRDUgQFtjb2RlcGVuXSh1c2VyL3NsYXNoKVxuICAgICAgICAvLyByZXBsaXQ6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSByZXBsaXQgXHU4QkVEXHU2Q0Q1IEBbcmVwbGl0XSh1c2VyL3JlcGwtbmFtZSlcbiAgICAgICAgLy8gY29kZVNhbmRib3g6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgY29kZVNhbmRib3ggXHU4QkVEXHU2Q0Q1IEBbY29kZVNhbmRib3hdKGlkKVxuICAgICAgICAvLyBqc2ZpZGRsZTogdHJ1ZSwgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBqc2ZpZGRsZSBcdThCRURcdTZDRDUgQFtqc2ZpZGRsZV0odXNlci9pZClcbiAgICAgICAgLy8gbnBtVG86IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjggbnBtLXRvIFx1NUJCOVx1NTY2OCAgOjo6IG5wbS10b1xuICAgICAgICBkZW1vOiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBkZW1vIFx1NUJCOVx1NTY2OCAgOjo6IGRlbW9cbiAgICAgICAgLy8gcmVwbDogeyAgICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggXHU0RUUzXHU3ODAxXHU2RjE0XHU3OTNBXHU1QkI5XHU1NjY4XG4gICAgICAgIC8vICAgZ286IHRydWUsICAgICAgICAgLy8gOjo6IGdvLXJlcGxcbiAgICAgICAgLy8gICBydXN0OiB0cnVlLCAgICAgICAvLyA6OjogcnVzdC1yZXBsXG4gICAgICAgIC8vICAga290bGluOiB0cnVlLCAgICAgLy8gOjo6IGtvdGxpbi1yZXBsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIGltYWdlU2l6ZTogJ2xvY2FsJywgLy8gXHU1NDJGXHU3NTI4IFx1ODFFQVx1NTJBOFx1NTg2Qlx1NTE0NSBcdTU2RkVcdTcyNDdcdTVCQkRcdTlBRDhcdTVDNUVcdTYwMjdcdUZGMENcdTkwN0ZcdTUxNERcdTk4NzVcdTk3NjJcdTYyOTZcdTUyQThcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogXHU1NzI4IE1hcmtkb3duIFx1NjU4N1x1NEVGNlx1NEUyRFx1NUJGQ1x1NTE2NVx1NTE3Nlx1NEVENiBtYXJrZG93biBcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcdTMwMDJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9tYXJrZG93bi9pbmNsdWRlL1xuICAgICAgICovXG4gICAgICAvLyBtYXJrZG93bkluY2x1ZGU6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogTWFya2Rvd24gXHU2NTcwXHU1QjY2XHU1MTZDXHU1RjBGXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvbWFya2Rvd24tbWF0aC9cbiAgICAgICAqL1xuICAgICAgLy8gbWFya2Rvd25NYXRoOiB7XG4gICAgICAvLyAgIHR5cGU6ICdrYXRleCcsXG4gICAgICAvLyB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1NkMzNFx1NTM3MFxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL3dhdGVybWFyay9cbiAgICAgICAqL1xuICAgICAgLy8gd2F0ZXJtYXJrOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1OEJDNFx1OEJCQSBjb21tZW50c1xuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2NvbW1lbnRzL1xuICAgICAgICovXG4gICAgICAvLyBjb21tZW50OiB7XG4gICAgICAvLyAgIHByb3ZpZGVyOiAnJywgLy8gXCJBcnRhbGtcIiB8IFwiR2lzY3VzXCIgfCBcIlR3aWtvb1wiIHwgXCJXYWxpbmVcIlxuICAgICAgLy8gICBjb21tZW50OiB0cnVlLFxuICAgICAgLy8gICByZXBvOiAnJyxcbiAgICAgIC8vICAgcmVwb0lkOiAnJyxcbiAgICAgIC8vICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgLy8gICBjYXRlZ29yeUlkOiAnJyxcbiAgICAgIC8vICAgbWFwcGluZzogJ3BhdGhuYW1lJyxcbiAgICAgIC8vICAgcmVhY3Rpb25zRW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8vICAgaW5wdXRQb3NpdGlvbjogJ3RvcCcsXG4gICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBcdTUyQTBcdTVCQzZcdTUyOUZcdTgwRkRcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvZW5jcnlwdGlvbi9cbiAgICAgKi9cbiAgICAvLyBlbmNyeXB0OiB7fSxcbiAgfSksXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUyxTQUFTLG1CQUFtQjtBQUNsVSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGtCQUFrQjtBQUUzQixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUViLE1BQU07QUFBQTtBQUFBLElBRUosQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sYUFBYSxPQUFPLFNBQVMsTUFBTSxvREFBb0QsQ0FBQztBQUFBLEVBQ3hIO0FBQUEsRUFFQSxTQUFTLFlBQVk7QUFBQSxFQUNyQixnQkFBZ0I7QUFBQTtBQUFBLEVBRWhCLE9BQU8sV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE4QmhCLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTVQsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWVAsU0FBUztBQUFBLE1BQ1AsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLTCxPQUFPO0FBQUE7QUFBQSxRQUVMLFdBQVcsQ0FBQyxRQUFRLE9BQU8sUUFBUSxPQUFPLFNBQVMsUUFBUSxjQUFjLFlBQVk7QUFBQSxRQUNyRixVQUFVO0FBQUE7QUFBQSxRQUNWLFlBQVk7QUFBQTtBQUFBLFFBQ1osYUFBYTtBQUFBO0FBQUEsTUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFrQ0EsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRYixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNUCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNTixXQUFXO0FBQUE7QUFBQSxNQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0YsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
