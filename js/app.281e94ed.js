(function(e){function t(t){for(var o,n,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},n={app:0},r={app:0},s=[];function i(e){return l.p+"js/"+({about:"about",projects:"projects",services:"services"}[e]||e)+"."+{about:"a20c20d9",projects:"cabe24e5",services:"d1da5765"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1,projects:1,services:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var o="css/"+({about:"about",projects:"projects",services:"services"}[e]||e)+"."+{about:"e6bee3a7",projects:"544903b2",services:"170491a6"}[e]+".css",r=l.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===o||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete n[e],m.parentNode.removeChild(m),a(s)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,a){o=r[e]=[t,a]}));t.push(o[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0382":function(e,t,a){},"099d":function(e,t,a){e.exports=a.p+"img/screens2.c41c7b4b.png"},"4b7f":function(e,t,a){e.exports=a.p+"img/logo_text.5f0b8ab0.png"},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[e.$vuetify.breakpoint.smAndDown?a("div",{staticClass:"ham-overlay"}):e._e(),e.$vuetify.breakpoint.smAndDown?a("div",{staticClass:"ham-container col-flex align-center",class:e.drawerState&&"active",on:{click:function(t){e.drawerState=!e.drawerState}}},[a("div"),a("div"),a("div")]):e._e(),a("NavDrawer",{attrs:{state:e.drawerState,app:""},on:{onChange:function(t){e.drawerState=t}}}),a("v-content",{attrs:{app:""}},[a("v-layout",{staticClass:"main-wrapper"},[a("v-flex",{staticClass:"flex-grow-1 col-flex"},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)],1)],1),a("v-footer",{staticClass:"black white--text justify-center",staticStyle:{"z-index":"10000000"}},[e._v(" 2020 © Copyrights Devorbis - All rights reserved ")])],1)},r=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-navigation-drawer",{staticStyle:{"z-index":"99999999"},attrs:{permanent:e.$vuetify.breakpoint.mdAndUp,app:"",width:"175"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-flex",{staticClass:"indigo-dark h-100 relative"},[o("div",{staticClass:"col-flex pa-5 pt-10 align-center"},[o("img",{staticClass:"pointer",attrs:{width:"120",src:a("4b7f")},on:{click:function(t){return e.$router.push("/")}}}),o("v-layout",{staticClass:"menubar mt-8",attrs:{column:""}},e._l(e.menuItems,(function(t,a){return o("div",{key:a,staticClass:"menu-item text-center my-5 pointer",class:e.$route.path===t.link&&"active",on:{click:function(a){return e.$router.push(t.link)}}},[o("div",{staticClass:"menu-icon-container row-flex justify-center align-center"},[o("v-icon",{staticClass:"menu-icon",attrs:{color:"white"}},[e._v(e._s(t.icon))])],1),o("h4",{staticClass:"white--text weight4"},[e._v(e._s(t.name))])])})),0)],1),o("div",{staticClass:"cube-container"},e._l(15,(function(e){return o("div",{key:e,class:"cube-x cube-x-"+e},[o("div",{staticClass:"cube-y"},[o("div",{staticClass:"cube white--text"})])])})),0)])],1)},i=[],l={name:"nav-drawer",props:["state"],data:()=>({drawer:null,menuItems:[{name:"Home",icon:"mdi-home",link:"/"},{name:"About Us",icon:"mdi-information-outline",link:"/about"},{name:"Services",icon:"mdi-face-agent",link:"/services"},{name:"Projects",icon:"mdi-view-list",link:"/projects"},{name:"Careers",icon:"mdi-briefcase-outline",link:"/careers"},{name:"Contact Us",icon:"mdi-card-account-phone",link:"/contact"}]}),watch:{state:function(e){this.drawer=e},drawer:function(e){this.$emit("onChange",e)}}},c=l,u=a("2877"),d=a("6544"),m=a.n(d),p=a("0e8f"),f=a("132d"),v=a("a722"),h=a("f774"),b=Object(u["a"])(c,s,i,!1,null,null,null),g=b.exports;m()(b,{VFlex:p["a"],VIcon:f["a"],VLayout:v["a"],VNavigationDrawer:h["a"]});a("b383");var y={name:"App",metaInfo:{title:"Devorbis | Software Development Agency"},components:{NavDrawer:g},data:()=>({activeItem:1,drawerState:!1})},w=y,x=(a("5c0b"),a("7496")),C=a("a75b"),k=a("553a"),_=Object(u["a"])(w,n,r,!1,null,null,null),j=_.exports;m()(_,{VApp:x["a"],VContent:C["a"],VFlex:p["a"],VFooter:k["a"],VLayout:v["a"]});var $=a("8c4f"),S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-container home-container px-sm-10 pa-sm-10"},[o("div",{staticClass:"overlay"}),o("v-container",{staticClass:"minH-full row-flex align-center",staticStyle:{"z-index":"5",position:"relative"}},[o("v-layout",{attrs:{wrap:e.$vuetify.breakpoint.smAndDown}},[o("div",{staticClass:"white--text"},[o("h1",{staticClass:"mt-5 mt-sm-0 dname",attrs:{"data-aos":"fade-down","aos-duration":"300","data-aos-delay":"1"}},[e._v("Welcome to "),o("br"),e._v("Dev"),o("span",{staticClass:"color-primary"},[e._v("o")]),e._v("rbis")]),o("h2",{staticClass:"mb-2",attrs:{"data-aos":"fade-down","data-aos-duration":"300","data-aos-delay":"300"}},[e._v("We keep it simple for you")]),o("p",{staticClass:"mb-7 text-justify",attrs:{"data-aos":"fade-down","aos-duration":"300","data-aos-delay":"600"}},[e._v(" We cover digital solutions for all screen sizes. Web apps, mobile apps, kiosk and desktop apps. From effective designing to intelligent architecture and from efficient coding to robust testing, we perform all operations to provide you best quality. We work hard to deliver a product which will boost your idea or business to maximum. ")]),o("div",{staticStyle:{position:"absolute","max-height":"0px",opacity:"0"}},[o("h1",{staticClass:"mt-5 mt-sm-0 dname",attrs:{"data-aos":"fade-down","aos-duration":"300","data-aos-delay":"1"}},[e._v("Welcome to "),o("br"),e._v("Dev"),o("span",{staticClass:"color-primary"},[e._v("o")]),e._v("rbis")]),o("h2",{staticClass:"mb-2",attrs:{"data-aos":"fade-down","data-aos-duration":"300","data-aos-delay":"300"}},[e._v("We keep it simple for you")]),o("p",{staticClass:"mb-7 text-justify",attrs:{"data-aos":"fade-down","aos-duration":"300","data-aos-delay":"600"}},[e._v(" We cover digital solutions for all screen sizes. Web apps, mobile apps, kiosk and desktop apps. From effective designing to intelligent architecture and from efficient coding to robust testing, we perform all operations to provide you best quality. We work hard to deliver a product which will boost your idea or business to maximum. ")])]),o("div",{staticClass:"mt-3 row-flex",attrs:{"data-aos":"slide-left","data-aos-duration":"500"}},[o("span",{staticClass:"hvr-ripple-out mb-0"},[o("v-btn",{attrs:{small:e.$vuetify.breakpoint.xs},on:{click:function(t){return e.$router.push("/services")}}},[o("span",{staticClass:"primary--text"},[e._v("Our Services")])])],1),o("span",{staticClass:"hvr-ripple-out ml-2"},[o("QuoteForm")],1)])]),o("v-flex",{staticClass:"pa-5 pl-0 pl-sm-5 mt-5 mt-sm-0"},[o("v-img",{staticStyle:{width:"450px"},attrs:{src:a("099d")}})],1)],1)],1)],1)},V=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[a("v-btn",e._g({attrs:{color:"primary",small:e.$vuetify.breakpoint.xs}},o),[e._v(" Request a Quote ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"d-flex justify-space-between"},[a("span",{staticClass:"primary--text"},[e._v("Request a Quote")]),a("v-icon",{on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close")])],1),a("v-form",{ref:"form",staticClass:"pa-4",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{placeholder:"Full Name",outlined:"",dense:"",rules:[function(e){return!!e||"required"}],"validate-on-blur":"",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("v-text-field",{attrs:{placeholder:"Email",outlined:"",dense:"",required:"","validate-on-blur":"",rules:[function(e){return!!e||"required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Email must be valid"}],type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),a("v-text-field",{attrs:{placeholder:"Phone (optional)",outlined:"",dense:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),a("v-text-field",{attrs:{placeholder:"Company/Organization (optional)",outlined:"",dense:""},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}}),a("v-textarea",{attrs:{placeholder:"Let us know what you are looking for",outlined:"",dense:"",rules:[function(e){return!!e||"required"}],"validate-on-blur":"",required:""},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),a("v-card-actions",[a("v-btn",{staticClass:"ml-auto",attrs:{loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)},E=[],O=a("bc3a"),A=a.n(O);const D="https://devorbis-api.herokuapp.com/api/v1";function F(e,t){return new Promise((function(a,o){A.a.post(D+e,t).then(e=>{a(e.data)}).catch(e=>{o(e)})}))}var P={post:F},T={name:"quote-form",data:()=>({dialog:!1,valid:null,form:{},loading:!1}),methods:{submit(){gtag("event","quote_requested",{...this.form}),this.$refs.form.validate()&&(this.loading=!0,P.post("/quote",this.form).then(e=>{this.dialog=!1,this.$toasted.success("Request sent successfully!",{duration:5e3})}).catch(e=>{this.$toasted.error("oops! something went wrong",{duration:5e3})}).finally(()=>this.loading=!1))}}},W=T,L=a("8336"),N=a("b0af"),I=a("99d9"),z=a("169a"),B=a("4bd4"),H=a("8654"),M=a("a844"),U=Object(u["a"])(W,q,E,!1,null,null,null),Q=U.exports;m()(U,{VBtn:L["a"],VCard:N["a"],VCardActions:I["a"],VCardTitle:I["c"],VDialog:z["a"],VForm:B["a"],VIcon:f["a"],VTextField:H["a"],VTextarea:M["a"]});var R={name:"Home",components:{QuoteForm:Q}},J=R,G=(a("6506"),a("a523")),K=a("adda"),X=Object(u["a"])(J,S,V,!1,null,"c18002ba",null),Y=X.exports;m()(X,{VBtn:L["a"],VContainer:G["a"],VFlex:p["a"],VImg:K["a"],VLayout:v["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container contact-container py-5 pa-sm-10"},[a("v-container",{staticClass:"h-100 white--text"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade-down","data-aos-duration":"500"}},[a("h1",{staticClass:"size-48 text-center "},[e._v("Get in touch with us!")]),a("p",{staticClass:"mb-5 mx-auto",staticStyle:{"max-width":"550px"}},[e._v(" Email us with any questions or inqueries or call "),a("span",{staticStyle:{"white-space":"pre"}},[e._v("+92 333 5349693")]),e._v(". We would be happy to answer your questions and set up a meeting with you. We always love to hear from you. ")])]),a("div",{staticClass:"mx-auto",staticStyle:{"max-width":"800px"},attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[a("v-form",{ref:"form",staticClass:"pa-10 white",staticStyle:{"border-radius":"4px"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{placeholder:"Full Name",outlined:"",dense:"",rules:[function(e){return!!e||"required"}],"validate-on-blur":"",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("v-text-field",{attrs:{placeholder:"Email",outlined:"",dense:"",required:"","validate-on-blur":"",rules:[function(e){return!!e||"required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Email must be valid"}],type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),a("v-textarea",{attrs:{placeholder:"Let us know your queries",outlined:"",dense:"",rules:[function(e){return!!e||"required"}],"no-resize":"","validate-on-blur":"",required:""},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),a("div",{attrs:{align:"center"}},[a("v-btn",{staticClass:"ml-auto",attrs:{loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)])],1)},ee=[],te={name:"contact-us",metaInfo:{title:"Contact Us | Devorbis"},data:()=>({valid:null,form:{},loading:!1}),methods:{submit(){gtag("event","contact_us",{...this.form}),this.$refs.form.validate()&&(this.loading=!0,P.post("/contact",this.form).then(e=>{this.$refs.form.reset(),this.$toasted.success("Message sent successfully!",{duration:5e3})}).catch(e=>{this.$toasted.error("oops! something went wrong",{duration:5e3})}).finally(()=>this.loading=!1))}}},ae=te,oe=Object(u["a"])(ae,Z,ee,!1,null,null,null),ne=oe.exports;m()(oe,{VBtn:L["a"],VContainer:G["a"],VForm:B["a"],VTextField:H["a"],VTextarea:M["a"]}),o["a"].use($["a"]);const re=[{path:"/",name:"Home",component:Y},{path:"/contact",name:"Contact",component:ne},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/services",name:"Services",component:function(){return a.e("services").then(a.bind(null,"f23e"))}},{path:"/projects",name:"Projects",component:function(){return a.e("projects").then(a.bind(null,"acca"))}},{path:"/project-detail/:id",name:"Project Detail",component:function(){return a.e("projects").then(a.bind(null,"cbaf"))}},{path:"/careers",name:"careers",component:function(){return a.e("projects").then(a.bind(null,"850b"))}}],se=$["a"].prototype.push;$["a"].prototype.push=function(e){return se.call(this,e).catch(e=>e)};const ie=new $["a"]({mode:"history",base:"",routes:re});var le=ie,ce=a("2f62");o["a"].use(ce["a"]);var ue=new ce["a"].Store({state:{},mutations:{},actions:{},modules:{}}),de=a("f309");o["a"].use(de["a"]);var me=new de["a"]({}),pe=a("a65d"),fe=a.n(pe),ve=a("58ca");o["a"].config.productionTip=!1,o["a"].use(fe.a),o["a"].use(ve["a"]),new o["a"]({router:le,store:ue,vuetify:me,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},6506:function(e,t,a){"use strict";a("0382")},"9c0c":function(e,t,a){},b383:function(e,t,a){}});
//# sourceMappingURL=app.281e94ed.js.map