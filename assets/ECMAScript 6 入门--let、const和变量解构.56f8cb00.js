import{o as e,b as n,ar as t}from"./index.7836d928.js";const r={class:"markdown-body"},p=t(`<p>\u4E3B\u8981\u662F\u9605\u8BFB\u962E\u4E00\u5CF0\u8001\u5E08\u7684\u300AES6\u6807\u51C6\u5165\u95E8\u300B\u8FD9\u4E00\u672C\u4E66\u6240\u505A\u7684\u8BFB\u4E66\u7B14\u8BB0\u3002\u4F5C\u4E3A\u638C\u63E1ES6\u76F8\u5173\u7279\u6027\u7684\u4E00\u4E2A\u8FC7\u7A0B\u3002\u540C\u65F6\u4E5F\u4F5C\u4E3A\u4E4B\u540E\u901F\u67E5\u7684\u4E00\u4E2A\u624B\u518C\u3002</p><p><a href="http://es6.ruanyifeng.com/">\u300AECMAScript 6 \u5165\u95E8\u300B</a> <a href="https://s.taobao.com/search?q=ES6%E6%A0%87%E5%87%86%E5%85%A5%E9%97%A8+%E7%AC%AC3%E7%89%88">\u8D2D\u4E70</a></p><h2>ES6\u7B80\u4ECB</h2><pre><code>  ECMAScript\u548CJavaScript\u7684\u5173\u7CFBES6\u662FJavaScript\u7684\u4E00\u4E2A\u6807\u51C6\uFF0C\u662F\u7531ECMA\u7EC4\u7EC7\u5236\u5B9A\u7684\u3002\u800CJavaScript\u662FECMAScript\u7684\u5176\u4E2D\u4E00\u79CD\u5B9E\u73B0\u3002
  ES6\u662FECMAScript\u7684\u4E00\u4E2A\u7248\u672C\uFF0C\u800CES6\u5305\u542B\u4E86ES2015\u548CES2016\u4E24\u4E2A\u7248\u672C\uFF08\u5728\u8FD9\u4E4B\u540EECMA\u51B3\u5B9A\uFF0C\u6BCF\u5E74\u516D\u6708\u4EFD\u53D1\u4E00\u4E2A\u7248\u672C\u4EE5\u540E\u90FD\u6309\u7167\u5E74\u4EFD\u6765\u547D\u540D\uFF09
</code></pre><h2>let\u547D\u4EE4</h2><pre><code>let:\u7528\u6765\u751F\u6210\u53EA\u80FD\u5728\u5F53\u524D\u4EE3\u7801\u5757\u6709\u6548\u7684\u53D8\u91CF
</code></pre><h3>\u5F53\u524D\u6709\u6548</h3><p>let\u53EA\u5728\u5F53\u524D\u7684\u4EE3\u7801\u5757\u5F53\u4E2D\u6709\u6548</p><pre><code>{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
</code></pre><h3>\u53D8\u91CF\u63D0\u5347</h3><p>let\u4E0D\u4F1A\u53D1\u751F\u53D8\u91CF\u63D0\u5347\u7684\u73B0\u8C61\uFF0C\u4F7F\u7528\u5FC5\u987B\u5728\u58F0\u660E\u4E4B\u540E\u3002\u800C\u4E0D\u662F\u5728\u58F0\u660E\u524D\u4F7F\u7528\u89C6\u4E3Aundefined\u3002</p><pre><code>// var \u7684\u60C5\u51B5
console.log(foo); // \u8F93\u51FAundefined
var foo = 2;

// let \u7684\u60C5\u51B5
console.log(bar); // \u62A5\u9519ReferenceError
let bar = 2;
</code></pre><h3>\u6682\u65F6\u6027\u6B7B\u533A</h3><p>\u53EA\u8981\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u5B58\u5728let\u547D\u4EE4\uFF0C\u5B83\u6240\u58F0\u660E\u7684\u53D8\u91CF\u5C31\u201C\u7ED1\u5B9A\u201D\uFF08binding\uFF09\u8FD9\u4E2A\u533A\u57DF\uFF0C\u4E0D\u518D\u53D7\u5916\u90E8\u7684\u5F71\u54CD\u3002</p><pre><code>var tmp = 123;

if (true) {
  tmp = &#39;abc&#39;; // ReferenceError
  let tmp;
}
</code></pre><p>\u5982\u679C\u5728\u4EE3\u7801\u5757\u5F53\u4E2D\u58F0\u660E\u4E86\u4E00\u4E2A\u53D8\u91CF\uFF0C\u90A3\u4E48\u5728\u5F53\u524D\u4EE3\u7801\u5757\u58F0\u660E\u524D\u7684\u533A\u57DF\u5219\u4F1A\u53D8\u6210\u6B7B\u533A\uFF0C\u65E0\u6CD5\u5728\u8FD9\u4E2A\u533A\u57DF\u4F7F\u7528\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u5373\u4F7F\u6709\u4E00\u4E2A\u540C\u540D\u7684\u5168\u5C40\u53D8\u91CF\u3002\u9664\u975E\u7528this\u6307\u660E\u3002</p><p>\u5BF9\u4E8E\u67D0\u4E00\u4E9B\u6B7B\u533A\uFF0C\u5219\u4E0D\u662F\u5F88\u660E\u663E\u3002\u8FD9\u4E5F\u662F\u5BB9\u6613\u51FA\u73B0\u9519\u8BEF\u7684\u4F4D\u7F6E\u3002</p><pre><code>function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // \u62A5\u9519
</code></pre><p>\u8FD9\u91CC\u5728\u6307\u5B9A\u7ED9bar\u51FD\u6570\u7684\u53C2\u6570\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u503C\uFF08\u5177\u4F53\u8BF7\u53C2\u7167ES6\u51FD\u6570\u65B0\u589E\u90E8\u5206\uFF09,\u800C\u5728\u58F0\u660Ey\u4E4B\u524D\u5C31\u5DF2\u7ECF\u4F7F\u7528\u4E86x=y\u3002\u8FD9\u663E\u7136\u8FDD\u53CD\u4E86\u6682\u65F6\u6027\u6B7B\u533A\u7684\u89C4\u5219\u3002\uFF08\u7531\u6B64\u53EF\u89C1\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u5728\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u65F6\u5019\u4F7F\u7528\u7684\u662Flet\uFF09</p><h3>\u5757\u7EA7\u4F5C\u7528\u57DF</h3><p>\u5757\u7EA7\u4F5C\u7528\u57DF\u662FES6\u63D0\u51FA\u7684\u4E00\u4E2A\u65B0\u6982\u5FF5\uFF0C\u8868\u660E\u7528{}\u82B1\u62EC\u53F7\u5305\u88F9\u8D77\u6765\u7684\u533A\u57DF\u4F5C\u4E3A\u4E00\u4E2A\u4E00\u4E2A\u57DF\u3002</p><p>\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</p><blockquote><p>\u5185\u5C42\u53D8\u91CF\u53EF\u80FD\u4F1A\u8986\u76D6\u5916\u5C42\u53D8\u91CF</p></blockquote><pre><code>var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = &#39;hello world&#39;;
  }
}

f(); // undefined
</code></pre><p>\u7531\u4E8Evar tmp = \u2018hello world\u2019;\u5BFC\u81F4\u7684\u53D8\u91CF\u63D0\u5347\u5219console.log(tmp)\u5F53\u4E2D\u7684tmp\u88AB\u5F53\u6210\u4E86\u4E4B\u540E\u58F0\u660E\u7684\u3002\u4E8E\u662F\u53D8\u6210\u4E86undefined\u3002</p><blockquote><p>\u7528\u6765\u8BA1\u6570\u7684\u5FAA\u73AF\u53D8\u91CF\u6CC4\u9732\u4E3A\u5168\u5C40\u53D8\u91CF</p></blockquote><pre><code>var s = &#39;hello&#39;;

for (var i = 0; i &lt; s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
</code></pre><p>\u672C\u6765\u53EA\u5E94\u8BE5\u5728\u5185\u90E8\u5FAA\u73AF\u4F7F\u7528\u7684\u8BA1\u6570\u5668\u6CC4\u6F0F\u5230\u4E86\u5916\u90E8\u3002</p><pre><code>\u5757\u7EA7\u4F5C\u7528\u57DF\u8FD9\u4E2A\u6982\u5FF5\u5C31\u662F\u4E3A\u4E86let\u8FD9\u79CD\u58F0\u660E\u65B9\u5F0F\u800C\u63D0\u51FA\u7684\uFF0Clet\u53EA\u80FD\u5728\u5176\u58F0\u660E\u7684\u4F5C\u7528\u57DF\u5F53\u4E2D\u8D77\u4F5C\u7528\u3002\u7A0B\u5E8F\u4E2D\u53EA\u8981\u4F60\u6E05\u695Alet\u4F1A\u5728\u54EA\u4E2A\u4F4D\u7F6E\u8D77\u4F5C\u7528\u5C31\u884C\u4E86\uFF0C\u800C\u4E0D\u5FC5\u7EA0\u7ED3\u5757\u7EA7\u4F5C\u7528\u57DF\u8FD9\u4E2A\u6982\u5FF5\u3002
</code></pre><blockquote><p>ES6 \u5F15\u5165\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u660E\u786E\u5141\u8BB8\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E4B\u4E2D\u58F0\u660E\u51FD\u6570\u3002ES6 \u89C4\u5B9A\uFF0C\u5757\u7EA7\u4F5C\u7528\u57DF\u4E4B\u4E2D\uFF0C\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u7684\u884C\u4E3A\u7C7B\u4F3C\u4E8Elet\uFF0C\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E4B\u5916\u4E0D\u53EF\u5F15\u7528\u3002</p></blockquote><h2>const\u547D\u4EE4</h2><blockquote><p>const:\u9759\u6001\u53D8\u91CF\uFF0C\u53EA\u80FD\u8D4B\u503C\u4E00\u6B21\uFF0C\u58F0\u660E\u65F6\u5FC5\u987B\u8D4B\u503C</p></blockquote><p>const\u7684\u4F5C\u7528\u57DF\u548Clet\u662F\u4E00\u81F4\u7684\uFF0C\u53EA\u80FD\u5728\u58F0\u660E\u4ED6\u7684\u4F5C\u7528\u57DF\u5F53\u4E2D\u8D77\u4F5C\u7528\u3002\u540C\u6837\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF0C\u4E0D\u53EF\u91CD\u590D\u6027\u58F0\u660E\u3002</p><h3>const\u7684\u672C\u8D28</h3><pre><code>const\u5B9E\u9645\u4E0A\u4FDD\u8BC1\u7684\uFF0C\u5E76\u4E0D\u662F\u53D8\u91CF\u7684\u503C\u4E0D\u5F97\u6539\u52A8\uFF0C\u800C\u662F\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\u6240\u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u5F97\u6539\u52A8\u3002\u5BF9\u4E8E\u7B80\u5355\u7C7B\u578B\u7684\u6570\u636E\uFF08\u6570\u503C\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\uFF09\uFF0C\u503C\u5C31\u4FDD\u5B58\u5728\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u56E0\u6B64\u7B49\u540C\u4E8E\u5E38\u91CF\u3002\u4F46\u5BF9\u4E8E\u590D\u5408\u7C7B\u578B\u7684\u6570\u636E\uFF08\u4E3B\u8981\u662F\u5BF9\u8C61\u548C\u6570\u7EC4\uFF09\uFF0C\u53D8\u91CF\u6307\u5411\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4FDD\u5B58\u7684\u53EA\u662F\u4E00\u4E2A\u6307\u5411\u5B9E\u9645\u6570\u636E\u7684\u6307\u9488\uFF0Cconst\u53EA\u80FD\u4FDD\u8BC1\u8FD9\u4E2A\u6307\u9488\u662F\u56FA\u5B9A\u7684\uFF08\u5373\u603B\u662F\u6307\u5411\u53E6\u4E00\u4E2A\u56FA\u5B9A\u7684\u5730\u5740\uFF09\uFF0C\u81F3\u4E8E\u5B83\u6307\u5411\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E0D\u662F\u53EF\u53D8\u7684\uFF0C\u5C31\u5B8C\u5168\u4E0D\u80FD\u63A7\u5236\u4E86\u3002\u56E0\u6B64\uFF0C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u58F0\u660E\u4E3A\u5E38\u91CF\u5FC5\u987B\u975E\u5E38\u5C0F\u5FC3\u3002
</code></pre><pre><code>const foo = {};

// \u4E3A foo \u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6210\u529F
foo.prop = 123;
foo.prop // 123

// \u5C06 foo \u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u62A5\u9519
foo = {}; // TypeError: &quot;foo&quot; is read-only
</code></pre><p>const\u58F0\u660E\u7684\u662F\u4E00\u4E2A\u5730\u5740\u6307\u5411\uFF0C\u800C\u8FD9\u4E2A\u5730\u5740\u5B9E\u9645\u5B58\u50A8\u4E86\u4EC0\u4E48\uFF0C\u662F\u4E0D\u88AB\u9650\u5B9A\u7684\u3002\u56E0\u6B64\u4F60\u80FD\u591F\u7ED9\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF0C\u7ED9\u6570\u7EC4\u6DFB\u52A0\u6210\u5458\u3002</p><h2>\u53D8\u91CF\u89E3\u6784</h2><blockquote><p>ES6 \u5141\u8BB8\u6309\u7167\u4E00\u5B9A\u6A21\u5F0F\uFF0C\u4ECE\u6570\u7EC4\u548C\u5BF9\u8C61\u4E2D\u63D0\u53D6\u503C\uFF0C\u5BF9\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\uFF0C\u8FD9\u88AB\u79F0\u4E3A\u89E3\u6784\uFF08Destructuring\uFF09\u3002</p></blockquote><h3>\u6570\u7EC4\u89E3\u6784</h3><pre><code class="language-javascript">let [a, b, c] = [1, 2, 3];
a  // 1
b  // 2
c  // 3

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;];
third // &quot;baz&quot;

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = [&#39;a&#39;];
x // &quot;a&quot;
y // undefined
z // []

let [x, y] = [1, 2, 3];
x // 1
y // 2
</code></pre><p>\u76F8\u5BF9\u5E94\u7684\u4F4D\u7F6E\u6709\u503C\u5219\u80FD\u591F\u89E3\u6784\uFF0C\u6CA1\u6709\u503C\u5219\u65E0\u6CD5\u7ED3\u6784\uFF0C\u6CE8\u610F\u524D\u4E00\u9879\u6BD4\u540E\u4E00\u9879\u591A\u4E5F\u53EF\u4EE5\u7ED3\u6784\u3002</p><blockquote><p>\u6570\u7EC4\u80FD\u591F\u89E3\u6784\u7684\u672C\u8D28\u662F\u5176\u8F6C\u4E3A\u5BF9\u8C61\u4EE5\u540E\u5177\u5907 Iterator \u63A5\u53E3\u6216\u672C\u8EAB\u5177\u5907 Iterator \u63A5\u53E3</p></blockquote><h3>\u5BF9\u8C61</h3><p>\u5BF9\u8C61\u7684\u89E3\u6784\u4E0E\u6570\u7EC4\u6709\u4E00\u4E2A\u91CD\u8981\u7684\u4E0D\u540C\u3002\u6570\u7EC4\u7684\u5143\u7D20\u662F\u6309\u6B21\u5E8F\u6392\u5217\u7684\uFF0C\u53D8\u91CF\u7684\u53D6\u503C\u7531\u5B83\u7684\u4F4D\u7F6E\u51B3\u5B9A\uFF1B\u800C\u5BF9\u8C61\u7684\u5C5E\u6027\u6CA1\u6709\u6B21\u5E8F\uFF0C\u53D8\u91CF\u5FC5\u987B\u4E0E\u5C5E\u6027\u540C\u540D\uFF0C\u624D\u80FD\u53D6\u5230\u6B63\u786E\u7684\u503C\u3002</p><pre><code>let { bar, foo } = { foo: &quot;aaa&quot;, bar: &quot;bbb&quot; };
foo // &quot;aaa&quot;
bar // &quot;bbb&quot;

let { baz } = { foo: &quot;aaa&quot;, bar: &quot;bbb&quot; };
baz // undefined
</code></pre><p>\u5982\u679C\u53D8\u91CF\u540D\u4E0E\u5C5E\u6027\u540D\u4E0D\u4E00\u81F4\uFF0C\u5FC5\u987B\u5199\u6210\u4E0B\u9762\u8FD9\u6837\u3002</p><pre><code>let { foo: baz } = { foo: &#39;aaa&#39;, bar: &#39;bbb&#39; };
baz // &quot;aaa&quot;

let obj = { first: &#39;hello&#39;, last: &#39;world&#39; };
let { first: f, last: l } = obj;
f // &#39;hello&#39;
l // &#39;world&#39;
</code></pre><h3>\u5B57\u7B26\u4E32</h3><p>\u5B57\u7B26\u4E32\u4E5F\u53EF\u4EE5\u89E3\u6784\u8D4B\u503C\u3002\u8FD9\u662F\u56E0\u4E3A\u6B64\u65F6\uFF0C\u5B57\u7B26\u4E32\u88AB\u8F6C\u6362\u6210\u4E86\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u3002</p><pre><code>const [a, b, c, d, e] = &#39;hello&#39;;
a // &quot;h&quot;
b // &quot;e&quot;
c // &quot;l&quot;
d // &quot;l&quot;
e // &quot;o&quot;
</code></pre><p>\u7C7B\u4F3C\u4E5F\u53EF\u4EE5\u628A\u5B57\u7B26\u4E32\u5F53\u6210\u4E00\u4E2A\u5BF9\u8C61</p><pre><code>let {length : len} = &#39;hello&#39;;
len // 5
</code></pre><h3>\u6570\u503C\u548C\u5E03\u5C14\u503C</h3><p>\u89E3\u6784\u8D4B\u503C\u65F6\uFF0C\u5982\u679C\u7B49\u53F7\u53F3\u8FB9\u662F\u6570\u503C\u548C\u5E03\u5C14\u503C\uFF0C\u5219\u4F1A\u5148\u8F6C\u4E3A\u5BF9\u8C61\u3002</p><pre><code>let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
</code></pre><h3>\u51FD\u6570</h3><pre><code>function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
</code></pre><h3>\u9ED8\u8BA4\u503C</h3><p>\u89E3\u6784\u8D4B\u503C\u5141\u8BB8\u6307\u5B9A\u9ED8\u8BA4\u503C\uFF0C\u4E0E\u51FD\u6570\u53C2\u6570\u4E00\u6837</p><pre><code>let [foo = true] = [];
foo // true

let [x, y = &#39;b&#39;] = [&#39;a&#39;]; // x=&#39;a&#39;, y=&#39;b&#39;
let [x, y = &#39;b&#39;] = [&#39;a&#39;, undefined]; // x=&#39;a&#39;, y=&#39;b&#39;
...
// \u5176\u4ED6\u7C7B\u578B\u90FD\u53EF\u4EE5
</code></pre>`,61),a=[p],s={__name:"ECMAScript 6 \u5165\u95E8--let\u3001const\u548C\u53D8\u91CF\u89E3\u6784",setup(c,{expose:o}){return o({frontmatter:{}}),(d,u)=>(e(),n("div",r,a))}};export{s as default};
