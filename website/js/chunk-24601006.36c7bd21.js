(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24601006"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}},"388f":function(t,e,r){"use strict";r.d(e,"i",(function(){return a})),r.d(e,"j",(function(){return i})),r.d(e,"n",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"k",(function(){return u})),r.d(e,"l",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"h",(function(){return d})),r.d(e,"d",(function(){return m})),r.d(e,"c",(function(){return h})),r.d(e,"f",(function(){return p})),r.d(e,"m",(function(){return v})),r.d(e,"a",(function(){return y})),r.d(e,"g",(function(){return g}));var n=r("a27e"),o={formTypeList:"/flow-service/form/type/list",formTypeSave:"/flow-service/form/type/save",formTypeId:"/flow-service/form/type",formTypeStatus:"/flow-service/form/type/status",formTypeTenantType:"/flow-service/form/type/tenantType",formTypeTypeModels:"/flow-service/form/type/typeModels",formModelList:"/flow-service/form/model/list",formModelTenantModel:"/flow-service/form/model/tenantModel",formModelCreate:"/flow-service/form/model/create",formModelCopy:"/flow-service/form/model/copy",formModelSave:"/flow-service/form/model/save",formModelId:"/flow-service/form/model",formModelStatus:"/flow-service/form/model/status"};function a(t){return Object(n["a"])({url:o.formTypeList,method:"POST",data:t})}function i(t){return Object(n["a"])({url:o.formTypeSave,method:"POST",data:t})}function c(t){return Object(n["a"])({url:o.formTypeId+"/".concat(t),method:"GET"})}function s(t){return Object(n["a"])({url:o.formTypeId+"/".concat(t),method:"DELETE"})}function u(t){return Object(n["a"])({url:o.formTypeStatus,method:"POST",data:t})}function l(t){return Object(n["a"])({url:o.formTypeTenantType,method:"POST",data:t})}function f(t){return Object(n["a"])({url:o.formModelList,method:"POST",data:t})}function d(t){return Object(n["a"])({url:o.formModelTenantModel,method:"POST",data:t})}function m(t){return Object(n["a"])({url:o.formModelCreate,method:"POST",data:t})}function h(t){return Object(n["a"])({url:o.formModelCopy,method:"POST",data:t})}function p(t){return Object(n["a"])({url:o.formModelSave,method:"POST",data:t})}function v(t){return Object(n["a"])({url:o.formModelId+"/".concat(t),method:"GET"})}function y(t){return Object(n["a"])({url:o.formModelId+"/".concat(t),method:"DELETE"})}function g(t){return Object(n["a"])({url:o.formModelStatus,method:"POST",data:t})}},"8cc5":function(t,e,r){"use strict";var n=r("d41e"),o=r.n(n);o.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var f="suspendedStart",d="suspendedYield",m="executing",h="completed",p={},v={};v[i]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(P([])));g&&g!==n&&o.call(g,i)&&(v=g);var b=S.prototype=O.prototype=Object.create(v);T.prototype=b.constructor=S,S.constructor=T,S[s]=T.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===T||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},j(k.prototype),k.prototype[c]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,r,n){var o=new k(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function w(t,e,r,n){var o=e&&e.prototype instanceof O?e:O,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=I(t,r,i),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function O(){}function T(){}function S(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){function e(r,n,a,i){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),i)}i(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function I(t,e,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return F()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?h:d,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"9d1b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("PageView",[r("SplitLayout",[r("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[r("SearchForm",{on:{query:t.onQuery,reset:t.onResetForm}},[r("SearchFormItem",{attrs:{label:"类型名称："}},[r("a-input",{attrs:{allowClear:"",placeholder:"请输入类型名称"},model:{value:t.formSearch.formTypeName,callback:function(e){t.$set(t.formSearch,"formTypeName",e)},expression:"formSearch.formTypeName"}})],1),r("SearchFormItem",{attrs:{label:"状态："}},[r("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择状态"},model:{value:t.formSearch.status,callback:function(e){t.$set(t.formSearch,"status",e)},expression:"formSearch.status"}},[r("a-select-option",{attrs:{value:""}},[t._v("全部")]),r("a-select-option",{attrs:{value:"0"}},[t._v("启用")]),r("a-select-option",{attrs:{value:"1"}},[t._v("停用")])],1)],1)],1)],1),r("OperationPermission",{attrs:{check:"privs.item1140000002"}},[r("div",{staticStyle:{"padding-bottom":"16px"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.handAdd()}}},[t._v("新建")])],1)]),r("CustomTable",{ref:"table",attrs:{rowKey:"id",showAlert:!1,showSelection:!1,loading:t.loading,columns:t.columns,dataSource:t.pageData,onChange:t.onTableChange},scopedSlots:t._u([{key:"order",fn:function(e,r,n){return[t._v(t._s(n+1))]}},{key:"status",fn:function(e){return[t._v(t._s("0"===e?"启用":"停用"))]}},{key:"action",fn:function(e){return[r("OperationPermission",{attrs:{check:"privs.item1140000003"}},[r("a",{staticStyle:{"margin-right":"10px"},on:{click:function(r){return t.handEdit(e,"edit")}}},[t._v("编辑")])]),r("a",{staticStyle:{"margin-right":"10px"},on:{click:function(r){return t.handEdit(e,"detailed")}}},[t._v("查看")]),r("OperationPermission",{attrs:{check:"privs.item1140000004"}},[r("a-popconfirm",{attrs:{title:"确定要删除该条记录?","ok-text":"是","cancel-text":"否"},on:{confirm:function(r){return t.handDelete(e)}}},[r("a",{staticStyle:{"margin-right":"10px"}},[t._v("删除")])])],1),r("OperationPermission",{attrs:{check:"privs.item1140000005"}},[r("a",{on:{click:function(r){return t.handStatus(e)}}},[t._v(t._s("0"===e.status?"停用":"启用"))])])]}}])})],1),r("Modal",{ref:"modal",attrs:{title:t.formStatus[t.formIndex-1].labelText},on:{ok:t.onSubmit}},[r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-form-model-item",{attrs:{label:"类型名称",prop:"formTypeName"}},[r("a-input",{attrs:{disabled:3===t.formIndex,placeholder:"请输入类型名称"},model:{value:t.form.formTypeName,callback:function(e){t.$set(t.form,"formTypeName",e)},expression:"form.formTypeName"}})],1),r("a-form-model-item",{attrs:{label:"类型描述",prop:"formTypeDescription"}},[r("a-textarea",{attrs:{disabled:3===t.formIndex,"auto-size":{minRows:5,maxRows:7},placeholder:"请输入类型描述"},model:{value:t.form.formTypeDescription,callback:function(e){t.$set(t.form,"formTypeDescription",e)},expression:"form.formTypeDescription"}})],1),r("a-form-model-item",{attrs:{label:"状态",prop:"status"}},[r("a-radio-group",{attrs:{disabled:3===t.formIndex,placeholder:"请选择状态"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[r("a-radio",{attrs:{value:"0"}},[t._v("启用")]),r("a-radio",{attrs:{value:"1"}},[t._v("停用")])],1)],1)],1)],1)],1)},o=[],a=(r("4160"),r("b0c0"),r("b64b"),r("159b"),r("5530")),i=(r("96cf"),r("1da1")),c=r("d99e"),s=r("bf11"),u=r("86da"),l=r("cc33"),f=r("388f"),d=c["a"].Item,m={components:{SearchForm:c["a"],SearchFormItem:d,CustomTable:s["a"],Modal:u["a"]},data:function(){var t=this;return{formStatus:[{label:"AddFormType",labelText:"新增表单类型"},{label:"EditFormType",labelText:"编辑表单类型"},{label:"DetailedFormType",labelText:"查看表单类型"}],formIndex:1,formSearch:{formTypeName:"",sortField:"",sortOrder:"descend",status:"",tenantId:""},pageFilter:{currentPage:1,pageSize:10},form:{createUser:"",createUserName:"",tenantId:"",tenantName:"",formTypeName:"",resource:"",formTypeDescription:""},loading:!1,pageData:[],columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},customRender:function(e,r,n){return"".concat((t.pageFilter.currentPage-1)*t.pageFilter.pageSize+(n+1))}},{title:"表单类型名称",dataIndex:"formTypeName"},{title:"创建时间",dataIndex:"createTime"},{title:"创建人",dataIndex:"createUserName"},{title:"表单数量",dataIndex:"formCount"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",width:"250px",align:"center",scopedSlots:{customRender:"action"}}],labelCol:{span:6},wrapperCol:{span:16},rules:{formTypeName:[{required:!0,message:"请填写类型名称",trigger:"change"}],formTypeDescription:[{required:!0,message:"请填写类型描述",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]}}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.onQuery();case 1:case"end":return e.stop()}}),e)})))()},methods:{onQuery:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=!(t.length>0&&void 0!==t[0])||t[0],n&&(e.pageFilter.currentPage=1),e.inquire(Object(a["a"])(Object(a["a"])({},e.formSearch),e.pageFilter));case 3:case"end":return r.stop()}}),r)})))()},onResetForm:function(){var t=this;Object.keys(this.formSearch).forEach((function(e){return t.formSearch[e]=""})),this.onQuery()},onTableChange:function(t){this.pageFilter=t,this.inquire(Object(a["a"])(Object(a["a"])({},this.formSearch),t))},inquire:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{},n.tenantId=Object(l["f"])().tenantId,r.next=4,Object(f["i"])(n);case 4:o=r.sent,console.log(o),200===o.status&&(e.pageData=o.data);case 7:case"end":return r.stop()}}),r)})))()},handAdd:function(){var t=this;this.formIndex=1,this.$refs.modal.visible=!0,Object.keys(this.form).forEach((function(e){return t.form[e]=""}))},handEdit:function(t,e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"edit"===e?r.formIndex=2:"detailed"===e&&(r.formIndex=3),r.$refs.modal.visible=!0,n.next=4,Object(f["n"])(t.id);case 4:o=n.sent,o&&(r.form=o.data,r.form.id=t.id);case 6:case"end":return n.stop()}}),n)})))()},handDelete:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(f["b"])(t.id);case 2:n=r.sent,n&&(e.$message.success(n.data),e.onQuery());case 4:case"end":return r.stop()}}),r)})))()},handStatus:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n="0"===t.status?"1":"0",o="0"===t.status?"停用":"启用",r.next=4,Object(f["k"])({id:t.id,status:n});case 4:a=r.sent,200===a.status&&(e.$message.success("".concat(o,"成功")),e.onQuery(!1));case 6:case"end":return r.stop()}}),r)})))()},onSubmit:function(){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=11;break}return t.form.createUser=Object(l["f"])().userId,t.form.createUserName=Object(l["f"])().name,t.form.tenantId=Object(l["f"])().tenantId,t.form.tenantName=Object(l["f"])().tenantName,e.next=7,Object(f["j"])(t.form);case 7:n=e.sent,n&&(1==t.formIndex&&delete t.form.id,t.$message.success(n.data),t.$refs.modal.visible=!1,2==t.formIndex?t.onQuery(!1):t.onQuery()),e.next=13;break;case 11:return console.log("error submit!!"),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},h=m,p=r("2877"),v=Object(p["a"])(h,n,o,!1,null,"7fb5c6a0",null);e["default"]=v.exports},d41e:function(t,e,r){},d99e:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-wrapper"},[r("div",[r("a-row",{attrs:{gutter:56}},[t._t("default"),r("buttonBox",{style:t.advanced?{float:"right"}:{},on:{toggleAdvanced:t.toggleAdvanced,query:t.query,reset:t.reset}})],2)],1)])},o=[],a=(r("a9e3"),r("5530")),i={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var t=arguments[0];return t("a-col",{class:"item-box",props:Object(a["a"])({},s[this.col])},[t("div",{class:"y-search-item"},[t("div",{class:"y-search-label"},[this.$props.label]),t("div",{class:"y-search-content"},[this.$slots.default])])])}},c={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var t=arguments[0];return t("a-col",{props:Object(a["a"])({},s[this.col])},[t("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[t("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),t("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),t("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",t("a-icon",{props:Object(a["a"])({},{type:this.advanced?"up":"down"})})])])])}},s={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},u={name:"SearchForm",Item:i,components:{buttonBox:c},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var t=this.$slots.default,e=this.col,r=t.length;if(r<e)document.getElementById("advance-btn").style.display="none";else for(var n=e-1;n<r;n++)t[n].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},l=u,f=(r("8cc5"),r("2877")),d=Object(f["a"])(l,n,o,!1,null,"359e9f37",null),m=d.exports;e["a"]=m}}]);