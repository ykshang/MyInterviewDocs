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
let sidebarList = [{
  title: '首页',
  path: '/'
}, {
  title: '网页基础',
  path: '/browser/',
  sortNext: true,
  children: [{
    title: '重绘和重排（回流）',
    path: '/browser/1'
  }, {
    title: '浏览器中输入URL到页面显示的全过程',
    path: '/browser/2'
  }, {
    title: '前端路由',
    path: '/browser/3'
  }]
}, {
  title: 'JS基础',
  path: '/JavaScript/',
  sortNext: true,
  children: [{
    title: '深拷贝和浅拷贝',
    path: '/JavaScript/1'
  }, {
    title: '内存泄漏 *',
    path: '/JavaScript/2'
  }, {
    title: '箭头函数和普通函数的区别',
    path: '/JavaScript/3'
  }, {
    title: 'typeof和instanceof的区别',
    path: '/JavaScript/5'
  }, {
    title: '数据类型的隐式转换',
    path: '/JavaScript/6'
  }, {
    title: '闭包',
    path: '/JavaScript/7'
  }, {
    title: '作用域与作用域链',
    path: '/JavaScript/8'
  }, {
    title: '事件循环（宏任务、微任务）',
    path: '/JavaScript/9'
  }, {
    title: '原型链',
    path: '/JavaScript/10'
  }, {
    title: '对象的继承',
    path: '/JavaScript/11'
  }, {
    title: '模块化开发（AMD、ESCommonJS）',
    path: '/JavaScript/12'
  }, {
    title: 'IEFI 立即执行函数',
    path: '/JavaScript/13'
  }, {
    title: '事件绑定、冒泡、捕获、委托',
    path: '/JavaScript/14'
  }, {
    title: '防抖和节流',
    path: '/JavaScript/15'
  }, {
    title: '判断对象相等',
    path: '/JavaScript/16'
  }, {
    title: '对象的遍历',
    path: '/JavaScript/17'
  }, {
    title: 'JS异步编程',
    path: '/JavaScript/18'
  }, {
    title: '对象的创建',
    path: '/JavaScript/19'
  }, {
    title: 'this的指向',
    path: '/JavaScript/20'
  }, {
    title: '严格模式',
    path: '/JavaScript/21'
  }, {
    title: '判断对象的类型',
    path: '/JavaScript/22'
  }, {
    title: 'JS自定义事件',
    path: '/JavaScript/23'
  }, {
    title: '定时器setTimeout()、setInterval()、requestAnimationFrame()',
    path: '/JavaScript/24'
  }, {
    title: 'JS 脚本的阻塞特性',
    path: '/JavaScript/25'
  }, {
    title: '解构赋值',
    path: '/JavaScript/26'
  }, {
    title: 'Call、Apply、Bind 的区别',
    path: '/JavaScript/27'
  }, {
    title: '值域 this 指向',
    path: '/JavaScript/28'
  }, {
    title: '数组去重',
    path: '/JavaScript/29'
  }, {
    title: 'Generator 函数 *',
    path: '/JavaScript/30'
  }, {
    title: '什么是并发和并行？JavaScript 中如何实现并发操作？',
    path: '/JavaScript/32'
  }]
}, {
  title: 'Vue相关',
  path: '/vue/',
  sortNext: true,
  children: [{
    title: 'Vue的基本介绍',
    path: '/vue/1'
  }, {
    title: '指令、自定义指令 directive',
    path: '/vue/2'
  }, {
    title: '计算属性 computed',
    path: '/vue/3'
  }, {
    title: '监听属性 watch',
    path: '/vue/4'
  }, {
    title: '计算属性和监听属性的区别',
    path: '/vue/5'
  }, {
    title: '过滤器 filter',
    path: '/vue/6'
  }, {
    title: '混入 mixin',
    path: '/vue/7'
  }, {
    title: '插槽',
    path: '/vue/8'
  }, {
    title: 'nextTick()',
    path: '/vue/9'
  }, {
    title: 'Transition 过渡效果',
    path: '/vue/10'
  }, {
    title: 'TransitionGroup 组动画',
    path: '/vue/11'
  }, {
    title: 'Vuex专题',
    path: '/vue/12'
  }, {
    title: 'Vue2和Vue3的区别 *',
    path: '/vue/13'
  }, {
    title: 'Vue的组件通信',
    path: '/vue/14'
  }, {
    title: '如何利用路由守卫实现鉴权',
    path: '/vue/15'
  }, {
    title: 'Vue3 中的Composition API是什么？它与Options API有什么区别？',
    path: '/vue/16'
  }, {
    title: 'Vue3 如何实现性能的提升？',
    path: '/vue/17'
  }, {
    title: 'Vue3 中的 v-model 指令有什么变化？',
    path: '/vue/18'
  }, {
    title: 'Vue3 Teleport 组件',
    path: '/vue/19'
  }, {
    title: 'Vue3 Suspense 组件',
    path: '/vue/20'
  }, {
    title: 'Vue3 Fragments 组件',
    path: '/vue/21'
  }, {
    title: 'Vue3 中的静态提升是什么？它如何优化组件的渲染性能？',
    path: '/vue/22'
  }, {
    title: 'Vue3 中的渐进式图片加载如何实现',
    path: '/vue/23'
  }, {
    title: 'Vue3 中的异步组件如何加载？',
    path: '/vue/24'
  }, {
    title: '为什么 Vue 的 data 要使用函数 return',
    path: '/vue/25'
  }, {
    title: 'Vue 中的 SSR 是什么？有什么优势和适用场景？',
    path: '/vue/26'
  }, {
    title: 'Vue3 实现滚动列表',
    path: '/vue/27'
  }]
}, {
  title: '算法、设计模式',
  path: '/Algorithm/',
  sortNext: true,
  children: [{
    title: '发布/订阅模式',
    path: '/Algorithm/1'
  }, {
    title: '快速排序算法',
    path: '/Algorithm/2'
  }, {
    title: '二分查找算法',
    path: '/Algorithm/3'
  }, {
    title: '先序遍历、中序遍历、后序遍历',
    path: '/Algorithm/4'
  }, {
    title: '观察者模式',
    path: '/Algorithm/5'
  }]
}, {
  title: '网络相关',
  path: '/network/',
  sortNext: true,
  children: [{
    title: 'Http协议',
    path: '/network/1'
  }, {
    title: 'HTTPS 协议',
    path: '/network/2'
  }, {
    title: '会话 Cookie和Session',
    path: '/network/3'
  }, {
    title: '同源策略、CORS',
    path: '/network/4'
  }, {
    title: '跨域',
    path: '/network/5'
  }, {
    title: 'Restful 风格 API',
    path: '/network/6'
  }, {
    title: 'XMLHttpRequest、AJAX、Fetch API',
    path: '/network/7'
  }, {
    title: 'WebSocket 专题',
    path: '/network/8'
  }, {
    title: 'Http缓存、Web缓存',
    path: '/network/9'
  }, {
    title: 'ETag',
    path: '/network/10'
  }, {
    title: 'Gzip 压缩',
    path: '/network/11'
  }, {
    title: '正向代理和反向代理',
    path: '/network/12'
  }, {
    title: 'CDN 加速',
    path: '/network/13'
  }, {
    title: 'GraphQL',
    path: '/network/14'
  }, {
    title: 'TCP/IP 协议',
    path: '/network/15'
  }, {
    title: '带宽和吞吐量',
    path: '/network/16'
  }, {
    title: 'DNS、DNS 解析',
    path: '/network/17'
  }, {
    title: '网络安全及常见的网络攻击手段',
    path: '/network/18'
  }]
}, {
  title: 'Node.js 相关',
  path: '/nodejs/',
  initialOpenGroupIndex: -1,
  children: [{
    title: 'Node.js',
    path: '/nodejs/node/',
    sortNext: true,
    children: [{
      title: 'Node.js简介',
      path: '/nodejs/node/1',
    }, {
      title: 'Node.js 和 浏览器之间的区别',
      path: '/nodejs/node/2'
    }, {
      title: 'NPM 包管理器',
      path: '/nodejs/node/3'
    }, {
      title: 'NPM、PNPM、Yarn 的对比',
      path: '/nodejs/node/4'
    }, {
      title: '软链接和硬链接',
      path: '/nodejs/node/5'
    }, {
      title: '内置模块 fs',
      path: '/nodejs/node/6'
    }, {
      title: '内置模块 path',
      path: '/nodejs/node/7'
    }, {
      title: '内置模块 Buffer',
      path: '/nodejs/node/8'
    }, {
      title: '内置模块 http',
      path: '/nodejs/node/9'
    }, {
      title: '内置模块 URL',
      path: '/nodejs/node/10'
    }, {
      title: '流(Stream)和管道(Pipe)',
      path: '/nodejs/node/11'
    }, {
      title: '跨域问题',
      path: '/nodejs/node/12'
    }, {
      title: '缓存处理',
      path: '/nodejs/node/13'
    }, {
      title: '数据库',
      path: '/nodejs/node/14'
    }, {
      title: '如何处理并发请求',
      path: '/nodejs/node/15'
    }, {
      title: '防盗链',
      path: '/nodejs/node/16'
    }, {
      title: '错误处理',
      path: '/nodejs/node/17'
    }, {
      title: '代码调试',
      path: '/nodejs/node/18'
    }]
  }, {
    title: 'Express',
    path: '/nodejs/express/',
    sortNext: true,
    children: [{
      title: 'Express 简介',
      path: '/nodejs/express/1'
    }, {
      title: '路由',
      path: '/nodejs/express/2'
    }, {
      title: '中间件',
      path: '/nodejs/express/3'
    }, {
      title: '静态文件托管',
      path: '/nodejs/express/4'
    }, {
      title: '视图引擎 View Engine',
      path: '/nodejs/express/5'
    }, {
      title: '模块化路由 Router',
      path: '/nodejs/express/6'
    }, {
      title: '生成器工具 express-generator',
      path: '/nodejs/express/7'
    }]
    // }, {
    //   title: '数据库',
    //   path: '/nodejs/database/',
    //   sortNext: true,
    //   children: [{
    //     title: 'MangoDB 简介',
    //     path: '/nodejs/database/1'
    //   }, {
    //     title: 'MangoDB 使用',
    //     path: '/nodejs/database/2'
    //   }]
  }]
}, {
  title: '数据库',
  path: '/database/',
  initialOpenGroupIndex: -1,
  children: [{
    title: 'MangoDB',
    path: '/database/MangoDB/',
    sortNext: true,
    children: [{
      title: '简介',
      path: '/database/MangoDB/1',
    }, {
      title: '下载、安装',
      path: '/database/MangoDB/2',
    }, {
      title: '命令行操作',
      path: '/database/MangoDB/3',
    }]
  }, {
    title: 'MySql',
    path: '/database/MySql/'
  }]
}]
// 格式化，增加序列号
function sort(list, sortFlag) {
  if (list.length > 0 && !!sortFlag) {
    list.forEach((item) => {
      let { title, path } = item;
      if (title && path) {
        item.index = path.split('/').pop();
        item.title = [item.index, title].join('、');
      } else {
        item.title = '404 目录不存在';
        item.index = '0';
      };
    });
    list.sort((a, b) => {
      return Number(a.index) - Number(b.index);
    });
  }
  list.forEach((item) => {
    if (item.children && item.children.length > 0) {
      item.children = sort(item.children, item.sortNext);
    }
  });
  return list;
}
sidebarList = sort(sidebarList, false);
module.exports = sidebarList;
