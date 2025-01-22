// {
//   title: 'Group 1',   // 必要的
//   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//   collapsable: false, // 可选的, 默认值是 true,
//   sidebarDepth: 1,    // 可选的, 默认值是 1
//   children: [
//     '/'
//   ]
// },
// 侧边栏配置
module.exports = [{
  title: '首页',
  path: '/'
}, {
  title: '网页基础',
  path: '/browser/',
  children: [{
    title: '1、重绘和重排（回流）',
    path: '/browser/1'
  }, {
    title: '2、浏览器中输入URL到页面显示的全过程',
    path: '/browser/2'
  }, {
    title: '3、前端路由',
    path: '/browser/3'
  }]
}, {
  title: 'JS基础',
  path: '/JavaScript/',
  children: [{
    title: '1、深拷贝和浅拷贝',
    path: '/JavaScript/1'
  }, {
    title: '2、内存泄漏 *',
    path: '/JavaScript/2'
  }, {
    title: '3、箭头函数和普通函数的区别',
    path: '/JavaScript/3'
  }, {
    title: '5、typeof和instanceof的区别',
    path: '/JavaScript/5'
  }, {
    title: '6、数据类型的隐式转换',
    path: '/JavaScript/6'
  }, {
    title: '7、闭包',
    path: '/JavaScript/7'
  }, {
    title: '8、作用域与作用域链',
    path: '/JavaScript/8'
  }, {
    title: '9、事件循环（宏任务、微任务）',
    path: '/JavaScript/9'
  }, {
    title: '10、原型链',
    path: '/JavaScript/10'
  }, {
    title: '11、对象的继承',
    path: '/JavaScript/11'
  }, {
    title: '12、模块化开发（AMD、ES6、CommonJS）',
    path: '/JavaScript/12'
  }, {
    title: '13、IEFI 立即执行函数',
    path: '/JavaScript/13'
  }, {
    title: '14、事件绑定、冒泡、捕获、委托',
    path: '/JavaScript/14'
  }, {
    title: '15、防抖和节流',
    path: '/JavaScript/15'
  }, {
    title: '16、判断对象相等',
    path: '/JavaScript/16'
  }, {
    title: '17、对象的遍历',
    path: '/JavaScript/17'
  }, {
    title: '18、JS异步编程',
    path: '/JavaScript/18'
  }, {
    title: '19、对象的创建',
    path: '/JavaScript/19'
  }, {
    title: '20、this的指向',
    path: '/JavaScript/20'
  }, {
    title: '21、严格模式',
    path: '/JavaScript/21'
  }, {
    title: '22、判断对象的类型',
    path: '/JavaScript/22'
  }, {
    title: '23、JS自定义事件',
    path: '/JavaScript/23'
  }, {
    title: '24、定时器setTimeout()、setInterval()、requestAnimationFrame()',
    path: '/JavaScript/24'
  }, {
    title: '25、JS 脚本的阻塞特性',
    path: '/JavaScript/25'
  }, {
    title: '26、解构赋值',
    path: '/JavaScript/26'
  }, {
    title: '27、Call、Apply、Bind 的区别',
    path: '/JavaScript/27'
  }, {
    title: '28、值域 this 指向',
    path: '/JavaScript/28'
  }, {
    title: '29、数组去重',
    path: '/JavaScript/29'
  }, {
    title: '30、Generator 函数 *',
    path: '/JavaScript/30'
  }, {
    title: '32、什么是并发和并行？JavaScript 中如何实现并发操作？',
    path: '/JavaScript/32'
  }]
}, {
  title: 'Vue相关',
  path: '/vue/',
  children: [{
    title: '1、Vue的基本介绍',
    path: '/vue/1'
  }, {
    title: '2、指令、自定义指令 directive',
    path: '/vue/2'
  }, {
    title: '3、计算属性 computed',
    path: '/vue/3'
  }, {
    title: '4、监听属性 watch',
    path: '/vue/4'
  }, {
    title: '5、计算属性和监听属性的区别',
    path: '/vue/5'
  }, {
    title: '6、过滤器 filter',
    path: '/vue/6'
  }, {
    title: '7、混入 mixin',
    path: '/vue/7'
  }, {
    title: '8、插槽',
    path: '/vue/8'
  }, {
    title: '9、nextTick()',
    path: '/vue/9'
  }, {
    title: '10、Transition 过渡效果',
    path: '/vue/10'
  }, {
    title: '11、TransitionGroup 组动画',
    path: '/vue/11'
  }, {
    title: '12、Vuex专题',
    path: '/vue/12'
  }, {
    title: '13、Vue2和Vue3的区别 *',
    path: '/vue/13'
  }, {
    title: '14、Vue的组件通信',
    path: '/vue/14'
  }, {
    title: '15、如何利用路由守卫实现鉴权',
    path: '/vue/15'
  }, {
    title: '16、Vue3 中的Composition API是什么？它与Options API有什么区别？',
    path: '/vue/16'
  }, {
    title: '17、Vue3 如何实现性能的提升？',
    path: '/vue/17'
  }, {
    title: '18、Vue3 中的 v-model 指令有什么变化？',
    path: '/vue/18'
  }, {
    title: '19、Vue3 Teleport 组件',
    path: '/vue/19'
  }, {
    title: '20、Vue3 Suspense 组件',
    path: '/vue/20'
  }, {
    title: '21、Vue3 Fragments 组件',
    path: '/vue/21'
  }, {
    title: '22、Vue3 中的静态提升是什么？它如何优化组件的渲染性能？',
    path: '/vue/22'
  }, {
    title: '23、Vue3 中的渐进式图片加载如何实现',
    path: '/vue/23'
  }, {
    title: '24、Vue3 中的异步组件如何加载？',
    path: '/vue/24'
  }, {
    title: '25、为什么 Vue 的 data 要使用函数 return',
    path: '/vue/25'
  }, {
    title: '26、Vue 中的 SSR 是什么？有什么优势和适用场景？',
    path: '/vue/26'
  }, {
    title: '27、Vue3 实现滚动列表',
    path: '/vue/27'
  }]
}, {
  title: '算法、设计模式',
  path: '/Algorithm/',
  children: [{
    title: '1、发布/订阅模式',
    path: '/Algorithm/1'
  }, {
    title: '2、快速排序算法',
    path: '/Algorithm/2'
  }, {
    title: '3、二分查找算法',
    path: '/Algorithm/3'
  }, {
    title: '4、先序遍历、中序遍历、后序遍历',
    path: '/Algorithm/4'
  }, {
    title: '5、观察者模式',
    path: '/Algorithm/5'
  }]
}, {
  title: '网络相关',
  path: '/network/',
  children: [{
    title: '1、Http协议',
    path: '/network/1'
  }, {
    title: '2、HTTPS 协议',
    path: '/network/2'
  }, {
    title: '3、会话 Cookie和Session',
    path: '/network/3'
  }, {
    title: '4、同源策略、CORS',
    path: '/network/4'
  }, {
    title: '5、跨域',
    path: '/network/5'
  }, {
    title: '6、Restful 风格 API',
    path: '/network/6'
  }, {
    title: '7、XMLHttpRequest、AJAX、Fetch API',
    path: '/network/7'
  }, {
    title: '8、WebSocket 专题',
    path: '/network/8'
  }, {
    title: '9、Http缓存、Web缓存',
    path: '/network/9'
  }, {
    title: '10、ETag',
    path: '/network/10'
  }, {
    title: '11、Gzip 压缩',
    path: '/network/11'
  }, {
    title: '12、正向代理和反向代理',
    path: '/network/12'
  }, {
    title: '13、CDN 加速',
    path: '/network/13'
  }, {
    title: '14、GraphQL',
    path: '/network/14'
  }, {
    title: '15、TCP/IP 协议',
    path: '/network/15'
  }, {
    title: '16、带宽和吞吐量',
    path: '/network/16'
  }, {
    title: '17、DNS、DNS 解析',
    path: '/network/17'
  }, {
    title: '18、网络安全及常见的网络攻击手段',
    path: '/network/18'
  }]
}, {
  title: 'Node.js',
  path: '/nodejs/',
  children: [{
    title: 'Node.js',
    path: '/nodejs/nodejs/',
    children: [{
      title: '1、Node.js简介',
      path: '/nodejs/nodejs/1',
    }, {
      title: '2、常用的命令',
      path: '/nodejs/nodejs/2'
    }, {
      title: '3、Node.js 和 浏览器之间的区别',
      path: '/nodejs/nodejs/3'
    }, {
      title: '4、NPM 包管理器',
      path: '/nodejs/nodejs/4'
    }, {
      title: '5、NPM、PNPM、Yarn 的对比',
      path: '/nodejs/nodejs/5'
    }, {
      title: '6、软链接和硬链接',
      path: '/nodejs/nodejs/6'
    }]
  }]
}]
