(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1c76b9ba"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"6f68d6ec"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1b2f":function(e,t,n){"use strict";var r=n("47d2"),o=n.n(r);o.a},"47d2":function(e,t,n){},"7faf":function(e,t,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("cube-tip",{ref:"tip2",style:e.tipStyle,attrs:{direction:e.direction},on:{close:e.close,click:e.clickHandler}},[n("div",[e._v("Awesome!")])]),n("router-view"),n("cube-tab-bar",{attrs:{"show-slider":"",inline:"",id:"nav"},on:{click:e.clickHandler},model:{value:e.selectedLabelSlots,callback:function(t){e.selectedLabelSlots=t},expression:"selectedLabelSlots"}},e._l(e.tabs,function(t,r){return n("cube-tab",{key:r,attrs:{label:t.label}},[n("i",{class:t.icon,attrs:{slot:"icon"},slot:"icon"}),n("router-link",{attrs:{to:t.to}},[e._v("\n        "+e._s(t.label)+"\n      ")])],1)}),1)],1)},a=[],c=n("bd86"),i=n("f838"),u={data:function(){return{appVersion:"",webVersion:"",selectedLabelSlots:"首页",tabs:[{label:"首页",icon:"cubeic-home",to:"/"},{label:"关于",icon:"cubeic-like",to:"/about"},{label:"Vip",icon:"cubeic-vip",to:"/vip"},{label:"Me",icon:"cubeic-person",to:"/me"}],direction:"",tipStyle:""}},created:function(){getDoUpdate()},methods:Object(c["a"])({getDoUpdate:function(){Object(i["b"])()},close:function(){console.log("click close button")},clickHandler:function(){console.log("click tip area")}},"clickHandler",function(e){console.log(e)})},l=u,s=(n("7faf"),n("2877")),f=Object(s["a"])(l,o,a,!1,null,null,null),d=f.exports,p=n("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},v=[],h=n("d225"),m=n("308d"),g=n("6bb5"),_=n("4e2b"),y=n("9ab4"),j=n("60a3"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    测试测试测试测试测试测试测试测试测试测试测试测试\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],O=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(_["a"])(t,e),t}(j["c"]);y["a"]([Object(j["b"])()],O.prototype,"msg",void 0),O=y["a"]([j["a"]],O);var S=O,E=S,x=(n("1b2f"),Object(s["a"])(E,k,w,!1,null,"29b73256",null)),C=x.exports,A=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(_["a"])(t,e),t}(j["c"]);A=y["a"]([Object(j["a"])({components:{HelloWorld:C}})],A);var T=A,L=T,P=Object(s["a"])(L,b,v,!1,null,null,null),I=P.exports;r["a"].use(p["a"]);var V=new p["a"]({base:"",routes:[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/vip",name:"vip",component:function(){return n.e("about").then(n.bind(null,"e690"))}},{path:"/me",name:"me",component:function(){return n.e("about").then(n.bind(null,"0a99"))}}]}),H=n("2f62");r["a"].use(H["a"]);var $=new H["a"].Store({state:{},mutations:{},actions:{}}),N=n("cadd");r["a"].use(N["a"]),r["a"].config.productionTip=!1,document.addEventListener("deviceready",function(){new r["a"]({router:V,store:$,render:function(e){return e(d)}}).$mount("#app")},!1)},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f838:function(e,t,n){"use strict";function r(){var e=window.chcp;e.fetchUpdate(function(t,n){t&&t.code,e.getVersionInfo(function(e,t){n.currentWebVersion,console.log("服务器应用时间版本: "+n.readyToInstallWebVersion),console.log("当前应用时间版本： "+n.currentWebVersion),console.log("当前应用version name: "+n.appVersion)})})}function o(){function e(e){var t=document.getElementById("myImage");t.src=e}function t(e){alert("Failed because: "+e)}navigator.camera.getPicture(e,t,{quality:50,destinationType:Camera.DestinationType.FILE_URI,sourceType:0})}function a(){var e=window.ImagePicker;e.getPictures(function(e){alert(JSON.stringify(e))},function(e){alert(e)},{maximumImagesCount:6,width:1920,height:1440,quality:100})}function c(){var e=this;cordova.plugins.barcodeScanner.scan(function(t){e.codeinfo="We got a barcode\nResult: "+t.text+"\nFormat: "+t.format+"\nCancelled: "+t.cancelled},function(e){alert("Scanning failed: "+e)})}function i(e){navigator.vibrate(500);var t=this;function n(e){t.msg="Latitude:\t"+e.coords.latitude+"\nLongitude:\t"+e.coords.longitude+"\nAltitude:\t"+e.coords.altitude+"\nAccuracy:\t"+e.coords.accuracy+"\nAltitude Accuracy:\t"+e.coords.altitudeAccuracy+"\nHeading:\t"+e.coords.heading+"\nSpeed:\t"+e.coords.speed+"\nTimestamp:\t"+e.timestamp+"\n"}function r(e){t.msg="code: "+e.code+"\nmessage: "+e.message+"\n"}navigator.geolocation.getCurrentPosition(n,r,{maximumAge:3e4,timeout:3e4,enableHighAccuracy:e})}n.d(t,"b",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return i})}});