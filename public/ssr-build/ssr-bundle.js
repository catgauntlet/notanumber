module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="QfWi")}({FA6U:function(t,e,n){t.exports={small:"small__Csbyg"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,c(e).map(p).join(""));var e}(t),t.props}function c(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function p(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var l=null,f=[],s=[],h={};function d(){var t;return""+((t=l&&l.location?l.location:l&&l.getCurrentLocation?l.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(t.search||"")}function g(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=f.length;e--;)if(f[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),l&&l[e]?l[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),y(t)}function y(t){for(var e=!1,n=0;n<f.length;n++)!0===f[n].routeTo(t)&&(e=!0);for(var r=s.length;r--;)s[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return g(e)}}function m(t){if(0==t.button)return v(t.currentTarget||t.target||this),b(t)}function b(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function O(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(v(e))return b(t)}}while(e=e.parentNode)}}var j=!1;var C=function(t){function e(e){t.call(this,e),e.history&&(l=e.history),this.state={url:e.url||d()},j||("function"==typeof addEventListener&&(l||addEventListener("popstate",(function(){y(d())})),addEventListener("click",O)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){f.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;l&&(this.unlisten=l.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(u).map((function(t){var u=function(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),a={};if(u&&u[1])for(var p=u[1].split("&"),l=0;l<p.length;l++){var f=p[l].split("=");a[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=c(t.replace(i,"")),e=c(e||"");for(var s=Math.max(t.length,e.length),h=0;h<s;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),g=(e[h].match(/[+*?]+$/)||o)[0]||"",y=~g.indexOf("+"),v=~g.indexOf("*"),m=t[h]||"";if(!m&&!v&&(g.indexOf("?")<0||y)){r=!1;break}if(a[d]=decodeURIComponent(m),y||v){a[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&a}(e,t.props.path,t.props);if(u){if(!1!==n){var a={url:e,matches:u};return i(a,u),delete a.ref,delete a.key,Object(r.cloneElement)(t,a)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),a=u[0]||null,c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:c,active:u,current:a})),a},e}(r.Component);C.subscribers=s,C.getCurrentUrl=d,C.route=g,C.Router=C,C.Route=function(t){return Object(r.createElement)(t.component,t)},C.Link=function(t){return Object(r.createElement)("a",i({onClick:m},t))};n("FA6U");var x=function(){return Object(r.h)("header",null,Object(r.h)("span",{class:"small"},"It's"),Object(r.h)("span",null,"NaN"))};var _=function(t){var e,n;function o(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).handleRoute=function(t){console.log(t),e.currentUrl=t.url},e}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){return Object(r.h)("div",{id:"app"},Object(r.h)(C,{onChange:this.handleRoute},Object(r.h)(x,{path:"/"})))},o}(r.Component);e.default=_}});
//# sourceMappingURL=ssr-bundle.js.map