(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{182:function(e,m,t){var content=t(205);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("a7d490a8",content,!0,{sourceMap:!1})},204:function(e,m,t){"use strict";var n=t(182);t.n(n).a},205:function(e,m,t){(m=t(19)(!1)).push([e.i,"#media-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff}#media-wrapper #media-menu{flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-align:stretch;align-items:stretch;padding:.25rem;-webkit-transition:padding .3s;transition:padding .3s;background:#e6e6e6}#media-wrapper #media-menu,#media-wrapper #media-menu .media-menu-item{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;margin:.25rem;border-radius:.5rem;box-shadow:0 0 .5rem .25rem rgba(0,0,0,.05)}#media-wrapper #media-menu .media-menu-item{text-decoration:none;background:#ececec;text-align:center;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1;padding:.5rem;border-radius:.25rem;min-width:100%;-webkit-transition:all .3s;transition:all .3s}#media-wrapper #media-menu .media-menu-item:hover{box-shadow:0 0 .5rem .25rem rgba(0,0,0,.1)}@media (min-width:22em){#media-wrapper #media-menu .media-menu-item{min-width:40%;padding:1rem}}@media (min-width:40em){#media-wrapper #media-menu .media-menu-item{min-width:30%;padding:1.5rem}}#media-wrapper #media-menu .media-menu-item .media-menu-item-title{font-size:1rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-transition:all .3s;transition:all .3s}@media (min-width:40em){#media-wrapper #media-menu .media-menu-item .media-menu-item-title{font-size:1.25rem}}#media-wrapper #media-menu .media-menu-item .media-menu-item-title .length{opacity:.5;margin:.25rem .5rem}#media-wrapper #media-menu .media-menu-item-submenu{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-top:.5rem;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;border-radius:.25rem;background:#e6e6e6;box-shadow:0 0 .5rem .25rem rgba(0,0,0,.05)}#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-title{font-size:1rem;padding:.75rem;text-align:center;min-width:100%;background:#ececec;-webkit-transition:all .3s;text-decoration:none;transition:all .3s;box-shadow:0 0 .5rem .25rem rgba(0,0,0,.05)}#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-title:hover{box-shadow:0 0 .5rem .25rem rgba(0,0,0,.1)}@media (min-width:22em){#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-title{font-size:1.25rem}}#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-pages{padding:.25rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch;background:#e6e6e6;box-shadow:0 0 .5rem .25rem rgba(0,0,0,.025)}#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-pages .media-menu-item-submenu-page{-webkit-box-flex:1;flex:1;margin:.25rem;border-radius:.25rem;padding:.5rem;min-width:100%;background:#ececec;text-align:center;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-decoration:none;-webkit-transition:all .3s;transition:all .3s;box-shadow:0 0 .5rem .25rem rgba(0,0,0,.05)}#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-pages .media-menu-item-submenu-page:hover{box-shadow:0 0 .5rem .25rem rgba(0,0,0,.1)}@media (min-width:22em){#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-pages .media-menu-item-submenu-page{min-width:40%}}@media (min-width:40em){#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-pages .media-menu-item-submenu-page{padding:1rem;font-size:1.25rem;min-width:30%;max-width:50%}}#media-wrapper #media-menu .media-menu-item-submenu .media-menu-item-submenu-pages .media-menu-item-submenu-page .length{opacity:.5;margin:.25rem .5rem}",""]),e.exports=m},240:function(e,m,t){"use strict";t.r(m);var n=t(181),r={data:function(){return{title:"media",data:n}},head:function(){return{title:"cata-list - Media"}}},d=(t(204),t(6)),component=Object(d.a)(r,(function(){var e=this,m=e.$createElement,t=e._self._c||m;return t("div",{attrs:{id:"media-wrapper"}},[t("div",{attrs:{id:"media-menu"}},[e._l(e.data,(function(section,m){return section.channels?e._e():t("nuxt-link",{key:"item-"+m,staticClass:"media-menu-item",attrs:{to:"/media/"+section.slug,slug:section.slug,title:section.title,"data-slug":section.slug}},[section.channels?e._e():t("p",{staticClass:"media-menu-item-title"},[e._v(e._s(section.title)+" "),t("span",{staticClass:"length",domProps:{textContent:e._s("("+section.list.length+")")}})])])})),e._v(" "),t("div",{staticClass:"media-menu-item-submenu"},[t("nuxt-link",{staticClass:"media-menu-item-submenu-title",attrs:{to:"/media/youtube"},domProps:{textContent:e._s("YouTube")}}),e._v(" "),t("div",{staticClass:"media-menu-item-submenu-pages"},e._l(e.data[6].channels,(function(m,n){return t("nuxt-link",{key:"sub-item-"+n,staticClass:"media-menu-item-submenu-page",attrs:{to:"/media/youtube/"+m.slug}},[e._v(e._s(m.title)+" "),t("span",{staticClass:"length",domProps:{textContent:e._s("("+m.number+")")}})])})),1)],1)],2)])}),[],!1,null,null,null);m.default=component.exports}}]);