!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){function n(e){return new Promise((function(t){setTimeout((function(){t(e)}),e)}))}var r=function(e){return console.log("Resolved after ".concat(e,"ms"))};n(2e3).then(r),n(1e3).then(r),n(1500).then(r)},function(e,t){function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],i=function(e,t){return new Promise((function(n){n(e.map((function(e){return e.name===t?r(r({},e),{},{active:!e.active}):e})))}))},u=function(e){return console.table(e)};i(c,"Mango").then(u),i(c,"Lux").then(u)},function(e,t){var n=function(e){var t,n,r=(t=200,n=500,Math.floor(Math.random()*(n-t+1)+t));return new Promise((function(t,n){setTimeout((function(){Math.random()>.3?t({id:e.id,time:r}):n({id:e.id})}),r)}))},r=function(e){var t=e.id,n=e.time;console.log("Transaction ".concat(t," processed in ").concat(n,"ms"))},o=function(e){var t=e.id;console.warn("Error processing transaction ".concat(t,". Please try again later."))};n({id:70,amount:150}).then(r).catch(o),n({id:71,amount:230}).then(r).catch(o),n({id:72,amount:75}).then(r).catch(o),n({id:73,amount:100}).then(r).catch(o)},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2)}]);
//# sourceMappingURL=main.bundle.js.map