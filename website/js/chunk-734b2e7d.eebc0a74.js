(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-734b2e7d","chunk-a386bca6","chunk-67f45a9a"],{"12cb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"专职人员列表",width:e.modalWidth},on:{ok:e.okHandler}},[a("SplitLayout",{attrs:{leftWidth:"240px"}},[a("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[a("SearchTree",{ref:"searchTree",staticStyle:{padding:"0 10px",overflow:"hidden"},attrs:{data:e.treeData,defaultdKeys:e.departmentId},on:{selected:e.onSelected}})],1),a("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[a("SearchForm",{on:{query:e.onQuery,reset:e.onResetForm}},[a("SearchFormItem",{attrs:{label:"姓名："}},[a("a-input-search",{attrs:{placeholder:"请输入姓名"},model:{value:e.pageFilter.userName,callback:function(t){e.$set(e.pageFilter,"userName",t)},expression:"pageFilter.userName"}})],1),a("SearchFormItem",{attrs:{label:"联系电话："}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入联系电话"},model:{value:e.pageFilter.phone,callback:function(t){e.$set(e.pageFilter,"phone",t)},expression:"pageFilter.phone"}})],1)],1)],1),a("a-table",{ref:"table",attrs:{columns:e.columns,dataSource:e.pageData,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:"radio"},rowKey:"userId"},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}}])})],1)],1)},s=[],i=(a("b0c0"),a("385c")),o=a("86da"),r=a("d99e"),l=a("3a49"),c=a("007b"),d=r["a"].Item,h={components:{Modal:o["a"],SearchForm:r["a"],SearchFormItem:d,SearchTree:l["a"]},data:function(){return{columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"}},{title:"姓名",dataIndex:"name",align:"center"},{title:"所属单位",dataIndex:"tenantName",align:"center"},{title:"电话",dataIndex:"phone",align:"center",scopedSlots:{customRender:"phone"}}],pageData:[],pageFilter:{currentPage:1,pageSize:10,deptId:"",deptKey:"1",jobName:"POSITION_009",nextFlag:"",userName:""},loading:!1,selectedRowKeys:[],ids:[],params:{belongManagerId:"",belongManagerName:"",belongManagerPhone:"",ids:[]},treeData:[],isTreeInit:!1,departmentId:"",level:"",modalWidth:1200}},created:function(){},methods:{getArea:function(e){var t=this;c["a"].getDepartmentTree(e).then((function(e){t.isTreeInit=!0,t.treeData=e.data,t.departmentId=e.data[0].key,t.pageFilter.deptId=e.data[0].key,t.refreshTable()})).catch((function(){}))},onSelected:function(e,t,a){e.length>0&&(this.departmentId=e[0],this.pageFilter.deptId=e[0],this.level=a.extendData,this.refreshTable())},onSelectChange:function(e,t){console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e,this.params={belongManagerId:t[0].userId,belongManagerName:t[0].name,belongManagerPhone:t[0].phone,ids:this.ids}},getList:function(e,t){this.selectedRowKeys=[],this.ids=t,this.$refs.modal.show();var a={deptKey:1};this.getArea(a)},refreshTable:function(){var e=this;this.loading=!0,Object(i["e"])(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t})).catch((function(){e.loading=!1}))},afterVisibleChange:function(e){console.log(e)},onQuery:function(){this.refreshTable()},onResetForm:function(){this.pageFilter={currentPage:1,pageSize:10,deptId:this.departmentId},this.refreshTable()},onTableChange:function(e,t,a){},okHandler:function(){var e=this;this.selectedRowKeys.length>0?(this.loading=!0,Object(i["o"])(this.params).then((function(t){e.loading=!1,e.$message.success("分配成功"),e.$emit("perosonAssgin"),e.$refs.modal.close()})).catch((function(){}))):this.$message.warning("请选择专职人员")}}},u=h,p=a("2877"),f=Object(p["a"])(u,n,s,!1,null,null,null);t["default"]=f.exports},1774:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"转移执行地"},on:{ok:e.okHandler}},[a("div",{staticClass:"waitChangePersonnel"},[a("span",[e._v("待变更人员：")]),e._l(e.nameList,(function(t,n){return a("div",{key:n,staticClass:"waitChangePersonnelName"},[a("a-tag",{attrs:{closable:0!==n},on:{close:function(){return e.deleteName(t)}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2),a("div",{staticClass:"waitChangePersonnel"},[a("span",[e._v("执行地选择：")]),a("a-cascader",{staticStyle:{width:"70%"},attrs:{"change-on-select":"",allowClear:"",options:e.regionOptions,placeholder:"选择省市县",AUTOCOMPLETE:"off"},on:{change:e.onCascaderChange}})],1)])},s=[],i=(a("4de4"),a("4160"),a("a15b"),a("b0c0"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("86da")),o=a("385c"),r={components:{Modal:i["a"]},data:function(){return{formData:{},regionOptions:[],nameList:[],levelData:""}},created:function(){},methods:{show:function(e,t){var a=this,n=t;this.$refs.modal.show(),this.levelData="",this.nameList=Object.assign([],[]),this.regionOptions=[],this.formData={},n.forEach((function(e){a.nameList.push({name:e.realName,id:e.id})})),e[0].children.forEach((function(e){var t={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var a={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var t={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var a={value:e.extendData,label:e.title};t.children.push(a)})),a.children.push(t)})),t.children.push(a)})),a.regionOptions.push(t)}))},onCascaderChange:function(e,t){var a="";t.forEach((function(e){a+=e.label+"-"})),a=a.substr(0,a.length-1),this.formData.companyAddress=a,this.levelData=e[e.length-1]},deleteName:function(e){this.nameList=this.nameList.filter((function(t){return t.name!==e.name}))},okHandler:function(){var e=this;if(""!=this.levelData){var t=[];this.nameList.forEach((function(e){t.push(e.id)}));var a=this.levelData.split(",").filter((function(e){return e&&e.trim()})),n={ids:t,level:a.join(","),departmentId:a[a.length-1]};Object(o["q"])(n).then((function(t){e.$emit("transferPlaceRefresh"),e.$message.success(t),e.$refs.modal.close()})).catch((function(){}))}else this.$message.error("请先选择执行地")},changePrompt:function(e){this.$error({title:"不可操作提示",content:e})}}},l=r,c=(a("ad17"),a("2877")),d=Object(c["a"])(l,n,s,!1,null,"3ce9e518",null);t["default"]=d.exports},"3a49":function(e,t,a){"use strict";var n=a("59e7");t["a"]=n["a"]},"41ae":function(e,t,a){"use strict";var n=a("6d22"),s=a.n(n);s.a},"59e7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:!e.treeLoading}},[a("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{allowClear:"",placeholder:"请输入搜索内容"},on:{change:e.onChange},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),e.treeLoading?a("a-tree",{class:{activeEllipsis:e.isShowEllipsis},attrs:{loading:!0,selectedKeys:[e.defaultdKeys],expandedKeys:e.expandedKeys,defaultExpandAll:e.expandAllNode,autoExpandParent:e.autoExpandParent,treeData:e.treeData},on:{expand:e.onExpand,select:e.onSelect},scopedSlots:e._u([{key:"title",fn:function(t){var n=t.title;return[a("a-tooltip",{attrs:{placement:"topLeft",title:n}},[n.indexOf(e.searchValue)>-1?a("span",[e._v(" "+e._s(n.substr(0,n.indexOf(e.searchValue)))+" "),a("span",{staticStyle:{color:"#f50"}},[e._v(e._s(e.searchValue))]),e._v(" "+e._s(n.substr(n.indexOf(e.searchValue)+e.searchValue.length))+" ")]):a("span",[e._v(e._s(n))])])]}}],null,!1,3746631401)}):a("a-skeleton",{attrs:{active:"",paragraph:{rows:14}}})],1)},s=[],i=(a("c975"),a("d81d"),a("ac1f"),a("1276"),{name:"SearchTree",props:{data:{type:Array,require:!0},defaultdKeys:{type:String,require:!1},isShowEllipsis:{type:Boolean,default:!0},expandAllNode:{type:Boolean,default:!1},expandKeys:{type:String,require:!1}},data:function(){return{searchValue:"",expandedKeys:[],autoExpandParent:!0,dataList:[],treeData:[],selectedKeys:[],selectedTitles:[],loadingBool:!1}},computed:{treeLoading:function(){return null!==this.treeData&&this.treeData.length>0}},watch:{data:{handler:function(e,t){this.dataList=[],null!==e&&(this.generateList(e),this.treeData=e,this.treeData.length>0&&(void 0!=this.expandKeys&&this.expandKeys.length>0?this.expandedKeys=this.expandKeys.substring(0,this.expandKeys.length-1).split(","):this.expandedKeys=[this.treeData[0].key]))},immediate:!0}},methods:{getSelectedKey:function(){return this.selectedKeys[0]||""},getSelectedKeys:function(){return this.selectedKeys},getSelectedTitle:function(){return this.selectedTitles[0]||""},getSelectedTitles:function(){return this.selectedTitles},onSelect:function(e,t){this.selectedKeys=e,this.selectedKeys.length>0&&(this.selectedTitles=t.selectedNodes.map((function(e){return e.data.props.dataRef.title})),this.$emit("selected",this.selectedKeys,this.selectedTitles,t.selectedNodes[0].data.props.dataRef))},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},generateList:function(e){for(var t=0;t<e.length;t++){var a=e[t];void 0===a.scopedSlots&&(a.scopedSlots={title:"title"}),this.dataList.push({key:a.key,parentId:a.parentId,extendData:a.extendData,title:a.title}),a.children&&this.generateList(a.children)}},onChange:function(e){var t=this,a=e.target.value;""!=a?a&&this.dataList.map((function(e){e.title.indexOf(a)>-1&&(t.expandedKeys=e.extendData.substring(0,e.extendData.length-1).split(","),console.log(t.expandedKeys))})):this.expandedKeys=[this.treeData[0].key]}}}),o=i,r=(a("70b7"),a("2877")),l=Object(r["a"])(o,n,s,!1,null,"52e9cd27",null);t["a"]=l.exports},"65d2":function(e,t,a){},"6d22":function(e,t,a){},"70b7":function(e,t,a){"use strict";var n=a("dfd7"),s=a.n(n);s.a},a843:function(e,t,a){},ad17:function(e,t,a){"use strict";var n=a("a843"),s=a.n(n);s.a},b4eb:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",{attrs:{leftWidth:"240px"}},[a("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[a("SearchTree",{ref:"searchTree",staticStyle:{padding:"0 10px",overflow:"hidden"},attrs:{data:e.treeData,defaultdKeys:e.selectedObj.departmentId,expandKeys:e.selectedObj.level},on:{selected:e.onSelected}})],1),a("div",{staticClass:"header-top",attrs:{slot:"top"},slot:"top"},[a("div",{staticClass:"header_search"},[a("div",{staticClass:"search_box"},[a("span",{staticStyle:{flex:"0 0 90px"}},[e._v("戒康人员信息:")]),a("a-input",{staticStyle:{width:"130px"},attrs:{placeholder:"请输入姓名或者身份证号"},model:{value:e.pageFilter.keyword,callback:function(t){e.$set(e.pageFilter,"keyword",t)},expression:"pageFilter.keyword"}})],1),a("div",{staticClass:"search_box"},[a("span",[e._v("登录状态：")]),a("a-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择登录状态"},model:{value:e.pageFilter.loginStatus,callback:function(t){e.$set(e.pageFilter,"loginStatus",t)},expression:"pageFilter.loginStatus"}},[a("a-select-option",{attrs:{value:""}},[e._v("全部")]),a("a-select-option",{attrs:{value:1}},[e._v("未注册")]),a("a-select-option",{attrs:{value:2}},[e._v("未登录")]),a("a-select-option",{attrs:{value:3}},[e._v("已登录")])],1)],1),a("div",{staticClass:"search_box"},[a("span",[e._v("执行情况:")]),a("a-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择状态"},model:{value:e.pageFilter.personStatus,callback:function(t){e.$set(e.pageFilter,"personStatus",t)},expression:"pageFilter.personStatus"}},[a("a-select-option",{attrs:{value:""}},[e._v("全部")]),a("a-select-option",{attrs:{value:1}},[e._v("正在执行")]),a("a-select-option",{attrs:{value:2}},[e._v("请假中")]),a("a-select-option",{attrs:{value:3}},[e._v("中止")])],1)],1),a("div",{staticClass:"search_box"},[a("span",[e._v("专职人员:")]),a("a-input",{staticStyle:{width:"130px"},attrs:{placeholder:"请输入专职人员"},model:{value:e.pageFilter.belongManagerName,callback:function(t){e.$set(e.pageFilter,"belongManagerName",t)},expression:"pageFilter.belongManagerName"}})],1),a("div",{staticClass:"search_box",staticStyle:{"margin-left":"10px"}},[a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.onQuery}},[e._v(" 查询 ")]),a("a-button",{on:{click:e.onResetForm}},[e._v(" 重置 ")])],1)])]),a("div",{staticClass:"con-content"},[Object.keys(e.allPersonCount).length>0&&e.allPersonArea?a("div",{staticStyle:{"background-color":"#f1efef",padding:"10px","margin-bottom":"20px"}},[e._v(" 当前区域："+e._s(e.allPersonArea)+"； 区域总人数"+e._s(e.getTypeData(1,e.allPersonCount)[0].count)+"人； APP注册总人数"+e._s(e.getTypeData(2,e.allPersonCount)[0].count)+"人； APP在线总人数"+e._s(e.getTypeData(3,e.allPersonCount)[0].count)+"人； 社戒人数"+e._s(e.getTypeData(4,e.allPersonCount)[0].count)+"人； 社康人数"+e._s(e.getTypeData(5,e.allPersonCount)[0].count)+"人。 ")]):e._e(),a("div",{staticClass:"con-content-top"},[a("OperationPermission",{attrs:{check:"privs.item1480000000"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onAdd}},[e._v("新增")])],1),a("OperationPermission",{attrs:{check:"privs.item1480000008"}},[a("a-popconfirm",{attrs:{title:"确认要删除所勾选的数据吗?","ok-text":"是","cancel-text":"否",disabled:e.isDisabled},on:{confirm:function(t){return e.batchDel()}}},[a("a-button",{attrs:{disabled:e.isDisabled}},[e._v("批量删除")])],1)],1),a("OperationPermission",{attrs:{check:"privs.item1480000001"}},[a("a-button",{attrs:{disabled:e.isDisabled},on:{click:e.onPerosonAssgin}},[e._v("人员分配")])],1),a("OperationPermission",{attrs:{check:"privs.item1480000002"}},[a("a-button",{attrs:{disabled:e.isDisabled},on:{click:e.onRemoveAssgin}},[e._v("解除分配")])],1),a("OperationPermission",{attrs:{check:"privs.item1480000009"}},[a("a-button",{attrs:{disabled:e.isDisabled},on:{click:e.onChangePlace}},[e._v("变更执行地")])],1),a("OperationPermission",{attrs:{check:"privs.item1480000009"}},[a("a-button",{attrs:{disabled:e.isDisabled},on:{click:e.onTransferPlace}},[e._v("转移执行地")])],1),a("OperationPermission",{attrs:{check:"privs.item1480000009"}},[a("a-button",{attrs:{disabled:e.isDisabled},on:{click:e.onCancelMobile}},[e._v("注销手机号")])],1),a("OperationPermission",{attrs:{check:"privs.item1480000004"}},[a("downLoadComponents",{ref:"downLoadComponents",staticStyle:{display:"inline-block"},attrs:{formData:e.pageFilter,apiUrl:e.downUrl,fileText:e.fileText},on:{queryMethod:e.exportFauth}},[a("a-button",{staticStyle:{"margin-top":"20px"},attrs:{loading:e.loadingBool,title:"报表导出"},on:{click:e.exportDowm}},[e._v(" 报表导出 ")])],1)],1)],1),a("div",{staticClass:"con-content-list"},[a("CustomTable",{ref:"table",attrs:{showAlert:!1,showSelection:!0,columns:e.columns,dataSource:e.pageData,loading:e.loading,scroll:{x:1600},rowKey:"id"},on:{selectedRow:e.onSelectedRow,change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}},{key:"sex",fn:function(t){return[1===t?a("div",[e._v("男")]):e._e(),2===t?a("div",[e._v("女")]):e._e()]}},{key:"isOnline",fn:function(t){return[1===t?a("a-tooltip",{attrs:{placement:"top",title:"在线"}},[a("a-badge",{attrs:{status:"success"}})],1):2===t?a("a-tooltip",{attrs:{placement:"top",title:"不在线"}},[a("a-badge",{attrs:{status:"default"}})],1):e._e()]}},{key:"sjskType",fn:function(t){return[1===t?a("div",[e._v("社戒")]):e._e(),2===t?a("div",[e._v("社康")]):e._e()]}},{key:"phone",fn:function(t,n){return[1===n.loginStatus?a("span",{attrs:{title:"未注册"}}):a("span",{attrs:{title:"注册手机号"}},[e._v(e._s(t))])]}},{key:"distribution",fn:function(t){return[1===t?a("div",[e._v("出所待分配")]):e._e(),2===t?a("div",[e._v("其他待分配")]):e._e(),3===t?a("div",[e._v("已分配")]):e._e()]}},{key:"belongManagerName",fn:function(t){return[a("div",""===t?[e._v("无")]:[e._v(e._s(t))])]}},{key:"personStatus",fn:function(t){return[1===t?a("div",[e._v("正在执行")]):e._e(),2===t?a("div",[e._v("请假中")]):e._e(),3===t?a("div",[e._v("中止")]):e._e(),4===t?a("div",[e._v("死亡")]):e._e(),5===t?a("div",[e._v("终止")]):e._e(),6===t?a("div",[e._v("解除")]):e._e(),7===t?a("div",[e._v("变更执行地")]):e._e(),8===t?a("div",[e._v("社会面归档")]):e._e()]}},{key:"sjskDate",fn:function(t){return[t.sjskStartDate&&t.sjskStartDate?a("span",[e._v(" "+e._s(t.sjskStartDate?e.moment(t.sjskStartDate).format("YYYY-MM-DD"):"")+" ~ "+e._s(t.sjskEndDate?e.moment(t.sjskEndDate).format("YYYY-MM-DD"):"")+" ")]):e._e()]}},{key:"loginStatus",fn:function(t){return[1===t?a("span",[e._v("未注册")]):e._e(),2===t?a("span",[e._v("未登录")]):e._e(),3===t?a("span",[e._v("已登录")]):e._e()]}},{key:"loginTime",fn:function(t){return["1"===t||"2"===t?a("span",[e._v("无")]):e._e(),t&&"1"!==t&&"2"!==t?a("span",[a("p",{staticStyle:{margin:"0"},attrs:{title:"最后一次登录时间"}},[e._v(e._s(t))])]):e._e()]}},{key:"action",fn:function(t){return[a("OperationPermission",{attrs:{check:"privs.item1480000006"}},[a("a",{on:{click:function(a){return a.stopPropagation(),e.onEdit(t)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}})],1),a("OperationPermission",{attrs:{check:"privs.item1480000006"}},[a("a",{on:{click:function(a){return a.stopPropagation(),e.unlockConfirm(t)}}},[e._v("账户解锁")])]),a("br"),a("a",{on:{click:function(a){return a.stopPropagation(),e.onDetail(t)}}},[e._v("全息档案")])]}}])})],1)])]),a("personnelAllotment",{ref:"personnelAllotment",on:{perosonAssgin:e.onPerosonAssginOk}}),a("changePlace",{ref:"changePlace",on:{changePlaceRefresh:e.refreshTable}}),a("transferPlace",{ref:"transferPlace",on:{transferPlaceRefresh:e.refreshTable}})],1)},s=[],i=(a("4160"),a("d81d"),a("b64b"),a("d3b7"),a("ac1f"),a("1276"),a("159b"),a("5530")),o=a("2f62"),r=a("bf11"),l=a("12cb"),c=a("c062"),d=a("1774"),h=a("3a49"),u=a("007b"),p=a("385c"),f=a("cc33"),g=a("76c1"),m={name:"patientList",components:{CustomTable:r["a"],personnelAllotment:l["default"],changePlace:c["default"],transferPlace:d["default"],SearchTree:h["a"],downLoadComponents:g["a"]},data:function(){var e=this;return{treeData:[],expandedKeys:[],searchVal:"",showLine:!0,showIcon:!1,columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},width:80,align:"center",fixed:"left",customRender:function(t,a,n){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(n+1))}},{title:"在线状态",sorter:!0,align:"center",width:50,fixed:"left",dataIndex:"isOnline",scopedSlots:{customRender:"isOnline"}},{title:"姓名",dataIndex:"realName",align:"center",fixed:"left",width:80},{title:"身份证",dataIndex:"identityCard",align:"center",width:160},{title:"类型",dataIndex:"sjskType",align:"center",width:60,scopedSlots:{customRender:"sjskType"}},{title:"专职人员",dataIndex:"belongManagerName",align:"center",width:80,scopedSlots:{customRender:"belongManagerName"}},{title:"注册手机号",dataIndex:"phone",align:"center",width:140,scopedSlots:{customRender:"phone"}},{title:"执行情况",dataIndex:"personStatus",align:"center",width:80,scopedSlots:{customRender:"personStatus"}},{title:"执行时间",align:"center",width:190,scopedSlots:{customRender:"sjskDate"}},{title:"执行地区",dataIndex:"departmentName",align:"center",width:150,scopedSlots:{customRender:"departmentName"}},{title:"分配情况",dataIndex:"distribution",align:"center",width:70,scopedSlots:{customRender:"distribution"},sorter:!0},{title:"登录状态",dataIndex:"loginStatus",align:"center",width:70,scopedSlots:{customRender:"loginStatus"}},{title:"登录时间",dataIndex:"loginTime",align:"center",width:150,sorter:!0,scopedSlots:{customRender:"loginTime"}},{title:"操作",width:140,align:"center",scopedSlots:{customRender:"action"}}],pageFilter:{currentPage:1,pageSize:10,realName:"",identityCard:"",loginStatus:"",personStatus:"",departmentId:""},isDisabled:!0,selectedObj:{departmentId:"",node:{},level:""},changePlaceData:{},loading:!1,pageData:[],dataKeys:[],allPersonCount:{},loadingBool:!1,allPersonArea:"",downUrl:"/api/person-service/sjskPerson/getExportExcel",fileText:"社戒社康人员-"+this.moment(new Date).format("YYYY-MM-DD HH:mm:ss")+".xls"}},created:function(){var e={};"POSITION_009"!==Object(f["f"])().jobName?e={deptKey:1}:(this.pageFilter.belongManagerId=Object(f["f"])().userId,e={deptKey:0}),this.getArea(e)},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])({onUnlockAccount:"SysUser/onUnlockAccount",onCancelPhone:"SysUser/onCancelPhone"})),{},{onSelectedRow:function(e){this.isDisabled=!(e.length>0)},getArea:function(e){var t=this;u["a"].getDepartmentTree(e).then((function(e){t.treeData=e.data,t.setRecursion(t.treeData);var a=t.$store.state.SysPersonnel.selectedObj;void 0!==a.departmentId&&""!==a.departmentId?(t.selectedObj.departmentId=a.departmentId,t.selectedObj.level=a.level,t.selectedObj.node=a.node,t.pageFilter.departmentId=a.departmentId):(t.selectedObj.departmentId=e.data[0].key,t.selectedObj.level=e.data[0].extendData,t.selectedObj.node={departmentId:e.data[0].key,level:e.data[0].extendData,children:e.data[0].children},t.pageFilter.departmentId=e.data[0].key,t.$store.commit("SysPersonnel/setSelectedObj",t.selectedObj)),t.getItemName(t.selectedObj.level,t.dataKeys),t.refreshTable()})).catch((function(){}))},onSelected:function(e,t,a){e.length>0&&(this.pageFilter.currentPage=1,this.pageFilter.departmentId=e[0],this.selectedObj.departmentId=e[0],this.selectedObj.level=a.extendData,this.selectedObj.node=a,this.$store.commit("SysPersonnel/setSelectedObj",this.selectedObj),this.getItemName(a.extendData,this.dataKeys),this.refreshTable(),this.$refs.table.onClearRowKeys())},refreshTable:function(){var e=this;this.loading=!0,this.$refs.table.onClearRowKeys(),this.isDisabled=!0,Object(p["n"])(Object(i["a"])({},this.pageFilter)).then((function(t){e.loading=!1,e.pageData=t})).catch((function(){})),Object(p["i"])({departmentId:this.pageFilter.departmentId,belongManagerId:this.pageFilter.belongManagerId}).then((function(t){e.allPersonCount=t})).catch((function(){}))},onTableChange:function(e,t,a){this.pageFilter=Object(i["a"])(Object(i["a"])({},this.pageFilter),e),this.refreshTable()},onChange:function(e){this.expandedKeys.push(this.searchVal)},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onResetForm:function(){this.pageFilter={currentPage:1,pageSize:10,departmentId:this.selectedObj.departmentId},this.refreshTable()},onAdd:function(){var e=this.$store.state.SysPersonnel.selectedObj.node;if(void 0===e||void 0===e.children||e.children.length>0)this.$message.warning("请选择左侧树状最底层区域");else{var t=Object(f["b"])("personnelPage1");if(null!==t&&Object.keys(t).length>0){var a=this;this.$confirm({title:"是否要恢复之前的录入记录？",okText:"是",cancelText:"否",onOk:function(){a.gotoPage1()},onCancel:function(){a.setPageLSNull(),a.gotoPage1()}})}else this.gotoPage1()}},gotoPage1:function(){var e={departmentId:this.selectedObj.departmentId,level:this.selectedObj.level,doStatue:"add"};this.$router.push({path:"/personnelManagement/personnelList/newStaff",query:{params:JSON.stringify(e)}})},setPageLSNull:function(){Object(f["h"])("personnelPage1",{}),Object(f["h"])("personnelPage2",{}),Object(f["h"])("personnelPage3",{}),Object(f["h"])("personnelPage4",{}),Object(f["h"])("personnelPage5",{}),Object(f["h"])("personnelPage6",{}),Object(f["h"])("personnelPage7",{})},onPerosonAssgin:function(){var e=this.$refs.table.getSelectedRows(),t=!0;if(e.forEach((function(e){""!==e.belongManagerName&&null!==e.belongManagerName&&void 0!==e.belongManagerName&&(t=!1)})),t){var a=this.$refs.table.getSelectedRowKeys();this.$refs.personnelAllotment.getList(this.selectedObj.departmentId,a)}else this.$message.warning("所选项含有已分配项！")},onRemoveAssgin:function(){var e=this,t=this.$refs.table.getSelectedRows(),a=!0;if(t.forEach((function(e){""===e.belongManagerName&&null!==e.belongManagerName&&void 0!==e.belongManagerName&&(a=!1)})),a){var n=this.$refs.table.getSelectedRowKeys();this.loading=!0,Object(p["p"])({ids:n}).then((function(t){e.loading=!1,e.$message.success("解除成功"),e.refreshTable(),e.$refs.table.onClearRowKeys(),e.isDisabled=!0})).catch((function(){}))}else this.$message.warning("所选项含有未分配项！")},onChangePlace:function(){var e=this.$refs.table.getSelectedRows(),t=!0;e.forEach((function(e){console.log(e.changePlaceFlag),1===e.changePlaceFlag&&(t=!1)})),t?this.$refs.changePlace.show(this.treeData,e):this.$message.warning("所选项含有变更执行地！")},onTransferPlace:function(){var e=this.$refs.table.getSelectedRows();this.$refs.transferPlace.show(this.treeData,e)},onEdit:function(e){var t={id:e.id,doStatue:"edit",pageId:0};this.$router.push({path:"/personnelManagement/personnelList/newStaff",query:{params:JSON.stringify(t)}})},onDetail:function(e){this.$router.push({path:"/personnelManagement/personnelFiles/personnelDetails",query:{params:JSON.stringify({id:e.id,sjskType:e.sjskType})}})},onDelete:function(e){var t=this;Object(p["d"])({ids:[e.id]}).then((function(e){t.refreshTable()}))},batchDel:function(){var e=this,t=this.$refs.table.getSelectedRows(),a=[];t.length>0&&t.map((function(e){a.push(e.id)})),Object(p["d"])({ids:a}).then((function(t){e.isDisabled=!0,e.$refs.table.onClearRowKeys(),e.refreshTable()}))},onPerosonAssginOk:function(){this.refreshTable(),this.$refs.table.onClearRowKeys(),this.isDisabled=!0},exportDowm:function(){this.$refs.downLoadComponents.exportDowm()},exportFauth:function(e){this.loadingBool=e},unlockConfirm:function(e){var t=this;this.$confirm({title:"是否对"+e.realName+"账户解锁？",okText:"是",cancelText:"否",onOk:function(){t.onUnlockAccount(e.id).then((function(e){console.log(e),e&&e.data&&200===e.status&&t.$message.success(e.data)})).catch((function(e){console.log(e)}))},onCancel:function(){console.log("Cancel")}})},onCancelMobile:function(){this.$createElement;var e=this,t=this.$refs.table.getSelectedRows();if(t.length>5)this.$message.warning("不能一次性注销超过5位人员手机号！");else{var a=[],n=[];t.length>0&&t.map((function(e){n.push(e.id),a.push(e.realName)})),this.$confirm({title:"是否对"+a.toString()+"人员注销手机号？",content:function(e){return e("div",{style:"color:red;"},["注销后不可恢复，需要重新注册！"])},okText:"是",cancelText:"否",onOk:function(){e.onCancelPhone({ids:n}).then((function(t){console.log(t),t&&t.data&&200===t.status&&(e.$message.success(t.data),e.refreshTable())})).catch((function(e){console.log(e)}))},onCancel:function(){console.log("Cancel")}})}},getTypeData:function(e,t){var a=[];return t.forEach((function(t){t.type===e&&a.push(t)})),a},setRecursion:function(e){for(var t in e)this.dataKeys.push({title:e[t].title,key:e[t].key}),e[t].children&&this.setRecursion(e[t].children)},getItemName:function(e,t){if(!s){var a=[],n=[],s=e.split(",");t.forEach((function(e){s.forEach((function(t){t===e.key&&(a.push(e.title),n.push(e.title))}))})),a.length>1&&n.shift(),this.allPersonArea=n.toString()}}})},v=m,b=(a("41ae"),a("2877")),y=Object(b["a"])(v,n,s,!1,null,"b8370460",null);t["default"]=y.exports},c062:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"变更执行地"},on:{ok:e.okHandler}},[a("div",{staticClass:"waitChangePersonnel"},[a("span",[e._v("待变更人员：")]),e._l(e.nameList,(function(t,n){return a("div",{key:n,staticClass:"waitChangePersonnelName"},[a("a-tag",{attrs:{closable:0!==n},on:{close:function(){return e.deleteName(t)}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2),a("div",{staticClass:"waitChangePersonnel"},[a("span",[e._v("执行地选择：")]),a("a-cascader",{staticStyle:{width:"70%"},attrs:{"change-on-select":"",allowClear:"",options:e.regionOptions,placeholder:"选择省市县",AUTOCOMPLETE:"off"},on:{change:e.onCascaderChange}})],1)])},s=[],i=(a("4de4"),a("4160"),a("a15b"),a("b0c0"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("86da")),o=a("385c"),r={components:{Modal:i["a"]},data:function(){return{formData:{},regionOptions:[],nameList:[],levelData:""}},created:function(){},methods:{show:function(e,t){var a=this;this.levelData="",this.nameList=[],this.regionOptions=[],this.formData={},this.$refs.modal.visible=!0,t.forEach((function(e){a.nameList.push({name:e.realName,id:e.id})})),e[0].children.forEach((function(e){var t={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var a={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var t={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var a={value:e.extendData,label:e.title};t.children.push(a)})),a.children.push(t)})),t.children.push(a)})),a.regionOptions.push(t)}))},onCascaderChange:function(e,t){var a="";t.forEach((function(e){a+=e.label+"-"})),a=a.substr(0,a.length-1),this.formData.companyAddress=a,this.levelData=e[e.length-1]},deleteName:function(e){this.nameList=this.nameList.filter((function(t){return t.name!==e.name}))},okHandler:function(){var e=this;if(""!=this.levelData){var t=[];this.nameList.forEach((function(e){t.push(e.id)}));var a=this.levelData.split(",").filter((function(e){return e&&e.trim()})),n={ids:t,level:a.join(","),departmentId:a[a.length-1]};Object(o["b"])(n).then((function(t){e.$emit("changePlaceRefresh"),e.$message.success(t),e.$refs.modal.close()})).catch((function(){}))}else this.$message.error("执行地选择")},changePrompt:function(e){this.$error({title:"不可操作提示",content:e})}}},l=r,c=(a("e76d"),a("2877")),d=Object(c["a"])(l,n,s,!1,null,"6d25845d",null);t["default"]=d.exports},dfd7:function(e,t,a){},e76d:function(e,t,a){"use strict";var n=a("65d2"),s=a.n(n);s.a}}]);