(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{201:function(t,e,o){var content=o(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("5abc8c09",content,!0,{sourceMap:!1})},202:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMywxM1Y4aC0yLjljMCwwLTAuNywwLjEtMC45LTAuNGMtMC4yLTAuNSwwLjMtMSwwLjMtMUwxNi4xLDBsNi41LDYuNWMwLDAsMC43LDAuNSwwLjUsMS4xYy0wLjE5OSwwLjYtMSwwLjQtMSwwLjRIMTl2NQ0KCQljMCwwLjYtMC4zLDEtMC45LDFoLTRDMTMuNiwxNCwxMywxMy42LDEzLDEzeiBNMTUsMTJoMlY2aDIuMUwxNi4yLDNMMTMuMSw2SDE1VjEyeiIvPg0KCTxwYXRoIGQ9Ik0xLjEsMTYuNGMwLjItMC41LDEtMC40LDEtMC40SDV2LTVjMC0wLjYsMC41LTEsMS0xaDRjMC42LDAsMSwwLjQsMSwxdjVoMy4xYzAsMCwwLjctMC4xLDAuOSwwLjRzLTAuMywxLTAuMywxTDgsMjQNCgkJbC02LjUtNi41QzEuNiwxNy41LDAuOSwxNywxLjEsMTYuNHogTTgsMjFsMy4xLTNIOXYtNkg3djZINS4xTDgsMjF6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},204:function(t,e,o){"use strict";o(27),o(57),o(104),o(28);var n=o(19),r={name:"PageHeader",props:{title:String,slug:String,sortable:null,media:null,tools:null,quotes:null,articles:null,isVimeo:null,isYoutube:null},data:function(){return{sortalpha:1,sortVimeo:0,navShown:!0}},methods:{showSort:function(){var t;this.quotes?t=document.getElementById("quotes-sort-wrapper"):!this.media||this.isYoutube||this.isVimeo?this.articles?t=document.getElementById("articles-sort-wrapper"):this.isYoutube?t=document.getElementById("youtube-sort-wrapper"):this.isVimeo&&(t=document.getElementById("vimeo-sort-wrapper")):t=document.getElementById("media-sort-wrapper"),t.classList.toggle("hide")},sortAZ:function(t){var e,o;if(window.scrollTo(0,0),t.target.classList.contains("section-title-sort")?(o=t.target.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.nextElementSibling.children)):t.target.classList.contains("section-title-sort-icon")&&(o=t.target.parentNode.parentNode.nextElementSibling,e=Object(n.a)(t.target.parentNode.parentNode.nextElementSibling.children)),e.sort((function(a,b){var t=a.children[1].textContent.replace("'","").toLowerCase(),e=b.children[1].textContent.replace("'","").toLowerCase();return t<e?-1:t>e?1:0})),this.sortalpha%2==0){var r=e.reverse();e=r}e.forEach((function(t){o.appendChild(t)})),this.sortalpha++}}},l=(o(205),o(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title",attrs:{id:"main-page-header"}},[n("p",{staticClass:"section-title-text",domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sortable&&t.tools?n("div",{staticClass:"section-title-sort",on:{click:t.sortAZ}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:o(202),alt:"sort"}})]):t._e(),t._v(" "),t.sortable&&(t.media||t.quotes||t.articles||t.isYoutube||t.isVimeo)?n("div",{staticClass:"section-title-sort",on:{click:t.showSort}},[n("img",{staticClass:"section-title-sort-icon",attrs:{src:o(202),alt:"sort"}})]):t._e()])}),[],!1,null,null,null);e.a=component.exports},205:function(t,e,o){"use strict";var n=o(201);o.n(n).a},206:function(t,e,o){(e=o(38)(!1)).push([t.i,".section-title{border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;top:-.05rem;z-index:7;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.section-title .section-title-text{font-size:var(--theme-headerSize);text-decoration:none;flex:1;color:var(--theme-black);padding:.5rem;max-width:75%;margin:0 auto;text-align:center}.section-title .section-title-back{position:absolute;left:0;text-decoration:none;margin-left:.5rem}.section-title .section-title-back .section-title-back-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}.section-title .section-title-sort{position:absolute;right:0;z-index:5;cursor:pointer;margin-right:.5rem}.section-title .section-title-sort .section-title-sort-icon{height:1rem;width:1rem;padding:.5rem;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}#main-page-header.offset{top:1.85rem}",""]),t.exports=e},227:function(t,e,o){var content=o(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("0fea3e49",content,!0,{sourceMap:!1})},228:function(t,e,o){var content=o(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("8306b2c8",content,!0,{sourceMap:!1})},256:function(t,e,o){"use strict";var n=o(227);o.n(n).a},257:function(t,e,o){(e=o(38)(!1)).push([t.i,".tool{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-direction:column;flex:1;border-radius:.25rem;margin:.25rem;text-decoration:none;min-width:100%;-webkit-animation:fadeIn .25s;animation:fadeIn .25s;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}@media (min-width:45em){.tool{min-width:40%;max-width:75%}}@media (min-width:64em){.tool{min-width:30%}}.tool:hover{box-shadow:var(--theme-boxShadowHover)}.tool:hover .tool-divider{width:75%}.tool:hover .tool-info{color:var(--theme-black)}.tool .tool-image-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;min-width:100%;min-height:165px;box-sizing:content-box}.tool .tool-image-wrapper .tool-image{margin:1rem .5rem .5rem;border-radius:.25rem;width:auto;max-width:100%;height:auto}@media (max-width:30rem){.tool .tool-image-wrapper .tool-image{max-width:90%}}.tool .tool-title{padding:.75rem;width:75%;color:var(--theme-black);margin:0 auto;font-size:var(--theme-headerSize);text-align:center}.tool .tool-divider{width:33%;border:0;height:1px;background-image:var(--theme-divider)}.tool .tool-info{text-indent:.25rem;padding:1rem;width:100%;flex:auto;text-align:left;color:var(--theme-blackLight);display:flex;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=e},258:function(t,e,o){"use strict";var n=o(228);o.n(n).a},259:function(t,e,o){(e=o(38)(!1)).push([t.i,".tools-section-wrapper{margin:2.5rem auto 3rem;-webkit-animation:fadeIn .25s ease-in-out;animation:fadeIn .25s ease-in-out;max-width:90rem;min-height:100vh;color:#fff;padding:.25rem}.tools-section-wrapper .tools-container,.tools-section-wrapper .tools-section-list{padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;background:var(--theme-whiteBG);align-items:stretch;border-radius:0 0 .5rem .5rem;box-shadow:var(--theme-boxShadow)}.tools-section-wrapper .tools-new-container .tools-new-header{padding:1rem;text-align:center;display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;background:var(--theme-whiteBG);flex-direction:column}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section{min-width:100%;position:relative;margin:.5rem auto;border-radius:.5rem}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section .tools-section-header{border-radius:.5rem .5rem 0 0;position:-webkit-sticky;position:sticky;color:var(--theme-black);top:1.85rem;padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section .tools-section-header.tools-new-hiding{top:3.45rem}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section .tools-section-header .length{opacity:.5;margin:.25rem .5rem}.tools-section-wrapper .tools-new-container .tools-new-section-wrapper .tools-section .tools-section-list .tools-section-list-item .tools-section-list-item-title{text-align:center}",""]),t.exports=e},270:function(t,e,o){"use strict";o.r(e);o(30),o(40),o(41),o(27),o(42),o(43),o(29),o(14),o(31),o(44),o(28),o(45);var n=o(204),r={name:"Tool",props:{info:{}}},l=(o(256),o(13)),c=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"tool",attrs:{href:this.info.link,target:"_blank"}},[this.info.image?e("div",{staticClass:"tool-image-wrapper"},[e("img",{staticClass:"tool-image lazy",attrs:{src:"","data-lazysrc":"/img/tools/"+this.info.image,alt:this.info.title}})]):this._e(),this._v(" "),e("p",{staticClass:"tool-title",domProps:{textContent:this._s(this.info.title)}}),this._v(" "),e("hr",{staticClass:"tool-divider"}),this._v(" "),e("p",{staticClass:"tool-info",domProps:{textContent:this._s(this.info.info)}})])}),[],!1,null,null,null).exports,d=o(234);function m(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return w(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,r=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return r=t.done,t},e:function(t){l=!0,n=t},f:function(){try{r||null==o.return||o.return()}finally{if(l)throw n}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var h={components:{Tool:c,PageHeader:n.a},data:function(){return{title:String,data:d,info:{},sortalpha:0}},head:function(){return{title:"cata-list - Tools - "+this.info.title,meta:[{name:"keywords",content:["wiki","knowledge","news","learning","resources","activism","future","catalyst","tools",this.info.title.toLowerCase()]}]}},created:function(){var t,e=m(d);try{for(e.s();!(t=e.n()).done;){var section=t.value;section.slug===this.$route.params.id&&(this.title=section.title,this.info=section)}}catch(t){e.e(t)}finally{e.f()}},mounted:function(){var t=document.querySelectorAll(".lazy"),e=new IntersectionObserver((function(t,o){t.forEach((function(t){if(t.isIntersecting){var image=t.target;image.src=image.dataset.lazysrc,image.classList.remove("lazy"),e.unobserve(image)}}))}));t.forEach((function(image){e.observe(image)}))},methods:{hideList:function(t){t.target.classList.contains("length")?t.target.parentNode.nextElementSibling.classList.contains("hide")?t.target.parentNode.nextElementSibling.classList.remove("hide"):t.target.parentNode.nextElementSibling.classList.add("hide"):t.target.nextElementSibling.classList.contains("hide")?t.target.nextElementSibling.classList.remove("hide"):t.target.nextElementSibling.classList.add("hide")}}},f=(o(258),Object(l.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tools-section-wrapper"},[o("PageHeader",{attrs:{slug:"tools",title:t.title,sortable:!this.info.separate,tools:"true"}}),t._v(" "),this.info.separate?t._e():o("div",{staticClass:"tools-container"},t._l(this.info.list,(function(t,e){return o("Tool",{key:"tool-"+e,attrs:{info:t}})})),1),t._v(" "),this.info.separate?o("div",{staticClass:"tools-new-container"},[o("div",{staticClass:"tools-new-section-wrapper"},t._l(this.info.list,(function(section,e){return o("div",{key:"section-"+e,staticClass:"tools-section"},[o("p",{staticClass:"tools-section-header",on:{click:t.hideList}},[t._v(t._s(section.date)+" "),o("span",{staticClass:"length",domProps:{textContent:t._s("("+section.list.length+")")}})]),t._v(" "),o("div",{staticClass:"tools-section-list"},t._l(section.list,(function(t,e){return o("Tool",{key:"tool-"+e,attrs:{info:t}})})),1)])})),0)]):t._e()],1)}),[],!1,null,null,null));e.default=f.exports}}]);