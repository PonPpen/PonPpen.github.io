(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-793f19f2"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function n(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)}))}}},"96b1":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-upload",{attrs:{name:"files",multiple:!1,headers:this.token,fileList:e.fileListData,beforeUpload:e.beforeUpload,listType:"picture-card",accept:".png,.jpg,jpeg",disabled:e.disabled,action:e.uploadService},on:{preview:e.handlePreview,change:e.handleChange}},[e.fileListData.length<e.length?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v("上传")])],1):e._e()]),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},a=[],o=(r("a15b"),r("d81d"),r("b0c0"),r("a9e3"),r("d3b7"),r("ac1f"),r("1276"),r("b85c")),i=(r("96cf"),r("1da1")),l=r("cc33");function s(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))}var c={props:{imgURL:{type:String,default:""},disabled:{type:Boolean,default:!1},length:{type:Number,default:8}},watch:{imgURL:{handler:function(e,t){if(e){var r=e.split(",");for(var n in this.fileListData=[],r)this.fileListData.push({uid:n,name:r[n],data:r[n],url:this.uploadPath+r[n]})}else this.fileListData=[]}}},data:function(){return{token:{token:Object(l["e"])(),loginFlag:0},uploadService:this.$globalConfig.uploadService+"/base/upload",uploadPath:this.$globalConfig.uploadPath+"/file/",fileList:[],fileListData:[],previewVisible:!1,previewImage:""}},methods:{beforeUpload:function(e){console.log(e);var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("只能上传jpg/png格式图片");var r=e.size/1024/1024<10;return r||this.$message.error("文件超过10M了"),t&&r},handlePreview:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,s(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},handleChange:function(e){var t=e.file,r=e.fileList;"removed"!==t.status&&t.response&&200!==t.response.status?this.$message.error("上传失败，检查服务是否正常或者重新上传"):("removed"===t.status&&(this.fileListData=r,this.setFileListMap(this.fileListData)),"uploading"===t.status&&(this.fileListData=r),"done"===t.status&&200===t.response.status&&this.setFileListMap(this.fileListData))},setFileListMap:function(e){var t,r=[],n=Object(o["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value,i={};a.response&&200===a.response.status?(i.name=a.name,i.data=a.response.data[0],r.push(i)):a.data&&a.name&&(i.name=a.name,i.data=a.data,r.push(i))}}catch(s){n.e(s)}finally{n.f()}var l=r.map((function(e,t){return e.data})).join(",");this.$emit("getImages",l)},handleCancel:function(){this.previewVisible=!1}}},u=c,f=r("2877"),p=Object(f["a"])(u,n,a,!1,null,"03b45592",null);t["a"]=p.exports},"96cf":function(e,t){!function(t){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"===typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{u=t.regeneratorRuntime=c?e.exports:{},u.wrap=w;var f="suspendedStart",p="suspendedYield",h="executing",m="completed",d={},g={};g[i]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(T([])));b&&b!==n&&a.call(b,i)&&(g=b);var y=j.prototype=k.prototype=Object.create(g);x.prototype=y.constructor=j,j.constructor=x,j[s]=x.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(y),e},u.awrap=function(e){return{__await:e}},D(N.prototype),N.prototype[l]=function(){return this},u.AsyncIterator=N,u.async=function(e,t,r,n){var a=new N(w(e,t,r,n));return u.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},D(y),y[s]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return l.type="throw",l.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function w(e,t,r,n){var a=t&&t.prototype instanceof k?t:k,o=Object.create(a.prototype),i=new P(n||[]);return o._invoke=E(e,r,i),o}function L(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function x(){}function j(){}function D(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function N(e){function t(r,n,o,i){var l=L(e[r],e,n);if("throw"!==l.type){var s=l.arg,c=s.value;return c&&"object"===typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(c).then((function(e){s.value=e,o(s)}),i)}i(l.arg)}var r;function n(e,n){function a(){return new Promise((function(r,a){t(e,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=n}function E(e,t,r){var n=f;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return $()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var l=S(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=L(e,t,r);if("normal"===s.type){if(n=r.done?m:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}function S(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,S(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=L(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function T(e){if(e){var t=e[i];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){while(++n<e.length)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},b85c:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");var n=r("06c5");function a(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(n["a"])(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==r["return"]||r["return"]()}finally{if(s)throw i}}}}},bdc0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("PageView",[r("SplitLayout",[r("a-form-model",{ref:"ruleForm",attrs:{form:e.form,model:e.form,rules:e.rules,labelCol:{span:6},wrapperCol:{span:12}}},[r("a-form-model-item",{attrs:{label:"反馈单位"}},[r("a-input",{attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.form.feedbackUnitName,callback:function(t){e.$set(e.form,"feedbackUnitName",t)},expression:"form.feedbackUnitName"}})],1),r("a-form-model-item",{attrs:{label:"提交人姓名"}},[r("a-input",{attrs:{disabled:!0},model:{value:e.form.createName,callback:function(t){e.$set(e.form,"createName",t)},expression:"form.createName"}})],1),r("a-form-model-item",{attrs:{label:"联系方式",prop:"feedbackPhone"}},[r("a-input",{attrs:{placeholder:"请输入"},model:{value:e.form.feedbackPhone,callback:function(t){e.$set(e.form,"feedbackPhone",t)},expression:"form.feedbackPhone"}})],1),r("a-form-model-item",{attrs:{label:"所属模块",prop:"belongModuleName"}},[r("a-tree-select",{staticStyle:{width:"100%"},attrs:{"tree-data":e.treeData,treeCheckable:!1,"tree-checkable":"",placeholder:"请选择"},model:{value:e.form.belongModuleName,callback:function(t){e.$set(e.form,"belongModuleName",t)},expression:"form.belongModuleName"}})],1),r("a-form-model-item",{attrs:{label:"BUG简述",prop:"bugSketch"}},[r("a-input",{attrs:{placeholder:"请输入"},model:{value:e.form.bugSketch,callback:function(t){e.$set(e.form,"bugSketch",t)},expression:"form.bugSketch"}})],1),r("a-form-model-item",{attrs:{label:"BUG详细描述：",required:"",prop:"bugDetailedDescription"}},[r("a-textarea",{attrs:{placeholder:"请输入",rows:4},model:{value:e.form.bugDetailedDescription,callback:function(t){e.$set(e.form,"bugDetailedDescription",t)},expression:"form.bugDetailedDescription"}})],1),r("a-form-model-item",{attrs:{label:"BUG发生时间",prop:"bugHappenTime"}},[r("a-date-picker",{attrs:{valueFormat:"YYYY-MM-DD HH:mm:ss",format:"YYYY-MM-DD HH:mm:ss"},model:{value:e.form.bugHappenTime,callback:function(t){e.$set(e.form,"bugHappenTime",t)},expression:"form.bugHappenTime"}})],1),r("a-form-model-item",{attrs:{label:"终端类型",prop:"platformType"}},[r("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.platformType,callback:function(t){e.$set(e.form,"platformType",t)},expression:"form.platformType"}},[r("a-select-option",{attrs:{value:1}},[e._v("PC端")]),r("a-select-option",{attrs:{value:2}},[e._v("智慧禁毒")]),r("a-select-option",{attrs:{value:3}},[e._v("椰风送暖")])],1)],1),r("a-form-model-item",{attrs:{label:"附件"}},[r("UploadImages",{ref:"UploadImages",on:{getImages:e.getImages}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[r("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.okSubmit}},[e._v(" 提交 ")])],1)],1)],1)],1)},a=[],o=(r("a15b"),r("d81d"),r("b0c0"),r("c443")),i=r("cc33"),l=r("96b1"),s={components:{UploadImages:l["a"]},data:function(){return{labelCol:{span:10},wrapperCol:{span:14},form:{},rules:{feedbackPhone:[{required:!0,message:"请输入"}],belongModuleName:[{required:!0,message:"请选择"}],bugSketch:[{required:!0,message:"请输入"}],bugDetailedDescription:[{required:!0,message:"请输入"}],bugHappenTime:[{required:!0,message:"请选择"}],platformType:[{required:!0,message:"请选择"}]},loading:!1,functionData:[],treeData:[]}},created:function(){var e=this,t=Object(i["c"])();this.treeData=t.map((function(t){return e.mapTree(t)})),this.form.createBy=Object(i["f"])().userId,this.form.createName=Object(i["f"])().name,this.form.feedbackUnitCode=Object(i["f"])().mainDeptId,this.form.feedbackUnitName=Object(i["f"])().deptName},methods:{change:function(){},mapTree:function(e){var t=this,r=Array.isArray(e.childMenu)&&e.childMenu.length>0;return{title:e.menuName,label:e.menuName,value:e.menuName,children:r?e.childMenu.map((function(e){return t.mapTree(e)})):[]}},okSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;e.loading=!0,o["a"].problemFeedbackAdd(e.form).then((function(t){e.loading=!1,e.$message.success("添加成功"),e.$router.push({path:"/callCenter/questionList"})})).catch((function(t){e.loading=!1}))}))},getImages:function(e){e.length>0&&(this.form.files=e.map((function(e,t){return e.data})).join(","))}}},c=s,u=r("2877"),f=Object(u["a"])(c,n,a,!1,null,"ab41c0a6",null);t["default"]=f.exports}}]);