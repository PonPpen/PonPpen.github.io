(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1325a584","chunk-3075788c"],{"388f":function(e,t,a){"use strict";a.d(t,"i",(function(){return n})),a.d(t,"j",(function(){return s})),a.d(t,"n",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"k",(function(){return c})),a.d(t,"l",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"h",(function(){return f})),a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"f",(function(){return v})),a.d(t,"m",(function(){return g})),a.d(t,"a",(function(){return h})),a.d(t,"g",(function(){return w}));var o=a("a27e"),r={formTypeList:"/flow-service/form/type/list",formTypeSave:"/flow-service/form/type/save",formTypeId:"/flow-service/form/type",formTypeStatus:"/flow-service/form/type/status",formTypeTenantType:"/flow-service/form/type/tenantType",formTypeTypeModels:"/flow-service/form/type/typeModels",formModelList:"/flow-service/form/model/list",formModelTenantModel:"/flow-service/form/model/tenantModel",formModelCreate:"/flow-service/form/model/create",formModelCopy:"/flow-service/form/model/copy",formModelSave:"/flow-service/form/model/save",formModelId:"/flow-service/form/model",formModelStatus:"/flow-service/form/model/status"};function n(e){return Object(o["a"])({url:r.formTypeList,method:"POST",data:e})}function s(e){return Object(o["a"])({url:r.formTypeSave,method:"POST",data:e})}function l(e){return Object(o["a"])({url:r.formTypeId+"/".concat(e),method:"GET"})}function i(e){return Object(o["a"])({url:r.formTypeId+"/".concat(e),method:"DELETE"})}function c(e){return Object(o["a"])({url:r.formTypeStatus,method:"POST",data:e})}function d(e){return Object(o["a"])({url:r.formTypeTenantType,method:"POST",data:e})}function u(e){return Object(o["a"])({url:r.formModelList,method:"POST",data:e})}function f(e){return Object(o["a"])({url:r.formModelTenantModel,method:"POST",data:e})}function m(e){return Object(o["a"])({url:r.formModelCreate,method:"POST",data:e})}function p(e){return Object(o["a"])({url:r.formModelCopy,method:"POST",data:e})}function v(e){return Object(o["a"])({url:r.formModelSave,method:"POST",data:e})}function g(e){return Object(o["a"])({url:r.formModelId+"/".concat(e),method:"GET"})}function h(e){return Object(o["a"])({url:r.formModelId+"/".concat(e),method:"DELETE"})}function w(e){return Object(o["a"])({url:r.formModelStatus,method:"POST",data:e})}},"4edf":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition-group",{attrs:{tag:"ul"}},e._l(e.taskNodeInfos,(function(t,o){return a("div",{key:o,staticClass:"boxLists"},[null==t.childNode||t.childNode.length<2?a("div",{staticClass:"ordinary"},[a("div",{staticClass:"list"},[a("div",{staticClass:"left"},[a("div",{staticClass:"number"},[e._v(e._s(o+1))])]),a("div",{staticClass:"right"},[a("div",{staticClass:"text"},[e._v("第"+e._s(o+1)+"级审批")]),e._t("rigth_content",null,{scoped:t,index:o})],2),o!=e.taskNodeInfos.length-1?a("div",{staticClass:"buttom_line"}):e._e(),e.showIcon?a("div",{staticClass:"showIcons"},[0!=o?a("div",{staticClass:"icon top",class:o==e.taskNodeInfos.length-1?"offset_up_icon":"",on:{click:function(t){return e.up(e.taskNodeInfos,o)}}},[a("a-icon",{attrs:{type:"up"}})],1):e._e(),o!=e.taskNodeInfos.length-1?a("div",{staticClass:"icon down",on:{click:function(t){return e.down(e.taskNodeInfos,o)}}},[a("a-icon",{attrs:{type:"down"}})],1):e._e(),a("div",{staticClass:"icon del",on:{click:function(t){return e.delNode(e.taskNodeInfos,o)}}},[a("a-icon",{attrs:{type:"delete"}})],1)]):e._e(),e.showYey?a("div",{staticClass:"showIcons"},["0"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"}})],1):e._e(),"1"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"stop",theme:"twoTone",twoToneColor:"red"}})],1):e._e(),"2"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#515151"}})],1):e._e(),"3"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"4"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"5"==t.executeStatus?a("div",{staticClass:"icon"},[e._v('="eye" theme="twoTone" twoToneColor="#d81e06" /> ')]):e._e(),"6"==t.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e()]):e._e()])]):e._l(t.childNode,(function(r,n){return a("div",{key:n,staticClass:"willAndOr"},[a("div",{staticClass:"list"},[a("div",{staticClass:"left"},[a("div",{staticClass:"number"},[e._v(e._s(o+1))])]),a("div",{staticClass:"right"},[a("div",{staticClass:"text"},[e._v("第"+e._s(o+1)+"级审批")]),e._t("rigth_content",null,{scoped:r,index:o})],2),n!=t.childNode.length-1?a("div",{staticClass:"buttom_line"},[a("span",{staticClass:"or"},[e._v(e._s("02"==t.approveType?"会":"03"==t.approveType?"或":""))])]):e._e(),a("div",{staticClass:"left_line"}),a("div",{staticClass:"chang_line",class:0==o&&0==n?"frist_del_25":""},[a("div",{staticClass:"del_50"})]),e.showIcon?a("div",{staticClass:"showIcons"},[a("div",{staticClass:"icon",on:{click:function(t){return e.see(r)}}},[a("a-icon",{attrs:{type:"mobile"}})],1),a("div",{staticClass:"icon del",on:{click:function(a){return e.delNode(t.childNode,n,o,t,r)}}},[a("a-icon",{attrs:{type:"delete"}})],1)]):e._e(),e.showYey?a("div",{staticClass:"showIcons"},["0"==r.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"}})],1):e._e(),"1"==r.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"stop",theme:"twoTone",twoToneColor:"red"}})],1):e._e(),"2"==r.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#515151"}})],1):e._e(),"3"==r.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"4"==r.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"5"==r.executeStatus?a("div",{staticClass:"iscon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e(),"6"==r.executeStatus?a("div",{staticClass:"icon"},[a("a-icon",{attrs:{type:"eye",theme:"twoTone",twoToneColor:"#d81e06"}})],1):e._e()]):e._e()])])}))],2)})),0)},r=[],n=(a("a434"),a("5530")),s={name:"ProcessFigure",model:{prop:"taskNodeInfos",event:"change"},props:{id:String,taskNodeInfos:{type:Array,required:!1},showIcon:{type:Boolean,required:!1},showYey:{type:Boolean,required:!1}},data:function(){return{formItemLayout:{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:13}}}}},created:function(){},computed:{},methods:{change:function(e){console.log(e),this.$emit("change",e)},addNode:function(e){console.log(this),this.$refs.addNode.$refs.modal.show()},delNode:function(e,t,a,o,r){o&&e.length<=2?(o.childNode=[],o=Object(n["a"])(Object(n["a"])({},o),r),o.approveType="01"):e.splice&&e.splice(t,1)},down:function(e,t){e[t]=e.splice(t+1,1,e[t])[0]},up:function(e,t){e[t]=e.splice(t-1,1,e[t])[0]}},watch:{taskNodeInfos:function(e){}}},l=s,i=(a("e173"),a("2877")),c=Object(i["a"])(l,o,r,!1,null,null,null);t["default"]=c.exports},"58e7":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SplitLayout",{staticClass:"layout"},[a("div",{staticClass:"top",attrs:{slot:"top"},slot:"top"},[a("div",{staticClass:"title"},[e._v("流程基本信息")]),a("div",{staticClass:"processUser"},[a("a-form-model",{ref:"ruleForm",attrs:{form:e.detailData.flowCatalogInfo,model:e.detailData.flowCatalogInfo,"label-col":e.labelCol,"wrapper-col":e.wrapperCol,rules:e.rules}},[a("a-form-model-item",e._b({ref:"flowName",attrs:{label:"流程名称",prop:"flowName"}},"a-form-model-item",e.formItemLayout,!1),[a("a-input",{attrs:{placeholder:"请输入流程名称"},on:{blur:function(){e.$refs.flowName.onFieldBlur()}},model:{value:e.detailData.flowCatalogInfo.flowName,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"flowName",t)},expression:"detailData.flowCatalogInfo.flowName"}})],1),a("a-form-model-item",e._b({attrs:{label:"流程类型",prop:"flowType"}},"a-form-model-item",e.formItemLayout,!1),[a("a-select",{attrs:{placeholder:"请选择"},on:{change:function(){e.$refs.flowName.onFieldChange()}},model:{value:e.detailData.flowCatalogInfo.flowType,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"flowType",t)},expression:"detailData.flowCatalogInfo.flowType"}},[a("a-select-option",{attrs:{value:"01"}},[e._v(" 业务类型 ")]),a("a-select-option",{attrs:{value:"02"}},[e._v(" 表单类型 ")])],1)],1),"01"==e.detailData.flowCatalogInfo.flowType?a("a-form-model-item",e._b({attrs:{label:"业务类型",prop:"businessType"}},"a-form-model-item",e.formItemLayout,!1),[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.detailData.flowCatalogInfo.businessType,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"businessType",t)},expression:"detailData.flowCatalogInfo.businessType"}},e._l(e.businessType,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),"02"==e.detailData.flowCatalogInfo.flowType?a("a-form-model-item",e._b({attrs:{label:"表单类型",prop:"formType"}},"a-form-model-item",e.formItemLayout,!1),[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.detailData.flowCatalogInfo.formType,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"formType",t)},expression:"detailData.flowCatalogInfo.formType"}},e._l(e.formType,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.id}},[e._v(" "+e._s(t.formTypeName)+" ")])})),1)],1):e._e(),"02"==e.detailData.flowCatalogInfo.flowType?a("a-form-model-item",e._b({attrs:{label:"表单模板",prop:"formModel"}},"a-form-model-item",e.formItemLayout,!1),[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.detailData.flowCatalogInfo.formModel,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"formModel",t)},expression:"detailData.flowCatalogInfo.formModel"}},e._l(e.formModelData,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.id}},[e._v(" "+e._s(t.formName)+" ")])})),1)],1):e._e(),a("a-form-model-item",e._b({attrs:{label:"是否督办",prop:"superviseNum"}},"a-form-model-item",e.formItemLayout,!1),[a("a-radio-group",{on:{change:e.onChange},model:{value:e.detailData.flowCatalogInfo.superviseNum,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"superviseNum",t)},expression:"detailData.flowCatalogInfo.superviseNum"}},[a("a-radio",{attrs:{value:1}},[e._v(" 是 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 否 ")])],1)],1),a("a-form-model-item",e._b({attrs:{label:"流程说明",prop:"description"}},"a-form-model-item",e.formItemLayout,!1),[a("a-textarea",{attrs:{placeholder:"请输入至少五个字符",rows:3},model:{value:e.detailData.flowCatalogInfo.description,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"description",t)},expression:"detailData.flowCatalogInfo.description"}})],1),a("a-form-model-item",e._b({attrs:{required:"",label:"适用范围"}},"a-form-model-item",e.formItemLayout,!1),[a("ScopeApplication",{ref:"SelectIndex",attrs:{checkedDataType:[2],allCheckedList:e.rangeInfo},on:{getRangeInfo:e.getRangeInfo}})],1),a("a-form-model-item",e._b({staticClass:"tooltip-item",attrs:{label:"撤销提醒",prop:"cancelRemind"}},"a-form-model-item",e.formItemLayout,!1),[a("a-select",{attrs:{placeholder:"请选择"},on:{change:function(){e.$refs.flowName.onFieldChange()}},model:{value:e.detailData.flowCatalogInfo.cancelRemind,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"cancelRemind",t)},expression:"detailData.flowCatalogInfo.cancelRemind"}},[a("a-select-option",{attrs:{value:"01"}},[e._v(" 是 ")]),a("a-select-option",{attrs:{value:"02"}},[e._v(" 否 ")])],1),a("a-tooltip",{staticClass:"a-tooltip-request",attrs:{placement:"right"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("div",[e._v("说明：")]),a("span",[e._v("发起人撤销流程时是否提醒已")]),a("span",[e._v("经处理过该流程的审批人员")])]),a("a-icon",{attrs:{type:"question-circle"}})],1)],1),a("a-form-model-item",e._b({staticClass:"tooltip-item",attrs:{label:"生效时间",prop:"date1"}},"a-form-model-item",e.formItemLayout,!1),[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{valueFormat:"YYYY-MM-DD hh:mm:ss",format:"YYYY-MM-DD hh:mm:ss",disabled:e.detailData.flowCatalogInfo.effectiveNow,"disabled-date":e.disabledDate,"disabled-time":e.disabledDateTime,"show-time":{defaultValue:e.moment("00:00:00","HH:mm:ss")},placeholder:"选择日期时间"},on:{change:function(){e.$refs.flowName.onFieldChange()},ok:e.ok},model:{value:e.detailData.flowCatalogInfo.effectiveTime,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"effectiveTime",t)},expression:"detailData.flowCatalogInfo.effectiveTime"}}),a("a-checkbox",{staticClass:"a-tooltip-now",model:{value:e.detailData.flowCatalogInfo.effectiveNow,callback:function(t){e.$set(e.detailData.flowCatalogInfo,"effectiveNow",t)},expression:"detailData.flowCatalogInfo.effectiveNow"}},[e._v("马上 ")])],1)],1)],1)]),a("div",{staticClass:"body"},[a("div",{staticClass:"title"},[e._v("流程设置")]),a("div",{staticClass:"splc"},[e._v("审批流程：")]),a("ProcessFigure",{ref:"ProcessFigure",staticClass:"ProcessFigure",attrs:{showIcon:!0},scopedSlots:e._u([{key:"rigth_content",fn:function(t){var o=t.scoped;return[a("div",{staticClass:"rigth_content"},[a("div",{staticClass:"lable"},[e._v(" 审批人: "),a("div",{staticClass:"user"},[e._v(e._s(o.taskUserName))])])])]}}]),model:{value:e.detailData.taskNodeInfos,callback:function(t){e.$set(e.detailData,"taskNodeInfos",t)},expression:"detailData.taskNodeInfos"}}),a("div",{staticClass:"list add",on:{click:function(t){return e.addNode(e.detailData.taskNodeInfos.length)}}},[a("a-icon",{attrs:{type:"plus"}}),e._v("添加")],1)],1),a("a-row",{staticClass:"btn"},[a("a-button",{staticClass:"sumbit",attrs:{type:"primary"},on:{click:e.creatFlow}},[e._v("确定")])],1),a("addNode",{ref:"addNode",on:{onChildValue:e.onChildValue}}),a("Modal",{ref:"superviseModal",attrs:{title:"督办设置"},on:{ok:e.superviseSubmit,close:e.close}},[a("a-form-model",{ref:"ruleFormSuperviseInfo",attrs:{form:e.detailData.flowCatalogInfo.superviseInfo,model:e.detailData.flowCatalogInfo.superviseInfo,rules:e.rules,"label-col":{span:4},"wrapper-col":{span:14}}},[a("a-form-model-item",{attrs:{label:"普通督办：",prop:"ordinarySupervise"}},[a("a-input-number",{staticClass:"supervise_div",attrs:{placeholder:"请设置普通督办时长"},model:{value:e.detailData.flowCatalogInfo.superviseInfo.ordinarySupervise,callback:function(t){e.$set(e.detailData.flowCatalogInfo.superviseInfo,"ordinarySupervise",t)},expression:"detailData.flowCatalogInfo.superviseInfo.ordinarySupervise"}}),e._v("小时 ")],1),a("a-form-model-item",{attrs:{label:"黄牌督办：",prop:"yellowSupervise"}},[a("a-input-number",{staticClass:"supervise_div",attrs:{placeholder:"请设置黄牌督办时长"},model:{value:e.detailData.flowCatalogInfo.superviseInfo.yellowSupervise,callback:function(t){e.$set(e.detailData.flowCatalogInfo.superviseInfo,"yellowSupervise",t)},expression:"detailData.flowCatalogInfo.superviseInfo.yellowSupervise"}}),e._v("小时 ")],1),a("a-form-model-item",{attrs:{label:"红牌督办：",prop:"redSupervise"}},[a("a-input-number",{staticClass:"supervise_div",attrs:{placeholder:"请设置红牌督办时长"},model:{value:e.detailData.flowCatalogInfo.superviseInfo.redSupervise,callback:function(t){e.$set(e.detailData.flowCatalogInfo.superviseInfo,"redSupervise",t)},expression:"detailData.flowCatalogInfo.superviseInfo.redSupervise"}}),e._v("小时 ")],1)],1)],1)],1)},r=[],n=(a("4160"),a("a434"),a("b0c0"),a("159b"),a("5530")),s=(a("96cf"),a("1da1")),l=a("c1df"),i=a.n(l),c=a("cc33"),d=a("388f"),u=a("2f62"),f=a("b90a"),m=a("86da"),p=a("e96b"),v=a("4edf"),g={name:"addProcess",components:{addNode:f["default"],ProcessFigure:v["default"],Modal:m["a"],ScopeApplication:p["a"]},props:["id"],data:function(){return{showIcon:!1,labelCol:{span:8},wrapperCol:{span:14},other:"",businessType:[],detailData:{flowCatalogInfo:{createUser:Object(c["f"])().userId,createUserName:Object(c["f"])().name,description:"",effectiveNow:!1,effectiveTime:void 0,flowName:"",flowType:"01",tenantId:Object(c["f"])().tenantId,tenantName:Object(c["f"])().tenantName,rangeInfo:[],superviseInfo:{ordinarySupervise:"",redSupervise:"",yellowSupervise:""}},taskNodeInfos:[]},formItemLayout:{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:13}}},formType:[],formModelData:[],rangeInfo:[],rules:{flowName:[{required:!0,message:"不能为空",trigger:"blur"}],flowType:[{required:!0,message:"不能为空",trigger:"change"}],description:[{required:!0,message:"不能为空",trigger:"change"},{min:5,message:"请输入至少五个字符",trigger:"change"}],region:[{required:!0,message:"不能为空",trigger:"change"}],businessType:[{required:!0,message:"不能为空",trigger:"change"}],superviseNum:[{required:!0,message:"不能为空",trigger:"change"}],formType:[{required:!0,message:"不能为空",trigger:"change"}],formModel:[{required:!0,message:"不能为空",trigger:"change"}],type:[{type:"array",required:!0,message:"不能为空",trigger:"change"}],date1:[{required:!1,message:""}],resource:[{required:!0,message:"不能为空",trigger:"change"}],desc:[{required:!0,message:"不能为空",trigger:"blur"}],ordinarySupervise:[{required:!1,message:"不能为空",trigger:"change"}],yellowSupervise:[{required:!1,message:"不能为空",trigger:"change"}],redSupervise:[{required:!1,message:"不能为空",trigger:"change"}]}}},watch:{detailData:function(e){console.log(e)},deep:!0},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dataDictionary(),e.getFormTypeTenantType(),null!=e.id&&void 0!=e.id){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.processObj({id:e.id});case 6:a=t.sent,a&&(e.detailData=e.initTaskNodeInfos(a),e.rangeInfo=a.flowCatalogInfo.rangeInfo);case 8:case"end":return t.stop()}}),t)})))()},computed:Object(n["a"])({},Object(u["d"])({loading:function(e){return e.SysUser.loading}})),methods:Object(n["a"])(Object(n["a"])({},Object(u["b"])({processObj:"SysProcess/getProcessFrom",addEidtProcess:"SysProcess/addEidtProcess",onChildDictionary:"SysDictionary/onChildDictionary"})),{},{dataDictionary:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.onChildDictionary({majorKey:"SJSK_BUSINESS_TYPE"});case 2:e.businessType=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getFormTypeTenantType:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={tenantId:Object(c["f"])().tenantId},t.next=3,Object(d["l"])(a);case 3:return o=t.sent,o&&(e.formType=o.data),t.next=7,Object(d["h"])({tenantId:Object(c["f"])().tenantId,searchType:0});case 7:r=t.sent,r&&(console.log(r),e.formModelData=r.data);case 9:case"end":return t.stop()}}),t)})))()},range:function(e,t){for(var a=[],o=e;o<t;o++)a.push(o);return a},onChange:function(e){1==e.target.value?this.$refs.superviseModal.visible=!0:this.detailData.flowCatalogInfo.superviseInfo={}},superviseSubmit:function(){var e=this;this.$refs.ruleFormSuperviseInfo.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=4;break}e.$refs.superviseModal.visible=!1,t.next=6;break;case 4:return console.log("error submit!!"),t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},close:function(){console.log("取消督办设置")},disabledDate:function(e){return e&&e<i()().endOf("day")},disabledDateTime:function(){var e=this;return{disabledHours:function(){return e.range(0,24).splice(13,20)},disabledMinutes:function(){return e.range(30,60)},disabledSeconds:function(){return[55,56]}}},showModleScope:function(){this.$refs.scoped.$refs.modal.show(),this.$refs.scoped.setKey(this.detailData.flowCatalogInfo.useScopeDtoList)},setcoped:function(e){console.log(e),this.detailData.flowCatalogInfo.useScopeDtoList=e},getRangeInfo:function(e){this.detailData.flowCatalogInfo.rangeInfo=e},initTaskNodeInfos:function(e){var t=JSON.parse(JSON.stringify(e));return t.flowCatalogInfo.effectiveNow=this.detailData.effectiveNow,t},ok:function(e){console.log(e);var t=i()(e).format("YYYY-MM-DD hh:mm:ss");this.detailData.flowCatalogInfo.effectiveTime=t},creatFlow:function(){var e=this;"02"==this.detailData.flowCatalogInfo.flowType&&(this.detailData.flowCatalogInfo.businessType="02"),this.$refs.ruleForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.detailData.flowCatalogInfo.effectiveNow||e.detailData.flowCatalogInfo.effectiveTime){t.next=2;break}return t.abrupt("return",e.$message.warning("生效时间没有选择"));case 2:if(!a){t.next=10;break}return console.log(e.detailData),t.next=6,e.addEidtProcess(e.detailData);case 6:o=t.sent,o&&(e.$message.success(o),e.$router.push("/process")),t.next=12;break;case 10:return console.log("error submit!!"),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},onChildValue:function(e){this.detailData.taskNodeInfos.push(this.initProcessFigureData(e))},initProcessFigureData:function(e){var t=Object(n["a"])({},e);return t.childNode.__proto__.constructor==Array?1==t.childNode.length?(t.approveType="01",t.taskUser=t.childNode[0].key,t.taskUserName=t.childNode[0].label,t.childNode=null):(t.childNode.forEach((function(e){e.approveType="01",e.expireAction=t.expireAction,e.phaseName=t.phaseName,e.taskUser=e.key,e.taskUserName=e.label,e.timeLimit=t.timeLimit,e.timeoutReminder=t.timeoutReminder})),t.expireAction=null,t.timeLimit=null,t.timeoutReminder=null,t.taskUser=null,t.taskUserName=null):(t.approveType="01",t.taskUser=t.childNode.key,t.taskUserName=t.childNode.label,t.childNode=null),t},addNode:function(e){this.$refs.addNode.$refs.modal.visible=!0}})},h=g,w=(a("828b"),a("2877")),b=Object(w["a"])(h,o,r,!1,null,"f5e2b79c",null);t["default"]=b.exports},6532:function(e,t,a){"use strict";var o=a("e7b0"),r=a.n(o);r.a},"6b47":function(e,t,a){},"828b":function(e,t,a){"use strict";var o=a("6b47"),r=a.n(o);r.a},b8a7:function(e,t,a){},b90a:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"新增流程节点"},on:{ok:e.submit}},[a("a-form",{attrs:{form:e.form,"label-col":{span:4},"wrapper-col":{span:18}}},[a("a-form-item",{attrs:{label:"流程名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phaseName",{rules:[{required:!0,message:"请选择节点名称"}]}],expression:"['phaseName', { rules: [{ required: true, message: '请选择节点名称' }] }]"}]})],1),a("a-form-item",{attrs:{label:"审批类型"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["approveType",{rules:[{required:!0,message:"请选择"}],initialValue:0}],expression:"[ 'approveType', { rules: [{ required: true, message: '请选择' }], initialValue: 0, } ]"}],on:{change:function(t){return e.changeRadio()}}},[a("a-radio",{style:e.radioStyle,attrs:{value:"01"}},[e._v("普通")]),a("span",{staticClass:"text"},[e._v("只能设置一人作为审批人")]),a("a-radio",{style:e.radioStyle,attrs:{value:"02"}},[e._v("会签")]),a("span",{staticClass:"text"},[e._v("可设置多人。所有人同意时，流转到下一个审批节点；任一人不同意时，退回指定节点")]),a("a-radio",{style:e.radioStyle,attrs:{value:"03"}},[e._v("或签")]),a("span",{staticClass:"text"},[e._v("可设置多人。任一人同意时，流转到下一个审批节点；任一人不同意时，退回指定节点 ")])],1)],1),a("a-form-item",{attrs:{label:"审批人"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["childNode",{rules:[{required:!0,message:"请选择审批人"}]}],expression:"['childNode', { rules: [{ required: true, message: '请选择审批人' }] }]"}],staticStyle:{width:"400px"},attrs:{labelInValue:"",mode:"01"!=this.form.getFieldValue("approveType")?"multiple":"",allowClear:"","option-filter-prop":"children",placeholder:"请选择审批人","filter-option":e.filterOption},on:{change:e.handleChangePeople,select:e.handleSelect,popupScroll:e.popupScroll}},e._l(e.peopleLists,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.userId}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"流程期限"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["timeLimit",{rules:[{required:!1}]}],expression:"['timeLimit', { rules: [{ required: false }] }]"}],staticStyle:{width:"400px"},attrs:{allowClear:"",placeholder:"请选择流程期限"}},e._l(e.times,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1),a("br"),a("span",[e._v("流程超过时期后，每 "),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["timeoutReminder",{rules:[{required:!1}]}],expression:"['timeoutReminder', { rules: [{ required: false }] }]"}],staticStyle:{width:"100px"},attrs:{disabled:""==this.form.getFieldValue("timeLimit")},on:{change:e.handleChange}},e._l(e.overdueTimes,(function(t,o){return a("a-select-option",{key:o,attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1),e._v("提醒一次(当前处理人)")],1)],1),a("a-form-item",{attrs:{label:"到期提醒方式"}},[a("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["expireAction",{rules:[{required:!1}]}],expression:"['expireAction', { rules: [{ required: false }] }]"}]},[a("a-checkbox",{attrs:{value:"0",name:"type",disabled:""}},[e._v(" 短信通知 ")]),a("a-checkbox",{attrs:{value:"1",name:"type",defaultChecked:""}},[e._v(" 系统通知 ")])],1)],1)],1)],1)},r=[],n=(a("c975"),a("a9e3"),a("5530")),s=(a("96cf"),a("1da1")),l=a("2f62"),i=a("86da"),c=[{label:"系统通知",value:"1"}],d={components:{Modal:i["a"]},data:function(){return{showDetails:0,times:[{value:"",name:"无"},{value:"1小时",name:"1小时"},{value:"2小时",name:"2小时"},{value:"3小时",name:"3小时"},{value:"4小时",name:"4小时"},{value:"5小时",name:"5小时"},{value:"6小时",name:"6小时"},{value:"7小时",name:"7小时"},{value:"1天",name:"1天"},{value:"2天",name:"2天"},{value:"3天",name:"3天"},{value:"一周",name:"一周"},{value:"10天",name:"10天"},{value:"1个月",name:"1个月"}],overdueTimes:[{value:"",name:"无"},{value:"5分钟",name:"5分钟"},{value:"10分钟",name:"10分钟"},{value:"15分钟",name:"15分钟"},{value:"30分钟",name:"30分钟"},{value:"45分钟",name:"45分钟"},{value:"1小时",name:"1小时"},{value:"2小时",name:"2小时"},{value:"3小时",name:"3小时"},{value:"5小时",name:"5小时"},{value:"8小时",name:"8小时"},{value:"12小时",name:"12小时"},{value:"1天",name:"1天"},{value:"2天",name:"2天"},{value:"3天",name:"3天"},{value:"1周",name:"1周"}],peopleLists:[],checkedList:c,indeterminate:!0,checkAll:!1,value:1,radioStyle:{display:"block",height:"30px",lineHeight:"30px"},obj:{pageSize:9999,total:Number}}},props:{title:{type:String,default:"",required:!1},showFigure:{type:Boolean,default:!0,required:!1}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadPage();case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:Object(n["a"])(Object(n["a"])({},Object(l["b"])({onPage:"SysUser/onPage"})),{},{loadPage:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={pageSize:e.obj.pageSize},t.next=3,e.onPage(a);case 3:o=t.sent,o&&o.records.length>0&&(e.obj.total=Number(o.total),e.peopleLists=o.records);case 5:case"end":return t.stop()}}),t)})))()},submit:function(e){var t=this;this.form.validateFieldsAndScroll((function(e,a){e||(t.$refs.modal.visible=!1,t.$emit("onChildValue",a))}))},onSelectTree:function(e){},handleChangePeople:function(e){console.log(e)},handleChange:function(e){},handleSelect:function(e){console.log(e)},popupScroll:function(e){},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},changeRadio:function(){},close:function(){this.form.resetFields()}}),watch:{}},u=d,f=(a("6532"),a("2877")),m=Object(f["a"])(u,o,r,!1,null,"29dc5f89",null);t["default"]=m.exports},e173:function(e,t,a){"use strict";var o=a("b8a7"),r=a.n(o);r.a},e7b0:function(e,t,a){}}]);