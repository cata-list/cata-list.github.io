(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{166:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMywxM1Y4aC0yLjljMCwwLTAuNywwLjEtMC45LTAuNGMtMC4yLTAuNSwwLjMtMSwwLjMtMUwxNi4xLDBsNi41LDYuNWMwLDAsMC43LDAuNSwwLjUsMS4xYy0wLjE5OSwwLjYtMSwwLjQtMSwwLjRIMTl2NQ0KCQljMCwwLjYtMC4zLDEtMC45LDFoLTRDMTMuNiwxNCwxMywxMy42LDEzLDEzeiBNMTUsMTJoMlY2aDIuMUwxNi4yLDNMMTMuMSw2SDE1VjEyeiIvPg0KCTxwYXRoIGQ9Ik0xLjEsMTYuNGMwLjItMC41LDEtMC40LDEtMC40SDV2LTVjMC0wLjYsMC41LTEsMS0xaDRjMC42LDAsMSwwLjQsMSwxdjVoMy4xYzAsMCwwLjctMC4xLDAuOSwwLjRzLTAuMywxLTAuMywxTDgsMjQNCgkJbC02LjUtNi41QzEuNiwxNy41LDAuOSwxNywxLjEsMTYuNHogTTgsMjFsMy4xLTNIOXYtNkg3djZINS4xTDgsMjF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},167:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1a64318d",content,!0,{sourceMap:!1})},168:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return r}))},169:function(t,e,n){var content=n(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("79a3869e",content,!0,{sourceMap:!1})},170:function(t,e,n){"use strict";n(73);var r=n(168),o={name:"PageHeader",props:{title:String,slug:String,sortable:null,media:null,tools:null,quotes:null,articles:null,isVimeo:null,isYoutube:null},data:function(){return{sortalpha:1,sortVimeo:0}},methods:{showSort:function(){if(this.quotes){var t=document.getElementById("quotes-sort-wrapper");t.classList.contains("hide")?t.classList.remove("hide"):t.classList.add("hide")}else if(this.media&&!this.isYoutube){var e=document.getElementById("media-sort-wrapper");e.classList.contains("hide")?e.classList.remove("hide"):e.classList.add("hide")}else if(this.articles){var n=document.getElementById("articles-sort-wrapper");n.classList.contains("hide")?n.classList.remove("hide"):n.classList.add("hide")}else if(this.isYoutube){var r=document.getElementById("youtube-sort-wrapper");r.classList.contains("hide")?r.classList.remove("hide"):r.classList.add("hide")}},sortAZ:function(t){var e,n;if(window.scrollTo(0,0),t.target.classList.contains("section-title-sort")?(n=t.target.parentNode.nextElementSibling,e=Object(r.a)(t.target.parentNode.nextElementSibling.children)):t.target.classList.contains("section-title-sort-icon")&&(n=t.target.parentNode.parentNode.nextElementSibling,e=Object(r.a)(t.target.parentNode.parentNode.nextElementSibling.children)),e.sort((function(a,b){var t=a.children[1].textContent.replace("'","").toLowerCase(),e=b.children[1].textContent.replace("'","").toLowerCase();return t<e?-1:t>e?1:0})),this.sortalpha%2==0){var o=e.reverse();e=o}e.forEach((function(t){n.appendChild(t)})),this.sortalpha++},vimeoSort:function(){var t=document.getElementsByClassName("media-container")[0],e=Object(r.a)(t.children).sort((function(a,b){var t=a.dataset.title.replace(/[^a-z0-9]/gi,""),e=b.dataset.title.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));if(this.sortVimeo%2==0){var n=e.reverse();e=n}e.forEach((function(e){t.appendChild(e)})),this.sortVimeo++}}},l=(n(172),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-title"},[r("nuxt-link",{staticClass:"section-title-back",attrs:{to:"/"+t.slug}},[r("img",{staticClass:"section-title-back-icon",attrs:{src:n(171),alt:"back"}})]),t._v(" "),r("nuxt-link",{staticClass:"section-title-text",attrs:{to:"/"+t.slug},domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sortable&&t.tools?r("div",{staticClass:"section-title-sort",on:{click:t.sortAZ}},[r("img",{staticClass:"section-title-sort-icon",attrs:{src:n(166),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&t.isVimeo?r("div",{staticClass:"section-title-sort",on:{click:t.vimeoSort}},[r("img",{staticClass:"section-title-sort-icon",attrs:{src:n(166),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&(t.media||t.quotes||t.articles||t.isYoutube)&&!t.isVimeo?r("div",{staticClass:"section-title-sort",on:{click:t.showSort}},[r("img",{staticClass:"section-title-sort-icon",attrs:{src:n(166),alt:"sort"}})]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},171:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OTMuNTc4cHgiIGhlaWdodD0iNDkzLjU3OHB4IiB2aWV3Qm94PSIwIDAgNDkzLjU3OCA0OTMuNTc4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTMuNTc4IDQ5My41NzgiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ4Ny4yNjcsMjI1Ljk4MWMwLTE3LjM2NS0xMy45OTktMzEuNTE4LTMxLjUxOC0zMS41MThIMTk0LjUwMUwzMDUuMzUsODMuNjE1YzEyLjI0LTEyLjI0LDEyLjI0LTMyLjIwNywwLTQ0LjY3Ng0KCQlMMjc1LjU5Miw5LjE4Yy0xMi4yNC0xMi4yNC0zMi4yMDctMTIuMjQtNDQuNjc2LDBMMTUuNTY4LDIyNC41MjdjLTYuMTIsNi4xMi05LjI1NiwxNC4xNTMtOS4yNTYsMjIuMjYyDQoJCWMwLDguMDMxLDMuMTM2LDE2LjE0Myw5LjI1NiwyMi4yNjJMMjMwLjkxNiw0ODQuNGMxMi4yNCwxMi4yMzcsMzIuMjA3LDEyLjIzNyw0NC42NzYsMGwyOS43NTgtMjkuNzYxDQoJCWMxMi4yNC0xMi4yMzgsMTIuMjQtMzIuMjA3LDAtNDQuNjc2TDE5NC41MDEsMjk5LjQ5OGgyNjEuMDk0YzE3LjM2NiwwLDMxLjUyMS0xNC4xNTMsMzEuNTIxLTMxLjUyTDQ4Ny4yNjcsMjI1Ljk4MXoiLz4NCjwvZz4NCjwvc3ZnPg0K"},172:function(t,e,n){"use strict";var r=n(167);n.n(r).a},173:function(t,e,n){(e=n(19)(!1)).push([t.i,".section-title{border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;top:1.85rem;z-index:7;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-decoration:none;cursor:pointer;background:#e6e6e6;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}.section-title .section-title-text{font-size:1.1rem;text-decoration:none;-webkit-box-flex:1;flex:1;padding:.5rem;max-width:75%;margin:0 auto;text-align:center}.section-title .section-title-back{position:absolute;left:0;text-decoration:none;margin-left:.5rem}.section-title .section-title-back .section-title-back-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box}.section-title .section-title-sort{position:absolute;right:0;z-index:5;margin-right:.5rem}.section-title .section-title-sort .section-title-sort-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box}",""]),t.exports=e},174:function(t,e,n){"use strict";var r=n(169);n.n(r).a},175:function(t,e,n){(e=n(19)(!1)).push([t.i,'.article{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-radius:.25rem;-webkit-box-flex:1;flex:1;overflow:hidden;margin:.25rem;min-width:100%;text-decoration:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-transition:all .3s;transition:all .3s;-webkit-animation:fadeIn .3s ease-in-out;animation:fadeIn .3s ease-in-out;background:#e6e6e6;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}@media (min-width:64em){.article{min-width:40%}}.article:hover{box-shadow:0 0 .5rem .125rem rgba(0,0,0,.15),inset 0 0 .5rem .25rem hsla(0,0%,100%,.25)}.article:hover .article-description,.article:hover .article-wikiextract{color:#000}.article:hover .article-divider{width:80%}.article .article-title{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:auto;padding:.5rem;font-size:1.05rem;text-decoration:none;text-align:center;width:100%}.article .article-divider{background-image:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(0,0,0,.75)),to(transparent));background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.75),transparent);width:33%;border:0;height:1px;margin:0 auto;-webkit-transition:width .3s;transition:width .3s}.article .article-description,.article .article-wikiextract{flex-wrap:wrap;-webkit-box-flex:1;flex:1;text-decoration:none;-webkit-transition:all .3s;transition:all .3s;padding:.75rem;color:rgba(0,0,0,.75);text-indent:.5rem}.article .article-description,.article .article-metadata,.article .article-wikiextract{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.article .article-metadata{flex-wrap:wrap;width:100%;padding:.25rem;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}.article .article-metadata .article-metadata-date,.article .article-metadata .article-metadata-source{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:.8rem}.article .article-metadata .article-metadata-date{margin-left:.33rem}.article .article-metadata .article-metadata-author{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:.8rem}.article .article-metadata .article-metadata-author:before{content:" -  ";font-size:1rem;margin:auto .25rem}.article .article-metadata .article-smmry{margin-left:.5rem;width:auto;text-align:center;font-size:.8rem;text-decoration:none;-webkit-transition:all .3s;transition:all .3s}.article .article-metadata .article-smmry:hover{text-decoration:underline}.article .article-metadata .article-smmry:before{content:" |  "}',""]),t.exports=e},177:function(t,e,n){"use strict";var r={name:"Article",props:{info:{}}},o=(n(174),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article",attrs:{"data-date":this.info.date?this.info.date:null,"data-source":this.info.source?this.info.source:null}},[n("a",{staticClass:"article-title",attrs:{href:this.info.link,target:"_blank"},domProps:{textContent:t._s(this.info.title)}}),t._v(" "),n("hr",{staticClass:"article-divider"}),t._v(" "),this.info.description?n("a",{staticClass:"article-description",attrs:{href:this.info.link},domProps:{textContent:t._s(this.info.description)}}):t._e(),t._v(" "),this.info.wikiextract?n("a",{staticClass:"article-wikiextract",attrs:{href:this.info.link},domProps:{textContent:t._s(this.info.wikiextract)}}):t._e(),t._v(" "),n("div",{staticClass:"article-metadata"},[this.info.source?n("p",{staticClass:"article-metadata-source",domProps:{textContent:t._s(this.info.source)}}):t._e(),t._v(" "),this.info.date?n("p",{staticClass:"article-metadata-date",domProps:{textContent:t._s("("+this.info.date+")")}}):t._e(),t._v(" "),this.info.author?n("p",{staticClass:"article-metadata-author",domProps:{textContent:t._s(this.info.author)}}):t._e(),t._v(" "),this.info.smmry?n("a",{staticClass:"article-smmry",attrs:{href:"https://smmry.com/"+this.info.link+"#&SM_LENGTH=7",target:"_blank"},domProps:{textContent:t._s("Summary")}}):t._e()])])}),[],!1,null,null,null);e.a=component.exports},186:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("101115b0",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";var r=n(186);n.n(r).a},213:function(t,e,n){(e=n(19)(!1)).push([t.i,".timeline-section-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff;padding:.25rem}.timeline-section-wrapper .timeline-container{background:#dfdfdf;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}.timeline-section-wrapper .timeline-container .timeline-year-wrapper{position:relative;padding:.25rem;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-year-title{font-size:1.1rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.5rem;text-align:center;width:100%;cursor:pointer;margin:0 auto;border-radius:.5rem .5rem 0 0;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-year-title .length{opacity:.5;margin:.25rem .5rem}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper{position:relative;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month{margin:1rem auto}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month:first-child,.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month:last-child{margin:.5rem auto}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-month-title{font-size:1.1rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.5rem;z-index:3;cursor:pointer;position:-webkit-sticky;position:sticky;top:3.45rem;text-align:center;width:100%;margin:0 auto;background:#e6e6e6;border-radius:.5rem .5rem 0 0;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-month-title .length{opacity:.5;margin:.25rem .5rem}.timeline-section-wrapper .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-links-wrapper{padding:.5rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;box-shadow:0 0 .5rem .125rem rgba(0,0,0,.05),inset 0 0 .5rem .25rem hsla(0,0%,100%,.1)}",""]),t.exports=e},246:function(t,e,n){"use strict";n.r(e);n(74),n(39),n(27);var r=n(177),o=n(170),l=n(179),c={components:{PageHeader:o.a,Article:r.a},name:"timeline",data:function(){return{title:"Timeline",data:l,year:String,list:[]}},head:function(){return{title:"cata-list - Articles - Timeline - ".concat(this.year)}},created:function(){var t=!0,e=!1,n=void 0;try{for(var r,o=this.data[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var section=r.value,l=section.title;l===this.$route.params.year&&(this.year=l,this.list=section.months)}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}},methods:{toggleList:function(t){t.target.classList.contains("length")?t.target.parentNode.nextElementSibling.classList.contains("hide")?t.target.parentNode.nextElementSibling.classList.remove("hide"):t.target.parentNode.nextElementSibling.classList.add("hide"):t.target.nextElementSibling.classList.contains("hide")?t.target.nextElementSibling.classList.remove("hide"):t.target.nextElementSibling.classList.add("hide")}}},m=(n(212),n(6)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline-section-wrapper"},[n("PageHeader",{attrs:{slug:"articles",title:t.title+" / "+t.year}}),t._v(" "),n("div",{staticClass:"timeline-container"},[n("div",{staticClass:"timeline-year-wrapper"},[n("div",{staticClass:"timeline-months-wrapper"},t._l(t.list,(function(e,r){return n("div",{key:"month"+r,staticClass:"timeline-month"},[n("p",{staticClass:"timeline-month-title",on:{click:t.toggleList}},[t._v(t._s(e.title)+" "),n("span",{staticClass:"length",domProps:{textContent:t._s("("+e.count+")")}})]),t._v(" "),n("div",{staticClass:"timeline-links-wrapper hide"},t._l(e.list,(function(article,t){return n("Article",{key:"article-"+t,attrs:{info:article}})})),1)])})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);