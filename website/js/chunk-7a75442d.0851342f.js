(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a75442d","chunk-292c6eb3"],{"07cc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-wrap"},[n("div",{staticClass:"card-title"},[n("div",{staticClass:"title"},[t._v(t._s(t.title)+" "),t._t("subTitle")],2),t._t("right")],2),n("div",{staticClass:"card-content"},[t._t("default")],2)])},i=[],r={name:"AnalysisCard",data:function(){return{title:this.label}},props:{label:{type:String,default:""}}},o=r,c=(n("c0c7"),n("2877")),s=Object(c["a"])(o,a,i,!1,null,"7d7b4c56",null);e["default"]=s.exports},bf4b:function(t,e,n){},c0c7:function(t,e,n){"use strict";var a=n("bf4b"),i=n.n(a);i.a},e65e:function(t,e,n){"use strict";n.r(e);n("4160"),n("159b");var a=n("5530"),i=n("cc33"),r=n("2f62"),o=n("d99e"),c=n("07cc"),s=n("16fe"),l=n("752d"),h=n("007b"),u=n("c1df"),d=n.n(u),f=o["a"].Item;e["default"]={name:"Index",components:{SearchForm:o["a"],SearchFormItem:f,AnalysisCard:c["default"]},data:function(){return{rangePickerTime:[],areaModel:[],areaArray:[],options:[],form:{departmentId:null,endTime:"",startTime:"",sjskType:"",timeType:""},ageType:"1",dateFormat:"YYYY/MM/DD",AgeAnalysisData:[],SexDistributionData:[],EducationAnalysisData:[],DangerSituationAnalysisData:[]}},created:function(){var t={deptKey:1};this.getArea(t),this.initParam(),this.getAgeAnalysis(this.form),this.getSexDistribution(),this.getEducationAnalysis(this.form),this.getDangerSituationAnalysis(this.form),console.log("所在区域@@@",Object(i["f"])())},mounted:function(){},computed:Object(a["a"])({},Object(r["d"])({loading:function(t){return t.SysExamination.loading},listData:function(t){return t.SysExamination.applyIngData}})),methods:{moment:d.a,initParam:function(){this.form.departmentId=Object(i["f"])().mainDeptId,this.areaModel=[this.form.departmentId],this.form.sjskType="",this.form.timeType=4;var t=Object(s["getTime"])();this.form.startTime=t,this.form.endTime=t,this.rangePickerTime=[d()(t,this.dateFormat),d()(t,this.dateFormat)],console.log("默认参数",this.form)},getArea:function(t){var e=this;h["a"].getDepartmentTree(t).then((function(t){null!==t&&(e.areaArray=t.data,e.areaArray.forEach((function(t,n){e.options.push({value:t.key,label:t.title,children:[]}),console.log("地址",e.areaArray,e.options),t.children&&0!==t.children.length&&t.children.forEach((function(t,a){e.options[n].children.push({value:t.key,label:t.title,children:[]}),t.children&&0!==t.children.length&&t.children.forEach((function(t,i){e.options[n].children[a].children.push({value:t.key,label:t.title,children:[]}),t.children&&t.children.length&&t.children.forEach((function(r,o){e.options[n].children[a].children[i].children.push({value:r.key,label:r.title,children:[]}),r.children&&r.children.length&&r.children.forEach((function(r,c){e.options[n].children[a].children[i].children[o].children.push({value:r.key,label:r.title,children:[]}),r.children&&r.children.length&&t.children.forEach((function(t){e.options[n].children[a].children[i].children[o].children[c].children.push({value:t.key,label:t.title,children:[]})}))}))}))}))}))})))})).catch((function(){}))},onAreaChange:function(t){this.form.departmentId=t[t.length-1],console.log(t[0],this.form.departmentId)},rangePickerChange:function(t){var e=t[0]["_d"].getMonth()+1>=10?t[0]["_d"].getMonth()+1:"0"+(t[0]["_d"].getMonth()+1),n=t[1]["_d"].getMonth()+1>=10?t[1]["_d"].getMonth()+1:"0"+(t[1]["_d"].getMonth()+1),a=t[0]["_d"].getDate()>=10?t[0]["_d"].getDate():"0"+t[0]["_d"].getDate(),i=t[1]["_d"].getDate()>=10?t[1]["_d"].getDate():"0"+t[1]["_d"].getDate();this.form.startTime=t[0]["_d"].getFullYear()+"-"+e+"-"+a,this.form.endTime=t[1]["_d"].getFullYear()+"-"+n+"-"+i},getParam:function(){},getAgeAnalysis:function(t){var e=this,n=[],a=[];l["a"].getAgeAnalysis(t).then((function(t){if(null!==t){var i=t.data;e.AgeAnalysisData=t.data,i&&i.forEach((function(t){n.push({value:t.count,name:t.typeName}),a.push({ratio:t.ratio})})),e.Charts1(n,a),console.log("年龄情况数据",n,a)}})).catch((function(){}))},getSexDistribution:function(){var t=this,e=this.form;e["ageType"]=this.ageType,console.log("性别分布情况",e);var n=[],a=[];l["a"].getSexDistribution(e).then((function(e){if(null!==e){var i=e.data;t.SexDistributionData=[],i&&i.forEach((function(t){n.push({value:t.count,name:t.typeName}),a.push({ratio:t.ratio})})),t.Charts2(n,a)}})).catch((function(){}))},getEducationAnalysis:function(t){var e=this,n=[],a=[];l["a"].getEducationAnalysis(t).then((function(t){if(null!==t){var i=t.data;e.EducationAnalysisData=t.data,i&&i.forEach((function(t){n.push({value:t.count,name:t.typeName}),a.push({ratio:t.ratio})})),e.Charts3(n,a,180)}})).catch((function(){}))},getDangerSituationAnalysis:function(t){var e=this,n=[];l["a"].getDangerSituationAnalysis(t).then((function(t){if(null!==t){var a=t.data;e.DangerSituationAnalysisData=t.data,a&&a.forEach((function(t){n.push({value:t.count,name:t.typeName})})),e.Charts4(n)}})).catch((function(){}))},getExportExcel:function(t){l["a"].getExportExcel(t).then((function(t){null!==t&&console.log("导出表格",t)})).catch((function(){}))},onRadioChange:function(t){console.log("年龄切换",t.target.value,this.ageType),this.getSexDistribution()},onQuery:function(){var t=this.form;console.log("参数",this.form),this.getAgeAnalysis(t),this.getSexDistribution(),this.getEducationAnalysis(t),this.getDangerSituationAnalysis(t)},onResetForm:function(){this.initParam()},radioOnChange:function(t){console.log(t.target.value)},getAgeAnalysisData:function(t){l["a"].getAgeAnalysis(t).then((function(t){null!==t&&console.log("年龄情况分析",t)})).catch((function(){}))},Charts1:function(t,e){var n=this.$echarts.init(document.getElementById("age-echarts")),a=["25%","53%"],i=[0,100],r="middle";Object(s["drawPieEcharts"])(n,a,i,r,t,e,140,"人")},Charts2:function(t,e){var n=this.$echarts.init(document.getElementById("sex-echarts")),a=["25%","40%"],i=[70,90],r="30%";Object(s["drawPieEcharts"])(n,a,i,r,t,e,80,"人")},Charts3:function(t,e,n){var a=this.$echarts.init(document.getElementById("culture-echarts")),i=["25%","53%"],r=[0,100],o="middle";Object(s["drawPieEcharts"])(a,i,r,o,t,e,n,"人")},Charts4:function(t){var e=this.$echarts.init(document.getElementById("dangerous-echarts")),n=["50%","50%"],a=[0,100],i="middle";Object(s["drawPie1Echarts"])(e,n,a,i,t)}}}}}]);