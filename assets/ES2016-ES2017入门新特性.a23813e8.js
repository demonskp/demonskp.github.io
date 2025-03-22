import{o as t,b as o,h as n}from"./index.41cfe482.js";const r={class:"markdown-body"},a=n(`<p>\u4E86\u89E3\u8BED\u8A00\u7684\u65B0\u7279\u6027\u662F\u975E\u5E38\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\u3002\u4E4B\u524D\u4E00\u76F4\u90FD\u641E\u4E0D\u592A\u660E\u767DES6\u4E4B\u540E\uFF0CJS\u7248\u672C\u547D\u540D\u7684\u89C4\u8303\u3002\u7F51\u4E0A\u5F88\u591A\u4EBA\u4E5F\u6CA1\u6709\u5F04\u5F97\u592A\u6E05\u695A\u3002\u5728ES6\u4E4B\u540E\uFF0CECMAScript\u59D4\u5458\u4F1A\u51B3\u5B9A\u6362\u4E00\u79CD\u547D\u540D\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u662F\u4EE5\u5E74\u4EFD\u6765\u547D\u540D\u3002\u73B0\u5728\u6211\u4E5F\u7B80\u5355\u603B\u7ED3\u4E86\u4E00\u4E0B\u4E00\u4E9B\u65B0\u7684\u89C4\u8303\u7684\u5185\u5BB9\uFF0C\u81F3\u4E8E\u5177\u4F53\u7684\u63D0\u6848\u5927\u5BB6\u53EF\u4EE5\u5728github\u4E0A\u770B\u5230\u76F8\u5173\u5185\u5BB9\u3002</p><p><a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md">\u5177\u4F53\u63D0\u6848</a></p><h2>Array.prototype.includes</h2><p>\u672C\u8D28\uFF1A\u8BED\u6CD5\u7CD6</p><p>\u5E74\u4EFD\uFF1A2016</p><p>Array.prototype.includes \u5224\u65AD\u6570\u7EC4\u662F\u5426\u5305\u542B\u5BF9\u5E94\u7684\u503C\u3002</p><blockquote><p>\u539F\u672C\u5199\u6CD5</p></blockquote><pre><code class="language-javascript">
if(arr.indexOf(el) !== -1){
  // do something
}

</code></pre><blockquote><p>\u65B0\u5199\u6CD5</p></blockquote><pre><code class="language-javascript">
if(arr.includes(el,bl)){
  // do something
}

</code></pre><h2>Exponentiation Operator</h2><p>\u672C\u8D28\uFF1A\u8BED\u6CD5\u7CD6</p><p>\u5E74\u4EFD\uFF1A2016</p><p>Exponentiation Operator \u5E42\u8FD0\u7B97\u7B26\u3002\u8BA1\u7B97\u5E42\u8FD0\u7B97\u3002</p><blockquote><p>\u539F\u672C\u5199\u6CD5</p></blockquote><pre><code class="language-javascript">
let mi = Math.pow(2,3)
// 8

</code></pre><blockquote><p>\u65B0\u5199\u6CD5</p></blockquote><pre><code class="language-javascript">
let mi = 2 ** 3;
// 8

</code></pre><p>\u5E42\u8FD0\u7B97\u7B26\u53F7\uFF0C\u66F4\u4FBF\u6377\u7684\u5199\u6CD5\uFF0C\u4E5F\u662F\u548C\u5176\u4ED6\u8BED\u8A00\u63A5\u8F68\u3002</p><h2>Object.values / Object.entries</h2><p>\u672C\u8D28\uFF1A\u8BED\u6CD5\u7CD6</p><p>\u5E74\u4EFD\uFF1A2017</p><p>Object.values / Object.entries Object\u5BF9\u8C61\u4E0A\u7684\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u7C7B\u4F3C\u4E8EObject.keys\u3002\u8FD4\u56DE\u7684\u90FD\u662F\u76F8\u5E94\u7684\u6570\u7EC4\u3002</p><h2>String.prototype.padStart / String.prototype.padEnd</h2><p>\u5E74\u4EFD\uFF1A2017</p><p>String.prototype.padStart / String.prototype.padEnd \u5728String\u539F\u578B\u4E0A\u65B0\u6DFB\u52A0\u4E86\u4E24\u4E2A\u65B9\u6CD5\u3002\u63D0\u6848\u4E0A\u8BF4\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7528\u7684\u5F88\u591A\uFF0C\u4F46\u662F\u73B0\u5728\u5F88\u591A\u5B9E\u73B0\u5B9E\u9645\u4E0A\u5F88\u4F4E\u6548\u3002\u56E0\u6B64\u5F88\u6709\u5FC5\u8981\u63D0\u51FA\u3002\u540C\u65F6\uFF0C\u539F\u672C\u63D0\u6848\u53EBpadLeft\u548CpadRight\u4E4B\u540E\u7684\u4E00\u6B21\u4F1A\u8BAE\u4FEE\u6539\u6210\u73B0\u5728\u7684\u540D\u5B57\u3002</p><p>\u6548\u679C\u5F88\u7B80\u5355\u5C31\u662F\uFF0C\u7ED9\u5B57\u7B26\u4E32\u586B\u5145\u5B57\u7B26\u8FBE\u5230\u6307\u5B9A\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u586B\u5145\u7684\u662F\u7A7A\u683C\u3002\u540C\u65F6\u6CE8\u610F\uFF0C\u4ED6\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\u800C\u4E0D\u662F\u5728\u539F\u672C\u5B57\u7B26\u4E32\u4E0A\u8FDB\u884C\u4FEE\u6539\u3002\u53E6\u4E00\u70B9\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662FmaxLength\uFF0C\u6240\u4EE5\u5F53\u4F60\u7684\u586B\u5145\u5B57\u7B26\u662F\u591A\u4E2A\u7684\u65F6\u5019\u3002\u4ED6\u53EA\u4F1A\u586B\u5145\u5230\u6307\u5B9A\u957F\u5EA6\uFF0C\u4E0D\u4F1A\u5728\u7EE7\u7EED\u586B\u5145\u4E86\u3002</p><pre><code class="language-javascript">// String.prototype.padStart( maxLength [ , fillString ] )
&quot;liwei&quot;.padStart(10);
// &quot;     liwei&quot;
&quot;liwei&quot;.padStart(10,&quot;o&quot;);
// &quot;oooooliwei&quot;
</code></pre><pre><code class="language-javascript">// String.prototype.padEnd( maxLength [ , fillString ] )
&quot;liwei&quot;.padStart(10);
// &quot;liwei     &quot;
&quot;liwei&quot;.padStart(10,&quot;o1&quot;);
// &quot;liweio1o1o&quot;
</code></pre><h2>Object.getOwnPropertyDescriptors</h2><p>\u5E74\u4EFD\uFF1A2017</p><p>Object.getOwnPropertyDescriptors(obj) \u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61 obj \u4E0A\u81EA\u6709\u5C5E\u6027\u5BF9\u5E94\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u3002\u8FD9\u4E2A\u65B9\u6CD5\u7684\u5F15\u5165\u662F\u4E3A\u4E86\u89E3\u51B3\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u590D\u5236\u7684\u95EE\u9898\u3002\u539F\u6709\u7684<code>Object.assign</code>\u65B9\u6CD5\u4F7F\u7528\u4E86\u7B80\u5355\u7684get\u548Cset\u65B9\u6CD5\u6765\u590D\u5236\u5176\u952E\u4E3Akey\u7684\u5C5E\u6027\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u4E86\u5BF9\u8C61\u7684\u4E00\u4E9B\u5C5E\u6027\u6CA1\u6709\u529E\u6CD5\u590D\u5236(\u6BD4\u5982Object.defineProperties\u65B9\u6CD5\u64CD\u4F5C\u7684\u90A3\u4E9B)\u3002\u6BD4\u5982<code>getter,setter,\u4E0D\u53EF\u5199\uFF0C\u679A\u4E3E</code>\u7B49\u5C5E\u6027\u5C31\u65E0\u6CD5\u88AB<code>Object.assign</code>\u590D\u5236\u3002</p><pre><code class="language-javascript">const obj = {
    [Symbol(&#39;foo&#39;)]: 123,
    get bar() { return &#39;abc&#39; },
};
console.log(Object.getOwnPropertyDescriptors(obj));

// Output:
// { [Symbol(&#39;foo&#39;)]:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }
</code></pre><blockquote><p>\u62F7\u8D1D\u5BF9\u8C61\u5C5E\u6027</p></blockquote><pre><code>const source = {
    set foo(value) {
        console.log(value);
    }
};
console.log(Object.getOwnPropertyDescriptor(source, &#39;foo&#39;));
// { get: undefined,
//   set: [Function: foo],
//   enumerable: true,
//   configurable: true }


const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
console.log(Object.getOwnPropertyDescriptor(target2, &#39;foo&#39;));
// { get: undefined,
//   set: [Function: foo],
//   enumerable: true,
//   configurable: true }
</code></pre><h2>Trailing commas in function parameter lists and calls(\u5C3E\u968F\u9017\u53F7)</h2><p>\u5E74\u4EFD\uFF1A2017</p><p>\u5C3E\u968F\u9017\u53F7\uFF0C\u610F\u601D\u662F\u5141\u8BB8\u5728\u51FD\u6570\u53C2\u6570\u548C\u51FD\u6570\u8C03\u7528\u65F6\u53C2\u6570\u6700\u540E\u5199\u4E00\u4E2A\u9017\u53F7\u3002\u8FD9\u4E3B\u8981\u662F\u56E0\u4E3A\u53C2\u6570\u5217\u8868\u5F88\u591A\u65F6\u5019\u90FD\u4F1A\u5728\u683C\u5F0F\u5316\u65F6\uFF0C\u628A\u53C2\u6570\u5217\u8868\u683C\u5F0F\u5316\u6210\u4E00\u884C\u4E00\u884C\u7684\u3002\u800C\u8FD9\u6837\u5C31\u5BFC\u81F4\u5728\u4F60\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u65B0\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u9700\u8981\u4FEE\u6539\u4E24\u884C\u3002\u8FD9\u5C31\u4F1A\u5728git\u7B49\u7248\u672C\u7BA1\u7406\u7CFB\u7EDF\u5F53\u4E2D\u9020\u6210\u4F60\u4FEE\u6539\u4E86\u4E24\u884C\u7684\u60C5\u51B5\u3002\u56E0\u6B64\u52A0\u5165\u4E86\u8FD9\u4E2A\u65B0\u7684\u7279\u6027\u6765\u4F18\u5316\u3002</p><h2>async/await</h2><p>\u672C\u8D28:\u8BED\u6CD5\u7CD6</p><p>\u5E74\u4EFD\uFF1A2017</p><p>async/await \u51FD\u6570\uFF0C\u672C\u8D28\u4E0A\u5C31\u662FPromise\u7684\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u80FD\u591F\u8BA9\u4F60\u66F4\u987A\u7545\u7684\u53BB\u5199Promise\u3002\u540C\u65F6\u4E5F\u80FD\u8BA9\u4F60\u5F88\u7B80\u5355\u7684\u901A\u8FC7try/catch\u8FDB\u884C\u9519\u8BEF\u5904\u7406\u3002</p><blockquote><p>\u539F\u5199\u6CD5</p></blockquote><pre><code class="language-javascript">new Promise((resolve,reject)=&gt;{
  //dosomething
  resolve(&#39;1&#39;);
}).then((value)=&gt;{
  return value+&#39;2&#39;;
}).then((value)=&gt;{
  return value+&#39;3&#39;;
}).catch((err)=&gt;{
  console.log(err);
})
</code></pre><p>\u8FD9\u6837\u7684\u5199\u6CD5\u867D\u7136\u6BD4\u539F\u6765\u7684\u56DE\u8C03\u5730\u72F1\u8981\u597D\u5F88\u591A\u4E86\uFF0C\u4F46\u662F\u4F9D\u7136\u4E0D\u591F\u76F4\u89C2\u3002\u5F53\u6211\u4EEC\u6709\u4E86async/await\u51FD\u6570\u8FDB\u884C\u914D\u5408\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u80FD\u66F4\u8F7B\u677E\u7684\u7F16\u5199\u5F02\u6B65\u51FD\u6570\u4E86\u3002</p><blockquote><p>\u65B0\u5199\u6CD5</p></blockquote><pre><code>async function doSomething() {
  const result = await getDataFromNet(); //\u4ECE\u7F51\u7EDC\u83B7\u53D6
  return result;
}

async function doHere() {
  try {
    let a = await doSomething();
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}
</code></pre><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u8981\u4F7F\u7528async\u6807\u8BB0\u7684\u51FD\u6570\u4E00\u5B9A\u8981\u5728\u524D\u9762\u52A0await\uFF0C\u800C\u8981\u7528await\u5173\u952E\u5B57\uFF0C\u4E00\u5B9A\u8981\u5728async\u51FD\u6570\u4E2D\u3002</p><p>\u672C\u8D28\u4E0Aasync\u51FD\u6570\u8FD4\u56DE\u7684\u5C31\u662F\u4E00\u4E2APromise\u7684\u5BF9\u8C61\uFF0C\u4F60\u5982\u679C\u7528await\u90A3\u4E48\u62FF\u5230\u7684\u5C31\u662F\u4ED6resolve\u7684\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u7528await\u90A3\u4E48\u4F60\u62FF\u5230\u7684\u5C31\u662FPromise\u4ED6\u672C\u8EAB\u3002\u56E0\u6B64\uFF0C\u662F\u53EF\u4EE5\u914D\u5408\u4F7F\u7528Promise\u7684\u76F8\u5173\u65B9\u6CD5\u7684\uFF0C\u6BD4\u5982\u3002all\uFF0Crace\u7B49\u65B9\u6CD5\u3002</p><pre><code>async function logPosts ()  {
    try {
        let user_id = await fetch(&#39;/api/users/username&#39;)
        let post_ids = await fetch(&#39;/api/posts/\${user_id}&#39;)
        let promises = post_ids.map(post_id =&gt; {
            return  fetch(&#39;/api/posts/\${post_id}&#39;)
        }
        let posts = await Promise.all(promises)
        console.log(posts)
    } catch (error) {
        console.error(&#39;Error:&#39;, error)
    }
}
</code></pre><h2>Shared memory and atomics</h2><p>\u5E74\u4EFD\uFF1A2017</p><p>\u8FD9\u4EFD\u63D0\u6848\u4E3B\u8981\u662Fjs\u7684\u591A\u7EBF\u7A0B\u76F8\u5173\u7684\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u7EBF\u7A0B\u95F4\u7684\u6570\u636E\u4EA4\u6362\uFF0C\u5171\u4EAB\u5185\u5B58\uFF0C\u539F\u5B50\u64CD\u4F5C\u3002\u5F88\u590D\u6742\uFF0C\u611F\u5174\u8DA3\u7684\u8BF7\u770B\u8FD9\u7BC7\u535A\u6587\u5427\uFF1A <a href="https://zhuanlan.zhihu.com/p/35484684">SharedArrayBuffer and Atomics - Web \u7684\u591A\u7EBF\u7A0B\u5E76\u53D1\u7F16\u7A0B</a></p>`,53),p=[a],d={__name:"ES2016-ES2017\u5165\u95E8\u65B0\u7279\u6027",setup(c,{expose:e}){return e({frontmatter:{}}),(i,l)=>(t(),o("div",r,p))}};export{d as default};
