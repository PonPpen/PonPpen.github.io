(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91fdc596"],{"0fe3":function(e,t,a){"use strict";var r=a("ddc8"),n=a.n(r);n.a},"2c68":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Drawer",{ref:"drawer",staticClass:"Nodedrawer",attrs:{title:"积分详情",width:900}},[a("div",{staticClass:"con-content"},[a("div",{staticClass:"con-content-list"},[a("CustomTable",{attrs:{showAlert:!1,columns:e.columns,dataSource:e.pageData,showSelection:!1,bordered:"",loading:e.loading},on:{change:e.onTableChange},scopedSlots:e._u([{key:"order",fn:function(t,a,r){return[e._v(" "+e._s(r+1)+" ")]}}])})],1)])])},n=[],i=a("b1fe"),o=a("547b"),l={name:"controlDetail",components:{Drawer:i["a"]},props:{data:{type:Object},title:{type:String}},data:function(){var e=this;return{id:"",from:{},loading:!1,pageFilter:{currentPage:1,pageSize:10,userId:""},pageData:[],columns:[{title:"序号",dataIndex:"order",scopedSlots:{customRender:"order"},customRender:function(t,a,r){return"".concat((e.pageFilter.currentPage-1)*e.pageFilter.pageSize+(r+1))}},{title:"明细",dataIndex:"detail"},{title:"积分数",dataIndex:"score"},{title:"获取/使用时间",dataIndex:"time"}]}},mounted:function(){},created:function(){this.getDateArr()},methods:{initFrom:function(e){this.pageFilter.userId=e.userId,this.pageFilter.currentPage=1,this.refreshTable()},onTableChange:function(e){this.pageFilter.currentPage=e.currentPage,this.pageFilter.pageSize=e.pageSize,this.refreshTable()},refreshTable:function(){this.loading=!0,this.getControllerdetail1()},getControllerdetail1:function(){var e=this;o["a"].getAwarddetail(this.pageFilter).then((function(t){e.loading=!1,e.pageData=t.data,console.log("数据",e.pageData)})).catch((function(){}))}}},c=l,s=(a("0fe3"),a("2877")),d=Object(s["a"])(c,r,n,!1,null,"9e390bf2",null);t["default"]=d.exports},"547b":function(e,t,a){"use strict";var r=a("a27e");t["a"]={getControllerInfo:function(e){return Object(r["a"])({url:"/integral-service/control/integral/info/pc",method:"GET",params:e})},getControllerdetail:function(e){return Object(r["a"])({url:"/integral-service/control/integral/detail/pc",method:"GET",params:e})},getCreditInfo:function(e){return Object(r["a"])({url:"/integral-service/credit/integral/info/pc",method:"GET",params:e})},getCreditdetail:function(e){return Object(r["a"])({url:"/integral-service/credit/integral/detail/pc",method:"GET",params:e})},getAwardInfo:function(e){return Object(r["a"])({url:"/integral-service/award/integral/info/pc",method:"GET",params:e})},getAwarddetail:function(e){return Object(r["a"])({url:"/integral-service/award/integral/detail/pc",method:"GET",params:e})}}},b1fe:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-drawer",{attrs:{title:e.title,width:e.width,maskClosable:!0,placement:"right",closable:!0,wrapClassName:"dwBox",visible:e.visible},on:{close:e.onClose}},[e._t("default")],2)],1)},n=[],i=(a("a9e3"),{name:"Drawer",props:{title:{type:String,default:"标题"},width:{type:Number,default:640}},data:function(){return{visible:!1}},created:function(){},mounted:function(){},methods:{show:function(){this.visible=!0},onClose:function(){this.visible=!1}}}),o=i,l=a("2877"),c=Object(l["a"])(o,r,n,!1,null,null,null);t["a"]=c.exports},ddc8:function(e,t,a){}}]);