(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09ac47ac"],{"31a4":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("PageView",[t("div",{staticClass:"rules"},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:6}},[t("div",{staticClass:"leftTab"},[t("ul",a._l(a.tabData,(function(e,n){return t("li",{key:n,class:{active:a.tabIndex===n},on:{click:function(e){return a.tabFun(n)}}},[a._v(" "+a._s(e.label)+" ")])})),0)])]),t("a-col",{attrs:{span:18}},[t("div",{staticClass:"rightData"},[t("ul",[t("li",{directives:[{name:"show",rawName:"v-show",value:0==a.tabIndex,expression:"tabIndex == 0"}]},[t("div",{staticClass:"tabButton"},[t("a-button",{attrs:{type:"primary"},on:{click:a.tabIndexSave}},[a._v("保存")]),t("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){return a.getWarmingListModal(a.tabIndex)}}},[a._v("预警记录")])],1),a._l(a.sjskRelapseDangerData,(function(e,n){return t("div",{key:n,staticClass:"tabContent"},[t("div",{staticClass:"leftContent paddingTop"},[0===n?t("span",[t("a-badge",{attrs:{color:"magenta"}}),a._v("通联红色告警")],1):a._e(),1===n?t("span",[t("a-badge",{attrs:{color:"orange"}}),a._v("通联橙色告警")],1):a._e(),2===n?t("span",[t("a-badge",{attrs:{color:"yellow"}}),a._v("通联黄色告警")],1):a._e(),3===n?t("span",[t("a-badge",{attrs:{color:"#2db7f5"}}),a._v("通联蓝色告警")],1):a._e()]),t("div",{staticClass:"rightContent"},[a._v(" 该社戒社康人员与其他社戒社康人员 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[0],callback:function(t){a.$set(e.changeParamArr,0,t)},expression:"item.changeParamArr[0]"}}),a._v(" 天内联系次数为 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[1],callback:function(t){a.$set(e.changeParamArr,1,t)},expression:"item.changeParamArr[1]"}}),a._v(" 次以上或A类关键词达 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[2],callback:function(t){a.$set(e.changeParamArr,2,t)},expression:"item.changeParamArr[2]"}}),a._v(" 次；或B类关键词达 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[3],callback:function(t){a.$set(e.changeParamArr,3,t)},expression:"item.changeParamArr[3]"}}),a._v(" 次；C类关键词达 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[4],callback:function(t){a.$set(e.changeParamArr,4,t)},expression:"item.changeParamArr[4]"}}),a._v(" 次；D类关键词达 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[5],callback:function(t){a.$set(e.changeParamArr,5,t)},expression:"item.changeParamArr[5]"}}),a._v(" 次；E类关键词达 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[6],callback:function(t){a.$set(e.changeParamArr,6,t)},expression:"item.changeParamArr[6]"}}),a._v(" 次;或关键词命中次数达 "),t("a-input",{staticClass:"cont-input",model:{value:e.changeParamArr[7],callback:function(t){a.$set(e.changeParamArr,7,t)},expression:"item.changeParamArr[7]"}})],1)])}))],2),t("li",{directives:[{name:"show",rawName:"v-show",value:1==a.tabIndex,expression:"tabIndex == 1"}]},[t("div",{staticClass:"tabButton"},[t("a-button",{attrs:{type:"primary"},on:{click:a.tabIndex1Save}},[a._v("保存")]),t("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){return a.getWarmingListModal(a.tabIndex)}}},[a._v("预警记录")])],1),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent title"},[t("a-badge",{attrs:{color:"magenta"}}),a._v("红色告警 ")],1),t("div",{staticClass:"rightContent"},[a._v(" 橙色告警基础上， "),t("a-input",{staticStyle:{width:"20%"},model:{value:a.gatherWarnRuleData[0].changeParam,callback:function(e){a.$set(a.gatherWarnRuleData[0],"changeParam",e)},expression:"gatherWarnRuleData[0].changeParam"}}),a._v("分钟时间内目标人群轨迹一致 ")],1)]),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent title"},[t("a-badge",{attrs:{color:"orange"}}),a._v("橙色告警 ")],1),t("div",{staticClass:"rightContent"},[a._v(" 至少 "),t("a-input",{staticStyle:{width:"20%"},model:{value:a.gatherWarnRuleData[1].changeParamArr[0],callback:function(e){a.$set(a.gatherWarnRuleData[1].changeParamArr,0,e)},expression:"gatherWarnRuleData[1].changeParamArr[0]"}}),a._v("人实时位置小于 "),t("a-input",{staticStyle:{width:"20%"},model:{value:a.gatherWarnRuleData[1].changeParamArr[1],callback:function(e){a.$set(a.gatherWarnRuleData[1].changeParamArr,1,e)},expression:"gatherWarnRuleData[1].changeParamArr[1]"}}),a._v("米 ")],1)])]),t("li",{directives:[{name:"show",rawName:"v-show",value:2==a.tabIndex,expression:"tabIndex == 2"}]},[t("div",{staticClass:"tabButton"},[t("a-button",{attrs:{type:"primary"},on:{click:a.tabIndex2Save}},[a._v("保存")]),t("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){return a.getWarmingListModal(a.tabIndex)}}},[a._v("预警记录")])],1),t("div",{staticClass:"tabContent",staticStyle:{"border-bottom":"0"}},[t("div",{staticClass:"leftContent title"},[a._v("擅自离开执行地：")]),t("div",{staticClass:"rightContent"},[a._v("请在“重点区域配置”绘制执行地区域后绑定相对应的部门")])]),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent title"},[t("a-badge",{attrs:{color:"magenta"}}),a._v("红色告警 ")],1),t("div",{staticClass:"rightContent",domProps:{innerHTML:a._s(a.leaveWarnRuleData[0].fullRule)}})])]),t("li",{directives:[{name:"show",rawName:"v-show",value:3==a.tabIndex,expression:"tabIndex == 3"}]},[t("div",{staticClass:"tabButton"},[t("a-button",{attrs:{type:"primary"},on:{click:a.tabIndex3Save}},[a._v("保存")]),t("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){return a.getWarmingListModal(a.tabIndex)}}},[a._v("预警记录")])],1),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent"},[a._v("高危区域：")]),t("div",{staticClass:"rightContent"},[t("a-select",{staticStyle:{width:"200px"},attrs:{mode:"multiple",size:"default",placeholder:"请选择"},on:{popupScroll:a.popupScroll},model:{value:a.selArr,callback:function(e){a.selArr=e},expression:"selArr"}},a._l(a.sjskRegionListData,(function(e){return t("a-select-option",{key:e.id},[a._v(a._s(e.regionName))])})),1)],1)]),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent title"},[t("a-badge",{attrs:{color:"magenta"}}),a._v("红色告警 ")],1),t("div",{staticClass:"rightContent"},[a._v(" 目标进入重点区域后，停留时长超过 "),t("a-input",{staticStyle:{width:"20%"},model:{value:a.dangerRegionRuleData[0].changeParam,callback:function(e){a.$set(a.dangerRegionRuleData[0],"changeParam",e)},expression:"dangerRegionRuleData[0].changeParam"}}),a._v("分钟 ")],1)]),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent title"},[t("a-badge",{attrs:{color:"orange"}}),a._v("橙色告警 ")],1),t("div",{staticClass:"rightContent"},[a._v(" "+a._s(a.dangerRegionRuleData[1].fullRule)+" ")])]),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent"},[t("a-badge",{attrs:{color:"yellow"}}),a._v("黄色预警 ")],1),t("div",{staticClass:"rightContent"},[a._v(" 目标靠近重点区域周边 "),t("a-input",{staticStyle:{width:"20%"},model:{value:a.dangerRegionRuleData[2].changeParamArr[0],callback:function(e){a.$set(a.dangerRegionRuleData[2].changeParamArr,0,e)},expression:"dangerRegionRuleData[2].changeParamArr[0]"}}),a._v("米范围内，徘徊时间 "),t("a-input",{staticStyle:{width:"20%"},model:{value:a.dangerRegionRuleData[2].changeParamArr[1],callback:function(e){a.$set(a.dangerRegionRuleData[2].changeParamArr,1,e)},expression:"dangerRegionRuleData[2].changeParamArr[1]"}}),a._v("分钟以上 ")],1)]),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent"},[t("a-badge",{attrs:{color:"magenta"}}),a._v("红色告警 ")],1),t("div",{staticClass:"rightContent"},[a._v(" "+a._s(a.dangerRegionRuleData[3].fullRule)+" ")])])]),t("li",{directives:[{name:"show",rawName:"v-show",value:4==a.tabIndex,expression:"tabIndex == 4"}]},[t("div",{staticClass:"tabButton"},[t("a-button",{attrs:{type:"primary"},on:{click:a.tabIndex4Save}},[a._v("保存")]),t("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){return a.getWarmingListModal(a.tabIndex)}}},[a._v("预警记录")])],1),t("div",{staticClass:"tabContent",staticStyle:{"border-bottom":"0"}},[t("div",{staticClass:"leftContent title"},[a._v("异常行为：")]),t("div",{staticClass:"rightContent"})]),t("div",{staticClass:"tabContent"},[t("div",{staticClass:"leftContent title"},[t("a-badge",{attrs:{color:"magenta"}}),a._v("红色常数 ")],1),t("div",{staticClass:"rightContent"},[t("a-input",{staticStyle:{width:"70px"},model:{value:a.exceptionalWarnRuleData[0].changeParamArr[0],callback:function(e){a.$set(a.exceptionalWarnRuleData[0].changeParamArr,0,e)},expression:"exceptionalWarnRuleData[0].changeParamArr[0]"}}),a._v("分钟内未获取目标GPS数据，之后每隔 "),t("a-input",{staticStyle:{width:"70px"},model:{value:a.exceptionalWarnRuleData[0].changeParamArr[1],callback:function(e){a.$set(a.exceptionalWarnRuleData[0].changeParamArr,1,e)},expression:"exceptionalWarnRuleData[0].changeParamArr[1]"}}),a._v("分钟还未获取GPS再次触发 ")],1)])])])])])],1)],1),a.warningBool?t("warningList",{ref:"warningListModel",attrs:{type:a.tabIndex}}):a._e()],1)},r=[],i=(t("4160"),t("fb6a"),t("a9e3"),t("d3b7"),t("ac1f"),t("25f0"),t("1276"),t("159b"),t("b85c")),s=(t("96cf"),t("1da1")),l=t("17b5"),o=t("6bbc"),c={components:{warningList:o["default"]},data:function(){return{sjskRegionListData:"",selArr:[],tabIndex:0,warningBool:!1,tabData:[{label:"复吸风险预警",id:0},{label:"聚吸风险预警",id:1},{label:"擅自离开执行地预警",id:2},{label:"进出高危区域预警",id:3},{label:"异常行为预警",id:4}],sjskRelapseDangerData:[{changeParamArr:[]},{changeParamArr:[]},{changeParamArr:[]},{changeParamArr:[]}],gatherWarnRuleData:[{changeParam:"",changeParamArr:[]},{changeParam:"",changeParamArr:["",""]}],leaveWarnRuleData:[{fullRule:"目标擅自离开执行地"}],dangerRegionRuleData:[{fullRule:"",changeParam:"",changeParamArr:["",""]},{fullRule:"目标进入重点区域",changeParam:"",changeParamArr:["",""]},{fullRule:"",changeParam:"",changeParamArr:["",""]},{fullRule:"",changeParam:"",changeParamArr:["",""]}],exceptionalWarnRuleData:[{fullRule:"",changeParam:"",changeParamArr:["",""]}]}},mounted:function(){this.sjskRelapseDanger(),this.gatherWarnRule(),this.leaveWarnRule(),this.dangerRegionRule(),this.exceptionalWarnRule(),this.sjskRegionList()},methods:{tabFun:function(a){this.tabIndex=a,0==this.tabIndex?this.sjskRelapseDanger():1==this.tabIndex?this.gatherWarnRule():2==this.tabIndex?this.leaveWarnRule():3==this.tabIndex?this.dangerRegionRule():this.exceptionalWarnRule()},sjskRelapseDanger:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].sjskResult();case 2:if(t=e.sent,t&&t.length>0){a.sjskRelapseDangerData=t,n=Object(i["a"])(a.sjskRelapseDangerData);try{for(n.s();!(r=n.n()).done;)s=r.value,s.changeParamArr=s.changeParam.split(",")}catch(o){n.e(o)}finally{n.f()}}case 4:case"end":return e.stop()}}),e)})))()},gatherWarnRule:function(){var a=this;l["a"].gatherWarnRule().then((function(e){e.length>0&&(a.gatherWarnRuleData=e,a.gatherWarnRuleData[1].changeParamArr=a.gatherWarnRuleData[1].changeParam.split(","))}))},leaveWarnRule:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].leaveWarnRule();case 2:t=e.sent,t&&t.length>0&&(console.log(t),a.leaveWarnRuleData=t);case 4:case"end":return e.stop()}}),e)})))()},dangerRegionRule:function(){var a=this;l["a"].dangerRegionRule().then((function(e){e.length>0&&(a.dangerRegionRuleData=e,a.selArr=a.dangerRegionRuleData[0].regionCode?a.dangerRegionRuleData[0].regionCode.split(","):[],console.log(a.selArr),a.dangerRegionRuleData[2].changeParamArr=a.dangerRegionRuleData[2].changeParam.split(","),""!=a.dangerRegionRuleData[1].fullRule&&null!=a.dangerRegionRuleData[1].fullRule||(a.dangerRegionRuleData[1].fullRule="目标进入重点区域"))}))},sjskRegionList:function(){var a=this;l["a"].sjskRegionList().then((function(e){a.sjskRegionListData=e}))},exceptionalWarnRule:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].exceptionalWarnRule();case 2:if(t=e.sent,t&&t.length>0){console.log(t),a.exceptionalWarnRuleData=t,n=Object(i["a"])(a.exceptionalWarnRuleData);try{for(n.s();!(r=n.n()).done;)s=r.value,s.changeParamArr=s.changeParam.split(",")}catch(o){n.e(o)}finally{n.f()}}case 4:case"end":return e.stop()}}),e)})))()},tabIndexSave:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in t=[],a.sjskRelapseDangerData)t.push({changeParam:a.sjskRelapseDangerData[n].changeParamArr.toString(),priority:Number(n)+1,reRule:a.sjskRelapseDangerData[n].fullRule,alarmStr:a.sjskRelapseDangerData[n].alarmStr});return e.next=4,l["a"].sjskRelapseDanger(t);case 4:r=e.sent,r&&(a.$message.success(r.message),a.sjskRelapseDanger());case 6:case"end":return e.stop()}}),e)})))()},tabIndex1Save:function(){var a=this,e=this.gatherWarnRuleData[1].changeParamArr[0]+","+this.gatherWarnRuleData[1].changeParamArr[1],t=[{changeParam:this.gatherWarnRuleData[0].changeParam,fullRule:"橙色告警基础上，$1分钟时间内目标人群轨迹一致",priority:1},{changeParam:e,fullRule:"至少$1人实时位置小于$2米",priority:2}];l["a"].gatherWarnRuleUpdate(t).then((function(e){a.$message.success("操作成功")}))},tabIndex2Save:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[{fullRule:"执行地管辖对象未在以下条件离开设定的执行地区域</br>条件一：人员请假状态时</br>条件二：变更执行地审批通过后",priority:1}],e.next=3,l["a"].leaveWarnRuleaddOrUpdate(t);case 3:n=e.sent,n&&a.$message.success("操作成功");case 6:case"end":return e.stop()}}),e)})))()},tabIndex3Save:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=a.dangerRegionRuleData[2].changeParamArr[0]+","+a.dangerRegionRuleData[2].changeParamArr[1],a.dangerRegionRuleData[2].changeParam=t,a.dangerRegionRuleData[2].alarmType="3",a.dangerRegionRuleData[1].alarmType="2",a.dangerRegionRuleData[0].alarmType="1",a.dangerRegionRuleData[0].fullRule="目标进入重点区域后，停留时长超过$1分钟",a.dangerRegionRuleData[1].fullRule="目标进入重点区域",a.dangerRegionRuleData[2].fullRule="目标靠近重点区域周边$1米范围内，徘徊时间$2分钟以上",a.dangerRegionRuleData.forEach((function(e){e.regionCode=a.selArr+""})),a.dangerRegionRuleData=a.dangerRegionRuleData.slice(0,3),a.dangers(a.dangerRegionRuleData);case 11:case"end":return e.stop()}}),e)})))()},tabIndex4Save:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[{changeParam:a.exceptionalWarnRuleData[0].changeParamArr.toString(),fullRule:"$1分钟内未获取目标GPS数据,，之后每隔$2分钟还未获取GPS再次触发",priority:1}],e.next=3,l["a"].exceptionalWarnRuleUpdate(t);case 3:n=e.sent,n&&(console.log(n),a.$message.success("操作成功"));case 5:case"end":return e.stop()}}),e)})))()},handleChange:function(a){this.dangerRegionRuleData[0].alarmType="1",this.dangerRegionRuleData[1].alarmType="2",this.dangerRegionRuleData[2].alarmType="3",this.dangerRegionRuleData.forEach((function(e){e.regionCode=a+""})),this.dangers(this.dangerRegionRuleData)},dangers:function(a){var e=this;l["a"].dangerRegionRuleUpdate(a).then((function(a){e.$message.success("操作成功")}))},dangerhongse:function(){var a=this;this.dangerRegionRuleData[0].alarmType="1",this.dangerRegionRuleData[1].alarmType="2",this.dangerRegionRuleData[2].alarmType="3",this.dangerRegionRuleData[0].fullRule="目标进入重点区域后，停留时长超过$1分钟",this.dangerRegionRuleData[1].fullRule="目标进入重点区域",this.dangerRegionRuleData[2].fullRule="目标靠近重点区域周边$1米范围内，徘徊时间$2分钟以上",this.dangerRegionRuleData.forEach((function(e){e.regionCode=a.selArr+""})),this.dangers(this.dangerRegionRuleData)},popupScroll:function(){console.log("popupScroll")},getWarmingListModal:function(){var a=this;this.warningBool=!0,this.$nextTick((function(){a.$refs.warningListModel.$refs.modal.visible=!0,a.$refs.warningListModel.loadTable()}))}}},u=c,g=(t("39015"),t("2877")),d=Object(g["a"])(u,n,r,!1,null,"6003293d",null);e["default"]=d.exports},39015:function(a,e,t){"use strict";var n=t("4ec5"),r=t.n(n);r.a},"4ec5":function(a,e,t){},b85c:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));t("a4d3"),t("e01a"),t("d28b"),t("d3b7"),t("3ca3"),t("ddb0");var n=t("06c5");function r(a,e){var t;if("undefined"===typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(t=Object(n["a"])(a))||e&&a&&"number"===typeof a.length){t&&(a=t);var r=0,i=function(){};return{s:i,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(a){throw a},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,o=!1;return{s:function(){t=a[Symbol.iterator]()},n:function(){var a=t.next();return l=a.done,a},e:function(a){o=!0,s=a},f:function(){try{l||null==t["return"]||t["return"]()}finally{if(o)throw s}}}}}}]);