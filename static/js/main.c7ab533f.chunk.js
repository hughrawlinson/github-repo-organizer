(this["webpackJsonpgithub-repo-organizer"]=this["webpackJsonpgithub-repo-organizer"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(14),o=n.n(s),i=n(17),c=n(10),l=n(191),u=n(189),p=n(75),j=n(188),b=n(185),g=n(103),O=n.n(g),d=n(190),m=n(55),h=n(193),x=n(184),f=n(186),S=n(187),w=n(59),v=n(22),y=n(96),C=n.n(y),R=n(7);class T extends r.Component{render(){return Object(R.jsxs)(a.a.Fragment,{children:[Object(R.jsx)(p.a,{variant:"display1",children:"Log in!"}),Object(R.jsx)(p.a,{paragraph:!0,children:"Please log in with GitHub to start organizing your repositories."})]})}}var E=T,k=n(143),I=n(194),A=n(21),_=n(9);const L=e=>Object(R.jsx)(_.b,Object(i.a)({formatterComponent:({value:e})=>e.toLocaleDateString()},e)),N=e=>Object(R.jsx)(_.b,Object(i.a)({formatterComponent:({value:{href:e,title:t}})=>Object(R.jsx)("a",{href:e,children:t})},e)),F=e=>Object(R.jsx)(_.b,Object(i.a)({formatterComponent:({value:e})=>e?Object(R.jsx)(R.Fragment,{children:e.map((e=>Object(R.jsx)(I.a,{style:{margin:"3px"},label:e},e)))}):null},e)),G=e=>Object(R.jsx)(_.b,Object(i.a)({formatterComponent:({value:e})=>Object(R.jsx)(I.a,{label:e?"True":"False"})},e)),P=e=>Object(R.jsx)(_.b,Object(i.a)({formatterComponent:({value:e})=>e.length},e)),D=[{columnName:"topics",wordWrapEnabled:!0},{columnName:"description",wordWrapEnabled:!0}];var z=Object(m.b)((e=>({gridState:e.gridState})),(e=>({setGridState:t=>e({type:"SET_GRID_STATE",gridState:t})})))(Object(c.a)((e=>({})))((function({repositories:e,gridState:t,setGridState:n}){return Object(R.jsx)(k.a,{children:Object(R.jsxs)(A.b,{columns:[{name:"name",title:"Name",getCellValue:e=>({href:e.url,title:e.name})},{name:"description",title:"Description"},{name:"createdAt",title:"Created At",getCellValue:e=>new Date(e.createdAt)},{name:"topics",title:"Topics"},{name:"stars",title:"Stars"},{name:"language",title:"Language"},{name:"owner",title:"Owner"},{name:"isPrivate",title:"Private"},{name:"isArchived",title:"Archived"},{name:"isFork",title:"Fork"},{name:"licenseNickname",title:"License"},{name:"vulnerabilityAlerts",title:"Vulnerability Alerts"},{name:"collaborators",title:"Collaborators",getCellValue:e=>e.collaborators&&e.collaborators.map((e=>e.login))},{name:"issueCount",title:"Open Issue Count"},{name:"pullRequestCount",title:"Open Pull Request Count"}],rows:e,children:[Object(R.jsx)(L,{for:["createdAt"]}),Object(R.jsx)(N,{for:["name"]}),Object(R.jsx)(F,{for:["topics","collaborators"]}),Object(R.jsx)(G,{for:["isPrivate","isArchived","isFork"]}),Object(R.jsx)(P,{for:["vulnerabilityAlerts"]}),Object(R.jsx)(_.e,{defaultFilters:[],filters:t.filteringState,onFiltersChange:function(e){n(Object(i.a)(Object(i.a)({},t),{},{filteringState:e}))}}),Object(R.jsx)(_.p,{defaultSorting:[],sorting:t.sortingState,onSortingChange:function(e){n(Object(i.a)(Object(i.a)({},t),{},{sortingState:e}))}}),Object(R.jsx)(_.m,{defaultCurrentPage:0,pageSize:40}),Object(R.jsx)(_.o,{value:t.searchState,onValueChange:function(e){n(Object(i.a)(Object(i.a)({},t),{},{searchState:e}))}}),Object(R.jsx)(_.i,{}),Object(R.jsx)(_.k,{}),Object(R.jsx)(_.j,{}),Object(R.jsx)(A.e,{columnExtensions:D}),Object(R.jsx)(A.h,{showSortingControls:!0}),Object(R.jsx)(A.g,{showFilterSelector:!0}),Object(R.jsx)(A.f,{hiddenColumnNames:t.columnVisibilityState,onHiddenColumnNamesChange:function(e){n(Object(i.a)(Object(i.a)({},t),{},{columnVisibilityState:e}))}}),Object(R.jsx)(A.i,{}),Object(R.jsx)(A.d,{}),Object(R.jsx)(A.a,{}),Object(R.jsx)(A.c,{})]})})})));function q(e){return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(z,{repositories:e.repositories})})}var V=e=>{const t=e.repositories.flatMap((e=>e.topics)).reduce(((e,t)=>Object(i.a)(Object(i.a)({},e),{},{[t]:e[t]?e[t]+1:1})),{});const n=Object.entries(t).map((([e,t])=>({topicName:e,topicCount:t})));return Object(R.jsx)(k.a,{children:Object(R.jsxs)(A.b,{columns:[{name:"topicName",title:"Topic Name"},{name:"topicCount",title:"Topic Count"}],rows:n,children:[Object(R.jsx)(_.p,{defaultSorting:[{columnName:"topicCount",direction:"desc"}]}),Object(R.jsx)(_.k,{}),Object(R.jsx)(A.e,{}),Object(R.jsx)(A.h,{showSortingControls:!0})]})})};var H=e=>{const t=e.repositories.map((e=>e.licenseNickname)).reduce(((e,t)=>Object(i.a)(Object(i.a)({},e),{},{[t]:e[t]?e[t]+1:1})),{});const n=Object.entries(t).map((([e,t])=>({license:e,licenseCount:t})));return Object(R.jsx)(k.a,{children:Object(R.jsxs)(A.b,{columns:[{name:"license",title:"License"},{name:"licenseCount",title:"License Count"}],rows:n,children:[Object(R.jsx)(_.p,{defaultSorting:[{columnName:"licenseCount",direction:"desc"}]}),Object(R.jsx)(_.k,{}),Object(R.jsx)(A.e,{}),Object(R.jsx)(A.h,{showSortingControls:!0})]})})};var W=e=>{const t=e.repositories.map((e=>e.language)).reduce(((e,t)=>Object(i.a)(Object(i.a)({},e),{},{[t]:e[t]?e[t]+1:1})),{});const n=Object.entries(t).map((([e,t])=>({language:e,languageCount:t})));return Object(R.jsx)(k.a,{children:Object(R.jsxs)(A.b,{columns:[{name:"language",title:"Language"},{name:"languageCount",title:"Count"}],rows:n,children:[Object(R.jsx)(_.p,{defaultSorting:[{columnName:"languageCount",direction:"desc"}]}),Object(R.jsx)(_.k,{}),Object(R.jsx)(A.e,{}),Object(R.jsx)(A.h,{showSortingControls:!0})]})})};class U extends r.Component{constructor(e){super(e),this.state={drawerOpen:!1},this.ifLoggedOut=this.ifLoggedOut.bind(this),this.ifLoggedIn=this.ifLoggedIn.bind(this),this.ifRepositories=this.ifRepositories.bind(this)}toggleDrawer(e){this.setState((t=>Object(i.a)(Object(i.a)({},t),{},{drawerOpen:e||!t.drawerOpen})))}ifRepositories(e){return this.props.repositories?e:null}ifLoggedOut(e){return this.props.loggedIn?null:e}ifLoggedIn(e){return this.props.loggedIn?e:null}render(){const e=this.props.classes;return Object(R.jsxs)(a.a.Fragment,{children:[Object(R.jsx)(d.a,{}),Object(R.jsx)(w.a,{children:Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(l.a,{children:Object(R.jsxs)(u.a,{children:[this.ifLoggedIn(Object(R.jsx)(b.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:()=>this.toggleDrawer(),children:Object(R.jsx)(O.a,{})})),Object(R.jsx)(p.a,{variant:"h6",color:"inherit",className:e.grow,children:"GitHub Repo Organizer"}),this.ifLoggedOut(Object(R.jsx)(j.a,{onClick:this.props.startLogIn,color:"inherit",children:"Login"})),this.ifLoggedIn(Object(R.jsx)(j.a,{onClick:this.props.refresh,color:"inherit",children:"Refresh"}))]})}),Object(R.jsx)(h.a,{open:this.state.drawerOpen,onClose:()=>this.toggleDrawer(!1),children:Object(R.jsx)("div",{onClick:()=>this.toggleDrawer(!1),onKeyDown:()=>this.toggleDrawer(!1),children:Object(R.jsxs)(x.a,{children:[Object(R.jsx)(f.a,{button:!0,children:Object(R.jsx)(w.b,{to:"/github-repo-organizer/",children:Object(R.jsx)(S.a,{primary:"Repositories"})})}),Object(R.jsx)(f.a,{button:!0,children:Object(R.jsx)(w.b,{to:"/github-repo-organizer/topics",children:Object(R.jsx)(S.a,{primary:"Topics"})})}),Object(R.jsx)(f.a,{button:!0,children:Object(R.jsx)(w.b,{to:"/github-repo-organizer/licenses",children:Object(R.jsx)(S.a,{primary:"Licenses"})})}),Object(R.jsx)(f.a,{button:!0,children:Object(R.jsx)(w.b,{to:"/github-repo-organizer/languages",children:Object(R.jsx)(S.a,{primary:"Languages"})})})]})})}),Object(R.jsxs)("main",{className:e.content,children:[Object(R.jsx)("div",{className:e.appBarSpacer}),this.ifLoggedOut(Object(R.jsx)(E,{})),this.ifLoggedIn(Object(R.jsxs)(v.c,{children:[Object(R.jsx)(v.a,{exact:!0,path:"/github-repo-organizer/",component:e=>{const t=C.a.parse(e.location.search);return t.gridState&&this.props.setGridState(JSON.parse(t.gridState)),Object(R.jsx)(q,{queryParams:t,repositories:this.props.repositories||[]})}}),Object(R.jsx)(v.a,{exact:!0,path:"/github-repo-organizer/topics",component:()=>Object(R.jsx)(V,{repositories:this.props.repositories})}),Object(R.jsx)(v.a,{exact:!0,path:"/github-repo-organizer/licenses",component:()=>Object(R.jsx)(H,{repositories:this.props.repositories})}),Object(R.jsx)(v.a,{exact:!0,path:"/github-repo-organizer/languages",component:()=>Object(R.jsx)(W,{repositories:this.props.repositories})})]}))]})]})})]})}}var B=Object(m.b)((e=>({loggedIn:e.loggedIn,repositories:e.repositories})),(e=>({startLogIn:()=>e({type:"START_LOG_IN"}),refresh:()=>e({type:"REFRESH_REPOSITORIES"}),loadRepositories:()=>e({type:"START_LOAD_REPOSITORIES"}),loadUser:()=>e({type:"START_LOAD_USER"}),setGridState:t=>e({type:"SET_GRID_STATE",gridState:t})})))(Object(c.a)((e=>({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),height:"100vh",overflow:"auto"}})))(U)),Q=n(50),J=n(110),K=n(20),M=n.n(K),X=n(24),Y=n(85),Z=n.n(Y),$=n(86),ee=n(70),te={description:{getColumnName:()=>"description",getColumnType:()=>({dataType:"string",dataSource:"GitHubGraphQL"}),getColumnFragment:()=>({name:"description",fragment:"fragment description on Repository { description } "})},name:{getColumnName:()=>"name",getColumnType:()=>({dataType:"string",dataSource:"GitHubGraphQL"}),getColumnFragment:()=>({name:"name",fragment:"fragment name on Repository { name } "})},createdAt:{getColumnName:()=>"createdAt",getColumnType:()=>({dataType:"string",dataSource:"GitHubGraphQL"}),getColumnFragment:()=>({name:"createdAt",fragment:" fragment createdAt on Repository { createdAt } "})},repositoryTopics:{getColumnName:()=>"repositoryTopics",getColumnType:()=>({dataType:"string",dataSource:"GitHubGraphQL"}),getColumnFragment:()=>({name:"repositoryTopics",fragment:"fragment repositoryTopics on Repository { repositoryTopics(first:100) { nodes { topic { id name } } } }"})}};var ne=e=>"query {\n    viewer {\n      repositories (first:100".concat(e?', after:"'+e+'"':"",") {\n        pageInfo {\n          endCursor\n        }\n        totalCount\n        nodes {\n          id\n          ").concat(Object.values(te).map((e=>"...".concat(e.getColumnFragment().name,"\n"))),"\n          ...stargazers\n          ...primaryLanguage\n          ...private\n          ...archived\n          ...issues\n          ...pullRequestCount\n          ...owner\n          ...nameWithOwner\n          ...url\n          ...fork\n          ...licenses\n          ...vulnerabilityAlerts\n          ...collaborators\n        }\n      }\n    }\n  }\n\n").concat(Object.values(te).map((e=>e.getColumnFragment().fragment)),"\n\nfragment stargazers on Repository {\n  stargazers {\n    totalCount\n  }\n}\n\nfragment primaryLanguage on Repository {\n  primaryLanguage {\n    name\n  }\n}\n\nfragment private on Repository {\n  isPrivate\n}\n\nfragment archived on Repository {\n  isArchived\n}\n\nfragment issues on Repository {\n  issues (states: OPEN) {\n    totalCount\n  }\n}\n\nfragment pullRequestCount on Repository {\n  pullRequests (states: OPEN) {\n    totalCount\n  }\n}\n\nfragment owner on Repository {\n  owner {\n    login\n  }\n}\n\nfragment nameWithOwner on Repository {\n  nameWithOwner\n}\n\nfragment url on Repository {\n  url\n}\n\nfragment fork on Repository {\n  isFork\n}\n\nfragment licenses on Repository {\n  licenseInfo {\n    name\n    nickname\n  }\n}\n\nfragment vulnerabilityAlerts on Repository {\n  vulnerabilityAlerts (first:50){\n    nodes {\n      securityVulnerability {\n        package {\n          name\n        }\n        advisory {\n          description\n          summary\n        }\n      }\n    }\n  }\n}\n\nfragment collaborators on Repository {\n  collaborators (first: 50){\n    nodes {\n      name\n      login\n    }\n  }\n}\n"),re=M.a.mark(Oe),ae=M.a.mark(de),se=M.a.mark(me),oe=M.a.mark(he),ie=M.a.mark(xe),ce=M.a.mark(fe),le=M.a.mark(Se),ue=M.a.mark(we),pe=M.a.mark(ve),je=M.a.mark(ye),be=M.a.mark(Ce);let ge=new $.a;function Oe(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=Z.a.parse(window.location.search.substring(1))).access_token){t.next=6;break}return t.next=4,Object(X.c)({type:"SET_ACCESS_TOKEN",access_token:e.access_token});case 4:return t.next=6,ve();case 6:case"end":return t.stop()}}),re)}function de(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("INIT",Oe);case 2:case"end":return e.stop()}}),ae)}function me(){var e,t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={redirect_uri:window.location.origin+window.location.pathname,scope:["repo"]},t="".concat("https://github-auth-backend-hugh.glitch.me/start_auth","?").concat(Z.a.stringify(e)),n.next=4,window.location=t;case 4:case"end":return n.stop()}}),se)}function he(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("START_LOG_IN",me);case 2:case"end":return e.stop()}}),oe)}function xe(e){var t,n,r,a;return M.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(X.d)((e=>e.accessToken));case 2:return t=s.sent,s.next=5,Object(X.d)((e=>e.user.login));case 5:return n=s.sent,s.prev=6,s.next=9,Object(X.b)((()=>Object(ee.a)({query:ne(e),headers:{authorization:"token ".concat(t),accept:"application/vnd.github.vixen-preview+json"}})));case 9:r=s.sent,s.next=15;break;case 12:s.prev=12,s.t0=s.catch(6),r=s.t0.data;case 15:return a=r.viewer.repositories.nodes.map((e=>{return{id:e.id,name:e.name,nameWithOnwer:e.nameWithOwner,description:e.description,createdAt:e.createdAt,topics:e.repositoryTopics.nodes.map((e=>e.topic.name)),stars:e.stargazers.totalCount,language:(t=e.primaryLanguage,t&&t.name),isPrivate:e.isPrivate,isArchived:e.isArchived,url:e.url,owner:e.owner.login,isFork:e.isFork,licenseNickname:e.licenseInfo&&(e.licenseInfo.nickname||e.licenseInfo.name),vulnerabilityAlerts:e.vulnerabilityAlerts.nodes,collaborators:e.collaborators&&e.collaborators.nodes.filter((e=>e.login!==n)),issueCount:e.issues.totalCount,pullRequestCount:e.pullRequests.totalCount};var t})),s.next=18,Object(X.c)({type:"SET_REPOSITORIES",repositories:a});case 18:return s.next=20,Object(X.d)((e=>e.repositories.length));case 20:if(!(s.sent<r.viewer.repositories.totalCount)){s.next=24;break}return s.next=24,xe(r.viewer.repositories.pageInfo.endCursor);case 24:case"end":return s.stop()}}),ie,null,[[6,12]])}function fe(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("START_LOAD_REPOSITORIES",xe);case 2:case"end":return e.stop()}}),ce)}function Se(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.c)({type:"DELETE_REPOSITORIES"});case 2:return e.next=4,xe();case 4:case"end":return e.stop()}}),le)}function we(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("REFRESH_REPOSITORIES",Se);case 2:case"end":return e.stop()}}),ue)}function ve(){var e,t,n,r;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(X.d)((e=>e.accessToken));case 2:return e=a.sent,ge=new $.a({auth:"token ".concat(e)}),t={owner:"hughrawlinson",repo:"github-repo-organizer"},a.next=7,Object(X.b)((()=>ge.users.getAuthenticated()));case 7:if(n=a.sent,"hughrawlinson"===(r=n.data).login){a.next=19;break}return a.prev=10,a.next=13,Object(X.b)((()=>ge.activity.checkStarringRepo(t)));case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(10),a.next=19,Object(X.b)((()=>ge.activity.starRepo(t)));case 19:return a.next=21,Object(X.c)({type:"SET_USER",user:r});case 21:return a.next=23,xe();case 23:case"end":return a.stop()}}),pe,null,[[10,15]])}function ye(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("START_LOAD_USER",ve);case 2:case"end":return e.stop()}}),je)}function Ce(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([de(),he(),fe(),ye(),we()]);case 2:case"end":return e.stop()}}),be)}const Re={loggedIn:!1,gridState:{filteringState:[],sortingState:[],searchState:"",columnVisibilityState:["isPrivate","isArchived","isFork","owner","licenseNickname","vulnerabilityAlerts","collaborators","issueCount"]}};var Te=(e=Re,t)=>{switch(t.type){case"SET_ACCESS_TOKEN":return Object(i.a)(Object(i.a)({},e),{},{accessToken:t.access_token,loggedIn:!0});case"SET_REPOSITORIES":return Object(i.a)(Object(i.a)({},e),{},{repositories:[...e.repositories||[],...t.repositories]});case"DELETE_REPOSITORIES":return Object(i.a)(Object(i.a)({},e),{},{repositories:[]});case"SET_USER":return Object(i.a)(Object(i.a)({},e),{},{user:t.user});case"SET_GRID_STATE":return Object(i.a)(Object(i.a)({},e),{},{gridState:t.gridState});default:return e}};const Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.c,ke=Object(J.a)(),Ie=Object(Q.d)(Te,Ee(Object(Q.a)(ke)));ke.run(Ce),Ie.dispatch({type:"INIT"}),o.a.render(Object(R.jsx)(m.a,{store:Ie,children:Object(R.jsx)(B,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.c7ab533f.chunk.js.map