import{_ as a,c as i,a as n,o as p}from"./app-CrDOs8BQ.js";const t={};function l(e,s){return p(),i("div",null,s[0]||(s[0]=[n(`<div class="hint-container warning"><p class="hint-container-title">二者区别</p><ul><li><mark>typeof</mark> 适用于 <strong>基本数据类型</strong> 和 <strong>函数类型</strong> 的判断。</li></ul><p>对于这些基础数据类型，typeof 可以区分出它们的类型，但对于其他数据类型，通过 typeof 只能返回&quot;object&quot;。</p><ul><li><mark>instanceof</mark> 适用于<strong>判断对象的具体类型</strong></li></ul><p>它可以判断某个对象是否属于<strong>某个特定的构造函数或类的实例</strong>，但<strong>无法判断基础数据类型</strong>。</p></div><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof"><span>typeof</span></a></h2><p>在 JavaScript 中，typeof 和 instanceof 是两个用于判断数据类型的操作符，它们有一些区别。</p><p><strong>typeof 用于确定变量的数据类型，它返回一个表示数据类型的字符串。</strong></p><p>例如：</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hello</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">42</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&quot;number&quot;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&quot;boolean&quot;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{};</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&quot;function&quot;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">undefined</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&quot;undefined&quot;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&quot;object&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，typeof 返回的结果都是字符串，而不是实际的数据类型。</p><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof"><span>instanceof</span></a></h2><p>instanceof 用于检查对象是否属于 <strong>某个类或构造函数的实例</strong>。它会通过检查对象的 <strong>原型链</strong> 来确定对象是否是指定类的实例。</p><p>例如：</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arr</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arr</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">instanceof</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{};</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">instanceof</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">str</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hello</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">str</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">instanceof</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const k=a(t,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/Javascript/bldf1h4n/","title":"typeof 和 instanceof 有什么区别","lang":"zh-CN","frontmatter":{"title":"typeof 和 instanceof 有什么区别","createTime":"2025/03/12 12:23:52","permalink":"/Javascript/bldf1h4n/"},"headers":[],"readingTime":{"minutes":1.1,"words":329},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Javascript/99.面试题/2.typeof 和 instanceof 有什么区别.md"}');export{k as comp,c as data};
