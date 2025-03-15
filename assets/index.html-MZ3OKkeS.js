import{_ as a,c as i,a as n,o as t}from"./app-CrDOs8BQ.js";const l={};function p(e,s){return t(),i("div",null,s[0]||(s[0]=[n(`<div class="hint-container tip"><p class="hint-container-title">主要作用</p><p>分支的操作：新建，修改，删除，查看。不具备切换分支的能力<br> 分支的实质是一个指针。</p></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[--color[=&lt;when&gt;]</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">--no-color]</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[--show-current]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-v</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--abbrev</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">=&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--no-abbrev</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--column</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">=&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--no-column</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--sort</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">=&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">key</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--merged</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--no-merged</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--contains</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--no-contains</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">commit</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--points-at</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">object</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--format</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">=&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">format</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">r</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">--</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">remotes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">--</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">all</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)]</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">--list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pattern</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">…​</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[--track</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">--no-track]</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[-f]</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branchname</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">start-point</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(--set-upstream-to=&lt;upstream&gt;</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">-u</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">upstrea</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">m</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branchname</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--unset-upstream</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[&lt;branchname&gt;]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(-m</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">-M</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">oldbranch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">newbranch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(-c</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">-C</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">oldbranch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">newbranch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(-d</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">-D</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">branchname</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">…​</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--edit-description</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[&lt;branchname&gt;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用的参数" tabindex="-1"><a class="header-anchor" href="#常用的参数"><span>常用的参数</span></a></h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">解释</th></tr></thead><tbody><tr><td style="text-align:left;">-a, --all</td><td style="text-align:left;">列出本地和远端的所有分支</td></tr><tr><td style="text-align:left;">-d, --delete</td><td style="text-align:left;">删除已经完全合并的分支，<strong>禁止删除当前所在的分支</strong>，如果想删除需要切换到其他分支在操作。</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">删除分支，即便它未被合并，可以理解为强制删除</td></tr><tr><td style="text-align:left;">-v, --verbose</td><td style="text-align:left;"><strong>分支的实质是个指针</strong>，此参数实质显示的是指向的commit的hash、message，连续输入两次额外显示跟踪关系</td></tr><tr><td style="text-align:left;">-u, --set-upstream-to &lt;upstream&gt;</td><td style="text-align:left;">给分支添加跟踪关系</td></tr><tr><td style="text-align:left;">--unset-upstream</td><td style="text-align:left;">移除分支的跟踪关系</td></tr><tr><td style="text-align:left;">-r, --remotes</td><td style="text-align:left;">查看远端分支</td></tr><tr><td style="text-align:left;">-m, --move</td><td style="text-align:left;">对一个分支及相应的reflog进行移动和重命名</td></tr><tr><td style="text-align:left;">-c, --copy</td><td style="text-align:left;">对一个分支及相应的reflog进行复制</td></tr><tr><td style="text-align:left;">-C</td><td style="text-align:left;">复制一个分支，即便不存在</td></tr><tr><td style="text-align:left;">-l, --list</td><td style="text-align:left;">列出本地分支列表</td></tr><tr><td style="text-align:left;">-f, --force</td><td style="text-align:left;">强制执行，用于移动、复制、删除等操作时</td></tr><tr><td style="text-align:left;">--edit-description</td><td style="text-align:left;">给分支添加描述,使用vim编辑器修改</td></tr></tbody></table><h2 id="常用命令举例" tabindex="-1"><a class="header-anchor" href="#常用命令举例"><span>常用命令举例：</span></a></h2><ul><li><p>创建新分支</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch_name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>查看本地分支列表</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-l</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看远端分支列表</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-r</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--remotes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看本地和远端的全部分支</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-a</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--all</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基于某次提交创建分支</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hotfix</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">006b1c5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>新建hotfix分支</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hotfix</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>删除hotfix分支</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">-D</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hotfix</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>修改分支描述，进入vim编辑完成后，退出</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">branch</span><span class="space"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">--edit-description</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">主干代码</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Please</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">edit</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">the</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">description</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">for</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">the</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">branch</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">master</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Lines</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">starting</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">with</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&#39;#&#39;</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">will</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">be</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">stripped.</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">D:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">kangkang_blog</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.git</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">EDIT_DESCRIPTION</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">unix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">12</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">04</span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">28</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">12</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2020</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">全部</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,7)]))}const k=a(l,[["render",p],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/Git/340brab4/","title":"branch","lang":"zh-CN","frontmatter":{"title":"branch","createTime":"2025/03/13 20:16:59","permalink":"/Git/340brab4/"},"headers":[],"readingTime":{"minutes":1.79,"words":537},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Git/1.基础语法/4.branch.md"}');export{k as comp,d as data};
