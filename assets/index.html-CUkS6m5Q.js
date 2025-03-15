import{_ as a,c as i,a as n,o as l}from"./app-CrDOs8BQ.js";const p={};function t(h,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h2 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍"><span>一、介绍</span></a></h2><p><strong>Canvas</strong> 是 HTML5 提供的一个绘图元素，通过 JavaScript 动态生成图形、动画和图像。它本质上是一个“画布”，开发者可以通过脚本语言（如 JavaScript）在网页上绘制复杂的图形内容。</p><h3 id="_1、核心特性" tabindex="-1"><a class="header-anchor" href="#_1、核心特性"><span>1、核心特性</span></a></h3><ol><li><p><strong>基于像素的绘图</strong><br> Canvas 绘制的是位图（像素点），适合动态、高性能的图形操作（如游戏、动画）。</p></li><li><p><strong>2D 和 3D 支持</strong></p><ul><li><strong>2D 绘图</strong>：通过 <code>CanvasRenderingContext2D</code> API 实现基本图形（线条、矩形、圆形等）。</li><li><strong>3D 绘图</strong>：通过 WebGL API 支持复杂的 3D 渲染（需要浏览器支持）。</li></ul></li><li><p><strong>实时操作</strong><br> 可以通过 JavaScript 动态修改画布内容，适合需要频繁更新的场景（如数据可视化、游戏）。</p></li></ol><h3 id="_2、基本用途" tabindex="-1"><a class="header-anchor" href="#_2、基本用途"><span>2、基本用途</span></a></h3><ul><li><strong>绘制形状</strong>：线条、矩形、圆形、多边形等。</li><li><strong>渲染文本</strong>：自定义字体、颜色和样式。</li><li><strong>图像处理</strong>：加载、裁剪、滤镜、像素级操作。</li><li><strong>动画</strong>：通过逐帧绘制实现动态效果。</li><li><strong>游戏开发</strong>：结合键盘/鼠标事件实现交互式游戏。</li><li><strong>数据可视化</strong>：绘制图表（折线图、柱状图、散点图）。</li></ul><h3 id="二、常用-api" tabindex="-1"><a class="header-anchor" href="#二、常用-api"><span>二、常用 API</span></a></h3><ul><li><p><strong>形状绘制</strong></p><ul><li><code>fillRect(x, y, width, height)</code>：填充矩形。</li><li><code>strokeRect(x, y, width, height)</code>：绘制矩形边框。</li><li><code>arc(x, y, radius, startAngle, endAngle)</code>：绘制圆弧。</li></ul></li><li><p><strong>路径操作</strong></p><ul><li><code>beginPath()</code>：开始新路径。</li><li><code>moveTo(x, y)</code>：移动画笔到指定坐标。</li><li><code>lineTo(x, y)</code>：绘制直线到指定坐标。</li><li><code>stroke()</code>：描边路径。</li><li><code>fill()</code>：填充闭合路径。</li></ul></li><li><p><strong>图像处理</strong></p><ul><li><code>drawImage(image, x, y)</code>：绘制图片。</li><li><code>getImageData()</code>：获取像素数据。</li><li><code>putImageData()</code>：修改像素数据。</li></ul></li><li><p><strong>变换与动画</strong></p><ul><li><code>translate(x, y)</code>：平移坐标系。</li><li><code>rotate(angle)</code>：旋转画布。</li><li><code>requestAnimationFrame()</code>：实现流畅动画。</li></ul></li></ul><h2 id="三、简单示例" tabindex="-1"><a class="header-anchor" href="#三、简单示例"><span>三、简单示例</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">canvas</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myCanvas</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">400</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">200</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">canvas</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">获取</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Canvas</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">上下文</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">canvas</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getElementById</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myCanvas</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">canvas</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getContext</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">绘制红色矩形</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">fillStyle</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">red</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fillRect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">50</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">50</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">80</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">绘制蓝色边框圆形</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">beginPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">arc</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">250</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">40</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">PI</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">strokeStyle</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">blue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ctx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">stroke</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、优点与缺点" tabindex="-1"><a class="header-anchor" href="#四、优点与缺点"><span>四、优点与缺点</span></a></h2><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>高性能，适合复杂图形和实时渲染。</td><td>绘制的图形是静态的，无法直接绑定事件（需手动计算坐标）。</td></tr><tr><td>支持像素级操作（如滤镜、图像处理）。</td><td>文本渲染功能较弱（对比 SVG）。</td></tr><tr><td>跨浏览器兼容性好。</td><td>无法缩放后保持清晰（位图特性）。</td></tr></tbody></table><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结"><span>五、总结</span></a></h2><p>Canvas 是 HTML5 中强大的绘图工具，适合需要高性能、动态图形渲染的场景（如游戏、数据可视化）。开发者通过 JavaScript 直接操作像素，灵活度高，但需注意其位图特性带来的限制。对于简单图形或需要事件交互的场景，可结合 SVG 使用。</p>`,14)]))}const k=a(p,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/Html/8tz0sbca/","title":"Canvas 简介","lang":"zh-CN","frontmatter":{"title":"Canvas 简介","createTime":"2025/03/10 17:03:19","permalink":"/Html/8tz0sbca/"},"headers":[],"readingTime":{"minutes":2.28,"words":685},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Html/2.Canvas 简介.md"}');export{k as comp,d as data};
