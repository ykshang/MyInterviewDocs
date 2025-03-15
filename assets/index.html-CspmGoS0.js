import{_ as p,c as l,b as a,a as e,d as i,e as t,g as k,o as h}from"./app-CrDOs8BQ.js";const r={};function d(c,s){const n=k("Folder");return h(),l("div",null,[s[4]||(s[4]=a("p",null,[i("我们可以使用 "),a("code",null,"Express"),i(" 实现静态文件的托管，这样我们就可以通过启动的服务来访问托管的资源。")],-1)),a("p",null,[s[0]||(s[0]=i("我们在")),t(n,{path:"/project"}),s[1]||(s[1]=i(" 文件夹有一个")),s[2]||(s[2]=a("code",null,"server.js",-1)),s[3]||(s[3]=i("文件。其内容为："))]),s[5]||(s[5]=e(`<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">express</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">require</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">express</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">express</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">express</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">static</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">public</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">server</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">listen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">8081</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">host</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">address</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">address</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">port</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">server</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">address</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">应用实例，访问地址为</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://%s:%s</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">%s为占位符，用来传参</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用<code>node server.js</code>启动服务以后，这时候服务器的根目录为<code>/project</code>, 而不是 <code>/public</code>，我们需要注意静态资源文件内部的资源路径写法，很容易因为<strong>根路径</strong> 的问题导致引入失败。</p>`,2))])}const y=p(r,[["render",d],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/Express/kk6q1rz5/","title":"静态文件托管","lang":"zh-CN","frontmatter":{"title":"静态文件托管","createTime":"2025/03/13 20:02:03","permalink":"/Express/kk6q1rz5/"},"headers":[],"readingTime":{"minutes":0.63,"words":188},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Express/1.学习笔记/4.静态文件托管.md"}');export{y as comp,o as data};
