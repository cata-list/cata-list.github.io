(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(t,e,n){var content=n(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1a64318d",content,!0,{sourceMap:!1})},166:function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return o}))},167:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMywxM1Y4aC0yLjljMCwwLTAuNywwLjEtMC45LTAuNGMtMC4yLTAuNSwwLjMtMSwwLjMtMUwxNi4xLDBsNi41LDYuNWMwLDAsMC43LDAuNSwwLjUsMS4xDQoJCWMtMC4xOTksMC42LTEsMC40LTEsMC40SDE5djVjMCwwLjYtMC4zLDEtMC45LDFoLTRDMTMuNiwxNCwxMywxMy42LDEzLDEzeiBNMTUsMTJoMlY2aDIuMUwxNi4yLDNMMTMuMSw2SDE1VjEyeiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xLjEsMTYuNGMwLjItMC41LDEtMC40LDEtMC40SDV2LTVjMC0wLjYsMC41LTEsMS0xaDRjMC42LDAsMSwwLjQsMSwxdjVoMy4xYzAsMCwwLjctMC4xLDAuOSwwLjQNCgkJcy0wLjMsMS0wLjMsMUw4LDI0bC02LjUtNi41QzEuNiwxNy41LDAuOSwxNywxLjEsMTYuNHogTTgsMjFsMy4xLTNIOXYtNkg3djZINS4xTDgsMjF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},168:function(t,e,n){"use strict";n(72);var o=n(166),r={props:{title:String,slug:String,sortable:null,tools:!1},data:function(){return{sortalpha:0}},methods:{showSort:function(){var t=document.getElementById("media-sort-wrapper");t.classList.contains("hide")?t.classList.remove("hide"):t.classList.add("hide")},sortAZ:function(t){var e,n;if(window.scrollTo(0,0),t.target.classList.contains("section-title-sort")?(n=t.target.parentNode.nextElementSibling,e=Object(o.a)(t.target.parentNode.nextElementSibling.children)):t.target.classList.contains("section-title-sort-icon")&&(n=t.target.parentNode.parentNode.nextElementSibling,e=Object(o.a)(t.target.parentNode.parentNode.nextElementSibling.children)),e.sort((function(a,b){var t=a.children[1].textContent.replace("'","").toLowerCase(),e=b.children[1].textContent.replace("'","").toLowerCase();return t<e?-1:t>e?1:0})),this.sortalpha++,this.sortalpha%2==0){var r=e.reverse();e=r}e.forEach((function(t){n.appendChild(t)}))}}},m=(n(170),n(6)),component=Object(m.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section-title"},[o("nuxt-link",{staticClass:"section-title-back",attrs:{to:"/"+t.slug}},[o("img",{staticClass:"section-title-back-icon",attrs:{src:n(169),alt:"back"}})]),t._v(" "),o("nuxt-link",{staticClass:"section-title-text",attrs:{to:"/"+t.slug},domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sortable&&!t.tools?o("div",{staticClass:"section-title-sort",on:{click:t.showSort}},[o("img",{staticClass:"section-title-sort-icon",attrs:{src:n(167),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&t.tools?o("div",{staticClass:"section-title-sort",on:{click:t.sortAZ}},[o("img",{staticClass:"section-title-sort-icon",attrs:{src:n(167),alt:"sort"}})]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},169:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OTMuNTc4cHgiIGhlaWdodD0iNDkzLjU3OHB4IiB2aWV3Qm94PSIwIDAgNDkzLjU3OCA0OTMuNTc4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTMuNTc4IDQ5My41NzgiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ4Ny4yNjcsMjI1Ljk4MWMwLTE3LjM2NS0xMy45OTktMzEuNTE4LTMxLjUxOC0zMS41MThIMTk0LjUwMUwzMDUuMzUsODMuNjE1DQoJCWMxMi4yNC0xMi4yNCwxMi4yNC0zMi4yMDcsMC00NC42NzZMMjc1LjU5Miw5LjE4Yy0xMi4yNC0xMi4yNC0zMi4yMDctMTIuMjQtNDQuNjc2LDBMMTUuNTY4LDIyNC41MjcNCgkJYy02LjEyLDYuMTItOS4yNTYsMTQuMTUzLTkuMjU2LDIyLjI2MmMwLDguMDMxLDMuMTM2LDE2LjE0Myw5LjI1NiwyMi4yNjJsMjE1LjM0OCwyMTUuMzQ5YzEyLjI0LDEyLjIzOCwzMi4yMDcsMTIuMjM4LDQ0LjY3NiwwDQoJCWwyOS43NTgtMjkuNzZjMTIuMjQtMTIuMjM5LDEyLjI0LTMyLjIwNywwLTQ0LjY3NkwxOTQuNTAxLDI5OS40OThoMjYxLjA5NGMxNy4zNjYsMCwzMS41Mi0xNC4xNTMsMzEuNTItMzEuNTJMNDg3LjI2NywyMjUuOTgxeiIvPg0KPC9nPg0KPC9zdmc+DQo="},170:function(t,e,n){"use strict";var o=n(165);n.n(o).a},171:function(t,e,n){(e=n(19)(!1)).push([t.i,".section-title{border-radius:.5rem .5rem 0 0;background:#393f46;position:-webkit-sticky;position:sticky;top:1.85em;z-index:5;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-decoration:none;color:#fff;cursor:pointer;box-shadow:inset 0 0 .5rem .25rem rgba(0,0,0,.25)}.section-title .section-title-text{font-size:1.1em;text-decoration:none;color:#fff;-webkit-box-flex:1;flex:1;padding:.5rem;max-width:75%;margin:0 auto;text-align:center}.section-title .section-title-back{position:absolute;left:0;text-decoration:none;color:#fff;margin-left:.5rem}.section-title .section-title-back .section-title-back-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box}.section-title .section-title-sort{position:absolute;right:0;z-index:5;margin-right:.5rem}.section-title .section-title-sort .section-title-sort-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box}",""]),t.exports=e},184:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("14a45d51",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var o=n(166),r={props:{info:{},isYoutube:null,channel:!1},methods:{hideList:function(t){if(t.target.classList.contains("youtube-item-title")){var content=Object(o.a)(t.target.parentNode.children),e=content.length;if(t.target.classList.contains("hiding")){t.target.classList.remove("hiding");for(var i=2;i<e;i++)content[i].classList.remove("hide")}else{t.target.classList.add("hiding");for(var n=2;n<e;n++)content[n].classList.add("hide")}}else if(t.target.classList.contains("youtube-item-title-text")){var r=Object(o.a)(t.target.parentNode.parentNode.children),m=r.length;if(t.target.parentNode.classList.contains("hiding")){t.target.parentNode.classList.remove("hiding");for(var l=2;l<m;l++)r[l].classList.remove("hide")}else{t.target.parentNode.classList.add("hiding");for(var d=2;d<m;d++)r[d].classList.add("hide")}}}}},m=(n(211),n(6)),component=Object(m.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"media-item",class:{"youtube-item":t.isYoutube,channel:t.channel},attrs:{"data-title":this.info.title,"data-year":this.info.year,"data-rating":this.info.goodreadsRating||this.info.imdbRating||this.info.metacriticRating}},[this.info.year?n("div",{staticClass:"media-item-title"},[n("p",{staticClass:"media-item-title-text",domProps:{textContent:t._s(this.info.title)}}),t._v(" "),this.info.year?n("p",{staticClass:"media-item-title-date",domProps:{textContent:t._s("("+this.info.year+")")}}):t._e(),t._v(" "),this.info.author?n("p",{staticClass:"media-item-title-author",domProps:{textContent:t._s(" - "+this.info.author)}}):t._e()]):t._e(),t._v(" "),this.info.year?n("hr",{staticClass:"media-divider"}):t._e(),t._v(" "),this.info.image?n("div",{staticClass:"media-main"},[this.info.image?n("div",{staticClass:"media-item-image-wrapper"},[n("img",{staticClass:"lazy media-item-image",attrs:{src:"","data-lazysrc":"/img/media/"+this.info.image,alt:this.info.title}})]):t._e(),t._v(" "),this.info.year&&this.info.plot?n("p",{staticClass:"media-item-plot",domProps:{textContent:t._s(this.info.plot)}}):t._e()]):t._e(),t._v(" "),this.info.year&&this.info.plot&&!this.info.image?n("p",{staticClass:"media-item-plot",domProps:{textContent:t._s(this.info.plot)}}):t._e(),t._v(" "),this.info.year||this.channel?t._e():n("a",{staticClass:"media-item-title",class:{"youtube-item-title":t.isYoutube},attrs:{href:this.info.link,target:"_blank"},on:{click:t.hideList}},[n("p",{staticClass:"media-item-title-text",class:{"youtube-item-title-text":t.isYoutube},domProps:{textContent:t._s(this.info.title)}})]),t._v(" "),this.info.description?n("div",{staticClass:"media-item-description"},[n("p",{staticClass:"media-item-description-text",domProps:{textContent:t._s(this.info.description)}}),t._v(" "),this.info.site?n("a",{staticClass:"media-item-description-link",attrs:{href:this.info.site,target:"_blank"},domProps:{textContent:t._s("Official Website")}}):t._e()]):t._e(),t._v(" "),this.info.year?t._e():n("hr",{staticClass:"media-divider"}),t._v(" "),!this.info.year&&this.info.plot?n("a",{staticClass:"media-item-plot",attrs:{href:this.info.link,target:"_blank"},domProps:{textContent:t._s(this.info.plot)}}):t._e(),t._v(" "),this.info.goodreadsRating?n("a",{staticClass:"media-item-rating",attrs:{href:"https://www.goodreads.com",target:"_blank"},domProps:{textContent:t._s(this.info.goodreadsRating+" / 5 (Goodreads)")}}):t._e(),t._v(" "),this.info.imdbRating?n("a",{staticClass:"media-item-rating",attrs:{href:"https://www.imdb.com",target:"_blank"},domProps:{textContent:t._s(this.info.imdbRating+" / 10 (IMDb)")}}):t._e(),t._v(" "),this.info.metacriticRating?n("a",{staticClass:"media-item-rating",attrs:{href:"https://www.metacritic.com",target:"_blank"},domProps:{textContent:t._s(this.info.metacriticRating+" / 100 (Metacritic)")}}):t._e(),t._v(" "),t.isYoutube?t._e():n("div",{staticClass:"media-item-links"},t._l(this.info.links,(function(link,i){return link.link?n("a",{key:"item-link-"+i,staticClass:"media-item-link",attrs:{href:link.link,target:"_blank"},domProps:{textContent:t._s(link.title)}}):t._e()})),0),t._v(" "),t.isYoutube&&this.info.list?n("div",{staticClass:"media-item-links youtube-item-links"},t._l(this.info.list,(function(e,i){return n("a",{key:"item-link-"+i,staticClass:"media-item-link youtube-item-link",attrs:{href:e.link,target:"_blank"}},[e.image?n("div",{staticClass:"media-item-link-image-wrapper"},[n("img",{staticClass:"lazy media-item-link-image",attrs:{src:"","data-lazysrc":"/img/media/"+e.image,alt:""}})]):t._e(),t._v(" "),n("p",{staticClass:"media-item-link-title youtube-item-link-title",domProps:{textContent:t._s(e.title)}}),t._v(" "),e.tedSpeaker||e.taSpeaker?n("p",{staticClass:"media-item-link-speaker youtube-item-link-speaker",domProps:{textContent:t._s(""+e.tedSpeaker+e.taSpeaker)}}):t._e()])})),0):t._e(),t._v(" "),t.isYoutube&&this.info.subSections?n("div",{staticClass:"youtube-item-subsections"},t._l(this.info.subSections,(function(section,i){return n("div",{key:"subsection"+i,staticClass:"youtube-item-subsection"},[n("p",{staticClass:"youtube-item-subsection-title",domProps:{textContent:t._s(section.title)}}),t._v(" "),n("div",{staticClass:"youtube-item-subsection-links"},t._l(section.list,(function(e,i){return n("a",{key:"item-link-"+i,staticClass:"youtube-item-subsection-link",attrs:{href:e.link,target:"_blank"}},[e.image?n("div",{staticClass:"media-item-link-image-wrapper"},[n("img",{staticClass:"lazy media-item-link-image",attrs:{src:"","data-lazysrc":"/img/media/"+e.image,alt:e.title}})]):t._e(),t._v(" "),n("p",{staticClass:"youtube-item-subsection-link-title",domProps:{textContent:t._s(e.title)}})])})),0)])})),0):t._e(),t._v(" "),this.info.roganList?n("div",{staticClass:"rogan-container"},[n("div",{staticClass:"rogan-list-wrapper"},t._l(this.info.roganList,(function(e,i){return n("a",{key:"rogan-item-"+i,staticClass:"rogan-list-item",attrs:{href:e.link,target:"_blank"}},[n("p",{staticClass:"rogan-list-item-title",domProps:{textContent:t._s(e.title)}}),t._v(" "),e.image?n("div",{staticClass:"media-item-link-image-wrapper"},[n("img",{staticClass:"lazy media-item-link-image",attrs:{src:"","data-lazysrc":"/img/media/"+e.image,alt:e.title}})]):t._e(),t._v(" "),n("p",{staticClass:"rogan-list-item-info",domProps:{textContent:t._s(e.info)}})])})),0),t._v(" "),n("div",{staticClass:"rogan-sublist-wrapper"},t._l(this.info.roganSubSections,(function(section,i){return n("div",{key:"rogan-subsection-"+i,staticClass:"rogan-sublist"},[n("p",{staticClass:"rogan-sublist-title",domProps:{textContent:t._s(section.title)}}),t._v(" "),n("p",{staticClass:"rogan-sublist-info",domProps:{textContent:t._s(section.info)}}),t._v(" "),n("div",{staticClass:"rogan-sublist-items"},t._l(section.list,(function(e,i){return n("a",{key:"rogan sublist-item-"+i,staticClass:"rogan-sublist-item",attrs:{href:e.link,target:"_blank"}},[e.image?n("div",{staticClass:"media-item-link-image-wrapper"},[n("img",{staticClass:"lazy media-item-link-image",attrs:{src:"","data-lazysrc":"/img/media/"+e.image,alt:e.title}})]):t._e(),t._v(" "),n("p",{staticClass:"media-item-link-title youtube-item-link-title",domProps:{textContent:t._s(e.title)}})])})),0)])})),0)]):t._e()])}),[],!1,null,null,null);e.a=component.exports},211:function(t,e,n){"use strict";var o=n(184);n.n(o).a},212:function(t,e,n){(e=n(19)(!1)).push([t.i,".media-item{-webkit-box-flex:1;flex:1;border-radius:.25rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch;min-width:100%;margin:.125rem;border:.1rem solid hsla(0,0%,100%,.05);background:#2e3238;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;-webkit-transition:all .3s;transition:all .3s;box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.15)}@media (min-width:40em){.media-item{min-width:40%;max-width:50%}}.media-item:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.3)}.media-item:hover .media-divider{width:75%}.media-item:hover .media-main .media-item-plot{color:#fff}.media-item.youtube-item{min-width:100%;margin:.5rem auto;position:relative}@media (min-width:40em){.media-item.youtube-item{min-width:100%}}.media-item .media-main{-webkit-box-flex:1;flex:auto;flex-wrap:wrap}.media-item .media-main,.media-item .media-main .media-item-image-wrapper{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.media-item .media-main .media-item-image-wrapper{min-width:100%;min-height:175px;flex-wrap:wrap;box-sizing:content-box}@media (min-width:60em){.media-item .media-main .media-item-image-wrapper{min-width:35%}}.media-item .media-main .media-item-image-wrapper .media-item-image{margin:.5rem;border:.25rem solid #000;border-radius:.1rem;height:auto;width:auto}.media-item .media-main .media-item-plot{min-width:100%;-webkit-box-flex:1;flex:1;margin:0 auto;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:1rem;-webkit-transition:color .3s;transition:color .3s;text-decoration:none;color:hsla(0,0%,100%,.8);text-indent:.5rem}@media (min-width:60em){.media-item .media-main .media-item-plot{min-width:40%}}.media-item .media-item-title{padding:1rem;font-size:1.05em;text-decoration:none;color:#fff;cursor:pointer;text-align:center;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.media-item .media-item-title.youtube-item-title{position:-webkit-sticky;position:sticky;top:3.45em;padding:.5rem;background-image:-webkit-gradient(linear,left top,right top,from(rgba(57,63,70,0)),color-stop(#393f46),to(rgba(57,63,70,0)));background-image:linear-gradient(90deg,rgba(57,63,70,0),#393f46,rgba(57,63,70,0));-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.media-item .media-item-title .media-item-title-text{font-size:1.05em;margin:auto .1rem}.media-item .media-item-title .media-item-title-author,.media-item .media-item-title .media-item-title-date{font-size:1.1rem;margin:auto .1rem}.media-item .media-item-description{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:1rem auto;width:90%;overflow:hidden;border-radius:.5rem;background:hsla(0,0%,100%,.025)}.media-item .media-item-description .media-item-description-text{max-width:50rem;padding:1rem;text-indent:.5rem}.media-item .media-item-description .media-item-description-link{text-decoration:none;color:#fff;text-align:center;width:100%;font-size:.9rem;padding:.25rem;-webkit-transition:background .3s;transition:background .3s;background:hsla(0,0%,100%,.035)}.media-item .media-item-description .media-item-description-link:hover{background:hsla(0,0%,100%,.05)}.media-item .media-divider{width:33%;border:0;margin:0 auto;height:1px;-webkit-transition:width .3s;transition:width .3s;background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(hsla(0,0%,100%,.75)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.75),hsla(0,0%,100%,0))}.media-item .media-item-plot{flex-wrap:wrap;padding:1rem;-webkit-box-flex:1;flex:1;text-indent:.5rem}.media-item .media-item-plot,.media-item .media-item-rating{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-decoration:none;color:#fff}.media-item .media-item-rating{padding:.25rem;margin:0 .15rem;font-size:.8rem;text-align:center;border:.1rem solid hsla(0,0%,100%,.05);background:hsla(0,0%,100%,.025);flex-wrap:wrap;-webkit-transition:background .3s;transition:background .3s}.media-item .media-item-rating:hover{background:hsla(0,0%,100%,.05)}.media-item .media-item-links{margin:0 .15rem .1rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-animation:fadeIn .3s;animation:fadeIn .3s}.media-item .media-item-links.youtube-item-links{padding:.5rem;-webkit-box-align:stretch;align-items:stretch}.media-item .media-item-links .media-item-link{-webkit-box-flex:1;flex:1;width:auto;padding:.25rem .33rem;font-size:.8rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;color:#fff;text-align:center;background:hsla(0,0%,100%,.055);text-decoration:none;-webkit-transition:background .3s;transition:background .3s;border:.1rem solid hsla(0,0%,100%,.05)}.media-item .media-item-links .media-item-link .media-item-link-image-wrapper{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-height:110px;box-sizing:content-box}.media-item .media-item-links .media-item-link .media-item-link-image-wrapper .media-item-link-image{margin:.5rem auto 0;border:.25rem solid #000;border-radius:.1rem;width:auto;height:auto}.media-item .media-item-links .media-item-link:hover{background:hsla(0,0%,100%,.125)}.media-item .media-item-links .media-item-link.youtube-item-link{margin:.125rem;overflow:hidden;font-size:1rem;border:0;border-radius:.25rem}.media-item .media-item-links .media-item-link .media-item-link-title{min-width:100%;-webkit-box-flex:1;flex:1;padding:.5rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:hsla(0,0%,100%,.125)}.media-item .media-item-links .media-item-link .media-item-link-speaker{min-width:100%;padding:.25rem;height:auto;background:hsla(0,0%,100%,.05)}.youtube-item{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.15)}.youtube-item:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.3)}.youtube-item .youtube-item-title{z-index:1;background-image:-webkit-gradient(linear,left top,right top,from(rgba(57,63,70,0)),color-stop(#393f46),to(rgba(57,63,70,0)));background-image:linear-gradient(90deg,rgba(57,63,70,0),#393f46,rgba(57,63,70,0));-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.youtube-item .media-divider{display:none}.youtube-item .youtube-item-links{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.youtube-item .youtube-item-links .youtube-item-link{border:0;padding:0;-webkit-box-flex:1;flex:1;min-width:100%;margin:.125rem;-webkit-transition:all .3s;transition:all .3s;background:hsla(0,0%,100%,.05);box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.15)}@media (min-width:30em){.youtube-item .youtube-item-links .youtube-item-link{min-width:40%;max-width:50%}}@media (min-width:48em){.youtube-item .youtube-item-links .youtube-item-link{min-width:30%}}@media (min-width:64em){.youtube-item .youtube-item-links .youtube-item-link{min-width:20%}}.youtube-item .youtube-item-links .youtube-item-link:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.3);background:hsla(0,0%,100%,.05)}.youtube-item .youtube-item-links .youtube-item-link .youtube-item-link-title{background:hsla(0,0%,100%,0)}.youtube-item .youtube-item-subsections{padding:.5rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.youtube-item .youtube-item-subsections .youtube-item-subsection{-webkit-box-flex:1;flex:1;position:relative;margin:.5rem;min-width:100%;border-radius:.5rem;border:.1rem solid hsla(0,0%,100%,.05);background:hsla(0,0%,100%,.025);-webkit-animation:fadeIn .3s;animation:fadeIn .3s;-webkit-transition:all .3s;transition:all .3s;box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.1)}.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-title{padding:.5rem;background-image:-webkit-gradient(linear,left top,right top,from(rgba(57,63,70,0)),color-stop(#393f46),to(rgba(57,63,70,0)));background-image:linear-gradient(90deg,rgba(57,63,70,0),#393f46,rgba(57,63,70,0));-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em);position:-webkit-sticky;position:sticky;top:5.41rem;text-decoration:none;color:#fff;text-align:center;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:1.05em}.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch;padding:.5rem}.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link{-webkit-box-flex:1;margin:.125rem;padding:.5rem;border-radius:.25rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;text-align:center;flex:1;min-width:100%;text-decoration:none;-webkit-transition:all .3s;transition:all .3s;background:hsla(0,0%,100%,.05);box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.15)}@media (min-width:30em){.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link{min-width:40%;max-width:50%}}@media (min-width:48em){.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link{min-width:30%}}@media (min-width:64em){.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link{min-width:20%}}.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.3)}.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link .media-item-link-image-wrapper{min-width:100%;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-height:110px;box-sizing:content-box}.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link .media-item-link-image-wrapper .media-item-link-image{margin:.5rem auto 0;border:.25rem solid #000;border-radius:.1rem;width:auto;height:auto}.youtube-item .youtube-item-subsections .youtube-item-subsection .youtube-item-subsection-links .youtube-item-subsection-link .youtube-item-subsection-link-title{padding:.25rem}.youtube-item .rogan-container{padding:.5rem}.youtube-item .rogan-container .rogan-list-wrapper{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch}.youtube-item .rogan-container .rogan-list-wrapper .rogan-list-item{-webkit-box-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.25rem;margin:.125rem;text-decoration:none;color:#fff;min-width:100%;-webkit-transition:all .3s;transition:all .3s;background:#34383f;box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.15)}@media (min-width:38em){.youtube-item .rogan-container .rogan-list-wrapper .rogan-list-item{min-width:40%;max-width:50%}}.youtube-item .rogan-container .rogan-list-wrapper .rogan-list-item:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.3)}.youtube-item .rogan-container .rogan-list-wrapper .rogan-list-item .media-item-link-image-wrapper{min-width:100%;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-height:110px;box-sizing:content-box}.youtube-item .rogan-container .rogan-list-wrapper .rogan-list-item .media-item-link-image-wrapper .media-item-link-image{margin:.5rem auto 0;border:.25rem solid #000;border-radius:.1rem;width:auto;height:auto}.youtube-item .rogan-container .rogan-list-wrapper .rogan-list-item .rogan-list-item-title{background-image:-webkit-gradient(linear,left top,right top,from(rgba(57,63,70,0)),color-stop(#454b54),to(rgba(57,63,70,0)));background-image:linear-gradient(90deg,rgba(57,63,70,0),#454b54,rgba(57,63,70,0));padding:.5rem;text-align:center}.youtube-item .rogan-container .rogan-list-wrapper .rogan-list-item .rogan-list-item-info{padding:1rem;-webkit-box-flex:1;flex:1;text-indent:.5rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.youtube-item .rogan-container .rogan-sublist-wrapper{margin:.25rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.5rem;min-width:100%;overflow:hidden;-webkit-box-flex:1;flex:1;margin:.25rem;-webkit-transition:all .3s;transition:all .3s;background:#34383f;box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.15)}@media (min-width:60em){.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist{min-width:40%;max-width:75%}}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.3)}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-title{font-size:1.1rem;padding:.5rem;text-align:center;background-image:-webkit-gradient(linear,left top,right top,from(rgba(57,63,70,0)),color-stop(#454b54),to(rgba(57,63,70,0)));background-image:linear-gradient(90deg,rgba(57,63,70,0),#454b54,rgba(57,63,70,0))}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-info{padding:1rem;-webkit-box-flex:1;flex:auto;margin:1rem auto;max-width:60rem;text-indent:.5rem;text-align:left;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:90%;border-radius:.5rem;background:hsla(0,0%,100%,.025)}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-items{padding:.5rem;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:stretch;align-items:stretch}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-items .rogan-sublist-item{-webkit-box-flex:1;flex:1;cursor:pointer;border-radius:.25rem;margin:.125rem;text-align:center;padding:.5rem;min-width:100%;max-width:50%;-webkit-transition:all .3s;transition:all .3s;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-decoration:none;color:#fff;background:#3f454d;box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.15)}@media (min-width:33em){.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-items .rogan-sublist-item{min-width:40%}}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-items .rogan-sublist-item:hover{box-shadow:inset 0 0 .5rem .1rem hsla(0,0%,100%,.3)}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-items .rogan-sublist-item .media-item-link-image-wrapper{min-width:100%;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-height:110px;box-sizing:content-box}.youtube-item .rogan-container .rogan-sublist-wrapper .rogan-sublist .rogan-sublist-items .rogan-sublist-item .media-item-link-image-wrapper .media-item-link-image{margin:.25rem auto;border:.25rem solid #000;border-radius:.1rem;width:auto;height:auto}.channel{background:hsla(0,0%,100%,0)}.channel,.channel:hover{box-shadow:0 0 hsla(0,0%,100%,0);border:0 solid hsla(0,0%,100%,0)}",""]),t.exports=e}}]);