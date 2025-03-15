import{_ as a,c as e,a as n,o as i}from"./app-CrDOs8BQ.js";const t={};function r(p,s){return i(),e("div",null,s[0]||(s[0]=[n('<div class="hint-container tip"><p class="hint-container-title">总结</p><ul><li>调整代码拆分和 sourceMap 的颗粒度，控制生成文件数量和体积，提高加载速度；</li><li>代码中按需引入、魔法注释标记无副作用的模块来配合 Tree sharking，优化输出。</li><li>调整文件指纹的 hash 复杂度，提高缓存命中率，同事防止哈希碰撞；、</li><li>提取公共模块，第三方依赖、runtime 文件；</li><li>js、css 的兼容性处理</li><li>压缩代码、图片、视频 ，必要时利用 CDN；</li><li>预加载、懒加载、预读取技术</li></ul></div><p>要优化 Webpack 构建的应用程序性能，可以采取以下措施：</p><h2 id="一、webpack-的配置优化" tabindex="-1"><a class="header-anchor" href="#一、webpack-的配置优化"><span>一、webpack 的配置优化</span></a></h2><h3 id="_1、设置生产模式会自动启用一些优化策略" tabindex="-1"><a class="header-anchor" href="#_1、设置生产模式会自动启用一些优化策略"><span>1、设置生产模式会自动启用一些优化策略</span></a></h3><p>在生产模式下，<code>webpack</code>会自动启用一些优化选项，包括：<strong>缓存</strong>、<strong>Tree Shaking</strong>、<strong>html 代码压缩</strong>、<strong>js 代码压缩</strong></p><h3 id="_2、设置合适代码拆分策略-webpack-的懒加载" tabindex="-1"><a class="header-anchor" href="#_2、设置合适代码拆分策略-webpack-的懒加载"><span>2、设置合适代码拆分策略（webpack 的懒加载）</span></a></h3><ul><li>设置拆分的精细度： 如调整并行加载数量，最大体积，最小体积等</li><li>路由、复杂组件的懒加载：路由的按需加载（使用 es 模块化的异步加载<code>import()</code>）配合 <strong>webpack 魔法名称</strong>，提示 webpack 拆分</li><li>公共代码提取：通过降低重复率，来降低文件体积，如果不提取出来，webpack 会在每一个文件中添加一份公共代码。</li><li>runtime 文件提取：和公共代码类似，runtime 代码是 webpack 用来处理模块依赖的辅助代码。</li><li>vendor 第三方依赖提取：主要指的 node_module，可以通过缓存组来拆分打包</li></ul><h3 id="_3、使用预加载技术优化懒加载" tabindex="-1"><a class="header-anchor" href="#_3、使用预加载技术优化懒加载"><span>3、使用预加载技术优化懒加载</span></a></h3><p>在路由和组件的懒加载中添加魔法名称，使用 Webpack 的<code>preload</code>和<code>prefetch</code>功能来预加载和推迟加载资源。</p><h3 id="_4、更复杂的哈希值计算-提高缓存命中率" tabindex="-1"><a class="header-anchor" href="#_4、更复杂的哈希值计算-提高缓存命中率"><span>4、更复杂的哈希值计算，提高缓存命中率</span></a></h3><p>代码打包的时候，在 <strong>避免哈希碰撞</strong> 的情况下，对生成的打包文件采用<strong>更复杂的哈希值计算</strong>，可以有效降低打包的影响范围，从而利用浏览器的缓存，<strong>提高缓存命中率</strong></p><h3 id="_5、代码压缩、转化" tabindex="-1"><a class="header-anchor" href="#_5、代码压缩、转化"><span>5、代码压缩、转化</span></a></h3><ul><li><strong>Html、Js：</strong> <code>webpack5</code>会对<code>html</code>和<code>js</code>默认压缩</li><li><strong>CSS：</strong> <code>css</code> 需要单独处理，可以使用<code>MiniCssExtractPlugin </code>插件。</li><li><strong>视频：</strong> 视频压缩；上传 CDN、静态资源服务器</li><li><strong>图片：</strong> 图片压缩；转化为 dataUrl 格式；多张小图片合并成大图；使用字体图标库代替；上传 CDN、静态资源服务器。</li></ul><h3 id="_6、js-和-css-的兼容性处理" tabindex="-1"><a class="header-anchor" href="#_6、js-和-css-的兼容性处理"><span>6、Js 和 CSS 的兼容性处理</span></a></h3><ul><li><strong>Js：</strong> 可以使用<code>postCss</code>去处理<code>CSS</code>的兼容性，</li><li><strong>CSS：</strong> 使用<code>babel</code>和<code>core-js</code>去处理 js 的兼容性</li></ul><h3 id="_7、关闭或降低-sourcemap-的生成精度" tabindex="-1"><a class="header-anchor" href="#_7、关闭或降低-sourcemap-的生成精度"><span>7、关闭或降低 sourceMap 的生成精度</span></a></h3><p>非必要情况下，可以 <strong>关闭</strong>，甚至 <strong>降低</strong> sourceMap 生成 map 文件的<strong>精细度</strong> ，可以非常有效的降低代码生成体积，提高加载速度。</p><h3 id="_8、使用-pwa-技术-处理某些极端情况" tabindex="-1"><a class="header-anchor" href="#_8、使用-pwa-技术-处理某些极端情况"><span>8、使用 PWA 技术，处理某些极端情况</span></a></h3><p>渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。</p><p>其中最重要的是，在用户 <strong>突然离线</strong> 时，应用程序能够 <strong>继续运行</strong> 功能。通过 Service Workers 技术实现的。</p><h2 id="二、代码中的优化" tabindex="-1"><a class="header-anchor" href="#二、代码中的优化"><span>二、代码中的优化</span></a></h2><h3 id="_1、适配-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_1、适配-tree-shaking"><span>1、适配 Tree Shaking</span></a></h3><ul><li><p>引入公共组件时，按需引入需要的部分，这样 webpack 会在打包带时候将未引入的部分剔除</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">funA</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">from</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./Module</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>封装组件的时候，尽量降低文件的副作用，配合<code>/*#__PURE__*/</code>标记函数，配合 Tree Shaking 无副作用移除代码</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">result</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/*#__PURE__*/</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">someFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h3 id="_2、路由或组件的按需加载-即懒加载" tabindex="-1"><a class="header-anchor" href="#_2、路由或组件的按需加载-即懒加载"><span>2、路由或组件的按需加载，即懒加载</span></a></h3><p>路由或组件的懒加载可以配合缓存和代码拆分</p><h3 id="_3、图片、视频的压缩、转化" tabindex="-1"><a class="header-anchor" href="#_3、图片、视频的压缩、转化"><span>3、图片、视频的压缩、转化</span></a></h3><ul><li><p><strong>合并图片：</strong> 跟样式有关的小尺寸图片，比如用按钮的边框，可以考虑 <strong>合并成一张图片</strong> ，在 css 中用偏移量去控制。从而通过<strong>减少文件数量来减少 http 请求</strong></p></li><li><p><strong>静态资源服务器、CDN：</strong> 可以考虑使用静态资源服务器或 CDN 服务器，将大体积的图片和视频上传，在代码中使用 <strong>URL 地址</strong> 去引入资源。</p></li></ul><h3 id="_4、cdn-加速" tabindex="-1"><a class="header-anchor" href="#_4、cdn-加速"><span>4、CDN 加速</span></a></h3><p>以下资源可以使用 CDN 加速，来提高加载速度，但是要<strong>控制数量</strong>，<strong>避免大幅度增加 Http 请求数量</strong></p><ul><li><strong>第三方库：</strong> 如 jQuery，bootstrap 之类的第三方库，</li><li><strong>特殊的字体文件：</strong> 如某些版权字体、font-awsome。</li><li><strong>大尺寸图片或视频</strong></li></ul>',30)]))}const o=a(t,[["render",r],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/Webpack/14ef8fox/","title":"如何优化生产环境的运行性能？","lang":"zh-CN","frontmatter":{"title":"如何优化生产环境的运行性能？","createTime":"2025/03/15 14:24:21","permalink":"/Webpack/14ef8fox/"},"headers":[],"readingTime":{"minutes":3.91,"words":1174},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Webpack/99.面试题/如何优化生产环境的运行性能？.md"}');export{o as comp,c as data};
