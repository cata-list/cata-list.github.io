(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{218:function(e,t,n){var content=n(246);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("0882cf66",content,!0,{sourceMap:!1})},245:function(e,t,n){"use strict";var r=n(218);n.n(r).a},246:function(e,t,n){(t=n(38)(!1)).push([e.i,".timeline-year{margin:2.5rem auto 1rem;-webkit-animation:fadeIn .25s ease-in-out;animation:fadeIn .25s ease-in-out;max-width:90rem;min-height:100vh;color:#fff;padding:.25rem}.timeline-year .timeline-container{background:var(--theme-whiteBG);box-shadow:var(--theme-boxShadow);min-height:80vh;border-radius:.25rem}.timeline-year .timeline-container .timeline-year-wrapper{position:relative;padding:.25rem;box-shadow:var(--theme-boxShadow)}.timeline-year .timeline-container .timeline-year-wrapper .timeline-year-title{font-size:var(--theme-headerSize);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:.5rem;text-align:center;width:100%;cursor:pointer;margin:0 auto;border-radius:.5rem .5rem 0 0;box-shadow:var(--theme-boxShadow)}.timeline-year .timeline-container .timeline-year-wrapper .timeline-year-title .length{opacity:.5;margin:.25rem .5rem}.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper{position:relative;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;box-shadow:var(--theme-boxShadow)}.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month{margin:1rem auto}.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month:first-child,.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month:last-child{margin:.5rem auto}.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-month-title{font-size:var(--theme-headerSize);color:var(--theme-black);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:.5rem;z-index:3;cursor:pointer;position:-webkit-sticky;position:sticky;text-align:center;width:100%;margin:0 auto;background:var(--theme-itemWhite);border-radius:.5rem .5rem 0 0;box-shadow:var(--theme-boxShadow);top:1.85rem}.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-month-title.timeline-nav-hiding{top:3.45rem}.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-month-title .length{opacity:.5;margin:.25rem .5rem}.timeline-year .timeline-container .timeline-year-wrapper .timeline-months-wrapper .timeline-month .timeline-links-wrapper{padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;box-shadow:var(--theme-boxShadow)}.timeline-year .adjacent{margin-top:2rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;justify-content:space-between}.timeline-year .adjacent .adjacent-link{flex:1;max-width:20rem;padding:.5rem;margin:0 .5rem;border-radius:.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-wrap:nowrap;justify-content:flex-start;background:var(--theme-itemWhite);text-decoration:none;box-shadow:var(--theme-boxShadowLight)}@media (min-width:30rem){.timeline-year .adjacent .adjacent-link{padding:1rem}}.timeline-year .adjacent .adjacent-link:hover{box-shadow:var(--theme-boxShadowHover)}.timeline-year .adjacent .adjacent-link.next{justify-content:flex-end}.timeline-year .adjacent .adjacent-link.next .adjacent-link-icon{transform:rotate(180deg)}.timeline-year .adjacent .adjacent-link.spacer{background:transparent;box-shadow:none}.timeline-year .adjacent .adjacent-link.spacer:hover{box-shadow:none}.timeline-year .adjacent .adjacent-link .adjacent-link-icon{padding:.33rem;cursor:pointer;height:1rem;width:1rem;opacity:.5;box-sizing:content-box;filter:var(--theme-icon)}.timeline-year .adjacent .adjacent-link .adjacent-link-title{padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none}@media (min-width:30rem){.timeline-year .adjacent .adjacent-link .adjacent-link-title{font-size:1.1rem}}",""]),e.exports=t},277:function(e,t,n){"use strict";n.r(t);n(15),n(30);var r=n(210),l=n(204),o=n(231),m={components:{PageHeader:l.a,Article:r.a},name:"timeline",data:function(){return{title:"Timeline",found:!1,next:null,prev:null,year:"",list:[]}},head:function(){return{title:"cata-list - Articles - Timeline - ".concat(this.year?this.year:""),meta:[{name:"keywords",content:["wiki","knowledge","news","learning","resources","activism","future","catalyst","articles","timeline","year",this.year?this.year.toString():""]},{hid:"description",name:"description",content:"cata-list - Some of the best news articles from ".concat(this.year?this.year:"")},{property:"og:description",content:"cata-list - Some of the best news articles from ".concat(this.year?this.year:"")}]}},created:function(){for(var e=o.length,i=0;i<e;i++){var t=o[i].title;t===this.$route.params.year&&(this.found=!0,this.year=t,this.list=o[i].months,this.prev=o[i+1]&&null!==o[i+1]?{title:o[i+1].title,slug:o[i+1].title}:o[i+1]&&null!=o[i+1]?null:{title:o[0].title,slug:o[0].title},this.next=o[i-1]&&null!==o[i-1]?{title:o[i-1].title,slug:o[i-1].title}:o[i-1]&&null!=o[i-1]?null:{title:o[e-1].title,slug:o[e-1].title})}0==this.found&&this.$router.push("/")},methods:{toggleList:function(e){e.target.classList.contains("length")?e.target.parentNode.nextElementSibling.classList.contains("hide")?e.target.parentNode.nextElementSibling.classList.remove("hide"):e.target.parentNode.nextElementSibling.classList.add("hide"):e.target.nextElementSibling.classList.contains("hide")?e.target.nextElementSibling.classList.remove("hide"):e.target.nextElementSibling.classList.add("hide")}}},c=(n(245),n(14)),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.found?n("div",{staticClass:"timeline-year"},[n("PageHeader",{attrs:{slug:"articles",title:e.title+" / "+e.year}}),e._v(" "),n("div",{staticClass:"timeline-container"},[n("div",{staticClass:"timeline-year-wrapper"},[n("div",{staticClass:"timeline-months-wrapper"},e._l(e.list,(function(t,r){return n("div",{key:"month"+r,staticClass:"timeline-month"},[n("p",{staticClass:"timeline-month-title",on:{click:e.toggleList}},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"timeline-links-wrapper",class:{hide:r>0}},e._l(t.list,(function(article,e){return n("Article",{key:"article-"+e,attrs:{info:article}})})),1)])})),0)])]),e._v(" "),n("div",{staticClass:"adjacent"},[null!==e.prev?n("nuxt-link",{staticClass:"adjacent-link prev",attrs:{to:"/articles/timeline/"+e.prev.slug}},[n("img",{staticClass:"adjacent-link-icon",attrs:{src:"/icons/arrow.svg",alt:""}}),e._v(" "),n("p",{staticClass:"adjacent-link-title",domProps:{textContent:e._s(e.prev.title)}})]):e._e(),e._v(" "),null==e.prev?n("div",{staticClass:"adjacent-link prev spacer"}):e._e(),e._v(" "),null!==e.next?n("nuxt-link",{staticClass:"adjacent-link next",attrs:{to:"/articles/timeline/"+e.next.slug}},[n("p",{staticClass:"adjacent-link-title",domProps:{textContent:e._s(e.next.title)}}),e._v(" "),n("img",{staticClass:"adjacent-link-icon",attrs:{src:"/icons/arrow.svg",alt:""}})]):e._e(),e._v(" "),null==e.next?n("div",{staticClass:"adjacent-link next spacer"}):e._e()],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);