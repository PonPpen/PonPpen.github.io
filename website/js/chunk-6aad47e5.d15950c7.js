(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aad47e5"],{beab:function(e,t,a){},d6fb:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("div",{staticClass:"infoBox"},[a("p",{staticClass:"title"},[e._v("人员基本信息")]),a("div",{staticClass:"content"},[a("div",{staticClass:"row"},[a("p",[e._v(" 身份证号："),a("span",[e._v(e._s(e.infoData.identityCard))])]),a("p",[e._v(" 姓名："),a("span",[e._v(e._s(e.infoData.realname))])]),a("p",[e._v(" 性别："),a("span",[e._v(e._s("1"===e.infoData.sex?"男":"女"))])])]),a("div",{staticClass:"row"},[a("p",[e._v(" 出生日期："),a("span",[e._v(e._s(e.moment(e.infoData.birthdate).format("YYYY-MM-DD")))])]),a("p",[e._v(" 联系电话："),a("span",[e._v(e._s(e.infoData.cellphone))])])]),a("div",{staticClass:"row"},[a("p",[e._v(" 户籍所在地："),a("span",[e._v(e._s(e.infoData.householdAddressName))])]),a("p",[e._v(" 户籍详细地址："),a("span",[e._v(e._s(e.infoData.householdAddress))])])]),a("div",{staticClass:"row"},[a("p",[e._v(" 现居住地："),a("span",[e._v(e._s(e.infoData.currentAddressName))])]),a("p",[e._v(" 现居住详细地址："),a("span",[e._v(e._s(e.infoData.currentAddress))])])])])]),a("div",{staticClass:"infoBox"},[a("p",{staticClass:"title"},[e._v("人员入站信息")]),a("div",{staticClass:"content"},[a("div",{staticClass:"row"},[a("p",[e._v(" 站点名称："),a("span",[e._v(e._s(e.infoData.stationName))])]),a("p",[e._v(" 入站次数："),a("span",[e._v(e._s(e.infoData.instationCounts))])]),a("p",[e._v(" 入站日期："),a("span",[e._v(e._s(e.infoData.instationDate))])])]),a("div",{staticClass:"row"},[a("p",[e._v(" 入站原因："),a("span",[e._v(e._s(e.infoData.instationReason))])])])])])])},o=[],r=a("dba5"),c={components:{},data:function(){return{infoData:{}}},created:function(){var e=this.$route.params.id;this.getInfo(e)},methods:{getInfo:function(e){var t=this;r["a"].institutionPersonDetail(e).then((function(e){t.infoData=e,"0"===e.instationReason&&(t.infoData.instationReason="心理咨询"),"1"===e.instationReason&&(t.infoData.instationReason="身体检查"),"2"===e.instationReason&&(t.infoData.instationReason="帮扶救助"),"3"===e.instationReason&&(t.infoData.instationReason="就业安置"),"4"===e.instationReason&&(t.infoData.instationReason="其他")})).catch((function(){}))}}},i=c,u=(a("f876"),a("2877")),l=Object(u["a"])(i,n,o,!1,null,"2f6f74d3",null);t["default"]=l.exports},dba5:function(e,t,a){"use strict";var n=a("b775");t["a"]={getPersonInfoByIdCard:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCard",method:"GET",params:e})},getPersonInfoByIdCardToGa:function(e){return Object(n["a"])({url:"/manage/personSeized/getPersonInfoByIdCardToGa",method:"GET",params:e})},getPersonInfoByIdCardJg:function(e){return Object(n["a"])({url:"/medcare/drugRehabilitationManage/getPersonInfoByIdCardJg",method:"GET",params:e})},getPersonInfoByIdCardToHospital:function(e){return Object(n["a"])({url:"/medcare/inHospital/getPersonInfoByIdCardToHospital",method:"GET",params:e})},getPersonInfoByIdCardToTreat:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/getPersonInfoByIdCardToTreat",method:"GET",params:e})},inHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/inHospital/get/"+"".concat(e),method:"GET"})},inHospitalExport:function(e){return Object(n["a"])({url:"/medcare/inHospital/export",method:"post",params:e})},inHospitalPage:function(e){return Object(n["a"])({url:"/medcare/inHospital/page",method:"GET",params:e})},updateHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/updateHospitalIn",method:"PUT",data:e})},confirmHospitalIn:function(e){return Object(n["a"])({url:"/medcare/inHospital/confirmHospitalIn",method:"PUT",data:e})},saveHospitalOut:function(e){return Object(n["a"])({url:"/medcare/inHospital/saveHospitalOut",method:"POST",data:e})},inHospitalDelete:function(e){return Object(n["a"])({url:"/medcare/inHospital/delete/"+"".concat(e),method:"DELETE"})},saveHospitalOut1:function(e){return Object(n["a"])({url:"/medcare/outHospital/saveHospitalOut",method:"POST",data:e})},confirmHospitalOut:function(e){return Object(n["a"])({url:"/medcare/outHospital/confirmHospitalOut",method:"PUT",data:e})},outHospitalDetail:function(e){return Object(n["a"])({url:"/medcare/outHospital/get/"+"".concat(e),method:"GET"})},treatGroupInDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/get/"+"".concat(e),method:"GET"})},treatGroupInPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/page",method:"GET",params:e})},createTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/createTherapyStatus",method:"POST",data:e})},updateTherapyStatus:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/updateTherapyStatus",method:"PUT",data:e})},treatGroupInDelete:function(e){return Object(n["a"])({url:"/medcare/treatGroupIn/delete/"+"".concat(e),method:"DELETE"})},treatReferralDetail:function(e){return Object(n["a"])({url:"/medcare/treatReferral/get/"+"".concat(e),method:"GET"})},treatReferralPage:function(e){return Object(n["a"])({url:"/medcare/treatReferral/page",method:"GET",params:e})},saveTreatReferral:function(e){return Object(n["a"])({url:"/medcare/treatReferral/saveTreatReferral",method:"POST",data:e})},updateTreatMedicine1:function(e){return Object(n["a"])({url:"/medcare//treatReferral/updateTreatMedicine",method:"PUT",data:e})},treatGroupOutDetail:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/get/"+"".concat(e),method:"GET"})},treatGroupOutPage:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/page",method:"GET",params:e})},saveTreatGroupOut:function(e){return Object(n["a"])({url:"/medcare/treatGroupOut/saveTreatGroupOut",method:"POST",data:e})},treatMedicineDetail:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/get/"+"".concat(e),method:"GET"})},treatMedicinePage:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/page",method:"GET",params:e})},saveTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/saveTreatMedicine",method:"POST",data:e})},updateTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/updateTreatMedicine",method:"PUT",data:e})},deleteTreatMedicine:function(e){return Object(n["a"])({url:"/medcare/treatMedicine/deleteTreatMedicine",method:"PUT",params:e})},helpcompanyEntryRegDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/delete/"+"".concat(e),method:"DELETE"})},helpcompanyEntryRegExport:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/export",method:"POST",params:e})},entryRegResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/entryRegResign",method:"PUT",data:e})},getHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/getHelpcompanyResign/"+"".concat(e),method:"GET"})},helpcompanyEntryRegDetail2:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/get/"+"".concat(e),method:"GET"})},helpcompanyEntryRegPage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/page",method:"GET",params:e})},saveHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/saveHelpcompanyEntryReg",method:"POST",data:e})},updateHelpcompanyEntryReg:function(e){return Object(n["a"])({url:"/medcare/helpcompanyEntryReg/updateHelpcompanyEntryReg",method:"PUT",data:e})},saveHelpcompanyAttendance:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/saveHelpcompanyAttendance",method:"POST",data:e})},helpcompanyAttendancePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/page",method:"GET",params:e})},helpcompanyAttendanceDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/get/"+"".concat(e),method:"GET"})},helpcompanyAttendanceDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyAttendance/delete/"+"".concat(e),method:"DELETE"})},backFromLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/backFromLeave",method:"PUT",data:e})},helpcompanyLeaveDelete:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/delete/"+"".concat(e),method:"DELETE"})},helpcompanyLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/get/"+"".concat(e),method:"GET"})},getBackFromLeaveDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/getBackFromLeaveDetail/"+"".concat(e),method:"GET"})},helpcompanyLeavePage:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/page",method:"GET",params:e})},saveHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/saveHelpcompanyLeave",method:"POST",data:e})},updateHelpcompanyLeave:function(e){return Object(n["a"])({url:"/medcare/helpcompanyLeave/updateHelpcompanyLeave",method:"PUT",data:e})},helpcompanyResignDetail:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/get/"+"".concat(e),method:"GET"})},saveHelpcompanyResign:function(e){return Object(n["a"])({url:"/medcare/helpcompanyResign/saveHelpcompanyResign",method:"POST",data:e})},institutionHelpDelete:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/delete/"+"".concat(e),method:"DELETE"})},institutionDetail:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/get/"+"".concat(e),method:"GET"})},institutionHelpPage:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/page",method:"GET",params:e})},saveInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/saveInstitutionHelp",method:"POST",data:e})},updateInstitutionHelp:function(e){return Object(n["a"])({url:"/medcare/institutionHelp/updateInstitutionHelp",method:"PUT",data:e})},institutionMentalityDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/delete/"+"".concat(e),method:"DELETE"})},institutionMentalityDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/get/"+"".concat(e),method:"GET"})},institutionMentalityDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/page",method:"GET",params:e})},saveInstitutionMentalityDoc:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/saveInstitutionMentalityDoc",method:"POST",data:e})},updateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionMentalityDoc/updateInstitutionPerson",method:"PUT",data:e})},institutionPersonDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/delete/"+"".concat(e),method:"DELETE"})},institutionPersonDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/get/"+"".concat(e),method:"GET"})},institutionPersonPage:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/page",method:"GET",params:e})},saveInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/saveInstitutionPerson",method:"POST",data:e})},inUpdateInstitutionPerson:function(e){return Object(n["a"])({url:"/medcare/institutionPerson/updateInstitutionPerson",method:"PUT",data:e})},institutionPhysiologyDocDelete:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/delete/"+"".concat(e),method:"DELETE"})},institutionPhysiologyDocDetail:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/get/"+"".concat(e),method:"GET"})},institutionPhysiologyDocPage:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/page",method:"GET",params:e})},saveInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/saveInstitutionPhysiologyDoc",method:"POST",data:e})},updateInstitutionPhysiologyDoc:function(e){return Object(n["a"])({url:"/medcare/institutionPhysiologyDoc/updateInstitutionPhysiologyDoc",method:"PUT",data:e})},placementJobSettleDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/delete/"+"".concat(e),method:"DELETE"})},placementJobSettleDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/get/"+"".concat(e),method:"GET"})},placementJobSettlePage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/page",method:"GET",params:e})},pageRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageRecommend",method:"GET",params:e})},pageSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageSettled",method:"GET",params:e})},pageUnSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/pageUnSettled",method:"GET",params:e})},savePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/savePlacementJobSettle",method:"post",params:e})},updatePlacementJobSettle:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/updatePlacementJobSettle",method:"PUT",params:e})},confirmPlacementJobRecommend:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobRecommend",method:"PUT",data:e})},confirmPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobSettled",method:"PUT",data:e})},cancelPlacementJobSettled:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/cancelPlacementJobSettled",method:"PUT",data:e})},confirmPlacementJobResigned:function(e){return Object(n["a"])({url:"/medcare/placementJobSettle/confirmPlacementJobResigned",method:"PUT",data:e})},placementJobSettledHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobSettledHistory/page",method:"GET",params:e})},placementJobRecommendHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobRecommendHistory/page",method:"GET",params:e})},placementJobResignedHistoryPage:function(e){return Object(n["a"])({url:"/medcare/placementJobResignedHistory/page",method:"GET",params:e})},placementJobTrainDelete:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/delete/"+"".concat(e),method:"DELETE"})},placementJobTrainDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/get/"+"".concat(e),method:"GET"})},placementJobTrainPage:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/page",method:"GET",params:e})},savePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/savePlacementJobTrain",method:"POST",data:e})},updatePlacementJobTrain:function(e){return Object(n["a"])({url:"/medcare/placementJobTrain/updatePlacementJobTrain",method:"PUT",data:e})},placementJobWillDetail:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/get/"+"".concat(e),method:"GET"})},savePlacementJobWill:function(e){return Object(n["a"])({url:"/medcare/placementJobWill/savePlacementJobWill",method:"POST",params:e})}}},f876:function(e,t,a){"use strict";var n=a("beab"),o=a.n(n);o.a}}]);