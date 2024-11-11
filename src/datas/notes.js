import elementUI from "@/assets/markdown/img/elementUI.png"

export const notes = [
  {
    id: '1',
    title: '一个神奇的问题',
    description: `在改之前旧代码的时候(jquery)，碰到了一个神奇的问题。某个上传的功能，唯独在测试那里，无法使用会报一个json解析的错误。一看代码发现会parseJSON一个字符串，这么看完全没问题`,
    createTime: '2021.08.30',
    tags: ['问题'],
    component: ()=>import("@/assets/markdown/一个神奇的问题.md"),
    poster: '',
  },
  {
    id: '2',
    title: 'elementUI踩坑',
    description: `因为同一页面下写了多个表单，我需要对所有表单都进行校验无误后再向后台发起请求。而当我通过form的validate方法去校验时，发现其返回的promise永远都停留在pending状态，不会结束。`,
    createTime: '2021.12.31',
    tags: ['问题', 'element-ui'],
    component: ()=>import("@/assets/markdown/elementUI踩坑.md"),
    poster: elementUI,
  },
  {
    id: '3',
    title: 'ECMAScript 6 入门--let、const和变量解构',
    description: `主要是阅读阮一峰老师的《ES6标准入门》这一本书所做的读书笔记。作为掌握ES6相关特性的一个过程。同时也作为之后速查的一个手册。`,
    createTime: '2019.07.15',
    tags: ['ECMAScript 6 入门'],
    component: ()=>import("@/assets/markdown/ECMAScript 6 入门--let、const和变量解构.md"),
    poster: '',
  },
  {
    id: '4',
    title: 'ECMAScript 6 入门--Promise 对象',
    description: `所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。`,
    createTime: '2019.07.15',
    tags: ['ECMAScript 6 入门'],
    component: ()=>import("@/assets/markdown/ECMAScript 6 入门--Promise 对象.md"),
    poster: '',
  },
  {
    id: '5',
    title: 'ECMAScript 6 入门--async函数',
    description: `async函数,是ES2017标准引入的解决一步操作的一个标准。简单来讲就是，你可以通过async标记一个函数，将其标记为一个异步函数,会将它的返回值包装成一个Promise对象。而其本质则是，Generator函数的一个语法糖。`,
    createTime: '2019.07.15',
    tags: ['ECMAScript 6 入门'],
    component: ()=>import("@/assets/markdown/ECMAScript 6 入门--async函数.md"),
    poster: '',
  },
  {
    id: '6',
    title: 'ES2016-ES2017入门新特性',
    description: `了解语言的新特性是非常重要的一件事。之前一直都搞不太明白ES6之后，JS版本命名的规范。网上很多人也没有弄得太清楚。在ES6之后，ECMAScript委员会决定换一种命名方式，也就是以年份来命名。现在我也简单总结了一下一些新的规范的内容，至于具体的提案大家可以在github上看到相关内容。`,
    createTime: '2020.04.26',
    tags: ['ECMAScript 6 入门'],
    component: ()=>import("@/assets/markdown/ES2016-ES2017入门新特性.md"),
    poster: '',
  },
  {
    id: '7',
    title: '新版Chrome(117), form target行为不一致问题',
    description: `线上发版一个旧项目后发现在导入文件时，出现json解析错误`,
    createTime: '2023.09.19',
    tags: ['ECMAScript 6 入门'],
    component: ()=>import("@/assets/markdown/新版Chrome(117), form target行为不一致问题.md"),
    poster: '',
  },
  {
    id: '8',
    title: 'form嵌套导致提交按钮刷新页面问题',
    description: `在开发过程中突然发现，某一个表单内的一个组件一点击按钮就会导致页面刷新。这个页面的结构类似于一个 Form 表单，内部有很多组件。`,
    createTime: '2024.10.01',
    tags: ['问题'],
    component: ()=>import("@/assets/markdown/form嵌套导致提交按钮刷新页面问题.md"),
    poster: '',
  },
  {
    id: '9',
    title: 'node部署问题',
    description: `部署时选用18.20.4镜像报错, 查到134为内存溢出等受环境影响而退出的错误`,
    createTime: '2024.10.01',
    tags: ['问题'],
    component: ()=>import("@/assets/markdown/node部署问题.md"),
    poster: '',
  },
  {
    id: '10',
    title: '一些编程习惯我怎么选',
    description: `关于编程习惯，或者一些编程范式。每个人的选择可能都各有不同。每次换工作之后可能都会有一些见解不一样的地方，因此也在此记录一下自己平常编程的一些习惯。`,
    createTime: '2024.10.01',
    tags: [],
    component: ()=>import("@/assets/markdown/一些编程习惯我怎么选.md"),
    poster: '',
  },
].reverse();

const map = {};

notes.forEach((item)=>{
  if(!notes[item.id]) {
    map[item.id] = item;
  }
})

export const notesMap = map;