(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66050c8a","chunk-c5d1baba"],{"0f86":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Drawer",{ref:"drawer",staticClass:"Nodedrawer",attrs:{title:"积分明细",width:900}},[a("div",{staticClass:"con-content"},[a("h3",[e._v(e._s(e.data.year)+"年第"+e._s(["一","二","三","四"][e.data.quarter-1])+"季度")]),a("CustomTable",{attrs:{showAlert:!1,loading:e.loading,columns:e.columns,dataSource:e.pageData,showSelection:!1,bordered:""},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}}])})],1)])},r=[],i=a("b1fe"),s=a("bf11"),o=a("b00a"),l={name:"controlDetail",components:{Drawer:i["a"],CustomTable:s["a"]},data:function(){return{loading:!1,data:{},columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"}},{title:"考核类型",dataIndex:"integralType"},{title:"考核项名称",dataIndex:"integralItemName"},{title:"积分数",dataIndex:"score"}],pageData:{}}},methods:{refreshTable:function(e){var t=this;this.loading=!0,this.data=e;var a={userId:e.userId,quarter:e.quarter,year:e.year};o["a"].query_integral_user_detail(e.userId,a).then((function(e){t.loading=!1,e.pageSize=e.size,e.currentPage=e.current;var a=e.records,n=e.pageSize,r=e.currentPage,i=e.total;t.pageData={records:a,pageSize:n,currentPage:r,total:i}})).catch((function(e){console.log(e)}))}}},c=l,u=(a("5b63"),a("2877")),d=Object(u["a"])(c,n,r,!1,null,"1fda4831",null);t["default"]=d.exports},"1d7c":function(e,t,a){"use strict";var n=a("a97d"),r=a.n(n);r.a},"5b63":function(e,t,a){"use strict";var n=a("d38f"),r=a.n(n);r.a},"8cc5":function(e,t,a){"use strict";var n=a("d41e"),r=a.n(n);r.a},"97b0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",[a("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[a("SearchForm",{on:{query:e.onQuery,reset:e.onReset}},[a("SearchFormItem",{attrs:{label:"考核等级："}},[a("a-select",{staticStyle:{width:"200px"},model:{value:e.pageFilter.rank,callback:function(t){e.$set(e.pageFilter,"rank",t)},expression:"pageFilter.rank"}},[a("a-select-option",{attrs:{value:"A"}},[e._v("优秀")]),a("a-select-option",{attrs:{value:"B"}},[e._v("称职")]),a("a-select-option",{attrs:{value:"C"}},[e._v("基本称职")]),a("a-select-option",{attrs:{value:"D"}},[e._v("不称职")])],1),a("input",{attrs:{type:"hidden"},domProps:{value:e.userId}})],1)],1)],1),a("div",{staticClass:"con-content"},[a("div",{staticClass:"con-content-list"},[a("CustomTable",{attrs:{showAlert:!1,loading:e.loading,columns:e.columns,dataSource:e.pageData,showSelection:!1},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}},{key:"time",fn:function(t,a){return[e._v(" "+e._s(a.year)+"年第"+e._s(["一","二","三","四"][a.quarter-1])+"季度 ")]}},{key:"action",fn:function(t){return[a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return e.view(t)}}},[e._v("查看考核明细")])]}}])}),a("Detail",{ref:"Detail"})],1)])])],1)},r=[],i=a("d99e"),s=a("bf11"),o=a("0f86"),l=a("b00a"),c=i["a"].Item,u={name:"specialistManageDetail",components:{CustomTable:s["a"],Detail:o["default"],SearchForm:i["a"],SearchFormItem:c},data:function(){return{loading:!1,columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"}},{title:"姓名",dataIndex:"name"},{title:"考核时间",dataIndex:"time",scopedSlots:{customRender:"time"}},{title:"考核成绩",dataIndex:"score"},{title:"考评等级",dataIndex:"rank"},{title:"累计不称职次数",dataIndex:"failTimes"},{title:"连续不称职次数",dataIndex:"continuousFailTimes"},{title:"所属区域",dataIndex:"level"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],pageData:{},pageFilter:{currentPage:1,pageSize:10,userId:this.$route.query.id},userId:"",records:null}},mounted:function(){this.refreshTable()},methods:{view:function(e){this.$refs.Detail.$refs.drawer.show(),this.$refs.Detail.refreshTable(e)},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onReset:function(){this.pageFilter={currentPage:1,pageSize:10},this.refreshTable()},refreshTable:function(){var e=this;this.loading=!0;var t=this.$route.query.id;l["a"].query_integral_info_detail(t,this.pageFilter).then((function(t){e.loading=!1,t.pageSize=t.size,t.currentPage=t.current;var a=t.records,n=t.pageSize,r=t.currentPage,i=t.total;e.pageData={records:a,pageSize:n,currentPage:r,total:i}})).catch((function(e){console.log(e)}))}}},d=u,f=(a("1d7c"),a("2877")),h=Object(f["a"])(d,n,r,!1,null,"93c32294",null);t["default"]=h.exports},a97d:function(e,t,a){},b00a:function(e,t,a){"use strict";var n=a("b775");t["a"]={get_integral_info_list:function(e){return Object(n["a"])({url:"integral/check/integral/info",method:"GET",params:e})},query_integral_user_detail:function(e,t){return Object(n["a"])({url:"integral/check/integral/detail/"+"".concat(e),method:"GET",params:t})},query_integral_info_detail:function(e,t){return Object(n["a"])({url:"integral/check/integral/info/"+"".concat(e),method:"GET",params:t})}}},b1fe:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-drawer",{attrs:{title:e.title,width:e.width,maskClosable:!0,placement:"right",closable:!0,wrapClassName:"dwBox",visible:e.visible},on:{close:e.onClose}},[e._t("default")],2)],1)},r=[],i=(a("a9e3"),{name:"Drawer",props:{title:{type:String,default:"标题"},width:{type:Number,default:640}},data:function(){return{visible:!1}},created:function(){},mounted:function(){},methods:{show:function(){this.visible=!0},onClose:function(){this.visible=!1}}}),s=i,o=a("2877"),l=Object(o["a"])(s,n,r,!1,null,null,null);t["a"]=l.exports},d38f:function(e,t,a){},d41e:function(e,t,a){},d99e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-wrapper"},[a("div",[a("a-row",{attrs:{gutter:56}},[e._t("default"),a("buttonBox",{style:e.advanced?{float:"right"}:{},on:{toggleAdvanced:e.toggleAdvanced,query:e.query,reset:e.reset}})],2)],1)])},r=[],i=(a("a9e3"),a("5530")),s={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var e=arguments[0];return e("a-col",{class:"item-box",props:Object(i["a"])({},l[this.col])},[e("div",{class:"y-search-item"},[e("div",{class:"y-search-label"},[this.$props.label]),e("div",{class:"y-search-content"},[this.$slots.default])])])}},o={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var e=arguments[0];return e("a-col",{props:Object(i["a"])({},l[this.col])},[e("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[e("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),e("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),e("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",e("a-icon",{props:Object(i["a"])({},{type:this.advanced?"up":"down"})})])])])}},l={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},c={name:"SearchForm",Item:s,components:{buttonBox:o},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var e=this.$slots.default,t=this.col,a=e.length;if(a<t)document.getElementById("advance-btn").style.display="none";else for(var n=t-1;n<a;n++)e[n].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},u=c,d=(a("8cc5"),a("2877")),f=Object(d["a"])(u,n,r,!1,null,"359e9f37",null),h=f.exports;t["a"]=h}}]);