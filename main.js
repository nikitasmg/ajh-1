!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t,n){},function(e,t,n){"use strict";var r,o,i,l,u,c=document.getElementById("root");!function(){for(var e,t=0;t<16;t++)null===(e=c)||void 0===e||e.insertAdjacentHTML("afterbegin",'<div class="cell" data-img = '+t+"></div>")}(),i=Math.ceil(15*Math.random()),l=document.querySelector('[data-img="'+i+'"]'),u=document.querySelector("img"),null===(r=l)||void 0===r||r.insertAdjacentHTML("beforeend",'<img id="img" class="goblin" src="../../src/assets/imgs/goblin.png" alt="goblin">'),null===(o=u)||void 0===o||o.remove(),setInterval((function(){var e,t,n=Math.ceil(15*Math.random()),r=document.querySelector('[data-img="'+n+'"]'),o=document.querySelector("img");null===(e=r)||void 0===e||e.insertAdjacentHTML("beforeend",'<img id="img" class="goblin" src="../../src/assets/imgs/goblin.png" alt="goblin">'),null===(t=o)||void 0===t||t.remove()}),1e3)}]);