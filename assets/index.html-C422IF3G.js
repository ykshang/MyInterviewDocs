import{_ as e,c as n,a as t,o as s}from"./app-CrDOs8BQ.js";const o={};function r(c,a){return s(),n("div",null,a[0]||(a[0]=[t('<p>遇到的打包报错主要集中在以下几类问题上</p><h3 id="_1、依赖下载超时" tabindex="-1"><a class="header-anchor" href="#_1、依赖下载超时"><span>1、依赖下载超时</span></a></h3><p><strong>具体原因：</strong> 项目使用了一些内部镜像库没有的包，<strong>回源</strong> 到 NPM 的时候超时了</p><p><strong>解决方案：</strong> 将依赖包压缩上传到 Git 仓库，使用<code>Git LFS大文件存储</code> 管理，构建不再执行安装命令，直接使用<code>tar</code>命令去解压依赖包</p><h3 id="_2、构建服务器的环境版本导致的版本兼容性问题" tabindex="-1"><a class="header-anchor" href="#_2、构建服务器的环境版本导致的版本兼容性问题"><span>2、构建服务器的环境版本导致的版本兼容性问题</span></a></h3><p><strong>具体原因：</strong> 云龙流水线上派发构建任务时是随机指定一台服务器去执行构建任务，这些服务器上安装的 Node.js 版本可能不一样。下载依赖包的时候，版本可能会被 Node.js 的版本影响，导致下载下来的依赖包和其他依赖包冲突。</p><p><strong>解决方案：</strong> 在构建脚本中指定运行环境的版本，后来发现流水线失败的概率没有明显改善。将依赖包压缩上传到 Git 仓库，使用<code>Git LFS大文件存储</code> 管理，构建不再执行安装命令，直接使用<code>tar</code>命令去解压依赖包，顺利解决该问题</p><h3 id="_3、eslint-语法报错" tabindex="-1"><a class="header-anchor" href="#_3、eslint-语法报错"><span>3、ESlint 语法报错</span></a></h3><p><strong>具体原因：</strong> 历史遗留和人为新增</p><p><strong>解决方案：</strong> 由于一些部门规定，主流的集成插件不允许使用，只能手动修改并重新提交代码。</p><h3 id="_4、canvas-贴图导致的跨域问题" tabindex="-1"><a class="header-anchor" href="#_4、canvas-贴图导致的跨域问题"><span>4、Canvas 贴图导致的跨域问题</span></a></h3><p><strong>具体原因：</strong> <code>AUI</code>脚手架在打包的时候，内置的插件会将一些资源如图片自动上传到静态资源服务器，从而导致代码中的图片引用变成了一个第三方的 URL 地址，和当前域名不一致，导致 Canvas 在贴图的时候包跨域问题。</p><p><strong>解决方案：</strong> 查阅官方文档，可以在根目录下创建一个<code>static</code>文件夹，将图片放进去，这样<code>AUI</code>在构建的时候，会自动忽略，直接将该图片打包到结果中。</p>',13)]))}const p=e(o,[["render",r],["__file","index.html.vue"]]),i=JSON.parse('{"path":"/Webpack/07ndljzb/","title":"你遇到过那些 Webpack 的打包问题？","lang":"zh-CN","frontmatter":{"title":"你遇到过那些 Webpack 的打包问题？","createTime":"2025/03/15 14:24:21","permalink":"/Webpack/07ndljzb/"},"headers":[],"readingTime":{"minutes":1.79,"words":536},"git":{"updatedTime":1742050940000,"contributors":[{"name":"kangkang shang","username":"kangkang shang","email":"535634238@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/kangkang shang?v=4","url":"https://github.com/kangkang shang"}]},"filePathRelative":"notes/Webpack/99.面试题/你遇到过那些 Webpack 的打包问题？.md"}');export{p as comp,i as data};
