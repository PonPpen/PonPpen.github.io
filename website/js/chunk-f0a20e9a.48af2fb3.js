(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0a20e9a"],{"1b93":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",[a("div",{staticClass:"div"},[a("div",{staticClass:"tool-bar"},[a("a-row",{attrs:{type:"flex"}},[a("OperationPermission",{attrs:{check:"privs.item1530160000"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.onAdd()}}},[e._v("新增心理档案记")])],1)],1)],1),a("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!1,loading:e.loading,columns:e.columns,dataSource:e.pageData},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}},{key:"consulterEvaluate",fn:function(t){return["0"===t?a("span",[e._v("Ⅰ类")]):e._e(),"1"===t?a("span",[e._v("Ⅱ类")]):e._e(),"2"===t?a("span",[e._v("Ⅲ类")]):e._e()]}},{key:"action",fn:function(t){return[a("OperationPermission",{attrs:{check:"privs.item1530160001"}},[a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return a.stopPropagation(),e.onEdit(t)}}},[e._v("编辑")])]),a("OperationPermission",{attrs:{check:"privs.item1530160002"}},[a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return a.stopPropagation(),e.onDelete(t)}}},[e._v("删除")])]),a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return a.stopPropagation(),e.onDetail(t)}}},[e._v("查看")])]}}])}),a("Modal",{ref:"modal",attrs:{title:e.mTitle},on:{ok:e.onSubmit,close:e.close}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.formData,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"姓名："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.realname,callback:function(t){e.$set(e.formData,"realname",t)},expression:"formData.realname"}})],1),a("a-form-model-item",{attrs:{label:"身份证号："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.identityCard,callback:function(t){e.$set(e.formData,"identityCard",t)},expression:"formData.identityCard"}})],1),a("a-form-model-item",{attrs:{label:"咨询机构："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.stationName,callback:function(t){e.$set(e.formData,"stationName",t)},expression:"formData.stationName"}})],1),a("a-form-model-item",{attrs:{label:"咨询师：",prop:"consulter"}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDetail},model:{value:e.formData.consulter,callback:function(t){e.$set(e.formData,"consulter",t)},expression:"formData.consulter"}})],1),a("a-form-model-item",{attrs:{label:"心理评估结果：",required:"",prop:"consulterEvaluate"}},[a("a-select",{attrs:{placeholder:"请选择",disabled:e.isDetail},model:{value:e.formData.consulterEvaluate,callback:function(t){e.$set(e.formData,"consulterEvaluate",t)},expression:"formData.consulterEvaluate"}},[a("a-select-option",{attrs:{value:"0"}},[e._v(" Ⅰ类 ")]),a("a-select-option",{attrs:{value:"1"}},[e._v(" Ⅱ类 ")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" Ⅲ类 ")])],1)],1),a("a-form-model-item",{attrs:{label:"得分：",prop:"scoreMen"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入",disabled:e.isDetail},model:{value:e.formData.scoreMen,callback:function(t){e.$set(e.formData,"scoreMen",t)},expression:"formData.scoreMen"}})],1),a("a-form-model-item",{attrs:{label:"咨询日期：",required:"",prop:"consultDate"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:"请选择",disabled:e.isDetail,"show-time":"",type:"date"},model:{value:e.formData.consultDate,callback:function(t){e.$set(e.formData,"consultDate",t)},expression:"formData.consultDate"}})],1),a("a-form-model-item",{attrs:{label:"咨询说明：",disabled:e.isDetail,required:"",prop:"consulterMemo"}},[a("a-textarea",{attrs:{placeholder:"请输入",disabled:e.isDetail,rows:4},model:{value:e.formData.consulterMemo,callback:function(t){e.$set(e.formData,"consulterMemo",t)},expression:"formData.consulterMemo"}})],1)],1)],1)],1)])],1)},r=[],o=a("bf11"),i=a("86da"),c=a("dba5"),l=a("cf45"),u={name:"patientList",components:{CustomTable:o["a"],Modal:i["a"]},data:function(){return{formData:{consulter:"",consulterEvaluate:"",scoreMen:"",consultDate:"",consulterMemo:""},labelCol:{span:8},wrapperCol:{span:10},columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"}},{title:"姓名",dataIndex:"realname",scopedSlots:{customRender:"realname"}},{title:"心理评估结果",dataIndex:"consulterEvaluate",scopedSlots:{customRender:"consulterEvaluate"}},{title:"得分",dataIndex:"scoreMen",scopedSlots:{customRender:"scoreMen"}},{title:"咨询日期",dataIndex:"consultDate",scopedSlots:{customRender:"consultDate"}},{title:"操作",width:"200px",align:"center",scopedSlots:{customRender:"action"}}],rules:{consulter:[{required:!0,message:"请输入咨询师"},{validator:l["o"]}],consulterEvaluate:[{required:!0,message:"请选择心理评估结果"}],scoreMen:[{required:!0,message:"请输入得分"}],consultDate:[{required:!0,message:"请选择咨询日期"}],consulterMemo:[{required:!0,message:"请输入咨询说明"},{validator:l["n"]}]},pageFilter:{page:1,size:10},loading:!1,pageData:[],mTitle:"",fileList:[],isDisabled:!0,isDetail:!1,isAdd:!0}},created:function(){this.getData(),this.refreshTable()},methods:{getData:function(){var e=JSON.parse(this.$route.query.obj);this.pageFilter.personId=e.id,this.pageFilter.identityCard=e.identityCard,this.formData.personId=e.id,this.formData.realname=e.realname,this.formData.identityCard=e.identityCard,this.formData.stationName=e.stationName,this.isDisabled=!0},refreshTable:function(){var e=this;this.loading=!0,c["a"].institutionMentalityDocPage(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t})).catch((function(){}))},onTableChange:function(e){this.pageFilter=e,this.refreshTable()},onQuery:function(){this.pageFilter.page=1,this.refreshTable()},onResetForm:function(){this.pageFilter={},this.refreshTable()},setValueInit:function(){this.formData.consulter=void 0,this.formData.consulterEvaluate=void 0,this.formData.scoreMen=void 0,this.formData.consultDate=void 0,this.formData.consulterMemo=void 0},onAdd:function(){this.isAdd=!0,this.isDetail=!1,this.$refs.modal.visible=!0,this.mTitle="新增咨询记录",this.setValueInit()},onEdit:function(e){var t=this;this.isAdd=!1,this.$refs.modal.visible=!0,this.isDetail=!1,this.mTitle="编辑咨询记录",c["a"].institutionMentalityDocDetail(e.id).then((function(e){t.formData=e})).catch((function(){}))},onDetail:function(e){var t=this;this.$refs.modal.visible=!0,this.isDetail=!0,this.mTitle="查看咨询记录",c["a"].institutionMentalityDocDetail(e.id).then((function(e){t.formData=e})).catch((function(){}))},onDelete:function(e){var t=this;this.$confirm({title:"确定要删除这条数据吗?",okText:"确认",okType:"danger",cancelText:"取消",onOk:function(){c["a"].institutionMentalityDocDelete(e.id).then((function(){t.$message.success("删除成功"),t.refreshTable()}))}})},onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.isDetail?e.$refs.modal.visible=!1:e.isAdd?c["a"].saveInstitutionMentalityDoc(e.formData).then((function(t){e.$refs.modal.visible=!1,e.$message.success("提交成功"),e.refreshTable()})).catch((function(){})):c["a"].updateInstitutionPerson(e.formData).then((function(t){e.$refs.modal.visible=!1,e.$message.success("编辑成功"),e.refreshTable()})).catch((function(){}))}))},close:function(){this.$refs.modal.visible=!1}}},s=u,d=a("2877"),m=Object(d["a"])(s,n,r,!1,null,"4b0bc778",null);t["default"]=m.exports},cf45:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"l",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"j",(function(){return l})),a.d(t,"i",(function(){return u})),a.d(t,"k",(function(){return s})),a.d(t,"m",(function(){return d})),a.d(t,"o",(function(){return m})),a.d(t,"p",(function(){return p})),a.d(t,"n",(function(){return f})),a.d(t,"q",(function(){return h})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return g})),a.d(t,"d",(function(){return D})),a.d(t,"e",(function(){return T}));a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("1276");function n(e,t,a){var n=new RegExp(/^((\+?86)|(\(\+86\)))?1[3456789]\d{9}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function r(e,t,a){var n=new RegExp(/^([0-9]{3,4}-)?[0-9]{7,8}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function o(e,t,a){var n=new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);t&&!n.test(t)?a("当前身份证不符合规范!"):a()}function i(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("姓名不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("姓名长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function c(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,20}$/);t&&!n.test(t)?a("现在居住地不符合规范，包含中英文字母数字或下划线!"):t&&t.length<2?a("现在居住地长度不能小于1个字符"):a()}function l(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("毕业院校不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("毕业院校长度不能小于1个字符"):a()}function u(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("专业不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("专业长度不能小于1个字符"):a()}function s(e,t,a){var n=new RegExp(/^([a-zA-Z0-9_-]){1,999}$/);t&&!n.test(t)?a("输入不规范，只允许输入字母、数字以及符号_-"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function d(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function m(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function p(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>50?a("输入长度不能大于50个字符"):a()}function f(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>100?a("输入长度不能大于100个字符"):a()}function h(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>500?a("输入长度不能大于500个字符"):a()}function b(e,t){if(""!=e&&""!=t&&void 0!=e&&void 0!=t&&null!=e&&null!=t){var a=e.split("-"),n=t.split("-"),r=a[0]+"/"+a[1]+"/"+a[2],o=n[0]+"/"+n[1]+"/"+n[2];return r>=o}}function g(e,t){var a=new Date,n="";return n=e.replace(/-/g,"/"),n=new Date(n),n.valueOf()>a.valueOf()}function D(e,t,a){return Date.parse(e)>=Date.parse(t)||Date.parse(e)>=Date.parse(a)||Date.parse(t)>Date.parse(a)||Date.parse(a)==Date.parse(t)&&Date.parse(a)<Date.parse(e)||Date.parse(a)==Date.parse(t)&&Date.parse(t)<Date.parse(e)||Date.parse(a)>Date.parse(e)&&Date.parse(a)<Date.parse(t)}function T(e,t){var a=Date.parse(e),n=Date.parse(t);if(a>n)return 0;if(a==n)return 1;var r=(n-a)/864e5;return r}},dba5:function(e,t,a){"use strict";var n=a("b775");t["a"]={getPersonInfoByIdCard:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCard",method:"GET",params:e})},getPersonInfoByIdCardToGa:function(e){return Object(n["a"])({url:"/manage/personSeized/getPersonInfoByIdCardToGa",method:"GET",params:e})},getPersonInfoByIdCardJg:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCardJg",method:"GET",params:e})},getPersonInfoByIdCardToHospital:function(e){return Object(n["a"])({url:"/medcare/inHospital/getPersonInfoByIdCardToHospital",method:"GET",params:e})},getPersonInfoByIdCardToTreat:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/getPersonInfoByIdCardToTreat",method:"GET",params:e})},inHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/inHospital/get/"+"".concat(e),method:"GET"})},inHospitalExport:function(e){return Object(n["a"])({url:"/medcare/inHospital/export",method:"post",params:e})},inHospitalPage:function(e){return Object(n["a"])({url:"/medcare/inHospital/page",method:"GET",params:e})},updateHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/updateHospitalIn",method:"PUT",data:e})},confirmHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/confirmHospitalIn",method:"PUT",data:e})},saveHospitalOut:function(e){return Object(n["a"])({url:"/medcare/inHospital/saveHospitalOut",method:"POST",data:e})},inHospitalDelete:function(e){return Object(n["a"])({url:"/medcare/inHospital/delete/"+"".concat(e),method:"DELETE"})},saveHospitalOut1:function(e){return Object(n["a"])({url:"/medcare/outHospital/saveHospitalOut",method:"POST",data:e})},confirmHospitalOut:function(e){return Object(n["a"])({url:"/medcare/outHospital/confirmHospitalOut",method:"PUT",data:e})},outHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/outHospital/get/"+"".concat(e),method:"GET"})},treatGroupInDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/get/"+"".concat(e),method:"GET"})},treatGroupInPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/page",method:"GET",params:e})},createTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/createTherapyStatus",method:"POST",data:e})},updateTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/updateTherapyStatus",method:"PUT",data:e})},treatGroupInDelete:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/delete/"+"".concat(e),method:"DELETE"})},treatReferralDetail:function(e){return Object(n["a"])({url:"/medcare/treatReferral/get/"+"".concat(e),method:"GET"})},treatReferralPage:function(e){return Object(n["a"])({url:"/medcare/treatReferral/page",method:"GET",params:e})},saveTreatReferral:function(e){return Object(n["a"])({url:"/medcare/treatReferral/saveTreatReferral",method:"POST",data:e})},updateTreatMedicine1:function(e){return Object(n["a"])({url:"/medcare//treatReferral/updateTreatMedicine",method:"PUT",data:e})},treatGroupOutDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/get/"+"".concat(e),method:"GET"})},treatGroupOutPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/page",method:"GET",params:e})},saveTreatGroupOut:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/saveTreatGroupOut",method:"POST",data:e})},treatMedicineDetail:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/get/"+"".concat(e),method:"GET"})},treatMedicinePage:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/page",method:"GET",params:e})},saveTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/saveTreatMedicine",method:"POST",data:e})},updateTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/updateTreatMedicine",method:"PUT",data:e})},deleteTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/deleteTreatMedicine",method:"PUT",params:e})},helpcompanyEntryRegDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/delete/"+"".concat(e),method:"DELETE"})},helpcompanyEntryRegExport:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/export",method:"POST",params:e})},entryRegResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/entryRegResign",method:"PUT",data:e})},getHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/getHelpcompanyResign/"+"".concat(e),method:"GET"})},helpcompanyEntryRegDetail2:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/get/"+"".concat(e),method:"GET"})},helpcompanyEntryRegPage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/page",method:"GET",params:e})},saveHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/saveHelpcompanyEntryReg",method:"POST",data:e})},updateHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/updateHelpcompanyEntryReg",method:"PUT",data:e})},saveHelpcompanyAttendance:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/saveHelpcompanyAttendance",method:"POST",data:e})},helpcompanyAttendancePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/page",method:"GET",params:e})},helpcompanyAttendanceDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/get/"+"".concat(e),method:"GET"})},helpcompanyAttendanceDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/delete/"+"".concat(e),method:"DELETE"})},backFromLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/backFromLeave",method:"PUT",data:e})},helpcompanyLeaveDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/delete/"+"".concat(e),method:"DELETE"})},helpcompanyLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/get/"+"".concat(e),method:"GET"})},getBackFromLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/getBackFromLeaveDetail/"+"".concat(e),method:"GET"})},helpcompanyLeavePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/page",method:"GET",params:e})},saveHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/saveHelpcompanyLeave",method:"POST",data:e})},updateHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/updateHelpcompanyLeave",method:"PUT",data:e})},helpcompanyResignDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/get/"+"".concat(e),method:"GET"})},saveHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/saveHelpcompanyResign",method:"POST",data:e})},institutionHelpDelete:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/delete/"+"".concat(e),method:"DELETE"})},institutionDetail:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/get/"+"".concat(e),method:"GET"})},institutionHelpPage:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/page",method:"GET",params:e})},saveInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/saveInstitutionHelp",method:"POST",data:e})},updateInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/updateInstitutionHelp",method:"PUT",data:e})},institutionMentalityDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/delete/"+"".concat(e),method:"DELETE"})},institutionMentalityDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/get/"+"".concat(e),method:"GET"})},institutionMentalityDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/page",method:"GET",params:e})},saveInstitutionMentalityDoc:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/saveInstitutionMentalityDoc",method:"POST",data:e})},updateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/updateInstitutionPerson",method:"PUT",data:e})},institutionPersonDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/delete/"+"".concat(e),method:"DELETE"})},institutionPersonDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/get/"+"".concat(e),method:"GET"})},institutionPersonPage:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/page",method:"GET",params:e})},saveInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/saveInstitutionPerson",method:"POST",data:e})},inUpdateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/updateInstitutionPerson",method:"PUT",data:e})},institutionPhysiologyDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/delete/"+"".concat(e),method:"DELETE"})},institutionPhysiologyDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/get/"+"".concat(e),method:"GET"})},institutionPhysiologyDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/page",method:"GET",params:e})},saveInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/saveInstitutionPhysiologyDoc",method:"POST",data:e})},updateInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/updateInstitutionPhysiologyDoc",method:"PUT",data:e})},placementJobSettleDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/delete/"+"".concat(e),method:"DELETE"})},placementJobSettleDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/get/"+"".concat(e),method:"GET"})},placementJobSettlePage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/page",method:"GET",params:e})},pageRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageRecommend",method:"GET",params:e})},pageSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageSettled",method:"GET",params:e})},pageUnSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageUnSettled",method:"GET",params:e})},savePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/savePlacementJobSettle",method:"post",params:e})},updatePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/updatePlacementJobSettle",method:"PUT",params:e})},confirmPlacementJobRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobRecommend",method:"PUT",data:e})},confirmPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobSettled",method:"PUT",data:e})},cancelPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/cancelPlacementJobSettled",method:"PUT",data:e})},confirmPlacementJobResigned:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobResigned",method:"PUT",data:e})},placementJobSettledHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettledHistory/page",method:"GET",params:e})},placementJobRecommendHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobRecommendHistory/page",method:"GET",params:e})},placementJobResignedHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobResignedHistory/page",method:"GET",params:e})},placementJobTrainDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/delete/"+"".concat(e),method:"DELETE"})},placementJobTrainDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/get/"+"".concat(e),method:"GET"})},placementJobTrainPage:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/page",method:"GET",params:e})},savePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/savePlacementJobTrain",method:"POST",data:e})},updatePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/updatePlacementJobTrain",method:"PUT",data:e})},placementJobWillDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/get/"+"".concat(e),method:"GET"})},savePlacementJobWill:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/savePlacementJobWill",method:"POST",params:e})}}}}]);