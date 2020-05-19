(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{216:function(e,t,o){var content=o(231);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("5323357f",content,!0,{sourceMap:!1})},230:function(e,t,o){"use strict";var n=o(216);o.n(n).a},231:function(e,t,o){(t=o(24)(!1)).push([e.i,".quote{border-radius:.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-direction:column;flex:1;margin:.25rem;text-decoration:none;min-width:100%;-webkit-animation:fadeIn .25s;animation:fadeIn .25s;transition:box-shadow .25s ease-in-out;transition:all .25s ease-in-out;background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow)}.quote:hover{box-shadow:var(--theme-boxShadowHover)}@media (min-width:40em){.quote{min-width:40%}}@media (min-width:40em){.quote.long{min-width:100%}}@media (min-width:40em){.quote.short{min-width:40%}}@media (min-width:60em){.quote.short{min-width:30%}}.quote .quote-text{flex-wrap:wrap;flex:auto;color:var(--theme-black);padding:.75rem;text-indent:.5rem}.quote .quote-footer,.quote .quote-text{display:flex;align-items:center;justify-content:center}.quote .quote-footer{flex-wrap:wrap;width:100%;position:relative;transition:all .25s ease-in-out;box-shadow:var(--theme-boxShadowLight)}.quote .quote-footer:hover{box-shadow:var(--theme-boxShadow)}.quote .quote-footer .quote-author,.quote .quote-footer .quote-source{cursor:pointer;font-size:.9rem;min-width:75%;flex:1;color:var(--theme-black);padding:.25rem;text-align:right;text-decoration:none;transition:all .25s ease-in-out}.quote .quote-footer .quote-copy{height:.75rem;width:.75rem;position:absolute;left:0;z-index:3;transition:all .25s ease-in-out;cursor:pointer;padding:.5rem;opacity:.33;margin:0 .5rem 0 .25rem;box-sizing:content-box;-webkit-filter:var(--theme-icon);filter:var(--theme-icon)}.quote .quote-footer .quote-copy:hover{opacity:.75}.quote .quote-footer.person{padding:0}.quote .quote-footer.person .quote-copy{height:.75rem;width:.75rem;right:0;margin:0;bottom:0;left:auto}",""]),e.exports=t},237:function(e,t,o){var content=o(275);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("315f08e5",content,!0,{sourceMap:!1})},238:function(e,t,o){"use strict";o(108),o(31);var n={name:"Quote",data:function(){return{count:0}},props:{info:{},person:String},methods:{copy:function(){var e=o(152);e("".concat(this.info.quote," - ").concat(this.info.author||this.info.name))},personCopy:function(){o(152)("".concat(this.info.quote," - ").concat(this.person))}},computed:{thisLength:function(){return this.info.quote.length},short:function(){return parseInt(this.info.quote.length)<155},long:function(){return parseInt(this.info.quote.length)>400}}},r=(o(230),o(8)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"quote",class:{long:e.long,short:e.short},attrs:{"data-length":e.thisLength,"data-author":this.info.author||this.info.name}},[n("p",{staticClass:"quote-text",domProps:{textContent:e._s(this.info.quote)}}),e._v(" "),this.info.author||this.info.name?n("div",{staticClass:"quote-footer"},[n("img",{staticClass:"quote-copy",attrs:{src:o(46),alt:"copy"},on:{click:e.copy}}),e._v(" "),n("a",{staticClass:"quote-author",attrs:{href:this.info.link,target:"_blank"},domProps:{textContent:e._s(""+(this.info.author||this.info.name))}})]):e._e(),e._v(" "),this.info.author||this.info.name?e._e():n("div",{staticClass:"quote-footer person"},[n("img",{staticClass:"quote-copy",attrs:{src:o(46),alt:"copy"},on:{click:e.personCopy}})])])}),[],!1,null,null,null);t.a=component.exports},273:function(e){e.exports=JSON.parse('{"notes":["Useful lists of some of the best info, media, tools, and quotes for those who seek to understand and improve this world."],"quotes":[{"quote":"Dare to think for yourself.","author":"Voltaire","link":"https://en.wikiquote.org/wiki/Voltaire"},{"quote":"Don\'t fight forces, use them.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"You are the Hero of your own Story.","author":"Joseph Campbell","link":"https://en.wikiquote.org/wiki/Joseph_Campbell"},{"quote":"We are the ones we have been waiting for.","author":"Unknown","link":"https://en.wikiquote.org/wiki/Main_Page"},{"quote":"An unexamined life is not worth living.","author":"Socrates","link":"https://en.wikiquote.org/wiki/Socrates"},{"quote":"Knowing yourself is the beginning of all wisdom.","author":"Aristotle","link":"https://en.wikiquote.org/wiki/Aristotle"},{"quote":"Every man is guilty of all the good he did not do.","author":"Voltaire","link":"https://en.wikiquote.org/wiki/Voltaire"},{"quote":"In each of us there is another whom we do not know.","author":"Carl Jung","link":"https://en.wikiquote.org/wiki/Carl_Jung"},{"quote":"When injustice becomes law, resistance becomes duty.","author":"Thomas Jefferson","link":"https://en.wikiquote.org/wiki/Thomas_Jefferson"},{"quote":"No problem can stand the assault of sustained thinking.","author":"Voltaire","link":"https://en.wikiquote.org/wiki/Voltaire"},{"quote":"It is better to light a candle than to curse the darkness.","author":"Unknown","link":"https://en.wikiquote.org/wiki/Main_Page"},{"quote":"Fortune is powerless to help one who does not exert himself.","author":"Leonardo Da Vinci","link":"https://en.wikiquote.org/wiki/Leonardo_da_Vinci"},{"quote":"A generation which ignores history has no past — and no future.","author":"Robert A. Heinlein","link":"https://en.wikiquote.org/wiki/Robert_A._Heinlein"},{"quote":"A State can be no better than the citizens of which it is composed.","author":"Voltaire","link":"https://en.wikiquote.org/wiki/Voltaire"},{"quote":"The best contribution one can make to humanity is to improve oneself.","author":"Frank Herbert","link":"https://en.wikiquote.org/wiki/Frank_Herbert"},{"quote":"We shouldn\'t be looking for heroes, we should be looking for good ideas.","author":"Noam Chomsky","link":"https://en.wikiquote.org/wiki/Noam_Chomsky"},{"quote":"Self-education is, I firmly believe, the only kind of education there is.","author":"Isaac Asimov","link":"https://en.wikiquote.org/wiki/Isaac_Asimov"},{"quote":"None are more hopelessly enslaved than those who falsely believe they are free.","author":"Johann Wolfgang von Goethe","link":"https://en.wikiquote.org/wiki/Johann_Wolfgang_von_Goethe"},{"quote":"We are not to expect to be translated from despotism to liberty in a featherbed.","author":"Thomas Jefferson","link":"https://en.wikiquote.org/wiki/Thomas_Jefferson"},{"quote":"Humanity is now experiencing history\'s most difficult evolutionary transformation.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"All persons ought to endeavor to follow what is right, and not what is established.","author":"Aristotle","link":"https://en.wikiquote.org/wiki/Aristotle"},{"quote":"Laws and institutions must go hand in hand with the progress of the human mind.","author":"Thomas Jefferson","link":"https://en.wikiquote.org/wiki/Thomas_Jefferson"},{"quote":"It is not enough to be industrious; so are the ants. What are you industrious about?","author":"Henry David Thoreau","link":"https://en.wikiquote.org/wiki/Henry_David_Thoreau"},{"quote":"Man cannot discover new oceans unless he has the courage to lose sight of the shore.","author":"André Gide","link":"https://en.wikiquote.org/wiki/Andr%C3%A9_Gide"},{"quote":"They are ill discoverers that think there is no land when they can see nothing but sea.","author":"Francis Bacon","link":"https://en.wikiquote.org/wiki/Francis_Bacon"},{"quote":"Without change, something sleeps inside us, and seldom awakens. The sleeper must awaken.","author":"Frank Herbert","link":"https://en.wikiquote.org/wiki/Frank_Herbert"},{"quote":"There are a thousand hacking at the branches of evil to one who is striking at the root.","author":"Henry David Thoreau","link":"https://en.wikiquote.org/wiki/Henry_David_Thoreau"},{"quote":"If a nation expects to be ignorant and free it expects what never was and never will be.","author":"Thomas Jefferson","link":"https://en.wikiquote.org/wiki/Thomas_Jefferson"},{"quote":"Perfection of means and confusion of goals seem — in my opinion — to characterize our age.","author":"Albert Einstein","link":"https://en.wikiquote.org/wiki/Albert_Einstein"},{"quote":"It is not possible to run a course aright when the goal itself has not been rightly placed.","author":"Francis Bacon","link":"https://en.wikiquote.org/wiki/Francis_Bacon"},{"quote":"A new type of thinking is essential if mankind is to survive and move toward higher levels.","author":"Albert Einstein","link":"https://en.wikiquote.org/wiki/Albert_Einstein"},{"quote":"He that will not apply new remedies must expect new evils; for time is the greatest innovator.","author":"Francis Bacon","link":"https://en.wikiquote.org/wiki/Francis_Bacon"},{"quote":"A wrongdoer is often a man who has left something undone, not always one who has done something.","author":"Marcus Aurelius","link":"https://en.wikiquote.org/wiki/Marcus_Aurelius"},{"quote":"Traditional human power structures and their reign of darkness are about to be rendered obsolete.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"There is no comparison between that which is lost by not succeeding and that which is lost by not trying.","author":"Francis Bacon","link":"https://en.wikiquote.org/wiki/Francis_Bacon"},{"quote":"There\'s only one corner of the universe you can be certain of improving, and that\'s your own self.","author":"Aldous Huxley","link":"https://en.wikiquote.org/wiki/Aldous_Huxley"},{"quote":"If we are to achieve things never before accomplished we must employ methods never before attempted.","author":"Francis Bacon","link":"https://en.wikiquote.org/wiki/Francis_Bacon"},{"quote":"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.","author":"Isaac Asimov","link":"https://en.wikiquote.org/wiki/Isaac_Asimov"},{"quote":"Problems that remain persistently insoluble should always be suspected as questions asked in the wrong way.","author":"Alan Watts","link":"https://en.wikiquote.org/wiki/Alan_Watts"},{"quote":"The world is in greater peril from those who tolerate or encourage evil than from those who actually commit it.","author":"Albert Einstein","link":"https://en.wikiquote.org/wiki/Albert_Einstein"},{"quote":"The simple step of a courageous individual is not to take part in the lie. One word of truth outweighs the world.","author":"Aleksandr Solzhenitsyn","link":"https://en.wikiquote.org/wiki/Aleksandr_Solzhenitsyn"},{"quote":"One of the penalties of refusing to participate in politics is that you end up being governed by your inferiors.","author":"Plato","link":"https://en.wikiquote.org/wiki/Plato"},{"quote":"The price of cowardice will only be evil. We shall reap courage and victory only when we dare to make sacrifices.","author":"Aleksandr Solzhenitsyn","link":"https://en.wikiquote.org/wiki/Aleksandr_Solzhenitsyn"},{"quote":"Enlighten the people generally, and tyranny and oppressions of body and mind will vanish like evil spirits at the dawn of day.","author":"Thomas Jefferson","link":"https://en.wikiquote.org/wiki/Thomas_Jefferson"},{"quote":"That men do not learn very much from the lessons of history is the most important of all the lessons that history has to teach.","author":"Aldous Huxley","link":"https://en.wikiquote.org/wiki/Aldous_Huxley"},{"quote":"Technology is both a tool for helping humans and for destroying them. This is the paradox of our times which we\'re compelled to face.","author":"Frank Herbert","link":"https://en.wikiquote.org/wiki/Frank_Herbert"},{"quote":"You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"It is imperative for persons to act in accordance with their nature and develop their latent talents in order to be content and complete.","author":"Aristotle","link":"https://en.wikiquote.org/wiki/Aristotle"},{"quote":"The survival of democracy depends on the ability of large numbers of people to make realistic choices in the light of adequate information.","author":"Aldous Huxley","link":"https://en.wikiquote.org/wiki/Aldous_Huxley"},{"quote":"The evil that is in the world always comes of ignorance, and good intentions may do as much harm as malevolence, if they lack understanding.","author":"Albert Camus","link":"https://en.wikiquote.org/wiki/Albert_Camus"},{"quote":"Whenever we give up, leave behind, and forget too much, there is always the danger that the things we have neglected will return with added force.","author":"Carl Jung","link":"https://en.wikiquote.org/wiki/Carl_Jung"},{"quote":"Social action must be animated by a vision of a future society, and by explicit judgments of value concerning the character of this future society.","author":"Noam Chomsky","link":"https://en.wikiquote.org/wiki/Noam_Chomsky"},{"quote":"As our own species is in the process of proving, one cannot have superior science and inferior morals. The combination is unstable and self-destroying.","author":"Arthur C. Clarke","link":"https://en.wikiquote.org/wiki/Arthur_C._Clarke"},{"quote":"It is essential to release humanity from the false fixations of yesterday, which seem now to bind it to a rationale of action leading only to extinction.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"Begin doing what you want to do now. We are not living in eternity. We have only this moment, sparkling like a star in our hand--and melting like a snowflake.","author":"Francis Bacon","link":"https://en.wikiquote.org/wiki/Francis_Bacon"},{"quote":"Is the system going to flatten you out and deny you your humanity, or are you going to be able to make use of the system to the attainment of human purposes?","author":"Joseph Campbell","link":"https://en.wikiquote.org/wiki/Joseph_Campbell"},{"quote":"Ultimately everything depends on the quality of the individual, but our fatally short-sighted age thinks only in terms of large numbers and mass organizations.","author":"Carl Jung","link":"https://en.wikiquote.org/wiki/Carl_Jung"},{"quote":"By far the greatest obstacle to the progress of science and to the undertaking of new tasks and provinces therein is found in this — that men despair and think things impossible.","author":"Francis Bacon","link":"https://en.wikiquote.org/wiki/Francis_Bacon"},{"quote":"If we have learned one thing from the history of invention and discovery, it is that, in the long run — and often in the short one — the most daring prophecies seem laughably conservative.","author":"Arthur C. Clarke","link":"https://en.wikiquote.org/wiki/Arthur_C._Clarke"},{"quote":"Universal peace as a result of cumulative effort through centuries past might come into existence quickly not unlike a crystal that suddenly forms in a solution which has been slowly prepared.","author":"Nikola Tesla","link":"https://en.wikiquote.org/wiki/Nikola_Tesla"},{"quote":"There is an inherently minimum set of essential concepts and current information, cognizance of which could lead to our operating our planet Earth to the lasting satisfaction and health of all humanity.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"The greatest good we can do our country is to heal it’s party divisions and make them one people. I do not speak of their leaders who are incurable, but of the honest and well-intentioned body of the people.","author":"Thomas Jefferson","link":"https://en.wikiquote.org/wiki/Thomas_Jefferson"},{"quote":"Quite clearly, our task is predominantly metaphysical, for it is how to get all of humanity to educate itself swiftly enough to generate spontaneous social behaviors that will avoid extinction.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"You aren\'t supposed to learn that dedicated, committed effort can bring about significant changes of consciousness and understanding. That\'s a very dangerous idea, and therefore it\'s been wiped out of history.","author":"Noam Chomsky","link":"https://en.wikiquote.org/wiki/Noam_Chomsky"},{"quote":"I don\'t think we\'re smart enough to design, in any detail what a perfectly just and free society would be like. I think we can give some guidelines and more significant, we can ask how we can progress in that direction.","author":"Noam Chomsky","link":"https://en.wikiquote.org/wiki/Noam_Chomsky"},{"quote":"Each one of us has something to contribute. This really depends on each one doing their own thinking, but not following any kind of rule that I can give out, any command. We\'re all on the frontier, we\'re all in a great mystery.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"It is now highly feasible to take care of everybody on Earth at a higher standard of living than any have ever known. It no longer has to be you or me. Selfishness is unnecessary and henceforth unrationalizable as mandated by survival.","author":"Bucky Fuller","link":"https://en.wikiquote.org/wiki/Buckminster_Fuller"},{"quote":"If you want to change the world, who do you begin with, yourself or others? I believe if we begin with ourselves and do the things that we need to do and become the best person we can be, we have a much better chance of changing the world for the better.","author":"Aleksandr Solzhenitsyn","link":"https://en.wikiquote.org/wiki/Aleksandr_Solzhenitsyn"},{"quote":"Did you ever feel as though you had something inside you that was only waiting for you to give it a chance to come out? Some sort of extra power that you aren\'t using - you know, like all the water that goes down the falls instead of through the turbines?","author":"Aldous Huxley","link":"https://en.wikiquote.org/wiki/Aldous_Huxley"},{"quote":"Revolution doesn\'t have to do with smashing something; it has to do with bringing something forth. If you spend all your time thinking about that which you are attacking, then you are negatively bound to it. You have to find the zeal in yourself and bring that out.","author":"Joseph Campbell","link":"https://en.wikiquote.org/wiki/Joseph_Campbell"},{"quote":"There is oppression that shouldn\'t exist. There is a struggle for freedom all the time. There are very serious dangers: the species may be heading toward extinction. I can\'t see how anybody can fail to have an interest in trying to help people become more engaged in thinking about these problems and doing something about them.","author":"Noam Chomsky","link":"https://en.wikiquote.org/wiki/Noam_Chomsky"}]}')},274:function(e,t,o){"use strict";var n=o(237);o.n(n).a},275:function(e,t,o){(t=o(24)(!1)).push([e.i,"#wrapper{margin:2.5rem auto 0;-webkit-animation:fadeIn .2s ease-in-out;animation:fadeIn .2s ease-in-out;max-width:90rem;min-height:100vh;color:#fff}#wrapper #home-container{background:var(--theme-whiteBG);transition:all .25s ease-in-out;border-radius:.5rem}#wrapper #home-container #home-container-title{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin:2rem auto 1rem;transition:margin .3s}@media (min-width:20em){#wrapper #home-container #home-container-title{margin:3rem auto 2rem}}#wrapper #home-container #home-container-title:hover #home-divider{width:100%}#wrapper #home-container #home-container-title #home-title,#wrapper #home-container #home-container-title #home-title #hyphen{font-size:2.5rem;width:100%;color:var(--theme-black);margin:3rem auto;transition:all .25s ease-in-out;text-align:center;letter-spacing:1rem;text-shadow:0 0 .25rem rgba(0,0,0,.25),0 0 .5rem rgba(0,0,0,.25)}@media (min-width:40em){#wrapper #home-container #home-container-title #home-title,#wrapper #home-container #home-container-title #home-title #hyphen{letter-spacing:1.25rem;font-size:5rem;margin:5rem auto}}#wrapper #home-container #home-container-title #home-title #hyphen{opacity:.15}#wrapper #home-container #home-container-info{padding:.5rem;border-radius:.5rem;max-width:40rem;margin:0 auto;color:var(--theme-black);background:var(--theme-itemWhite);box-shadow:var(--theme-boxShadow);transition:all .25s ease-in-out}@media (min-width:40em){#wrapper #home-container #home-container-info{padding:1.5rem}}#wrapper #home-container #home-container-info .home-container-info-item{text-indent:.25rem;padding:.25rem;margin:.25rem auto;line-height:1.5rem;transition:all .3s}@media (min-width:40em){#wrapper #home-container #home-container-info .home-container-info-item{font-size:1.25rem}}#wrapper #home-container #home-container-quotes{border-radius:.5rem;margin-top:2rem;position:relative}#wrapper #home-container #home-container-quotes #home-container-quotes-list{border-radius:.5rem;padding:.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-items:stretch}#wrapper #home-container #home-container-quotes #home-container-quotes-list .home-container-quote{margin:.125rem;flex:1;overflow:hidden;border-radius:.25rem;min-width:100%;transition:all .3s;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;flex-direction:column}@media (min-width:40em){#wrapper #home-container #home-container-quotes #home-container-quotes-list .home-container-quote{min-width:40%}}#wrapper #home-container #home-container-quotes #home-container-quotes-list .home-container-quote .home-container-quote-text{padding:1rem;text-indent:.5rem;flex:auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:center}#wrapper #home-container #home-container-quotes #home-container-quotes-list .home-container-quote .home-container-quote-author{text-decoration:none;font-size:.9rem;align-self:flex-end;padding:.5rem;width:100%;transition:all .3s;text-align:right}#wrapper #home-container #home-container-quotes #home-container-quotes-list .home-container-quote .home-container-quote-author:hover{text-decoration:underline}",""]),e.exports=t},284:function(e,t,o){"use strict";o.r(t);var n=o(238),r=o(273),h={components:{Quote:n.a},data:function(){return{title:"home",data:r}},head:function(){return{title:"cata-list"}}},l=(o(274),o(8)),component=Object(l.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"wrapper"}},[o("div",{attrs:{id:"home-container"}},[e._m(0),e._v(" "),o("div",{attrs:{id:"home-container-info"}},e._l(e.data.notes,(function(t,n){return o("p",{key:"note-"+n,staticClass:"home-container-info-item",domProps:{textContent:e._s(t)}})})),0),e._v(" "),o("div",{attrs:{id:"home-container-quotes"}},[o("div",{attrs:{id:"home-container-quotes-list"}},e._l(e.data.quotes,(function(e,t){return o("Quote",{key:"quote-"+t,attrs:{info:e}})})),1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"home-container-title"}},[t("p",{attrs:{id:"home-title"}},[this._v("cata"),t("span",{attrs:{id:"hyphen"}},[this._v("-")]),this._v("list")])])}],!1,null,null,null);t.default=component.exports}}]);