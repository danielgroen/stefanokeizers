(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3],{295:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("a8e3beca",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n(295)},297:function(t,e,n){var r=n(64)(!1);r.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=r},298:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("76b587de",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n.r(e);var r=n(0),c=Object(r.d)({name:"AtomNavItem",setup:function(){}}),o=(n(296),n(61)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),n("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),n("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n(298)},301:function(t,e,n){var r=n(64)(!1);r.push([t.i,".container{display:block}",""]),t.exports=r},310:function(t,e,n){"use strict";n.r(e);var r=n(99),c=n(10);n(46),n(31);var o=Object(r.a)({name:"Page",setup:function(){var t=function(){var t=Object(r.e)(),e=t.$content,n=t.route,o=Object(r.f)(),content=Object(r.c)(),l=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.value.params.pathMatch||n.value.name||"index",t.next=3,e(r).fetch().catch((function(){return o.push("/")}));case 3:content.value=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l(),{content:content,getJson:l}}();return{content:t.content,getJson:t.getJson}}}),l=(n(300),n(61)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.content?n("div",{staticClass:"container"},[n("div",[n("h1",[t._v(t._s(t.content.title))]),t._v(" "),n("AtomNavItem")],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AtomNavItem:n(299).default})}}]);