(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(48),n(54);var o=n(19),r=Object(o.c)();function c(){var t=Object(o.e)().route;return{activeItem:r,updateActiveItem:function(t){r.value=t},initActiveItem:function(){var e,n;r.value=(null===(n=null===(e=t.value)||void 0===e?void 0:e.hash)||void 0===n?void 0:n.replace("#",""))||"Home"}}}},175:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("406c1289",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("76834c57",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("32f7558a",content,!0,{sourceMap:!1})},178:function(t,e,n){t.exports=n.p+"fonts/SourceSansPro-Regular.efa76f8.ttf"},179:function(t,e,n){t.exports=n.p+"fonts/SourceSansPro-SemiBold.43cc81b.ttf"},180:function(t,e,n){t.exports=n.p+"fonts/SourceSansPro-Bold.12e6acd.ttf"},181:function(t,e,n){t.exports=n.p+"fonts/SourceSansPro-Black.d286fd5.ttf"},200:function(t,e,n){"use strict";n(284);var o=n(33),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"layout layout--default"},[n("MoleculeNav"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MoleculeNav:n(302).default})},205:function(t,e,n){n(206),n(207),t.exports=n(211)},280:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("7e5e7bdb",content,!0,{sourceMap:!1})},281:function(t,e,n){var o=n(51)(!1);o.push([t.i,'*{font-size:inherit;font-family:inherit}* :after,* :before{box-sizing:border-box;margin:0}body,html{background-color:#fff;font-size:1rem;font-family:"Source Sans Pro",sans-serif;scroll-behavior:smooth;margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}a,button,input,select,textarea{outline:none}h1,h2,h3,h4,h5,h6{margin:0}',""]),t.exports=o},284:function(t,e,n){"use strict";n(175)},285:function(t,e,n){var o=n(51)(!1);o.push([t.i,".layout{margin:0 auto}@media only screen and (min-width:768px){.layout{max-width:calc(100% - 72px)}}@media only screen and (min-width:1280px){.layout{max-width:calc(100% - 192px)}}@media only screen and (min-width:1440px){.layout{max-width:1248px}}",""]),t.exports=o},286:function(t,e,n){"use strict";n(176)},287:function(t,e,n){var o=n(51)(!1);o.push([t.i,".nav{display:grid;display:flex;justify-content:center;grid-gap:36px;gap:36px;padding:36px 0}",""]),t.exports=o},288:function(t,e,n){"use strict";n(177)},289:function(t,e,n){var o=n(51)(!1);o.push([t.i,'.nav-item{position:relative;color:#777;font-weight:600;text-transform:uppercase;text-decoration:none;transition:color .2s cubic-bezier(.7,0,.3,1)}.nav-item:after{content:"";position:absolute;bottom:-4px;left:50%;width:0;height:2px;background-color:#f00025;transition:left .2s cubic-bezier(.7,0,.3,1),width .2s cubic-bezier(.7,0,.3,1)}.nav-item--active,.nav-item:hover{color:#222}.nav-item--active:after{left:0;width:calc(100% + 2px)}',""]),t.exports=o},302:function(t,e,n){"use strict";n.r(e);var o=n(19),r=Object(o.a)({name:"MoleculeNav",setup:function(){}}),c=(n(286),n(33)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("AtomNavItem",{attrs:{title:"Home",to:"/#home"}}),t._v(" "),n("AtomNavItem",{attrs:{title:"Media",to:"/#Media"}}),t._v(" "),n("AtomNavItem",{attrs:{title:"Contact",to:"/#Contact"}}),t._v(" "),n("AtomNavItem",{attrs:{title:"Speeldata",to:"/speeldata/"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AtomNavItem:n(303).default})},303:function(t,e,n){"use strict";n.r(e);var o=n(19),r=n(139),c=Object(o.a)({name:"AtomNavItem",props:{title:{type:String,required:!0},to:{type:String,required:!0}},setup:function(){var t=Object(r.a)();return{activeItem:t.activeItem,updateActiveItem:t.updateActiveItem}}}),l=(n(288),n(33)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.title&&t.activeItem?n("nuxt-link",{class:["nav-item",{"nav-item--active":t.title.toLowerCase()===t.activeItem.toLowerCase()}],attrs:{to:t.to.toLowerCase()},nativeOn:{click:function(e){return t.updateActiveItem(t.title)}}},[t._v(t._s(t.title))]):t._e()}),[],!1,null,null,null);e.default=component.exports},50:function(t,e,n){"use strict";var o=n(19),r=Object(o.a)({setup:function(){Object(o.f)().push("/")}}),c=n(33),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports}},[[205,6,1,7]]]);