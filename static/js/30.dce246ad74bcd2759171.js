webpackJsonp([30],{G57E:function(t,e,i){(t.exports=i("UTlt")(!0)).push([t.i,"\n.wrap[data-v-05c258f6] {\n  max-height: 100vh;\n  background-color: #000000;\n  position: relative;\n}\n.wrap .bottom-btn[data-v-05c258f6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 10rem;\n  height: 1.6rem;\n  background-color: #0b0b0b;\n  padding: 0 0.4rem;\n  position: fixed;\n  bottom: 0;\n}\n.wrap .bottom-btn p[data-v-05c258f6] {\n  font-size: 0.48rem;\n  color: #ffffff;\n  cursor: pointer;\n}","",{version:3,sources:["D:/Vue/palm_h5/src/views/user/personalImage.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,aAAa;EACb,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;CACjB",file:"personalImage.vue",sourcesContent:["\n.wrap[data-v-05c258f6] {\n  max-height: 100vh;\n  background-color: #000000;\n  position: relative;\n}\n.wrap .bottom-btn[data-v-05c258f6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 10rem;\n  height: 1.6rem;\n  background-color: #0b0b0b;\n  padding: 0 0.4rem;\n  position: fixed;\n  bottom: 0;\n}\n.wrap .bottom-btn p[data-v-05c258f6] {\n  font-size: 0.48rem;\n  color: #ffffff;\n  cursor: pointer;\n}"],sourceRoot:""}])},UBpb:function(t,e,i){var a=i("G57E");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("FIqI")("dbc0ef70",a,!0,{})},Vt83:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("lC5x"),n=i.n(a),o=i("J0Oq"),r=i.n(o),h="undefined"!=typeof window,s=h?window:{},c="cropper-hidden",d=s.PointerEvent?"pointerdown":"touchstart mousedown",p=s.PointerEvent?"pointermove":"touchmove mousemove",l=s.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",m=/^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,u=/^data:/,g=/^data:image\/jpeg;base64,/,f=/^(?:img|canvas)$/i,v={viewMode:0,dragMode:"crop",initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},x=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),y=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)},C=Number.isNaN||s.isNaN;function M(t){return"number"==typeof t&&!C(t)}function B(t){return void 0===t}function D(t){return"object"===(void 0===t?"undefined":w(t))&&null!==t}var A=Object.prototype.hasOwnProperty;function k(t){if(!D(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&A.call(i,"isPrototypeOf")}catch(t){return!1}}function E(t){return"function"==typeof t}function W(t,e){if(t&&E(e))if(Array.isArray(t)||M(t.length)){var i=t.length,a=void 0;for(a=0;a<i&&!1!==e.call(t,t[a],a,t);a+=1);}else D(t)&&Object.keys(t).forEach(function(i){e.call(t,t[i],i,t)});return t}var T=Object.assign||function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];return D(t)&&i.length>0&&i.forEach(function(e){D(e)&&Object.keys(e).forEach(function(i){t[i]=e[i]})}),t},N=/\.\d*(?:0|9){12}\d*$/i;function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return N.test(t)?Math.round(t*e)/e:t}var O=/^(?:width|height|left|top|marginLeft|marginTop)$/;function z(t,e){var i=t.style;W(e,function(t,e){O.test(e)&&M(t)&&(t+="px"),i[e]=t})}function L(t,e){if(e)if(M(t.length))W(t,function(t){L(t,e)});else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className=i+" "+e):t.className=e}}function X(t,e){e&&(M(t.length)?W(t,function(t){X(t,e)}):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function R(t,e,i){e&&(M(t.length)?W(t,function(t){R(t,e,i)}):i?L(t,e):X(t,e))}var Y=/([a-z\d])([A-Z])/g;function I(t){return t.replace(Y,"$1-$2").toLowerCase()}function S(t,e){return D(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-"+I(e))}function U(t,e,i){D(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-"+I(e),i)}function j(t,e){if(D(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-"+I(e))}var P=/\s\s*/,q=function(){var t=!1;if(h){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});s.addEventListener("test",i,a),s.removeEventListener("test",i,a)}return t}();function $(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(P).forEach(function(e){if(!q){var o=t.listeners;o&&o[e]&&o[e][i]&&(n=o[e][i],delete o[e][i],0===Object.keys(o[e]).length&&delete o[e],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(e,n,a)})}function _(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(P).forEach(function(e){if(a.once&&!q){var o=t.listeners,r=void 0===o?{}:o;n=function(){for(var o=arguments.length,h=Array(o),s=0;s<o;s++)h[s]=arguments[s];delete r[e][i],t.removeEventListener(e,n,a),i.apply(t,h)},r[e]||(r[e]={}),r[e][i]&&t.removeEventListener(e,r[e][i],a),r[e][i]=n,t.listeners=r}t.addEventListener(e,n,a)})}function F(t,e,i){var a=void 0;return E(Event)&&E(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Q(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var V=s.location,Z=/^(https?:)\/\/([^:/?#]+):?(\d*)/i;function G(t){var e=t.match(Z);return e&&(e[1]!==V.protocol||e[2]!==V.hostname||e[3]!==V.port)}function J(t){var e="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+e}function K(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];M(n)&&0!==n&&r.push("translateX("+n+"px)"),M(o)&&0!==o&&r.push("translateY("+o+"px)"),M(e)&&0!==e&&r.push("rotate("+e+"deg)"),M(i)&&1!==i&&r.push("scaleX("+i+")"),M(a)&&1!==a&&r.push("scaleY("+a+")");var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function tt(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:T({startX:i,startY:a},n)}var et=Number.isFinite||s.isFinite;function it(t){var e=t.aspectRatio,i=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=function(t){return et(t)&&t>0};if(o(a)&&o(i)){var r=i*e;"contain"===n&&r>a||"cover"===n&&r<a?i=a/e:a=i*e}else o(a)?i=a/e:o(i)&&(a=i*e);return{width:a,height:i}}var at=String.fromCharCode;var nt=/^data:.*,/;function ot(t){var e=new DataView(t),i=void 0,a=void 0,n=void 0,o=void 0;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var r=e.byteLength,h=2;h<r;){if(255===e.getUint8(h)&&225===e.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===function(t,e,i){var a="",n=void 0;for(i+=e,n=e;n<i;n+=1)a+=at(t.getUint8(n));return a}(e,n+4,4)){var c=e.getUint16(s);if(((a=18761===c)||19789===c)&&42===e.getUint16(s+2,a)){var d=e.getUint32(s+4,a);d>=8&&(o=s+d)}}}if(o){var p=e.getUint16(o,a),l=void 0,m=void 0;for(m=0;m<p;m+=1)if(l=o+12*m+2,274===e.getUint16(l,a)){l+=8,i=e.getUint16(l,a),e.setUint16(l,1,a);break}}return i}var rt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;L(a,c),X(t,c);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};this.containerData=n,z(a,{width:n.width,height:n.height}),L(t,c),X(a,c)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};c.left=(t.width-h)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=T({},e),this.initialCanvasData=T({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,d=Number(i.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===r&&(d*h>c?c=d*h:d=c/h)):r>0&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&(c=o.width,(d=o.height)*h>c?c=d*h:d=c/h));var p=it({aspectRatio:h,width:c,height:d});c=p.width,d=p.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r>(s?0:1)){var l=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,l),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,l),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,l),n.maxLeft=Math.max(0,l)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return a>90?{width:s,height:h}:{width:h,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,z(this.canvas,T({width:i.width,height:i.height},K({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);T(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),z(this.image,T({width:i.width,height:i.height},K(T({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=T({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,d=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,p=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?c*h>s?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),p*h>d?p=d/h:d=p*h),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,p),o.maxWidth=d,o.maxHeight=p}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&U(this.face,"cropperAction",i.width>=e.width&&i.height>=e.height?"move":"all"),z(this.cropBox,T({width:i.width,height:i.height},K({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),F(this.element,"crop",this.getData())}},ht={initPreview:function(){var t=this.crossOrigin,e=this.options.preview,i=t?this.crossOriginUrl:this.url,a=document.createElement("img");if(t&&(a.crossOrigin=t),a.src=i,this.viewBox.appendChild(a),this.viewBoxImage=a,e){var n=e;"string"==typeof e?n=this.element.ownerDocument.querySelectorAll(e):e.querySelector&&(n=[e]),this.previews=n,W(n,function(e){var a=document.createElement("img");U(e,"cropperPreview",{width:e.offsetWidth,height:e.offsetHeight,html:e.innerHTML}),t&&(a.crossOrigin=t),a.src=i,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',e.innerHTML="",e.appendChild(a)})}},resetPreview:function(){W(this.previews,function(t){var e=S(t,"cropperPreview");z(t,{width:e.width,height:e.height}),t.innerHTML=e.html,j(t,"cropperPreview")})},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,a=i.width,n=i.height,o=t.width,r=t.height,h=i.left-e.left-t.left,s=i.top-e.top-t.top;this.cropped&&!this.disabled&&(z(this.viewBoxImage,T({width:o,height:r},K(T({translateX:-h,translateY:-s},t)))),W(this.previews,function(e){var i=S(e,"cropperPreview"),c=i.width,d=i.height,p=c,l=d,m=1;a&&(l=n*(m=c/a)),n&&l>d&&(p=a*(m=d/n),l=d),z(e,{width:p,height:l}),z(e.getElementsByTagName("img")[0],T({width:o*m,height:r*m},K(T({translateX:-h*m,translateY:-s*m},t))))}))}},st={bind:function(){var t=this.element,e=this.options,i=this.cropper;E(e.cropstart)&&_(t,"cropstart",e.cropstart),E(e.cropmove)&&_(t,"cropmove",e.cropmove),E(e.cropend)&&_(t,"cropend",e.cropend),E(e.crop)&&_(t,"crop",e.crop),E(e.zoom)&&_(t,"zoom",e.zoom),_(i,d,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&_(i,"wheel mousewheel DOMMouseScroll",this.onWheel=this.wheel.bind(this)),e.toggleDragModeOnDblclick&&_(i,"dblclick",this.onDblclick=this.dblclick.bind(this)),_(t.ownerDocument,p,this.onCropMove=this.cropMove.bind(this)),_(t.ownerDocument,l,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&_(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;E(e.cropstart)&&$(t,"cropstart",e.cropstart),E(e.cropmove)&&$(t,"cropmove",e.cropmove),E(e.cropend)&&$(t,"cropend",e.cropend),E(e.crop)&&$(t,"crop",e.crop),E(e.zoom)&&$(t,"zoom",e.zoom),$(i,d,this.onCropStart),e.zoomable&&e.zoomOnWheel&&$(i,"wheel mousewheel DOMMouseScroll",this.onWheel),e.toggleDragModeOnDblclick&&$(i,"dblclick",this.onDblclick),$(t.ownerDocument,p,this.onCropMove),$(t.ownerDocument,l,this.onCropEnd),e.responsive&&$(window,"resize",this.onResize)}},ct={resize:function(){var t=this.options,e=this.container,i=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||i.width<=a||i.height<=n)){var o=e.offsetWidth/i.width;if(1!==o||e.offsetHeight!==i.height){var r=void 0,h=void 0;t.restore&&(r=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(W(r,function(t,e){r[e]=t*o})),this.setCropBoxData(W(h,function(t,e){h[e]=t*o})))}}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((t=this.dragBox,e="cropper-crop",(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?"move":"crop"))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){if(!this.disabled){var e=this.options,i=this.pointers,a=void 0;t.changedTouches?W(t.changedTouches,function(t){i[t.identifier]=tt(t)}):i[t.pointerId||0]=tt(t),a=Object.keys(i).length>1&&e.zoomable&&e.zoomOnTouch?"zoom":S(t.target,"cropperAction"),m.test(a)&&!1!==F(this.element,"cropstart",{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,"crop"===a&&(this.cropping=!0,L(this.dragBox,"cropper-modal")))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==F(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?W(t.changedTouches,function(t){T(i[t.identifier],tt(t,!0))}):T(i[t.pointerId||0],tt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?W(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,R(this.dragBox,"cropper-modal",this.cropped&&this.options.modal)),F(this.element,"cropend",{originalEvent:t,action:e}))}}},dt={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,r=this.action,h=e.aspectRatio,s=n.left,d=n.top,p=n.width,l=n.height,m=s+p,u=d+l,g=0,f=0,v=a.width,w=a.height,b=!0,x=void 0;!h&&t.shiftKey&&(h=p&&l?p/l:1),this.limited&&(g=n.minLeft,f=n.minTop,v=g+Math.min(a.width,i.width,i.left+i.width),w=f+Math.min(a.height,i.height,i.top+i.height));var y=o[Object.keys(o)[0]],C={x:y.endX-y.startX,y:y.endY-y.startY},M=function(t){switch(t){case"e":m+C.x>v&&(C.x=v-m);break;case"w":s+C.x<g&&(C.x=g-s);break;case"n":d+C.y<f&&(C.y=f-d);break;case"s":u+C.y>w&&(C.y=w-u)}};switch(r){case"all":s+=C.x,d+=C.y;break;case"e":if(C.x>=0&&(m>=v||h&&(d<=f||u>=w))){b=!1;break}M("e"),(p+=C.x)<0&&(r="w",s-=p=-p),h&&(l=p/h,d+=(n.height-l)/2);break;case"n":if(C.y<=0&&(d<=f||h&&(s<=g||m>=v))){b=!1;break}M("n"),l-=C.y,d+=C.y,l<0&&(r="s",d-=l=-l),h&&(p=l*h,s+=(n.width-p)/2);break;case"w":if(C.x<=0&&(s<=g||h&&(d<=f||u>=w))){b=!1;break}M("w"),p-=C.x,s+=C.x,p<0&&(r="e",s-=p=-p),h&&(l=p/h,d+=(n.height-l)/2);break;case"s":if(C.y>=0&&(u>=w||h&&(s<=g||m>=v))){b=!1;break}M("s"),(l+=C.y)<0&&(r="n",d-=l=-l),h&&(p=l*h,s+=(n.width-p)/2);break;case"ne":if(h){if(C.y<=0&&(d<=f||m>=v)){b=!1;break}M("n"),l-=C.y,d+=C.y,p=l*h}else M("n"),M("e"),C.x>=0?m<v?p+=C.x:C.y<=0&&d<=f&&(b=!1):p+=C.x,C.y<=0?d>f&&(l-=C.y,d+=C.y):(l-=C.y,d+=C.y);p<0&&l<0?(r="sw",d-=l=-l,s-=p=-p):p<0?(r="nw",s-=p=-p):l<0&&(r="se",d-=l=-l);break;case"nw":if(h){if(C.y<=0&&(d<=f||s<=g)){b=!1;break}M("n"),l-=C.y,d+=C.y,p=l*h,s+=n.width-p}else M("n"),M("w"),C.x<=0?s>g?(p-=C.x,s+=C.x):C.y<=0&&d<=f&&(b=!1):(p-=C.x,s+=C.x),C.y<=0?d>f&&(l-=C.y,d+=C.y):(l-=C.y,d+=C.y);p<0&&l<0?(r="se",d-=l=-l,s-=p=-p):p<0?(r="ne",s-=p=-p):l<0&&(r="sw",d-=l=-l);break;case"sw":if(h){if(C.x<=0&&(s<=g||u>=w)){b=!1;break}M("w"),p-=C.x,s+=C.x,l=p/h}else M("s"),M("w"),C.x<=0?s>g?(p-=C.x,s+=C.x):C.y>=0&&u>=w&&(b=!1):(p-=C.x,s+=C.x),C.y>=0?u<w&&(l+=C.y):l+=C.y;p<0&&l<0?(r="ne",d-=l=-l,s-=p=-p):p<0?(r="se",s-=p=-p):l<0&&(r="nw",d-=l=-l);break;case"se":if(h){if(C.x>=0&&(m>=v||u>=w)){b=!1;break}M("e"),l=(p+=C.x)/h}else M("s"),M("e"),C.x>=0?m<v?p+=C.x:C.y>=0&&u>=w&&(b=!1):p+=C.x,C.y>=0?u<w&&(l+=C.y):l+=C.y;p<0&&l<0?(r="nw",d-=l=-l,s-=p=-p):p<0?(r="sw",s-=p=-p):l<0&&(r="ne",d-=l=-l);break;case"move":this.move(C.x,C.y),b=!1;break;case"zoom":this.zoom(function(t){var e=T({},t),i=[];return W(t,function(t,a){delete e[a],W(e,function(e){var a=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),o=Math.abs(t.endX-e.endX),r=Math.abs(t.endY-e.endY),h=Math.sqrt(a*a+n*n),s=(Math.sqrt(o*o+r*r)-h)/h;i.push(s)})}),i.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),i[0]}(o),t),b=!1;break;case"crop":if(!C.x||!C.y){b=!1;break}x=Q(this.cropper),s=y.startX-x.left,d=y.startY-x.top,p=n.minWidth,l=n.minHeight,C.x>0?r=C.y>0?"se":"ne":C.x<0&&(s-=p,r=C.y>0?"sw":"nw"),C.y<0&&(d-=l),this.cropped||(X(this.cropBox,c),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}b&&(n.width=p,n.height=l,n.left=s,n.top=d,this.action=r,this.renderCropBox()),W(o,function(t){t.startX=t.endX,t.startY=t.endY})}},pt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&L(this.dragBox,"cropper-modal"),X(this.cropBox,c),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=T({},this.initialImageData),this.canvasData=T({},this.initialCanvasData),this.cropBoxData=T({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(T(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),X(this.dragBox,"cropper-modal"),L(this.cropBox,c)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,W(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,X(this.cropper,"cropper-disabled")),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,L(this.cropper,"cropper-disabled")),this},destroy:function(){var t=this.element;return S(t,"cropper")?(this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),j(t,"cropper"),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,n=i.top;return this.moveTo(B(t)?t:a+Number(t),B(e)?e:n+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(M(t)&&(i.left=t,a=!0),M(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,d=s*t;if(!1===F(this.element,"zoom",{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var p=this.pointers,l=Q(this.cropper),m=p&&Object.keys(p).length?function(t){var e=0,i=0,a=0;return W(t,function(t){var n=t.startX,o=t.startY;e+=n,i+=o,a+=1}),{pageX:e/=a,pageY:i/=a}}(p):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((m.pageX-l.left-n.left)/o),n.top-=(d-r)*((m.pageY-l.top-n.top)/r)}else k(e)&&M(e.x)&&M(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(d-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(d-r)/2);n.width=c,n.height=d,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return M(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,M(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(M(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(M(t)&&(i.scaleX=t,a=!0),M(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,i=this.imageData,a=this.canvasData,n=this.cropBoxData,o=void 0;if(this.ready&&this.cropped){o={x:n.left-a.left,y:n.top-a.top,width:n.width,height:n.height};var r=i.width/i.naturalWidth;if(W(o,function(t,e){o[e]=t/r}),t){var h=Math.round(o.y+o.height),s=Math.round(o.x+o.width);o.x=Math.round(o.x),o.y=Math.round(o.y),o.width=s-o.x,o.height=h-o.y}}else o={x:0,y:0,width:0,height:0};return e.rotatable&&(o.rotate=i.rotate||0),e.scalable&&(o.scaleX=i.scaleX||1,o.scaleY=i.scaleY||1),o},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&k(t)){var o=!1;e.rotatable&&M(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(M(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),M(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;M(t.x)&&(n.left=t.x*r+a.left),M(t.y)&&(n.top=t.y*r+a.top),M(t.width)&&(n.width=t.width*r),M(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?T({},this.containerData):{}},getImageData:function(){return this.sized?T({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&W(["left","top","width","height","naturalWidth","naturalHeight"],function(i){e[i]=t[i]}),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&k(t)&&(M(t.left)&&(e.left=t.left),M(t.top)&&(e.top=t.top),M(t.width)?(e.width=t.width,e.height=t.width/i):M(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,e=void 0;return this.ready&&this.cropped&&(e={left:t.left,top:t.top,width:t.width,height:t.height}),e||{}},setCropBoxData:function(t){var e=this.cropBoxData,i=this.options.aspectRatio,a=void 0,n=void 0;return this.ready&&this.cropped&&!this.disabled&&k(t)&&(M(t.left)&&(e.left=t.left),M(t.top)&&(e.top=t.top),M(t.width)&&t.width!==e.width&&(a=!0,e.width=t.width),M(t.height)&&t.height!==e.height&&(n=!0,e.height=t.height),i&&(a?e.height=e.width/i:n&&(e.width=e.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=function(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,r=e.naturalHeight,h=e.rotate,s=void 0===h?0:h,c=e.scaleX,d=void 0===c?1:c,p=e.scaleY,l=void 0===p?1:p,m=i.aspectRatio,u=i.naturalWidth,g=i.naturalHeight,f=a.fillColor,v=void 0===f?"transparent":f,w=a.imageSmoothingEnabled,b=void 0===w||w,x=a.imageSmoothingQuality,C=void 0===x?"low":x,M=a.maxWidth,B=void 0===M?1/0:M,D=a.maxHeight,A=void 0===D?1/0:D,k=a.minWidth,E=void 0===k?0:k,W=a.minHeight,T=void 0===W?0:W,N=document.createElement("canvas"),O=N.getContext("2d"),z=it({aspectRatio:m,width:B,height:A}),L=it({aspectRatio:m,width:E,height:T},"cover"),X=Math.min(z.width,Math.max(L.width,u)),R=Math.min(z.height,Math.max(L.height,g)),Y=it({aspectRatio:n,width:B,height:A}),I=it({aspectRatio:n,width:E,height:T},"cover"),S=Math.min(Y.width,Math.max(I.width,o)),U=Math.min(Y.height,Math.max(I.height,r)),j=[-S/2,-U/2,S,U];return N.width=H(X),N.height=H(R),O.fillStyle=v,O.fillRect(0,0,X,R),O.save(),O.translate(X/2,R/2),O.rotate(s*Math.PI/180),O.scale(d,l),O.imageSmoothingEnabled=b,O.imageSmoothingQuality=C,O.drawImage.apply(O,[t].concat(y(j.map(function(t){return Math.floor(H(t))})))),O.restore(),N}(this.image,this.imageData,e,t);if(!this.cropped)return i;var a=this.getData(),n=a.x,o=a.y,r=a.width,h=a.height,s=i.width/Math.floor(e.naturalWidth);1!==s&&(n*=s,o*=s,r*=s,h*=s);var c=r/h,d=it({aspectRatio:c,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=it({aspectRatio:c,width:t.minWidth||0,height:t.minHeight||0},"cover"),l=it({aspectRatio:c,width:t.width||(1!==s?i.width:r),height:t.height||(1!==s?i.height:h)}),m=l.width,u=l.height;m=Math.min(d.width,Math.max(p.width,m)),u=Math.min(d.height,Math.max(p.height,u));var g=document.createElement("canvas"),f=g.getContext("2d");g.width=H(m),g.height=H(u),f.fillStyle=t.fillColor||"transparent",f.fillRect(0,0,m,u);var v=t.imageSmoothingEnabled,w=void 0===v||v,b=t.imageSmoothingQuality;f.imageSmoothingEnabled=w,b&&(f.imageSmoothingQuality=b);var x=i.width,C=i.height,M=n,B=o,D=void 0,A=void 0,k=void 0,E=void 0,W=void 0,T=void 0;M<=-r||M>x?(M=0,D=0,k=0,W=0):M<=0?(k=-M,M=0,W=D=Math.min(x,r+M)):M<=x&&(k=0,W=D=Math.min(r,x-M)),D<=0||B<=-h||B>C?(B=0,A=0,E=0,T=0):B<=0?(E=-B,B=0,T=A=Math.min(C,h+B)):B<=C&&(E=0,T=A=Math.min(h,C-B));var N=[M,B,D,A];if(W>0&&T>0){var O=m/r;N.push(k*O,E*O,W*O,T*O)}return f.drawImage.apply(f,[i].concat(y(N.map(function(t){return Math.floor(H(t))})))),g},setAspectRatio:function(t){var e=this.options;return this.disabled||B(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n="crop"===t,o=e.movable&&"move"===t;t=n||o?t:"none",e.dragMode=t,U(i,"cropperAction",t),R(i,"cropper-crop",n),R(i,"cropper-move",o),e.cropBoxMovable||(U(a,"cropperAction",t),R(a,"cropper-crop",n),R(a,"cropper-move",o))}return this}},lt=s.Cropper,mt=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(b(this,t),!e||!f.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=T({},v,k(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return x(t,[{key:"init",value:function(){var t=this.element,e=t.tagName.toLowerCase(),i=void 0;if(!S(t,"cropper")){if(U(t,"cropper",this),"img"===e){if(this.isImg=!0,i=t.getAttribute("src")||"",this.originalUrl=i,!i)return;i=t.src}else"canvas"===e&&window.HTMLCanvasElement&&(i=t.toDataURL());this.load(i)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(u.test(t))g.test(t)?this.read((n=t.replace(nt,""),o=atob(n),r=new ArrayBuffer(o.length),W(h=new Uint8Array(r),function(t,e){h[e]=o.charCodeAt(e)}),r)):this.clone();else{var n,o,r,h,s=new XMLHttpRequest;this.reloading=!0,this.xhr=s;var c=function(){e.reloading=!1,e.xhr=null};s.ontimeout=c,s.onabort=c,s.onerror=function(){c(),e.clone()},s.onload=function(){c(),e.read(s.response)},a.checkCrossOrigin&&G(t)&&i.crossOrigin&&(t=J(t)),s.open("get",t),s.responseType="arraybuffer",s.withCredentials="use-credentials"===i.crossOrigin,s.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=ot(t),n=0,o=1,r=1;if(a>1){this.url=function(t,e){var i=new Uint8Array(t),a="";return E(i.forEach)?i.forEach(function(t){a+=at(t)}):W(i,function(t){a+=at(t)}),"data:"+e+";base64,"+btoa(a)}(t,"image/jpeg");var h=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=void 0,a=void 0;this.options.checkCrossOrigin&&G(e)&&((i=t.crossOrigin)?a=e:(i="anonymous",a=J(e))),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),L(n,"cropper-hide"),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.isImg?this.element:this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=s.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(s.navigator.userAgent),a=function(e,i){T(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),i||o.removeChild(n)},n.src=e.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".cropper-container"),r=o.querySelector(".cropper-canvas"),h=o.querySelector(".cropper-drag-box"),s=o.querySelector(".cropper-crop-box"),d=s.querySelector(".cropper-face");this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".cropper-view-box"),this.face=d,r.appendChild(i),L(t,c),a.insertBefore(o,t.nextSibling),this.isImg||X(i,"cropper-hide"),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,L(s,c),e.guides||L(s.getElementsByClassName("cropper-dashed"),c),e.center||L(s.getElementsByClassName("cropper-center"),c),e.background&&L(o,"cropper-bg"),e.highlight||L(d,"cropper-invisible"),e.cropBoxMovable&&(L(d,"cropper-move"),U(d,"cropperAction","all")),e.cropBoxResizable||(L(s.getElementsByClassName("cropper-line"),c),L(s.getElementsByClassName("cropper-point"),c)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),E(e.ready)&&_(t,"ready",e.ready,{once:!0}),F(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),X(this.element,c))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?this.xhr.abort():this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=lt,t}},{key:"setDefaults",value:function(t){T(v,k(t)&&t)}}]),t}();T(mt.prototype,rt,ht,st,ct,dt,pt);var ut=mt,gt=i("wSez"),ft=i("y5xs"),vt={data:function(){return{agencysInfo:this.$route.params.agencysInfo,userImage:"",cropper:"",imgWidth:0,imgHeight:0,startX:0,startY:0}},created:function(){var t=this.$route.params.imageInfo;void 0!==t?this.userImage=window.URL.createObjectURL(t):this.$router.go(-1)},mounted:function(){var t=this,e=this.$refs.userImage;this.cropper=new ut(e,{viewMode:1,aspectRatio:1,autoCropArea:1,dragMode:"move",background:!1,guides:!1,cropBoxMovable:!1,cropBoxResizable:!1,crop:function(e){t.imgWidth=e.detail.width,t.imgHeight=e.detail.height,t.startX=e.detail.x,t.startY=e.detail.y}})},methods:{uploadImage:function(){var t=r()(n.a.mark(function t(){var e,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.params.imageInfo,gt.Indicator.open(),this.startX<0&&(this.startX=0),t.next=5,Object(ft.o)(this.agencysInfo.id,e,this.imgWidth,this.imgHeight,this.startX,this.startY);case 5:i=t.sent,gt.Indicator.close(),0===i.errCode?this.$router.go(-1):10003===i.errCode||10005===i.errCode?this.tokenOutOfDate():Object(gt.Toast)("修改头像失败");case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},wt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("img",{ref:"userImage",staticClass:"head-image",attrs:{src:t.userImage,alt:"图像"}}),t._v(" "),i("div",{staticClass:"bottom-btn"},[i("p",{staticClass:"cancel",on:{click:function(e){t.$router.go(-1)}}},[t._v("取消")]),t._v(" "),i("p",{staticClass:"confirm",on:{click:t.uploadImage}},[t._v("选取")])])])},staticRenderFns:[]};var bt=i("C7Lr")(vt,wt,!1,function(t){i("UBpb")},"data-v-05c258f6",null);e.default=bt.exports}});
//# sourceMappingURL=30.dce246ad74bcd2759171.js.map