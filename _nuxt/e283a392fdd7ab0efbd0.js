(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{179:function(e,t,r){var content=r(201);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("68ef2f6a",content,!0,{sourceMap:!1})},200:function(e,t,r){"use strict";var n=r(179);r.n(n).a},201:function(e,t,r){(t=r(19)(!1)).push([e.i,"#articles-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff}#articles-wrapper #articles-menu{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch;margin:.25rem;padding:.25rem;-webkit-transition:padding .3s;transition:padding .3s;border-radius:.5rem;background:rgba(80,88,98,.25)}#articles-wrapper #articles-menu .articles-menu-divider{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(hsla(0,0%,100%,.75)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.75),hsla(0,0%,100%,0));width:100%;border:0;height:1px;margin:.5rem auto;-webkit-transition:width .3s;transition:width .3s}#articles-wrapper #articles-menu .articles-menu-item{border-radius:.5rem;background:rgba(57,63,70,.35);text-align:center;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretrch;align-items:stretrch;padding:.25rem;min-width:100%}#articles-wrapper #articles-menu .articles-menu-item,#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-title{text-decoration:none;color:#fff;-webkit-box-flex:1;flex:1;border-radius:.25rem;margin:.25rem;-webkit-transition:all .3s;transition:all .3s}#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-title{font-size:1.1rem;padding:.5rem;background:rgba(92,100,112,.35);box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.1)}@media (min-width:23em){#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-title{font-size:1.25rem}}#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-title:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.25)}#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections{text-align:center;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.25rem;width:100%;-webkit-box-align:stretch;align-items:stretch}#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title{text-align:center;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.5rem;margin:.15rem;min-width:100%;-webkit-box-flex:1;flex:1;text-decoration:none;color:#fff;-webkit-transition:all .3s;transition:all .3s;border-radius:.25rem;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;background:rgba(69,75,84,.35);box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.1)}#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.25)}@media (min-width:23em){#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title{min-width:40%}}@media (min-width:40em){#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title{min-width:30%;max-width:50%}}@media (min-width:60em){#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title{font-size:1.05rem;min-width:20%}}#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title.timeline{min-width:20%;max-width:30%}@media (min-width:30em){#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title.timeline{min-width:17.5%}}@media (min-width:40em){#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title.timeline{min-width:12.5%}}@media (min-width:50em){#articles-wrapper #articles-menu .articles-menu-item .articles-menu-item-subsections .articles-menu-item-subsection-title.timeline{min-width:auto}}",""]),e.exports=t},238:function(e,t,r){"use strict";r.r(t);var n=r(177),l=r(178),m={data:function(){return{title:"articles",data:n,timeline:l}},head:function(){return{title:"cata-list - Articles"}}},c=(r(200),r(6)),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"articles-wrapper"}},[r("div",{attrs:{id:"articles-menu"}},[r("nuxt-link",{staticClass:"articles-menu-item",attrs:{to:"/articles/timeline",slug:"timeline"}},[r("nuxt-link",{staticClass:"articles-menu-item-title",attrs:{to:"/articles/timeline"},domProps:{textContent:e._s("Timeline")}}),e._v(" "),r("div",{staticClass:"articles-menu-item-subsections"},e._l(e.timeline,(function(section,i){return r("nuxt-link",{key:i,staticClass:"articles-menu-item-subsection-title timeline",attrs:{to:"/articles/timeline/"+section.title,parent:section.title},domProps:{textContent:e._s(section.title)}})})),1)],1),e._v(" "),r("hr",{staticClass:"articles-menu-divider"}),e._v(" "),e._l(e.data,(function(section,i){return r("div",{key:i,staticClass:"articles-menu-item"},[r("nuxt-link",{staticClass:"articles-menu-item-title",attrs:{to:"/articles/"+section.slug,slug:section.slug,title:section.title},domProps:{textContent:e._s(section.title)}}),e._v(" "),r("div",{staticClass:"articles-menu-item-subsections"},e._l(section.sections,(function(t,i){return r("nuxt-link",{key:i,staticClass:"articles-menu-item-subsection-title",attrs:{to:"/articles/"+section.slug+"/"+t.slug,parent:section.slug},domProps:{textContent:e._s(t.title)}})})),1)],1)}))],2)])}),[],!1,null,null,null);t.default=component.exports}}]);