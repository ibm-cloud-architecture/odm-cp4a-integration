(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("NmYn"),r=a.n(o),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),h=a.n(p),m=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:d()(h.a.pageHeader,(t={},t[h.a.withTabs]=o.length,t[h.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,o=n.baseUrl,r=n.subDirectory,c=o+"/edit/"+n.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},A=a("FCXl"),O=a("dI71"),w=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),o=n===i,c=new RegExp(i+"/?(#.*)?$"),l=a.replace(c,n);return Object(m.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=o,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+l},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:w.list},n))))))},t}(n.a.Component),y=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,p=t.titleType,h=b.tabs,g=b.title,O=b.theme,w=b.description,v=b.keywords,k=Object(x.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=N?i.pathname.replace(N,""):i.pathname,T=h?C.split("/").filter(Boolean).slice(-1)[0]||r()(h[0],{lower:!0}):"",E=O||k;return Object(m.b)(l.a,{tabs:h,homepage:!1,theme:E,pageTitle:g,pageDescription:w,pageKeywords:v,titleType:p},Object(m.b)(u,{title:n?Object(m.b)(n,null):g,label:"label",tabs:h,theme:E}),h&&Object(m.b)(j,{slug:C,tabs:h,currentTab:T}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:d})),Object(m.b)(A.a,{pageContext:t,location:i,slug:C,tabs:h,currentTab:T}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},KQsg:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var i,n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("qKvR"),{}),l=(i="InlineNotification",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:c},d=s.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"What is it?"),Object(r.b)("p",null,"Champion/challenger is a common decision-proofing practice in the banking and lending industries. It is very similar in principle to A/B testing, and is performed in a ",Object(r.b)("em",{parentName:"p"},"production environment"),"."),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"champion")," is the current version of the decision deployed in production. The ",Object(r.b)("em",{parentName:"p"},"challenger")," is the new version of the decision that will also be deployed in production to be tested against the champion. When the decision is called, a portion (usually a majority) of the traffic will be routed to the champion, and the remainder to the challenger."),Object(r.b)("p",null,"The goal is then to capture execution details for both versions and compare them using the desired KPIs. The actual implementation of the routing depends on the application integration approach that you want to use. With the containerized version of ODM, there is no out-of-the-box approach to manage this routing within the scope of the Rule Execution Server; in particular, the Ruleset Interceptor approach is not available for containerized deployments. "),Object(r.b)("h2",null,"How does BAI help?"),Object(r.b)("p",null,"From a monitoring and analytics point of view, the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSYHZ8_20.0.x/com.ibm.dba.bai/topics/con_bai_overview_top.html"}),"IBM Business Automation Insights")," (BAI) component capabilities is an obvious candidate to support the champion/challenger practice requirements. BAI provides instant feedback on the champion and challenger behavior through dashboards. It then provides the ability to perform more complex segmentation and analysis based on the decision trace from each request execution by working on the business events that it collects in a data lake."),Object(r.b)("p",null,"The ODM and BAI component architecture is shown on the figure below. The champion/challenger flow across these components is the follwoing:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The enterprise client application invokes the ODM decision service without specifying a service version number."),Object(r.b)("li",{parentName:"ol"},"The connectivity component manages the routing of the traffic to the champion or challenger decision service."),Object(r.b)("li",{parentName:"ol"},"The business events from the decision service execution are published to a Kafka queue and routed to the BAI component."),Object(r.b)("li",{parentName:"ol"},"BAI sends the timeseries events to Elasticsearch so that they can be filtered and displayed side by side in a Kibana dashboard.")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"786px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.22222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7CAAAOwgEVKEqAAAACsklEQVQ4y4VTS08TURTuP/NnuNKF+gdw78IQjTs2ulETTAwLFkQNJoDgO5JWKNBSpkyfdN6d53112hL188xMC8SQuDg595459zvnfN+ZkhACSkpwLsAZg0xHiE0X1duP4e1rkNMxBOeIwwjmVgV+30ZIuWGcFJbQObBhNd4giVyUOCX7QYQ5MEtiMJag1jEQJywHkyOFwHSwf+cJ9I0yLC5heSHMYQgrVDB6RzhcuwXfrKPUo8SllS1UT3oYhgKa3kf5QMPdxVf4WW9hOknz7h3HRrVygE67Q4WpuJhZNh1N1mnrSJIEJcf1sLNbhWnZ6Psc+lAgCHys7OyifWYgVYo65lBKwow5AgIf0VmQcQKTBC6lglQpBPlSNmpKH9PxCIZuorWnIxUc3c0KgoGVPxQZFV4A7cEyBt9r8M+n6K5so/d8Hb6awDVP0dxaQGhrGYeCeCMxfk/RevEOjftPEbs+Kjcfwikf56JIKjq0HFQWX6L5dR9eOob29guaq5vwRArD6KDxeQm+0y1EyUAFtW6Tgk7bQRxHKH/6BodoSMcZhxyMM/TiEEMS7ZxiMb2JmMCYtkKpERLxhyhIi5GzByNJI4cGNK9JZEtKZqR+ANtx8pE5Ed790YA3cCnmwqNcJ24j08D1XMigCh6bRYeMJxirX6gO1vBee0TrIGD6MfQzG7XTLqyIo60bqC88Q3NjF8e9ANvaMl4f3cNJx4bWaoLt3QAbrF52mCnl0YKabjdfhXz/yCtSOeMwikLohycwSfnJeELrdYTy4ceCf6LrtP4Brt0tAC9AhSKwEea8Fp7PKJFwE4WQZfk0VeaZmvFLfxIjHil20eHc/3ue32Paxap1hiEJJoljLngOPG9IzO6ly8D1NgdMyFf6NQyjoAC8UvCq/RfwKqjM1iujIuuGX5/7F7Q9CUT0QKl3AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"bai odm arch",title:"bai odm arch",src:"/refarch-dba/static/bcff36a913350331f55ae2843e74898f/86c0d/bai-odm-arch.png",srcSet:["/refarch-dba/static/bcff36a913350331f55ae2843e74898f/7fc1e/bai-odm-arch.png 288w","/refarch-dba/static/bcff36a913350331f55ae2843e74898f/a5df1/bai-odm-arch.png 576w","/refarch-dba/static/bcff36a913350331f55ae2843e74898f/86c0d/bai-odm-arch.png 786w"],sizes:"(max-width: 786px) 100vw, 786px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h2",null,"Try it!"),Object(r.b)("h3",null,"Load the predefined Kibana dashboard"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Log-in to the Kibana console and click the ",Object(r.b)("inlineCode",{parentName:"li"},"Management")," tab."),Object(r.b)("li",{parentName:"ul"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"Import")," link to import the pre-configured ",Object(r.b)("inlineCode",{parentName:"li"},"bai-export - champion/challenger-dashboard.json")," dashboard found in the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4d-integration/tree/master/data/exports"}),"export")," folder. This will import the dashboard, visualization and query objects for Kibana. All these objects are prefixed with ",Object(r.b)("inlineCode",{parentName:"li"},"Risk -")," so you can find them easily from the Search  field.")),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"Dashboard")," tab of the Kibana console, you can search for the ",Object(r.b)("inlineCode",{parentName:"p"},"Risk - CC Assessment Dashboard")," dashboard and open it. The empty dashboard will look like this:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"861px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACIUlEQVQoz51STW8SURR9taaRWkXSxK3+BH+Iq4pgKg3VuFGigTFQpLqpm2rcuzCpP4GdoTGpbElMMFpDE7qEDdAO8z5m3ueMd2ZEQFZ6c/Pmzn3vvHvePRfd3v9ws/D6xuO9i9nnjfaJkIYQCuY4Dnawbdue5waRSSEYpUJw7rmSe/BBt8rv1h/uJvO1Cxnr8NsJ98TAJgObgg/H4To4pzbxHCawK4mn8G+X4GglW0rmdhL3LLTx9NPXjk31CHPmKQJHJ05nYgy3TBwlC2+ThTdXn+yjB3uH37uKy7MxJnBcaqUMOASUeZAZO4S5XGkDLpURUqP1lx9Tuwep2gEqvW+e9uFtWhvf94OJGeNDJgh840/zEAAeXc5VUvlaYrOMNp41j09DsDHBjIXg+cwUvJy1kvkXq7kddKfY/PmP4NVcZW2remWriu6W4spKa4zxaHSmlJoFc86HwyFjzA8tCMFQ9tp2DdRazlhfjruhnkoRQkBmzsUs2HVduBRGYApe2SyDyIn7lf+hjdLFpYwFnFEaaHdj2nGHYY2DuP9RHK7wo0O1NALYEiAj/9zugFC2QzBhICxzPTgEUoPOlDLQmTIXtuA5C2CoHNGOLtZSykXaQoh52gtgsE6n02g05ocEOOl6vd7r9aKkmYDTgCzOgvv9frvd/qsyVGu1Wue2HbMLwWu56vVHry5Bt9PFox9hw+BF0VRPZ/vPnEMy7kI8278AvF4b1j2mH38AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"empty dashboard",title:"empty dashboard",src:"/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/a448c/empty-dashboard.png",srcSet:["/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/7fc1e/empty-dashboard.png 288w","/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/a5df1/empty-dashboard.png 576w","/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/a448c/empty-dashboard.png 861w"],sizes:"(max-width: 861px) 100vw, 861px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Deploy a champion and a challenger ruleset"),Object(r.b)("p",null,"You need at least 2 versions of the same ruleset to experiment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"From ",Object(r.b)("inlineCode",{parentName:"li"},"risk-assessment-main")," decision service in Decision Center, start by deploying a first version of the ",Object(r.b)("inlineCode",{parentName:"li"},"assess_risk")," ruleset that will be the considered as champion."),Object(r.b)("li",{parentName:"ul"},"Create a branch of the decision service, modify some of the rules, for example the ",Object(r.b)("inlineCode",{parentName:"li"},"final risk")," decision table, in order to change the output of the decision, then deploy this second version of ",Object(r.b)("inlineCode",{parentName:"li"},"assess_risk")," to the Rule Execution Server (RES).")),Object(r.b)("p",null,"You should now have 2 versions of the same ruleset deployed to the RES, as shown below:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"826px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABsUlEQVQoz32SaW/UMBCG8///AHwApFVVgRDwoRKooqhAOYQoKt22q2ZzbE7nsOMrySabOAfjLl84pSfW2DOR33nHRoziIEJhFBWUq3HY9X2nxk4NQK+UGoZxmn5jmqe26xNWGT7mTlxsktxPWUp5RCgiJSJSr5hlVMi6FVXzJ0w2xjLElw66cbN1kGNWAYRXOSs1tMw08q+khTTsCH+34ihnppeFKYMgSFlCBOSSQlf8C6gxXFScnltLG0U591ABuDGJsUiI/A8/f85Y6cQELilEDYIBCDAr9+z1418BzXCll1Ij5xWvWwAMBCfBXDB4GO+Ab9LmapNHzbB3e5qhTA2jgagAR1XXQnK7retSjqof+k6julJyKTgcVlJUJQA7SgmG813bGMffvMXp+vlnb/HOOTyzD95ah+/dF1/8xx82R1+DxZvb+6+uH56Yj07MZx+dJ2cWbO+9vHrw+vbpp41BmFy6SZgLmJQV4xsf+wkFz31UXKysa9Nb2QGMHexc2SHEV2vP9FBSlHpUoFQIofrdPEOfAzwqaHyG7ka1a7aA6nQKkneN9DWoF7ypq2Zb/wCiOF0yD9OwCgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"two rs versions",title:"two rs versions",src:"/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/de0dc/two-rs-versions.png",srcSet:["/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/7fc1e/two-rs-versions.png 288w","/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/a5df1/two-rs-versions.png 576w","/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/de0dc/two-rs-versions.png 826w"],sizes:"(max-width: 826px) 100vw, 826px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Note that the provided Kibana queries and visualizations are filtering events for version 1.0 and 2.0 of the ",Object(r.b)("inlineCode",{parentName:"p"},"assess_risk")," ruleset. If you plan on using  different version numbers, you will need to update the queries and visualizations definitions with the appropriate ruleset version number.\nThe screenshot below shows an example of where you would have to update the version number for the queries:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"435px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABVklEQVQY041Qy0rDUBC9H+dKkYobNy78CEEQqV0IunUhbcWFHyBYGhBcu5E+VmKTNk2a1jRNSnKfebV5OZZaXYnnHu49M8ycGS6afExnM0sdqrKiGOOxYRh9WdE1Xe4pxmjUHwxMc1oUxXK5yLIsTbMkSfM8T+BJUzSzbUJI4PtCiGiFwA8AIGLQQQgC2mAAJITgnoehE7o458jzPM5Z8R/keQYH7m8gmB6GEcYEjDk4C4EJZYwTwjxMGGWuhymE9CuE4t9uaGhTzSbDGdEcploYxIpYg8yca66vO1S36chhwIkrTOxviP7aM44L7ObJzzTYGv5sQ7R1/Xpw192ttXaq7f16Z6/eLt12StXWdq17dPl0WGnob5pFY8sV4zl3aBQtkjBeEx0/vFck5bTRO3nslZvKuaScSUq5KZ9K6tX9y8XNs9mfOHzhYH/q+i6LwngZRGt+AjqCsXulOdcKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"query update",title:"query update",src:"/refarch-dba/static/5fb9fd78de4dcdfa076c4677ffdc635a/9f56a/query-update.png",srcSet:["/refarch-dba/static/5fb9fd78de4dcdfa076c4677ffdc635a/7fc1e/query-update.png 288w","/refarch-dba/static/5fb9fd78de4dcdfa076c4677ffdc635a/9f56a/query-update.png 435w"],sizes:"(max-width: 435px) 100vw, 435px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("strong",null,"Updated 11/16/2020")," - Work in progress"))}p.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-champchall-index-mdx-a325867dfbe599fe95c1.js.map