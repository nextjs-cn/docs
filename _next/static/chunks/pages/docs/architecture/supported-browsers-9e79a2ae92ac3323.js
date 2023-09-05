(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[576],{5436:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/architecture/supported-browsers",function(){return l(4572)}])},4572:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return c}});var i=l(1527),r=l(7178),n=l(2783);let c=[{depth:2,value:"Browserslist",id:"browserslist"},{depth:2,value:"Polyfills",id:"polyfills"},{depth:3,value:"自定义 Polyfill",id:"自定义-polyfill"},{depth:2,value:"JavaScript 语言特性",id:"javascript-语言特性"},{depth:3,value:"服务器端 Polyfills",id:"服务器端-polyfills"},{depth:3,value:"TypeScript 特性",id:"typescript-特性"},{depth:3,value:"自定义 Babel 配置(高级)",id:"自定义-babel-配置高级"}];function t(s){let e=Object.assign({p:"p",strong:"strong",ul:"ul",li:"li",h2:"h2",a:"a",pre:"pre",code:"code",span:"span",h3:"h3"},(0,n.a)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Next.js ",(0,i.jsx)(e.strong,{children:"无需任何配置"}),"即可支持",(0,i.jsx)(e.strong,{children:"现代浏览器"}),"。"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Chrome 64+ - Chrome 浏览器 64+"}),"\n",(0,i.jsx)(e.li,{children:"Edge 79+ - 边缘 79+"}),"\n",(0,i.jsx)(e.li,{children:"Firefox 67+"}),"\n",(0,i.jsx)(e.li,{children:"Opera 51+"}),"\n",(0,i.jsx)(e.li,{children:"Safari 12+"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"browserslist",children:"Browserslist"}),"\n",(0,i.jsxs)(e.p,{children:["如果你想要针对特定的浏览器或特性，Next.js 支持在 package.json 文件中使用 ",(0,i.jsx)(e.a,{href:"https://browsersl.ist",children:"Browserslist"})," 配置。Next.js 默认使用以下 Browserslist 配置:"]}),"\n",(0,i.jsx)(e.pre,{"data-language":"json","data-theme":"default",filename:"package.json",hasCopyCode:!0,children:(0,i.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"browserslist"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"chrome 64"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"，"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"edge 79"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"，"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"firefox 67"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"，"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"opera 51"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"，"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"safari 12"'})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsx)(e.h2,{id:"polyfills",children:"Polyfills"}),"\n",(0,i.jsxs)(e.p,{children:["我们注入了 ",(0,i.jsx)(e.a,{href:"https://github.com/vercel/next.js/blob/canary/packages/next-polyfill-nomodule/src/index.js",children:"常用的 polyfills"}),"，包括:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:(0,i.jsx)(e.strong,{children:"fetch()"})})," — 代替: ",(0,i.jsx)(e.code,{children:"whatwg-fetch"})," 和 ",(0,i.jsx)(e.code,{children:"unfetch"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",children:(0,i.jsx)(e.strong,{children:"URL"})})," — 代替: the ",(0,i.jsxs)(e.a,{href:"https://nodejs.org/api/url.html",children:[(0,i.jsx)(e.code,{children:"url"})," package (Node.js API)"]}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",children:(0,i.jsx)(e.strong,{children:"Object.assign()"})})," — 替代 : ",(0,i.jsx)(e.code,{children:"object-assign"}),"， ",(0,i.jsx)(e.code,{children:"object.assign"})," 和 ",(0,i.jsx)(e.code,{children:"core-js/object/assign"}),"。"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"如果你的任何依赖项包含这些 polyfill，它们会在生产版本中自动排除，以避免重复。"}),"\n",(0,i.jsx)(e.p,{children:"此外，为了减小包的大小，Next.js 只会为需要它们的浏览器加载这些 polyfill。全球大部分的网络流量都不会下载这些 polyfill。"}),"\n",(0,i.jsx)(e.h3,{id:"自定义-polyfill",children:"自定义 Polyfill"}),"\n",(0,i.jsx)(e.p,{children:"如果你自己的代码或任何外部 npm 依赖项需要目标浏览器不支持的功能(如 IE 11)，你就需要自己添加 polyfill。"}),"\n",(0,i.jsxs)(e.p,{children:["在这种情况下，你应该在",(0,i.jsxs)(e.a,{href:"/docs/pages/building-your-application/routing/custom-app",children:["自定义",(0,i.jsx)(e.code,{children:"<App>"})]})," 组件或单独的组件中，添加特定 polyfill 的顶层导入语句。"]}),"\n",(0,i.jsx)(e.h2,{id:"javascript-语言特性",children:"JavaScript 语言特性"}),"\n",(0,i.jsxs)(e.p,{children:["Next.js 允许你开箱即用最新的 JavaScript 特性。除了 ",(0,i.jsx)(e.a,{href:"https://github.com/lukehoban/es6features",children:"ES6 特性"})," 之外，Next.js 还支持:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/tc39/ecmascript-asyncawait",children:"Async/await"})," (ES2017)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/tc39/proposal-object-rest-spread",children:"Object Rest/Spread Properties"})," (ES2018)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsxs)(e.a,{href:"https://github.com/tc39/proposal-dynamic-import",children:["Dynamic ",(0,i.jsx)(e.code,{children:"import()"})]})," (ES2020)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/tc39/proposal-optional-chaining",children:"Optional Chaining"})," (ES2020)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/tc39/proposal-nullish-coalescing",children:"Nullish Coalescing"})," (ES2020)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/tc39/proposal-class-fields",children:"Class Fields"})," 和 ",(0,i.jsx)(e.a,{href:"https://github.com/tc39/proposal-static-class-features",children:"Static Properties"})," (part of stage 3 proposal)"]}),"\n",(0,i.jsx)(e.li,{children:"等"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"服务器端-polyfills",children:"服务器端 Polyfills"}),"\n",(0,i.jsxs)(e.p,{children:["除了在客户端的 ",(0,i.jsx)(e.code,{children:"fetch()"})," 之外，Next.js 还在 Node.js 环境中(尚未可用) polyfill 了 ",(0,i.jsx)(e.code,{children:"fetch()"}),"。它使用 ",(0,i.jsx)(e.code,{children:"undici"}),"，与 Node.js 本身使用的实现相同。你可以在服务器代码中(如 ",(0,i.jsx)(e.code,{children:"getStaticProps"}),"/",(0,i.jsx)(e.code,{children:"getServerSideProps"}),")使用 ",(0,i.jsx)(e.code,{children:"fetch()"}),"，而无需使用像 ",(0,i.jsx)(e.code,{children:"isomorphic-unfetch"})," 和 ",(0,i.jsx)(e.code,{children:"node-fetch"})," 这样的 polyfill。"]}),"\n",(0,i.jsx)(e.h3,{id:"typescript-特性",children:"TypeScript 特性"}),"\n",(0,i.jsxs)(e.p,{children:["Next.js 内置了 TypeScript 支持。 ",(0,i.jsx)(e.a,{href:"/docs/pages/building-your-application/configuring/typescript",children:"了解更多"}),"。"]}),"\n",(0,i.jsx)(e.h3,{id:"自定义-babel-配置高级",children:"自定义 Babel 配置(高级)"}),"\n",(0,i.jsxs)(e.p,{children:["你可以自定义 babel 配置。 ",(0,i.jsx)(e.a,{href:"/docs/pages/building-your-application/configuring/babel",children:"了解更多"}),"。"]})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,n.a)(),s.components);return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/docs/architecture/supported-browsers.mdx",route:"/docs/architecture/supported-browsers",frontMatter:{title:"支持的浏览器",description:"Next.js 支持哪些浏览器以及 JavaScript 特性"},timestamp:1693900582e3,title:"支持的浏览器",headings:c},pageNextRoute:"/docs/architecture/supported-browsers"})}},function(s){s.O(0,[178,774,888,179],function(){return s(s.s=5436)}),_N_E=s.O()}]);