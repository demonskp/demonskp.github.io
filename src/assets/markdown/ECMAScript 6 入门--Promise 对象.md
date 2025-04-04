所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

## 简单解读

Promise从字面意义就是承诺。而承诺的特点是，一旦定下就不可以改变承诺的内容，也无法取消。所以Promise具有以下几个特点

    1. 对象不会受到外界的影响，一诺千金不可改变。而Promise有三种状态，pending（进行中）、fulfilled（已成功）和rejected（已失败）。这也同时对应了Promise常用的三个函数，new Promise()（进行中）、resolv()（已成功）和reject()（已失败）。

    2. 承诺都是链式的，比如：我承诺(Promise)我王境泽绝对不吃你一口饭！,成功了(fulfilled)我就是铁骨铮铮，否则(rejected)我就死外边从这儿跳下去。


## 基本用法

```
var promise = new Promise(function(resolve,reject){
    if(wjz.eat()){
        // 失败
        reject("真香！");
    }else{
        // 成功
        resolve("铁骨铮铮王境泽！");
    }
});
promise.then(function(json) {
    return json;
}).then(function(post) {
    // ..."铁骨铮铮王境泽！"
    console.log(post);
}).catch(function(err){
    // ..."真香！"
    console.log(err);
});
```

这一段伪代码表明了以下几点

1. Promise对象可以链式调用。

2. 每一个then函数都会返回一个新的Promise对象，并以返回值作为下一个then中的函数的参数。

3. 如果不是调用reject方法，而是直接抛错。那么catch当中的err会是错误类型本身，而调用reject方法则err会是其调用的参数。

> 值得注意的一点是，当你调用了reject()或者resolve()来判定这一个承诺是成功了还是失败了之后，就意味着这一个承诺的状态已定承诺结束。之后即使在`resolve("铁骨铮铮王境泽！")`之后抛错也对外界不会有任何影响,但是之后的代码会被执行。

## Promise.prototype.finally()

    finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

简单来说 就和try、catch、finally是差不多的。

```
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

> 值得注意的是，对于finally来说，并不会在意这一次承诺是否执行成功了，还是执行失败了。也因此它的回调函数不接受任何参数

其实无论是catch还是finally，本质上都是特殊实现的then。

## Promise.all()

> Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

all方法接受一个Promise对象组成的数组（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）。

```
const p = Promise.all([p1, p2, p3]);
```
p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

> 简单来说就是all方法会把多个Promise对象合并为一个。当所有Promise完成的时候就会触发p集合对象的then的回调，而其中任意一个方法失败则会调用p的catch回调方法。

作用实例在于异步调用多个API获得全部获得结果后再进行其他操作。

> 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

## Promise.race()

race，字面上的意思是竞赛。

Promise.race()方法同样是对对个Promise对象合并的操作。

综合上面两点来看很明显race和all相反，race的作用就在于当Promise集合当中的其中一个Promise执行完成的时候，集合就变成了已完成状态了。而集合当中所有的Promise变成rejected之后才会使集合变成rejected状态。

## Promise.resolve()

将现有对象转换成一个Promise对象。

> 上方的all和race方法，如果数组当中的对象不是promise对象的话会先调用resolve方法转换成Promise对象。

## Promise.try()

这个方法主要是为了解决，当你不想异步，但是又想利用Promise的流式解决方法。

你可能会想可以直接使用Promise解决问题，例如：

```
    Promise.resolve().then(f)
```

但是这样可能会导致一个问题，如果f是同步函数，那么它会在本轮事件循环的末尾执行。这样你就丢失了他的同步特性。

所以你可以采用try来解决：

```
Promise.try(f).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})
```

> 事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。
