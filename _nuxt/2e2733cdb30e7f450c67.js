(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{167:function(t,e,o){var content=o(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("6197b1bd",content,!0,{sourceMap:!1})},168:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMywxM1Y4aC0yLjljMCwwLTAuNywwLjEtMC45LTAuNGMtMC4yLTAuNSwwLjMtMSwwLjMtMUwxNi4xLDBsNi41LDYuNWMwLDAsMC43LDAuNSwwLjUsMS4xYy0wLjE5OSwwLjYtMSwwLjQtMSwwLjRIMTl2NQ0KCQljMCwwLjYtMC4zLDEtMC45LDFoLTRDMTMuNiwxNCwxMywxMy42LDEzLDEzeiBNMTUsMTJoMlY2aDIuMUwxNi4yLDNMMTMuMSw2SDE1VjEyeiIvPg0KCTxwYXRoIGQ9Ik0xLjEsMTYuNGMwLjItMC41LDEtMC40LDEtMC40SDV2LTVjMC0wLjYsMC41LTEsMS0xaDRjMC42LDAsMSwwLjQsMSwxdjVoMy4xYzAsMCwwLjctMC4xLDAuOSwwLjRzLTAuMywxLTAuMywxTDgsMjQNCgkJbC02LjUtNi41QzEuNiwxNy41LDAuOSwxNywxLjEsMTYuNHogTTgsMjFsMy4xLTNIOXYtNkg3djZINS4xTDgsMjF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},169:function(t,e,o){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}o.d(e,"a",(function(){return n}))},171:function(t,e,o){"use strict";o(73);var n=o(169),r={name:"PageHeader",props:{title:String,slug:String,sortable:null,media:null,tools:null,quotes:null,articles:null,isVimeo:null,isYoutube:null},data:function(){return{sortalpha:1,sortVimeo:0}},methods:{showSort:function(){var t;this.quotes?t=document.getElementById("quotes-sort-wrapper"):!this.media||this.isYoutube||this.isVimeo?this.articles?t=document.getElementById("articles-sort-wrapper"):this.isYoutube?t=document.getElementById("youtube-sort-wrapper"):this.isVimeo&&(t=document.getElementById("vimeo-sort-wrapper")):t=document.getElementById("media-sort-wrapper"),t.classList.toggle("hide")},sortAZ:function(t){var e,o;if(window.scrollTo(0,0),t.target.classList.contains("section-title-sort")?(o=t.target.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.nextElementSibling.children)):t.target.classList.contains("section-title-sort-icon")&&(o=t.target.parentNode.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.parentNode.nextElementSibling.children)),e.sort((function(a,b){var t=a.children[1].textContent.replace("'","").toLowerCase(),e=b.children[1].textContent.replace("'","").toLowerCase();return t<e?-1:t>e?1:0})),this.sortalpha%2==0){var r=e.reverse();e=r}e.forEach((function(t){o.appendChild(t)})),this.sortalpha++}}},c=(o(173),o(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("nuxt-link",{staticClass:"section-title-back",attrs:{to:"/"+t.slug}},[n("img",{staticClass:"section-title-back-icon",attrs:{src:o(172),alt:"back"}})]),t._v(" "),n("nuxt-link",{staticClass:"section-title-text",attrs:{to:"/"+t.slug},domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sortable&&t.tools?n("div",{staticClass:"section-title-sort",on:{click:t.sortAZ}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:o(168),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&(t.media||t.quotes||t.articles||t.isYoutube||t.isVimeo)?n("div",{staticClass:"section-title-sort",on:{click:t.showSort}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:o(168),alt:"sort"}})]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},172:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OTMuNTc4cHgiIGhlaWdodD0iNDkzLjU3OHB4IiB2aWV3Qm94PSIwIDAgNDkzLjU3OCA0OTMuNTc4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTMuNTc4IDQ5My41NzgiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ4Ny4yNjcsMjI1Ljk4MWMwLTE3LjM2NS0xMy45OTktMzEuNTE4LTMxLjUxOC0zMS41MThIMTk0LjUwMUwzMDUuMzUsODMuNjE1YzEyLjI0LTEyLjI0LDEyLjI0LTMyLjIwNywwLTQ0LjY3Ng0KCQlMMjc1LjU5Miw5LjE4Yy0xMi4yNC0xMi4yNC0zMi4yMDctMTIuMjQtNDQuNjc2LDBMMTUuNTY4LDIyNC41MjdjLTYuMTIsNi4xMi05LjI1NiwxNC4xNTMtOS4yNTYsMjIuMjYyDQoJCWMwLDguMDMxLDMuMTM2LDE2LjE0Myw5LjI1NiwyMi4yNjJMMjMwLjkxNiw0ODQuNGMxMi4yNCwxMi4yMzcsMzIuMjA3LDEyLjIzNyw0NC42NzYsMGwyOS43NTgtMjkuNzYxDQoJCWMxMi4yNC0xMi4yMzgsMTIuMjQtMzIuMjA3LDAtNDQuNjc2TDE5NC41MDEsMjk5LjQ5OGgyNjEuMDk0YzE3LjM2NiwwLDMxLjUyMS0xNC4xNTMsMzEuNTIxLTMxLjUyTDQ4Ny4yNjcsMjI1Ljk4MXoiLz4NCjwvZz4NCjwvc3ZnPg0K"},173:function(t,e,o){"use strict";var n=o(167);o.n(n).a},174:function(t,e,o){(e=o(19)(!1)).push([t.i,".section-title{border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;top:1.85rem;z-index:7;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.section-title .section-title-text{font-size:var(--theme-headerSize);text-decoration:none;flex:1;color:var(--theme-black);padding:.5rem;max-width:75%;margin:0 auto;text-align:center}.section-title .section-title-back{position:absolute;left:0;text-decoration:none;margin-left:.5rem}.section-title .section-title-back .section-title-back-icon{height:1rem;width:1rem;padding:.5rem;transition:all .25s ease-in-out;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}.section-title .section-title-sort{position:absolute;right:0;z-index:5;margin-right:.5rem}.section-title .section-title-sort .section-title-sort-icon{height:1rem;width:1rem;padding:.5rem;transition:all .25s ease-in-out;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}",""]),t.exports=e},178:function(t,e,o){var content=o(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("c127a79a",content,!0,{sourceMap:!1})},192:function(t,e,o){"use strict";var n=o(178);o.n(n).a},193:function(t,e,o){(e=o(19)(!1)).push([t.i,".quote{border-radius:.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-direction:column;flex:1;margin:.25rem;text-decoration:none;min-width:100%;-webkit-animation:fadeIn .25s;animation:fadeIn .25s;transition:box-shadow .25s ease-in-out;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.quote:hover{box-shadow:var(--theme-boxShadowHover)}@media (min-width:40em){.quote{min-width:40%}}@media (min-width:40em){.quote.long{min-width:100%}}@media (min-width:40em){.quote.short{min-width:40%}}@media (min-width:60em){.quote.short{min-width:30%}}.quote .quote-text{flex-wrap:wrap;flex:auto;color:var(--theme-black);padding:.75rem;text-indent:.5rem;line-height:1.1rem}.quote .quote-footer,.quote .quote-text{display:flex;align-items:center;justify-content:center}.quote .quote-footer{flex-wrap:wrap;width:100%;position:relative;transition:all .25s ease-in-out;box-shadow:var(--theme-boxShadowLight)}.quote .quote-footer:hover{box-shadow:var(--theme-boxShadow)}.quote .quote-footer .quote-author,.quote .quote-footer .quote-source{cursor:pointer;font-size:.9rem;min-width:75%;flex:1;color:var(--theme-black);padding:.25rem;text-align:right;text-decoration:none;transition:all .25s ease-in-out}.quote .quote-footer .quote-copy{height:.75rem;width:.75rem;position:absolute;left:0;z-index:3;transition:all .25s ease-in-out;cursor:pointer;padding:.5rem;opacity:.33;margin:0 .5rem 0 .25rem;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}.quote .quote-footer .quote-copy:hover{opacity:.75}.quote .quote-footer.person{padding:0}.quote .quote-footer.person .quote-copy{height:.75rem;width:.75rem;right:0;margin:0;bottom:0;left:auto}",""]),t.exports=e},194:function(t,e,o){var content=o(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("0b945356",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";o(59);var n={name:"Quote",data:function(){return{count:0}},props:{info:{},person:String},methods:{copy:function(){var t=o(101);t("".concat(this.info.quote," - ").concat(this.info.author||this.info.name))},personCopy:function(){o(101)("".concat(this.info.quote," - ").concat(this.person))}},computed:{thisLength:function(){return this.info.quote.length},short:function(){return parseInt(this.info.quote.length)<155},long:function(){return parseInt(this.info.quote.length)>400}}},r=(o(192),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quote",class:{long:t.long,short:t.short},attrs:{"data-length":t.thisLength,"data-author":this.info.author||this.info.name}},[n("p",{staticClass:"quote-text",domProps:{textContent:t._s(this.info.quote)}}),t._v(" "),this.info.author||this.info.name?n("div",{staticClass:"quote-footer"},[n("img",{staticClass:"quote-copy",attrs:{src:o(28),alt:"copy"},on:{click:t.copy}}),t._v(" "),n("a",{staticClass:"quote-author",attrs:{href:this.info.link,target:"_blank"},domProps:{textContent:t._s(""+(this.info.author||this.info.name))}})]):t._e(),t._v(" "),this.info.author||this.info.name?t._e():n("div",{staticClass:"quote-footer person"},[n("img",{staticClass:"quote-copy",attrs:{src:o(28),alt:"copy"},on:{click:t.personCopy}})])])}),[],!1,null,null,null);e.a=component.exports},230:function(t,e,o){"use strict";var n=o(194);o.n(n).a},231:function(t,e,o){(e=o(19)(!1)).push([t.i,".section-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff;padding:.25rem}.section-wrapper .info-container{padding:.5rem;width:100%;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;transition:all .3s;flex-direction:column;background:var(--theme-whiteBG);box-shadow:var(--theme-boxShadow)}@media (min-width:64em){.section-wrapper .info-container{padding:1rem}}.section-wrapper .info-container .bio{max-width:60rem;padding:.5rem;color:var(--theme-black);line-height:1.1rem;margin-bottom:1rem;text-indent:.5rem;transition:all .3s;border-radius:.5rem;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}@media (min-width:64em){.section-wrapper .info-container .bio{font-size:1.1rem;padding:1rem}}.section-wrapper .info-container .info-links-container{min-width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.section-wrapper .info-container .info-links-container .info-links-container-section{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;min-width:100%;flex:1;overflow:hidden;border-radius:.5rem;flex-direction:column;margin:.25rem;box-shadow:var(--theme-boxShadow)}@media (min-width:64em){.section-wrapper .info-container .info-links-container .info-links-container-section{min-width:40%}}.section-wrapper .info-container .info-links-container .info-links-container-section .info-links-container-title{padding:.5rem;width:100%;color:var(--theme-black);text-align:center;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.section-wrapper .info-container .info-links-container .info-links-container-section .wiki-container{min-width:100%;flex:auto;padding:.25rem .5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;margin:0 auto}.section-wrapper .info-container .info-links-container .info-links-container-section .wiki-container .wiki{padding:.5rem;flex:1;color:var(--theme-black);min-width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:.25rem;margin:.25rem;text-align:center;text-decoration:none;transition:all .3s;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}@media (min-width:40em){.section-wrapper .info-container .info-links-container .info-links-container-section .wiki-container .wiki{min-width:40%}}.section-wrapper .info-container .info-links-container .info-links-container-section .wiki-container .wiki:hover{box-shadow:var(--theme-boxShadowHover)}.section-wrapper .info-container .info-links-container .info-links-container-section .links-container{min-width:100%;flex:auto;padding:.25rem .5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;margin:0 auto}.section-wrapper .info-container .info-links-container .info-links-container-section .links-container .info-link{padding:.5rem;text-align:center;flex:1;color:var(--theme-black);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:.25rem;margin:.25rem;min-width:100%;text-decoration:none;transition:all .3s;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}@media (min-width:40em){.section-wrapper .info-container .info-links-container .info-links-container-section .links-container .info-link{min-width:40%;padding:.75rem}}.section-wrapper .info-container .info-links-container .info-links-container-section .links-container .info-link:hover{box-shadow:var(--theme-boxShadowHover)}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container{max-width:40rem;min-width:100%;overflow:hidden;box-shadow:var(--theme-boxShadow)}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-container-title{padding:.5rem;color:var(--theme-black);text-align:center;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-section{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;padding:.5rem}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-section .book{flex:1;display:flex;flex-direction:column;min-width:100%;margin:.25rem;transition:all .3s;border-radius:.25rem;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-section .book:hover{box-shadow:var(--theme-boxShadowHover)}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-section .book .book-title{flex:auto;color:var(--theme-black);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-align:center;padding:.5rem}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-section .book .book-links{min-width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;box-shadow:var(--theme-boxShadowLight)}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-section .book .book-links .book-link{flex:1;color:var(--theme-black);font-size:.8rem;text-align:center;text-decoration:none;padding:.25rem;transition:all .3s;border:.05rem solid rgba(0,0,0,.05)}.section-wrapper .info-container .info-links-container .info-links-container-section .books-container .books-section .book .book-links .book-link:hover{box-shadow:var(--theme-boxShadow)}.section-wrapper .quotes-container{padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;border-radius:0 0 .5rem .5rem;background:var(--theme-whiteBG);box-shadow:var(--theme-boxShadow)}.section-wrapper .quotes-container #quotes-sort-wrapper{width:100%;z-index:10;position:-webkit-sticky;position:sticky;top:3.65rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.section-wrapper .quotes-container #quotes-sort-wrapper .quotes-sort{max-width:75%;margin:.5rem auto;overflow:hidden;border-radius:.5rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;box-shadow:var(--theme-boxShadow);background:var(--theme-itemWhite)}.section-wrapper .quotes-container #quotes-sort-wrapper .quotes-sort .quotes-sort-title{min-width:10%;color:var(--theme-black);padding:.5rem;font-size:.9rem;text-align:center}.section-wrapper .quotes-container #quotes-sort-wrapper .quotes-sort .quotes-sort-item{flex:1;color:var(--theme-black);font-size:.9rem;padding:.5rem;text-align:center;min-width:20%;cursor:pointer;transition:all .3s;box-shadow:var(--theme-boxShadowLight)}.section-wrapper .quotes-container #quotes-sort-wrapper .quotes-sort .quotes-sort-item:hover{box-shadow:var(--theme-boxShadowHover)}",""]),t.exports=e},267:function(t,e,o){"use strict";o.r(e);var n=o(169),r=(o(59),o(74),o(39),o(27),o(171)),c=o(200),l=o(201),d={components:{Quote:c.a,PageHeader:r.a},data:function(){return{title:"quotes",data:l,sortAuthor:0,sortLength:0,section:{}}},head:function(){return{title:"cata-list - Quotes - "+this.title}},created:function(){var t=!0,e=!1,o=void 0;try{for(var n,r=this.data[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var section=n.value;section.slug===this.$route.params.id&&(this.title=section.name,this.section=section)}}catch(t){e=!0,o=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw o}}},methods:{sortByAuthor:function(){window.scrollTo(0,0);var t=Object(n.a)(document.getElementsByClassName("quote")),e=document.getElementsByClassName("quotes-container")[0];if(t.sort((function(a,b){var t=a.dataset.author.toLowerCase(),e=b.dataset.author.toLowerCase();return t<e?-1:t>e?1:0})),this.sortAuthor++,this.sortAuthor%2==0){var o=t.reverse();t=o}t.forEach((function(t){e.appendChild(t)}))},sortByLength:function(){window.scrollTo(0,0);var t=Object(n.a)(document.getElementsByClassName("quote")),e=document.getElementsByClassName("quotes-container")[0];if(t.sort((function(a,b){var t=parseInt(a.dataset.length),e=parseInt(b.dataset.length);return t<e?-1:t>e?1:0})),this.sortLength++,this.sortLength%2==0){var o=t.reverse();t=o}t.forEach((function(t){e.appendChild(t)}))}}},m=(o(230),o(6)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section-wrapper"},[o("PageHeader",{attrs:{slug:"quotes",title:t.title,sortable:t.section.topic,quotes:"true"}}),t._v(" "),t.section.bio?o("div",{staticClass:"info-container"},[o("p",{staticClass:"bio",domProps:{textContent:t._s(t.section.bio)}}),t._v(" "),o("div",{staticClass:"info-links-container"},[o("div",{staticClass:"info-links-container-section"},[o("p",{staticClass:"info-links-container-title",domProps:{textContent:t._s("Useful Links")}}),t._v(" "),o("div",{staticClass:"wiki-container"},[t.section.wiki?o("a",{staticClass:"wiki",attrs:{href:t.section.wiki,target:"_blank"},domProps:{textContent:t._s("Wikipedia")}}):t._e(),t._v(" "),t.section.wikiquote?o("a",{staticClass:"wiki",attrs:{href:t.section.wikiquote,target:"_blank"},domProps:{textContent:t._s("Wikiquote")}}):t._e(),t._v(" "),t.section.wikisource?o("a",{staticClass:"wiki",attrs:{href:t.section.wikisource,target:"_blank"},domProps:{textContent:t._s("Wikisource")}}):t._e()]),t._v(" "),t.section.links?o("div",{staticClass:"links-container"},t._l(t.section.links,(function(link,e){return o("a",{key:"section-link-"+e,staticClass:"info-link",attrs:{href:link.link,target:"_blank"},domProps:{textContent:t._s(link.title)}})})),0):t._e()]),t._v(" "),o("div",{staticClass:"info-links-container-section"},[o("div",{staticClass:"books-container"},[o("p",{staticClass:"books-container-title",domProps:{textContent:t._s("Popular Books")}}),t._v(" "),o("div",{staticClass:"books-section"},t._l(t.section.books,(function(e,i){return o("div",{key:"book"+i,staticClass:"book"},[o("p",{staticClass:"book-title",domProps:{textContent:t._s(e.title+" ("+e.year+")")}}),t._v(" "),e.plot?o("p",{staticClass:"book-plot",domProps:{textContent:t._s(e.plot)}}):t._e(),t._v(" "),o("div",{staticClass:"book-links"},t._l(e.links,(function(link,e){return link.link?o("a",{key:"book-link-"+e,staticClass:"book-link",attrs:{href:link.link,target:"_blank"},domProps:{textContent:t._s(link.title)}}):t._e()})),0)])})),0)])])])]):t._e(),t._v(" "),o("div",{staticClass:"quotes-container"},[o("div",{staticClass:"hide",attrs:{id:"quotes-sort-wrapper"}},[o("div",{staticClass:"quotes-sort"},[o("p",{staticClass:"quotes-sort-title"},[t._v("Sort by: ")]),t._v(" "),o("p",{staticClass:"quotes-sort-item",domProps:{textContent:t._s("Author")},on:{click:t.sortByAuthor}}),t._v(" "),o("p",{staticClass:"quotes-sort-item",domProps:{textContent:t._s("Length")},on:{click:t.sortByLength}})])]),t._v(" "),t._l(t.section.quotes,(function(e,n){return o("Quote",{key:"quote-"+n,attrs:{info:e,person:t.section.name}})}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);