(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{167:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMywxM1Y4aC0yLjljMCwwLTAuNywwLjEtMC45LTAuNGMtMC4yLTAuNSwwLjMtMSwwLjMtMUwxNi4xLDBsNi41LDYuNWMwLDAsMC43LDAuNSwwLjUsMS4xYy0wLjE5OSwwLjYtMSwwLjQtMSwwLjRIMTl2NQ0KCQljMCwwLjYtMC4zLDEtMC45LDFoLTRDMTMuNiwxNCwxMywxMy42LDEzLDEzeiBNMTUsMTJoMlY2aDIuMUwxNi4yLDNMMTMuMSw2SDE1VjEyeiIvPg0KCTxwYXRoIGQ9Ik0xLjEsMTYuNGMwLjItMC41LDEtMC40LDEtMC40SDV2LTVjMC0wLjYsMC41LTEsMS0xaDRjMC42LDAsMSwwLjQsMSwxdjVoMy4xYzAsMCwwLjctMC4xLDAuOSwwLjRzLTAuMywxLTAuMywxTDgsMjQNCgkJbC02LjUtNi41QzEuNiwxNy41LDAuOSwxNywxLjEsMTYuNHogTTgsMjFsMy4xLTNIOXYtNkg3djZINS4xTDgsMjF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},168:function(t,e,r){var content=r(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("6197b1bd",content,!0,{sourceMap:!1})},169:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",(function(){return n}))},170:function(t,e,r){var content=r(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("47f648e7",content,!0,{sourceMap:!1})},171:function(t,e,r){"use strict";r(73);var n=r(169),o={name:"PageHeader",props:{title:String,slug:String,sortable:null,media:null,tools:null,quotes:null,articles:null,isVimeo:null,isYoutube:null},data:function(){return{sortalpha:1,sortVimeo:0}},methods:{showSort:function(){if(this.quotes){var t=document.getElementById("quotes-sort-wrapper");t.classList.contains("hide")?t.classList.remove("hide"):t.classList.add("hide")}else if(this.media&&!this.isYoutube){var e=document.getElementById("media-sort-wrapper");e.classList.contains("hide")?e.classList.remove("hide"):e.classList.add("hide")}else if(this.articles){var r=document.getElementById("articles-sort-wrapper");r.classList.contains("hide")?r.classList.remove("hide"):r.classList.add("hide")}else if(this.isYoutube){var n=document.getElementById("youtube-sort-wrapper");n.classList.contains("hide")?n.classList.remove("hide"):n.classList.add("hide")}},sortAZ:function(t){var e,r;if(window.scrollTo(0,0),t.target.classList.contains("section-title-sort")?(r=t.target.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.nextElementSibling.children)):t.target.classList.contains("section-title-sort-icon")&&(r=t.target.parentNode.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.parentNode.nextElementSibling.children)),e.sort((function(a,b){var t=a.children[1].textContent.replace("'","").toLowerCase(),e=b.children[1].textContent.replace("'","").toLowerCase();return t<e?-1:t>e?1:0})),this.sortalpha%2==0){var o=e.reverse();e=o}e.forEach((function(t){r.appendChild(t)})),this.sortalpha++},vimeoSort:function(){window.scrollTo(0,0);var t=document.getElementsByClassName("media-container")[0],e=Object(n.a)(t.children).sort((function(a,b){var t=a.dataset.title.replace(/[^a-z0-9]/gi,""),e=b.dataset.title.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));if(this.sortVimeo%2==0){var r=e.reverse();e=r}e.forEach((function(e){t.appendChild(e)})),this.sortVimeo++}}},c=(r(173),r(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("nuxt-link",{staticClass:"section-title-back",attrs:{to:"/"+t.slug}},[n("img",{staticClass:"section-title-back-icon",attrs:{src:r(172),alt:"back"}})]),t._v(" "),n("nuxt-link",{staticClass:"section-title-text",attrs:{to:"/"+t.slug},domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sortable&&t.tools?n("div",{staticClass:"section-title-sort",on:{click:t.sortAZ}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:r(167),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&t.isVimeo?n("div",{staticClass:"section-title-sort",on:{click:t.vimeoSort}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:r(167),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&(t.media||t.quotes||t.articles||t.isYoutube)&&!t.isVimeo?n("div",{staticClass:"section-title-sort",on:{click:t.showSort}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:r(167),alt:"sort"}})]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},172:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OTMuNTc4cHgiIGhlaWdodD0iNDkzLjU3OHB4IiB2aWV3Qm94PSIwIDAgNDkzLjU3OCA0OTMuNTc4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTMuNTc4IDQ5My41NzgiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ4Ny4yNjcsMjI1Ljk4MWMwLTE3LjM2NS0xMy45OTktMzEuNTE4LTMxLjUxOC0zMS41MThIMTk0LjUwMUwzMDUuMzUsODMuNjE1YzEyLjI0LTEyLjI0LDEyLjI0LTMyLjIwNywwLTQ0LjY3Ng0KCQlMMjc1LjU5Miw5LjE4Yy0xMi4yNC0xMi4yNC0zMi4yMDctMTIuMjQtNDQuNjc2LDBMMTUuNTY4LDIyNC41MjdjLTYuMTIsNi4xMi05LjI1NiwxNC4xNTMtOS4yNTYsMjIuMjYyDQoJCWMwLDguMDMxLDMuMTM2LDE2LjE0Myw5LjI1NiwyMi4yNjJMMjMwLjkxNiw0ODQuNGMxMi4yNCwxMi4yMzcsMzIuMjA3LDEyLjIzNyw0NC42NzYsMGwyOS43NTgtMjkuNzYxDQoJCWMxMi4yNC0xMi4yMzgsMTIuMjQtMzIuMjA3LDAtNDQuNjc2TDE5NC41MDEsMjk5LjQ5OGgyNjEuMDk0YzE3LjM2NiwwLDMxLjUyMS0xNC4xNTMsMzEuNTIxLTMxLjUyTDQ4Ny4yNjcsMjI1Ljk4MXoiLz4NCjwvZz4NCjwvc3ZnPg0K"},173:function(t,e,r){"use strict";var n=r(168);r.n(n).a},174:function(t,e,r){(e=r(19)(!1)).push([t.i,".section-title{border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;top:1.85rem;z-index:7;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.section-title .section-title-text{font-size:var(--theme-headerSize);text-decoration:none;flex:1;color:var(--theme-black);padding:.5rem;max-width:75%;margin:0 auto;text-align:center}.section-title .section-title-back{position:absolute;left:0;text-decoration:none;margin-left:.5rem}.section-title .section-title-back .section-title-back-icon{height:1rem;width:1rem;padding:.5rem;transition:all .25s ease-in-out;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}.section-title .section-title-sort{position:absolute;right:0;z-index:5;margin-right:.5rem}.section-title .section-title-sort .section-title-sort-icon{height:1rem;width:1rem;padding:.5rem;transition:all .25s ease-in-out;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}",""]),t.exports=e},175:function(t,e,r){"use strict";var n=r(170);r.n(n).a},176:function(t,e,r){(e=r(19)(!1)).push([t.i,'.article{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:.25rem;flex:1;overflow:hidden;margin:.25rem;min-width:100%;text-decoration:none;flex-direction:column;transition:box-shadow .25s ease-in-out;-webkit-animation:fadeIn .25s ease-in-out;animation:fadeIn .25s ease-in-out;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}@media (min-width:64em){.article{min-width:40%}}.article:hover{box-shadow:var(--theme-boxShadowHover)}.article:hover .article-description,.article:hover .article-wikiextract{color:var(--theme-black)}.article:hover .article-divider{width:80%}.article .article-title{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;height:auto;color:var(--theme-black);padding:.5rem;font-size:1.05rem;text-decoration:none;text-align:center;width:100%}.article .article-divider{background-image:var(--theme-divider);width:33%;border:0;height:1px;margin:0 auto;transition:width .25s}.article .article-description,.article .article-wikiextract{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex:1;width:100%;text-decoration:none;transition:all .25s;padding:.75rem;color:var(--theme-blackLight);text-indent:.5rem}.article .article-metadata{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;color:var(--theme-black);padding:.25rem;box-shadow:var(--theme-boxShadow)}.article .article-metadata .article-metadata-date,.article .article-metadata .article-metadata-source{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;font-size:.8rem}.article .article-metadata .article-metadata-date{margin-left:.33rem}.article .article-metadata .article-metadata-author{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;font-size:.8rem}.article .article-metadata .article-metadata-author:before{content:" -  ";font-size:1rem;margin:auto .25rem}.article .article-metadata .article-smmry{margin-left:.5rem;width:auto;color:var(--theme-black);text-align:center;font-size:.8rem;text-decoration:none;transition:all .25s}.article .article-metadata .article-smmry:hover{text-decoration:underline}.article .article-metadata .article-smmry:before{content:" |  "}',""]),t.exports=e},178:function(t,e,r){"use strict";var n={name:"Article",props:{info:{}}},o=(r(175),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article",attrs:{"data-date":this.info.date?this.info.date:null,"data-source":this.info.source?this.info.source:null}},[r("a",{staticClass:"article-title",attrs:{href:this.info.link,target:"_blank"},domProps:{textContent:t._s(this.info.title)}}),t._v(" "),r("hr",{staticClass:"article-divider"}),t._v(" "),this.info.description?r("a",{staticClass:"article-description",attrs:{href:this.info.link},domProps:{textContent:t._s(this.info.description)}}):t._e(),t._v(" "),this.info.wikiextract?r("a",{staticClass:"article-wikiextract",attrs:{href:this.info.link},domProps:{textContent:t._s(this.info.wikiextract)}}):t._e(),t._v(" "),r("div",{staticClass:"article-metadata"},[this.info.source?r("p",{staticClass:"article-metadata-source",domProps:{textContent:t._s(this.info.source)}}):t._e(),t._v(" "),this.info.date?r("p",{staticClass:"article-metadata-date",domProps:{textContent:t._s("("+this.info.date+")")}}):t._e(),t._v(" "),this.info.author?r("p",{staticClass:"article-metadata-author",domProps:{textContent:t._s(this.info.author)}}):t._e(),t._v(" "),this.info.smmry?r("a",{staticClass:"article-smmry",attrs:{href:"https://smmry.com/"+this.info.link+"#&SM_LENGTH=7",target:"_blank"},domProps:{textContent:t._s("Summary")}}):t._e()])])}),[],!1,null,null,null);e.a=component.exports},188:function(t,e,r){var content=r(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("209ebf5c",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";var n=r(188);r.n(n).a},216:function(t,e,r){(e=r(19)(!1)).push([t.i,".articles-section-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff;padding:.25rem}.articles-section-wrapper .articles-container,.articles-section-wrapper .subsections-container,.articles-section-wrapper .subsubsections-container{padding:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;border-radius:0 0 .5rem .5rem;background:var(--theme-whiteBG);box-shadow:var(--theme-boxShadow)}.articles-section-wrapper .articles-container .section,.articles-section-wrapper .subsections-container .section,.articles-section-wrapper .subsubsections-container .section{width:100%;border-radius:.5rem;margin:.5rem auto}.articles-section-wrapper .articles-container .section:last-child,.articles-section-wrapper .subsections-container .section:last-child,.articles-section-wrapper .subsubsections-container .section:last-child{margin:.5rem auto 0}.articles-section-wrapper .articles-container .section:first-child,.articles-section-wrapper .subsections-container .section:first-child,.articles-section-wrapper .subsubsections-container .section:first-child{margin:0 auto .5rem}.articles-section-wrapper .articles-container .section .section-title,.articles-section-wrapper .subsections-container .section .section-title,.articles-section-wrapper .subsubsections-container .section .section-title{font-size:var(--theme-subheaderSize);text-align:center;z-index:4;color:var(--theme-black);border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;top:3.45rem;padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none;cursor:pointer}.articles-section-wrapper .articles-container .section .section-links,.articles-section-wrapper .subsections-container .section .section-links,.articles-section-wrapper .subsubsections-container .section .section-links{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:.25rem;border-radius:0 0 .5rem .5rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;align-items:stretch}.articles-section-wrapper .articles-container #articles-sort-wrapper,.articles-section-wrapper .subsections-container #articles-sort-wrapper,.articles-section-wrapper .subsubsections-container #articles-sort-wrapper{width:100%;z-index:10;position:-webkit-sticky;position:sticky;top:3.65rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.articles-section-wrapper .articles-container #articles-sort-wrapper .articles-sort,.articles-section-wrapper .subsections-container #articles-sort-wrapper .articles-sort,.articles-section-wrapper .subsubsections-container #articles-sort-wrapper .articles-sort{max-width:75%;margin:.5rem auto;overflow:hidden;border-radius:.5rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;box-shadow:var(--theme-boxShadow);background:var(--theme-itemWhite)}.articles-section-wrapper .articles-container #articles-sort-wrapper .articles-sort .articles-sort-title,.articles-section-wrapper .subsections-container #articles-sort-wrapper .articles-sort .articles-sort-title,.articles-section-wrapper .subsubsections-container #articles-sort-wrapper .articles-sort .articles-sort-title{min-width:10%;color:var(--theme-black);padding:.5rem;font-size:.9rem;text-align:center}.articles-section-wrapper .articles-container #articles-sort-wrapper .articles-sort .articles-sort-item,.articles-section-wrapper .subsections-container #articles-sort-wrapper .articles-sort .articles-sort-item,.articles-section-wrapper .subsubsections-container #articles-sort-wrapper .articles-sort .articles-sort-item{flex:1;color:var(--theme-black);font-size:.9rem;padding:.5rem;text-align:center;min-width:20%;cursor:pointer;transition:all .3s;box-shadow:var(--theme-boxShadowLight)}.articles-section-wrapper .articles-container #articles-sort-wrapper .articles-sort .articles-sort-item:hover,.articles-section-wrapper .subsections-container #articles-sort-wrapper .articles-sort .articles-sort-item:hover,.articles-section-wrapper .subsubsections-container #articles-sort-wrapper .articles-sort .articles-sort-item:hover{box-shadow:var(--theme-boxShadowHover)}",""]),t.exports=e},248:function(t,e,r){"use strict";r.r(e);r(73);var n=r(169),o=(r(74),r(39),r(27),r(178)),c=r(171),l=r(179),d={components:{Article:o.a,PageHeader:c.a},data:function(){return{title:"articles",data:l,sortDate:1,sortTitle:0,sortSource:0,list:[]}},head:function(){return{title:"cata-list - Articles - "+this.title}},created:function(){var t=!0,e=!1,r=void 0;try{for(var n,o=this.data[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var section=n.value;section.slug===this.$route.params.id&&(this.list=section.sections,this.title=section.title)}}catch(t){e=!0,r=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}},methods:{hideList:function(t){var e=t.target.nextElementSibling,r=Object(n.a)(t.target.parentNode.children),o=r.length;if(e.classList.contains("hide"))for(var i=1;i<o;i++)r[i].classList.remove("hide");else for(var c=1;c<o;c++)r[c].classList.add("hide")},sortByDate:function(){var t=this;window.scrollTo(0,0);for(var e=Object(n.a)(document.getElementsByClassName("section-links")),r=e.length,o=function(i){var r=Object(n.a)(e[i].children);(t.sortDate%2==0?r.sort((function(a,b){var t=a.dataset.date?new Date(a.dataset.date):new Date("Jan 01 3000"),e=b.dataset.date?new Date(b.dataset.date):new Date("Jan 01 3000");return t>e?1:t<e?-1:0})):r.sort((function(a,b){var t=a.dataset.date?new Date(a.dataset.date):new Date("Jan 01 1900"),e=b.dataset.date?new Date(b.dataset.date):new Date("Jan 01 1900");return t<e?1:t>e?-1:0}))).forEach((function(t){e[i].appendChild(t)}))},i=0;i<r;i++)o(i);this.sortDate++},sortByTitle:function(){var t=this;window.scrollTo(0,0);for(var e=Object(n.a)(document.getElementsByClassName("section-links")),r=e.length,o=function(i){var r=Object(n.a)(e[i].children).sort((function(a,b){var t=a.children[0].textContent.replace(/[^a-z0-9]/gi,""),e=b.children[0].textContent.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));t.sortTitle%2==0&&(c=r.reverse(),r=c),r.forEach((function(t){e[i].appendChild(t)}))},i=0;i<r;i++){var c;o(i)}this.sortTitle++},sortBySource:function(){var t=this;window.scrollTo(0,0);for(var e=Object(n.a)(document.getElementsByClassName("section-links")),r=e.length,o=function(i){var r=Object(n.a)(e[i].children).sort((function(a,b){var t=a.dataset.source?a.dataset.source.replace(/[^a-z0-9]/gi,""):"ZZZ",e=b.dataset.source?b.dataset.source.replace(/[^a-z0-9]/gi,""):"ZZZ";return t<e?1:t>e?-1:0}));t.sortSource%2==0&&(c=r.reverse(),r=c),r.forEach((function(t){e[i].appendChild(t)}))},i=0;i<r;i++){var c;o(i)}this.sortSource++}}},m=(r(215),r(6)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"articles-section-wrapper"},[r("PageHeader",{attrs:{slug:"articles",title:t.title,sortable:"true",articles:"true"}}),t._v(" "),r("div",{staticClass:"articles-container"},[r("div",{staticClass:"hide",attrs:{id:"articles-sort-wrapper"}},[r("div",{staticClass:"articles-sort"},[r("p",{staticClass:"articles-sort-title"},[t._v("Sort by: ")]),t._v(" "),r("p",{staticClass:"articles-sort-item",domProps:{textContent:t._s("Title")},on:{click:t.sortByTitle}}),t._v(" "),r("p",{staticClass:"articles-sort-item",domProps:{textContent:t._s("Date")},on:{click:t.sortByDate}}),t._v(" "),r("p",{staticClass:"articles-sort-item",domProps:{textContent:t._s("Source")},on:{click:t.sortBySource}})])]),t._v(" "),t._l(t.list,(function(section,e){return r("div",{key:"section-"+e,staticClass:"section"},[r("p",{staticClass:"section-title",domProps:{textContent:t._s(section.title)},on:{click:t.hideList}}),t._v(" "),section.links?r("div",{staticClass:"section-links"},t._l(section.links,(function(article,t){return r("Article",{key:"article-"+t,attrs:{info:article}})})),1):t._e(),t._v(" "),section.subSections?r("div",{staticClass:"subsections-container"},t._l(section.subSections,(function(e,n){return r("div",{key:"subsection-"+n,staticClass:"section"},[r("p",{staticClass:"section-title",domProps:{textContent:t._s(section.title+" / "+e.title)},on:{click:t.hideList}}),t._v(" "),e.links?r("div",{staticClass:"section-links"},t._l(e.links,(function(t,e){return r("Article",{key:"subarticle-"+e,attrs:{info:t}})})),1):t._e(),t._v(" "),e.subSubSections?r("div",{staticClass:"subsubsections-container"},t._l(e.subSubSections,(function(n,o){return r("div",{key:"subsubsection-"+o,staticClass:"section"},[r("p",{staticClass:"section-title",domProps:{textContent:t._s(section.title+" / "+e.title+" / "+n.title)},on:{click:t.hideList}}),t._v(" "),n.links?r("div",{staticClass:"section-links"},t._l(n.links,(function(t,e){return r("Article",{key:"subsubarticle-"+e,attrs:{info:t}})})),1):t._e()])})),0):t._e()])})),0):t._e()])}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);