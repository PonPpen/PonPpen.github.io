(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49e60882","chunk-3075788c"],{"388f":function(e,t,a){"use strict";a.d(t,"i",(function(){return n})),a.d(t,"j",(function(){return r})),a.d(t,"n",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"k",(function(){return c})),a.d(t,"l",(function(){return d})),a.d(t,"e",(function(){return f})),a.d(t,"h",(function(){return u})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return m})),a.d(t,"f",(function(){return v})),a.d(t,"m",(function(){return g})),a.d(t,"a",(function(){return w})),a.d(t,"g",(function(){return h}));var o=a("a27e"),s={formTypeList:"/flow-service/form/type/list",formTypeSave:"/flow-service/form/type/save",formTypeId:"/flow-service/form/type",formTypeStatus:"/flow-service/form/type/status",formTypeTenantType:"/flow-service/form/type/tenantType",formTypeTypeModels:"/flow-service/form/type/typeModels",formModelList:"/flow-service/form/model/list",formModelTenantModel:"/flow-service/form/model/tenantModel",formModelCreate:"/flow-service/form/model/create",formModelCopy:"/flow-service/form/model/copy",formModelSave:"/flow-service/form/model/save",formModelId:"/flow-service/form/model",formModelStatus:"/flow-service/form/model/status"};function n(e){return Object(o["a"])({url:s.formTypeList,method:"POST",data:e})}function r(e){return Object(o["a"])({url:s.formTypeSave,method:"POST",data:e})}function i(e){return Object(o["a"])({url:s.formTypeId+"/".concat(e),method:"GET"})}function l(e){return Object(o["a"])({url:s.formTypeId+"/".concat(e),method:"DELETE"})}function c(e){return Object(o["a"])({url:s.formTypeStatus,method:"POST",data:e})}function d(e){return Object(o["a"])({url:s.formTypeTenantType,method:"POST",data:e})}function f(e){return Object(o["a"])({url:s.formModelList,method:"POST",data:e})}function u(e){return Object(o["a"])({url:s.formModelTenantModel,method:"POST",data:e})}function p(e){return Object(o["a"])({url:s.formModelCreate,method:"POST",data:e})}function m(e){return Object(o["a"])({url:s.formModelCopy,method:"POST",data:e})}function v(e){return Object(o["a"])({url:s.formModelSave,method:"POST",data:e})}function g(e){return Object(o["a"])({url:s.formModelId+"/".concat(e),method:"GET"})}function w(e){return Object(o["a"])({url:s.formModelId+"/".concat(e),method:"DELETE"})}function h(e){return Object(o["a"])({url:s.formModelStatus,method:"POST",data:e})}},"44aa":function(e,t,a){},"4edf":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition-group",{attrs:{tag:"ul"}},e._l(e.taskNodeInfos,(function(t,o){return a("div",{key:o,staticClass:"boxLists"},[null==t.childNode||t.childNode.length<2?a("div",{staticClass:"ordinary"},[a("div",{staticClass:"list"},[a("div",{staticClass:"left"},[a("div",{staticClass:"number"},[e._v(e._s(o+1))])]),a("div",{staticClass:"right"},[a("div",{staticClass:"text"},[e._v("第"+e._s(o+1)+"级审批")]),e._t("rigth_content",null,{scoped:t,index:o})],2),o!=e.taskNodeInfos.length-1?a("div",{staticClass:"buttom_line"}):e._e(),e.showIcon?a("div",{staticClass:"showIcons"},[0!=o?a("div",{staticClass:"icon top",class:o==e.taskNodeInfos.length-1?"offset_up_icon":"",on:{click:function(t){return e.up(e.taskNodeInfos,o)}}},[a("a-icon",{attrs:{type:"up"}})],1):e._e(),o!=e.taskNodeInfos.length-1?a("div",{staticClass:"icon down",on:{click:function(t){return e.down(e.taskNodeInfos,o)}}},[a("a-icon",{attrs:{type:"down"}})],1):e._e(),a("div",{staticClass:"icon del",on:{click:function(t){return e.delNode(e.taskNodeInfos,o)}}},[a("a-icon",{attrs:{type:"delete"}})],1)]):e._e(),e.showYey?a("div",{staticClass:"showIcons"},["0"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"}})],1):e._e(),"1"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"stop",theme:"twoTone",twoToneColor:"red"}})],1):e._e(),"2"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#515151"}})],1):e._e(),"3"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"4"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"5"==t.executeStatus?a("div",{staticClass:"icon"},[e._v('="eye" theme="twoTone" twoToneColor="#d81e06" /> ')]):e._e(),"6"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e()]):e._e()])]):e._l(t.childNode,(function(s,n){return a("div",{key:n,staticClass:"willAndOr"},[a("div",{staticClass:"list"},[a("div",{staticClass:"left"},[a("div",{staticClass:"number"},[e._v(e._s(o+1))])]),a("div",{staticClass:"right"},[a("div",{staticClass:"text"},[e._v("第"+e._s(o+1)+"级审批")]),e._t("rigth_content",null,{scoped:s,index:o})],2),n!=t.childNode.length-1?a("div",{staticClass:"buttom_line"},[a("span",{staticClass:"or"},[e._v(e._s("02"==t.approveType?"会":"03"==t.approveType?"或":""))])]):e._e(),a("div",{staticClass:"left_line"}),a("div",{staticClass:"chang_line",class:0==o&&0==n?"frist_del_25":""},[a("div",{staticClass:"del_50"})]),e.showIcon?a("div",{staticClass:"showIcons"},[a("div",{staticClass:"icon",on:{click:function(t){return e.see(s)}}},[a("a-icon",{attrs:{type:"mobile"}})],1),a("div",{staticClass:"icon del",on:{click:function(a){return e.delNode(t.childNode,n,o,t,s)}}},[a("a-icon",{attrs:{type:"delete"}})],1)]):e._e(),e.showYey?a("div",{staticClass:"showIcons"},["0"==s.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"}})],1):e._e(),"1"==s.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"stop",theme:"twoTone",twoToneColor:"red"}})],1):e._e(),"2"==s.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#515151"}})],1):e._e(),"3"==s.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"4"==s.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"5"==s.executeStatus?a("div",{staticClass:"iscon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"6"==s.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e()]):e._e()])])}))],2)})),0)},s=[],n=(a("a434"),a("5530")),r={name:"ProcessFigure",model:{prop:"taskNodeInfos",event:"change"},props:{id:String,taskNodeInfos:{type:Array,required:!1},showIcon:{type:Boolean,required:!1},showYey:{type:Boolean,required:!1}},data:function(){return{formItemLayout:{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:13}}}}},created:function(){},computed:{},methods:{change:function(e){console.log(e),this.$emit("change",e)},addNode:function(e){console.log(this),this.$refs.addNode.$refs.modal.show()},delNode:function(e,t,a,o,s){o&&e.length<=2?(o.childNode=[],o=Object(n["a"])(Object(n["a"])({},o),s),o.approveType="01"):e.splice&&e.splice(t,1)},down:function(e,t){e[t]=e.splice(t+1,1,e[t])[0]},up:function(e,t){e[t]=e.splice(t-1,1,e[t])[0]}},watch:{taskNodeInfos:function(e){}}},i=r,l=(a("e173"),a("2877")),c=Object(l["a"])(i,o,s,!1,null,null,null);t["default"]=c.exports},"646e":function(e,t,a){"use strict";var o=a("44aa"),s=a.n(o);s.a},b8a7:function(e,t,a){},e173:function(e,t,a){"use strict";var o=a("b8a7"),s=a.n(o);s.a},e40f:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",{staticClass:"layout"},[a("div",{staticClass:"top",attrs:{slot:"top"},slot:"top"},[a("div",{staticClass:"title"},[e._v("流程基本信息")]),a("div",{staticClass:"processUser"},[a("a-form-model",e._b({ref:"ruleForm",attrs:{form:e.detailData.flowCatalogInfo,model:e.detailData.flowCatalogInfo,layout:e.layout,rules:e.rules}},"a-form-model",e.formItemLayout,!1),[a("a-form-model-item",{ref:"flowName",attrs:{label:"流程名称",prop:"flowName"}},[a("a-input",{attrs:{placeholder:"请输入流程名称"},on:{blur:function(){e.$refs.flowName.onFieldBlur()}},model:{value:e.detailData.flowCatalogInfo.flowName,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"flowName",t)},expression:"detailData.flowCatalogInfo.flowName"}})],1),a("a-form-model-item",{attrs:{label:"流程类型",prop:"flowType"}},[a("a-select",{attrs:{placeholder:"请选择"},on:{change:function(){e.$refs.flowName.onFieldChange()}},model:{value:e.detailData.flowCatalogInfo.flowType,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"flowType",t)},expression:"detailData.flowCatalogInfo.flowType"}},[a("a-select-option",{attrs:{value:"01"}},[e._v(" 业务类型 ")]),a("a-select-option",{attrs:{value:"02"}},[e._v(" 表单类型 ")])],1)],1),"01"==e.detailData.flowCatalogInfo.flowType?a("a-form-model-item",{attrs:{label:"业务类型",prop:"businessType"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.detailData.flowCatalogInfo.businessType,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"businessType",t)},expression:"detailData.flowCatalogInfo.businessType"}},e._l(e.businessType,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),"02"==e.detailData.flowCatalogInfo.flowType?a("a-form-model-item",{attrs:{label:"表单类型",prop:"formType"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.detailData.flowCatalogInfo.formType,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"formType",t)},expression:"detailData.flowCatalogInfo.formType"}},e._l(e.formType,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.id}},[e._v(" "+e._s(t.formTypeName)+" ")])})),1)],1):e._e(),"02"==e.detailData.flowCatalogInfo.flowType?a("a-form-model-item",{attrs:{label:"表单模板",prop:"formModel"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.detailData.flowCatalogInfo.formModel,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"formModel",t)},expression:"detailData.flowCatalogInfo.formModel"}},e._l(e.formModelData,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.id}},[e._v(" "+e._s(t.formName)+" ")])})),1)],1):e._e(),a("a-form-model-item",{attrs:{label:"是否督办",prop:"superviseNum"}},[a("a-radio-group",{on:{change:e.onChange},model:{value:e.detailData.flowCatalogInfo.superviseNum,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"superviseNum",t)},expression:"detailData.flowCatalogInfo.superviseNum"}},[a("a-radio",{attrs:{value:1}},[e._v(" 是 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 否 ")])],1)],1),a("a-form-model-item",{attrs:{label:"流程说明",prop:"description"}},[a("a-textarea",{attrs:{placeholder:"请输入至少五个字符",rows:3},model:{value:e.detailData.flowCatalogInfo.description,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"description",t)},expression:"detailData.flowCatalogInfo.description"}})],1),a("a-form-model-item",{attrs:{required:"",label:"适用范围"}},[a("ScopeApplication",{ref:"SelectIndex",attrs:{checkedDataType:[2],allCheckedList:e.rangeInfo},on:{getRangeInfo:e.getRangeInfo}})],1),a("a-form-model-item",{staticClass:"tooltip-item",attrs:{label:"撤销提醒",prop:"cancelRemind"}},[a("a-select",{attrs:{placeholder:"请选择"},on:{change:function(){e.$refs.flowName.onFieldChange()}},model:{value:e.detailData.flowCatalogInfo.cancelRemind,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"cancelRemind",t)},expression:"detailData.flowCatalogInfo.cancelRemind"}},[a("a-select-option",{attrs:{value:"01"}},[e._v(" 是 ")]),a("a-select-option",{attrs:{value:"02"}},[e._v(" 否 ")])],1),a("a-tooltip",{staticClass:"a-tooltip-request",attrs:{placement:"right"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("div",[e._v("说明：")]),a("span",[e._v("发起人撤销流程时是否提醒已")]),a("span",[e._v("经处理过该流程的审批人员")])]),a("a-icon",{attrs:{type:"question-circle"}})],1)],1),a("a-form-model-item",{staticClass:"tooltip-item",attrs:{label:"生效时间",prop:"date1"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{valueFormat:"YYYY-MM-DD hh:mm:ss",format:"YYYY-MM-DD hh:mm:ss",disabled:e.detailData.flowCatalogInfo.effectiveNow,"disabled-date":e.disabledDate,"disabled-time":e.disabledDateTime,"show-time":{defaultValue:e.moment("00:00:00","HH:mm:ss")},placeholder:"选择日期时间"},on:{change:function(){e.$refs.flowName.onFieldChange()},ok:e.ok},model:{value:e.detailData.flowCatalogInfo.effectiveTime,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"effectiveTime",t)},expression:"detailData.flowCatalogInfo.effectiveTime"}}),a("a-checkbox",{staticClass:"a-tooltip-now",model:{value:e.detailData.flowCatalogInfo.effectiveNow,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"effectiveNow",t)},expression:"detailData.flowCatalogInfo.effectiveNow"}},[e._v("马上 ")])],1)],1)],1)]),a("div",{staticClass:"body"},[a("div",{staticClass:"title"},[e._v("流程设置")]),a("div",{staticClass:"splc"},[e._v("审批流程：")]),a("ProcessFigure",{ref:"ProcessFigure",staticClass:"ProcessFigure",attrs:{showIcon:!0},scopedSlots:e._u([{key:"rigth_content",fn:function(t){var o=t.scoped;return[a("div",{staticClass:"rigth_content"},[a("div",{staticClass:"lable"},[e._v(" 审批人: "),a("div",{staticClass:"user"},[e._v(e._s(o.taskUserName))])])])]}}]),model:{value:e.detailData.taskNodeInfos,callback:function(t){e.$set(e.detailData,"taskNodeInfos",t)},expression:"detailData.taskNodeInfos"}}),a("div",{staticClass:"list add",on:{click:function(t){return e.addNodeBtn(e.detailData.taskNodeInfos.length)}}},[a("a-icon",{attrs:{type:"plus"}}),e._v("添加")],1)],1),a("a-row",{staticClass:"btn"},[a("a-button",{staticClass:"sumbit",attrs:{type:"primary"},on:{click:e.creatFlow}},[e._v("确定")])],1)],1),a("Modal",{ref:"superviseModal",attrs:{title:"督办设置"},on:{ok:e.superviseSubmit,close:e.close}},[a("a-form-model",{ref:"ruleFormSuperviseInfo",attrs:{form:e.detailData.flowCatalogInfo.superviseInfo,model:e.detailData.flowCatalogInfo.superviseInfo,rules:e.rules,"label-col":{span:4},"wrapper-col":{span:14}}},[a("a-form-model-item",{attrs:{label:"普通督办：",prop:"ordinarySupervise"}},[a("a-input-number",{staticClass:"supervise_div",attrs:{placeholder:"请设置普通督办时长"},model:{value:e.detailData.flowCatalogInfo.superviseInfo.ordinarySupervise,callback:function(t){e.$set(e.detailData.flowCatalogInfo.superviseInfo,"ordinarySupervise",t)},expression:"detailData.flowCatalogInfo.superviseInfo.ordinarySupervise"}}),e._v("小时 ")],1),a("a-form-model-item",{attrs:{label:"黄牌督办：",prop:"yellowSupervise"}},[a("a-input-number",{staticClass:"supervise_div",attrs:{placeholder:"请设置黄牌督办时长"},model:{value:e.detailData.flowCatalogInfo.superviseInfo.yellowSupervise,callback:function(t){e.$set(e.detailData.flowCatalogInfo.superviseInfo,"yellowSupervise",t)},expression:"detailData.flowCatalogInfo.superviseInfo.yellowSupervise"}}),e._v("小时 ")],1),a("a-form-model-item",{attrs:{label:"红牌督办：",prop:"redSupervise"}},[a("a-input-number",{staticClass:"supervise_div",attrs:{placeholder:"请设置红牌督办时长"},model:{value:e.detailData.flowCatalogInfo.superviseInfo.redSupervise,callback:function(t){e.$set(e.detailData.flowCatalogInfo.superviseInfo,"redSupervise",t)},expression:"detailData.flowCatalogInfo.superviseInfo.redSupervise"}}),e._v("小时 ")],1)],1)],1)],1)},s=[],n=(a("a434"),a("b0c0"),a("5530")),r=(a("96cf"),a("1da1")),i=a("c1df"),l=a.n(i),c=a("cc33"),d=a("388f"),f=a("2f62"),u=a("86da"),p=a("e96b"),m=a("4edf"),v={components:{ProcessFigure:m["default"],Modal:u["a"],ScopeApplication:p["a"]},props:["id"],data:function(){return{showIcon:!1,other:"",businessType:[],detailData:{flowCatalogInfo:{createUser:Object(c["f"])().userId,createUserName:Object(c["f"])().name,description:"",effectiveNow:!1,effectiveTime:void 0,flowName:"",flowType:"01",tenantId:Object(c["f"])().tenantId,tenantName:Object(c["f"])().tenantName,rangeInfo:[],superviseInfo:{ordinarySupervise:"",redSupervise:"",yellowSupervise:""}},taskNodeInfos:[]},layout:"vertical",formItemLayout:{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:14}}},formType:[],formModelData:[],rangeInfo:[],visible:!1,isRouterAlive:!0,rules:{flowName:[{required:!0,message:"不能为空",trigger:"blur"}],flowType:[{required:!0,message:"不能为空",trigger:"change"}],description:[{required:!0,message:"不能为空",trigger:"change"},{min:5,message:"请输入至少五个字符",trigger:"change"}],region:[{required:!0,message:"不能为空",trigger:"change"}],businessType:[{required:!0,message:"不能为空",trigger:"change"}],superviseNum:[{required:!0,message:"不能为空",trigger:"change"}],formType:[{required:!0,message:"不能为空",trigger:"change"}],formModel:[{required:!0,message:"不能为空",trigger:"change"}],type:[{type:"array",required:!0,message:"不能为空",trigger:"change"}],date1:[{required:!1,message:""}],resource:[{required:!0,message:"不能为空",trigger:"change"}],desc:[{required:!0,message:"不能为空",trigger:"blur"}],ordinarySupervise:[{required:!1,message:"不能为空",trigger:"change"}],yellowSupervise:[{required:!1,message:"不能为空",trigger:"change"}],redSupervise:[{required:!1,message:"不能为空",trigger:"change"}]}}},watch:{detailData:function(e){console.log(e)}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dataDictionary(),e.getFormTypeTenantType(),!e.$route.params.flowCatalogInfo&&!e.$route.params.taskNodeInfos){t.next=8;break}e.detailData.flowCatalogInfo=e.$route.params.flowCatalogInfo,e.detailData.taskNodeInfos=e.$route.params.taskNodeInfos,e.$nextTick((function(){e.rangeInfo=e.detailData.flowCatalogInfo.rangeInfo})),t.next=13;break;case 8:if(!e.id||e.$route.params.flowCatalogInfo&&e.$route.params.taskNodeInfos){t.next=13;break}return t.next=11,e.processObj({id:e.id});case 11:a=t.sent,a&&(e.detailData=e.initTaskNodeInfos(a),e.$nextTick((function(){e.rangeInfo=e.detailData.flowCatalogInfo.rangeInfo})));case 13:case"end":return t.stop()}}),t)})))()},computed:Object(n["a"])({},Object(f["d"])({loading:function(e){return e.SysUser.loading}})),methods:Object(n["a"])(Object(n["a"])({},Object(f["b"])({processObj:"SysProcess/getProcessFrom",addEidtProcess:"SysProcess/addEidtProcess",onChildDictionary:"SysDictionary/onChildDictionary"})),{},{dataDictionary:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.onChildDictionary({majorKey:"SJSK_BUSINESS_TYPE"});case 2:e.businessType=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getFormTypeTenantType:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={tenantId:Object(c["f"])().tenantId},t.next=3,Object(d["l"])(a);case 3:return o=t.sent,o&&(e.formType=o.data),t.next=7,Object(d["h"])({tenantId:Object(c["f"])().tenantId,searchType:0});case 7:s=t.sent,s&&(e.formModelData=s.data);case 9:case"end":return t.stop()}}),t)})))()},range:function(e,t){for(var a=[],o=e;o<t;o++)a.push(o);return a},onChange:function(e){1==e.target.value?this.$refs.superviseModal.visible=!0:this.detailData.flowCatalogInfo.superviseInfo={}},superviseSubmit:function(){var e=this;this.$refs.ruleFormSuperviseInfo.validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=4;break}e.$refs.superviseModal.visible=!1,t.next=6;break;case 4:return console.log("error submit!!"),t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},close:function(){console.log("取消督办设置")},disabledDate:function(e){return e&&e<l()().endOf("day")},disabledDateTime:function(){var e=this;return{disabledHours:function(){return e.range(0,24).splice(13,20)},disabledMinutes:function(){return e.range(30,60)},disabledSeconds:function(){return[55,56]}}},showModleScope:function(){this.$refs.scoped.$refs.modal.show(),this.$refs.scoped.setKey(this.detailData.flowCatalogInfo.useScopeDtoList)},setcoped:function(e){console.log(e),this.detailData.flowCatalogInfo.useScopeDtoList=e},getRangeInfo:function(e){this.detailData.flowCatalogInfo.rangeInfo=e},initTaskNodeInfos:function(e){var t=JSON.parse(JSON.stringify(e));return t.flowCatalogInfo.effectiveNow=this.detailData.effectiveNow,t},ok:function(e){console.log(e);var t=l()(e).format("YYYY-MM-DD hh:mm:ss");this.detailData.flowCatalogInfo.effectiveTime=t},creatFlow:function(){var e=this;"02"==this.detailData.flowCatalogInfo.flowType&&(this.detailData.flowCatalogInfo.businessType="02"),this.$refs.ruleForm.validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.detailData.flowCatalogInfo.effectiveNow||e.detailData.flowCatalogInfo.effectiveTime){t.next=2;break}return t.abrupt("return",e.$message.warning("生效时间没有选择"));case 2:if(!a){t.next=9;break}return t.next=5,e.addEidtProcess(e.detailData);case 5:o=t.sent,o&&(e.$message.success(o),e.$router.push("/process")),t.next=11;break;case 9:return console.log("error submit!!"),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addNodeBtn:function(e){if("processAdd"==this.$route.name)console.log(this.detailData),this.$router.push({name:"processAddNode",params:this.detailData});else if("processEidt"==this.$route.name){var t={};t=Object.assign({id:this.id},this.detailData),this.$router.push({name:"processEidtNode",params:t})}},reload:function(){var e=this;this.isRouterAlive=!1,this.$nextTick((function(){return e.isRouterAlive=!0}))}})},g=v,w=(a("646e"),a("2877")),h=Object(w["a"])(g,o,s,!1,null,"859a0d36",null);t["default"]=h.exports}}]);