(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{165:function(t,e,n){var content=n(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1a64318d",content,!0,{sourceMap:!1})},166:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMywxM1Y4aC0yLjljMCwwLTAuNywwLjEtMC45LTAuNGMtMC4yLTAuNSwwLjMtMSwwLjMtMUwxNi4xLDBsNi41LDYuNWMwLDAsMC43LDAuNSwwLjUsMS4xDQoJCWMtMC4xOTksMC42LTEsMC40LTEsMC40SDE5djVjMCwwLjYtMC4zLDEtMC45LDFoLTRDMTMuNiwxNCwxMywxMy42LDEzLDEzeiBNMTUsMTJoMlY2aDIuMUwxNi4yLDNMMTMuMSw2SDE1VjEyeiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xLjEsMTYuNGMwLjItMC41LDEtMC40LDEtMC40SDV2LTVjMC0wLjYsMC41LTEsMS0xaDRjMC42LDAsMSwwLjQsMSwxdjVoMy4xYzAsMCwwLjctMC4xLDAuOSwwLjQNCgkJcy0wLjMsMS0wLjMsMUw4LDI0bC02LjUtNi41QzEuNiwxNy41LDAuOSwxNywxLjEsMTYuNHogTTgsMjFsMy4xLTNIOXYtNkg3djZINS4xTDgsMjF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},167:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return r}))},168:function(t,e,n){var content=n(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("79a3869e",content,!0,{sourceMap:!1})},169:function(t,e,n){"use strict";n(72);var r=n(167),o={props:{title:String,slug:String,sortable:null,tools:!1},data:function(){return{sortalpha:0}},methods:{showSort:function(){var t=document.getElementById("media-sort-wrapper");t.classList.contains("hide")?t.classList.remove("hide"):t.classList.add("hide")},sortAZ:function(t){var e,n;if(window.scrollTo(0,0),t.target.classList.contains("section-title-sort")?(n=t.target.parentNode.nextElementSibling,e=Object(r.a)(t.target.parentNode.nextElementSibling.children)):t.target.classList.contains("section-title-sort-icon")&&(n=t.target.parentNode.parentNode.nextElementSibling,e=Object(r.a)(t.target.parentNode.parentNode.nextElementSibling.children)),e.sort((function(a,b){var t=a.children[1].textContent.replace("'","").toLowerCase(),e=b.children[1].textContent.replace("'","").toLowerCase();return t<e?-1:t>e?1:0})),this.sortalpha++,this.sortalpha%2==0){var o=e.reverse();e=o}e.forEach((function(t){n.appendChild(t)}))}}},l=(n(171),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-title"},[r("nuxt-link",{staticClass:"section-title-back",attrs:{to:"/"+t.slug}},[r("img",{staticClass:"section-title-back-icon",attrs:{src:n(170),alt:"back"}})]),t._v(" "),r("nuxt-link",{staticClass:"section-title-text",attrs:{to:"/"+t.slug},domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sortable&&!t.tools?r("div",{staticClass:"section-title-sort",on:{click:t.showSort}},[r("img",{staticClass:"section-title-sort-icon",attrs:{src:n(166),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&t.tools?r("div",{staticClass:"section-title-sort",on:{click:t.sortAZ}},[r("img",{staticClass:"section-title-sort-icon",attrs:{src:n(166),alt:"sort"}})]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},170:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OTMuNTc4cHgiIGhlaWdodD0iNDkzLjU3OHB4IiB2aWV3Qm94PSIwIDAgNDkzLjU3OCA0OTMuNTc4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTMuNTc4IDQ5My41NzgiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ4Ny4yNjcsMjI1Ljk4MWMwLTE3LjM2NS0xMy45OTktMzEuNTE4LTMxLjUxOC0zMS41MThIMTk0LjUwMUwzMDUuMzUsODMuNjE1DQoJCWMxMi4yNC0xMi4yNCwxMi4yNC0zMi4yMDcsMC00NC42NzZMMjc1LjU5Miw5LjE4Yy0xMi4yNC0xMi4yNC0zMi4yMDctMTIuMjQtNDQuNjc2LDBMMTUuNTY4LDIyNC41MjcNCgkJYy02LjEyLDYuMTItOS4yNTYsMTQuMTUzLTkuMjU2LDIyLjI2MmMwLDguMDMxLDMuMTM2LDE2LjE0Myw5LjI1NiwyMi4yNjJsMjE1LjM0OCwyMTUuMzQ5YzEyLjI0LDEyLjIzOCwzMi4yMDcsMTIuMjM4LDQ0LjY3NiwwDQoJCWwyOS43NTgtMjkuNzZjMTIuMjQtMTIuMjM5LDEyLjI0LTMyLjIwNywwLTQ0LjY3NkwxOTQuNTAxLDI5OS40OThoMjYxLjA5NGMxNy4zNjYsMCwzMS41Mi0xNC4xNTMsMzEuNTItMzEuNTJMNDg3LjI2NywyMjUuOTgxeiIvPg0KPC9nPg0KPC9zdmc+DQo="},171:function(t,e,n){"use strict";var r=n(165);n.n(r).a},172:function(t,e,n){(e=n(19)(!1)).push([t.i,".section-title{border-radius:.5rem .5rem 0 0;background:#393f46;position:-webkit-sticky;position:sticky;top:1.85em;z-index:5;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-decoration:none;color:#fff;cursor:pointer;box-shadow:inset 0 0 .5rem .25rem rgba(0,0,0,.25)}.section-title .section-title-text{font-size:1.1em;text-decoration:none;color:#fff;-webkit-box-flex:1;flex:1;padding:.5rem;max-width:75%;margin:0 auto;text-align:center}.section-title .section-title-back{position:absolute;left:0;text-decoration:none;color:#fff;margin-left:.5rem}.section-title .section-title-back .section-title-back-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box}.section-title .section-title-sort{position:absolute;right:0;z-index:5;margin-right:.5rem}.section-title .section-title-sort .section-title-sort-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box}",""]),t.exports=e},173:function(t,e,n){"use strict";var r=n(168);n.n(r).a},174:function(t,e,n){(e=n(19)(!1)).push([t.i,'.article{background:rgba(80,88,98,.05);display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-radius:.25rem;-webkit-box-flex:1;flex:1;overflow:hidden;margin:.125rem;min-width:100%;text-decoration:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-transition:all .3s;transition:all .3s;box-shadow:inset 0 0 .5em .1em hsla(0,0%,100%,.15)}@media (min-width:64em){.article{min-width:40%}}.article:hover{box-shadow:inset 0 0 .5em .1em hsla(0,0%,100%,.3)}.article:hover .article-description,.article:hover .article-wikiextract{color:hsla(0,0%,100%,.9)}.article:hover .article-divider{width:80%}.article .article-title{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:hsla(0,0%,100%,.9);height:auto;padding:.5rem;font-size:1.05rem;text-decoration:none;text-align:center;width:100%}.article .article-divider{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(hsla(0,0%,100%,.75)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.75),hsla(0,0%,100%,0));width:33%;border:0;height:1px;-webkit-transition:width .3s;transition:width .3s}.article .article-description,.article .article-wikiextract{flex-wrap:wrap;-webkit-box-flex:1;flex:1;-webkit-transition:all .3s;transition:all .3s;padding:.75rem;text-indent:.5rem;color:hsla(0,0%,100%,.75)}.article .article-description,.article .article-metadata,.article .article-wikiextract{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.article .article-metadata{flex-wrap:wrap;color:hsla(0,0%,100%,.8);width:100%;padding:.25rem;background:hsla(0,0%,100%,.1)}.article .article-metadata .article-metadata-date,.article .article-metadata .article-metadata-source{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:.8rem}.article .article-metadata .article-metadata-date{margin-left:.33rem}.article .article-metadata .article-metadata-author{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:.8rem}.article .article-metadata .article-metadata-author:before{content:" -  ";font-size:1rem;margin:auto .25rem}.article .article-metadata .article-smmry{margin-left:.5rem;width:auto;text-align:center;font-size:.8rem;text-decoration:none;color:hsla(0,0%,100%,.8);-webkit-transition:all .3s;transition:all .3s}.article .article-metadata .article-smmry:hover{text-decoration:underline}.article .article-metadata .article-smmry:before{content:" |  "}',""]),t.exports=e},176:function(t,e,n){"use strict";var r={props:{info:{}}},o=(n(173),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("a",{staticClass:"article-title",attrs:{href:this.info.link,target:"_blank"},domProps:{textContent:t._s(this.info.title)}}),t._v(" "),n("hr",{staticClass:"article-divider"}),t._v(" "),this.info.description?n("p",{staticClass:"article-description",domProps:{textContent:t._s(this.info.description)}}):t._e(),t._v(" "),this.info.wikiextract?n("p",{staticClass:"article-wikiextract",domProps:{textContent:t._s(this.info.wikiextract)}}):t._e(),t._v(" "),n("div",{staticClass:"article-metadata"},[this.info.source?n("p",{staticClass:"article-metadata-source",domProps:{textContent:t._s(this.info.source)}}):t._e(),t._v(" "),this.info.date?n("p",{staticClass:"article-metadata-date",domProps:{textContent:t._s("("+this.info.date+")")}}):t._e(),t._v(" "),this.info.author?n("p",{staticClass:"article-metadata-author",domProps:{textContent:t._s(this.info.author)}}):t._e(),t._v(" "),this.info.smmry?n("a",{staticClass:"article-smmry",attrs:{href:"https://smmry.com/"+this.info.link+"#&SM_LENGTH=7",target:"_blank"},domProps:{textContent:t._s("Summary")}}):t._e()])])}),[],!1,null,null,null);e.a=component.exports},184:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0e4ccdba",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";var r=n(184);n.n(r).a},209:function(t,e,n){(e=n(19)(!1)).push([t.i,".timeline-section-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff;padding:.25rem}.timeline-section-wrapper .timeline-container{background:#22262a}.timeline-section-wrapper .timeline-container .timeline-year-wrapper{position:relative;padding:.25rem}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-year-title{font-size:1.1em;padding:.5rem;text-align:center;width:100%;cursor:pointer;margin:0 auto;background-image:-webkit-gradient(linear,left top,right top,from(rgba(57,63,70,0)),color-stop(#393f46),to(rgba(57,63,70,0)));background-image:linear-gradient(90deg,rgba(57,63,70,0),#393f46,rgba(57,63,70,0));-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper{position:relative;padding:.5rem 0;background:#22262a;-webkit-animation:fadeIn .3s;animation:fadeIn .3s}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month{margin:1rem auto}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month:first-child,.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month:last-child{margin:0 auto}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-month-title{font-size:1.1em;padding:.5rem;z-index:3;cursor:pointer;position:-webkit-sticky;position:sticky;top:3.45em;text-align:center;width:100%;margin:0 auto;background-image:-webkit-gradient(linear,left top,right top,from(rgba(57,63,70,0)),color-stop(#393f46),to(rgba(57,63,70,0)));background-image:linear-gradient(90deg,rgba(57,63,70,0),#393f46,rgba(57,63,70,0));-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-links-wrapper{padding:.5rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch;background:#22262a;-webkit-animation:fadeIn .3s;animation:fadeIn .3s}",""]),t.exports=e},242:function(t,e,n){"use strict";n.r(e);var r=n(176),o=n(169),l=n(178),c={components:{PageHeader:o.a,Article:r.a},name:"timeline",data:function(){return{title:"Timeline",data:l}},head:function(){return{title:"cata-list - Articles - Timeline"}},methods:{toggleList:function(t){t.target.nextElementSibling.classList.contains("hide")?t.target.nextElementSibling.classList.remove("hide"):t.target.nextElementSibling.classList.add("hide")}}},m=(n(208),n(6)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline-section-wrapper"},[n("PageHeader",{attrs:{slug:"articles",title:t.title}}),t._v(" "),n("div",{staticClass:"timeline-container"},t._l(t.data,(function(e,r){return n("div",{key:"year"+r,staticClass:"timeline-year-wrapper"},[n("p",{staticClass:"timeline-year-title",domProps:{textContent:t._s(e.title)},on:{click:t.toggleList}}),t._v(" "),n("div",{staticClass:"timeline-months-wrapper hide"},t._l(e.months,(function(r,o){return n("div",{key:"month"+o,staticClass:"timeline-month"},[n("p",{staticClass:"timeline-month-title",domProps:{textContent:t._s(e.title+" / "+r.title)},on:{click:t.toggleList}}),t._v(" "),n("div",{staticClass:"timeline-links-wrapper hide"},t._l(r.list,(function(article,t){return n("Article",{key:"article-"+t,attrs:{info:article}})})),1)])})),0)])})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);