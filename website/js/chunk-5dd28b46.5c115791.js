(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dd28b46"],{"0835":function(e,t,a){"use strict";var n=a("c850"),r=a.n(n);r.a},"3a49":function(e,t,a){"use strict";var n=a("59e7");t["a"]=n["a"]},"59e7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:!e.treeLoading}},[a("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{allowClear:"",placeholder:"请输入搜索内容"},on:{change:e.onChange},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),e.treeLoading?a("a-tree",{class:{activeEllipsis:e.isShowEllipsis},attrs:{loading:!0,selectedKeys:[e.defaultdKeys],expandedKeys:e.expandedKeys,defaultExpandAll:e.expandAllNode,autoExpandParent:e.autoExpandParent,treeData:e.treeData},on:{expand:e.onExpand,select:e.onSelect},scopedSlots:e._u([{key:"title",fn:function(t){var n=t.title;return[a("a-tooltip",{attrs:{placement:"topLeft",title:n}},[n.indexOf(e.searchValue)>-1?a("span",[e._v(" "+e._s(n.substr(0,n.indexOf(e.searchValue)))+" "),a("span",{staticStyle:{color:"#f50"}},[e._v(e._s(e.searchValue))]),e._v(" "+e._s(n.substr(n.indexOf(e.searchValue)+e.searchValue.length))+" ")]):a("span",[e._v(e._s(n))])])]}}],null,!1,3746631401)}):a("a-skeleton",{attrs:{active:"",paragraph:{rows:14}}})],1)},r=[],s=(a("c975"),a("d81d"),a("ac1f"),a("1276"),{name:"SearchTree",props:{data:{type:Array,require:!0},defaultdKeys:{type:String,require:!1},isShowEllipsis:{type:Boolean,default:!0},expandAllNode:{type:Boolean,default:!1},expandKeys:{type:String,require:!1}},data:function(){return{searchValue:"",expandedKeys:[],autoExpandParent:!0,dataList:[],treeData:[],selectedKeys:[],selectedTitles:[],loadingBool:!1}},computed:{treeLoading:function(){return null!==this.treeData&&this.treeData.length>0}},watch:{data:{handler:function(e,t){this.dataList=[],null!==e&&(this.generateList(e),this.treeData=e,this.treeData.length>0&&(void 0!=this.expandKeys&&this.expandKeys.length>0?this.expandedKeys=this.expandKeys.substring(0,this.expandKeys.length-1).split(","):this.expandedKeys=[this.treeData[0].key]))},immediate:!0}},methods:{getSelectedKey:function(){return this.selectedKeys[0]||""},getSelectedKeys:function(){return this.selectedKeys},getSelectedTitle:function(){return this.selectedTitles[0]||""},getSelectedTitles:function(){return this.selectedTitles},onSelect:function(e,t){this.selectedKeys=e,this.selectedKeys.length>0&&(this.selectedTitles=t.selectedNodes.map((function(e){return e.data.props.dataRef.title})),this.$emit("selected",this.selectedKeys,this.selectedTitles,t.selectedNodes[0].data.props.dataRef))},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},generateList:function(e){for(var t=0;t<e.length;t++){var a=e[t];void 0===a.scopedSlots&&(a.scopedSlots={title:"title"}),this.dataList.push({key:a.key,parentId:a.parentId,extendData:a.extendData,title:a.title}),a.children&&this.generateList(a.children)}},onChange:function(e){var t=this,a=e.target.value;""!=a?a&&this.dataList.map((function(e){e.title.indexOf(a)>-1&&(t.expandedKeys=e.extendData.substring(0,e.extendData.length-1).split(","),console.log(t.expandedKeys))})):this.expandedKeys=[this.treeData[0].key]}}}),o=s,i=(a("70b7"),a("2877")),l=Object(i["a"])(o,n,r,!1,null,"52e9cd27",null);t["a"]=l.exports},"70b7":function(e,t,a){"use strict";var n=a("dfd7"),r=a.n(n);r.a},"7f24":function(e,t,a){"use strict";var n=a("b775");t["a"]={personHolographicRecordPage:function(e){return Object(n["a"])({url:"/person-service/personHolographicRecord/getList",method:"GET",params:e})},personHolographicRecordDelete:function(e){return Object(n["a"])({url:"/person-service/personHolographicRecord/delete",method:"POST",data:e})},getPersonRecord:function(e){return Object(n["a"])({url:"/person-service/personHolographicRecord/getPersonRecord/"+"".concat(e),method:"get"})},getWarnInfo:function(e){return Object(n["a"])({url:"/person-service/warnInfo/getWarnInfo/"+"".concat(e),method:"get"})},personHolographicRecord:function(e){return Object(n["a"])({url:"/person-service/personHolographicRecord/getPerson/"+"".concat(e),method:"get"})},personHolographicRecordArchive:function(e){return Object(n["a"])({url:"/person-service/personHolographicRecord/archive",method:"post",data:e})},sjskPersonDetail:function(e){return Object(n["a"])({url:"/person-service/sjskPerson/getBaseInfo/"+"".concat(e),method:"get"})},getFamilyAtlas:function(e){return Object(n["a"])({url:"/person-service/personHolographicRecord/getFamilyAtlas",method:"get",params:e})},socialSecurityList:function(e){return Object(n["a"])({url:"/data-docking-service/sjsk/socialSecurity/pageSocialSecurityList",method:"post",data:e})},guaranteeList:function(e){return Object(n["a"])({url:"/data-docking-service/sjsk/guarantee/pageGuaranteeList",method:"post",data:e})},placementJobSettledHistory:function(e){return Object(n["a"])({url:"/medcare-service/placementJobSettledHistory/get/"+"".concat(e),method:"get"})},appChatRecordList:function(e){return Object(n["a"])({url:"/person-service/appChatRecord/getList",method:"get",params:e})},appChatRecordDelete:function(e){return Object(n["a"])({url:"/person-service/appChatRecord/delete",method:"post",data:e})},getSjskPersonInfo:function(e){return Object(n["a"])({url:"/person-service/sjskPerson/getSjskPersonInfo/"+"".concat(e),method:"get"})},getSjskBatchUnarchive:function(e){return Object(n["a"])({url:"/person-service/personHolographicRecord/batchUnarchive",method:"post",data:e})}}},"8af7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",{attrs:{leftWidth:"240px"}},[a("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[a("SearchTree",{ref:"searchTree",staticStyle:{padding:"0 10px",overflow:"hidden"},attrs:{data:e.treeData,defaultdKeys:e.departmentId},on:{selected:e.onSelected}})],1),a("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[a("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[a("SearchFormItem",{attrs:{label:"专职人员姓名："}},[a("a-input",{attrs:{placeholder:"请输入专职人员姓名"},model:{value:e.pageFilter.belongManagerName,callback:function(t){e.$set(e.pageFilter,"belongManagerName",t)},expression:"pageFilter.belongManagerName"}})],1),a("SearchFormItem",{attrs:{label:"关键词："}},[a("a-input",{attrs:{placeholder:"请输入社戒社康人员姓名或者身份证号"},model:{value:e.pageFilter.keyword,callback:function(t){e.$set(e.pageFilter,"keyword",t)},expression:"pageFilter.keyword"}})],1)],1)],1),a("div",{staticClass:"div"},[a("downLoadComponents",{ref:"downLoadComponents",attrs:{formData:e.pageFilter,apiUrl:e.downUrl,fileText:e.fileText},on:{queryMethod:e.exportFauth}},[a("a-button",{staticStyle:{"margin-bottom":"20px"},attrs:{loading:e.loadingBool,title:"导出Excel"},on:{click:e.exportDowm}},[e._v(" 导出Excel ")])],1),a("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!1,loading:e.loading,columns:e.columns,dataSource:e.pageData,rowKey:"id",scroll:{x:1350}},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}},{key:"agreementBook",fn:function(t){return[1===t?a("span",{staticClass:"red"},[e._v("未录入")]):e._e(),2===t?a("span",{staticClass:"green"},[e._v("已录入")]):e._e()]}},{key:"decideBook",fn:function(t){return[1===t?a("span",{staticClass:"red"},[e._v("未录入")]):e._e(),2===t?a("span",{staticClass:"green"},[e._v("已录入")]):e._e()]}},{key:"helpPlanBook",fn:function(t){return[1===t?a("span",{staticClass:"red"},[e._v("未录入")]):e._e(),2===t?a("span",{staticClass:"green"},[e._v("已录入")]):e._e()]}},{key:"livePositionMap",fn:function(t){return[1===t?a("span",{staticClass:"red"},[e._v("未录入")]):e._e(),2===t?a("span",{staticClass:"green"},[e._v("已录入")]):e._e()]}},{key:"personRegisterForm",fn:function(t){return[1===t?a("span",{staticClass:"red"},[e._v("未录入")]):e._e(),2===t?a("span",{staticClass:"green"},[e._v("已录入")]):e._e()]}},{key:"personRule",fn:function(t){return[1===t?a("span",{staticClass:"green"},[e._v("已查看")]):e._e(),2===t?a("span",{staticClass:"red"},[e._v("未查看")]):e._e()]}},{key:"workGroupRegisterForm",fn:function(t){return[1===t?a("span",{staticClass:"red"},[e._v("未录入")]):e._e(),2===t?a("span",{staticClass:"green"},[e._v("已录入")]):e._e()]}},{key:"shouldUrineTestNum",fn:function(t){return[a("span",{class:[t>0?"green":"red"]},[e._v(e._s(t)+"次")])]}},{key:"alreadyUrineTestNum",fn:function(t){return[a("span",{class:[t>0?"green":"red"]},[e._v(e._s(t)+"次")])]}},{key:"testOverdueNum",fn:function(t){return[a("span",{class:[t>0?"green":"red"]},[e._v(e._s(t)+"次")])]}}])})],1)])],1)},r=[],s=a("5530"),o=a("d99e"),i=a("3a49"),l=a("bf11"),c=a("76c1"),d=(a("7f24"),a("007b")),u=a("2f62"),p=o["a"].Item,h={components:{SearchForm:o["a"],SearchFormItem:p,CustomTable:l["a"],SearchTree:i["a"],downLoadComponents:c["a"]},data:function(){var e=this;return{columns:[{title:"序号",dataIndex:"order",width:60,align:"center",fixed:"left",scopedSlots:{customRender:"order"},customRender:function(t,a,n){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(n+1))}},{title:"专职人员姓名",dataIndex:"belongManagerName",width:100,align:"center",fixed:"left"},{title:"社戒社康人员姓名",dataIndex:"realName",width:100,align:"center",fixed:"left"},{title:"人员身份证号",dataIndex:"identityCard",width:160,align:"center"},{title:"决定书",width:80,align:"center",dataIndex:"decideBook",scopedSlots:{customRender:"decideBook"}},{title:"人员登记表",width:80,align:"center",dataIndex:"personRegisterForm",scopedSlots:{customRender:"personRegisterForm"}},{title:"协议书",width:80,align:"center",dataIndex:"agreementBook",scopedSlots:{customRender:"agreementBook"}},{title:"人员守则",width:80,align:"center",dataIndex:"personRule",scopedSlots:{customRender:"personRule"}},{title:"帮教计划书",width:80,align:"center",dataIndex:"helpPlanBook",scopedSlots:{customRender:"helpPlanBook"}},{title:"居住位置图",width:80,align:"center",dataIndex:"livePositionMap",scopedSlots:{customRender:"livePositionMap"}},{title:"工作小组登记表",width:80,align:"center",dataIndex:"workGroupRegisterForm",scopedSlots:{customRender:"workGroupRegisterForm"}},{title:"应尿检次数",width:80,align:"center",dataIndex:"shouldUrineTestNum",scopedSlots:{customRender:"shouldUrineTestNum"}},{title:"已尿检次数",width:80,align:"center",dataIndex:"alreadyUrineTestNum",scopedSlots:{customRender:"alreadyUrineTestNum"}},{title:"检测逾期次数",width:80,align:"center",dataIndex:"testOverdueNum",scopedSlots:{customRender:"testOverdueNum"}}],pageFilter:{currentPage:1,pageSize:10,departmentId:""},loading:!1,pageData:[],treeData:[],departmentId:"",isTreeInit:!1,selectTree:{parentId:"",parentName:""},loadingBool:!1,downUrl:"/api/person-service/sjskPerson/getDataQualityScheduingExcel",fileText:"录档情况列表-"+this.moment(new Date).format("YYYY-MM-DD hh:mm:ss")+".xls"}},created:function(){var e={deptKey:1};this.getArea(e)},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])({getDataQualityScheduingList:"SysPersonnel/getDataQualityScheduingList"})),{},{getArea:function(e){var t=this;d["a"].getDepartmentTree(e).then((function(e){t.isTreeInit=!0,t.treeData=e.data,t.departmentId=e.data[0].key,t.pageFilter.departmentId=e.data[0].key,t.refreshTable()})).catch((function(){}))},onSelected:function(e,t,a){e.length>0&&(this.pageFilter.departmentId=e[0],this.departmentId=e[0],this.refreshTable(),this.$refs.table.onClearRowKeys())},refreshTable:function(){var e=this;this.loading=!0,this.getDataQualityScheduingList(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t})).catch((function(){}))},onTableChange:function(e,t,a){this.pageFilter=e,this.pageFilter.departmentId=this.departmentId,this.refreshTable()},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onResetForm:function(){this.pageFilter={},this.pageFilter.currentPage=1,this.pageFilter.pageSize=10,this.pageFilter.departmentId=this.departmentId,this.refreshTable()},exportDowm:function(){this.$refs.downLoadComponents.exportDowm()},exportFauth:function(e){this.loadingBool=e}})},g=h,f=(a("0835"),a("2877")),m=Object(f["a"])(g,n,r,!1,null,"b413544a",null);t["default"]=m.exports},c850:function(e,t,a){},dfd7:function(e,t,a){}}]);