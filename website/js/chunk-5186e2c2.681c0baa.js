(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5186e2c2","chunk-91fdc596","chunk-1ed78467","chunk-1ed78467"],{"007b":function(e,t,a){"use strict";var n=a("a27e"),r={currentDepartmentTreeUrl:"/base-service/dept/currentDepartmentTree",getTrackSjskPersonList:"/person-service/sjskPerson/getTrackSjskPersonList"};t["a"]={getDepartmentTree:function(e){return Object(n["a"])({url:r.currentDepartmentTreeUrl,method:"GET",params:e})},getTrackSjskPersonList:function(e){return Object(n["a"])({url:r.getTrackSjskPersonList,method:"GET",params:e})}}},"0fe3":function(e,t,a){"use strict";var n=a("ddc8"),r=a.n(n);r.a},"2c68":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Drawer",{ref:"drawer",staticClass:"Nodedrawer",attrs:{title:"积分详情",width:900}},[a("div",{staticClass:"con-content"},[a("div",{staticClass:"con-content-list"},[a("CustomTable",{attrs:{showAlert:!1,columns:e.columns,dataSource:e.pageData,showSelection:!1,bordered:"",loading:e.loading},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}}])})],1)])])},r=[],s=a("b1fe"),i=a("547b"),o={name:"controlDetail",components:{Drawer:s["a"]},props:{data:{type:Object},title:{type:String}},data:function(){var e=this;return{id:"",from:{},loading:!1,pageFilter:{currentPage:1,pageSize:10,userId:""},pageData:[],columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},customRender:function(t,a,n){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(n+1))}},{title:"明细",dataIndex:"detail"},{title:"积分数",dataIndex:"score"},{title:"获取/使用时间",dataIndex:"time"}]}},mounted:function(){},created:function(){this.getDateArr()},methods:{initFrom:function(e){this.pageFilter.userId=e.userId,this.pageFilter.currentPage=1,this.refreshTable()},onTableChange:function(e){this.pageFilter.currentPage=e.currentPage,this.pageFilter.pageSize=e.pageSize,this.refreshTable()},refreshTable:function(){this.loading=!0,this.getControllerdetail1()},getControllerdetail1:function(){var e=this;i["a"].getAwarddetail(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t.data,console.log("数据",e.pageData)})).catch((function(){}))}}},l=o,c=(a("0fe3"),a("2877")),d=Object(c["a"])(l,n,r,!1,null,"9e390bf2",null);t["default"]=d.exports},"3a49":function(e,t,a){"use strict";var n=a("59e7");t["a"]=n["a"]},"4e206":function(e,t,a){"use strict";var n=a("c06b"),r=a.n(n);r.a},"547b":function(e,t,a){"use strict";var n=a("a27e");t["a"]={getControllerInfo:function(e){return Object(n["a"])({url:"/integral-service/control/integral/info/pc",method:"GET",params:e})},getControllerdetail:function(e){return Object(n["a"])({url:"/integral-service/control/integral/detail/pc",method:"GET",params:e})},getCreditInfo:function(e){return Object(n["a"])({url:"/integral-service/credit/integral/info/pc",method:"GET",params:e})},getCreditdetail:function(e){return Object(n["a"])({url:"/integral-service/credit/integral/detail/pc",method:"GET",params:e})},getAwardInfo:function(e){return Object(n["a"])({url:"/integral-service/award/integral/info/pc",method:"GET",params:e})},getAwarddetail:function(e){return Object(n["a"])({url:"/integral-service/award/integral/detail/pc",method:"GET",params:e})}}},"59e7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:!e.treeLoading}},[a("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{allowClear:"",placeholder:"请输入搜索内容"},on:{change:e.onChange},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),e.treeLoading?a("a-tree",{class:{activeEllipsis:e.isShowEllipsis},attrs:{loading:!0,selectedKeys:[e.defaultdKeys],expandedKeys:e.expandedKeys,defaultExpandAll:e.expandAllNode,autoExpandParent:e.autoExpandParent,treeData:e.treeData},on:{expand:e.onExpand,select:e.onSelect},scopedSlots:e._u([{key:"title",fn:function(t){var n=t.title;return[a("a-tooltip",{attrs:{placement:"topLeft",title:n}},[n.indexOf(e.searchValue)>-1?a("span",[e._v(" "+e._s(n.substr(0,n.indexOf(e.searchValue)))+" "),a("span",{staticStyle:{color:"#f50"}},[e._v(e._s(e.searchValue))]),e._v(" "+e._s(n.substr(n.indexOf(e.searchValue)+e.searchValue.length))+" ")]):a("span",[e._v(e._s(n))])])]}}],null,!1,3746631401)}):a("a-skeleton",{attrs:{active:"",paragraph:{rows:14}}})],1)},r=[],s=(a("c975"),a("d81d"),a("ac1f"),a("1276"),{name:"SearchTree",props:{data:{type:Array,require:!0},defaultdKeys:{type:String,require:!1},isShowEllipsis:{type:Boolean,default:!0},expandAllNode:{type:Boolean,default:!1},expandKeys:{type:String,require:!1}},data:function(){return{searchValue:"",expandedKeys:[],autoExpandParent:!0,dataList:[],treeData:[],selectedKeys:[],selectedTitles:[],loadingBool:!1}},computed:{treeLoading:function(){return null!==this.treeData&&this.treeData.length>0}},watch:{data:{handler:function(e,t){this.dataList=[],null!==e&&(this.generateList(e),this.treeData=e,this.treeData.length>0&&(void 0!=this.expandKeys&&this.expandKeys.length>0?this.expandedKeys=this.expandKeys.substring(0,this.expandKeys.length-1).split(","):this.expandedKeys=[this.treeData[0].key]))},immediate:!0}},methods:{getSelectedKey:function(){return this.selectedKeys[0]||""},getSelectedKeys:function(){return this.selectedKeys},getSelectedTitle:function(){return this.selectedTitles[0]||""},getSelectedTitles:function(){return this.selectedTitles},onSelect:function(e,t){this.selectedKeys=e,this.selectedKeys.length>0&&(this.selectedTitles=t.selectedNodes.map((function(e){return e.data.props.dataRef.title})),this.$emit("selected",this.selectedKeys,this.selectedTitles,t.selectedNodes[0].data.props.dataRef))},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},generateList:function(e){for(var t=0;t<e.length;t++){var a=e[t];void 0===a.scopedSlots&&(a.scopedSlots={title:"title"}),this.dataList.push({key:a.key,parentId:a.parentId,extendData:a.extendData,title:a.title}),a.children&&this.generateList(a.children)}},onChange:function(e){var t=this,a=e.target.value;""!=a?a&&this.dataList.map((function(e){e.title.indexOf(a)>-1&&(t.expandedKeys=e.extendData.substring(0,e.extendData.length-1).split(","),console.log(t.expandedKeys))})):this.expandedKeys=[this.treeData[0].key]}}}),i=s,o=(a("70b7"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,"52e9cd27",null);t["a"]=l.exports},"64c9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",{attrs:{leftWidth:"240px"}},[a("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[a("SearchTree",{ref:"searchTree",staticStyle:{padding:"0 10px",overflow:"hidden"},attrs:{data:e.treeData,defaultdKeys:e.departmentId},on:{selected:e.onSelected}})],1),a("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[a("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[a("SearchFormItem",{attrs:{label:"身份证号："}},[a("a-input",{attrs:{placeholder:"请输入身份证号"},model:{value:e.pageFilter.idCardNo,callback:function(t){e.$set(e.pageFilter,"idCardNo",t)},expression:"pageFilter.idCardNo"}})],1)],1)],1),a("div",{staticClass:"con-content"},[a("div",{staticClass:"con-content-list"},[a("CustomTable",{attrs:{showAlert:!1,columns:e.columns,loading:e.loading,dataSource:e.pageData,showSelection:!1},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}},{key:"sex",fn:function(t){return["1"===t?a("span",[e._v("男")]):e._e(),"2"===t?a("span",[e._v("女")]):e._e()]}},{key:"executeType",fn:function(t){return["1"===t?a("span",{staticClass:"rank-color1"},[e._v("社区康复")]):e._e(),"2"===t?a("span",{staticClass:"rank-color2"},[e._v("社区戒毒")]):e._e()]}},{key:"action",fn:function(t){return[a("a",{staticStyle:{"margin-right":"16px"},on:{click:function(a){return e.view(t)}}},[e._v("查看积分明细")])]}}])}),a("Detail",{ref:"Detail"})],1)])])],1)},r=[],s=a("cc33"),i=a("d99e"),o=a("007b"),l=a("547b"),c=a("bf11"),d=a("2c68"),u=a("3a49"),p=i["a"].Item,h={name:"personelIntegralControl",components:{SearchForm:i["a"],SearchFormItem:p,CustomTable:c["a"],Detail:d["default"],SearchTree:u["a"]},data:function(){var e=this;return{departmentId:"",treeData:[],pageData:[],loading:!1,columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},customRender:function(t,a,n){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(n+1))}},{title:"姓名",dataIndex:"name"},{title:"性别",dataIndex:"sex",scopedSlots:{customRender:"sex"}},{title:"身份证号",dataIndex:"idCardNo"},{title:"总奖励积分数",dataIndex:"sumScore",scopedSlots:{customRender:"sumScore"}},{title:"现奖励积分数",dataIndex:"currentScore",scopedSlots:{customRender:"currentScore"}},{title:"所属区域",dataIndex:"level",scopedSlots:{customRender:"level"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],pageFilter:{deptId:"",currentPage:1,pageSize:10,idCardNo:""}}},created:function(){this.initParam();var e={};"POSITION_009"!==Object(s["f"])().jobName?e={deptKey:1}:(this.pageFilter.belongManagerId=Object(s["f"])().userId,e={deptKey:0}),this.getArea(e)},computed:{},methods:{initParam:function(){this.pageFilter.currentPage=1,this.pageFilter.pageSize=10,this.pageFilter.idCardNo=""},getArea:function(e){var t=this;o["a"].getDepartmentTree(e).then((function(e){t.treeData=e.data,t.departmentId=e.data[0].key,t.pageFilter.deptId=e.data[0].key,t.refreshTable()})).catch((function(){}))},refreshTable:function(){this.loading=!0,this.getControllerInfoList()},onTableChange:function(e){this.pageFilter.currentPage=e.currentPage,this.pageFilter.pageSize=e.pageSize,this.refreshTable()},getControllerInfoList:function(){var e=this;l["a"].getAwardInfo(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t.data})).catch((function(){}))},view:function(e){this.$refs.Detail.$refs.drawer.show(),this.$refs.Detail.initFrom(e)},onSelected:function(e,t,a){e.length>0&&(this.pageFilter.deptId=e[0],this.departmentId=e[0],this.refreshTable())},onResetForm:function(){this.getDateArr(),this.initParam(),this.refreshTable()},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()}}},f=h,g=(a("4e206"),a("2877")),m=Object(g["a"])(f,n,r,!1,null,"fddd16fa",null);t["default"]=m.exports},"70b7":function(e,t,a){"use strict";var n=a("dfd7"),r=a.n(n);r.a},"8cc5":function(e,t,a){"use strict";var n=a("d41e"),r=a.n(n);r.a},b1fe:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-drawer",{attrs:{title:e.title,width:e.width,maskClosable:!0,placement:"right",closable:!0,wrapClassName:"dwBox",visible:e.visible},on:{close:e.onClose}},[e._t("default")],2)],1)},r=[],s=(a("a9e3"),{name:"Drawer",props:{title:{type:String,default:"标题"},width:{type:Number,default:640}},data:function(){return{visible:!1}},created:function(){},mounted:function(){},methods:{show:function(){this.visible=!0},onClose:function(){this.visible=!1}}}),i=s,o=a("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);t["a"]=l.exports},c06b:function(e,t,a){},d41e:function(e,t,a){},d99e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-wrapper"},[a("div",[a("a-row",{attrs:{gutter:56}},[e._t("default"),a("buttonBox",{style:e.advanced?{float:"right"}:{},on:{toggleAdvanced:e.toggleAdvanced,query:e.query,reset:e.reset}})],2)],1)])},r=[],s=(a("a9e3"),a("5530")),i={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var e=arguments[0];return e("a-col",{class:"item-box",props:Object(s["a"])({},l[this.col])},[e("div",{class:"y-search-item"},[e("div",{class:"y-search-label"},[this.$props.label]),e("div",{class:"y-search-content"},[this.$slots.default])])])}},o={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var e=arguments[0];return e("a-col",{props:Object(s["a"])({},l[this.col])},[e("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[e("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),e("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),e("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",e("a-icon",{props:Object(s["a"])({},{type:this.advanced?"up":"down"})})])])])}},l={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},c={name:"SearchForm",Item:i,components:{buttonBox:o},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var e=this.$slots.default,t=this.col,a=e.length;if(a<t)document.getElementById("advance-btn").style.display="none";else for(var n=t-1;n<a;n++)e[n].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},d=c,u=(a("8cc5"),a("2877")),p=Object(u["a"])(d,n,r,!1,null,"359e9f37",null),h=p.exports;t["a"]=h},ddc8:function(e,t,a){},dfd7:function(e,t,a){}}]);