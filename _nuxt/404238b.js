(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4],{305:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("c7781792",content,!0,{sourceMap:!1})},306:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("b8a83258",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n(305)},308:function(t,e,n){var o=n(51)(!1);o.push([t.i,"",""]),t.exports=o},309:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("7492109c",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n.r(e);var o=n(19),c=Object(o.a)({name:"AtomButton",props:{title:{type:String,required:!0},to:{type:String,required:!0}},setup:function(){}}),r=(n(307),n(33)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.title?n("nuxt-link",{staticClass:"button",attrs:{to:t.to.toLowerCase()}},[t._v(t._s(t.title))]):t._e()}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n(306)},312:function(t,e,n){var o=n(51)(!1);o.push([t.i,"",""]),t.exports=o},313:function(t,e,n){"use strict";n.r(e);var o=n(19),c=Object(o.a)({props:{content:{type:Object,required:!0}}}),r=(n(311),n(33)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("h1",{staticClass:"block__title"},[t._v(t._s(t.content.title))]),t._v(" "),n("h2",{staticClass:"block__subtitle"},[t._v(t._s(t.content.subtitle))]),t._v(" "),n("AtomButton",{staticClass:"block__button",attrs:{title:t.content.button.text,to:t.content.button.to,icon:"chevron"}}),t._v(" "),n("iframe",{attrs:{src:t.content.video,frameborder:"0"}}),t._v(" "),n("div",[t._v(t._s(t.content))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AtomButton:n(310).default})},314:function(t,e,n){"use strict";n(309)},315:function(t,e,n){var o=n(51)(!1);o.push([t.i,".blocks{display:grid;grid-gap:36px 0;gap:36px 0;margin-bottom:36px}.blocks .block{background:#f00025;color:#fff;padding:16px;margin:0 16px}@media only screen and (min-width:768px){.blocks .block{padding:96px}}@media only screen and (min-width:1280px){.blocks .block{padding:120px}}",""]),t.exports=o},316:function(t,e,n){"use strict";n.r(e);var o=n(19),c=Object(o.a)({props:{blocks:{type:Object,required:!0}}}),r=(n(314),n(33)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blocks"},[t._l(t.blocks.content,(function(e,o){return["head"===e.block?n("OrganismBlockHeader",{key:"block-"+o,staticClass:"block",attrs:{content:e}}):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OrganismBlockHeader:n(313).default})},317:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(10),c=(n(53),n(28),n(19));function r(){var t=Object(c.e)(),e=t.$content,n=t.route,r=Object(c.f)(),content=Object(c.c)(),l=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.value.params.pathMatch||n.value.name||"",t.next=3,e(o).fetch().catch((function(){return r.push("/")}));case 3:content.value=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l(),{content:content,getJson:l}}},318:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("17d38798",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";n(318)},321:function(t,e,n){var o=n(51)(!1);o.push([t.i,".container{display:block}",""]),t.exports=o},332:function(t,e,n){"use strict";n.r(e);var o=n(19),c=n(139),r=n(317),l=Object(o.a)({name:"PageSpeeldata",setup:function(){var content=Object(r.a)().content;return Object(c.a)().activeItem.value="Speeldata",{content:content}}}),f=(n(320),n(33)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.content?n("div",{staticClass:"container"},[n("OrganismBlockTemplates",{attrs:{blocks:t.content}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OrganismBlockTemplates:n(316).default})}}]);