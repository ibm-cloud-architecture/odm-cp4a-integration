(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),n=t.n(i),s=t("NmYn"),o=t.n(s),r=t("Wbzz"),c=t("Xrax"),b=t("k4MR"),l=t("TSYQ"),d=t.n(l),p=t("QH2O"),h=t.n(p),m=t("qKvR"),g=function(e){var a,t=e.title,i=e.theme,n=e.tabs,s=void 0===n?[]:n;return Object(m.b)("div",{className:d()(h.a.pageHeader,(a={},a[h.a.withTabs]=s.length,a[h.a.darkMode]="dark"===i,a))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:h.a.text},t)))))},u=t("BAC9"),f=function(e){var a=e.relativePagePath,t=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||i,s=n.baseUrl,o=n.subDirectory,c=s+"/edit/"+n.branch+o+"/src/pages"+a;return s?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},A=t("FCXl"),O=t("dI71"),w=t("I8xM"),j=function(e){function a(){return e.apply(this,arguments)||this}return Object(O.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,i=t.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var a,n=o()(e,{lower:!0,strict:!0}),s=n===i,c=new RegExp(i+"/?(#.*)?$"),b=t.replace(c,n);return Object(m.b)("li",{key:e,className:d()((a={},a[w.selectedItem]=s,a),w.listItem)},Object(m.b)(r.Link,{className:w.link,to:""+b},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:w.list},n))))))},a}(n.a.Component),y=t("MjG9"),v=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,n=e.Title,s=a.frontmatter,l=void 0===s?{}:s,d=a.relativePagePath,p=a.titleType,h=l.tabs,u=l.title,O=l.theme,w=l.description,x=l.keywords,k=Object(v.a)().interiorTheme,N=Object(r.useStaticQuery)("2456312558").site.pathPrefix,C=N?i.pathname.replace(N,""):i.pathname,E=h?C.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",T=O||k;return Object(m.b)(b.a,{tabs:h,homepage:!1,theme:T,pageTitle:u,pageDescription:w,pageKeywords:x,titleType:p},Object(m.b)(g,{title:n?Object(m.b)(n,null):u,label:"label",tabs:h,theme:T}),h&&Object(m.b)(j,{slug:C,tabs:h,currentTab:E}),Object(m.b)(y.a,{padded:!0},t,Object(m.b)(f,{relativePagePath:d})),Object(m.b)(A.a,{pageContext:a,location:i,slug:C,tabs:h,currentTab:E}),Object(m.b)(c.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},KQsg:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return l}));var i=t("wx14"),n=t("zLVn"),s=(t("q1tI"),t("7ljp")),o=t("013z"),r=(t("qKvR"),{}),c={_frontmatter:r},b=o.a;function l(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(b,Object(i.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Champion/challenger is a common decision-proofing practice in the banking and lending industries. It is very similar in principle to A/B testing, and is performed in a ",Object(s.b)("em",{parentName:"p"},"production environment"),"."),Object(s.b)("p",null,"The ",Object(s.b)("em",{parentName:"p"},"champion")," is the current version of the decision deployed in production. The ",Object(s.b)("em",{parentName:"p"},"challenger")," is the new version of the decision that will also be deployed in production to be tested against the champion. When the decision is called, a portion (usually a majority) of the traffic will be routed to the champion, and the remainder to the challenger."),Object(s.b)("p",null,"The goal is then to capture execution details for both versions and compare them using the desired KPIs. The actual implementation of the routing depends on the application integration approach that you want to use. With the containerized version of ODM, there is no out-of-the-box approach to manage this routing within the scope of the Rule Execution Server; in particular, the Ruleset Interceptor approach is not available for containerized deployments. "),Object(s.b)("h2",null,"How does BAI help?"),Object(s.b)("p",null,"From a monitoring and analytics point of view, the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSYHZ8_20.0.x/com.ibm.dba.bai/topics/con_bai_overview_top.html"}),"IBM Business Automation Insights")," (BAI) component capabilities is an obvious candidate to support the champion/challenger practice requirements. BAI provides instant feedback on the champion and challenger behavior through dashboards. It then provides the ability to perform more complex segmentation and analysis based on the decision trace from each request execution by working on the business events that it collects in a data lake."),Object(s.b)("p",null,"The ODM and BAI component architecture is shown on the figure below. The champion/challenger flow across these components is the follwoing:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The enterprise client application invokes the ODM decision service without specifying a service version number."),Object(s.b)("li",{parentName:"ol"},"The connectivity component manages the routing of the traffic to the champion or challenger decision service."),Object(s.b)("li",{parentName:"ol"},"The business events from the decision service execution are published to a Kafka queue and routed to the BAI component."),Object(s.b)("li",{parentName:"ol"},"BAI sends the timeseries events to Elasticsearch so that they can be filtered and displayed side by side in a Kibana dashboard.")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"786px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.22222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7CAAAOwgEVKEqAAAACsklEQVQ4y4VTS08TURTuP/NnuNKF+gdw78IQjTs2ulETTAwLFkQNJoDgO5JWKNBSpkyfdN6d53112hL188xMC8SQuDg595459zvnfN+ZkhACSkpwLsAZg0xHiE0X1duP4e1rkNMxBOeIwwjmVgV+30ZIuWGcFJbQObBhNd4giVyUOCX7QYQ5MEtiMJag1jEQJywHkyOFwHSwf+cJ9I0yLC5heSHMYQgrVDB6RzhcuwXfrKPUo8SllS1UT3oYhgKa3kf5QMPdxVf4WW9hOknz7h3HRrVygE67Q4WpuJhZNh1N1mnrSJIEJcf1sLNbhWnZ6Psc+lAgCHys7OyifWYgVYo65lBKwow5AgIf0VmQcQKTBC6lglQpBPlSNmpKH9PxCIZuorWnIxUc3c0KgoGVPxQZFV4A7cEyBt9r8M+n6K5so/d8Hb6awDVP0dxaQGhrGYeCeCMxfk/RevEOjftPEbs+Kjcfwikf56JIKjq0HFQWX6L5dR9eOob29guaq5vwRArD6KDxeQm+0y1EyUAFtW6Tgk7bQRxHKH/6BodoSMcZhxyMM/TiEEMS7ZxiMb2JmMCYtkKpERLxhyhIi5GzByNJI4cGNK9JZEtKZqR+ANtx8pE5Ed790YA3cCnmwqNcJ24j08D1XMigCh6bRYeMJxirX6gO1vBee0TrIGD6MfQzG7XTLqyIo60bqC88Q3NjF8e9ANvaMl4f3cNJx4bWaoLt3QAbrF52mCnl0YKabjdfhXz/yCtSOeMwikLohycwSfnJeELrdYTy4ceCf6LrtP4Brt0tAC9AhSKwEea8Fp7PKJFwE4WQZfk0VeaZmvFLfxIjHil20eHc/3ue32Paxap1hiEJJoljLngOPG9IzO6ly8D1NgdMyFf6NQyjoAC8UvCq/RfwKqjM1iujIuuGX5/7F7Q9CUT0QKl3AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"bai odm arch",title:"bai odm arch",src:"/refarch-dba/static/bcff36a913350331f55ae2843e74898f/86c0d/bai-odm-arch.png",srcSet:["/refarch-dba/static/bcff36a913350331f55ae2843e74898f/7fc1e/bai-odm-arch.png 288w","/refarch-dba/static/bcff36a913350331f55ae2843e74898f/a5df1/bai-odm-arch.png 576w","/refarch-dba/static/bcff36a913350331f55ae2843e74898f/86c0d/bai-odm-arch.png 786w"],sizes:"(max-width: 786px) 100vw, 786px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h2",null,"Try it!"),Object(s.b)("h3",null,"Load the predefined Kibana dashboard"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Log-in to the Kibana console and click the ",Object(s.b)("inlineCode",{parentName:"li"},"Management")," tab."),Object(s.b)("li",{parentName:"ul"},"Select the ",Object(s.b)("inlineCode",{parentName:"li"},"Import")," link to import the pre-configured ",Object(s.b)("inlineCode",{parentName:"li"},"bai-export - champion/challenger-dashboard.json")," dashboard found in the ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4d-integration/tree/master/data/exports"}),"export")," folder. This will import the dashboard, visualization and query objects for Kibana. All these objects are prefixed with ",Object(s.b)("inlineCode",{parentName:"li"},"Risk -")," so you can find them easily from the Search  field.")),Object(s.b)("p",null,"In the ",Object(s.b)("inlineCode",{parentName:"p"},"Dashboard")," tab of the Kibana console, you can search for the ",Object(s.b)("inlineCode",{parentName:"p"},"Risk - CC Assessment Dashboard")," dashboard and open it. The empty dashboard will look like this:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"861px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACIUlEQVQoz51STW8SURR9taaRWkXSxK3+BH+Iq4pgKg3VuFGigTFQpLqpm2rcuzCpP4GdoTGpbElMMFpDE7qEDdAO8z5m3ueMd2ZEQFZ6c/Pmzn3vvHvePRfd3v9ws/D6xuO9i9nnjfaJkIYQCuY4Dnawbdue5waRSSEYpUJw7rmSe/BBt8rv1h/uJvO1Cxnr8NsJ98TAJgObgg/H4To4pzbxHCawK4mn8G+X4GglW0rmdhL3LLTx9NPXjk31CHPmKQJHJ05nYgy3TBwlC2+ThTdXn+yjB3uH37uKy7MxJnBcaqUMOASUeZAZO4S5XGkDLpURUqP1lx9Tuwep2gEqvW+e9uFtWhvf94OJGeNDJgh840/zEAAeXc5VUvlaYrOMNp41j09DsDHBjIXg+cwUvJy1kvkXq7kddKfY/PmP4NVcZW2remWriu6W4spKa4zxaHSmlJoFc86HwyFjzA8tCMFQ9tp2DdRazlhfjruhnkoRQkBmzsUs2HVduBRGYApe2SyDyIn7lf+hjdLFpYwFnFEaaHdj2nGHYY2DuP9RHK7wo0O1NALYEiAj/9zugFC2QzBhICxzPTgEUoPOlDLQmTIXtuA5C2CoHNGOLtZSykXaQoh52gtgsE6n02g05ocEOOl6vd7r9aKkmYDTgCzOgvv9frvd/qsyVGu1Wue2HbMLwWu56vVHry5Bt9PFox9hw+BF0VRPZ/vPnEMy7kI8278AvF4b1j2mH38AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"empty dashboard",title:"empty dashboard",src:"/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/a448c/empty-dashboard.png",srcSet:["/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/7fc1e/empty-dashboard.png 288w","/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/a5df1/empty-dashboard.png 576w","/refarch-dba/static/f8a459b41569f730d9f561ece521da5a/a448c/empty-dashboard.png 861w"],sizes:"(max-width: 861px) 100vw, 861px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h3",null,"Deploy a champion and a challenger ruleset"),Object(s.b)("p",null,"You need at least 2 versions of the same ruleset to experiment."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"From ",Object(s.b)("inlineCode",{parentName:"li"},"risk-assessment-main")," decision service in Decision Center, start by deploying a first version of the ",Object(s.b)("inlineCode",{parentName:"li"},"assess_risk")," ruleset that will be the considered as champion."),Object(s.b)("li",{parentName:"ul"},"Create a branch of the decision service, modify some of the rules, for example the ",Object(s.b)("inlineCode",{parentName:"li"},"final risk")," decision table, in order to change the output of the decision, then deploy this second version of ",Object(s.b)("inlineCode",{parentName:"li"},"assess_risk")," to the Rule Execution Server (RES).")),Object(s.b)("p",null,"You should now have 2 versions of the same ruleset deployed to the RES, as shown below:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"826px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABsUlEQVQoz32SaW/UMBCG8///AHwApFVVgRDwoRKooqhAOYQoKt22q2ZzbE7nsOMrySabOAfjLl84pSfW2DOR33nHRoziIEJhFBWUq3HY9X2nxk4NQK+UGoZxmn5jmqe26xNWGT7mTlxsktxPWUp5RCgiJSJSr5hlVMi6FVXzJ0w2xjLElw66cbN1kGNWAYRXOSs1tMw08q+khTTsCH+34ihnppeFKYMgSFlCBOSSQlf8C6gxXFScnltLG0U591ABuDGJsUiI/A8/f85Y6cQELilEDYIBCDAr9+z1418BzXCll1Ij5xWvWwAMBCfBXDB4GO+Ab9LmapNHzbB3e5qhTA2jgagAR1XXQnK7retSjqof+k6julJyKTgcVlJUJQA7SgmG813bGMffvMXp+vlnb/HOOTyzD95ah+/dF1/8xx82R1+DxZvb+6+uH56Yj07MZx+dJ2cWbO+9vHrw+vbpp41BmFy6SZgLmJQV4xsf+wkFz31UXKysa9Nb2QGMHexc2SHEV2vP9FBSlHpUoFQIofrdPEOfAzwqaHyG7ka1a7aA6nQKkneN9DWoF7ypq2Zb/wCiOF0yD9OwCgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"two rs versions",title:"two rs versions",src:"/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/de0dc/two-rs-versions.png",srcSet:["/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/7fc1e/two-rs-versions.png 288w","/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/a5df1/two-rs-versions.png 576w","/refarch-dba/static/18e305cc81b524ccf88a47c3879b9d4c/de0dc/two-rs-versions.png 826w"],sizes:"(max-width: 826px) 100vw, 826px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Note that the provided Kibana queries and visualizations are filtering events for version 1.0 and 2.0 of the ",Object(s.b)("inlineCode",{parentName:"p"},"assess_risk")," ruleset. If you plan on using  different version numbers, you will need to update the queries and visualizations definitions with the appropriate ruleset version number.\nThe screenshot below shows an example of where you would have to update the version number for the queries:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"435px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABVklEQVQY041Qy0rDUBC9H+dKkYobNy78CEEQqV0IunUhbcWFHyBYGhBcu5E+VmKTNk2a1jRNSnKfebV5OZZaXYnnHu49M8ycGS6afExnM0sdqrKiGOOxYRh9WdE1Xe4pxmjUHwxMc1oUxXK5yLIsTbMkSfM8T+BJUzSzbUJI4PtCiGiFwA8AIGLQQQgC2mAAJITgnoehE7o458jzPM5Z8R/keQYH7m8gmB6GEcYEjDk4C4EJZYwTwjxMGGWuhymE9CuE4t9uaGhTzSbDGdEcploYxIpYg8yca66vO1S36chhwIkrTOxviP7aM44L7ObJzzTYGv5sQ7R1/Xpw192ttXaq7f16Z6/eLt12StXWdq17dPl0WGnob5pFY8sV4zl3aBQtkjBeEx0/vFck5bTRO3nslZvKuaScSUq5KZ9K6tX9y8XNs9mfOHzhYH/q+i6LwngZRGt+AjqCsXulOdcKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"query update",title:"query update",src:"/refarch-dba/static/5fb9fd78de4dcdfa076c4677ffdc635a/9f56a/query-update.png",srcSet:["/refarch-dba/static/5fb9fd78de4dcdfa076c4677ffdc635a/7fc1e/query-update.png 288w","/refarch-dba/static/5fb9fd78de4dcdfa076c4677ffdc635a/9f56a/query-update.png 435w"],sizes:"(max-width: 435px) 100vw, 435px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h3",null,"Generate requests to the decision service"),Object(s.b)("p",null,"A number of predefined JSON request payloads for the ",Object(s.b)("inlineCode",{parentName:"p"},"assess_risk")," decision are defined in the ",Object(s.b)("inlineCode",{parentName:"p"},"scenarios.json")," file in the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4d-integration/tree/master/data/champion-challenger"}),"champion-challenger")," folder.\nTo invoke these requests, you can use the ",Object(s.b)("inlineCode",{parentName:"p"},"send-requests.bat|sh")," script located in the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4d-integration/tree/master/hierarchical-model/tools"}),"tools")," Java project, with 3 parameters:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"the champion ruleset path"),Object(s.b)("li",{parentName:"ul"},"the challenger ruleset path"),Object(s.b)("li",{parentName:"ul"},"The percent of calls routed to the champion")),Object(s.b)("p",null,"For example, use the command ",Object(s.b)("inlineCode",{parentName:"p"},"send-requests /lending/1.0/assess_risk/1.0 /lending/1.0/assess_risk/1.1 80"),". You will an output similar to this:\n",Object(s.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABGElEQVQY00WQ3W6CQBCF96agxKYqTbUX6LI7y/4R5VlsUi1NfRu8oaS+iO/Ys4tpT/gZhvnOGWCX7tL3/fV6/cERNQzfo4a/6l/D2O+67na7sZfVarFYzOdPy3jL83walOFMHpJYT9M0nUwmWZYlSYJ69jhjjB0Ob8w5p7VRSukqyEPO7aIUUV3X+/3OGONiUxttrW2a5nW9/jqfmTFWVRWRBC+l1HAKo3DwnHM8+toTEd6CJxnG6to/53nbft5hKSSFETLWVpVGPBJKXuIaGKLg4j3csR3WAfx+PDEEUcy821s3zoEREQ7MHXYYM1oDzpfLDyTDGmacb3lZYk9FSkR7OBVFMTqiL4SolNpstqIU+DL84OOp/QWEl1Pap1oxuAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pushing requests",title:"pushing requests",src:"/refarch-dba/static/fb3ff14b1efbc239d25a86c20e02f8a9/3cbba/pushing-requests.png",srcSet:["/refarch-dba/static/fb3ff14b1efbc239d25a86c20e02f8a9/7fc1e/pushing-requests.png 288w","/refarch-dba/static/fb3ff14b1efbc239d25a86c20e02f8a9/a5df1/pushing-requests.png 576w","/refarch-dba/static/fb3ff14b1efbc239d25a86c20e02f8a9/3cbba/pushing-requests.png 1152w","/refarch-dba/static/fb3ff14b1efbc239d25a86c20e02f8a9/cc5f9/pushing-requests.png 1176w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("h3",null,"Watch the Kibana dashboard"),Object(s.b)("p",null,"Make sure to adjust the Kibana time range to a short, recent period (e.g. last 15 minutes) and watch the Kibana dashboard evolve. It will show you the number of requests for champion and challenger and the distribution of risks for each, similar to this:\n",Object(s.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACE0lEQVQoz11Sz2sTQRhdcGnxoBSv/lkqLf4ARdCj1VYrelHw4FXUmxhQKxKspEh/YKERExdpPRhpajHJ5seSbZakm83uzu7MzsyO38wmPTi8wzdved973zernb3x6My1h9+qDYyJO/QAgyPXG/mUMca5BJuA/w9t5srS9Owd408z5QLFSYxphBMJVQMwATBAjMfMMa+duvlk6vrj7T0zQMQLEKVcCMFoGicMK4QIj4LID2MqBBiQCQ967fTiy6n557vtHmhAh5DXsvc9hoQ6KjtPQcZYZB20vRYVcBNpykkC4stL+oXbO7U2UG3UX64W9mrGK3PNiVwp5nJoKLqvX/SWn23a5VWrpMRpQpk2c/XB9MW7P2otoD61vlaHJhS/3fpnqwwFZRBW4H7v79P7WZYPzS0b9aGA/Bqs+uSle5l42/651d2BYqNrfHcqUswZpOQE56urPXw0Iv6bxrqfyKEIOOtzi/rswm69I++Mrlnlt/WNdcuAvDAdzAvJ4VMjsN+bX97VN/eHTbkdrmJr527pcwvGgQlEFGN4PkKpmgoGTilLY0xQFFP5WglVjZjsmMrY2vn5ExNnPwj7g0EcRfbh4cj31V7GzkgdVx0ggVHOSpxtu2NZKysfK5VfuVyuUChkW83EjuOUSqV8Pl8sFimV+08yZ12KO1keTEiIQnhd9XtCbChgFGkWhCFCEZftxrH/AZ+pcuIuiC59AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"bai dashboard",title:"bai dashboard",src:"/refarch-dba/static/b8ea04411b6da36f53f4c1f7453cbdaf/3cbba/bai-dashboard.png",srcSet:["/refarch-dba/static/b8ea04411b6da36f53f4c1f7453cbdaf/7fc1e/bai-dashboard.png 288w","/refarch-dba/static/b8ea04411b6da36f53f4c1f7453cbdaf/a5df1/bai-dashboard.png 576w","/refarch-dba/static/b8ea04411b6da36f53f4c1f7453cbdaf/3cbba/bai-dashboard.png 1152w","/refarch-dba/static/b8ea04411b6da36f53f4c1f7453cbdaf/fda18/bai-dashboard.png 1164w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}l.isMDXComponent=!0},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-champchall-index-mdx-3d4498d3ef61750d9a10.js.map