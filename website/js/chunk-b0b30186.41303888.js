(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0b30186"],{"1c70":function(t,e,i){"use strict";var n=i("4e74"),s=i.n(n);s.a},2197:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"action"},[i("a-button",{attrs:{type:"primary"}},[t._v("保存")]),i("a-button",[t._v("预览")]),i("a-button",[t._v("打印")])],1),t.UEditorBool?i("UEditor",{ref:"UEditor",staticClass:"UEditor",attrs:{content:t.content}}):t._e()],1)},s=[],a=(i("96cf"),i("1da1")),l=(i("c1df"),i("cc33"),i("f45a")),c={components:{UEditor:l["a"]},props:["content"],data:function(){return{UEditorBool:!0}},mounted:function(){},methods:{create:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.UEditor.$refs.VueUeditor.value;case 1:case"end":return e.stop()}}),e)})))()}}},r=c,o=(i("c0e3"),i("2877")),y=Object(o["a"])(r,n,s,!1,null,"184017dc",null);e["default"]=y.exports},"4e74":function(t,e,i){},8235:function(t,e,i){},c0e3:function(t,e,i){"use strict";var n=i("8235"),s=i.n(n);s.a},f687:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PageView",[i("div",{staticClass:"layout_contain"},[i("div",{staticClass:"layout_left"},[i("div",{staticClass:"avatar"},[i("a-avatar",{staticStyle:{width:"80px",height:"80px"},attrs:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}}),i("div",[i("h2",[t._v("小王")]),i("p",[t._v("13898745214")])])],1),i("div",{staticClass:"profiles"},[i("p",[i("span",[t._v("档案编号：")]),t._v("G2020062357884295 ")]),i("p",[i("span",[t._v("档案状态：")]),t._v("未归档 ")]),i("p",[i("span",[t._v("当前状态：")]),t._v("正在执行 ")]),i("p",[i("span",[t._v("执行类型：")]),t._v("社康 ")]),i("p",[i("span",[t._v("人员性别：")]),t._v("男 ")]),i("p",[i("span",[t._v("身份证号：")]),t._v("120034199102139989 ")]),i("p",[i("span",[t._v("现居住地址：")]),t._v("五指山市番阳镇(xxx)号... ")]),i("p",[i("span",[t._v("户籍地址：")]),t._v("五指山市番阳镇(xxx)号... ")]),i("p",[i("span",[t._v("专职人员姓名：")]),t._v("李晓 ")]),i("p",[i("span",[t._v("专职人员手机号：")]),t._v("18811112222 ")])]),i("a-tree",{attrs:{"default-expanded-keys":t.defaultExpandedKeys,"default-selected-keys":t.defaultSelectedKeys,"tree-data":t.treeData},on:{select:t.onSelect}})],1),i("div",{staticClass:"layout_right"},["0-0-1-0"==t.selectedKeys?i("components1",{attrs:{content:t.content}}):i("components2")],1)])])},s=[],a=i("2197"),l=i("fbe7"),c={components:{components1:a["default"],components2:l["default"]},data:function(){return{defaultExpandedKeys:["0-0"],defaultSelectedKeys:[],selectedKeys:"",bool:!0,treeData:[{title:"档案管理",key:"0-0",children:[{title:"决定书",key:"0-0-0"},{title:"登记表",key:"0-0-1",children:[{title:"人员登记表",key:"0-0-1-0"},{title:"工作小组登记表",key:"0-0-1-1"}]},{title:"协议书",key:"0-0-2"},{title:"位置图",key:"0-0-3"},{title:"通知书",key:"0-0-4",children:[{title:"劝诫通知书",key:"0-0-4-0"},{title:"告诫通知书",key:"0-0-4-1"},{title:"尿检通知书",key:"0-0-4-2"}]},{title:"记录表",key:"0-0-5",children:[{title:"尿检记录",key:"0-0-5-0"},{title:"访谈记录",key:"0-0-5-1"},{title:"报告记录",key:"0-0-5-2"},{title:"接受服务救助情况记录",key:"0-0-5-3"},{title:"违反《社区戒毒/社区康复协议》记录",key:"0-0-5-4"},{title:"参加活动情况记录",key:"0-0-5-5"}]},{title:"情况报告",key:"0-0-6"},{title:"审批表",key:"0-0-7",children:[{title:"帮教计划书",key:"0-0-7-0"},{title:"定期评估",key:"0-0-7-1"},{title:"变更执行地点审批表",key:"0-0-7-2"},{title:"外出请假审批表",key:"0-0-7-3"},{title:"解除社区戒毒/康复通知书",key:"0-0-7-4"},{title:"获取信用积分",key:"0-0-7-5"}]},{title:"相关说明",key:"0-0-8",children:[{title:"中止情况说明",key:"0-0-8-0"},{title:"终止情况说明",key:"0-0-8-1"},{title:"继续情况说明",key:"0-0-8-2"}]},{title:"解除情况",key:"0-0-9"},{title:"家庭情况",key:"0-1-0"},{title:"动态情况",key:"0-1-1",children:[{title:"出行情况",key:"0-1-1-0"},{title:"住店情况",key:"0-1-1-1"},{title:"非合理请假情况",key:"0-1-1-2"},{title:"请假逾期情况",key:"0-1-1-3"},{title:"消费与收入不符情况",key:"0-1-1-4"},{title:"行迹情况",key:"0-1-1-5"}]}]}],content:""}},created:function(){this.$route.query.key&&(this.defaultSelectedKeys.push(this.$route.query.key),this.selectedKeys=this.$route.query.key,this.filterContent(this.selectedKeys))},methods:{onSelect:function(t,e){this.selectedKeys=t,this.$router.push({query:{key:this.selectedKeys}}),this.filterContent(this.selectedKeys[0])}}},r=c,o=(i("1c70"),i("2877")),y=Object(o["a"])(r,n,s,!1,null,"7ea5c742",null);e["default"]=y.exports}}]);