(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"/Ev/":function(e){e.exports={div:{children:["First one"]}}},"91YO":function(e){e.exports={button:{children:["Sweet home"]}}},"9Jkg":function(e,n,t){e.exports=t("oh+g")},Di1n:function(e,n,t){var r={"./about.json":"wrps","./first.json":"/Ev/","./home.json":"91YO","./second.json":"giLc"};function o(e){var n=i(e);return t(n)}function i(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="Di1n"},E8gZ:function(e,n,t){var r=t("jmDH"),o=t("w6GO"),i=t("NsO/"),a=t("NV0k").f;e.exports=function(e){return function(n){for(var t,c=i(n),u=o(c),s=u.length,f=0,l=[];s>f;)t=u[f++],r&&!a.call(c,t)||l.push(e?[t,c[t]]:c[t]);return l}}},"LR/J":function(e,n,t){e.exports=t("tgZa")},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),i=t("nOHt"),a=t("doui"),c=t("LR/J"),u=t.n(c),s=t("m+dz"),f=t.n(s),l=t("YFqc"),p=t.n(l),d=t("fURi");function h(e){var n=e.children;return o.a.createElement("div",null,o.a.createElement("header",{className:f.a.header},o.a.createElement("div",{className:f.a.wrapper},u()(d).map(function(e){var n=Object(a.default)(e,2),t=n[0],r=n[1];return o.a.createElement("div",{className:f.a.menu},o.a.createElement(p.a,{as:"../".concat(t),href:"../?json=".concat(t)},o.a.createElement("a",null,r)))}))),o.a.createElement("main",null,n))}var v=t("dfwq"),m=t("UXZV"),w=t.n(m),E=t("pLtp"),y=t.n(E),g=t("p0XB"),O=t.n(g);function N(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.isValidElement)(e)?e:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=function(e){return N(e,n)};return O()(e)?e.map(t):"object"!=typeof e?e:y()(e).map(function(o){var i=e[o],a=w()({},"object"!=typeof i||O()(i)?{children:O()(i)?i:[i]}:i),c=a.tag,u=void 0===c?o:c,s=a.name,f=void 0===s?o:s,l=a.className,p=void 0===l?f:l,d=a.key,h=void 0===d?f:d,m=a.children,E=void 0===m?[]:m;return w()(a,{name:f,key:h,className:p}),delete a.children,delete a.tag,r.createElement.apply(void 0,[u in n?n[u]:u,a].concat(Object(v.default)((O()(E)?E:[E]).map(t))))})}(e,n)}var _=t("m/Pd"),j=t.n(_);function k(e){var n=e.page;return e.redirect?o.a.createElement(j.a,null,o.a.createElement("meta",{"http-equiv":"Refresh",content:"0; url=./".concat(n,"/")})):o.a.createElement(h,null,n)}k.getInitialProps=function(e){var n=e.query,r=n.json,o=n.redirect;if(o)return{redirect:o,page:r};var i=t("Di1n")("./".concat(r,".json"));try{i=t("n+Nu")("./".concat(r)).default(i)}catch(a){}return{page:N(i)}};n.default=Object(i.withRouter)(k)},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("KI45"),o=r(t("9Jkg")),i=r(t("/HRN")),a=r(t("WaGi")),c=r(t("ZDA2")),u=r(t("/+P4")),s=r(t("N9n2")),f=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n},l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var p=t("CxY0"),d=f(t("q1tI")),h=(l(t("17x9")),f(t("nOHt"))),v=t("Bu4q");function m(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var w=function(e){function n(){var e,t,r,o,a;return(0,i.default)(this,n),(e=(0,c.default)(this,(0,u.default)(n).apply(this,arguments))).formatUrls=(t=function(e,n){return{href:m(e),as:m(n)}},r=null,o=null,a=null,function(e,n){if(e===r&&n===o)return a;var i=t(e,n);return r=e,o=n,a=i,i}),e.linkClicked=function(n){var t=n.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,c=i.as;if(function(e){var n=p.parse(e,!1,!0),t=p.parse(v.getLocationOrigin(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(a)){var u=window.location.pathname;a=p.resolve(u,a),c=c?p.resolve(u,c):a,n.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](a,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(n){e.props.onError&&e.props.onError(n)})}}},e}return(0,s.default)(n,e),(0,a.default)(n,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=p.resolve(e,n);h.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"==typeof n&&(n=d.default.createElement("a",null,n));var i=d.Children.only(n),a={onClick:function(n){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=h.Router._rewriteUrlForNextExport(a.href)),d.default.cloneElement(i,a)}}]),n}(d.Component);n.default=w},fURi:function(e){e.exports={home:"Home",first:"My first page",second:"Another one",about:"About us"}},giLc:function(e){e.exports={div:{children:["Second one"]}}},"n+Nu":function(e,n,t){var r={"./":"RNiq","./about":"wrps","./about.json":"wrps","./first":"/Ev/","./first.json":"/Ev/","./home":"CH2o","./home.js":"CH2o","./home.json":"91YO","./index":"RNiq","./index.js":"RNiq","./second":"giLc","./second.json":"giLc"};function o(e){var n=i(e);return t(n)}function i(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="n+Nu"},nGDx:function(e,n,t){var r=t("Y7ZC"),o=t("E8gZ")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},"oh+g":function(e,n,t){var r=t("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},tgZa:function(e,n,t){t("nGDx"),e.exports=t("WEpk").Object.entries},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])},wrps:function(e){e.exports={div:{children:[{p:{children:["This is the about page"]}}]}}}},[["vlRD","5d41","9da1","ad9d"]]]);