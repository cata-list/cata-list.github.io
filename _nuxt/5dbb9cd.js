(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{228:function(t,e,n){var content=n(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("067a7794",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";var r=n(228);n.n(r).a},267:function(t,e,n){(e=n(38)(!1)).push([t.i,".section-wrapper{margin:2.5rem auto 1rem;-webkit-animation:fadeIn .25s ease-in-out;animation:fadeIn .25s ease-in-out;max-width:90rem;min-height:100vh;color:#fff;padding:.25rem}.section-wrapper .yt-media-container{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;position:relative;align-items:stretch;background:var(--theme-whiteBG);border-radius:0 0 .5rem .5rem}.section-wrapper .yt-media-container #media-sort-wrapper{width:100%;z-index:10;position:-webkit-sticky;position:sticky;top:3.65rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.section-wrapper .yt-media-container #media-sort-wrapper .media-sort{margin:.5rem;overflow:hidden;border-radius:.5rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;display:flex;flex-wrap:wrap;align-items:center;justify-content:center}@media (min-width:38em){.section-wrapper .yt-media-container #media-sort-wrapper .media-sort{max-width:30rem;margin:.5rem auto}}.section-wrapper .yt-media-container #media-sort-wrapper .media-sort .media-sort-title{min-width:100%;padding:.5rem;font-size:.9rem;text-align:center}@media (min-width:28em){.section-wrapper .yt-media-container #media-sort-wrapper .media-sort .media-sort-title{min-width:10%}}.section-wrapper .yt-media-container #media-sort-wrapper .media-sort .media-sort-item{flex:1;font-size:.9rem;padding:.5rem;text-align:center;min-width:20%;cursor:pointer}.section-wrapper .yt-media-container #youtube-sort-wrapper{width:100%;z-index:10;position:-webkit-sticky;position:sticky;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;-webkit-backdrop-filter:blur(.1em);backdrop-filter:blur(.1em)}.section-wrapper .yt-media-container #youtube-sort-wrapper .youtube-sort{margin:.5rem;overflow:hidden;border-radius:.5rem;-webkit-animation:fadeIn .3s;animation:fadeIn .3s;box-shadow:var(--theme-boxShadow);background:var(--theme-itemWhite);display:flex;flex-wrap:wrap;align-items:center;justify-content:center}@media (min-width:38em){.section-wrapper .yt-media-container #youtube-sort-wrapper .youtube-sort{max-width:30rem;margin:.5rem auto}}.section-wrapper .yt-media-container #youtube-sort-wrapper .youtube-sort .youtube-sort-title{min-width:100%;color:var(--theme-black);padding:.5rem;font-size:.9rem;text-align:center}@media (min-width:28em){.section-wrapper .yt-media-container #youtube-sort-wrapper .youtube-sort .youtube-sort-title{min-width:10%}}.section-wrapper .yt-media-container #youtube-sort-wrapper .youtube-sort .youtube-sort-item{flex:1;color:var(--theme-black);font-size:.9rem;padding:.5rem;text-align:center;min-width:20%;cursor:pointer;box-shadow:var(--theme-boxShadowLight)}.section-wrapper .yt-media-container #youtube-sort-wrapper .youtube-sort .youtube-sort-item:hover{box-shadow:var(--theme-boxShadowHover)}.section-wrapper .yt-media-container .sorter{top:1.85rem}.section-wrapper .yt-media-container .sorter.sorter-offset{top:3.65rem}.section-wrapper .adjacent{margin-top:2rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch;justify-content:space-between}.section-wrapper .adjacent .adjacent-link{flex:1;max-width:20rem;padding:.5rem;margin:0 .5rem;border-radius:.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-wrap:nowrap;justify-content:flex-start;background:var(--theme-itemWhite);text-decoration:none;box-shadow:var(--theme-boxShadowLight)}@media (min-width:30rem){.section-wrapper .adjacent .adjacent-link{padding:1rem}}.section-wrapper .adjacent .adjacent-link:hover{box-shadow:var(--theme-boxShadowHover)}.section-wrapper .adjacent .adjacent-link.next{justify-content:flex-end}.section-wrapper .adjacent .adjacent-link.next .adjacent-link-icon{transform:rotate(180deg)}.section-wrapper .adjacent .adjacent-link.spacer{background:transparent;box-shadow:none}.section-wrapper .adjacent .adjacent-link.spacer:hover{box-shadow:none}.section-wrapper .adjacent .adjacent-link .adjacent-link-icon{padding:.33rem;cursor:pointer;height:1rem;width:1rem;opacity:.5;box-sizing:content-box;filter:var(--theme-icon)}.section-wrapper .adjacent .adjacent-link .adjacent-link-title{padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-decoration:none}@media (min-width:30rem){.section-wrapper .adjacent .adjacent-link .adjacent-link-title{font-size:1.1rem}}",""]),t.exports=e},282:function(t,e,n){"use strict";n.r(e);n(27),n(58),n(106),n(28);var r=n(19),o=n(234),c=n(204),d=n(233),l={components:{PageHeader:c.a,MediaItem:o.a},data:function(){return{parent:"",info:{},found:!1,next:null,prev:null,ytDateSort:1,ytTitleSort:0,ytRatingSort:1,ytDurationSort:0,isYoutube:!0}},head:function(){return{title:"cata-list - Media - YouTube - ".concat(this.info.title?this.info.title:""),meta:[{name:"keywords",content:["wiki","knowledge","news","learning","resources","activism","future","catalyst","media","youtube","channel",this.info.title?this.info.title.toLowerCase():""]},{hid:"description",name:"description",content:"cata-list - Some of the best videos from ".concat(this.info.title?this.info.title:""," (YouTube)")},{property:"og:description",content:"cata-list - Some of the best videos from ".concat(this.info.title?this.info.title:""," (YouTube)")}]}},created:function(){for(var t=d.length,i=0;i<t;i++){var e=d[i].slug,n=d[i].title;if(e===this.$route.params.id)for(var r=d[i].channels.length,o=0;o<r;o++){d[i].channels[o].slug===this.$route.params.channel&&(this.found=!0,this.isYoutube=!0,this.parent=n,this.info=d[i].channels[o],this.next=d[i].channels[o+1]&&null!==d[i].channels[o+1]?{title:d[i].channels[o+1].title,slug:d[i].channels[o+1].slug}:d[i].channels[o+1]&&null!=d[i].channels[o+1]?null:{title:d[i].channels[0].title,slug:d[i].channels[0].slug},this.prev=d[i].channels[o-1]&&null!==d[i].channels[o-1]?{title:d[i].channels[o-1].title,slug:d[i].channels[o-1].slug}:d[i].channels[o-1]&&null!=d[i].channels[o-1]?null:{title:d[i].channels[r-1].title,slug:d[i].channels[r-1].slug})}}0==this.found&&this.$router.push("/")},mounted:function(){var t=document.querySelectorAll(".lazy"),e=new IntersectionObserver((function(t,n){t.forEach((function(t){if(t.isIntersecting){var image=t.target;image.src=image.dataset.lazysrc,image.classList.remove("lazy"),e.unobserve(image)}}))}));t.forEach((function(image){e.observe(image)}))},methods:{hideList:function(t){if(t.target.classList.contains("youtube-item-title")){var content=Object(r.a)(t.target.parentNode.children),e=content.length;if(t.target.classList.contains("hiding")){t.target.classList.remove("hiding");for(var i=2;i<e;i++)content[i].classList.remove("hide")}else{t.target.classList.add("hiding");for(var n=2;n<e;n++)content[n].classList.add("hide")}}else if(t.target.classList.contains("youtube-item-title-text")){var o=Object(r.a)(t.target.parentNode.parentNode.children),c=o.length;if(t.target.parentNode.classList.contains("hiding")){t.target.parentNode.classList.remove("hiding");for(var d=2;d<c;d++)o[d].classList.remove("hide")}else{t.target.parentNode.classList.add("hiding");for(var l=2;l<c;l++)o[l].classList.add("hide")}}},sortYTDate:function(){var t=this;(window.scrollTo(0,0),this.info.list)&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-links")),n=e.length,c=function(i){var n=Object(r.a)(e[i].children).sort((function(a,b){var t=a.dataset.date?new Date(a.dataset.date):new Date("Jan 01 1900"),e=b.dataset.date?new Date(b.dataset.date):new Date("Jan 01 1900");return t<e?1:t>e?-1:0}));t.ytDateSort%2==0&&(o=n.reverse(),n=o),n.forEach((function(t){e[i].appendChild(t)}))},i=0;i<n;i++)c(i)}();this.info.subSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-subsection-links")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.dataset.date?new Date(a.dataset.date):new Date("Jan 01 1900"),e=b.dataset.date?new Date(b.dataset.date):new Date("Jan 01 1900");return t<e?1:t>e?-1:0}));t.ytDateSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();if(this.info.roganList){var e=document.getElementsByClassName("rogan-list-wrapper")[0],n=Object(r.a)(e.children).sort((function(a,b){var t=a.dataset.date?new Date(a.dataset.date):new Date("Jan 01 1900"),e=b.dataset.date?new Date(b.dataset.date):new Date("Jan 01 1900");return t<e?1:t>e?-1:0}));if(this.ytDateSort%2==0){var o=n.reverse();n=o}n.forEach((function(t){e.appendChild(t)}))}this.info.roganSubSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("rogan-sublist-items")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.dataset.date?new Date(a.dataset.date):new Date("Jan 01 1900"),e=b.dataset.date?new Date(b.dataset.date):new Date("Jan 01 1900");return t<e?1:t>e?-1:0}));t.ytDateSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();this.ytDateSort++},sortYTTitle:function(){var t=this;(window.scrollTo(0,0),this.info.list)&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-links")),n=e.length,c=function(i){var n=Object(r.a)(e[i].children).sort((function(a,b){var t=a.children[1].textContent.replace(/[^a-z0-9]/gi,""),e=b.children[1].textContent.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));t.ytTitleSort%2==0&&(o=n.reverse(),n=o),n.forEach((function(t){e[i].appendChild(t)}))},i=0;i<n;i++)c(i)}();this.info.subSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-subsection-links")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.children[1].textContent.replace(/[^a-z0-9]/gi,""),e=b.children[1].textContent.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));t.ytTitleSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();if(this.info.roganList){var e=document.getElementsByClassName("rogan-list-wrapper")[0],n=Object(r.a)(e.children).sort((function(a,b){var t=a.children[0].textContent.replace(/[^a-z0-9]/gi,""),e=b.children[0].textContent.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));if(this.ytTitleSort%2==0){var o=n.reverse();n=o}n.forEach((function(t){e.appendChild(t)}))}this.info.roganSubSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("rogan-sublist-items")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.children[1].textContent.replace(/[^a-z0-9]/gi,""),e=b.children[1].textContent.replace(/[^a-z0-9]/gi,"");return t<e?1:t>e?-1:0}));t.ytTitleSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();this.ytTitleSort++},sortYTRating:function(){var t=this;(window.scrollTo(0,0),this.info.list)&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-links")),n=e.length,c=function(i){var n=Object(r.a)(e[i].children).sort((function(a,b){var t=a.dataset.rating?parseFloat(a.dataset.rating):0,e=b.dataset.rating?parseFloat(b.dataset.rating):0;return t<e?1:t>e?-1:0}));t.ytRatingSort%2==0&&(o=n.reverse(),n=o),n.forEach((function(t){e[i].appendChild(t)}))},i=0;i<n;i++)c(i)}();this.info.subSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-subsection-links")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.dataset.rating?parseFloat(a.dataset.rating):0,e=b.dataset.rating?parseFloat(b.dataset.rating):0;return t<e?1:t>e?-1:0}));t.ytRatingSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();if(this.info.roganList){var e=document.getElementsByClassName("rogan-list-wrapper")[0],n=Object(r.a)(e.children).sort((function(a,b){var t=a.dataset.rating?parseFloat(a.dataset.rating):0,e=b.dataset.rating?parseFloat(b.dataset.rating):0;return t<e?1:t>e?-1:0}));if(this.ytRatingSort%2==0){var o=n.reverse();n=o}n.forEach((function(t){e.appendChild(t)}))}this.info.roganSubSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("rogan-sublist-items")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.dataset.rating?parseFloat(a.dataset.rating):0,e=b.dataset.rating?parseFloat(b.dataset.rating):0;return t<e?1:t>e?-1:0}));t.ytRatingSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();this.ytRatingSort++},sortYTDuration:function(){var t=this;(window.scrollTo(0,0),this.info.list)&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-links")),n=e.length,c=function(i){var n=Object(r.a)(e[i].children).sort((function(a,b){var t=a.dataset.duration?parseInt(a.dataset.duration):0,e=b.dataset.duration?parseInt(b.dataset.duration):0;return t<e?1:t>e?-1:0}));t.ytDurationSort%2==0&&(o=n.reverse(),n=o),n.forEach((function(t){e[i].appendChild(t)}))},i=0;i<n;i++)c(i)}();this.info.subSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("youtube-item-subsection-links")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.dataset.duration?parseInt(a.dataset.duration):0,e=b.dataset.duration?parseInt(b.dataset.duration):0;return t<e?1:t>e?-1:0}));t.ytDurationSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();if(this.info.roganList){var e=document.getElementsByClassName("rogan-list-wrapper")[0],n=Object(r.a)(e.children).sort((function(a,b){var t=a.dataset.duration?parseInt(a.dataset.duration):0,e=b.dataset.duration?parseInt(b.dataset.duration):0;return t<e?1:t>e?-1:0}));if(this.ytDurationSort%2==0){var o=n.reverse();n=o}n.forEach((function(t){e.appendChild(t)}))}this.info.roganSubSections&&function(){for(var e=Object(r.a)(document.getElementsByClassName("rogan-sublist-items")),n=e.length,c=function(n){var c=Object(r.a)(e[n].children).sort((function(a,b){var t=a.dataset.duration?parseInt(a.dataset.duration):0,e=b.dataset.duration?parseInt(b.dataset.duration):0;return t<e?1:t>e?-1:0}));t.ytDurationSort%2==0&&(o=c.reverse(),c=o),c.forEach((function(t){e[n].appendChild(t)}))},d=0;d<n;d++)c(d)}();this.ytDurationSort++}}},m=(n(266),n(14)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.found?n("div",{staticClass:"section-wrapper"},[n("PageHeader",{attrs:{slug:"media",title:t.parent+" / "+t.info.title,sortable:"true",isYoutube:t.isYoutube}}),t._v(" "),n("div",{staticClass:"yt-media-container"},[n("div",{staticClass:"sorter hide",attrs:{id:"youtube-sort-wrapper"}},[n("div",{staticClass:"youtube-sort"},[n("p",{staticClass:"youtube-sort-title"},[t._v("Sort by: ")]),t._v(" "),n("p",{staticClass:"youtube-sort-item",domProps:{textContent:t._s("Title")},on:{click:t.sortYTTitle}}),t._v(" "),n("p",{staticClass:"youtube-sort-item",domProps:{textContent:t._s("Date")},on:{click:t.sortYTDate}}),t._v(" "),n("p",{staticClass:"youtube-sort-item",domProps:{textContent:t._s("Rating")},on:{click:t.sortYTRating}}),t._v(" "),n("p",{staticClass:"youtube-sort-item",domProps:{textContent:t._s("Duration")},on:{click:t.sortYTDuration}})])]),t._v(" "),n("MediaItem",{attrs:{info:t.info,isYoutube:t.isYoutube,channel:!0}})],1),t._v(" "),n("div",{staticClass:"adjacent"},[null!==t.prev?n("nuxt-link",{staticClass:"adjacent-link prev",attrs:{to:"/media/youtube/"+t.prev.slug}},[n("img",{staticClass:"adjacent-link-icon",attrs:{src:"/icons/arrow.svg",alt:""}}),t._v(" "),n("p",{staticClass:"adjacent-link-title",domProps:{textContent:t._s(t.prev.title)}})]):t._e(),t._v(" "),null==t.prev?n("div",{staticClass:"adjacent-link prev spacer"}):t._e(),t._v(" "),null!==t.next?n("nuxt-link",{staticClass:"adjacent-link next",attrs:{to:"/media/youtube/"+t.next.slug}},[n("p",{staticClass:"adjacent-link-title",domProps:{textContent:t._s(t.next.title)}}),t._v(" "),n("img",{staticClass:"adjacent-link-icon",attrs:{src:"/icons/arrow.svg",alt:""}})]):t._e(),t._v(" "),null==t.next?n("div",{staticClass:"adjacent-link next spacer"}):t._e()],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);