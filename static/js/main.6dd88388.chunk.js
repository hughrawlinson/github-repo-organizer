(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{268:function(e,t,n){e.exports=n(589)},426:function(e,t){},428:function(e,t){},498:function(e,t){},589:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(20),o=n.n(i),c=n(62),s=n(63),u=n(66),l=n(64),p=n(65),m=n(39),f=n(10),d=n(261),g=n.n(d),h=n(78),O=n.n(h),b=n(46),E=n.n(b),w=n(77),v=n.n(w),j=n(33),k=n.n(j),S=n(262),T=n.n(S),x=n(260),I=n.n(x),y=n(114),_=n(591),C=n(593),R=n(592),A=n(249),L=n.n(A),N=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.a,{variant:"display1"},"Log in!"),a.a.createElement(E.a,{paragraph:!0},"Please log in with GitHub to start organizing your repositories."))}}]),t}(r.Component),F=n(61),P=n.n(F),G=n(28),D=n(12),U=["isPrivate","isArchived","isFork"],V=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(P.a,null,a.a.createElement(G.b,{columns:[{name:"name",title:"Name",getCellValue:function(e){return a.a.createElement("a",{href:e.url},e.name)}},{name:"description",title:"Description"},{name:"createdAt",title:"Created At"},{name:"repositoryTopics",title:"Topics",getCellValue:function(e){return e.topics.join(", ")}},{name:"stars",title:"Stars"},{name:"language",title:"Language"},{name:"owner",title:"Owner"},{name:"isPrivate",title:"Private",getCellValue:function(e){return e.isPrivate?"True":"False"}},{name:"isArchived",title:"Archived",getCellValue:function(e){return e.isArchived?"True":"False"}},{name:"isFork",title:"Fork",getCellValue:function(e){return e.isFork?"True":"False"}},{name:"licenseNickname",title:"License"}],rows:this.props.repositories},a.a.createElement(D.c,{defaultFilters:[]}),a.a.createElement(D.l,{defaultSorting:[]}),a.a.createElement(D.k,null),a.a.createElement(D.g,null),a.a.createElement(D.h,null),a.a.createElement(G.d,null),a.a.createElement(G.g,{showSortingControls:!0}),a.a.createElement(G.f,{showFilterSelector:!0}),a.a.createElement(G.e,{defaultHiddenColumnNames:U}),a.a.createElement(G.h,null),a.a.createElement(G.c,null),a.a.createElement(G.a,null)))}}]),t}(r.Component),z=Object(f.withStyles)(function(e){return{}})(V),B=n(267),H=n(111),q=n(68),M=function(e){var t=e.repositories.flatMap(function(e){return e.topics}).reduce(function(e,t){return Object(q.a)({},e,Object(H.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(B.a)(e,2);return{topicName:t[0],topicCount:t[1]}});return console.log(n),a.a.createElement(P.a,null,a.a.createElement(G.b,{columns:[{name:"topicName",title:"Topic Name"},{name:"topicCount",title:"Topic Count"}],rows:n},a.a.createElement(D.l,{defaultSorting:[{columnName:"topicCount",direction:"desc"}]}),a.a.createElement(D.h,null),a.a.createElement(G.d,null),a.a.createElement(G.g,{showSortingControls:!0})))},J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).ifLoggedOut=n.ifLoggedOut.bind(Object(m.a)(Object(m.a)(n))),n.ifLoggedIn=n.ifLoggedIn.bind(Object(m.a)(Object(m.a)(n))),n.ifRepositories=n.ifRepositories.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"ifRepositories",value:function(e){return this.props.repositories?e:null}},{key:"ifLoggedOut",value:function(e){return this.props.loggedIn?null:e}},{key:"ifLoggedIn",value:function(e){return this.props.loggedIn?e:null}},{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement(a.a.Fragment,null,a.a.createElement(I.a,null),a.a.createElement("div",{className:"App"},a.a.createElement(g.a,null,a.a.createElement(O.a,null,this.ifLoggedIn(a.a.createElement(k.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},a.a.createElement(T.a,null))),a.a.createElement(E.a,{variant:"title",color:"inherit",className:t.grow},"GitHub Repo Organizer"),this.ifLoggedOut(a.a.createElement(v.a,{onClick:this.props.startLogIn,color:"inherit"},"Login")))),a.a.createElement("main",{className:t.content},a.a.createElement("div",{className:t.appBarSpacer}),this.ifLoggedOut(a.a.createElement(N,null)),this.ifRepositories(a.a.createElement(_.a,null,a.a.createElement(C.a,null,a.a.createElement(R.a,{exact:!0,path:"/",component:function(t){var n=L.a.parse(t.location.search);return a.a.createElement(z,{queryParams:n,repositories:e.props.repositories})}}),a.a.createElement(R.a,{exact:!0,path:"/topics",component:function(){return a.a.createElement(M,{repositories:e.props.repositories})}})))))))}}]),t}(r.Component),K=Object(y.b)(function(e){return{loggedIn:e.loggedIn,repositories:e.repositories}},function(e){return{startLogIn:function(){return e({type:"START_LOG_IN"})},loadRepositories:function(){return e({type:"START_LOAD_REPOSITORIES"})},loadUser:function(){return e({type:"START_LOAD_USER"})}}})(Object(f.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"}}})(J)),W=n(67),X=n(266),Q=n(21),Y=n.n(Q),Z=n(25),$=n(113),ee=n.n($),te=n(264),ne=n(265),re=n.n(ne),ae=Y.a.mark(ge),ie=Y.a.mark(he),oe=Y.a.mark(Oe),ce=Y.a.mark(be),se=Y.a.mark(Ee),ue=Y.a.mark(we),le=Y.a.mark(ve),pe=Y.a.mark(je),me=Y.a.mark(ke),fe=new re.a,de="https://github-auth-backend-hugh.glitch.me/start_auth";function ge(){var e;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=ee.a.parse(window.location.search.substring(1))).access_token){t.next=6;break}return t.next=4,Object(Z.c)({type:"SET_ACCESS_TOKEN",access_token:e.access_token});case 4:return t.next=6,ve();case 6:case"end":return t.stop()}},ae,this)}function he(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.e)("INIT",ge);case 2:case"end":return e.stop()}},ie,this)}function Oe(){var e,t;return Y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={redirect_uri:window.location.origin+window.location.pathname,scope:["repo"]},t="".concat(de,"?").concat(ee.a.stringify(e)),n.next=4,window.location=t;case 4:case"end":return n.stop()}},oe,this)}function be(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.e)("START_LOG_IN",Oe);case 2:case"end":return e.stop()}},ce,this)}function Ee(e){var t,n,r,a;return Y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(Z.d)(function(e){return e.accessToken});case 2:return t=i.sent,n=new te.GitHub({token:t}),i.next=6,Object(Z.b)(function(){return n.query("\n    query {\n      viewer {\n        repositories (first:100".concat(e?', after:"'+e+'"':"",") {\n          pageInfo {\n            endCursor\n          }\n          totalCount,\n          nodes {\n            id,\n            name,\n            description,\n            createdAt,\n            repositoryTopics(first:100) {\n              nodes {\n                topic {\n                  id\n                  name\n                }\n              }\n            }\n            stargazers {totalCount},\n            primaryLanguage {\n              name\n            }\n            isPrivate\n            isArchived\n            owner {\n              login\n            }\n            nameWithOwner\n            url\n            isFork\n            licenseInfo {\n              name\n              nickname\n            }\n          }\n        }\n      }\n    }"))});case 6:return r=i.sent,a=r.viewer.repositories.nodes.map(function(e){return{id:e.id,name:e.nameWithOwner,description:e.description,createdAt:e.createdAt,topics:e.repositoryTopics.nodes.map(function(e){return e.topic.name}),stars:e.stargazers.totalCount,language:(t=e.primaryLanguage,t&&t.name),isPrivate:e.isPrivate,isArchived:e.isArchived,url:e.url,owner:e.owner.login,isFork:e.isFork,licenseNickname:e.licenseInfo&&(e.licenseInfo.nickname||e.licenseInfo.name)};var t}),i.next=10,Object(Z.c)({type:"SET_REPOSITORIES",repositories:a});case 10:return i.next=12,Object(Z.d)(function(e){return e.repositories.length});case 12:if(!(i.sent<r.viewer.repositories.totalCount)){i.next=16;break}return i.next=16,Ee(r.viewer.repositories.pageInfo.endCursor);case 16:case"end":return i.stop()}},se,this)}function we(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.e)("START_LOAD_REPOSITORIES",Ee);case 2:case"end":return e.stop()}},ue,this)}function ve(){var e,t,n,r;return Y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Z.d)(function(e){return e.accessToken});case 2:return e=a.sent,fe.authenticate({type:"oauth",token:e}),t={owner:"hughrawlinson",repo:"github-repo-organizer"},a.next=7,Object(Z.b)(function(){return fe.users.get()});case 7:if(n=a.sent,"hughrawlinson"===(r=n.data).login){a.next=19;break}return a.prev=10,a.next=13,Object(Z.b)(function(){return fe.activity.checkStarringRepo(t)});case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(10),a.next=19,Object(Z.b)(function(){return fe.activity.starRepo(t)});case 19:return a.next=21,Object(Z.c)({type:"SET_USER",user:r});case 21:return a.next=23,Ee();case 23:case"end":return a.stop()}},le,this,[[10,15]])}function je(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.e)("START_LOAD_USER",ve);case 2:case"end":return e.stop()}},pe,this)}function ke(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)([he(),be(),we(),je()]);case 2:case"end":return e.stop()}},me,this)}var Se=n(162),Te={loggedIn:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACCESS_TOKEN":return Object(q.a)({},e,{accessToken:t.access_token,loggedIn:!0});case"SET_REPOSITORIES":return Object(q.a)({},e,{repositories:Object(Se.a)(e.repositories||[]).concat(Object(Se.a)(t.repositories))});case"SET_USER":return Object(q.a)({},e,{user:t.user});default:return e}},Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,ye=Object(X.a)(),_e=Object(W.d)(xe,Ie(Object(W.a)(ye)));ye.run(ke),_e.dispatch({type:"INIT"}),o.a.render(a.a.createElement(y.a,{store:_e},a.a.createElement(K,null)),document.getElementById("root"))}},[[268,2,1]]]);
//# sourceMappingURL=main.6dd88388.chunk.js.map