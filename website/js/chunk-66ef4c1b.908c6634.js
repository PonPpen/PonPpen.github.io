(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66ef4c1b","chunk-1ed78467","chunk-1ed78467"],{"007b":function(e,t,a){"use strict";var n=a("a27e"),s={currentDepartmentTreeUrl:"/base-service/dept/currentDepartmentTree",getTrackSjskPersonList:"/person-service/sjskPerson/getTrackSjskPersonList"};t["a"]={getDepartmentTree:function(e){return Object(n["a"])({url:s.currentDepartmentTreeUrl,method:"GET",params:e})},getTrackSjskPersonList:function(e){return Object(n["a"])({url:s.getTrackSjskPersonList,method:"GET",params:e})}}},"02f3":function(e,t,a){"use strict";var n=a("b775");t["a"]={get_reward_list:function(e){return Object(n["a"])({method:"POST",url:"manage/sjskGoods/getResult",data:e})},get_reward_record_list:function(e){return Object(n["a"])({method:"POST",url:"manage/sjskExchangeRecord/getResult",data:e})},query_reward_by_id:function(e){return Object(n["a"])({url:"manage/sjskGoods/queryById",method:"GET",params:e})},delete_reward_by_id:function(e){return Object(n["a"])({url:"manage/sjskGoods/delete",method:"GET",params:e})},add_reward:function(e){return Object(n["a"])({method:"POST",url:"manage/sjskGoods/add",data:e})},edit_reward:function(e){return Object(n["a"])({method:"POST",url:"manage/sjskGoods/edit",data:e})},query_user_and_goods:function(e){return Object(n["a"])({url:"manage/sjskGoods/queryUserAndGoods",method:"GET",params:e})},exchange_goods:function(e){return Object(n["a"])({method:"POST",url:"manage/sjskExchangeRecord/exchange",data:e})}}},2584:function(e,t,a){"use strict";var n=a("cc78"),s=a.n(n);s.a},"3a49":function(e,t,a){"use strict";var n=a("59e7");t["a"]=n["a"]},"59e7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:!e.treeLoading}},[a("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{allowClear:"",placeholder:"请输入搜索内容"},on:{change:e.onChange},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),e.treeLoading?a("a-tree",{class:{activeEllipsis:e.isShowEllipsis},attrs:{loading:!0,selectedKeys:[e.defaultdKeys],expandedKeys:e.expandedKeys,defaultExpandAll:e.expandAllNode,autoExpandParent:e.autoExpandParent,treeData:e.treeData},on:{expand:e.onExpand,select:e.onSelect},scopedSlots:e._u([{key:"title",fn:function(t){var n=t.title;return[a("a-tooltip",{attrs:{placement:"topLeft",title:n}},[n.indexOf(e.searchValue)>-1?a("span",[e._v(" "+e._s(n.substr(0,n.indexOf(e.searchValue)))+" "),a("span",{staticStyle:{color:"#f50"}},[e._v(e._s(e.searchValue))]),e._v(" "+e._s(n.substr(n.indexOf(e.searchValue)+e.searchValue.length))+" ")]):a("span",[e._v(e._s(n))])])]}}],null,!1,3746631401)}):a("a-skeleton",{attrs:{active:"",paragraph:{rows:14}}})],1)},s=[],r=(a("c975"),a("d81d"),a("ac1f"),a("1276"),{name:"SearchTree",props:{data:{type:Array,require:!0},defaultdKeys:{type:String,require:!1},isShowEllipsis:{type:Boolean,default:!0},expandAllNode:{type:Boolean,default:!1},expandKeys:{type:String,require:!1}},data:function(){return{searchValue:"",expandedKeys:[],autoExpandParent:!0,dataList:[],treeData:[],selectedKeys:[],selectedTitles:[],loadingBool:!1}},computed:{treeLoading:function(){return null!==this.treeData&&this.treeData.length>0}},watch:{data:{handler:function(e,t){this.dataList=[],null!==e&&(this.generateList(e),this.treeData=e,this.treeData.length>0&&(void 0!=this.expandKeys&&this.expandKeys.length>0?this.expandedKeys=this.expandKeys.substring(0,this.expandKeys.length-1).split(","):this.expandedKeys=[this.treeData[0].key]))},immediate:!0}},methods:{getSelectedKey:function(){return this.selectedKeys[0]||""},getSelectedKeys:function(){return this.selectedKeys},getSelectedTitle:function(){return this.selectedTitles[0]||""},getSelectedTitles:function(){return this.selectedTitles},onSelect:function(e,t){this.selectedKeys=e,this.selectedKeys.length>0&&(this.selectedTitles=t.selectedNodes.map((function(e){return e.data.props.dataRef.title})),this.$emit("selected",this.selectedKeys,this.selectedTitles,t.selectedNodes[0].data.props.dataRef))},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},generateList:function(e){for(var t=0;t<e.length;t++){var a=e[t];void 0===a.scopedSlots&&(a.scopedSlots={title:"title"}),this.dataList.push({key:a.key,parentId:a.parentId,extendData:a.extendData,title:a.title}),a.children&&this.generateList(a.children)}},onChange:function(e){var t=this,a=e.target.value;""!=a?a&&this.dataList.map((function(e){e.title.indexOf(a)>-1&&(t.expandedKeys=e.extendData.substring(0,e.extendData.length-1).split(","),console.log(t.expandedKeys))})):this.expandedKeys=[this.treeData[0].key]}}}),i=r,o=(a("70b7"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"52e9cd27",null);t["a"]=c.exports},"5e89":function(e,t,a){var n=a("861d"),s=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&s(e)===e}},"70b7":function(e,t,a){"use strict";var n=a("dfd7"),s=a.n(n);s.a},"8ba4":function(e,t,a){var n=a("23e7"),s=a("5e89");n({target:"Number",stat:!0},{isInteger:s})},"8cc5":function(e,t,a){"use strict";var n=a("d41e"),s=a.n(n);s.a},b1d5:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageView",[a("SplitLayout",{attrs:{leftWidth:"240px"}},[a("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[a("SearchTree",{ref:"searchTree",staticStyle:{padding:"0 10px",overflow:"hidden"},attrs:{data:e.treeData,defaultdKeys:e.pageFilter.deptId},on:{selected:e.onSelected}})],1),a("div",{attrs:{slot:"top"},slot:"top"},[a("SearchForm",{on:{query:e.onQuery,reset:e.onReset}},[a("SearchFormItem",{attrs:{label:"商品名称"}},[a("a-input",{model:{value:e.pageFilter.goodsName,callback:function(t){e.$set(e.pageFilter,"goodsName",t)},expression:"pageFilter.goodsName"}})],1)],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"con-content-top"},[a("OperationPermission",{attrs:{check:"privs.item1520020002"}},[a("a-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",disabled:e.isDisabled},on:{click:e.goExchange}},[e._v("兑换商品")])],1)],1),a("div",{staticClass:"con-content-list"},[a("CustomTable",{attrs:{showAlert:!1,showSelection:!0,loading:e.loading,columns:e.columns,selectionType:"radio",dataSource:e.pageData,onChange:e.onTableChange},on:{rowSelect:e.getRowData},scopedSlots:e._u([{key:"order",fn:function(t,a,n){return[e._v(" "+e._s(n+1)+" ")]}}])})],1)]),a("a-modal",{staticClass:"exchange-dialog",attrs:{title:"兑换商品",destroyOnClose:!0},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-spin",{attrs:{spinning:e.spinning,delay:e.delayTime}},[a("a-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.exchangeSearch}},[e._v("查询")]),a("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"身份证号",prop:"cardId"}},[a("a-input",{model:{value:e.form.cardId,callback:function(t){e.$set(e.form,"cardId",t)},expression:"form.cardId"}})],1),a("a-form-model-item",{attrs:{label:"姓名",prop:"userName"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),a("a-form-model-item",{attrs:{label:"用户积分"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.userPoints,callback:function(t){e.$set(e.form,"userPoints",t)},expression:"form.userPoints"}})],1),a("a-form-model-item",{attrs:{label:"商品名称"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.goodsName,callback:function(t){e.$set(e.form,"goodsName",t)},expression:"form.goodsName"}})],1),a("a-form-model-item",{attrs:{label:"兑换分值"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.exchangePoints,callback:function(t){e.$set(e.form,"exchangePoints",t)},expression:"form.exchangePoints"}})],1),a("a-form-model-item",{attrs:{label:"库存"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",t)},expression:"form.stock"}})],1),a("a-form-model-item",{attrs:{label:"兑换数量",prop:"exchangeNum"}},[a("a-input",{model:{value:e.form.exchangeNum,callback:function(t){e.$set(e.form,"exchangeNum",e._n(t))},expression:"form.exchangeNum"}})],1),a("a-form-model-item",{attrs:{label:"消耗积分"}},[a("a-input",{attrs:{disabled:""},model:{value:e.form.usePoints,callback:function(t){e.$set(e.form,"usePoints",t)},expression:"form.usePoints"}})],1)],1)],1)],1)],1)],1)},s=[],r=(a("a9e3"),a("8ba4"),a("b64b"),a("5530")),i=a("d99e"),o=a("bf11"),c=a("02f3"),l=a("3a49"),d=a("cc33"),u=a("007b"),f=a("cf45"),p=i["a"].Item,h={name:"Exchange",components:{SearchForm:i["a"],SearchFormItem:p,CustomTable:o["a"],SearchTree:l["a"]},data:function(){var e=this,t=function(t,a,n){var s=e.form.exchangePoints,r=e.form.userPoints;if(!a)return n(new Error("请输入要兑换的数量"));Number.isInteger(a)?a*s>r?n(new Error("用户积分余额不足")):n():n(new Error("请输入数字"))};return{spinning:!1,delayTime:500,loading:!1,visible:!1,labelCol:{span:4},wrapperCol:{span:14},form:{cardId:"",userName:"",userPoints:"",goodsName:"",exchangePoints:"",stock:"",exchangeNum:"",usePoints:""},rules:{cardId:[{required:!0,message:"请输入身份证号"},{validator:f["f"]}],userName:[{required:!0,message:"无姓名信息"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],exchangeNum:[{validator:t,trigger:"change"}]},pageData:{},columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"}},{title:"商品名称",dataIndex:"goodsName"},{title:"兑换分值",dataIndex:"exchangePoints"},{title:"库存",dataIndex:"stock"},{title:"商品描述",dataIndex:"goodsDetail"},{title:"创建时间",dataIndex:"createTime"},{title:"创建人员",dataIndex:"createUser"}],pageFilter:{currentPage:1,pageSize:10,queryType:2},selectedRow:{},treeData:[],isDisabled:!0}},watch:{"form.exchangeNum":function(e,t){var a=this.form.exchangePoints;this.form.usePoints;this.form.usePoints=a*e}},created:function(){var e={};"POSITION_009"!==Object(d["f"])().jobName?e={deptKey:1}:(this.pageFilter.belongManagerId=Object(d["f"])().userId,e={deptKey:0}),this.getArea(e)},methods:{getArea:function(e){var t=this;u["a"].getDepartmentTree(e).then((function(e){t.treeData=e.data,t.pageFilter.deptId=e.data[0].key,t.refreshTable()})).catch((function(){}))},onSelected:function(e,t,a){e.length>0&&(this.pageFilter.deptId=e[0],this.refreshTable(),a.children.length<=0?this.isDisabled=!1:this.isDisabled=!0)},onQuery:function(){this.pageFilter.currentPage=1,this.refreshTable()},onReset:function(){this.pageFilter={currentPage:1,pageSize:10,deptId:this.pageFilter.deptId},this.refreshTable()},refreshTable:function(){var e=this;this.loading=!0,c["a"].get_reward_list(this.pageFilter).then((function(t){e.loading=!1,t.pageSize=t.size,t.currentPage=t.current;var a=t.records,n=t.pageSize,s=t.currentPage,r=t.total;e.pageData={records:a,pageSize:n,currentPage:s,total:r}})).catch((function(e){console.log(e)}))},onTableChange:function(e){this.pageFilter=Object(r["a"])(Object(r["a"])({},this.pageFilter),e),this.refreshTable()},initForm:function(){this.form={cardId:"",userName:"",userPoints:"",goodsName:"",exchangePoints:"",stock:"",exchangeNum:"",usePoints:"",userId:""}},goExchange:function(){Object.keys(this.selectedRow).length?(this.initForm(),this.visible=!0):this.$message.warning("请先选择一款兑换商品")},handleOk:function(){var e=this,t={exchangeQuantity:this.form.exchangeNum,goodsId:this.selectedRow.id,usePoints:this.form.usePoints,userCode:this.form.cardId,userId:this.form.userId,userName:this.form.userName,deptId:this.pageFilter.deptId};this.$refs.ruleForm.validate((function(a){a&&(e.spinning=!0,c["a"].exchange_goods(t).then((function(t){e.spinning=!1,e.$message.success(t),e.visible=!1,e.refreshTable()})).catch((function(){e.spinning=!1})))}))},exchangeSearch:function(){var e=this,t={id:this.selectedRow.id,userCode:this.form.cardId,deptId:this.pageFilter.deptId};this.spinning=!0,c["a"].query_user_and_goods(t).then((function(t){e.spinning=!1,null===t.userId?e.$message.warning("未查询到该人员"):(e.form.userName=t.userName,e.form.userPoints=t.userPoints,e.form.userId=t.userId),e.form.exchangePoints=t.exchangePoints,e.form.goodsName=t.goodsName,e.form.stock=t.stock})).catch((function(){e.spinning=!1}))},getRowData:function(e){this.selectedRow=e}}},m=h,g=(a("2584"),a("2877")),b=Object(g["a"])(m,n,s,!1,null,null,null);t["default"]=b.exports},cc78:function(e,t,a){},cf45:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"l",(function(){return s})),a.d(t,"f",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"j",(function(){return c})),a.d(t,"i",(function(){return l})),a.d(t,"k",(function(){return d})),a.d(t,"m",(function(){return u})),a.d(t,"o",(function(){return f})),a.d(t,"p",(function(){return p})),a.d(t,"n",(function(){return h})),a.d(t,"q",(function(){return m})),a.d(t,"c",(function(){return g})),a.d(t,"b",(function(){return b})),a.d(t,"d",(function(){return v})),a.d(t,"e",(function(){return x}));a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("1276");function n(e,t,a){var n=new RegExp(/^((\+?86)|(\(\+86\)))?1[3456789]\d{9}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function s(e,t,a){var n=new RegExp(/^([0-9]{3,4}-)?[0-9]{7,8}$/);t&&!n.test(t)?a("当前联系方式不符合规范!"):a()}function r(e,t,a){var n=new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);t&&!n.test(t)?a("当前身份证不符合规范!"):a()}function i(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("姓名不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("姓名长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function o(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,20}$/);t&&!n.test(t)?a("现在居住地不符合规范，包含中英文字母数字或下划线!"):t&&t.length<2?a("现在居住地长度不能小于1个字符"):a()}function c(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("毕业院校不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("毕业院校长度不能小于1个字符"):a()}function l(e,t,a){var n=new RegExp(/^[\u0391-\uFFE5A-Za-z]+$/);t&&!n.test(t)?a("专业不符合规范，只允许输入汉字和英文!"):t&&t.length<2?a("专业长度不能小于1个字符"):a()}function d(e,t,a){var n=new RegExp(/^([a-zA-Z0-9_-]){1,999}$/);t&&!n.test(t)?a("输入不规范，只允许输入字母、数字以及符号_-"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function u(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{}]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):a()}function f(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>20?a("输入长度不能大于20个字符"):a()}function p(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>50?a("输入长度不能大于50个字符"):a()}function h(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>100?a("输入长度不能大于100个字符"):a()}function m(e,t,a){var n=new RegExp(/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]|[()（）{},.，。/+]){1,999}$/);t&&!n.test(t)?a("输入不规范，不允许输入特殊字符！"):t&&t.length<2?a("输入长度不能小于1个字符"):t&&t.length>500?a("输入长度不能大于500个字符"):a()}function g(e,t){if(""!=e&&""!=t&&void 0!=e&&void 0!=t&&null!=e&&null!=t){var a=e.split("-"),n=t.split("-"),s=a[0]+"/"+a[1]+"/"+a[2],r=n[0]+"/"+n[1]+"/"+n[2];return s>=r}}function b(e,t){var a=new Date,n="";return n=e.replace(/-/g,"/"),n=new Date(n),n.valueOf()>a.valueOf()}function v(e,t,a){return Date.parse(e)>=Date.parse(t)||Date.parse(e)>=Date.parse(a)||Date.parse(t)>Date.parse(a)||Date.parse(a)==Date.parse(t)&&Date.parse(a)<Date.parse(e)||Date.parse(a)==Date.parse(t)&&Date.parse(t)<Date.parse(e)||Date.parse(a)>Date.parse(e)&&Date.parse(a)<Date.parse(t)}function x(e,t){var a=Date.parse(e),n=Date.parse(t);if(a>n)return 0;if(a==n)return 1;var s=(n-a)/864e5;return s}},d41e:function(e,t,a){},d99e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-wrapper"},[a("div",[a("a-row",{attrs:{gutter:56}},[e._t("default"),a("buttonBox",{style:e.advanced?{float:"right"}:{},on:{toggleAdvanced:e.toggleAdvanced,query:e.query,reset:e.reset}})],2)],1)])},s=[],r=(a("a9e3"),a("5530")),i={name:"SearchListItem",props:{label:{type:String,default:"",required:!1}},inject:{col:{type:Number}},render:function(){var e=arguments[0];return e("a-col",{class:"item-box",props:Object(r["a"])({},c[this.col])},[e("div",{class:"y-search-item"},[e("div",{class:"y-search-label"},[this.$props.label]),e("div",{class:"y-search-content"},[this.$slots.default])])])}},o={name:"buttonBox",data:function(){return{advanced:!1}},inject:{col:{type:Number}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.$emit("toggleAdvanced")},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")}},render:function(){var e=arguments[0];return e("a-col",{props:Object(r["a"])({},c[this.col])},[e("span",{class:"table-page-search-submitButtons",style:"float: 'left', overflow: 'hidden'"},[e("a-button",{attrs:{type:"primary"},on:{click:this.query}},["查询"]),e("a-button",{style:"margin-left: 8px",on:{click:this.reset}},["重置"]),e("a",{attrs:{id:"advance-btn"},style:"margin-left: 8px",on:{click:this.toggleAdvanced}},[this.advanced?"收起":"展开",e("a-icon",{props:Object(r["a"])({},{type:this.advanced?"up":"down"})})])])])}},c={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{md:24,lg:12,xl:8,xxl:6}},l={name:"SearchForm",Item:i,components:{buttonBox:o},props:{col:{type:Number,required:!1,default:6}},provide:function(){return{col:this.col>4?4:this.col}},data:function(){return{advanced:!1,toplist:[],bottomList:[]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced,this.displayItem()},query:function(){this.$emit("query")},reset:function(){this.$emit("reset")},displayItem:function(){var e=this.$slots.default,t=this.col,a=e.length;if(a<t)document.getElementById("advance-btn").style.display="none";else for(var n=t-1;n<a;n++)e[n].elm.style.display=this.advanced?"":"none"}},mounted:function(){this.displayItem()}},d=l,u=(a("8cc5"),a("2877")),f=Object(u["a"])(d,n,s,!1,null,"359e9f37",null),p=f.exports;t["a"]=p},dfd7:function(e,t,a){}}]);