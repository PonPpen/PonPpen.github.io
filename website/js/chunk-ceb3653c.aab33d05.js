(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ceb3653c"],{"288a":function(e,t,r){},"388f":function(e,t,r){"use strict";r.d(t,"i",(function(){return o})),r.d(t,"j",(function(){return i})),r.d(t,"n",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"k",(function(){return u})),r.d(t,"l",(function(){return f})),r.d(t,"e",(function(){return l})),r.d(t,"h",(function(){return m})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"f",(function(){return h})),r.d(t,"m",(function(){return g})),r.d(t,"a",(function(){return v})),r.d(t,"g",(function(){return b}));var n=r("a27e"),a={formTypeList:"/flow-service/form/type/list",formTypeSave:"/flow-service/form/type/save",formTypeId:"/flow-service/form/type",formTypeStatus:"/flow-service/form/type/status",formTypeTenantType:"/flow-service/form/type/tenantType",formTypeTypeModels:"/flow-service/form/type/typeModels",formModelList:"/flow-service/form/model/list",formModelTenantModel:"/flow-service/form/model/tenantModel",formModelCreate:"/flow-service/form/model/create",formModelCopy:"/flow-service/form/model/copy",formModelSave:"/flow-service/form/model/save",formModelId:"/flow-service/form/model",formModelStatus:"/flow-service/form/model/status"};function o(e){return Object(n["a"])({url:a.formTypeList,method:"POST",data:e})}function i(e){return Object(n["a"])({url:a.formTypeSave,method:"POST",data:e})}function c(e){return Object(n["a"])({url:a.formTypeId+"/".concat(e),method:"GET"})}function s(e){return Object(n["a"])({url:a.formTypeId+"/".concat(e),method:"DELETE"})}function u(e){return Object(n["a"])({url:a.formTypeStatus,method:"POST",data:e})}function f(e){return Object(n["a"])({url:a.formTypeTenantType,method:"POST",data:e})}function l(e){return Object(n["a"])({url:a.formModelList,method:"POST",data:e})}function m(e){return Object(n["a"])({url:a.formModelTenantModel,method:"POST",data:e})}function d(e){return Object(n["a"])({url:a.formModelCreate,method:"POST",data:e})}function p(e){return Object(n["a"])({url:a.formModelCopy,method:"POST",data:e})}function h(e){return Object(n["a"])({url:a.formModelSave,method:"POST",data:e})}function g(e){return Object(n["a"])({url:a.formModelId+"/".concat(e),method:"GET"})}function v(e){return Object(n["a"])({url:a.formModelId+"/".concat(e),method:"DELETE"})}function b(e){return Object(n["a"])({url:a.formModelStatus,method:"POST",data:e})}},"8cc5":function(e,t,r){"use strict";var n=r("d41e"),a=r.n(n);a.a},ca0d:function(e,t,r){"use strict";var n=r("288a"),a=r.n(n);a.a},cf45:function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"l",(function(){return a})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"j",(function(){return s})),r.d(t,"i",(function(){return u})),r.d(t,"k",(function(){return f})),r.d(t,"m",(function(){return l})),r.d(t,"o",(function(){return m})),r.d(t,"p",(function(){return d})),r.d(t,"n",(function(){return p})),r.d(t,"q",(function(){return h})),r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return v})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return y}));r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("1276");function n(e,t,r){var n=new RegExp(/^((\+?86)|(\(\+86\)))?1[3456789]\d{9}$/);t&&!n.test(t)?r("当前联系方式不符合规范!"):r()}function a(e,t,r){var n=new RegExp(/^([0-9]{3,4}-)?[0-9]{7,8}$/);t&&!n.test(t)?r("当前联系方式不符合规范!"):r()}function o(e,t,r){var n=new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);t&&!n.test(t)?r("当前身份证不符合规范!"):r()}function i(e,t,r){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?r("姓名不符合规范，只允许输入汉字和英文!"):t&&t.length<2?r("姓名长度不能小于1个字符"):t&&t.length>20?r("输入长度不能大于20个字符"):r()}function c(e,t,r){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,20}$/);t&&!n.test(t)?r("现在居住地不符合规范，包含中英文字母数字或下划线!"):t&&t.length<2?r("现在居住地长度不能小于1个字符"):r()}function s(e,t,r){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?r("毕业院校不符合规范，只允许输入汉字和英文!"):t&&t.length<2?r("毕业院校长度不能小于1个字符"):r()}function u(e,t,r){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?r("专业不符合规范，只允许输入汉字和英文!"):t&&t.length<2?r("专业长度不能小于1个字符"):r()}function f(e,t,r){var n=new RegExp(/^([a-zA-Z0-9_-]){1,999}$/);t&&!n.test(t)?r("输入不规范，只允许输入字母、数字以及符号_-"):t&&t.length<2?r("输入长度不能小于1个字符"):r()}function l(e,t,r){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,999}$/);t&&!n.test(t)?r("输入不规范，不允许输入特殊字符！"):t&&t.length<2?r("输入长度不能小于1个字符"):r()}function m(e,t,r){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?r("输入不规范，不允许输入特殊字符！"):t&&t.length<2?r("输入长度不能小于1个字符"):t&&t.length>20?r("输入长度不能大于20个字符"):r()}function d(e,t,r){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?r("输入不规范，不允许输入特殊字符！"):t&&t.length<2?r("输入长度不能小于1个字符"):t&&t.length>50?r("输入长度不能大于50个字符"):r()}function p(e,t,r){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?r("输入不规范，不允许输入特殊字符！"):t&&t.length<2?r("输入长度不能小于1个字符"):t&&t.length>100?r("输入长度不能大于100个字符"):r()}function h(e,t,r){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?r("输入不规范，不允许输入特殊字符！"):t&&t.length<2?r("输入长度不能小于1个字符"):t&&t.length>500?r("输入长度不能大于500个字符"):r()}function g(e,t){if(""!=e&&""!=t&&void 0!=e&&void 0!=t&&null!=e&&null!=t){var r=e.split("-"),n=t.split("-"),a=r[0]+"/"+r[1]+"/"+r[2],o=n[0]+"/"+n[1]+"/"+n[2];return a>=o}}function v(e,t){var r=new Date,n="";return n=e.replace(/-/g,"/"),n=new Date(n),n.valueOf()>r.valueOf()}function b(e,t,r){return Date.parse(e)>=Date.parse(t)||Date.parse(e)>=Date.parse(r)||Date.parse(t)>Date.parse(r)||Date.parse(r)==Date.parse(t)&&Date.parse(r)<Date.parse(e)||Date.parse(r)==Date.parse(t)&&Date.parse(t)<Date.parse(e)||Date.parse(r)>Date.parse(e)&&Date.parse(r)<Date.parse(t)}function y(e,t){var r=Date.parse(e),n=Date.parse(t);if(r>n)return 0;if(r==n)return 1;var a=(n-r)/864e5;return a}},d41e:function(e,t,r){},d99e:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-wrapper"},[r("div",[r("a-row",{attrs:{gutter:56}},[e._t("default"),r("buttonBox",{style:e.advanced?{float:"right"}:{},on:{toggleAdvanced:e.toggleAdvanced,query:e.query,reset:e.reset}})],2)],1)])},a=[],o=(r("a9e3"),r("5530")),i={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var e=arguments[0];return e("a-col",{class:"item-box",props:Object(o["a"])({},s[this.col])},[e("div",{class:"y-search-item"},[e("div",{class:"y-search-label"},[this.$props.label]),e("div",{class:"y-search-content"},[this.$slots.default])])])}},c={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var e=arguments[0];return e("a-col",{props:Object(o["a"])({},s[this.col])},[e("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[e("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),e("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),e("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",e("a-icon",{props:Object(o["a"])({},{type:this.advanced?"up":"down"})})])])])}},s={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},u={name:"SearchForm",Item:i,components:{buttonBox:c},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var e=this.$slots.default,t=this.col,r=e.length;if(r<t)document.getElementById("advance-btn").style.display="none";else for(var n=t-1;n<r;n++)e[n].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},f=u,l=(r("8cc5"),r("2877")),m=Object(l["a"])(f,n,a,!1,null,"359e9f37",null),d=m.exports;t["a"]=d},e45c:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("PageView",[r("SplitLayout",[r("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[r("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[r("SearchFormItem",{attrs:{label:"创建人："}},[r("a-input",{attrs:{allowClear:"",placeholder:"请输入创建人"},model:{value:e.formSearch.createUserName,callback:function(t){e.$set(e.formSearch,"createUserName",t)},expression:"formSearch.createUserName"}})],1),r("SearchFormItem",{attrs:{label:"表单名称："}},[r("a-input",{attrs:{allowClear:"",placeholder:"请输入表单名称"},model:{value:e.formSearch.formName,callback:function(t){e.$set(e.formSearch,"formName",t)},expression:"formSearch.formName"}})],1)],1)],1),r("OperationPermission",{attrs:{check:"privs.item1140010002"}},[r("div",{staticStyle:{"padding-bottom":"16px"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handAdd()}}},[e._v("新建")])],1)]),r("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!1,loading:e.loading,columns:e.columns,dataSource:e.pageData,onChange:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,r,n){return[e._v(e._s(n+1))]}},{key:"status",fn:function(t){return[e._v(e._s("0"===t?"启用":"停用"))]}},{key:"action",fn:function(t){return[r("OperationPermission",{attrs:{check:"privs.item1140010003"}},[r("a",{staticStyle:{"margin-right":"10px"},on:{click:function(r){return e.handEdit(t,"edit")}}},[e._v("编辑")])]),r("OperationPermission",{attrs:{check:"privs.item1140010004"}},[r("a",{staticStyle:{"margin-right":"10px"},on:{click:function(r){return e.handEdit(t,"detailed")}}},[e._v("查看")])]),r("OperationPermission",{attrs:{check:"privs.item1140010005"}},[r("a-popconfirm",{attrs:{title:"确定要删除该条记录?","ok-text":"是","cancel-text":"否"},on:{confirm:function(r){return e.handDelete(t)}}},[r("a",{staticStyle:{"margin-right":"10px"}},[e._v("删除")])])],1),r("OperationPermission",{attrs:{check:"privs.item1140010006"}},[r("a",{staticStyle:{"margin-right":"10px"},on:{click:function(r){return e.handCopy(t)}}},[e._v("复制")])]),r("OperationPermission",{attrs:{check:"privs.item1140010007"}},[r("a",{on:{click:function(r){return e.handStatus(t)}}},[e._v(e._s("0"===t.status?"停用":"启用"))])])]}}])})],1),r("a-modal",{attrs:{title:e.formStatus[e.formIndex-1].labelText,width:600,visible:e.visible,okText:1===e.formIndex?"确定":"继续"},on:{ok:e.onSubmit,cancel:e.handleCancel}},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{ref:"name",attrs:{label:"类型名称",prop:"formTypeKey"}},[r("a-select",{attrs:{placeholder:"请选择类型名称",disabled:1!==e.formIndex},model:{value:e.form.formTypeKey,callback:function(t){e.$set(e.form,"formTypeKey",t)},expression:"form.formTypeKey"}},e._l(e.formTypeData,(function(t,n){return r("a-select-option",{key:n,attrs:{value:t.id}},[e._v(e._s(t.formTypeName))])})),1)],1),r("a-form-model-item",{attrs:{label:"适用范围",prop:"formRangeInfo"}},[e.visible?r("ScopeApplication",{ref:"SelectIndex",attrs:{allCheckedList:e.formRangeInfo},on:{getRangeInfo:e.getRangeInfo}}):e._e()],1),1===e.formIndex?r("a-form-model-item",{attrs:{label:"新建方式",prop:"createWay"}},[r("a-radio-group",{staticClass:"form-radio-group",model:{value:e.form.createWay,callback:function(t){e.$set(e.form,"createWay",t)},expression:"form.createWay"}},[r("a-radio",{attrs:{value:"2"}},[r("span",[e._v("从现有的模板复制")]),r("a-select",{attrs:{placeholder:"请选择模板"},model:{value:e.form.formModelId,callback:function(t){e.$set(e.form,"formModelId",t)},expression:"form.formModelId"}},e._l(e.formModelData,(function(t,n){return r("a-select-option",{key:n,attrs:{value:t.id}},[e._v(e._s(t.formName))])})),1)],1),r("a-radio",{attrs:{value:"1"}},[e._v("不复制，直接新建")])],1)],1):e._e()],1)],1),r("a-modal",{attrs:{title:e.formStatus[e.formIndex-1].labelText,width:1100,visible:e.visiblePreview,footer:null},on:{cancel:e.handleCancelPreview}},[r("a-form-model",{attrs:{model:e.form,"label-col":{span:Object.keys(e.widgetForm).length>0?e.widgetForm.config.labelWidth:2},"wrapper-col":{span:Object.keys(e.widgetForm).length>0?22-e.widgetForm.config.labelWidth:20}}},[r("a-form-model-item",{ref:"name",attrs:{label:"类型名称",prop:"formTypeKey"}},[r("a-select",{attrs:{placeholder:"请选择类型名称",disabled:1!==e.formIndex},model:{value:e.form.formTypeKey,callback:function(t){e.$set(e.form,"formTypeKey",t)},expression:"form.formTypeKey"}},e._l(e.formTypeData,(function(t,n){return r("a-select-option",{key:n,attrs:{value:t.id}},[e._v(e._s(t.formTypeName))])})),1)],1),r("a-form-model-item",{attrs:{label:"适用范围",prop:"formRangeInfo"}},[e.visiblePreview?r("ScopeApplication",{ref:"SelectIndex",attrs:{disabled:1!==e.formIndex,allCheckedList:e.formRangeInfo},on:{getRangeInfo:e.getRangeInfo}}):e._e()],1),r("a-form-model-item",{attrs:{label:"表单名称：",prop:"formName"}},[r("a-input",{attrs:{placeholder:"请输入表单名称",disabled:1!==e.formIndex},model:{value:e.form.formName,callback:function(t){e.$set(e.form,"formName",t)},expression:"form.formName"}})],1),r("a-form-model-item",{attrs:{label:"表单描述",prop:"formDescription"}},[r("a-textarea",{attrs:{placeholder:"请输入表单描述",disabled:1!==e.formIndex},model:{value:e.form.formDescription,callback:function(t){e.$set(e.form,"formDescription",t)},expression:"form.formDescription"}})],1),r("generate-form",{ref:"generateForm",attrs:{data:e.widgetForm}})],1)],1)],1)},a=[],o=(r("4160"),r("b0c0"),r("b64b"),r("159b"),r("5530")),i=(r("96cf"),r("1da1")),c=r("cc33"),s=(r("8e9a"),r("d99e")),u=r("bf11"),f=r("e96b"),l=r("82df"),m=r("cf45"),d=r("388f"),p=s["a"].Item,h={components:{SearchForm:s["a"],SearchFormItem:p,CustomTable:u["a"],ScopeApplication:f["a"],GenerateForm:l["a"]},data:function(){var e=this;return{formStatus:[{label:"AddForm",labelText:"新增表单"},{label:"EditForm",labelText:"编辑表单"},{label:"DetailedForm",labelText:"查看表单"}],formIndex:1,formSearch:{tenantName:"",formName:"",createUserName:"",sortField:"",sortOrder:"descend",tenantId:""},pageFilter:{currentPage:1,pageSize:10},form:{},formRangeInfo:[],visible:!1,visiblePreview:!1,loading:!1,selectIndex:!1,pageData:[],formTypeData:[],formModelData:[],columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},customRender:function(t,r,n){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(n+1))}},{title:"表单类型",dataIndex:"formTypeName"},{title:"表单名称",dataIndex:"formName"},{title:"表单描述",dataIndex:"formDescription"},{title:"创建人",dataIndex:"createUserName"},{title:"创建时间",dataIndex:"createTime"},{title:"最后修改时间",dataIndex:"updateTime"},{title:"表单状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",width:"250px",align:"center",scopedSlots:{customRender:"action"}}],labelCol:{span:6},wrapperCol:{span:16},widgetForm:{},rules:{formTypeKey:[{required:!0,message:"请选择类型名称",trigger:"change"}],formRangeInfo:[{required:!1,message:"请选择适用范围",trigger:"change"}],createWay:[{required:!0,message:"请选择新建方式",trigger:"change"}]},editData:{input_1600913318000_30923:"11",textarea_1600913317000_34185:"111",time_1602556276000_39775:"10:43:43",date_1601278581000_84015:"2020-10-17"}}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.onQuery();case 2:return t.next=4,e.queryType();case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{onQuery:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=!(e.length>0&&void 0!==e[0])||e[0],n&&(t.pageFilter.currentPage=1),t.inquire(Object(o["a"])(Object(o["a"])({},t.formSearch),t.pageFilter));case 3:case"end":return r.stop()}}),r)})))()},onResetForm:function(){var e=this;Object.keys(this.formSearch).forEach((function(t){return e.formSearch[t]=""})),this.pageFilter.currentPage=1,this.onQuery()},onTableChange:function(e){this.pageFilter=e,this.inquire(Object(o["a"])(Object(o["a"])({},this.formSearch),e))},inquire:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:{},n.tenantId=Object(c["f"])().tenantId,r.next=4,Object(d["e"])(n);case 4:a=r.sent,200===a.status&&(t.pageData=a.data);case 6:case"end":return r.stop()}}),r)})))()},queryType:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["l"])({tenantId:Object(c["f"])().tenantId});case 2:return r=t.sent,200===r.status&&(e.formTypeData=r.data),t.next=6,Object(d["h"])({tenantId:Object(c["f"])().tenantId,searchType:0});case 6:n=t.sent,200===n.status&&(e.formModelData=n.data);case 8:case"end":return t.stop()}}),t)})))()},handAdd:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.formIndex=1,e.visible=!0,Object.keys(e.form).forEach((function(t){return e.form[t]=""})),e.$nextTick((function(){e.$refs.SelectIndex.tenantName=[]}));case 4:case"end":return t.stop()}}),t)})))()},handEdit:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"edit"===t?(r.formIndex=2,r.visible=!0):"detailed"===t&&(r.formIndex=3),n.next=3,Object(d["m"])(e.id);case 3:a=n.sent,200===a.status&&(3==r.formIndex&&(r.visiblePreview=!0),o=a.data,r.form=o,r.formRangeInfo=o.formRangeInfo,r.widgetForm=JSON.parse(o.formContent),r.$nextTick((function(){3==r.formIndex&&r.widgetForm.list.forEach((function(e,t){e.options.disabled=!0}))})));case 5:case"end":return n.stop()}}),n)})))()},handDelete:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(d["a"])(e.id);case 2:n=r.sent,200===n.status&&(t.$message.success(n.data),t.onQuery());case 4:case"end":return r.stop()}}),r)})))()},handCopy:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.form.id=e.id,t.copyModel();case 2:case"end":return r.stop()}}),r)})))()},handStatus:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n="0"===e.status?"1":"0",a="0"===e.status?"停用":"启用",r.next=4,Object(d["g"])({id:e.id,status:n});case 4:o=r.sent,200===o.status&&(t.$message.success("".concat(a,"成功")),t.onQuery(!1));case 6:case"end":return r.stop()}}),r)})))()},onSubmit:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=16;break}if(1!==e.formIndex||"1"!==e.form.createWay){t.next=6;break}return t.next=4,e.createModel();case 4:t.next=14;break;case 6:if(1!==e.formIndex||"2"!==e.form.createWay){t.next=11;break}return t.next=9,e.createCopyModel();case 9:t.next=14;break;case 11:if(2!==e.formIndex){t.next=14;break}return t.next=14,e.createModel(!1);case 14:t.next=18;break;case 16:return console.log("error submit!!"),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleCancel:function(e){this.visible=!1,delete this.form.formTypeKey,delete this.form.createWay,delete this.form.formModelId,delete this.form.formRangeInfo},createModel:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=!(e.length>0&&void 0!==e[0])||e[0],n?t.$router.push({name:"formManagementAdd",params:{formTypeKey:t.form.formTypeKey,formRangeInfo:t.form.formRangeInfo}}):t.$router.push({name:"formManagementAdd",params:{formContent:t.form.formContent,formDescription:t.form.formDescription,formName:t.form.formName,formRangeInfo:t.form.formRangeInfo,id:t.form.id,status:t.form.status}});case 2:case"end":return r.stop()}}),r)})))()},createCopyModel:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.createUser=Object(c["f"])().userId,e.form.createUserName=Object(c["f"])().name,e.form.tenantId=Object(c["f"])().tenantId,e.form.tenantName=Object(c["f"])().tenantName,t.next=6,Object(d["d"])(e.form);case 6:r=t.sent,200===r.status&&(e.$message.success("创建成功"),e.visible=!1,e.onQuery());case 8:case"end":return t.stop()}}),t)})))()},copyModel:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.createUser=Object(c["f"])().userId,e.form.createUserName=Object(c["f"])().name,t.next=4,Object(d["c"])(e.form);case 4:r=t.sent,200===r.status&&(e.$message.success(r.data),e.visible=!1,e.onQuery());case 6:case"end":return t.stop()}}),t)})))()},getRangeInfo:function(e){this.form.formRangeInfo=e},showSelect:function(){this.$refs.SelectIndex.showSelect()},handleCancelPreview:function(){this.visiblePreview=!1},handleDataChange:function(e,t){"date_1601278581000_84015"!==t&&"date_1602556845000_31013"!==t||(this.editData[t]=e,this.onTemDateChange(2,t,this.editData,["date_1601278581000_84015","date_1602556845000_31013"],["下发决定书日期","管控人签署日期"]))},onTemDateChange:function(e,t,r,n,a){var o=this;if(t||n||a){var i=n[0],c=n[1],s=a[0],u=a[1],f=2!=e||r[i]!==r[c],l=u+(2==e?"不能小于":"必须大于")+s,d=Object(m["c"])(r[i],r[c]);d&&f&&(this.$message.warning(l),t==i?r[i]="":t==c&&(r[c]=""),this.$nextTick((function(){o.$refs.generateForm&&o.$refs.generateForm.setData(r)})))}}}},g=h,v=(r("ca0d"),r("2877")),b=Object(v["a"])(g,n,a,!1,null,"353e31a2",null);t["default"]=b.exports}}]);