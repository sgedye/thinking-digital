(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5w8u":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("oEq0"),l=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},r.a.createElement("path",{fill:"#BEE3F8",d:"M44,7L4,23l40,16l-7-16L44,7z M36,23H17l18-7l1,6V23z"}),r.a.createElement("path",{fill:"#3182CE",d:"M40.212,10.669l-5.044,11.529L34.817,23l0.351,0.802l5.044,11.529L9.385,23L40.212,10.669 M44,7L4,23 l40,16l-7-16L44,7L44,7z"}),r.a.createElement("path",{fill:"#3182CE",d:"M36,22l-1-6l-18,7l17,7l-2-5l-8-2h12V22z M27.661,21l5.771-2.244L33.806,21H27.661z"}))},o=function(){return r.a.createElement("nav",{id:"desktop-nav"},r.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#about-us",title:"About Us"}),r.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#design-process",title:"Design Process"}),r.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#services",title:"Services"}),r.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#testimonials",title:"Testimonials"}),r.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#contact-us",title:"Contact Us"}))},c=n("vOnD"),u=c.a.div.withConfig({displayName:"MobileNav__Hamburger",componentId:"sc-3ndc45-0"})(["width:30px;margin:0 auto;z-index:99;cursor:pointer;transition:transform 800ms;transform:",";transform-origin:center;div:first-of-type{transform:",";}div:nth-of-type(2){transform:",";}div:last-of-type{transform:",";}"],(function(e){return e.isMenuOpen?"rotate(-90deg)":"rotate(0)"}),(function(e){return e.isMenuOpen?"rotate(-45deg) translate(-9px, 10px)":"rotate(0) translate(0)"}),(function(e){return e.isMenuOpen?"rotate(-135deg) translate(-3px, -2px)":"rotate(0) translate(0)"}),(function(e){return e.isMenuOpen?"rotate(-45deg) translate(4px, -3px)":"rotate(0) translate(0)"})),s=c.a.div.withConfig({displayName:"MobileNav__Line",componentId:"sc-3ndc45-1"})(["height:4px;width:30px;background-color:#111;border-radius:2px;margin:5px 0;transition:all 800ms;transform-origin:center;"]),d=c.a.div.withConfig({displayName:"MobileNav__MenuLinks",componentId:"sc-3ndc45-2"})(["position:absolute;top:80px;left:0;right:0;width:100vw;height:",";pointer-events:",";transition:height 800ms;text-shadow:1px 1px 1px black;background:rgba(33,33,33,0.99);z-index:5;ul{height:80%;margin:10% 0;padding:0;display:flex;flex-direction:column;justify-content:space-around;align-items:center;list-style:none;opacity:",";transition:",";}li{text-align:center;font-size:8vw;}"],(function(e){return e.isMenuOpen?"calc(100vh - 80px)":"0px"}),(function(e){return e.isMenuOpen?"all":"none"}),(function(e){return e.isMenuOpen?"1":"0"}),(function(e){return e.isMenuOpen?"opacity 500ms 300ms":"opacity 300ms 0ms"})),m=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return Object(a.useEffect)((function(){document.querySelector("body").style.overflow=t?"hidden":"auto"}),[t]),r.a.createElement("nav",{id:"mobile-nav"},r.a.createElement(u,{isMenuOpen:t,onClick:function(){return n((function(e){return!e}))}},r.a.createElement(s,{id:"hb-top"}),r.a.createElement(s,{id:"hb-middle"}),r.a.createElement(s,{id:"hb-bottom"})),r.a.createElement(d,{id:"nav-overlay",isMenuOpen:t,onClick:function(){return n(!1)}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.AnchorLink,{to:"/#top-of-page",title:"Home"})),r.a.createElement("li",null,r.a.createElement(i.AnchorLink,{to:"/#about-us",title:"About Us"})),r.a.createElement("li",null,r.a.createElement(i.AnchorLink,{to:"/#design-process",title:"Design Process"})),r.a.createElement("li",null,r.a.createElement(i.AnchorLink,{to:"/#services",title:"Services"})),r.a.createElement("li",null,r.a.createElement(i.AnchorLink,{to:"/#testimonials",title:"Testimonials"})),r.a.createElement("li",null,r.a.createElement(i.AnchorLink,{to:"/#contact-us",title:"Contact Us"})))))},f=function(){var e=Object(a.useState)(0),t=e[0],n=e[1],c=function(){var e=document.documentElement.scrollTop,t=document.body.scrollTop||e;n(t)};Object(a.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}));var u=Object(a.useState)(null),s=u[0],d=u[1];return Object(a.useEffect)((function(){d(t>2?{height:80,backgroundColor:"rgba(205, 205, 255, 0.95)"}:{height:80,backgroundColor:"rgba(205, 205, 255, 0.1)",borderBottom:"1px solid darkblue"})}),[t]),r.a.createElement("header",{id:"header",style:s},r.a.createElement("div",{id:"logo",style:{width:"48px",height:"48px"}},r.a.createElement(l,null)),r.a.createElement(i.AnchorLink,{to:"/#top-of-page",id:"header-title",title:"Thinking Digital"}),r.a.createElement(m,null),r.a.createElement(o,null))},p=c.a.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-603lwm-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background:#888;border-top:1px solid #333;@media screen and (min-width:600px){flex-direction:row;}"]),h=c.a.article.withConfig({displayName:"Footer__Article",componentId:"sc-603lwm-1"})(["height:100%;min-height:150px;min-width:25%;ul{padding:0;list-style:none;}a{text-decoration:none;}"]),g=function(){return r.a.createElement(p,null,r.a.createElement(h,null,r.a.createElement("h2",null,"About Us"),r.a.createElement("p",null,"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.")),r.a.createElement(h,null,r.a.createElement("h2",null,"Important Links"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Terms & Conditions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Privacy Policy")))),r.a.createElement(h,null,r.a.createElement("h2",null,"Social Media"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/"},"GitHub")))))};n("okom"),t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("main",{id:"main-body"},t),r.a.createElement(g,null))}},F0uZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=c;var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},i=n("Wbzz"),l=n("dj5g"),o=n("PDH8");function c(e){var t=e.to,n=e.title,a=e.children,o=e.className,c=e.stripHash,u=void 0!==c&&c,s={to:u?(0,l.stripHashedLocation)(t):t,onClick:function(e){return u?(0,l.handleStrippedLinkClick)(t,e):(0,l.handleLinkClick)(t,e)}};return n&&(s.title=n),o&&(s.className=o),r.default.createElement(i.Link,s,Boolean(a)?a:n)}c.propTypes=o.anchorLinkTypes},PDH8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var a,r=(a=n("17x9"))&&a.__esModule?a:{default:a};var i={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,children:r.default.node};t.anchorLinkTypes=i},Wbzz:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",(function(){return p})),n.d(t,"StaticQueryContext",(function(){return s})),n.d(t,"StaticQuery",(function(){return m})),n.d(t,"useStaticQuery",(function(){return f})),n.d(t,"prefetchPathname",(function(){return u}));n("xfY5");var a=n("q1tI"),r=n.n(a),i=n("+ZDr"),l=n.n(i);n.d(t,"Link",(function(){return l.a})),n.d(t,"withAssetPrefix",(function(){return i.withAssetPrefix})),n.d(t,"withPrefix",(function(){return i.withPrefix})),n.d(t,"parsePath",(function(){return i.parsePath})),n.d(t,"navigate",(function(){return i.navigate})),n.d(t,"push",(function(){return i.push})),n.d(t,"replace",(function(){return i.replace})),n.d(t,"navigateTo",(function(){return i.navigateTo}));var o=n("lw3w"),c=n.n(o);n.d(t,"PageRenderer",(function(){return c.a}));var u=n("emEt").default.enqueue,s=r.a.createContext({});function d(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,l=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(s.Consumer,null,(function(e){return r.a.createElement(d,{data:t,query:n,render:a||i,staticQueryData:e})}))},f=function(e){r.a.useContext;var t=r.a.useContext(s);if(isNaN(Number(e)))throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+e+"`);\n");if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},lw3w:function(e,t,n){var a;e.exports=(a=n("rzlk"))&&a.default||a},oEq0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return a.AnchorLink}});var a=n("F0uZ")},okom:function(e,t,n){},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var a=n("q1tI"),r=n.n(a),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},vx99:function(e,t,n){"use strict";n.r(t);var a=n("zloQ"),r=n("q1tI"),i=n.n(r),l=n("5w8u");t.default=function(){var e=a.data.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement("h1",null,"Blog"),i.a.createElement("ol",null,e.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("h3",null,e.node.frontmatter.title),i.a.createElement("h5",null,e.node.frontmatter.author),i.a.createElement("h4",null,e.node.frontmatter.date))}))))}},xfY5:function(e,t,n){"use strict";var a=n("dyZX"),r=n("aagx"),i=n("LZWt"),l=n("Xbzi"),o=n("apmT"),c=n("eeVq"),u=n("kJMx").f,s=n("EemH").f,d=n("hswa").f,m=n("qncB").trim,f=a.Number,p=f,h=f.prototype,g="Number"==i(n("Kuth")(h)),E="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,i=(t=E?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var l,c=t.slice(2),u=0,s=c.length;u<s;u++)if((l=c.charCodeAt(u))<48||l>r)return NaN;return parseInt(c,a)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof f&&(g?c((function(){h.valueOf.call(n)})):"Number"!=i(n))?l(new p(b(t)),n,f):b(t)};for(var v,y=n("nh4g")?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;y.length>k;k++)r(p,v=y[k])&&!r(f,v)&&d(f,v,s(p,v));f.prototype=h,h.constructor=f,n("KroJ")(a,"Number",f)}},zloQ:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"React is awesomeful","author":"Shaun T Gedye","date":"2020-05-04"}}},{"node":{"frontmatter":{"title":"Gatsby\'s Great","author":"Shaun Gedye","date":"2020-07-07"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-blog-js-6ba666f696a017068fe2.js.map