(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100e5d14"],{1243:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Drawer",{ref:"drawer",staticClass:"Nodedrawer",attrs:{width:800,title:"管控人员信息"}},[n("div",{staticStyle:{"text-align":"right"}},[n("a-input-search",{staticStyle:{width:"260px","margin-bottom":"10px"},attrs:{placeholder:"按姓名或者身份证号搜索用户",allowClear:""},on:{search:e.queryTable},model:{value:e.form.keyword,callback:function(t){e.$set(e.form,"keyword",t)},expression:"form.keyword"}})],1),n("a-table",{attrs:{bordered:"",columns:e.columns,"data-source":e.pageData,loading:e.loading,pagination:{pageSize:10}},scopedSlots:e._u([{key:"order",fn:function(t,n,a){return[e._v(" "+e._s(a+1)+" ")]}},{key:"loginStatus",fn:function(t){return[1===t?n("span",[e._v("未注册")]):e._e(),2===t?n("span",[e._v("未登录")]):e._e(),3===t?n("span",[e._v("已登录")]):e._e()]}},{key:"action",fn:function(t){return[n("a",{on:{click:function(n){return n.stopPropagation(),e.onDetail(t)}}},[e._v("管理")])]}}])})],1)},r=[],s=(n("96cf"),n("1da1")),i=(n("cc33"),n("b1fe")),o=n("385c"),l={components:{Drawer:i["a"]},props:{data:{type:Object}},data:function(){return{userId:"",realNameData:[],loading:!1,form:{belongManagerId:"",departmentId:"",name:""},pageData:[],columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},width:20,align:"center"},{title:"姓名",dataIndex:"realName",align:"center",width:40},{title:"身份证",dataIndex:"identityCard",align:"center",width:90},{title:"执行地区",dataIndex:"departmentName",align:"center",width:80},{title:"注册情况",dataIndex:"loginStatus",align:"center",width:10,scopedSlots:{customRender:"loginStatus"}},{title:"操作",width:10,align:"center",scopedSlots:{customRender:"action"}}]}},created:function(){},mounted:function(){},methods:{initFrom:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.userId=e.userId,t.loading=!0,t.form.belongManagerId=e.userId,n.next=5,Object(o["k"])(t.form);case 5:a=n.sent,a&&(t.pageData=a,t.loading=!1);case 7:case"end":return n.stop()}}),n)})))()},queryTable:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(o["k"])(e.form);case 3:n=t.sent,n&&(e.pageData=n,e.loading=!1);case 5:case"end":return t.stop()}}),t)})))()},onDetail:function(e){this.$router.push({path:"/personnelManagement/personnelFiles/personnelDetails",query:{params:JSON.stringify({id:e.id,sjskType:e.sjskType})}})}},watch:{}},d=l,c=n("2877"),u=Object(c["a"])(d,a,r,!1,null,"3e7f9678",null);t["default"]=u.exports},1779:function(e,t,n){},33331:function(e,t,n){"use strict";var a=n("1779"),r=n.n(a);r.a},"3a49":function(e,t,n){"use strict";var a=n("59e7");t["a"]=a["a"]},"59e7":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-spin",{attrs:{spinning:!e.treeLoading}},[n("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{allowClear:"",placeholder:"请输入搜索内容"},on:{change:e.onChange},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),e.treeLoading?n("a-tree",{class:{activeEllipsis:e.isShowEllipsis},attrs:{loading:!0,selectedKeys:[e.defaultdKeys],expandedKeys:e.expandedKeys,defaultExpandAll:e.expandAllNode,autoExpandParent:e.autoExpandParent,treeData:e.treeData},on:{expand:e.onExpand,select:e.onSelect},scopedSlots:e._u([{key:"title",fn:function(t){var a=t.title;return[n("a-tooltip",{attrs:{placement:"topLeft",title:a}},[a.indexOf(e.searchValue)>-1?n("span",[e._v(" "+e._s(a.substr(0,a.indexOf(e.searchValue)))+" "),n("span",{staticStyle:{color:"#f50"}},[e._v(e._s(e.searchValue))]),e._v(" "+e._s(a.substr(a.indexOf(e.searchValue)+e.searchValue.length))+" ")]):n("span",[e._v(e._s(a))])])]}}],null,!1,3746631401)}):n("a-skeleton",{attrs:{active:"",paragraph:{rows:14}}})],1)},r=[],s=(n("c975"),n("d81d"),n("ac1f"),n("1276"),{name:"SearchTree",props:{data:{type:Array,require:!0},defaultdKeys:{type:String,require:!1},isShowEllipsis:{type:Boolean,default:!0},expandAllNode:{type:Boolean,default:!1},expandKeys:{type:String,require:!1}},data:function(){return{searchValue:"",expandedKeys:[],autoExpandParent:!0,dataList:[],treeData:[],selectedKeys:[],selectedTitles:[],loadingBool:!1}},computed:{treeLoading:function(){return null!==this.treeData&&this.treeData.length>0}},watch:{data:{handler:function(e,t){this.dataList=[],null!==e&&(this.generateList(e),this.treeData=e,this.treeData.length>0&&(void 0!=this.expandKeys&&this.expandKeys.length>0?this.expandedKeys=this.expandKeys.substring(0,this.expandKeys.length-1).split(","):this.expandedKeys=[this.treeData[0].key]))},immediate:!0}},methods:{getSelectedKey:function(){return this.selectedKeys[0]||""},getSelectedKeys:function(){return this.selectedKeys},getSelectedTitle:function(){return this.selectedTitles[0]||""},getSelectedTitles:function(){return this.selectedTitles},onSelect:function(e,t){this.selectedKeys=e,this.selectedKeys.length>0&&(this.selectedTitles=t.selectedNodes.map((function(e){return e.data.props.dataRef.title})),this.$emit("selected",this.selectedKeys,this.selectedTitles,t.selectedNodes[0].data.props.dataRef))},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},generateList:function(e){for(var t=0;t<e.length;t++){var n=e[t];void 0===n.scopedSlots&&(n.scopedSlots={title:"title"}),this.dataList.push({key:n.key,parentId:n.parentId,extendData:n.extendData,title:n.title}),n.children&&this.generateList(n.children)}},onChange:function(e){var t=this,n=e.target.value;""!=n?n&&this.dataList.map((function(e){e.title.indexOf(n)>-1&&(t.expandedKeys=e.extendData.substring(0,e.extendData.length-1).split(","),console.log(t.expandedKeys))})):this.expandedKeys=[this.treeData[0].key]}}}),i=s,o=(n("70b7"),n("2877")),l=Object(o["a"])(i,a,r,!1,null,"52e9cd27",null);t["a"]=l.exports},"70b7":function(e,t,n){"use strict";var a=n("dfd7"),r=n.n(a);r.a},a475:function(e,t,n){"use strict";n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return g}));var a=n("a27e"),r={signInGetList:"/workbench-service/sjsk/signIn/getList",signInAdd:"/workbench-service/sjsk/signIn/add",jobLogAdd:"/workbench-service/sjsk/jobLog/add",jobLogDelete:"/workbench-service/sjsk/jobLog/batchDelete",jobLogGetList:"/workbench-service/sjsk/jobLog/getList",getLogWriteInfo:"/workbench/sjsk/jobLog/getLogWriteInfo",getStatisticsList:"/workbench/sjsk/jobLog/getStatisticsList",getZgyDailyInspectionList:"/workbench/sjsk/jobLog/getZgyDailyInspectionList",getLogList:"/log-service/auditLog/getList",getAllByZG:"/base-service/statistics/getAllByZG"};function s(e){return Object(a["a"])({url:r.signInGetList,method:"POST",data:e})}function i(e){return Object(a["a"])({url:r.signInAdd,method:"POST",data:e})}function o(e){return Object(a["a"])({url:r.jobLogAdd,method:"POST",data:e})}function l(e){return Object(a["a"])({url:r.jobLogDelete,method:"POST",params:e})}function d(e){return Object(a["a"])({url:r.jobLogGetList,method:"POST",data:e})}function c(e){return Object(a["a"])({url:r.getLogWriteInfo,method:"POST",data:e})}function u(e){return Object(a["a"])({url:r.getStatisticsList,method:"POST",data:e})}function p(e){return Object(a["a"])({url:r.getZgyDailyInspectionList,method:"GET",params:e})}function h(e){return Object(a["a"])({url:r.getLogList,method:"GET",params:e})}function g(e){return Object(a["a"])({url:r.getAllByZG,method:"GET",params:e})}},b1fe:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-drawer",{attrs:{title:e.title,width:e.width,maskClosable:!0,placement:"right",closable:!0,wrapClassName:"dwBox",visible:e.visible},on:{close:e.onClose}},[e._t("default")],2)],1)},r=[],s=(n("a9e3"),{name:"Drawer",props:{title:{type:String,default:"标题"},width:{type:Number,default:640}},data:function(){return{visible:!1}},created:function(){},mounted:function(){},methods:{show:function(){this.visible=!0},onClose:function(){this.visible=!1}}}),i=s,o=n("2877"),l=Object(o["a"])(i,a,r,!1,null,null,null);t["a"]=l.exports},c41e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PageView",[n("SplitLayout",{attrs:{leftWidth:"240px"}},[n("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[n("SearchTree",{ref:"searchTree",staticStyle:{padding:"0 10px",overflow:"hidden"},attrs:{data:e.treeData,defaultdKeys:e.departmentId},on:{selected:e.onSelected}})],1),n("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[n("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[n("SearchFormItem",{attrs:{label:"姓名："}},[n("a-input",{attrs:{allowClear:"",placeholder:"请输入姓名"},model:{value:e.pageFilter.realName,callback:function(t){e.$set(e.pageFilter,"realName",t)},expression:"pageFilter.realName"}})],1)],1)],1),n("div",{staticClass:"con-content"},[Object.keys(e.allByZG).length>0?n("div",{staticStyle:{"background-color":"#f1efef",padding:"10px","margin-bottom":"20px"}},[e._v("当前区域："+e._s(e.allPersonArea)+"；累计登录专职人员"+e._s(e.allByZG.totalCount)+"人；今日登录专职人员"+e._s(e.allByZG.count)+"人。")]):e._e(),n("downLoadComponents",{ref:"downLoadComponents",attrs:{formData:e.pageFilter,apiUrl:e.downUrl,fileText:e.fileText},on:{queryMethod:e.exportFauth}},[n("a-button",{staticStyle:{"margin-bottom":"20px"},attrs:{loading:e.loadingBool,title:"导出Excle"},on:{click:e.exportDowm}},[e._v(" 导出Excle ")])],1),n("div",{staticClass:"con-content-list"},[n("CustomTable",{attrs:{showAlert:!1,columns:e.columns,loading:e.loading,dataSource:e.pageData,showSelection:!1},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,n,a){return[e._v(" "+e._s(a+1)+" ")]}},{key:"sex",fn:function(t){return[1==t?n("span",[e._v("男")]):e._e(),2==t?n("span",[e._v("女")]):e._e()]}},{key:"signInRatio",fn:function(t){return[e._v(" "+e._s(t)+" ")]}},{key:"logFinishRatio",fn:function(t){return[e._v(" "+e._s(t)+" ")]}},{key:"loginTimeByPC",fn:function(t){return[e._v(" "+e._s(t?e.moment(t).format("YYYY-MM-DD HH:mm:ss"):"未登录")+" ")]}},{key:"loginTimeByAPP",fn:function(t){return[e._v(" "+e._s(t?e.moment(t).format("YYYY-MM-DD HH:mm:ss"):"未登录")+" ")]}},{key:"personCount",fn:function(t,a){return[n("a",{staticStyle:{"margin-right":"16px"},attrs:{title:"点击可查看管控人员信息"},on:{click:function(t){return e.personCountView(a)}}},[e._v(e._s(t))])]}},{key:"action",fn:function(t){return[n("a",{staticStyle:{"margin-right":"16px"},on:{click:function(n){return e.view(t)}}},[e._v("查看详情")])]}}])})],1),n("SeeDrawer",{ref:"seeDetails"})],1)])],1)},r=[],s=(n("4160"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),n("5530")),i=(n("96cf"),n("1da1")),o=n("76c1"),l=n("d99e"),d=n("bf11"),c=n("3a49"),u=n("1243"),p=n("007b"),h=n("a475"),g=l["a"].Item,f={components:{SearchForm:l["a"],SearchFormItem:g,CustomTable:d["a"],SearchTree:c["a"],downLoadComponents:o["a"],SeeDrawer:u["default"]},data:function(){return{autoExpandParent:!0,treeData:[],isTreeInit:!1,searchVal:"",columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},width:100},{title:"姓名",dataIndex:"name",width:150},{title:"性别",dataIndex:"sex",align:"center",scopedSlots:{customRender:"sex"},width:90},{title:"联系电话",dataIndex:"phone",width:300},{title:"本月签到率",dataIndex:"signInRatio",scopedSlots:{customRender:"signInRatio"},width:150},{title:"日志完成度",dataIndex:"logFinishRatio",scopedSlots:{customRender:"logFinishRatio"},width:140},{title:"所属区域",width:240,dataIndex:"levelName"},{title:"PC登录时间",dataIndex:"loginTimeByPC",align:"center",width:170,scopedSlots:{customRender:"loginTimeByPC"}},{title:"APP登录时间",dataIndex:"loginTimeByAPP",align:"center",width:170,scopedSlots:{customRender:"loginTimeByAPP"}},{title:"管控人员数",dataIndex:"personCount",align:"center",width:120,scopedSlots:{customRender:"personCount"}},{title:"管控人员APP注册数",dataIndex:"personAppCount",align:"center",width:120,scopedSlots:{customRender:"personAppCount"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"},width:200}],pageData:{},pageFilter:{currentPage:1,pageSize:10,departmentId:""},dataKeys:[],allByZG:{},departmentId:"",allPersonArea:"",loading:!1,loadingBool:!1,downUrl:"/api/workbench-service/sjsk/jobLog/export",fileText:"专职人员列表-"+this.moment(new Date).format("YYYY-MM-DD hh:mm:ss")+".xls"}},created:function(){this.getTreeData()},methods:{getTreeData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={deptKey:1},t.next=3,p["a"].getDepartmentTree(n);case 3:if(a=t.sent,!a){t.next=14;break}return e.isTreeInit=!0,e.treeData=a.data,e.setRecursion(e.treeData),e.$store.state.SysPersonnel.selectedObj,e.getItemName(a.data[0].extendData,e.dataKeys),e.departmentId=a.data[0].key,e.pageFilter.departmentId=e.departmentId,t.next=14,e.refreshTable();case 14:case"end":return t.stop()}}),t)})))()},refreshTable:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(h["e"])(e.pageFilter);case 3:return n=t.sent,200==n.status&&(e.loading=!1,e.pageData=n.data),t.next=7,Object(h["a"])(e.pageFilter);case 7:a=t.sent,200==a.status&&(e.allByZG=a.data);case 9:case"end":return t.stop()}}),t)})))()},onSelected:function(e,t,n){e.length>0&&(this.pageFilter.departmentId=e[0],this.departmentId=e[0],this.getItemName(n.extendData,this.dataKeys),this.refreshTable())},personCountView:function(e){console.log(e),this.$refs.seeDetails.$refs.drawer.show(),this.$refs.seeDetails.initFrom(e)},view:function(e){this.$router.push({path:"/specialistManage/person",query:{userId:e.userId}})},onTableChange:function(e){this.pageFilter=Object(s["a"])(Object(s["a"])({},this.pageFilter),e),this.refreshTable()},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onResetForm:function(){this.pageFilter={},this.pageFilter.currentPage=1,this.pageFilter.pageSize=10,this.pageFilter.departmentId=this.departmentId,this.refreshTable()},exportDowm:function(){this.$refs.downLoadComponents.exportDowm()},exportFauth:function(e){this.loadingBool=e},setRecursion:function(e){for(var t in e)this.dataKeys.push({title:e[t].title,key:e[t].key}),e[t].children&&this.setRecursion(e[t].children)},getItemName:function(e,t){if(!r){var n=[],a=[],r=e.split(",");t.forEach((function(e){r.forEach((function(t){t===e.key&&(n.push(e.title),a.push(e.title))}))})),n.length>1&&a.shift(),this.allPersonArea=a.toString()}}}},m=f,y=(n("33331"),n("2877")),b=Object(y["a"])(m,a,r,!1,null,"3a59e5b2",null);t["default"]=b.exports},dfd7:function(e,t,n){}}]);