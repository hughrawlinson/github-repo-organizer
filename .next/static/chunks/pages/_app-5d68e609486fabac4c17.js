_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},IIOH:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),a=(n("17x9"),n("iuhU")),c=n("Xt1q"),s=n("H2TA"),l=n("ODXe"),u=n("dRu9"),p=n("wpWl"),f=n("tr08"),d=n("4Hym"),b=n("bfFb"),j={entering:{opacity:1},entered:{opacity:1}},O={enter:p.b.enteringScreen,exit:p.b.leavingScreen},h=i.forwardRef((function(e,t){var n=e.children,a=e.disableStrictModeCompat,c=void 0!==a&&a,s=e.in,p=e.onEnter,h=e.onEntered,v=e.onEntering,g=e.onExit,m=e.onExited,y=e.onExiting,x=e.style,w=e.TransitionComponent,E=void 0===w?u.a:w,k=e.timeout,C=void 0===k?O:k,P=Object(o.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),D=Object(f.a)(),R=D.unstable_strictMode&&!c,T=i.useRef(null),L=Object(b.a)(n.ref,t),S=Object(b.a)(R?T:void 0,L),_=function(e){return function(t,n){if(e){var r=R?[T.current,t]:[t,n],o=Object(l.a)(r,2),i=o[0],a=o[1];void 0===a?e(i):e(i,a)}}},I=_(v),N=_((function(e,t){Object(d.b)(e);var n=Object(d.a)({style:x,timeout:C},{mode:"enter"});e.style.webkitTransition=D.transitions.create("opacity",n),e.style.transition=D.transitions.create("opacity",n),p&&p(e,t)})),B=_(h),M=_(y),q=_((function(e){var t=Object(d.a)({style:x,timeout:C},{mode:"exit"});e.style.webkitTransition=D.transitions.create("opacity",t),e.style.transition=D.transitions.create("opacity",t),g&&g(e)})),z=_(m);return i.createElement(E,Object(r.a)({appear:!0,in:s,nodeRef:R?T:void 0,onEnter:N,onEntered:B,onEntering:I,onExit:q,onExited:z,onExiting:M,timeout:C},P),(function(e,t){return i.cloneElement(n,Object(r.a)({style:Object(r.a)({opacity:0,visibility:"exited"!==e||s?void 0:"hidden"},j[e],x,n.props.style),ref:S},t))}))})),v=i.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,l=e.invisible,u=void 0!==l&&l,p=e.open,f=e.transitionDuration,d=e.TransitionComponent,b=void 0===d?h:d,j=Object(o.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return i.createElement(b,Object(r.a)({in:p,timeout:f},j),i.createElement("div",{className:Object(a.a)(c.root,s,u&&c.invisible),"aria-hidden":!0,ref:t},n))})),g=Object(s.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(v),m=n("i8i4"),y=n("l3Wi");function x(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var o=window.getComputedStyle(t);n=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}var i=0,a=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");i=parseInt(c[4],10),a=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-r.top,"px)"):"translateY(-".concat(r.top+r.height-a,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var w={enter:p.b.enteringScreen,exit:p.b.leavingScreen},E=i.forwardRef((function(e,t){var n=e.children,a=e.direction,c=void 0===a?"down":a,s=e.in,l=e.onEnter,p=e.onEntered,j=e.onEntering,O=e.onExit,h=e.onExited,v=e.onExiting,g=e.style,E=e.timeout,k=void 0===E?w:E,C=e.TransitionComponent,P=void 0===C?u.a:C,D=Object(o.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=Object(f.a)(),T=i.useRef(null),L=i.useCallback((function(e){T.current=m.findDOMNode(e)}),[]),S=Object(b.a)(n.ref,L),_=Object(b.a)(S,t),I=function(e){return function(t){e&&(void 0===t?e(T.current):e(T.current,t))}},N=I((function(e,t){x(c,e),Object(d.b)(e),l&&l(e,t)})),B=I((function(e,t){var n=Object(d.a)({timeout:k,style:g},{mode:"enter"});e.style.webkitTransition=R.transitions.create("-webkit-transform",Object(r.a)({},n,{easing:R.transitions.easing.easeOut})),e.style.transition=R.transitions.create("transform",Object(r.a)({},n,{easing:R.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",j&&j(e,t)})),M=I(p),q=I(v),z=I((function(e){var t=Object(d.a)({timeout:k,style:g},{mode:"exit"});e.style.webkitTransition=R.transitions.create("-webkit-transform",Object(r.a)({},t,{easing:R.transitions.easing.sharp})),e.style.transition=R.transitions.create("transform",Object(r.a)({},t,{easing:R.transitions.easing.sharp})),x(c,e),O&&O(e)})),H=I((function(e){e.style.webkitTransition="",e.style.transition="",h&&h(e)})),U=i.useCallback((function(){T.current&&x(c,T.current)}),[c]);return i.useEffect((function(){if(!s&&"down"!==c&&"right"!==c){var e=Object(y.a)((function(){T.current&&x(c,T.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[c,s]),i.useEffect((function(){s||U()}),[s,U]),i.createElement(P,Object(r.a)({nodeRef:T,onEnter:N,onEntered:M,onEntering:B,onExit:z,onExited:H,onExiting:q,appear:!0,in:s,timeout:k},D),(function(e,t){return i.cloneElement(n,Object(r.a)({ref:_,style:Object(r.a)({visibility:"exited"!==e||s?void 0:"hidden"},g,n.props.style)},t))}))})),k=n("kKAo"),C=n("NqtD"),P={left:"right",right:"left",top:"down",bottom:"up"};var D={enter:p.b.enteringScreen,exit:p.b.leavingScreen},R=i.forwardRef((function(e,t){var n=e.anchor,s=void 0===n?"left":n,l=e.BackdropProps,u=e.children,p=e.classes,d=e.className,b=e.elevation,j=void 0===b?16:b,O=e.ModalProps,h=(O=void 0===O?{}:O).BackdropProps,v=Object(o.a)(O,["BackdropProps"]),m=e.onClose,y=e.open,x=void 0!==y&&y,w=e.PaperProps,R=void 0===w?{}:w,T=e.SlideProps,L=e.TransitionComponent,S=void 0===L?E:L,_=e.transitionDuration,I=void 0===_?D:_,N=e.variant,B=void 0===N?"temporary":N,M=Object(o.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),q=Object(f.a)(),z=i.useRef(!1);i.useEffect((function(){z.current=!0}),[]);var H=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?P[t]:t}(q,s),U=i.createElement(k.a,Object(r.a)({elevation:"temporary"===B?j:0,square:!0},R,{className:Object(a.a)(p.paper,p["paperAnchor".concat(Object(C.a)(H))],R.className,"temporary"!==B&&p["paperAnchorDocked".concat(Object(C.a)(H))])}),u);if("permanent"===B)return i.createElement("div",Object(r.a)({className:Object(a.a)(p.root,p.docked,d),ref:t},M),U);var A=i.createElement(S,Object(r.a)({in:x,direction:P[H],timeout:I,appear:z.current},T),U);return"persistent"===B?i.createElement("div",Object(r.a)({className:Object(a.a)(p.root,p.docked,d),ref:t},M),A):i.createElement(c.a,Object(r.a)({BackdropProps:Object(r.a)({},l,h,{transitionDuration:I}),BackdropComponent:g,className:Object(a.a)(p.root,p.modal,d),open:x,onClose:m,ref:t},M,v),A)}));t.a=Object(s.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(R)},RLqD:function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return m}));var r=n("nKUr"),o=n("rePB"),i=n("PsDL"),a=n("IIOH"),c=n("eD//"),s=n("tVbE"),l=n("IsqK"),u=n("uniG"),p=n.n(u),f=n("q1tI"),d=n("YFqc"),b=n.n(d);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(f.createContext)({drawerOpen:!1,toggleDrawer:function(e){}});function v(e){var t=e.children,n=Object(f.useState)(!1),o=n[0],i=n[1];return Object(r.jsx)(h.Provider,{value:{drawerOpen:o,toggleDrawer:function(e){i("undefined"!==typeof e?e:!o)}},children:t})}function g(e){var t=Object(f.useContext)(h).toggleDrawer;return Object(r.jsx)(i.a,O(O({onClick:function(){return t()}},e),{},{children:Object(r.jsx)(p.a,{})}))}function m(){var t=Object(f.useContext)(h),n=t.drawerOpen,o=t.toggleDrawer;return Object(r.jsx)(a.a,{open:n,onClose:function(){return o(!1)},children:Object(r.jsx)("div",{onClick:function(){return o(!1)},onKeyDown:function(){return o(!1)},children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(s.a,{button:!0,children:Object(r.jsx)(b.a,{href:"".concat(e.env.PUBLIC_URL||"","/"),children:Object(r.jsx)(l.a,{primary:"Repositories"})})}),Object(r.jsx)(s.a,{button:!0,children:Object(r.jsx)(b.a,{href:"".concat(e.env.PUBLIC_URL||"","/topics"),children:Object(r.jsx)(l.a,{primary:"Topics"})})}),Object(r.jsx)(s.a,{button:!0,children:Object(r.jsx)(b.a,{href:"".concat(e.env.PUBLIC_URL||"","/licenses"),children:Object(r.jsx)(l.a,{primary:"Licenses"})})}),Object(r.jsx)(s.a,{button:!0,children:Object(r.jsx)(b.a,{href:"".concat(e.env.PUBLIC_URL||"","/languages"),children:Object(r.jsx)(l.a,{primary:"Languages"})})})]})})})}}).call(this,n("8oxB"))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",p=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),f=p.href,d=p.as,b=e.children,j=e.replace,O=e.shallow,h=e.scroll,v=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var g=i.Children.only(b),m=g&&"object"===typeof g&&g.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),x=r(y,2),w=x[0],E=x[1],k=i.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,i.useEffect)((function(){var e=E&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof v?v:n&&n.locale,o=l[f+"%"+d+(r?"%"+r:"")];e&&!o&&u(n,f,d,{locale:r})}),[d,f,E,v,t,n]);var C={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}))}(e,n,f,d,j,O,h,v)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,f,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var P="undefined"!==typeof v?v:n&&n.locale,D=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,P,n&&n.locales,n&&n.domainLocales);C.href=D||(0,a.addBasePath)((0,a.addLocale)(d,P,n&&n.defaultLocale))}return i.default.cloneElement(g,C)};t.default=p},cha2:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("rePB"),i=n("RLqD"),a=n("1OyB"),c=n("vuIU");function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=n("U8pU"),u=n("JX7q");function p(e,t){return!t||"object"!==Object(l.a)(t)&&"function"!==typeof t?Object(u.a)(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n("q1tI"),b=n.n(d),j=n("ofer");function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,e);var t=O(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(b.a.Fragment,{children:[Object(r.jsx)(j.a,{variant:"h1",children:"Log in!"}),Object(r.jsx)(j.a,{paragraph:!0,children:"Please log in with GitHub to start organizing your repositories."})]})}}]),n}(d.Component),v=n("ODXe"),g=n("5lTQ"),m=n("5aTT"),y=n("wx14"),x=n("Ff2n"),w=(n("17x9"),n("iuhU")),E=n("H2TA"),k=n("NqtD"),C=n("kKAo"),P=d.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.color,i=void 0===o?"primary":o,a=e.position,c=void 0===a?"fixed":a,s=Object(x.a)(e,["classes","className","color","position"]);return d.createElement(C.a,Object(y.a)({square:!0,component:"header",elevation:4,className:Object(w.a)(n.root,n["position".concat(Object(k.a)(c))],n["color".concat(Object(k.a)(i))],r,"fixed"===c&&"mui-fixed"),ref:t},s))})),D=Object(E.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(P),R=n("lO0E"),T=n("Z3vd");var L=Object(E.a)((function(){return{grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}}))((function(e){var t=e.classes,n=Object(m.a)(),o=Object(v.a)(n,2),a=(o[0],o[1]);return Object(r.jsx)(D,{children:Object(r.jsxs)(R.a,{children:[Object(r.jsx)(g.b,{selectedLoginState:!0,children:Object(r.jsx)(i.b,{className:t.menuButton,color:"inherit","aria-label":"Menu"})}),Object(r.jsx)(j.a,{variant:"h6",color:"inherit",className:t.grow,children:"GitHub Repo Organizer"}),Object(r.jsx)(g.a,{color:"inherit"}),Object(r.jsx)(g.b,{selectedLoginState:!0,children:Object(r.jsx)(T.a,{onClick:function(){return a()},color:"inherit",children:"Refresh"})})]})})})),S={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},_=function(e){return Object(y.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var I=Object(E.a)((function(e){return{"@global":{html:S,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(y.a)({margin:0},_(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,d.createElement(d.Fragment,null,n)}));function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=Object(E.a)((function(e){return{root:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),height:"100vh",overflow:"auto"}}}))((function(e){var t=e.classes,n=e.Component,o=e.pageProps;return Object(r.jsxs)(i.c,{children:[Object(r.jsx)(I,{}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(L,{}),Object(r.jsx)(i.a,{}),Object(r.jsx)("main",{className:t.content,children:Object(r.jsxs)("div",{className:t.appBarSpacer,children:[Object(r.jsx)(g.b,{selectedLoginState:!1,children:Object(r.jsx)(h,{})}),Object(r.jsx)(g.b,{selectedLoginState:!0,children:Object(r.jsx)(n,B({},o))})]})})]})]})}))},uniG:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("q1tI")),a=(0,r(n("8/g6")).default)(i.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),p=u[0],f=u[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||p||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,p]);return(0,o.useEffect)((function(){if(!a&&!p){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[p]),[d,p]};var o=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map}},[[0,2,1,0,3,5]]]);