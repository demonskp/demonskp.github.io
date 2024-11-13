import{o as n,b as t,h as o}from"./index.ed1d8821.js";const s="/assets/node_images_err.1e929a65.png",r={class:"markdown-body"},p=o(`<h2>node \u90E8\u7F72\u95EE\u9898</h2><p>\u90E8\u7F72\u65F6\u9009\u7528 18.20.4 \u955C\u50CF\u62A5\u9519</p><pre><code> ERRoR: executor failed running [/bin/sh -c npm install -g yarn]: exit code: 134
[17:02:027
[17:02:02]
&gt;[builder 6/9] RuN npm install -g yarn:
17:02:027
------
[17:02:02]
Dockerfile:9
[17:02:027
[17:02:02]
&gt;
RUN Set NODE OPTIONS
--max-old-space-size=4096
[17:02:02]
8
[17:02:02]
9
&gt;&gt;&gt; RUN npm install
-g yarn
10
[17:02:02]
[17:02:021
2
RUN yarn

</code></pre><p><img src="`+s+'" alt="\u9519\u8BEF\u622A\u56FE"></p><p>(\u66FF\u6362\u5176\u4ED6\u7248\u672C\u4E5F\u4F1A\u62A5\u9519)</p><p>\u67E5\u5230 134 \u4E3A\u5185\u5B58\u6EA2\u51FA\u7B49\u53D7\u73AF\u5883\u5F71\u54CD\u800C\u9000\u51FA\u7684\u9519\u8BEF</p><p>\u5C1D\u8BD5\uFF1A\u901A\u8FC7\u8BBE\u7F6E node-options \u6269\u5927\u4F7F\u7528\u5185\u5B58\uFF0C\u5E76\u6CA1\u6709\u6210\u529F</p><p>\u68C0\u7D22\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A <a href="https://stackoverflow.com/questions/59766839/error-code-elifecycle-npm-err-errno-134">https://stackoverflow.com/questions/59766839/error-code-elifecycle-npm-err-errno-134</a></p><p>\u8F6C\u5230\u5B9E\u8D28 issue</p><p><a href="https://github.com/nodejs/docker-node/issues/1254">https://github.com/nodejs/docker-node/issues/1254</a></p><p><strong>\u66FF\u6362\u4E3A 18.20.4-alpine \u955C\u50CF\u6210\u529F\u89E3\u51B3</strong></p><h3>\u521D\u6B65\u6000\u7591</h3><p>\u53EF\u80FD\u662F node \u955C\u50CF\u6253\u5305\u7684\u65B9\u5F0F\u548C\u8FD0\u884C\u6784\u5EFA\u7684\u673A\u5668\u82AF\u7247\u517C\u5BB9\u6027\u95EE\u9898\u3002\u4E5F\u8BB8\u548C\u6307\u4EE4\u96C6\u6709\u5173\u3002</p><h3>\u6269\u5C55</h3><p>1\u3001node \u955C\u50CF\u5404\u6807\u7B7E\u4EE3\u8868\u7684\u610F\u4E49</p><p><a href="https://stackoverflow.com/questions/52083380/in-docker-image-names-what-is-the-difference-between-alpine-jessie-stretch-an">https://stackoverflow.com/questions/52083380/in-docker-image-names-what-is-the-difference-between-alpine-jessie-stretch-an</a></p>',16),a=[p],m={__name:"node\u90E8\u7F72\u95EE\u9898",setup(c,{expose:e}){return e({frontmatter:{}}),(d,h)=>(n(),t("div",r,a))}};export{m as default};
