(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4436fc3f"],{"492d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",[a("div",{staticClass:"div"},[a("div",{staticClass:"tool-bar"},[a("a-row",{attrs:{type:"flex"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.onAdd()}}},[e._v("新增请假记录")])],1)],1),a("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!1,loading:e.loading,columns:e.columns,dataSource:e.pageData},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}},{key:"leaveDate",fn:function(t){return[a("span",[e._v(e._s(e.moment(t.leaveDate).format("YYYY-MM-DD")))])]}},{key:"createTime",fn:function(t){return[a("span",[e._v(e._s(e.moment(t.createTime).format("YYYY-MM-DD:MM:hh")))])]}},{key:"leaveStatus",fn:function(t){return[1===t?a("span",[e._v("未请假")]):e._e(),2===t?a("span",[e._v("请假中")]):e._e(),3===t?a("span",[e._v("已销假")]):e._e()]}},{key:"isTimeout",fn:function(t){return["1"===t?a("span",{staticClass:"red"},[e._v("否")]):e._e(),"2"===t?a("span",{staticClass:"green"},[e._v("是")]):e._e()]}},{key:"action",fn:function(t){return[1===t.leaveStatus?[a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return a.stopPropagation(),e.onRemoveHoliday(t)}}},[e._v("销假")]),a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return a.stopPropagation(),e.onEdit(t)}}},[e._v("编辑")])]:e._e(),2===t.leaveStatus?a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return a.stopPropagation(),e.onDelete(t)}}},[e._v("删除")]):e._e(),a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return a.stopPropagation(),e.onDetail(t)}}},[e._v("查看")])]}}])}),a("Modal",{ref:"modal1",attrs:{title:e.mTitle},on:{ok:e.onSubmit1}},[a("a-form-model",{ref:"ruleForm1",attrs:{model:e.formData,rules:e.rules1,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"姓名："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.realname,callback:function(t){e.$set(e.formData,"realname",t)},expression:"formData.realname"}})],1),a("a-form-model-item",{attrs:{label:"性别："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.sex,callback:function(t){e.$set(e.formData,"sex",t)},expression:"formData.sex"}})],1),a("a-form-model-item",{attrs:{label:"身份证号："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.identityCard,callback:function(t){e.$set(e.formData,"identityCard",t)},expression:"formData.identityCard"}})],1),a("a-form-model-item",{attrs:{label:"请假日期：",required:"",prop:"leaveDate"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:"请选择",disabled:e.isDetail,"show-time":"",type:"date"},model:{value:e.formData.leaveDate,callback:function(t){e.$set(e.formData,"leaveDate",t)},expression:"formData.leaveDate"}})],1),a("a-form-model-item",{attrs:{label:"请假天数：",required:"",prop:"leaveDay"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入",disabled:e.isDetail},model:{value:e.formData.leaveDay,callback:function(t){e.$set(e.formData,"leaveDay",t)},expression:"formData.leaveDay"}})],1),a("a-form-model-item",{attrs:{label:"请假理由：",required:"",prop:"leaveReason"}},[a("a-textarea",{attrs:{placeholder:"请输入",disabled:e.isDetail,rows:4},model:{value:e.formData.leaveReason,callback:function(t){e.$set(e.formData,"leaveReason",t)},expression:"formData.leaveReason"}})],1)],1)],1),a("Modal",{ref:"modal2",attrs:{title:e.mTitle},on:{ok:e.onSubmit2}},[a("a-form-model",{ref:"ruleForm2",attrs:{model:e.formData,rules:e.rules2,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"姓名："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.realname,callback:function(t){e.$set(e.formData,"realname",t)},expression:"formData.realname"}})],1),a("a-form-model-item",{attrs:{label:"性别："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.sex,callback:function(t){e.$set(e.formData,"sex",t)},expression:"formData.sex"}})],1),a("a-form-model-item",{attrs:{label:"身份证号："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.identityCard,callback:function(t){e.$set(e.formData,"identityCard",t)},expression:"formData.identityCard"}})],1),a("a-form-model-item",{attrs:{label:"请假日期："}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:"请选择",disabled:e.isDisabled,"show-time":"",type:"date"},model:{value:e.formData.leaveDate,callback:function(t){e.$set(e.formData,"leaveDate",t)},expression:"formData.leaveDate"}})],1),a("a-form-model-item",{attrs:{label:"请假天数："}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.leaveDay,callback:function(t){e.$set(e.formData,"leaveDay",t)},expression:"formData.leaveDay"}})],1),a("a-form-model-item",{attrs:{label:"销假日期：",required:"",prop:"removeDate"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:"请选择",disabled:e.isDetail,"show-time":"",type:"date"},model:{value:e.formData.removeDate,callback:function(t){e.$set(e.formData,"removeDate",t)},expression:"formData.removeDate"}})],1),a("a-form-model-item",{attrs:{label:"是否逾期：",required:"",prop:"isTimeout"}},[a("a-select",{attrs:{placeholder:"请选择",disabled:e.isDetail},model:{value:e.formData.isTimeout,callback:function(t){e.$set(e.formData,"isTimeout",t)},expression:"formData.isTimeout"}},[a("a-select-option",{attrs:{value:"1"}},[e._v(" 否 ")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" 是 ")])],1)],1),e.isTimeoutFlag?a("a-form-model-item",{attrs:{label:"逾期天数：",required:"",prop:"timeoutDay"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入",disabled:!1},model:{value:e.formData.timeoutDay,callback:function(t){e.$set(e.formData,"timeoutDay",t)},expression:"formData.timeoutDay"}})],1):a("a-form-model-item",{attrs:{label:"逾期天数："}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{disabled:!0},model:{value:e.formData.timeoutDay,callback:function(t){e.$set(e.formData,"timeoutDay",t)},expression:"formData.timeoutDay"}})],1),e.isTimeoutFlag?a("a-form-model-item",{attrs:{label:"逾期原因：",prop:"timeoutReason"}},[a("a-textarea",{attrs:{placeholder:"请输入",disabled:!1,rows:4},model:{value:e.formData.timeoutReason,callback:function(t){e.$set(e.formData,"timeoutReason",t)},expression:"formData.timeoutReason"}})],1):a("a-form-model-item",{attrs:{label:"逾期原因："}},[a("a-textarea",{attrs:{disabled:!0,rows:4},model:{value:e.formData.timeoutReason,callback:function(t){e.$set(e.formData,"timeoutReason",t)},expression:"formData.timeoutReason"}})],1)],1)],1)],1)])],1)},r=[],o=(a("a9e3"),a("bf11")),i=a("86da"),l=a("cf45"),c=a("dba5"),u={components:{CustomTable:o["a"],Modal:i["a"]},data:function(){return{formData:{leaveDate:"",leaveDay:"",leaveReason:"",removeDate:"",isTimeout:"",timeoutDay:"",timeoutReason:""},labelCol:{span:8},wrapperCol:{span:10},columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"}},{title:"请假日期",dataIndex:"leaveDate",scopedSlots:{customRender:"leaveDate"}},{title:"请假天数",dataIndex:"leaveDay"},{title:"请假理由",dataIndex:"leaveReason"},{title:"请假状态",dataIndex:"leaveStatus",scopedSlots:{customRender:"leaveStatus"}},{title:"销假日期",dataIndex:"removeDate",scopedSlots:{customRender:"removeDate"}},{title:"是否逾期",dataIndex:"isTimeout",scopedSlots:{customRender:"isTimeout"}},{title:"逾期天数",dataIndex:"timeoutDay",scopedSlots:{customRender:"timeoutDay"}},{title:"创建时间",dataIndex:"createTime",scopedSlots:{customRender:"createTime"}},{title:"操作",width:"200px",align:"center",scopedSlots:{customRender:"action"}}],rules1:{leaveDate:[{required:!0,message:"请选择请假日期"}],leaveDay:[{required:!0,message:"请输入请假天数"}],leaveReason:[{required:!0,message:"请输入请假理由"},{validator:l["q"]}]},rules2:{removeDate:[{required:!0,message:"请选择销假日期"}],isTimeout:[{required:!0,message:"请选择是否逾期"}],timeoutDay:[{required:!0,message:"请输入逾期天数"}],timeoutReason:[{required:!0,message:"请输入逾期原因"}]},pageFilter:{current:1,size:10},loading:!1,pageData:[],mTitle:"",isDisabled:!1,isDetail:!1,isAdd:!0,isRemove:!0,hospitalNo:""}},created:function(){this.getData(),this.refreshTable()},computed:{isTimeoutFlag:function(){return 1!==Number(this.formData.isTimeout)}},methods:{getData:function(){var e=JSON.parse(this.$route.query.obj);this.pageFilter.entryid=e.id,this.formData.entryid=e.id,this.formData.realname=e.realname,this.formData.sex="1"===e.sex?"男":"女",this.formData.identityCard=e.identityCard},refreshTable:function(){var e=this;this.loading=!0,c["a"].helpcompanyLeavePage(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t})).catch((function(){}))},onTableChange:function(e){this.pageFilter=e,this.refreshTable()},onAdd:function(){this.isAdd=!0,this.isDisabled=!0,this.isDetail=!1,this.$refs.modal1.visible=!0,this.mTitle="新增请假记录",this.formData.leaveDate="",this.formData.leaveDay="",this.formData.leaveReason="",this.formData.removeDate="",this.formData.isTimeout="",this.formData.timeoutDay="",this.formData.timeoutReason=""},onRemoveHoliday:function(e){this.isDisabled=!0,this.isDetail=!1,this.isRemove=!0,this.formData=e,this.$refs.modal2.visible=!0,this.mTitle="销假"},onHolidayDetail:function(e){var t=this;this.isDisabled=!0,this.isDetail=!1,this.this.isRemove=!1,this.$refs.modal2.visible=!0,c["a"].getBackFromLeaveDetail(e.id).then((function(e){t.formData=e})).catch((function(){})),this.mTitle="查看销假记录"},onEdit:function(e){var t=this;this.isAdd=!1,this.isDisabled=!0,this.isDetail=!1,this.$refs.modal1.visible=!0,c["a"].helpcompanyLeaveDetail(e.id).then((function(e){t.formData=e})).catch((function(){})),this.mTitle="编辑请假记录"},onDetail:function(e){var t=this;this.isAdd=!1,this.isDisabled=!0,this.isDetail=!0,this.$refs.modal1.visible=!0,c["a"].helpcompanyLeaveDetail(e.id).then((function(e){t.formData=e})).catch((function(){})),this.mTitle="查看请假记录"},onDelete:function(e){var t=this;this.$confirm({title:"确定要删除这条数据吗?",okText:"确认",okType:"danger",cancelText:"取消",onOk:function(){c["a"].helpcompanyLeaveDelete(e.id).then((function(){t.$message.success("删除成功"),t.refreshTable()}))}})},onSubmit1:function(){var e=this;console.log(this.form),this.$refs.ruleForm1.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.isDetail?e.$refs.modal1.visible=!1:e.isAdd?c["a"].saveHelpcompanyLeave(e.formData).then((function(t){e.$refs.modal1.visible=!1,e.$message.success("提交成功"),e.refreshTable()})).catch((function(){})):c["a"].updateHelpcompanyLeave(e.formData).then((function(t){e.$refs.modal1.visible=!1,e.$message.success("编辑成功"),e.refreshTable()})).catch((function(){}))}))},onSubmit2:function(){var e=this;this.$refs.ruleForm2.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.isRemove?c["a"].backFromLeave(e.formData).then((function(t){e.$refs.modal2.visible=!1,e.$message.success("提交成功"),e.refreshTable()})).catch((function(){})):e.$refs.modal2.visible=!1}))}}},s=u,m=a("2877"),d=Object(m["a"])(s,n,r,!1,null,"8e7b4210",null);t["default"]=d.exports},cf45:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"l",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"j",(function(){return c})),a.d(t,"i",(function(){return u})),a.d(t,"k",(function(){return s})),a.d(t,"m",(function(){return m})),a.d(t,"o",(function(){return d})),a.d(t,"p",(function(){return p})),a.d(t,"n",(function(){return f})),a.d(t,"q",(function(){return h})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return D})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return v}));a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("1276");function n(e,t,a){var n=new RegExp(/^((\+?86)|(\(\+86\)))?1[3456789]\d{9}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function r(e,t,a){var n=new RegExp(/^([0-9]{3,4}-)?[0-9]{7,8}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function o(e,t,a){var n=new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);t&&!n.test(t)?a("当前身份证不符合规范!"):a()}function i(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("姓名不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("姓名长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function l(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,20}$/);t&&!n.test(t)?a("现在居住地不符合规范，包含中英文字母数字或下划线!"):t&&t.length<2?a("现在居住地长度不能小于1个字符"):a()}function c(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("毕业院校不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("毕业院校长度不能小于1个字符"):a()}function u(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("专业不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("专业长度不能小于1个字符"):a()}function s(e,t,a){var n=new RegExp(/^([a-zA-Z0-9_-]){1,999}$/);t&&!n.test(t)?a("输入不规范，只允许输入字母、数字以及符号_-"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function m(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function d(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function p(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>50?a("输入长度不能大于50个字符"):a()}function f(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>100?a("输入长度不能大于100个字符"):a()}function h(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>500?a("输入长度不能大于500个字符"):a()}function b(e,t){if(""!=e&&""!=t&&void 0!=e&&void 0!=t&&null!=e&&null!=t){var a=e.split("-"),n=t.split("-"),r=a[0]+"/"+a[1]+"/"+a[2],o=n[0]+"/"+n[1]+"/"+n[2];return r>=o}}function D(e,t){var a=new Date,n="";return n=e.replace(/-/g,"/"),n=new Date(n),n.valueOf()>a.valueOf()}function g(e,t,a){return Date.parse(e)>=Date.parse(t)||Date.parse(e)>=Date.parse(a)||Date.parse(t)>Date.parse(a)||Date.parse(a)==Date.parse(t)&&Date.parse(a)<Date.parse(e)||Date.parse(a)==Date.parse(t)&&Date.parse(t)<Date.parse(e)||Date.parse(a)>Date.parse(e)&&Date.parse(a)<Date.parse(t)}function v(e,t){var a=Date.parse(e),n=Date.parse(t);if(a>n)return 0;if(a==n)return 1;var r=(n-a)/864e5;return r}},dba5:function(e,t,a){"use strict";var n=a("b775");t["a"]={getPersonInfoByIdCard:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCard",method:"GET",params:e})},getPersonInfoByIdCardToGa:function(e){return Object(n["a"])({url:"/manage/personSeized/getPersonInfoByIdCardToGa",method:"GET",params:e})},getPersonInfoByIdCardJg:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCardJg",method:"GET",params:e})},getPersonInfoByIdCardToHospital:function(e){return Object(n["a"])({url:"/medcare/inHospital/getPersonInfoByIdCardToHospital",method:"GET",params:e})},getPersonInfoByIdCardToTreat:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/getPersonInfoByIdCardToTreat",method:"GET",params:e})},inHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/inHospital/get/"+"".concat(e),method:"GET"})},inHospitalExport:function(e){return Object(n["a"])({url:"/medcare/inHospital/export",method:"post",params:e})},inHospitalPage:function(e){return Object(n["a"])({url:"/medcare/inHospital/page",method:"GET",params:e})},updateHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/updateHospitalIn",method:"PUT",data:e})},confirmHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/confirmHospitalIn",method:"PUT",data:e})},saveHospitalOut:function(e){return Object(n["a"])({url:"/medcare/inHospital/saveHospitalOut",method:"POST",data:e})},inHospitalDelete:function(e){return Object(n["a"])({url:"/medcare/inHospital/delete/"+"".concat(e),method:"DELETE"})},saveHospitalOut1:function(e){return Object(n["a"])({url:"/medcare/outHospital/saveHospitalOut",method:"POST",data:e})},confirmHospitalOut:function(e){return Object(n["a"])({url:"/medcare/outHospital/confirmHospitalOut",method:"PUT",data:e})},outHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/outHospital/get/"+"".concat(e),method:"GET"})},treatGroupInDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/get/"+"".concat(e),method:"GET"})},treatGroupInPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/page",method:"GET",params:e})},createTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/createTherapyStatus",method:"POST",data:e})},updateTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/updateTherapyStatus",method:"PUT",data:e})},treatGroupInDelete:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/delete/"+"".concat(e),method:"DELETE"})},treatReferralDetail:function(e){return Object(n["a"])({url:"/medcare/treatReferral/get/"+"".concat(e),method:"GET"})},treatReferralPage:function(e){return Object(n["a"])({url:"/medcare/treatReferral/page",method:"GET",params:e})},saveTreatReferral:function(e){return Object(n["a"])({url:"/medcare/treatReferral/saveTreatReferral",method:"POST",data:e})},updateTreatMedicine1:function(e){return Object(n["a"])({url:"/medcare//treatReferral/updateTreatMedicine",method:"PUT",data:e})},treatGroupOutDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/get/"+"".concat(e),method:"GET"})},treatGroupOutPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/page",method:"GET",params:e})},saveTreatGroupOut:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/saveTreatGroupOut",method:"POST",data:e})},treatMedicineDetail:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/get/"+"".concat(e),method:"GET"})},treatMedicinePage:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/page",method:"GET",params:e})},saveTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/saveTreatMedicine",method:"POST",data:e})},updateTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/updateTreatMedicine",method:"PUT",data:e})},deleteTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/deleteTreatMedicine",method:"PUT",params:e})},helpcompanyEntryRegDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/delete/"+"".concat(e),method:"DELETE"})},helpcompanyEntryRegExport:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/export",method:"POST",params:e})},entryRegResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/entryRegResign",method:"PUT",data:e})},getHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/getHelpcompanyResign/"+"".concat(e),method:"GET"})},helpcompanyEntryRegDetail2:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/get/"+"".concat(e),method:"GET"})},helpcompanyEntryRegPage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/page",method:"GET",params:e})},saveHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/saveHelpcompanyEntryReg",method:"POST",data:e})},updateHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/updateHelpcompanyEntryReg",method:"PUT",data:e})},saveHelpcompanyAttendance:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/saveHelpcompanyAttendance",method:"POST",data:e})},helpcompanyAttendancePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/page",method:"GET",params:e})},helpcompanyAttendanceDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/get/"+"".concat(e),method:"GET"})},helpcompanyAttendanceDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/delete/"+"".concat(e),method:"DELETE"})},backFromLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/backFromLeave",method:"PUT",data:e})},helpcompanyLeaveDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/delete/"+"".concat(e),method:"DELETE"})},helpcompanyLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/get/"+"".concat(e),method:"GET"})},getBackFromLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/getBackFromLeaveDetail/"+"".concat(e),method:"GET"})},helpcompanyLeavePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/page",method:"GET",params:e})},saveHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/saveHelpcompanyLeave",method:"POST",data:e})},updateHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/updateHelpcompanyLeave",method:"PUT",data:e})},helpcompanyResignDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/get/"+"".concat(e),method:"GET"})},saveHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/saveHelpcompanyResign",method:"POST",data:e})},institutionHelpDelete:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/delete/"+"".concat(e),method:"DELETE"})},institutionDetail:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/get/"+"".concat(e),method:"GET"})},institutionHelpPage:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/page",method:"GET",params:e})},saveInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/saveInstitutionHelp",method:"POST",data:e})},updateInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/updateInstitutionHelp",method:"PUT",data:e})},institutionMentalityDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/delete/"+"".concat(e),method:"DELETE"})},institutionMentalityDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/get/"+"".concat(e),method:"GET"})},institutionMentalityDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/page",method:"GET",params:e})},saveInstitutionMentalityDoc:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/saveInstitutionMentalityDoc",method:"POST",data:e})},updateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/updateInstitutionPerson",method:"PUT",data:e})},institutionPersonDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/delete/"+"".concat(e),method:"DELETE"})},institutionPersonDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/get/"+"".concat(e),method:"GET"})},institutionPersonPage:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/page",method:"GET",params:e})},saveInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/saveInstitutionPerson",method:"POST",data:e})},inUpdateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/updateInstitutionPerson",method:"PUT",data:e})},institutionPhysiologyDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/delete/"+"".concat(e),method:"DELETE"})},institutionPhysiologyDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/get/"+"".concat(e),method:"GET"})},institutionPhysiologyDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/page",method:"GET",params:e})},saveInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/saveInstitutionPhysiologyDoc",method:"POST",data:e})},updateInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/updateInstitutionPhysiologyDoc",method:"PUT",data:e})},placementJobSettleDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/delete/"+"".concat(e),method:"DELETE"})},placementJobSettleDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/get/"+"".concat(e),method:"GET"})},placementJobSettlePage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/page",method:"GET",params:e})},pageRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageRecommend",method:"GET",params:e})},pageSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageSettled",method:"GET",params:e})},pageUnSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageUnSettled",method:"GET",params:e})},savePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/savePlacementJobSettle",method:"post",params:e})},updatePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/updatePlacementJobSettle",method:"PUT",params:e})},confirmPlacementJobRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobRecommend",method:"PUT",data:e})},confirmPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobSettled",method:"PUT",data:e})},cancelPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/cancelPlacementJobSettled",method:"PUT",data:e})},confirmPlacementJobResigned:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobResigned",method:"PUT",data:e})},placementJobSettledHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettledHistory/page",method:"GET",params:e})},placementJobRecommendHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobRecommendHistory/page",method:"GET",params:e})},placementJobResignedHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobResignedHistory/page",method:"GET",params:e})},placementJobTrainDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/delete/"+"".concat(e),method:"DELETE"})},placementJobTrainDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/get/"+"".concat(e),method:"GET"})},placementJobTrainPage:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/page",method:"GET",params:e})},savePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/savePlacementJobTrain",method:"POST",data:e})},updatePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/updatePlacementJobTrain",method:"PUT",data:e})},placementJobWillDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/get/"+"".concat(e),method:"GET"})},savePlacementJobWill:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/savePlacementJobWill",method:"POST",params:e})}}}}]);