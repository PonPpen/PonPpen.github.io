(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-891e26cc"],{"6cbd":function(e,t,a){"use strict";var n=a("b9c1"),r=a.n(n);r.a},"8cc5":function(e,t,a){"use strict";var n=a("d41e"),r=a.n(n);r.a},b9c1:function(e,t,a){},d41e:function(e,t,a){},d99e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-wrapper"},[a("div",[a("a-row",{attrs:{gutter:56}},[e._t("default"),a("buttonBox",{style:e.advanced?{float:"right"}:{},on:{toggleAdvanced:e.toggleAdvanced,query:e.query,reset:e.reset}})],2)],1)])},r=[],s=(a("a9e3"),a("5530")),o={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var e=arguments[0];return e("a-col",{class:"item-box",props:Object(s["a"])({},i[this.col])},[e("div",{class:"y-search-item"},[e("div",{class:"y-search-label"},[this.$props.label]),e("div",{class:"y-search-content"},[this.$slots.default])])])}},l={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var e=arguments[0];return e("a-col",{props:Object(s["a"])({},i[this.col])},[e("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[e("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),e("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),e("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",e("a-icon",{props:Object(s["a"])({},{type:this.advanced?"up":"down"})})])])])}},i={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},c={name:"SearchForm",Item:o,components:{buttonBox:l},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var e=this.$slots.default,t=this.col,a=e.length;if(a<t)document.getElementById("advance-btn").style.display="none";else for(var n=t-1;n<a;n++)e[n].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},u=c,d=(a("8cc5"),a("2877")),p=Object(d["a"])(u,n,r,!1,null,"359e9f37",null),h=p.exports;t["a"]=h},e73d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",[a("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[a("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[a("SearchFormItem",{attrs:{label:"终端类型："}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",allowClear:""},model:{value:e.pageFilter.platformType,callback:function(t){e.$set(e.pageFilter,"platformType",t)},expression:"pageFilter.platformType"}},[a("a-select-option",{attrs:{value:1}},[e._v("PC端")]),a("a-select-option",{attrs:{value:2}},[e._v("智慧禁毒")]),a("a-select-option",{attrs:{value:3}},[e._v("椰风送暖")])],1)],1),a("SearchFormItem",{attrs:{label:"所属模块："}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{"tree-data":e.treeData,treeCheckable:!1,"tree-checkable":"",placeholder:"请选择",allowClear:""},model:{value:e.pageFilter.belongModuleName,callback:function(t){e.$set(e.pageFilter,"belongModuleName",t)},expression:"pageFilter.belongModuleName"}})],1),a("SearchFormItem",{attrs:{label:"反馈状态："}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",allowClear:""},model:{value:e.pageFilter.status,callback:function(t){e.$set(e.pageFilter,"status",t)},expression:"pageFilter.status"}},[a("a-select-option",{attrs:{value:1}},[e._v("待审核")]),a("a-select-option",{attrs:{value:2}},[e._v("已采纳")]),a("a-select-option",{attrs:{value:3}},[e._v("未采纳")])],1)],1),a("SearchFormItem",{attrs:{label:"反馈时间：",allowClear:""}},[a("a-range-picker",{on:{change:e.onChange}})],1)],1)],1),a("div",{staticClass:"con-content"},[a("OperationPermission",{attrs:{check:"privs.item1210000002"}},[a("div",{staticClass:"con-content-top"},[a("a-button",{attrs:{type:"primary"},on:{click:e.onAdd}},[e._v("新建反馈")])],1)]),a("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!1,columns:e.columns,loading:e.loading,dataSource:e.pageData},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(e._s(n+1))]}},{key:"platformType",fn:function(t){return["1"==t?a("span",[e._v("PC端")]):e._e(),"2"==t?a("span",[e._v("智慧禁毒")]):e._e(),"3"==t?a("span",[e._v("椰风送暖")]):e._e()]}},{key:"status",fn:function(t){return[1==t?a("span",[e._v("待审核")]):e._e(),2==t?a("span",[e._v("已采纳")]):e._e(),3==t?a("span",[e._v("未采纳")]):e._e()]}},{key:"action",fn:function(t){return[a("OperationPermission",{attrs:{check:"privs.item1210000003"}},[a("a",{on:{click:function(a){return e.handDetails(t)}}},[e._v("查看详情")])])]}}])})],1)])],1)},r=[],s=(a("d81d"),a("cc33")),o=a("d99e"),l=a("c443"),i=o["a"].Item,c={name:"customerServiceList",components:{SearchForm:o["a"],SearchFormItem:i},data:function(){var e=this;return{pageFilter:{platformType:1,pageSize:10,currentPage:1},columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},customRender:function(t,a,n){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(n+1))}},{title:"终端类型",dataIndex:"platformType",align:"center",scopedSlots:{customRender:"platformType"}},{title:"所属模块",dataIndex:"belongModuleName",align:"center"},{title:"BUG简述",dataIndex:"bugSketch",align:"center",scopedSlots:{customRender:"bugSketch"}},{title:"反馈时间",dataIndex:"createTime",align:"center"},{title:"审核时间",dataIndex:"auditTime",align:"center"},{title:"反馈状态",dataIndex:"status",align:"center",scopedSlots:{customRender:"status"}},{title:"操作",align:"center",scopedSlots:{customRender:"action"}}],pageData:[],treeData:[],loading:!1,functionData:["我的","宣传","记录","首页","消息","工作台","学习"]}},created:function(){var e=this,t=Object(s["c"])();this.treeData=t.map((function(t){return e.mapTree(t)})),this.refreshTable()},methods:{refreshTable:function(){var e=this;this.loading=!0,l["a"].problemFeedbackList(this.pageFilter).then((function(t){e.pageData=t,e.loading=!1}))},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onResetForm:function(){this.pageFilter={},this.refreshTable()},onTableChange:function(e){this.pageFilter=e,this.refreshTable()},onAdd:function(){this.$router.push({path:"/callCenter/newQuestion"})},handDetails:function(e){console.log(e),this.$router.push({path:"/callCenter/questionDetails",query:{id:e.id}})},onChange:function(e,t){t.length>0&&(this.pageFilter.startTime=t[0],this.pageFilter.endTime=t[1]),console.log(e,t)},mapTree:function(e){var t=this,a=Array.isArray(e.childMenu)&&e.childMenu.length>0;return{title:e.menuName,label:e.menuName,value:e.menuName,children:a?e.childMenu.map((function(e){return t.mapTree(e)})):[]}}}},u=c,d=(a("6cbd"),a("2877")),p=Object(d["a"])(u,n,r,!1,null,"bb972614",null);t["default"]=p.exports}}]);