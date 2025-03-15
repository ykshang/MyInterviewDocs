import{_ as a,c as i,a as n,o as e}from"./app-CrDOs8BQ.js";const l={};function t(p,s){return e(),i("div",null,s[0]||(s[0]=[n(`<p>浏览器缓存是提升网页加载性能的重要机制，主要包括<strong>强缓存</strong>和<strong>协商缓存</strong>两种策略。它们的主要目的是减少网络请求，加快资源加载速度。以下是强缓存和协商缓存的详细解释及其区别：</p><h2 id="一、强缓存-strong-cache" tabindex="-1"><a class="header-anchor" href="#一、强缓存-strong-cache"><span>一、强缓存（Strong Cache）</span></a></h2><ol><li><p><strong>概念：</strong> 强缓存是指浏览器在请求资源时，先检查本地缓存是否有效。如果缓存有效，则直接使用缓存资源，不会向服务器发送请求。</p></li><li><p><strong>实现方式：</strong> 强缓存通过以下 HTTP 响应头实现：</p><ul><li><strong><code>Cache-Control</code></strong>： <ul><li><code>max-age=&lt;seconds&gt;</code>：指定资源的最大缓存时间（相对时间）。</li><li><code>no-cache</code>：禁用强缓存，直接进入协商缓存。</li><li><code>no-store</code>：完全禁用缓存。</li><li><code>public</code>：资源可以被任何缓存（如浏览器、CDN）缓存。</li><li><code>private</code>：资源只能被客户端缓存。</li></ul></li><li><strong><code>Expires</code></strong>：指定资源的过期时间（绝对时间），优先级低于 <code>Cache-Control</code>。</li></ul></li><li><p><strong>工作流程</strong></p><ul><li>浏览器请求资源时，先检查本地缓存。</li><li>如果缓存未过期（根据 <code>Cache-Control</code> 或 <code>Expires</code>），则直接使用缓存资源。</li><li>如果缓存已过期，则进入协商缓存流程。</li></ul></li><li><p><strong>示例</strong></p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">HTTP</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1.1</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">200</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">OK</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Cache-Control:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">max-age=3600</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Expires:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Wed,</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">25</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Oct</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2023</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">12:00:00</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">GMT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="二、协商缓存-conditional-cache" tabindex="-1"><a class="header-anchor" href="#二、协商缓存-conditional-cache"><span>二、协商缓存（Conditional Cache）</span></a></h2><ol><li><p><strong>概念：</strong> 协商缓存是指浏览器在强缓存失效后，向服务器发送请求，服务器根据请求头判断资源是否更新。如果资源未更新，则返回 304 状态码，浏览器使用本地缓存；如果资源已更新，则返回 200 状态码和新资源。</p></li><li><p><strong>实现方式</strong><br> 协商缓存通过以下 HTTP 请求头和响应头实现：</p><ul><li><strong><code>Last-Modified</code> / <code>If-Modified-Since</code></strong>： <ul><li><code>Last-Modified</code>：服务器返回的资源最后修改时间。</li><li><code>If-Modified-Since</code>：浏览器发送请求时携带该头，值为上次响应中的 <code>Last-Modified</code>。</li></ul></li><li><strong><code>ETag</code> / <code>If-None-Match</code></strong>： <ul><li><code>ETag</code>：服务器返回的资源唯一标识（通常是哈希值）。</li><li><code>If-None-Match</code>：浏览器发送请求时携带该头，值为上次响应中的 <code>ETag</code>。</li></ul></li></ul></li><li><p><strong>工作流程</strong></p><ul><li>浏览器请求资源时，携带 <code>If-Modified-Since</code> 或 <code>If-None-Match</code>。</li><li>服务器检查资源是否更新： <ul><li>如果未更新，返回 304 状态码，浏览器使用本地缓存。</li><li>如果已更新，返回 200 状态码和新资源。</li></ul></li></ul></li><li><p><strong>示例</strong></p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">请求头</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">GET</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/resource</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">HTTP</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1.1</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">If-None-Match:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;abc123&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">If-Modified-Since:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Wed,</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">25</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Oct</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2023</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">10:00:00</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">GMT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">响应头（未更新）</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">HTTP</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1.1</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">304</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Not</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Modified</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ETag:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;abc123&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Last-Modified:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Wed,</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">25</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Oct</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2023</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">10:00:00</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">GMT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">响应头（已更新）</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">HTTP</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1.1</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">200</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">OK</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ETag:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;def456&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Last-Modified:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Wed,</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">25</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Oct</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2023</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">11:00:00</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">GMT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="三、强缓存与协商缓存的区别" tabindex="-1"><a class="header-anchor" href="#三、强缓存与协商缓存的区别"><span>三、强缓存与协商缓存的区别</span></a></h2><table><thead><tr><th><strong>特性</strong></th><th><strong>强缓存</strong></th><th><strong>协商缓存</strong></th></tr></thead><tbody><tr><td><strong>是否发送请求</strong></td><td>不发送请求，直接使用缓存</td><td>发送请求，服务器判断是否使用缓存</td></tr><tr><td><strong>HTTP 状态码</strong></td><td>200（from cache）</td><td>304（Not Modified）</td></tr><tr><td><strong>实现机制</strong></td><td><code>Cache-Control</code>、<code>Expires</code></td><td><code>Last-Modified</code> / <code>If-Modified-Since</code>、<code>ETag</code> / <code>If-None-Match</code></td></tr><tr><td><strong>缓存优先级</strong></td><td>优先检查强缓存，失效后再进入协商缓存</td><td>强缓存失效后触发</td></tr><tr><td><strong>适用场景</strong></td><td>静态资源（如图片、CSS、JS）</td><td>频繁更新的资源（如 HTML）</td></tr></tbody></table><hr><h2 id="四、缓存策略的最佳实践" tabindex="-1"><a class="header-anchor" href="#四、缓存策略的最佳实践"><span>四、缓存策略的最佳实践</span></a></h2><ol><li><p><strong>强缓存</strong></p><ul><li>对静态资源（如图片、CSS、JS）设置较长的 <code>max-age</code>（如 1 年）。</li><li>使用 <code>Cache-Control: public</code> 允许 CDN 缓存资源。</li></ul></li><li><p><strong>协商缓存</strong></p><ul><li>对频繁更新的资源（如 HTML）禁用强缓存（<code>Cache-Control: no-cache</code>），启用协商缓存。</li><li>使用 <code>ETag</code> 代替 <code>Last-Modified</code>，因为 <code>ETag</code> 更精确。</li></ul></li><li><p><strong>缓存更新</strong></p><ul><li>通过文件名哈希（如 <code>app.abc123.js</code>）或版本号（如 <code>app.v1.js</code>）强制更新缓存。</li><li>使用 <code>Cache-Control: no-store</code> 禁止缓存敏感数据。</li></ul></li></ol><hr><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结"><span>五、总结</span></a></h2><ul><li><strong>强缓存</strong>：通过 <code>Cache-Control</code> 和 <code>Expires</code> 实现，浏览器直接使用缓存资源，不发送请求。</li><li><strong>协商缓存</strong>：通过 <code>Last-Modified</code> / <code>If-Modified-Since</code> 和 <code>ETag</code> / <code>If-None-Match</code> 实现，浏览器发送请求，服务器判断是否使用缓存。</li><li><strong>区别</strong>：强缓存不发送请求，协商缓存发送请求并返回 304 状态码。</li><li><strong>最佳实践</strong>：结合强缓存和协商缓存，合理设置缓存策略以提升性能。</li></ul>`,13)]))}const c=a(l,[["render",t],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/WebBasic/4fxppxw4/","title":"7","lang":"zh-CN","frontmatter":{"title":7,"createTime":"2025/03/15 13:30:18","permalink":"/WebBasic/4fxppxw4/"},"headers":[],"readingTime":{"minutes":3.63,"words":1088},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/WebBasic/2.浏览器相关/7.md"}');export{c as comp,h as data};
