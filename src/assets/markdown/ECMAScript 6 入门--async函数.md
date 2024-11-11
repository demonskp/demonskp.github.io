async函数,是ES2017标准引入的解决一步操作的一个标准。简单来讲就是，你可以通过async标记一个函数，将其标记为一个异步函数,会将它的返回值包装成一个Promise对象。而其本质则是，Generator函数的一个语法糖。

## 基础用法

async函数通常都和await一起使用，其语义化十分明显。async用来表示函数为异步函数，而await则告诉编译器此处需要等待函数执行完毕。

``` JavaScript
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

async function doPrint(){
  await asyncPrint('hello world', 50);
  console.log('end world');
}

doPrint();


//hello world
//end world
```

从上面这个例子可以看出，async标记了asyncPrint函数为异步函数，通过await等待asyncPrint执行结束。然后再打印 ` end world `。

同时也可以看出用async标记的函数和直接返回Promise的函数是一样的。

## 错误处理

如同上面的结果一样，async标记的函数和直接返回一个Promise的函数表现是一致的。因此我们可以像处理Promise的错误一样来处理async函数的错误。

```

async function f() {
  await Promise.reject('出错了');
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))

```

同样的，await标记会让异步函数的表现的和同步函数一致(这也是async方便的地方)，因此我们也可以使用一般的try-catch语句来处理。

```javascript

async function f() {
	await new Promise(function (resolve, reject) {
		throw new Error('出错了');
	});
}

async function main() {
	try {
		await f();
	} catch (error) {
		console.log('aaa');
	}
}

main();

```

## 使用注意点

> 1.使用await时尽量放在try..catch中。

因为async函数中可能会报错，可以在try..catch当中统一处理。

```javascript
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

```

> 2.await只能在async函数中使用。

当你在非async函数中使用await，会出现报错。这是刚开始使用时常遇到的问题，不过看报错信息很快能够想起。

```javascript

async function f() {
	await new Promise(function (resolve, reject) {
		throw new Error('出错了');
	});
}

try {
	await f();
} catch (error) {
	console.log('aaa');
}

//SyntaxError: await is only valid in async function
```

> 3.多个await时，无依赖关系的可以同时执行。

await标记会将异步函数变成表现为同步函数，因此当有多个无依赖关系的异步函数执行时如果每个都作为同步去等待，这样效率低下。

```javascript

let foo = await getFoo();
let bar = await getBar();

// 效率较慢
```

因为async返回的时Promise，因此Promise的方法也可以同时使用。

```

// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;

```

方法一，通过Promise.all方法，同时执行两个异步函数。

方法二，先执行两个异步函数，再await同步等待两个结果。

