    主要是阅读阮一峰老师的《ES6标准入门》这一本书所做的读书笔记。作为掌握ES6相关特性的一个过程。同时也作为之后速查的一个手册。

[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/)  [购买](https://s.taobao.com/search?q=ES6%E6%A0%87%E5%87%86%E5%85%A5%E9%97%A8+%E7%AC%AC3%E7%89%88)

## ES6简介

      ECMAScript和JavaScript的关系ES6是JavaScript的一个标准，是由ECMA组织制定的。而JavaScript是ECMAScript的其中一种实现。
      ES6是ECMAScript的一个版本，而ES6包含了ES2015和ES2016两个版本（在这之后ECMA决定，每年六月份发一个版本以后都按照年份来命名）

## let命令

    let:用来生成只能在当前代码块有效的变量

### 当前有效
let只在当前的代码块当中有效
```
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```
### 变量提升
let不会发生变量提升的现象，使用必须在声明之后。而不是在声明前使用视为undefined。
```
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```
### 暂时性死区
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
```
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
如果在代码块当中声明了一个变量，那么在当前代码块声明前的区域则会变成死区，无法在这个区域使用这个变量，即使有一个同名的全局变量。除非用this指明。

对于某一些死区，则不是很明显。这也是容易出现错误的位置。
```
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
```
这里在指定给bar函数的参数设置了默认值（具体请参照ES6函数新增部分）,而在声明y之前就已经使用了x=y。这显然违反了暂时性死区的规则。（由此可见，可以认为在设置默认值的时候使用的是let）

### 块级作用域
块级作用域是ES6提出的一个新概念，表明用{}花括号包裹起来的区域作为一个一个域。

解决了什么问题？
> 内层变量可能会覆盖外层变量

```
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```

由于var tmp = 'hello world';导致的变量提升则console.log(tmp)当中的tmp被当成了之后声明的。于是变成了undefined。
> 用来计数的循环变量泄露为全局变量

```
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```

本来只应该在内部循环使用的计数器泄漏到了外部。

    块级作用域这个概念就是为了let这种声明方式而提出的，let只能在其声明的作用域当中起作用。程序中只要你清楚let会在哪个位置起作用就行了，而不必纠结块级作用域这个概念。

> ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

## const命令

> const:静态变量，只能赋值一次，声明时必须赋值

const的作用域和let是一致的，只能在声明他的作用域当中起作用。同样存在暂时性死区，不可重复性声明。

### const的本质

    const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

```
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

const声明的是一个地址指向，而这个地址实际存储了什么，是不被限定的。因此你能够给对象添加属性，给数组添加成员。

## 变量解构

> ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

### 数组解构

```javascript
let [a, b, c] = [1, 2, 3];
a  // 1
b  // 2
c  // 3

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

let [x, y] = [1, 2, 3];
x // 1
y // 2
```

相对应的位置有值则能够解构，没有值则无法结构，注意前一项比后一项多也可以结构。

> 数组能够解构的本质是其转为对象以后具备 Iterator 接口或本身具备 Iterator 接口

### 对象

对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

```
let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined
```

如果变量名与属性名不一致，必须写成下面这样。

```
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
```

### 字符串

字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

```
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

类似也可以把字符串当成一个对象

```
let {length : len} = 'hello';
len // 5
```

### 数值和布尔值

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```

### 函数

```
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
```

### 默认值

解构赋值允许指定默认值，与函数参数一样

```
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
...
// 其他类型都可以
```


