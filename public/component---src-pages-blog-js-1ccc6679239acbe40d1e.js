(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5w8u":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("oEq0"),l=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},a.a.createElement("path",{fill:"#BEE3F8",d:"M44,7L4,23l40,16l-7-16L44,7z M36,23H17l18-7l1,6V23z"}),a.a.createElement("path",{fill:"#3182CE",d:"M40.212,10.669l-5.044,11.529L34.817,23l0.351,0.802l5.044,11.529L9.385,23L40.212,10.669 M44,7L4,23 l40,16l-7-16L44,7L44,7z"}),a.a.createElement("path",{fill:"#3182CE",d:"M36,22l-1-6l-18,7l17,7l-2-5l-8-2h12V22z M27.661,21l5.771-2.244L33.806,21H27.661z"}))},o=function(){return a.a.createElement("nav",{id:"desktop-nav"},a.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#about-us",title:"About Us"}),a.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#design-process",title:"Design Process"}),a.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#services",title:"Services"}),a.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#testimonials",title:"Testimonials"}),a.a.createElement(i.AnchorLink,{className:"desktop-link",to:"/#contact-us",title:"Contact Us"}))},u=n("vOnD");function c(){var e=f(["\n  position: absolute;\n  top: 80px;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: ",";\n  pointer-events: ",";\n  transition: height 800ms;\n  text-shadow: 1px 1px 1px black;\n  background: rgba(33, 33, 33, 0.99);\n  z-index: 5;\n  ul {\n    height: 80%;\n    margin: 10% 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    list-style: none;\n    opacity: ",";\n    transition: ",";\n  }\n  li {\n    text-align: center;\n    font-size: 8vw;\n  }\n"]);return c=function(){return e},e}function s(){var e=f(["\n  height: 4px;\n  width: 30px;\n  background-color: #111;\n  border-radius: 2px;\n  margin: 5px 0;\n  transition: all 800ms;\n  transform-origin: center;\n"]);return s=function(){return e},e}function d(){var e=f(["\n  width: 30px;\n  margin: 0 auto;\n  z-index: 99;\n  cursor: pointer;\n  transition: transform 800ms;\n  transform: ",";\n  transform-origin: center;\n  /* div {\n    box-shadow: ",";\n  } */\n  div:first-of-type {\n    transform: ",";\n  }\n  div:nth-of-type(2) {\n    transform: ",";\n  }\n  div:last-of-type {\n    transform: ",";\n  }\n"]);return d=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),e.raw=t,e}var m=u.a.div(d(),(function(e){return e.isMenuOpen?"rotate(-90deg)":"rotate(0)"}),(function(e){return e.isMenuOpen?"0px 0px 1px orange":"0px 0px 1px black"}),(function(e){return e.isMenuOpen?"rotate(-45deg) translate(-9px, 10px)":"rotate(0) translate(0)"}),(function(e){return e.isMenuOpen?"rotate(-135deg) translate(-3px, -2px)":"rotate(0) translate(0)"}),(function(e){return e.isMenuOpen?"rotate(-45deg) translate(4px, -3px)":"rotate(0) translate(0)"})),p=u.a.div(s()),h=u.a.div(c(),(function(e){return e.isMenuOpen?"calc(100vh - 80px)":"0px"}),(function(e){return e.isMenuOpen?"all":"none"}),(function(e){return e.isMenuOpen?"1":"0"}),(function(e){return e.isMenuOpen?"opacity 500ms 300ms":"opacity 300ms 0ms"})),E=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return Object(r.useEffect)((function(){document.querySelector("body").style.overflow=t?"hidden":"auto"}),[t]),a.a.createElement("nav",{id:"mobile-nav"},a.a.createElement(m,{isMenuOpen:t,onClick:function(){return n((function(e){return!e}))}},a.a.createElement(p,{id:"hb-top"}),a.a.createElement(p,{id:"hb-middle"}),a.a.createElement(p,{id:"hb-bottom"})),a.a.createElement(h,{id:"nav-overlay",isMenuOpen:t,onClick:function(){return n(!1)}},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.AnchorLink,{to:"/#top-of-page",title:"Home"})),a.a.createElement("li",null,a.a.createElement(i.AnchorLink,{to:"/#about-us",title:"About Us"})),a.a.createElement("li",null,a.a.createElement(i.AnchorLink,{to:"/#design-process",title:"Design Process"})),a.a.createElement("li",null,a.a.createElement(i.AnchorLink,{to:"/#services",title:"Services"})),a.a.createElement("li",null,a.a.createElement(i.AnchorLink,{to:"/#testimonials",title:"Testimonials"})),a.a.createElement("li",null,a.a.createElement(i.AnchorLink,{to:"/#contact-us",title:"Contact Us"})))))},g=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],u=function(){var e=document.documentElement.scrollTop,t=document.body.scrollTop||e;n(t)};Object(r.useEffect)((function(){return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}}));var c=Object(r.useState)(null),s=c[0],d=c[1];return Object(r.useEffect)((function(){d(t>2?{height:80,backgroundColor:"rgba(205, 205, 255, 0.95)"}:{height:80,backgroundColor:"rgba(205, 205, 255, 0.1)",borderBottom:"1px solid darkblue"})}),[t]),a.a.createElement("header",{id:"header",style:s},a.a.createElement("div",{id:"logo",style:{width:"48px",height:"48px"}},a.a.createElement(l,null)),a.a.createElement(i.AnchorLink,{to:"/#top-of-page",id:"header-title",title:"Thinking Digital"}),a.a.createElement(E,null),a.a.createElement(o,null))};function v(){var e=y(["\n  height: 100%;\n  min-height: 150px;\n  min-width: 25%;\n  ul {\n    padding: 0;\n    list-style: none;\n  }\n  a {\n    text-decoration: none;\n  }\n"]);return v=function(){return e},e}function b(){var e=y(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #888;\n  border-top: 1px solid #333;\n\n  @media screen and (min-width: 600px) {\n    flex-direction: row;\n  }\n"]);return b=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),e.raw=t,e}var k=u.a.footer(b()),x=u.a.article(v()),w=function(){return a.a.createElement(k,null,a.a.createElement(x,null,a.a.createElement("h2",null,"About Us"),a.a.createElement("p",null,"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.")),a.a.createElement(x,null,a.a.createElement("h2",null,"Important Links"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"Terms & Conditions")),a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"Privacy Policy")))),a.a.createElement(x,null,a.a.createElement("h2",null,"Social Media"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"Twitter")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/"},"GitHub")))))};n("okom"),t.a=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement("main",{id:"main-body"},t),a.a.createElement(w,null))}},F0uZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=u;var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("Wbzz"),l=n("dj5g"),o=n("PDH8");function u(e){var t=e.to,n=e.title,r=e.children,o=e.className,u=e.stripHash,c=void 0!==u&&u,s={to:c?(0,l.stripHashedLocation)(t):t,onClick:function(e){return c?(0,l.handleStrippedLinkClick)(t,e):(0,l.handleLinkClick)(t,e)}};return n&&(s.title=n),o&&(s.className=o),a.default.createElement(i.Link,s,Boolean(r)?r:n)}u.propTypes=o.anchorLinkTypes},PDH8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var r,a=(r=n("17x9"))&&r.__esModule?r:{default:r};var i={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,children:a.default.node};t.anchorLinkTypes=i},Wbzz:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",(function(){return p})),n.d(t,"StaticQueryContext",(function(){return s})),n.d(t,"StaticQuery",(function(){return f})),n.d(t,"useStaticQuery",(function(){return m})),n.d(t,"prefetchPathname",(function(){return c}));n("xfY5");var r=n("q1tI"),a=n.n(r),i=n("+ZDr"),l=n.n(i);n.d(t,"Link",(function(){return l.a})),n.d(t,"withAssetPrefix",(function(){return i.withAssetPrefix})),n.d(t,"withPrefix",(function(){return i.withPrefix})),n.d(t,"parsePath",(function(){return i.parsePath})),n.d(t,"navigate",(function(){return i.navigate})),n.d(t,"push",(function(){return i.push})),n.d(t,"replace",(function(){return i.replace})),n.d(t,"navigateTo",(function(){return i.navigateTo}));var o=n("lw3w"),u=n.n(o);n.d(t,"PageRenderer",(function(){return u.a}));var c=n("emEt").default.enqueue,s=a.a.createContext({});function d(e){var t=e.staticQueryData,n=e.data,r=e.query,i=e.render,l=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,l&&i(l),!l&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return a.a.createElement(s.Consumer,null,(function(e){return a.a.createElement(d,{data:t,query:n,render:r||i,staticQueryData:e})}))},m=function(e){a.a.useContext;var t=a.a.useContext(s);if(isNaN(Number(e)))throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+e+"`);\n");if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},oEq0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n("F0uZ")},okom:function(e,t,n){},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},vx99:function(e,t,n){"use strict";n.r(t);var r=n("zloQ"),a=n("q1tI"),i=n.n(a),l=n("5w8u");t.default=function(){var e=r.data.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement("h1",null,"Blog"),i.a.createElement("ol",null,e.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("h3",null,e.node.frontmatter.title),i.a.createElement("h5",null,e.node.frontmatter.author),i.a.createElement("h4",null,e.node.frontmatter.date))}))))}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),l=n("Xbzi"),o=n("apmT"),u=n("eeVq"),c=n("kJMx").f,s=n("EemH").f,d=n("hswa").f,f=n("qncB").trim,m=r.Number,p=m,h=m.prototype,E="Number"==i(n("Kuth")(h)),g="trim"in String.prototype,v=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var l,u=t.slice(2),c=0,s=u.length;c<s;c++)if((l=u.charCodeAt(c))<48||l>a)return NaN;return parseInt(u,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(E?u((function(){h.valueOf.call(n)})):"Number"!=i(n))?l(new p(v(t)),n,m):v(t)};for(var b,y=n("nh4g")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;y.length>k;k++)a(p,b=y[k])&&!a(m,b)&&d(m,b,s(p,b));m.prototype=h,h.constructor=m,n("KroJ")(r,"Number",m)}},zloQ:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"Gatsby\'s Great","author":"Shaun Gedye","date":"2020-07-07"}}},{"node":{"frontmatter":{"title":"React is awesomeful","author":"Shaun T Gedye","date":"2020-05-04"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-blog-js-1ccc6679239acbe40d1e.js.map