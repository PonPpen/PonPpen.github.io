(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21043e"],{b6c7:function(t,e,n){"use strict";n.r(e);n("4160"),n("a9e3"),n("159b");for(var a=n("cc33"),i=n("bf11"),o=n("d99e"),d=n("007b"),r=n("2e5e"),l=n("c1df"),h=n.n(l),c=n("16fe"),s=o["a"].Item,m=[{title:"序号",dataIndex:"序号",key:"序号",width:50},{title:"区域",dataIndex:"区域",key:"区域",width:100},{title:"总计",dataIndex:"总计",key:"总计",width:100},{title:"年龄段分析",children:[{title:"18岁以下",children:[{title:"人数",dataIndex:"人数",key:"18num",width:100},{title:"比例",dataIndex:"比例",key:"18radio",width:100}]},{title:"18岁到25岁",children:[{title:"人数",dataIndex:"人数",key:"25num",width:100},{title:"比例",dataIndex:"比例",key:"25radio",width:100}]},{title:"25岁到35岁",children:[{title:"人数",dataIndex:"人数",key:"35num",width:100},{title:"比例",dataIndex:"比例",key:"35radio",width:100}]},{title:"35岁到50岁",children:[{title:"人数",dataIndex:"人数",key:"50num",width:100},{title:"比例",dataIndex:"比例",key:"50radio",width:100}]}]}],u=[],f=0;f<100;f++)u.push({key:f,"序号":f+1,"区域":"海南省","总计":"45744","人数":"419203","比例":"0.01％"});e["default"]={name:"Index",components:{SearchForm:o["a"],SearchFormItem:s,CustomTable:i["a"]},data:function(){return{rangePickerTime:[],areaModel:[],areaArray:[],options:[],loading:!1,form:{province:"hainan",city:"03",township:"03",community:"03",userId:Object(a["f"])().userId,time:1,person:"03"},tabPosition:"top",dateFormat:"YYYY/MM/DD",tableData:u,columns:m,selectedData:{}}},created:function(){var t={deptKey:1};this.getArea(t),this.initParam(),this.getDrugActionAnalysis(this.form)},mounted:function(){},computed:{},methods:{initParam:function(){this.form.departmentId=Object(a["f"])().mainDeptId,this.areaModel=[this.form.departmentId],this.form.sjskType="",this.form.timeType=4;var t=Object(c["getTime"])();this.form.startTime=t,this.form.endTime=t,this.rangePickerTime=[h()(t,this.dateFormat),h()(t,this.dateFormat)],console.log("默认参数",this.form)},getArea:function(t){var e=this;d["a"].getDepartmentTree(t).then((function(t){null!==t&&(e.areaArray=t.data,console.log("区域数据",t,e.areaArray),e.areaArray.forEach((function(t,n){e.options.push({value:t.key,label:t.title}),0!==t.children.length&&t.children.forEach((function(a,i){e.options[n]["children"].push({value:a.key,label:a.title}),0!==t.children.children.length&&t.children.children.forEach((function(t){e.options["children"][i]["children"].push({value:t.key,label:t.title})}))}))})),console.log("区域数据格式化",e.options))})).catch((function(){}))},onAreaChange:function(t){this.form.departmentId=Number(t[0]),console.log(t[0],this.form.departmentId)},rangePickerChange:function(t){var e=t[0]["_d"].getMonth()+1>=10?t[0]["_d"].getMonth()+1:"0"+(t[0]["_d"].getMonth()+1),n=t[1]["_d"].getMonth()+1>=10?t[1]["_d"].getMonth()+1:"0"+(t[1]["_d"].getMonth()+1),a=t[0]["_d"].getDate()>=10?t[0]["_d"].getDate():"0"+t[0]["_d"].getDate(),i=t[1]["_d"].getDate()>=10?t[1]["_d"].getDate():"0"+t[1]["_d"].getDate();this.form.startTime=t[0]["_d"].getFullYear()+"-"+e+"-"+a,this.form.endTime=t[1]["_d"].getFullYear()+"-"+n+"-"+i},getDrugActionAnalysis:function(t){var e=Object.assign({},t);r["a"].getDrugActionAnalysis(e).then((function(t){if(null!==t){t.data;console.log("吸毒场所统计",t)}})).catch((function(){}))},onQuery:function(){},onResetForm:function(){this.initParam()},radioOnChange:function(t){console.log(t.target.value)}}}}}]);