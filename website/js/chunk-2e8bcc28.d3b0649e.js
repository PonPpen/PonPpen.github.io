(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e8bcc28"],{1603:function(e,t,a){},"4d880":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",[a("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[a("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[a("SearchFormItem",{attrs:{label:"标题："}},[a("a-input",{attrs:{placeholder:"请输入标题"},model:{value:e.pageFilter.title,callback:function(t){e.$set(e.pageFilter,"title",t)},expression:"pageFilter.title"}})],1),a("SearchFormItem",{attrs:{label:"单位："}},[a("a-input",{attrs:{placeholder:"请输入单位"},model:{value:e.pageFilter.unit,callback:function(t){e.$set(e.pageFilter,"unit",t)},expression:"pageFilter.unit"}})],1),a("SearchFormItem",{attrs:{label:"创建人："}},[a("a-input",{attrs:{placeholder:"请输入创建人"},model:{value:e.pageFilter.cueateUserName,callback:function(t){e.$set(e.pageFilter,"cueateUserName",t)},expression:"pageFilter.cueateUserName"}})],1),a("SearchFormItem",{attrs:{label:"状态："}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择状态"},model:{value:e.pageFilter.status,callback:function(t){e.$set(e.pageFilter,"status",t)},expression:"pageFilter.status"}},[a("a-select-option",{attrs:{value:1}},[e._v("已提交")]),a("a-select-option",{attrs:{value:2}},[e._v("已受理")]),a("a-select-option",{attrs:{value:3}},[e._v("已确认结果")]),a("a-select-option",{attrs:{value:4}},[e._v("已评价")]),a("a-select-option",{attrs:{value:5}},[e._v("已关闭")])],1)],1),a("SearchFormItem",{attrs:{label:"级别："}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择级别"},model:{value:e.pageFilter.level,callback:function(t){e.$set(e.pageFilter,"level",t)},expression:"pageFilter.level"}},[a("a-select-option",{attrs:{value:0}},[e._v("普通")]),a("a-select-option",{attrs:{value:1}},[e._v("紧急")])],1)],1)],1)],1),a("div",{staticClass:"con-content"},[a("div",{staticClass:"con-content-list"},[a("div",{staticClass:"feedback-reminder"},[a("a-alert",{attrs:{type:"info","show-icon":""}},[a("div",{staticClass:"feedback-reminder-message",attrs:{slot:"message"},slot:"message"},[e._v(" 反馈提醒："),a("span",[e._v("待受理（ "+e._s(e.statusNum1)+" ）")]),a("span",[e._v("待修复完成（ "+e._s(e.statusNum2)+" ）")])])])],1),a("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!1,columns:e.columns,loading:e.loading,dataSource:e.pageData,onRowClick:e.onRowClick},on:{change:e.onTableChange},scopedSlots:e._u([{key:"level",fn:function(t){return["0"==t?a("span",[e._v("普通")]):e._e(),"1"==t?a("span",[e._v("紧急")]):e._e()]}},{key:"description",fn:function(t){return[a("span",{staticClass:"ellipsis-overflow"},[e._v(e._s(t))])]}},{key:"status",fn:function(t){return[1==t?a("span",[e._v("已提交")]):e._e(),2==t?a("span",[e._v("已受理")]):e._e(),3==t?a("span",[e._v("已确认结果")]):e._e(),4==t?a("span",[e._v("已评价")]):e._e(),5==t?a("span",[e._v("已关闭")]):e._e()]}}])})],1)])])],1)},n=[],l=a("d99e"),r=a("c443"),i=l["a"].Item,o={components:{SearchForm:l["a"],SearchFormItem:i},data:function(){return{pageFilter:{size:10,current:1,personType:0,isAdmin:1},columns:[{title:"标题",dataIndex:"title",align:"center"},{title:"平台",dataIndex:"platform",align:"center",scopedSlots:{customRender:"platform"}},{title:"功能",dataIndex:"function",align:"center"},{title:"级别",dataIndex:"level",align:"center",scopedSlots:{customRender:"level"}},{title:"创建人",dataIndex:"cueateUserName",align:"center"},{title:"所属单位",dataIndex:"unit",align:"center"},{title:"描述",dataIndex:"description",align:"center",scopedSlots:{customRender:"description"}},{title:"状态",dataIndex:"status",align:"center",scopedSlots:{customRender:"status"}}],pageData:[],loading:!1,statusNum1:0,statusNum2:0}},created:function(){this.refreshTable()},methods:{refreshTable:function(){var e=this;this.loading=!0,r["a"].feedbackList(this.pageFilter).then((function(t){e.pageData=t,e.loading=!1,t.records.length>0&&(e.statusNum1=t.records[0].solvingCount,e.statusNum2=t.records[0].solvedCount)}))},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onResetForm:function(){this.pageFilter={size:10,current:1,personType:0},this.refreshTable()},onTableChange:function(e){this.pageFilter=e,this.refreshTable()},onAdd:function(){this.$router.push({path:"/callCenter/newFeedback"})},onRowClick:function(e){this.$router.push({name:"viewFeedback2",params:{id:e.id}})}}},c=o,u=(a("97e2"),a("2877")),d=Object(u["a"])(c,s,n,!1,null,"2a0b7b8a",null);t["default"]=d.exports},"8cc5":function(e,t,a){"use strict";var s=a("d41e"),n=a.n(s);n.a},"97e2":function(e,t,a){"use strict";var s=a("1603"),n=a.n(s);n.a},d41e:function(e,t,a){},d99e:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-wrapper"},[a("div",[a("a-row",{attrs:{gutter:56}},[e._t("default"),a("buttonBox",{style:e.advanced?{float:"right"}:{},on:{toggleAdvanced:e.toggleAdvanced,query:e.query,reset:e.reset}})],2)],1)])},n=[],l=(a("a9e3"),a("5530")),r={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var e=arguments[0];return e("a-col",{class:"item-box",props:Object(l["a"])({},o[this.col])},[e("div",{class:"y-search-item"},[e("div",{class:"y-search-label"},[this.$props.label]),e("div",{class:"y-search-content"},[this.$slots.default])])])}},i={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var e=arguments[0];return e("a-col",{props:Object(l["a"])({},o[this.col])},[e("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[e("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),e("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),e("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",e("a-icon",{props:Object(l["a"])({},{type:this.advanced?"up":"down"})})])])])}},o={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},c={name:"SearchForm",Item:r,components:{buttonBox:i},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var e=this.$slots.default,t=this.col,a=e.length;if(a<t)document.getElementById("advance-btn").style.display="none";else for(var s=t-1;s<a;s++)e[s].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},u=c,d=(a("8cc5"),a("2877")),p=Object(d["a"])(u,s,n,!1,null,"359e9f37",null),m=p.exports;t["a"]=m}}]);