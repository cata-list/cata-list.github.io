(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{167:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMywxM1Y4aC0yLjljMCwwLTAuNywwLjEtMC45LTAuNGMtMC4yLTAuNSwwLjMtMSwwLjMtMUwxNi4xLDBsNi41LDYuNWMwLDAsMC43LDAuNSwwLjUsMS4xYy0wLjE5OSwwLjYtMSwwLjQtMSwwLjRIMTl2NQ0KCQljMCwwLjYtMC4zLDEtMC45LDFoLTRDMTMuNiwxNCwxMywxMy42LDEzLDEzeiBNMTUsMTJoMlY2aDIuMUwxNi4yLDNMMTMuMSw2SDE1VjEyeiIvPg0KCTxwYXRoIGQ9Ik0xLjEsMTYuNGMwLjItMC41LDEtMC40LDEtMC40SDV2LTVjMC0wLjYsMC41LTEsMS0xaDRjMC42LDAsMSwwLjQsMSwxdjVoMy4xYzAsMCwwLjctMC4xLDAuOSwwLjRzLTAuMywxLTAuMywxTDgsMjQNCgkJbC02LjUtNi41QzEuNiwxNy41LDAuOSwxNywxLjEsMTYuNHogTTgsMjFsMy4xLTNIOXYtNkg3djZINS4xTDgsMjF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},168:function(t,e,o){var content=o(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("6197b1bd",content,!0,{sourceMap:!1})},169:function(t,e,o){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}o.d(e,"a",(function(){return n}))},171:function(t,e,o){"use strict";o(73);var n=o(169),r={name:"PageHeader",props:{title:String,slug:String,sortable:null,media:null,tools:null,quotes:null,articles:null,isVimeo:null,isYoutube:null},data:function(){return{sortalpha:1,sortVimeo:0}},methods:{showSort:function(){if(this.quotes){var t=document.getElementById("quotes-sort-wrapper");t.classList.contains("hide")?t.classList.remove("hide"):t.classList.add("hide")}else if(this.media&&!this.isYoutube){var e=document.getElementById("media-sort-wrapper");e.classList.contains("hide")?e.classList.remove("hide"):e.classList.add("hide")}else if(this.articles){var o=document.getElementById("articles-sort-wrapper");o.classList.contains("hide")?o.classList.remove("hide"):o.classList.add("hide")}else if(this.isYoutube){var n=document.getElementById("youtube-sort-wrapper");n.classList.contains("hide")?n.classList.remove("hide"):n.classList.add("hide")}},sortAZ:function(t){var e,o;if(window.scrollTo(0,0),t.target.classList.contains("section-title-sort")?(o=t.target.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.nextElementSibling.children)):t.target.classList.contains("section-title-sort-icon")&&(o=t.target.parentNode.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.parentNode.nextElementSibling.children)),e.sort((function(a,b){var t=a.children[1].textContent.replace("'","").toLowerCase(),e=b.children[1].textContent.replace("'","").toLowerCase();return t<e?-1:t>e?1:0})),this.sortalpha%2==0){var r=e.reverse();e=r}e.forEach((function(t){o.appendChild(t)})),this.sortalpha++},vimeoSort:function(){window.scrollTo(0,0);var t=document.getElementsByClassName("media-container")[0],e=Object(n.a)(t.children).sort((function(a,b){var t=a.dataset.title.replace(/[^a-z0-9]/gi,""),e=b.dataset.title.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));if(this.sortVimeo%2==0){var o=e.reverse();e=o}e.forEach((function(e){t.appendChild(e)})),this.sortVimeo++}}},l=(o(173),o(6)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("nuxt-link",{staticClass:"section-title-back",attrs:{to:"/"+t.slug}},[n("img",{staticClass:"section-title-back-icon",attrs:{src:o(172),alt:"back"}})]),t._v(" "),n("nuxt-link",{staticClass:"section-title-text",attrs:{to:"/"+t.slug},domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sortable&&t.tools?n("div",{staticClass:"section-title-sort",on:{click:t.sortAZ}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:o(167),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&t.isVimeo?n("div",{staticClass:"section-title-sort",on:{click:t.vimeoSort}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:o(167),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&(t.media||t.quotes||t.articles||t.isYoutube)&&!t.isVimeo?n("div",{staticClass:"section-title-sort",on:{click:t.showSort}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:o(167),alt:"sort"}})]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},172:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OTMuNTc4cHgiIGhlaWdodD0iNDkzLjU3OHB4IiB2aWV3Qm94PSIwIDAgNDkzLjU3OCA0OTMuNTc4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTMuNTc4IDQ5My41NzgiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ4Ny4yNjcsMjI1Ljk4MWMwLTE3LjM2NS0xMy45OTktMzEuNTE4LTMxLjUxOC0zMS41MThIMTk0LjUwMUwzMDUuMzUsODMuNjE1YzEyLjI0LTEyLjI0LDEyLjI0LTMyLjIwNywwLTQ0LjY3Ng0KCQlMMjc1LjU5Miw5LjE4Yy0xMi4yNC0xMi4yNC0zMi4yMDctMTIuMjQtNDQuNjc2LDBMMTUuNTY4LDIyNC41MjdjLTYuMTIsNi4xMi05LjI1NiwxNC4xNTMtOS4yNTYsMjIuMjYyDQoJCWMwLDguMDMxLDMuMTM2LDE2LjE0Myw5LjI1NiwyMi4yNjJMMjMwLjkxNiw0ODQuNGMxMi4yNCwxMi4yMzcsMzIuMjA3LDEyLjIzNyw0NC42NzYsMGwyOS43NTgtMjkuNzYxDQoJCWMxMi4yNC0xMi4yMzgsMTIuMjQtMzIuMjA3LDAtNDQuNjc2TDE5NC41MDEsMjk5LjQ5OGgyNjEuMDk0YzE3LjM2NiwwLDMxLjUyMS0xNC4xNTMsMzEuNTIxLTMxLjUyTDQ4Ny4yNjcsMjI1Ljk4MXoiLz4NCjwvZz4NCjwvc3ZnPg0K"},173:function(t,e,o){"use strict";var n=o(168);o.n(n).a},174:function(t,e,o){(e=o(19)(!1)).push([t.i,".section-title{border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;top:1.85rem;z-index:7;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.section-title .section-title-text{font-size:var(--theme-headerSize);text-decoration:none;flex:1;color:var(--theme-black);padding:.5rem;max-width:75%;margin:0 auto;text-align:center}.section-title .section-title-back{position:absolute;left:0;text-decoration:none;margin-left:.5rem}.section-title .section-title-back .section-title-back-icon{height:1rem;width:1rem;padding:.5rem;transition:all .25s ease-in-out;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}.section-title .section-title-sort{position:absolute;right:0;z-index:5;margin-right:.5rem}.section-title .section-title-sort .section-title-sort-icon{height:1rem;width:1rem;padding:.5rem;transition:all .25s ease-in-out;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}",""]),t.exports=e},194:function(t,e,o){var content=o(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("4fa951fd",content,!0,{sourceMap:!1})},195:function(t,e,o){var content=o(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("7c86b268",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";var n=o(194);o.n(n).a},224:function(t,e,o){(e=o(19)(!1)).push([t.i,".tool{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-direction:column;flex:1;border-radius:.25rem;margin:.25rem;text-decoration:none;min-width:100%;-webkit-animation:fadeIn .25s;animation:fadeIn .25s;transition:box-shadow .25s ease-in-out;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}@media (min-width:45em){.tool{min-width:40%;max-width:75%}}@media (min-width:64em){.tool{min-width:30%}}.tool:hover{box-shadow:var(--theme-boxShadowHover)}.tool:hover .tool-divider{width:75%}.tool:hover .tool-info{color:var(--theme-black)}.tool .tool-image-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;min-width:100%;min-height:165px;box-sizing:content-box}.tool .tool-image-wrapper .tool-image{margin:1rem .5rem .5rem;border-radius:.25rem;width:auto;max-width:100%;height:auto}@media (max-width:30rem){.tool .tool-image-wrapper .tool-image{max-width:90%}}.tool .tool-title{padding:.75rem;width:75%;color:var(--theme-black);margin:0 auto;transition:all .25s ease-in-out;font-size:var(--theme-headerSize);text-align:center}.tool .tool-divider{width:33%;border:0;height:1px;transition:all .25s ease-in-out;background-image:var(--theme-divider)}.tool .tool-info{text-indent:.25rem;padding:1rem;width:100%;flex:auto;text-align:left;color:var(--theme-blackLight);transition:all .25s ease-in-out;display:flex;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=e},225:function(t,e,o){"use strict";var n=o(195);o.n(n).a},226:function(t,e,o){(e=o(19)(!1)).push([t.i,".tools-section-wrapper{margin:2.5em auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:80em;min-height:100vh;color:#fff;padding:.25rem}.tools-section-wrapper .tools-container,.tools-section-wrapper .tools-section-list{padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;background:var(--theme-whiteBG);align-items:stretch;border-radius:0 0 .5rem .5rem;box-shadow:var(--theme-boxShadow)}.tools-section-wrapper .tools-new-container .tools-new-header{padding:1rem;text-align:center;display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;background:var(--theme-whiteBG);flex-direction:column}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section{min-width:100%;margin:.5rem auto;border-radius:.5rem}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section .tools-section-header{border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;color:var(--theme-black);top:var(--theme-subheaderOffset);padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none;font-size:var(--theme-subheaderSize);cursor:pointer;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section .tools-section-header .length{opacity:.5;margin:.25rem .5rem}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section .tools-section-list .tools-section-list-item .tools-section-list-item-title{text-align:center}",""]),t.exports=e},236:function(t,e,o){"use strict";o.r(e);o(74),o(39),o(27);var n=o(171),r={name:"Tool",props:{info:{}}},l=(o(223),o(6)),c=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"tool",attrs:{href:this.info.link,target:"_blank"}},[this.info.image?e("div",{staticClass:"tool-image-wrapper"},[e("img",{staticClass:"tool-image lazy",attrs:{src:"","data-lazysrc":"/img/tools/"+this.info.image,alt:this.info.title}})]):this._e(),this._v(" "),e("p",{staticClass:"tool-title",domProps:{textContent:this._s(this.info.title)}}),this._v(" "),e("hr",{staticClass:"tool-divider"}),this._v(" "),e("p",{staticClass:"tool-info",domProps:{textContent:this._s(this.info.info)}})])}),[],!1,null,null,null).exports,d=o(201),m={components:{Tool:c,PageHeader:n.a},data:function(){return{title:String,data:d,info:{},sortalpha:0}},head:function(){return{title:"cata-list - Tools - "+this.info.title}},created:function(){var t=!0,e=!1,o=void 0;try{for(var n,r=d[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var section=n.value;section.slug===this.$route.params.id&&(this.title=section.title,this.info=section)}}catch(t){e=!0,o=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw o}}},mounted:function(){var t=document.querySelectorAll(".lazy"),e=new IntersectionObserver((function(t,o){t.forEach((function(t){if(t.isIntersecting){var image=t.target;image.src=image.dataset.lazysrc,image.classList.remove("lazy"),e.unobserve(image)}}))}));t.forEach((function(image){e.observe(image)}))},methods:{hideList:function(t){t.target.classList.contains("length")?t.target.parentNode.nextElementSibling.classList.contains("hide")?t.target.parentNode.nextElementSibling.classList.remove("hide"):t.target.parentNode.nextElementSibling.classList.add("hide"):t.target.nextElementSibling.classList.contains("hide")?t.target.nextElementSibling.classList.remove("hide"):t.target.nextElementSibling.classList.add("hide")}}},w=(o(225),Object(l.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tools-section-wrapper"},[o("PageHeader",{attrs:{slug:"tools",title:t.title,sortable:!this.info.separate,tools:"true"}}),t._v(" "),this.info.separate?t._e():o("div",{staticClass:"tools-container"},t._l(this.info.list,(function(t,e){return o("Tool",{key:"tool-"+e,attrs:{info:t}})})),1),t._v(" "),this.info.separate?o("div",{staticClass:"tools-new-container"},[o("div",{staticClass:"tools-new-section-wrapper"},t._l(this.info.list,(function(section,e){return o("div",{key:"section-"+e,staticClass:"tools-section"},[o("p",{staticClass:"tools-section-header",on:{click:t.hideList}},[t._v(t._s(section.date)+" "),o("span",{staticClass:"length",domProps:{textContent:t._s("("+section.list.length+")")}})]),t._v(" "),o("div",{staticClass:"tools-section-list"},t._l(section.list,(function(t,e){return o("Tool",{key:"tool-"+e,attrs:{info:t}})})),1)])})),0)]):t._e()],1)}),[],!1,null,null,null));e.default=w.exports}}]);