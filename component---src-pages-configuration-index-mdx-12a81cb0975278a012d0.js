(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,r);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(p.b)(l.Link,{className:v.link,to:""+c},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:v.list},r))))))},t}(r.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,h=s.theme,v=s.description,k=s.keywords,P=Object(w.a)().interiorTheme,N=Object(l.useStaticQuery)("2456312558").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,I=m?y.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",E=h||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:E,pageTitle:g,pageDescription:v,pageKeywords:k,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:E}),m&&Object(p.b)(T,{slug:y,tabs:m,currentTab:I}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d})),Object(p.b)(O.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:I}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WjYh:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={_frontmatter:b},d=l.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("strong",null,"Updated 10/26/2020")," - Work in progress"),Object(i.b)("h2",null,"Environment pre-requisites"),Object(i.b)("p",null,"In order to run this use case, you will need to have installed the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Operational Decision Manager")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-configuration-index-mdx-12a81cb0975278a012d0.js.map