(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2322ed"],{9090:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"离职"},on:{ok:e.onSubmit}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.formData,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"姓名："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.realName,callback:function(t){e.$set(e.formData,"realName",t)},expression:"formData.realName"}})],1),a("a-form-model-item",{attrs:{label:"身份证："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.identityCard,callback:function(t){e.$set(e.formData,"identityCard",t)},expression:"formData.identityCard"}})],1),a("a-form-model-item",{attrs:{label:"性别："}},[a("a-input",{attrs:{placeholder:"请输入",disabled:e.isDisabled},model:{value:e.formData.sex,callback:function(t){e.$set(e.formData,"sex",t)},expression:"formData.sex"}})],1),a("a-form-model-item",{attrs:{label:"离职原因：",required:"",prop:"resignReason"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formData.resignReason,callback:function(t){e.$set(e.formData,"resignReason",t)},expression:"formData.resignReason"}},e._l(e.options,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"离职日期：",required:"",prop:"resignDate"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:"请选择","show-time":"",type:"date"},on:{change:e.onDateChange},model:{value:e.formData.resignDate,callback:function(t){e.$set(e.formData,"resignDate",t)},expression:"formData.resignDate"}})],1)],1)],1)},r=[],o=(a("ac1f"),a("5319"),a("86da")),c=a("dba5"),i={components:{Modal:o["a"]},data:function(){return{formData:{resignDate:""},labelCol:{span:8},wrapperCol:{span:10},rules:{resignReason:[{required:!0,message:"请选择离职原因"}],resignDate:[{required:!0,message:"请选择离职日期"}]},options:["身体不适应","薪酬不理想","工作繁重","不适应工作时间","上下班不便","与同事难以相处","不能遵守劳动纪律","不适应岗位要求","个人家庭原因","有其他就业岗位","因涉毒原因被查处","非涉毒原因被查处","其他"],isDisabled:!1,isDetail:!1}},created:function(){},methods:{onDateChange:function(e){var t=new Date,a="";a=e.replace(/-/g,"/"),a=new Date(a),a.valueOf()>t.valueOf()&&(this.formData.resignDate="",this.$message.warning("离职日期不能大于当前日期"))},show:function(e){this.$refs.modal.visible=!0,this.isDisabled=!0,this.isDetail=!1,this.formData={},this.formData.id=e.sjskPersonId,this.formData.realName=e.realName,this.formData.identityCard=e.identityCard,this.formData.sex=1===e.sex?"男":"女"},onSubmit:function(){var e=this;console.log(this.formData),this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.isDetail?e.$refs.modal.visible=!1:(e.formData.sex="男"===e.formData.sex?1:2,c["a"].confirmPlacementJobResigned(e.formData).then((function(t){e.$refs.modal.visible=!1,e.$message.success("提交成功"),e.$emit("onSuccess")})).catch((function(){})))}))}}},l=i,u=a("2877"),m=Object(u["a"])(l,n,r,!1,null,"512f91fa",null);t["default"]=m.exports},dba5:function(e,t,a){"use strict";var n=a("b775");t["a"]={getPersonInfoByIdCard:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCard",method:"GET",params:e})},getPersonInfoByIdCardToGa:function(e){return Object(n["a"])({url:"/manage/personSeized/getPersonInfoByIdCardToGa",method:"GET",params:e})},getPersonInfoByIdCardJg:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCardJg",method:"GET",params:e})},getPersonInfoByIdCardToHospital:function(e){return Object(n["a"])({url:"/medcare/inHospital/getPersonInfoByIdCardToHospital",method:"GET",params:e})},getPersonInfoByIdCardToTreat:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/getPersonInfoByIdCardToTreat",method:"GET",params:e})},inHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/inHospital/get/"+"".concat(e),method:"GET"})},inHospitalExport:function(e){return Object(n["a"])({url:"/medcare/inHospital/export",method:"post",params:e})},inHospitalPage:function(e){return Object(n["a"])({url:"/medcare/inHospital/page",method:"GET",params:e})},updateHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/updateHospitalIn",method:"PUT",data:e})},confirmHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/confirmHospitalIn",method:"PUT",data:e})},saveHospitalOut:function(e){return Object(n["a"])({url:"/medcare/inHospital/saveHospitalOut",method:"POST",data:e})},inHospitalDelete:function(e){return Object(n["a"])({url:"/medcare/inHospital/delete/"+"".concat(e),method:"DELETE"})},saveHospitalOut1:function(e){return Object(n["a"])({url:"/medcare/outHospital/saveHospitalOut",method:"POST",data:e})},confirmHospitalOut:function(e){return Object(n["a"])({url:"/medcare/outHospital/confirmHospitalOut",method:"PUT",data:e})},outHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/outHospital/get/"+"".concat(e),method:"GET"})},treatGroupInDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/get/"+"".concat(e),method:"GET"})},treatGroupInPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/page",method:"GET",params:e})},createTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/createTherapyStatus",method:"POST",data:e})},updateTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/updateTherapyStatus",method:"PUT",data:e})},treatGroupInDelete:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/delete/"+"".concat(e),method:"DELETE"})},treatReferralDetail:function(e){return Object(n["a"])({url:"/medcare/treatReferral/get/"+"".concat(e),method:"GET"})},treatReferralPage:function(e){return Object(n["a"])({url:"/medcare/treatReferral/page",method:"GET",params:e})},saveTreatReferral:function(e){return Object(n["a"])({url:"/medcare/treatReferral/saveTreatReferral",method:"POST",data:e})},updateTreatMedicine1:function(e){return Object(n["a"])({url:"/medcare//treatReferral/updateTreatMedicine",method:"PUT",data:e})},treatGroupOutDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/get/"+"".concat(e),method:"GET"})},treatGroupOutPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/page",method:"GET",params:e})},saveTreatGroupOut:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/saveTreatGroupOut",method:"POST",data:e})},treatMedicineDetail:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/get/"+"".concat(e),method:"GET"})},treatMedicinePage:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/page",method:"GET",params:e})},saveTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/saveTreatMedicine",method:"POST",data:e})},updateTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/updateTreatMedicine",method:"PUT",data:e})},deleteTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/deleteTreatMedicine",method:"PUT",params:e})},helpcompanyEntryRegDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/delete/"+"".concat(e),method:"DELETE"})},helpcompanyEntryRegExport:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/export",method:"POST",params:e})},entryRegResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/entryRegResign",method:"PUT",data:e})},getHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/getHelpcompanyResign/"+"".concat(e),method:"GET"})},helpcompanyEntryRegDetail2:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/get/"+"".concat(e),method:"GET"})},helpcompanyEntryRegPage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/page",method:"GET",params:e})},saveHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/saveHelpcompanyEntryReg",method:"POST",data:e})},updateHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/updateHelpcompanyEntryReg",method:"PUT",data:e})},saveHelpcompanyAttendance:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/saveHelpcompanyAttendance",method:"POST",data:e})},helpcompanyAttendancePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/page",method:"GET",params:e})},helpcompanyAttendanceDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/get/"+"".concat(e),method:"GET"})},helpcompanyAttendanceDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/delete/"+"".concat(e),method:"DELETE"})},backFromLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/backFromLeave",method:"PUT",data:e})},helpcompanyLeaveDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/delete/"+"".concat(e),method:"DELETE"})},helpcompanyLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/get/"+"".concat(e),method:"GET"})},getBackFromLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/getBackFromLeaveDetail/"+"".concat(e),method:"GET"})},helpcompanyLeavePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/page",method:"GET",params:e})},saveHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/saveHelpcompanyLeave",method:"POST",data:e})},updateHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/updateHelpcompanyLeave",method:"PUT",data:e})},helpcompanyResignDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/get/"+"".concat(e),method:"GET"})},saveHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/saveHelpcompanyResign",method:"POST",data:e})},institutionHelpDelete:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/delete/"+"".concat(e),method:"DELETE"})},institutionDetail:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/get/"+"".concat(e),method:"GET"})},institutionHelpPage:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/page",method:"GET",params:e})},saveInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/saveInstitutionHelp",method:"POST",data:e})},updateInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/updateInstitutionHelp",method:"PUT",data:e})},institutionMentalityDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/delete/"+"".concat(e),method:"DELETE"})},institutionMentalityDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/get/"+"".concat(e),method:"GET"})},institutionMentalityDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/page",method:"GET",params:e})},saveInstitutionMentalityDoc:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/saveInstitutionMentalityDoc",method:"POST",data:e})},updateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/updateInstitutionPerson",method:"PUT",data:e})},institutionPersonDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/delete/"+"".concat(e),method:"DELETE"})},institutionPersonDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/get/"+"".concat(e),method:"GET"})},institutionPersonPage:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/page",method:"GET",params:e})},saveInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/saveInstitutionPerson",method:"POST",data:e})},inUpdateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/updateInstitutionPerson",method:"PUT",data:e})},institutionPhysiologyDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/delete/"+"".concat(e),method:"DELETE"})},institutionPhysiologyDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/get/"+"".concat(e),method:"GET"})},institutionPhysiologyDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/page",method:"GET",params:e})},saveInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/saveInstitutionPhysiologyDoc",method:"POST",data:e})},updateInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/updateInstitutionPhysiologyDoc",method:"PUT",data:e})},placementJobSettleDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/delete/"+"".concat(e),method:"DELETE"})},placementJobSettleDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/get/"+"".concat(e),method:"GET"})},placementJobSettlePage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/page",method:"GET",params:e})},pageRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageRecommend",method:"GET",params:e})},pageSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageSettled",method:"GET",params:e})},pageUnSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageUnSettled",method:"GET",params:e})},savePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/savePlacementJobSettle",method:"post",params:e})},updatePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/updatePlacementJobSettle",method:"PUT",params:e})},confirmPlacementJobRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobRecommend",method:"PUT",data:e})},confirmPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobSettled",method:"PUT",data:e})},cancelPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/cancelPlacementJobSettled",method:"PUT",data:e})},confirmPlacementJobResigned:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobResigned",method:"PUT",data:e})},placementJobSettledHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettledHistory/page",method:"GET",params:e})},placementJobRecommendHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobRecommendHistory/page",method:"GET",params:e})},placementJobResignedHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobResignedHistory/page",method:"GET",params:e})},placementJobTrainDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/delete/"+"".concat(e),method:"DELETE"})},placementJobTrainDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/get/"+"".concat(e),method:"GET"})},placementJobTrainPage:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/page",method:"GET",params:e})},savePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/savePlacementJobTrain",method:"POST",data:e})},updatePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/updatePlacementJobTrain",method:"PUT",data:e})},placementJobWillDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/get/"+"".concat(e),method:"GET"})},savePlacementJobWill:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/savePlacementJobWill",method:"POST",params:e})}}}}]);