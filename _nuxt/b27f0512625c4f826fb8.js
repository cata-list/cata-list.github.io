(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{184:function(e,t,n){var content=n(208);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("174352ca",content,!0,{sourceMap:!1})},207:function(e,t,n){"use strict";var o=n(184);n.n(o).a},208:function(e,t,n){(t=n(19)(!1)).push([e.i,"#quotes-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff}#quotes-wrapper #quotes-menu{padding:.25rem;border-radius:.5rem;box-shadow:var(--theme-boxShadow);background:var(--theme-whiteBG)}#quotes-wrapper #quotes-menu .quotes-menu-section{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-direction:column;min-width:100%;align-items:stretch;overflow:hidden;border-radius:.5rem;transition:padding .3s;box-shadow:var(--theme-boxShadowLight)}#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-title{font-size:var(--theme-headerSize);text-align:center;width:100%;padding:.5rem}#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;flex:auto;align-items:stretch;padding:.25rem;transition:padding .3s}@media (min-width:40em){#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list{padding:.5rem}}#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list .quotes-menu-section-list-item{text-decoration:none;border-radius:.25rem;text-align:center;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex:1;color:var(--theme-black);font-size:1rem;padding:.5rem;margin:.25rem;min-width:100%;transition:all .3s;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list .quotes-menu-section-list-item:hover{box-shadow:var(--theme-boxShadowHover)}@media (min-width:22em){#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list .quotes-menu-section-list-item{min-width:40%;padding:.75rem}}@media (min-width:40em){#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list .quotes-menu-section-list-item{min-width:30%;max-width:50%;padding:1rem;font-size:1.25rem}}@media (min-width:60em){#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list .quotes-menu-section-list-item{min-width:20%;padding:1.25rem}}#quotes-wrapper #quotes-menu .quotes-menu-section .quotes-menu-section-list .quotes-menu-section-list-item .length{opacity:.5;margin:.25rem .5rem}#quotes-wrapper #quotes-menu .quotes-menu-divider{background-image:var(--theme-divider);width:100%;border:0;height:1px;margin:.75rem auto;transition:width .3s}",""]),e.exports=t},242:function(e,t,n){"use strict";n.r(t);var o=n(200),r={data:function(){return{quotes:o}},head:function(){return{title:"cata-list - Quotes"}}},m=(n(207),n(6)),component=Object(m.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quotes-wrapper"}},[n("div",{attrs:{id:"quotes-menu"}},[n("div",{staticClass:"quotes-menu-section"},[n("div",{staticClass:"quotes-menu-section-list"},e._l(e.quotes,(function(t,o){return t.topic?n("nuxt-link",{key:"topics'"+o,staticClass:"quotes-menu-section-list-item",attrs:{to:"/quotes/"+t.slug}},[e._v(e._s(t.name)+" "),n("span",{staticClass:"length",domProps:{textContent:e._s("("+t.quotes.length+")")}})]):e._e()})),1)]),e._v(" "),n("hr",{staticClass:"quotes-menu-divider"}),e._v(" "),n("div",{staticClass:"quotes-menu-section"},[n("div",{staticClass:"quotes-menu-section-list"},e._l(e.quotes,(function(t,o){return t.topic?e._e():n("nuxt-link",{key:"people-"+o,staticClass:"quotes-menu-section-list-item",attrs:{to:"/quotes/"+t.slug}},[e._v(e._s(t.name)+" "),n("span",{staticClass:"length",domProps:{textContent:e._s("("+t.quotes.length+")")}})])})),1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);