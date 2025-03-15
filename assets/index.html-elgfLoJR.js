import{_ as l,c as t,a as e,o as s}from"./app-CrDOs8BQ.js";const a={};function o(n,i){return s(),t("div",null,i[0]||(i[0]=[e('<div class="hint-container tip"><p class="hint-container-title">总结</p><ol><li>我们可以使用 Lighthouse 先去测试一下网页。</li><li>拿到测试报告，根据诊断报告去选择性优化。</li><li>优化的差不多了，再去看一些关键的性能指标，基本只剩下那些频繁操作 dom、关键文件的加载阻塞渲染。</li><li>如果依旧数据比较差， 再用 F12 里的性能工具去分析，排查的侧重点是减少 <strong>回流和重绘</strong> 的次数，以及 js 阻塞 <ol><li>比如用<code>Js</code>里操作<code>Dom</code>时，我们边修改边访问 DOM，可能触发回流和重绘。浏览器需要重新渲染以后，才能返会数据，在此期间 JS 是暂停运行在等待结果的。</li><li>阻塞性的 js 文件，使用动态加载，等待浏览器主要部分都加载完，再去动态创建标签去触发加载</li></ol></li></ol></div><h2 id="一、主要内容" tabindex="-1"><a class="header-anchor" href="#一、主要内容"><span>一、主要内容</span></a></h2><p>Lighthouse 生成的报告包含以下五个主要类别：</p><ol><li><strong>性能（Performance）</strong>： <ul><li>关键指标：首次内容绘制（FCP）、首次有效绘制（FMP）、速度指数（Speed Index）等。</li><li>优化建议：如减少未使用的 JavaScript、优化图片加载等。</li></ul></li><li><strong>可访问性（Accessibility）</strong>： <ul><li>检查页面是否对残障用户友好。</li><li>建议：如为图片添加 <code>alt</code> 属性、确保足够的对比度等。</li></ul></li><li><strong>最佳实践（Best Practices）</strong>： <ul><li>检查是否遵循现代 Web 开发的最佳实践。</li><li>建议：如使用 HTTPS、避免废弃的 API 等。</li></ul></li><li><strong>SEO（搜索引擎优化）</strong>： <ul><li>检查页面是否符合 SEO 最佳实践。</li><li>建议：如使用语义化标签、优化元数据等。</li></ul></li><li><strong>PWA（渐进式网页应用）</strong>： <ul><li>检查页面是否满足 PWA 的基本要求。</li><li>建议：如注册 Service Worker、提供离线支持等。</li></ul></li></ol><h2 id="二、诊断报告" tabindex="-1"><a class="header-anchor" href="#二、诊断报告"><span>二、诊断报告</span></a></h2><p>里边有很多预制的诊断点，根据诊断结果，我们可以去优化网页。</p><p><strong>性能相关</strong>，页面性能</p><ul><li><p>消除渲染阻塞资源：某些 css、js 文件加载慢，成了阻塞的主页面渲染的瓶颈，建议内嵌到 html 一起加载。</p></li><li><p>移除无用的 js：减少未使用的 JavaScript，并推迟加载脚本，直到需要它们来减少网络活动消耗的字节数</p></li><li><p>移除无用的 CSS：减少样式表中未使用的规则，并推迟不用于折叠内容的 CSS，以减少网络活动消耗的字节数</p></li><li><p>给图片设置宽高：减少布局计算，提高 CLS（计算布局偏移）性能。</p></li><li><p>WebP 和 AVIF 等图像格式通常比 PNG 或 JPEG 提供更好的压缩，这意味着下载速度更快，数据消耗更少。</p></li><li><p>图片没有设置 alt 属性</p></li><li><p>缓存时间太短：增加缓存的有效期，提高缓存的利用率</p></li><li><p>调整图片体积：提供适当大小的图像，以节省蜂窝数据并缩短加载时间</p></li></ul><p><strong>可访问性</strong>，残障友好</p><ul><li>按钮有没有设置名称</li><li>图片设置 alt 属性</li><li>元素的前景和背景色对比不够明显</li><li>html 没有设置 lang 属性</li></ul><p><strong>最佳实践</strong> 主要涉及一些安全性</p><ul><li>网页安全策略对 xss 攻击有效防护</li><li>console 日志输出</li><li>避免废弃的 api</li><li>避免第三方 cooikes</li><li>允许用户粘贴内容到输入框</li></ul><p><strong>SEO 优化</strong></p>',13)]))}const p=l(a,[["render",o],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/article/tba4opa6/","title":"你用过 Lighthouse 吗？如何利用 Lighthouse 进行性能分析？","lang":"zh-CN","frontmatter":{"title":"你用过 Lighthouse 吗？如何利用 Lighthouse 进行性能分析？","createTime":"2025/03/15 14:24:59","permalink":"/article/tba4opa6/","tags":["性能","前端","性能优化","性能分析","Lighthouse"]},"headers":[],"readingTime":{"minutes":2.96,"words":887},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"杂谈 Node.Js/你用过 Lighthouse 吗？如何利用 Lighthouse 进行性能分析？.md","categoryList":[{"id":"b2f957","sort":10004,"name":"杂谈 Node.Js"}]}');export{p as comp,g as data};
