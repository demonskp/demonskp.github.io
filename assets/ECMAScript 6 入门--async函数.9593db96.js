import{o as a,b as t,ar as e}from"./index.7836d928.js";const o={class:"markdown-body"},r=e(`<p>async\u51FD\u6570,\u662FES2017\u6807\u51C6\u5F15\u5165\u7684\u89E3\u51B3\u4E00\u6B65\u64CD\u4F5C\u7684\u4E00\u4E2A\u6807\u51C6\u3002\u7B80\u5355\u6765\u8BB2\u5C31\u662F\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7async\u6807\u8BB0\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06\u5176\u6807\u8BB0\u4E3A\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570,\u4F1A\u5C06\u5B83\u7684\u8FD4\u56DE\u503C\u5305\u88C5\u6210\u4E00\u4E2APromise\u5BF9\u8C61\u3002\u800C\u5176\u672C\u8D28\u5219\u662F\uFF0CGenerator\u51FD\u6570\u7684\u4E00\u4E2A\u8BED\u6CD5\u7CD6\u3002</p><h2>\u57FA\u7840\u7528\u6CD5</h2><p>async\u51FD\u6570\u901A\u5E38\u90FD\u548Cawait\u4E00\u8D77\u4F7F\u7528\uFF0C\u5176\u8BED\u4E49\u5316\u5341\u5206\u660E\u663E\u3002async\u7528\u6765\u8868\u793A\u51FD\u6570\u4E3A\u5F02\u6B65\u51FD\u6570\uFF0C\u800Cawait\u5219\u544A\u8BC9\u7F16\u8BD1\u5668\u6B64\u5904\u9700\u8981\u7B49\u5F85\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u3002</p><pre><code class="language-JavaScript">function timeout(ms) {
  return new Promise((resolve) =&gt; {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

async function doPrint(){
  await asyncPrint(&#39;hello world&#39;, 50);
  console.log(&#39;end world&#39;);
}

doPrint();


//hello world
//end world
</code></pre><p>\u4ECE\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\uFF0Casync\u6807\u8BB0\u4E86asyncPrint\u51FD\u6570\u4E3A\u5F02\u6B65\u51FD\u6570\uFF0C\u901A\u8FC7await\u7B49\u5F85asyncPrint\u6267\u884C\u7ED3\u675F\u3002\u7136\u540E\u518D\u6253\u5370 <code>end world</code>\u3002</p><p>\u540C\u65F6\u4E5F\u53EF\u4EE5\u770B\u51FA\u7528async\u6807\u8BB0\u7684\u51FD\u6570\u548C\u76F4\u63A5\u8FD4\u56DEPromise\u7684\u51FD\u6570\u662F\u4E00\u6837\u7684\u3002</p><h2>\u9519\u8BEF\u5904\u7406</h2><p>\u5982\u540C\u4E0A\u9762\u7684\u7ED3\u679C\u4E00\u6837\uFF0Casync\u6807\u8BB0\u7684\u51FD\u6570\u548C\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2APromise\u7684\u51FD\u6570\u8868\u73B0\u662F\u4E00\u81F4\u7684\u3002\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u50CF\u5904\u7406Promise\u7684\u9519\u8BEF\u4E00\u6837\u6765\u5904\u7406async\u51FD\u6570\u7684\u9519\u8BEF\u3002</p><pre><code>
async function f() {
  await Promise.reject(&#39;\u51FA\u9519\u4E86&#39;);
}

f()
.then(v =&gt; console.log(v))
.catch(e =&gt; console.log(e))

</code></pre><p>\u540C\u6837\u7684\uFF0Cawait\u6807\u8BB0\u4F1A\u8BA9\u5F02\u6B65\u51FD\u6570\u7684\u8868\u73B0\u7684\u548C\u540C\u6B65\u51FD\u6570\u4E00\u81F4(\u8FD9\u4E5F\u662Fasync\u65B9\u4FBF\u7684\u5730\u65B9)\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u822C\u7684try-catch\u8BED\u53E5\u6765\u5904\u7406\u3002</p><pre><code class="language-javascript">
async function f() {
	await new Promise(function (resolve, reject) {
		throw new Error(&#39;\u51FA\u9519\u4E86&#39;);
	});
}

async function main() {
	try {
		await f();
	} catch (error) {
		console.log(&#39;aaa&#39;);
	}
}

main();

</code></pre><h2>\u4F7F\u7528\u6CE8\u610F\u70B9</h2><blockquote><p>1.\u4F7F\u7528await\u65F6\u5C3D\u91CF\u653E\u5728try\u2026catch\u4E2D\u3002</p></blockquote><p>\u56E0\u4E3Aasync\u51FD\u6570\u4E2D\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u53EF\u4EE5\u5728try\u2026catch\u5F53\u4E2D\u7EDF\u4E00\u5904\u7406\u3002</p><pre><code class="language-javascript">async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

</code></pre><blockquote><p>2.await\u53EA\u80FD\u5728async\u51FD\u6570\u4E2D\u4F7F\u7528\u3002</p></blockquote><p>\u5F53\u4F60\u5728\u975Easync\u51FD\u6570\u4E2D\u4F7F\u7528await\uFF0C\u4F1A\u51FA\u73B0\u62A5\u9519\u3002\u8FD9\u662F\u521A\u5F00\u59CB\u4F7F\u7528\u65F6\u5E38\u9047\u5230\u7684\u95EE\u9898\uFF0C\u4E0D\u8FC7\u770B\u62A5\u9519\u4FE1\u606F\u5F88\u5FEB\u80FD\u591F\u60F3\u8D77\u3002</p><pre><code class="language-javascript">
async function f() {
	await new Promise(function (resolve, reject) {
		throw new Error(&#39;\u51FA\u9519\u4E86&#39;);
	});
}

try {
	await f();
} catch (error) {
	console.log(&#39;aaa&#39;);
}

//SyntaxError: await is only valid in async function
</code></pre><blockquote><p>3.\u591A\u4E2Aawait\u65F6\uFF0C\u65E0\u4F9D\u8D56\u5173\u7CFB\u7684\u53EF\u4EE5\u540C\u65F6\u6267\u884C\u3002</p></blockquote><p>await\u6807\u8BB0\u4F1A\u5C06\u5F02\u6B65\u51FD\u6570\u53D8\u6210\u8868\u73B0\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u56E0\u6B64\u5F53\u6709\u591A\u4E2A\u65E0\u4F9D\u8D56\u5173\u7CFB\u7684\u5F02\u6B65\u51FD\u6570\u6267\u884C\u65F6\u5982\u679C\u6BCF\u4E2A\u90FD\u4F5C\u4E3A\u540C\u6B65\u53BB\u7B49\u5F85\uFF0C\u8FD9\u6837\u6548\u7387\u4F4E\u4E0B\u3002</p><pre><code class="language-javascript">
let foo = await getFoo();
let bar = await getBar();

// \u6548\u7387\u8F83\u6162
</code></pre><p>\u56E0\u4E3Aasync\u8FD4\u56DE\u7684\u65F6Promise\uFF0C\u56E0\u6B64Promise\u7684\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u3002</p><pre><code>
// \u5199\u6CD5\u4E00
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// \u5199\u6CD5\u4E8C
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;

</code></pre><p>\u65B9\u6CD5\u4E00\uFF0C\u901A\u8FC7Promise.all\u65B9\u6CD5\uFF0C\u540C\u65F6\u6267\u884C\u4E24\u4E2A\u5F02\u6B65\u51FD\u6570\u3002</p><p>\u65B9\u6CD5\u4E8C\uFF0C\u5148\u6267\u884C\u4E24\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u518Dawait\u540C\u6B65\u7B49\u5F85\u4E24\u4E2A\u7ED3\u679C\u3002</p>`,25),c=[r],m={__name:"ECMAScript 6 \u5165\u95E8--async\u51FD\u6570",setup(s,{expose:n}){return n({frontmatter:{}}),(l,p)=>(a(),t("div",o,c))}};export{m as default};
