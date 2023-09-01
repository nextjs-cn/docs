(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{6310:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/getting-started",function(){return n(9132)}])},9132:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var s=n(1527),i=n(7178),r=n(2783);let d=[{depth:2,value:"什么是 Next.js?",id:"什么是-nextjs"},{depth:2,value:"主要特性",id:"主要特性"},{depth:2,value:"如何使用文档",id:"如何使用文档"},{depth:2,value:"App Router vs Pages Router",id:"app-router-vs-pages-router"},{depth:2,value:"必备知识",id:"必备知识"},{depth:2,value:"无障碍",id:"无障碍"},{depth:2,value:"加入我们的社区",id:"加入我们的社区"}];function c(e){let t=Object.assign({p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"欢迎阅读 Next.js 文档！"}),"\n",(0,s.jsx)(t.h2,{id:"什么是-nextjs",children:"什么是 Next.js?"}),"\n",(0,s.jsx)(t.p,{children:"Next.js 是一个用于构建全栈 web 应用的 React 框架。你可以使用 React 组件来构建用户界面，使用 Next.js 获得更多的功能和优化。"}),"\n",(0,s.jsx)(t.p,{children:"在底层，Next.js 还抽象并自动配置了 React 所需的工具链，如打包、编译等。这使你可以专注于构建应用程序，而不需要花时间在配置上。"}),"\n",(0,s.jsx)(t.p,{children:"无论你是个人开发者还是大型团队的一员，Next.js 都能帮助你构建交互式、动态和快速的 React 应用程序。"}),"\n",(0,s.jsx)(t.h2,{id:"主要特性",children:"主要特性"}),"\n",(0,s.jsx)(t.p,{children:"Next.js 的一些主要特性包括："}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"特性"}),(0,s.jsx)(t.th,{children:"描述"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/app/building-your-application/routing",children:"路由"})}),(0,s.jsx)(t.td,{children:"基于文件系统的路由，且建立在 Server Components 之上，支持布局、嵌套路由、加载状态、错误处理等功能"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/app/building-your-application/rendering",children:"渲染"})}),(0,s.jsx)(t.td,{children:"使用 Client 和 Server Components 进行客户端和服务器端渲染，通过 Next.js 在服务端的静态和动态渲然进一步优化。在 Edge 和 Node.js 运行时支持 Streaming."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/app/building-your-application/data-fetching",children:"数据获取"})}),(0,s.jsxs)(t.td,{children:["在 Server Components 中使用 async/await 简化了数据获取方式，以及扩展的 ",(0,s.jsx)(t.code,{children:"fetch"})," API 用于请求缓存、数据缓存和重新验证。"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/app/building-your-application/styling",children:"样式"})}),(0,s.jsx)(t.td,{children:"支持你选择样式方案，包括 CSS Modules，Tailwind CSS，和 CSS-in-JS。"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/app/building-your-application/optimizing",children:"优化"})}),(0,s.jsx)(t.td,{children:"Image，Fonts 和 Script 优化以改善应用的 Core Web Vitals 和用户体验。"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/app/building-your-application/configuring/typescript",children:"TypeScript"})}),(0,s.jsx)(t.td,{children:"改进了对 TypeScript 的支持，包括更好的类型检查和更高效的编译，以及自定义 TypeScript 插件和类型检查器。"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"如何使用文档",children:"如何使用文档"}),"\n",(0,s.jsx)(t.p,{children:"在屏幕左侧，你会看到文档导航栏。文档页面按从基础到高级的顺序排列，因此你可以在构建应用程序时逐步阅读。不过，你也可以按照任何顺序阅读文档，或跳到适用于你的使用案例的页面。"}),"\n",(0,s.jsx)(t.p,{children:"在屏幕右侧，你会看到一个目录，可以更方便地在页面各部分之间进行导航。如果需要快速查找页面，可以使用顶部的搜索栏或搜索快捷键（Ctrl+K 或 Cmd+K）。"}),"\n",(0,s.jsxs)(t.p,{children:["要开始使用，请查看 ",(0,s.jsx)(t.a,{href:"/docs/getting-started/installation",children:"安装"}),"指南。"]}),"\n",(0,s.jsx)(t.h2,{id:"app-router-vs-pages-router",children:"App Router vs Pages Router"}),"\n",(0,s.jsx)(t.p,{children:"Next.js 有两种不同的路由: App Router 和 Pages Router。 App Router 是一种较新的路由，允许你使用 React 的最新功能，如 Server Components 和 Streaming。Pages Router 是最初的 Next.js 路由器, 允许你构建服务器渲染的 React 应用程序，并继续支持旧的 Next.js 应用程序."}),"\n",(0,s.jsx)(t.p,{children:"在侧边栏的顶部，你会发现一个下拉菜单，允许你在 App Router 和 Pages Router 之间切换。由于每个目录都有独特的功能，因此跟踪选择了哪个选项卡非常重要。"}),"\n",(0,s.jsx)(t.p,{children:"页面顶部的面包屑也将指示你正在查看 App Router 文档还是 Pages Router 文档。"}),"\n",(0,s.jsx)(t.h2,{id:"必备知识",children:"必备知识"}),"\n",(0,s.jsx)(t.p,{children:"虽然我们的文档旨在为初学者提供方便，但我们需要建立一个基准，以便文档能始终专注于 Next.js 功能。我们将确保在引入新概念时提供相关文档的链接。"}),"\n",(0,s.jsxs)(t.p,{children:["要充分利用我们的文档，建议你对 HTML、CSS 和 React 有基本的了解。如果你需要补习 React 技能，请查看我们的 ",(0,s.jsx)(t.a,{href:"https://nextjs.org/learn/foundations/about-nextjs",children:"Next.js 基础课程"}),"，它将为你介绍基础知识。"]}),"\n",(0,s.jsx)(t.h2,{id:"无障碍",children:"无障碍"}),"\n",(0,s.jsx)(t.p,{children:"为了在阅读文档时使用屏幕阅读器获得最佳辅助功能，我们建议使用 Firefox 和 NVDA，或 Safari 和 VoiceOver。"}),"\n",(0,s.jsx)(t.h2,{id:"加入我们的社区",children:"加入我们的社区"}),"\n",(0,s.jsxs)(t.p,{children:["如果您对 Next.js 有任何疑问，欢迎随时在 ",(0,s.jsx)(t.a,{href:"https://github.com/vercel/next.js/discussions",children:"GitHub Discussions"}),"，",(0,s.jsx)(t.a,{href:"https://discord.com/invite/bUG2bvbtHy",children:"Discord"}),"，",(0,s.jsx)(t.a,{href:"https://twitter.com/nextjs",children:"Twitter"})," 和 ",(0,s.jsx)(t.a,{href:"https://www.reddit.com/r/nextjs",children:"Reddit"})," 上提问."]})]})}t.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/docs/getting-started.mdx",route:"/docs/getting-started",frontMatter:{title:"简介",description:"欢迎阅读 Next.js 文档！"},timestamp:1693579869e3,title:"简介",headings:d},pageNextRoute:"/docs/getting-started"})}},function(e){e.O(0,[178,774,888,179],function(){return e(e.s=6310)}),_N_E=e.O()}]);