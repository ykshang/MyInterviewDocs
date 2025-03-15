import{_ as n,c as p,b as a,a as e,t as l,o as t}from"./app-CrDOs8BQ.js";const h={};function k(i,s){return t(),p("div",null,[s[0]||(s[0]=a("p",null,"静态提升是 Vue3 引入的一种编译优化技术，旨在提高组件的渲染性能。",-1)),a("p",null,"在 Vue2 中，模板中的每个插值表达式（如"+l(i.name)+"）和指令（如 v-if、v-for）都会在每次组件重新渲染时被动态解析和计算。这意味着即使模板中的一部分在组件生命周期内保持不变，Vue2 也会重复计算这些表达式，导致性能下降。",1),s[1]||(s[1]=e(`<p>而在 Vue3 中，编译器会在编译阶段静态分析模板，并将其转换为一种基于函数的中间表示（SSR）。在这个过程中，Vue3 会检测哪些部分的模板是静态的（不会变化），并通过静态提升技术将其提升到编译阶段，使得这些部分在每次组件渲染时都不会被重新计算，从而提高了渲染性能。</p><p>其本质就是：将代码中<strong>不变的变量</strong>在编译阶段<strong>提升为常量</strong>。</p><p><strong>静态提升的作用是什么？</strong></p><p>静态提升的主要作用是<strong>优化 Vue 组件的渲染性能</strong>，减少不必要的计算和重新渲染。通过静态提升，Vue3 能够在编译阶段识别出静态的模板部分，并在组件初始化时一次性计算和渲染这些静态内容，之后即使这些静态部分所依赖的数据发生变化，也不会触发额外的计算和渲染过程，从而提高了整体性能。</p><p>为了更好地理解 Vue3 的静态提升，让我们通过一个简单的示例来演示其作用。</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{{ greeting }}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{{ message }}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{{ &quot;here are some words&quot; }}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">greeting</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hello</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Welcome</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">to</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">my</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">blog!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们有一个简单的 Vue 组件，其中包含一个<code>&lt;h1&gt;</code>标签和一个<code>&lt;p&gt;</code>标签，分别显示问候语和消息。</p><p>在 Vue2 中，每次组件重新渲染时，<code>{ { greeting } }</code> 和 <code>{ { message } }</code> 都会被重新计算。</p><p>但是在 Vue3 中，由于静态提升的存在，<code>{ { greeting } }</code> 和 <code>{ { message } }</code> 会被提升到编译阶段，只会在组件初始化时被计算一次，之后即使数据发生变化也不会再次计算，从而提升了性能。</p><p>总的来说，Vue3 的静态提升通过将静态模板部分提升到编译阶段，避免了不必要的计算和重新渲染，从而提高了组件的渲染性能，让应用更加高效和流畅。</p>`,10))])}const d=n(h,[["render",k],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/Vue/ec73uy2k/","title":"Vue3 中的静态提升是什么？它如何优化组件的渲染性能？","lang":"zh-CN","frontmatter":{"title":"Vue3 中的静态提升是什么？它如何优化组件的渲染性能？","createTime":"2025/03/13 23:14:12","permalink":"/Vue/ec73uy2k/"},"headers":[],"readingTime":{"minutes":2.21,"words":664},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Vue/99.面试题/6.Vue3 中的静态提升是什么？它如何优化组件的渲染性能？.md"}');export{d as comp,r as data};
