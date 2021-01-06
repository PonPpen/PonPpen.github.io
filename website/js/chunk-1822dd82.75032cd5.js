(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1822dd82","chunk-1ed78467","chunk-1ed78467"],{"007b":function(e,t,r){"use strict";var a=r("a27e"),n={currentDepartmentTreeUrl:"/base-service/dept/currentDepartmentTree",getTrackSjskPersonList:"/person-service/sjskPerson/getTrackSjskPersonList"};t["a"]={getDepartmentTree:function(e){return Object(a["a"])({url:n.currentDepartmentTreeUrl,method:"GET",params:e})},getTrackSjskPersonList:function(e){return Object(a["a"])({url:n.getTrackSjskPersonList,method:"GET",params:e})}}},"7f24":function(e,t,r){"use strict";var a=r("b775");t["a"]={personHolographicRecordPage:function(e){return Object(a["a"])({url:"/person-service/personHolographicRecord/getList",method:"GET",params:e})},personHolographicRecordDelete:function(e){return Object(a["a"])({url:"/person-service/personHolographicRecord/delete",method:"POST",data:e})},getPersonRecord:function(e){return Object(a["a"])({url:"/person-service/personHolographicRecord/getPersonRecord/"+"".concat(e),method:"get"})},getWarnInfo:function(e){return Object(a["a"])({url:"/person-service/warnInfo/getWarnInfo/"+"".concat(e),method:"get"})},personHolographicRecord:function(e){return Object(a["a"])({url:"/person-service/personHolographicRecord/getPerson/"+"".concat(e),method:"get"})},personHolographicRecordArchive:function(e){return Object(a["a"])({url:"/person-service/personHolographicRecord/archive",method:"post",data:e})},sjskPersonDetail:function(e){return Object(a["a"])({url:"/person-service/sjskPerson/getBaseInfo/"+"".concat(e),method:"get"})},getFamilyAtlas:function(e){return Object(a["a"])({url:"/person-service/personHolographicRecord/getFamilyAtlas",method:"get",params:e})},socialSecurityList:function(e){return Object(a["a"])({url:"/data-docking-service/sjsk/socialSecurity/pageSocialSecurityList",method:"post",data:e})},guaranteeList:function(e){return Object(a["a"])({url:"/data-docking-service/sjsk/guarantee/pageGuaranteeList",method:"post",data:e})},placementJobSettledHistory:function(e){return Object(a["a"])({url:"/medcare-service/placementJobSettledHistory/get/"+"".concat(e),method:"get"})},appChatRecordList:function(e){return Object(a["a"])({url:"/person-service/appChatRecord/getList",method:"get",params:e})},appChatRecordDelete:function(e){return Object(a["a"])({url:"/person-service/appChatRecord/delete",method:"post",data:e})},getSjskPersonInfo:function(e){return Object(a["a"])({url:"/person-service/sjskPerson/getSjskPersonInfo/"+"".concat(e),method:"get"})},getSjskBatchUnarchive:function(e){return Object(a["a"])({url:"/person-service/personHolographicRecord/batchUnarchive",method:"post",data:e})}}},"8cc5":function(e,t,r){"use strict";var a=r("d41e"),n=r.n(a);n.a},a06b:function(e,t,r){},ced1:function(e,t,r){"use strict";var a=r("a06b"),n=r.n(a);n.a},d41e:function(e,t,r){},d828:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("PageView",[r("SplitLayout",{attrs:{leftWidth:"240px"}},[r("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[r("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[r("SearchFormItem",{attrs:{label:"发送人："}},[r("a-input",{attrs:{placeholder:"请输入发送人"},model:{value:e.pageFilter.sendName,callback:function(t){e.$set(e.pageFilter,"sendName",t)},expression:"pageFilter.sendName"}})],1),r("SearchFormItem",{attrs:{label:"接收人："}},[r("a-input",{attrs:{placeholder:"请输入接收人"},model:{value:e.pageFilter.receiveName,callback:function(t){e.$set(e.pageFilter,"receiveName",t)},expression:"pageFilter.receiveName"}})],1),r("SearchFormItem",{attrs:{label:"发送日期："}},[r("a-date-picker",{attrs:{valueFormat:"YYYY-MM-DD"},model:{value:e.pageFilter.sendDate,callback:function(t){e.$set(e.pageFilter,"sendDate",t)},expression:"pageFilter.sendDate"}})],1)],1)],1),r("div",{staticClass:"tool-bar"},[r("a-row",{attrs:{type:"flex"}},[r("a-popconfirm",{attrs:{title:"确认删除记录吗?","ok-text":"是","cancel-text":"否",disabled:this.$refs.table&&!this.$refs.table.getSelectedRowKeys().length},on:{confirm:function(t){return e.onDelete()}}},[r("a-button",{attrs:{type:"primary",disabled:this.$refs.table&&!this.$refs.table.getSelectedRowKeys().length}},[e._v("批量删除")])],1)],1)],1),r("div",{staticClass:"con-content"},[r("div",{staticClass:"con-content-list"},[r("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!0,columns:e.columns,dataSource:e.pageData,loading:e.loading,rowKey:"id"},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,r,a){return[e._v(e._s(a+1))]}},{key:"sendTime",fn:function(t){return[e._v(" "+e._s(e.moment(t).format("YYYY-MM-DD hh:mm"))+" ")]}}])})],1)])])],1)},n=[],o=r("5530"),s=r("d99e"),c=r("bf11"),i=(r("007b"),r("7f24")),l=s["a"].Item,d={name:"specialistManageIndex",components:{SearchForm:s["a"],SearchFormItem:l,CustomTable:c["a"]},data:function(){var e=this;return{treeData:[],isTreeInit:!1,columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},customRender:function(t,r,a){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(a+1))}},{title:"发送人",dataIndex:"sendName"},{title:"接收人",dataIndex:"receiveName"},{title:"发送时间",dataIndex:"sendTime",scopedSlots:{customRender:"sendTime"}},{title:"内容",dataIndex:"content"}],pageData:{},pageFilter:{currentPage:1,pageSize:10},loading:!1}},created:function(){this.refreshTable()},methods:{refreshTable:function(){var e=this;this.loading=!0,i["a"].appChatRecordList(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t})).catch((function(){}))},onTableChange:function(e){this.pageFilter=Object(o["a"])(Object(o["a"])({},this.pageFilter),e),this.refreshTable()},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onResetForm:function(){this.pageFilter={pageSize:10,currentPage:1},this.refreshTable()},onDelete:function(){var e=this,t=this.$refs.table.getSelectedRowKeys();i["a"].appChatRecordDelete({ids:t}).then((function(t){e.refreshTable()})).catch((function(){}))}}},u=d,p=(r("ced1"),r("2877")),h=Object(p["a"])(u,a,n,!1,null,"21e4b76a",null);t["default"]=h.exports},d99e:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-wrapper"},[r("div",[r("a-row",{attrs:{gutter:56}},[e._t("default"),r("buttonBox",{style:e.advanced?{float:"right"}:{},on:{toggleAdvanced:e.toggleAdvanced,query:e.query,reset:e.reset}})],2)],1)])},n=[],o=(r("a9e3"),r("5530")),s={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var e=arguments[0];return e("a-col",{class:"item-box",props:Object(o["a"])({},i[this.col])},[e("div",{class:"y-search-item"},[e("div",{class:"y-search-label"},[this.$props.label]),e("div",{class:"y-search-content"},[this.$slots.default])])])}},c={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var e=arguments[0];return e("a-col",{props:Object(o["a"])({},i[this.col])},[e("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[e("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),e("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),e("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",e("a-icon",{props:Object(o["a"])({},{type:this.advanced?"up":"down"})})])])])}},i={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},l={name:"SearchForm",Item:s,components:{buttonBox:c},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var e=this.$slots.default,t=this.col,r=e.length;if(r<t)document.getElementById("advance-btn").style.display="none";else for(var a=t-1;a<r;a++)e[a].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},d=l,u=(r("8cc5"),r("2877")),p=Object(u["a"])(d,a,n,!1,null,"359e9f37",null),h=p.exports;t["a"]=h}}]);