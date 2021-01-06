(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da26e502"],{"04a4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"就业安置"},on:{ok:e.onSubmit}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.formData,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"姓名："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.realName,callback:function(t){e.$set(e.formData,"realName",t)},expression:"formData.realName"}})],1),a("a-form-model-item",{attrs:{label:"身份证："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.identityCard,callback:function(t){e.$set(e.formData,"identityCard",t)},expression:"formData.identityCard"}})],1),a("a-form-model-item",{attrs:{label:"性别："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.sex,callback:function(t){e.$set(e.formData,"sex",t)},expression:"formData.sex"}})],1),a("a-form-model-item",{attrs:{label:"安置单位：",required:"",prop:"settlementCompany"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.settlementCompany,callback:function(t){e.$set(e.formData,"settlementCompany",t)},expression:"formData.settlementCompany"}})],1),a("a-form-model-item",{attrs:{label:"安置岗位：",required:"",prop:"settlementPosition"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.settlementPosition,callback:function(t){e.$set(e.formData,"settlementPosition",t)},expression:"formData.settlementPosition"}})],1),a("a-form-model-item",{attrs:{label:"工资（元/月）：",required:"",prop:"salary"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入"},model:{value:e.formData.salary,callback:function(t){e.$set(e.formData,"salary",t)},expression:"formData.salary"}})],1),a("a-form-model-item",{attrs:{label:"工作地点：",required:"",prop:"companyAddress1"}},[a("a-cascader",{attrs:{"change-on-select":"",allowClear:"",options:e.regionOptions,placeholder:"选择省市县",AUTOCOMPLETE:"off"},on:{change:e.onCascaderChange},model:{value:e.formData.companyAddress1,callback:function(t){e.$set(e.formData,"companyAddress1",t)},expression:"formData.companyAddress1"}})],1),a("a-form-model-item",{attrs:{label:"入职日期：",required:"",prop:"inductionDate"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:"请选择","show-time":"",type:"date"},model:{value:e.formData.inductionDate,callback:function(t){e.$set(e.formData,"inductionDate",t)},expression:"formData.inductionDate"}})],1),a("a-form-model-item",{attrs:{label:"是否签约合同",required:"",prop:"isContract"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formData.isContract,callback:function(t){e.$set(e.formData,"isContract",t)},expression:"formData.isContract"}},[a("a-select-option",{attrs:{value:1}},[e._v("是")]),a("a-select-option",{attrs:{value:2}},[e._v("否")])],1)],1),a("a-form-model-item",{attrs:{label:"单位联系人：",required:"",prop:"companyContact"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.companyContact,callback:function(t){e.$set(e.formData,"companyContact",t)},expression:"formData.companyContact"}})],1),a("a-form-model-item",{attrs:{label:"单位联系电话：",required:"",prop:"companyPhone"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.companyPhone,callback:function(t){e.$set(e.formData,"companyPhone",t)},expression:"formData.companyPhone"}})],1),a("a-form-model-item",{attrs:{label:"安置类型",required:"",prop:"settlementType"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.settlementType,callback:function(t){e.$set(e.formData,"settlementType",t)},expression:"formData.settlementType"}},[a("a-select-option",{attrs:{value:1}},[e._v("集中安置")]),a("a-select-option",{attrs:{value:2}},[e._v("分散安置")]),a("a-select-option",{attrs:{value:3}},[e._v("就地安置")]),a("a-select-option",{attrs:{value:4}},[e._v("帮助创业")]),a("a-select-option",{attrs:{value:5}},[e._v("自主择业")])],1)],1)],1)],1)},r=[],o=(a("4160"),a("ac1f"),a("1276"),a("159b"),a("86da")),c=a("dba5"),i=a("cf45"),l=a("ef6c"),u={components:{Modal:o["a"]},data:function(){return{formData:{},labelCol:{span:8},wrapperCol:{span:10},rules:{settlementCompany:[{required:!0,message:"请输入安置单位"},{validator:i["o"]}],settlementPosition:[{required:!0,message:"请输入安置岗位"},{validator:i["o"]}],salary:[{required:!0,message:"请输入工资"}],companyAddress1:[{required:!0,message:"请选择工作地点"}],inductionDate:[{required:!0,message:"请选择入职日期"}],isContract:[{required:!0,message:"请选择是否签约合同"}],companyContact:[{required:!0,message:"请输入单位联系人"},{validator:i["o"]}],companyPhone:[{required:!0,message:"请输入单位联系电话"},{validator:i["h"]}],settlementType:[{required:!0,message:"请选择安置类型"}]},options:[],isDisabled:!1,regionOptions:l["regionData"]}},created:function(){},methods:{show:function(e){this.$refs.modal.visible=!0,this.isDisabled=!0,this.formData={companyAddress:void 0,companyAddress1:void 0,settlementCompany:void 0,settlementPosition:void 0,salary:void 0},this.formData.id=e.id,this.formData.realName=e.realName,this.formData.identityCard=e.identityCard,this.formData.sex=1===e.sex?"男":"女",this.formData.settlementCompany=e.recommendUnit,this.formData.settlementPosition=e.recommendJob,this.formData.salary=e.resalary,this.formData.companyAddress1=e.companyAddress.split("|")[1].split(",")},onCascaderChange:function(e,t){var a="";t.forEach((function(e){a+=e.label+"-"})),a=a.substr(0,a.length-1),this.formData.companyAddress=a,this.formData.companyAddress1=e},onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.formData.sex="男"===e.formData.sex?1:2,c["a"].confirmPlacementJobSettled(e.formData).then((function(t){e.$refs.modal.visible=!1,e.$message.success("提交成功"),e.$emit("onSuccess")})).catch((function(){}))}))}}},m=u,d=a("2877"),s=Object(d["a"])(m,n,r,!1,null,"242e8afe",null);t["default"]=s.exports},cf45:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"l",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"j",(function(){return l})),a.d(t,"i",(function(){return u})),a.d(t,"k",(function(){return m})),a.d(t,"m",(function(){return d})),a.d(t,"o",(function(){return s})),a.d(t,"p",(function(){return p})),a.d(t,"n",(function(){return f})),a.d(t,"q",(function(){return h})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return g})),a.d(t,"d",(function(){return y})),a.d(t,"e",(function(){return D}));a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("1276");function n(e,t,a){var n=new RegExp(/^((\+?86)|(\(\+86\)))?1[3456789]\d{9}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function r(e,t,a){var n=new RegExp(/^([0-9]{3,4}-)?[0-9]{7,8}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function o(e,t,a){var n=new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);t&&!n.test(t)?a("当前身份证不符合规范!"):a()}function c(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("姓名不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("姓名长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function i(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,20}$/);t&&!n.test(t)?a("现在居住地不符合规范，包含中英文字母数字或下划线!"):t&&t.length<2?a("现在居住地长度不能小于1个字符"):a()}function l(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("毕业院校不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("毕业院校长度不能小于1个字符"):a()}function u(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("专业不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("专业长度不能小于1个字符"):a()}function m(e,t,a){var n=new RegExp(/^([a-zA-Z0-9_-]){1,999}$/);t&&!n.test(t)?a("输入不规范，只允许输入字母、数字以及符号_-"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function d(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function s(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function p(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>50?a("输入长度不能大于50个字符"):a()}function f(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>100?a("输入长度不能大于100个字符"):a()}function h(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>500?a("输入长度不能大于500个字符"):a()}function b(e,t){if(""!=e&&""!=t&&void 0!=e&&void 0!=t&&null!=e&&null!=t){var a=e.split("-"),n=t.split("-"),r=a[0]+"/"+a[1]+"/"+a[2],o=n[0]+"/"+n[1]+"/"+n[2];return r>=o}}function g(e,t){var a=new Date,n="";return n=e.replace(/-/g,"/"),n=new Date(n),n.valueOf()>a.valueOf()}function y(e,t,a){return Date.parse(e)>=Date.parse(t)||Date.parse(e)>=Date.parse(a)||Date.parse(t)>Date.parse(a)||Date.parse(a)==Date.parse(t)&&Date.parse(a)<Date.parse(e)||Date.parse(a)==Date.parse(t)&&Date.parse(t)<Date.parse(e)||Date.parse(a)>Date.parse(e)&&Date.parse(a)<Date.parse(t)}function D(e,t){var a=Date.parse(e),n=Date.parse(t);if(a>n)return 0;if(a==n)return 1;var r=(n-a)/864e5;return r}},dba5:function(e,t,a){"use strict";var n=a("b775");t["a"]={getPersonInfoByIdCard:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCard",method:"GET",params:e})},getPersonInfoByIdCardToGa:function(e){return Object(n["a"])({url:"/manage/personSeized/getPersonInfoByIdCardToGa",method:"GET",params:e})},getPersonInfoByIdCardJg:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCardJg",method:"GET",params:e})},getPersonInfoByIdCardToHospital:function(e){return Object(n["a"])({url:"/medcare/inHospital/getPersonInfoByIdCardToHospital",method:"GET",params:e})},getPersonInfoByIdCardToTreat:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/getPersonInfoByIdCardToTreat",method:"GET",params:e})},inHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/inHospital/get/"+"".concat(e),method:"GET"})},inHospitalExport:function(e){return Object(n["a"])({url:"/medcare/inHospital/export",method:"post",params:e})},inHospitalPage:function(e){return Object(n["a"])({url:"/medcare/inHospital/page",method:"GET",params:e})},updateHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/updateHospitalIn",method:"PUT",data:e})},confirmHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/confirmHospitalIn",method:"PUT",data:e})},saveHospitalOut:function(e){return Object(n["a"])({url:"/medcare/inHospital/saveHospitalOut",method:"POST",data:e})},inHospitalDelete:function(e){return Object(n["a"])({url:"/medcare/inHospital/delete/"+"".concat(e),method:"DELETE"})},saveHospitalOut1:function(e){return Object(n["a"])({url:"/medcare/outHospital/saveHospitalOut",method:"POST",data:e})},confirmHospitalOut:function(e){return Object(n["a"])({url:"/medcare/outHospital/confirmHospitalOut",method:"PUT",data:e})},outHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/outHospital/get/"+"".concat(e),method:"GET"})},treatGroupInDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/get/"+"".concat(e),method:"GET"})},treatGroupInPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/page",method:"GET",params:e})},createTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/createTherapyStatus",method:"POST",data:e})},updateTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/updateTherapyStatus",method:"PUT",data:e})},treatGroupInDelete:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/delete/"+"".concat(e),method:"DELETE"})},treatReferralDetail:function(e){return Object(n["a"])({url:"/medcare/treatReferral/get/"+"".concat(e),method:"GET"})},treatReferralPage:function(e){return Object(n["a"])({url:"/medcare/treatReferral/page",method:"GET",params:e})},saveTreatReferral:function(e){return Object(n["a"])({url:"/medcare/treatReferral/saveTreatReferral",method:"POST",data:e})},updateTreatMedicine1:function(e){return Object(n["a"])({url:"/medcare//treatReferral/updateTreatMedicine",method:"PUT",data:e})},treatGroupOutDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/get/"+"".concat(e),method:"GET"})},treatGroupOutPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/page",method:"GET",params:e})},saveTreatGroupOut:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/saveTreatGroupOut",method:"POST",data:e})},treatMedicineDetail:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/get/"+"".concat(e),method:"GET"})},treatMedicinePage:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/page",method:"GET",params:e})},saveTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/saveTreatMedicine",method:"POST",data:e})},updateTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/updateTreatMedicine",method:"PUT",data:e})},deleteTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/deleteTreatMedicine",method:"PUT",params:e})},helpcompanyEntryRegDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/delete/"+"".concat(e),method:"DELETE"})},helpcompanyEntryRegExport:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/export",method:"POST",params:e})},entryRegResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/entryRegResign",method:"PUT",data:e})},getHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/getHelpcompanyResign/"+"".concat(e),method:"GET"})},helpcompanyEntryRegDetail2:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/get/"+"".concat(e),method:"GET"})},helpcompanyEntryRegPage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/page",method:"GET",params:e})},saveHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/saveHelpcompanyEntryReg",method:"POST",data:e})},updateHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/updateHelpcompanyEntryReg",method:"PUT",data:e})},saveHelpcompanyAttendance:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/saveHelpcompanyAttendance",method:"POST",data:e})},helpcompanyAttendancePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/page",method:"GET",params:e})},helpcompanyAttendanceDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/get/"+"".concat(e),method:"GET"})},helpcompanyAttendanceDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/delete/"+"".concat(e),method:"DELETE"})},backFromLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/backFromLeave",method:"PUT",data:e})},helpcompanyLeaveDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/delete/"+"".concat(e),method:"DELETE"})},helpcompanyLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/get/"+"".concat(e),method:"GET"})},getBackFromLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/getBackFromLeaveDetail/"+"".concat(e),method:"GET"})},helpcompanyLeavePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/page",method:"GET",params:e})},saveHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/saveHelpcompanyLeave",method:"POST",data:e})},updateHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/updateHelpcompanyLeave",method:"PUT",data:e})},helpcompanyResignDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/get/"+"".concat(e),method:"GET"})},saveHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/saveHelpcompanyResign",method:"POST",data:e})},institutionHelpDelete:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/delete/"+"".concat(e),method:"DELETE"})},institutionDetail:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/get/"+"".concat(e),method:"GET"})},institutionHelpPage:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/page",method:"GET",params:e})},saveInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/saveInstitutionHelp",method:"POST",data:e})},updateInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/updateInstitutionHelp",method:"PUT",data:e})},institutionMentalityDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/delete/"+"".concat(e),method:"DELETE"})},institutionMentalityDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/get/"+"".concat(e),method:"GET"})},institutionMentalityDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/page",method:"GET",params:e})},saveInstitutionMentalityDoc:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/saveInstitutionMentalityDoc",method:"POST",data:e})},updateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/updateInstitutionPerson",method:"PUT",data:e})},institutionPersonDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/delete/"+"".concat(e),method:"DELETE"})},institutionPersonDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/get/"+"".concat(e),method:"GET"})},institutionPersonPage:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/page",method:"GET",params:e})},saveInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/saveInstitutionPerson",method:"POST",data:e})},inUpdateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/updateInstitutionPerson",method:"PUT",data:e})},institutionPhysiologyDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/delete/"+"".concat(e),method:"DELETE"})},institutionPhysiologyDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/get/"+"".concat(e),method:"GET"})},institutionPhysiologyDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/page",method:"GET",params:e})},saveInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/saveInstitutionPhysiologyDoc",method:"POST",data:e})},updateInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/updateInstitutionPhysiologyDoc",method:"PUT",data:e})},placementJobSettleDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/delete/"+"".concat(e),method:"DELETE"})},placementJobSettleDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/get/"+"".concat(e),method:"GET"})},placementJobSettlePage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/page",method:"GET",params:e})},pageRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageRecommend",method:"GET",params:e})},pageSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageSettled",method:"GET",params:e})},pageUnSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageUnSettled",method:"GET",params:e})},savePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/savePlacementJobSettle",method:"post",params:e})},updatePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/updatePlacementJobSettle",method:"PUT",params:e})},confirmPlacementJobRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobRecommend",method:"PUT",data:e})},confirmPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobSettled",method:"PUT",data:e})},cancelPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/cancelPlacementJobSettled",method:"PUT",data:e})},confirmPlacementJobResigned:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobResigned",method:"PUT",data:e})},placementJobSettledHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettledHistory/page",method:"GET",params:e})},placementJobRecommendHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobRecommendHistory/page",method:"GET",params:e})},placementJobResignedHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobResignedHistory/page",method:"GET",params:e})},placementJobTrainDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/delete/"+"".concat(e),method:"DELETE"})},placementJobTrainDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/get/"+"".concat(e),method:"GET"})},placementJobTrainPage:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/page",method:"GET",params:e})},savePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/savePlacementJobTrain",method:"POST",data:e})},updatePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/updatePlacementJobTrain",method:"PUT",data:e})},placementJobWillDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/get/"+"".concat(e),method:"GET"})},savePlacementJobWill:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/savePlacementJobWill",method:"POST",params:e})}}}}]);