(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a58989e"],{"027f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Drawer",{ref:"drawer",attrs:{title:"用户详情"}},[a("ul",e._l(e.userDetailList,(function(t,n){return a("li",{key:"userDetail-"+n},[a("div",{staticClass:"detail-label"},[e._v(e._s(t.name))]),e._v(" : "),a("div",{staticClass:"detail-content"},[e._v(e._s(t.value))])])})),0)])},i=[],s=(a("4de4"),a("a15b"),a("b0c0"),a("5530")),r=a("b1fe"),l=a("2f62"),o=[{name:"用户账号",code:"username"},{name:"用户编码",code:"userCode"},{name:"用户名",code:"name"},{name:"联系电话",code:"phone"},{name:"主属部门",code:"mainDeptId"},{name:"附属部门",code:"deptIds"},{name:"主属角色",code:"mainRoleIds"},{name:"职位名称",code:"jobName"},{name:"创建时间",code:"createTime"},{name:"状态",code:"status"}],u=function e(t,a){for(var n="",i=0;i<a.length;i++){if(a[i].key==t){n=a[i].title;break}a[i].children.length>0&&e(t,a[i].children)}return n},c={name:"UserDetail",components:{Drawer:r["a"]},data:function(){return{userInfo:{},userDetailList:[]}},props:{},watch:{userInfo:function(e){this.onGetDetail(e.userId)},detailData:function(e){this.getDetail(e)}},computed:Object(s["a"])({},Object(l["d"])({detailData:function(e){return e.SysUser.detailData},treeData:function(e){return e.SysDepartment.treeData}})),methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])({onGetDetail:"SysUser/onDetail"})),{},{show:function(){this.$refs.drawer.show()},getDetail:function(e){var t=this,a=e,n=[],i=function(e){var i=o.filter((function(t){return t.code==e}));if(i.length>0){var s=i[0].name;if("状态"==s){var r=0==a[e]?"正常":"停用";n.push({name:s,value:r})}else if("创建时间"==s){var l=t.moment(a.createTime).format("YYYY-MM-DD hh:mm:ss");n.push({name:s,value:l})}else if("mainDeptId"==e)0==a.mainDeptId?n.push({name:s,value:t.treeData[0].title}):n.push({name:s,value:u(a.mainDeptId,t.treeData)});else if("deptIds"==e)if(a.deptIds.length>0&&0==a.deptIds[0])n.push({name:s,value:t.treeData[0].title});else{for(var c=[],d=0;d<a.deptIds.length;d++){var f=u(a.deptIds[d],t.treeData);c.push(f)}n.push({name:s,value:c.join(",")})}else n.push({name:s,value:a[e]})}};for(var s in a)i(s);this.userDetailList=n}})},d=c,f=(a("1739"),a("2877")),m=Object(f["a"])(d,n,i,!1,null,"b5e1bc6c",null);t["default"]=m.exports},1739:function(e,t,a){"use strict";var n=a("1c05"),i=a.n(n);i.a},"1c05":function(e,t,a){},b1fe:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-drawer",{attrs:{title:e.title,width:e.width,maskClosable:!0,placement:"right",closable:!0,wrapClassName:"dwBox",visible:e.visible},on:{close:e.onClose}},[e._t("default")],2)],1)},i=[],s=(a("a9e3"),{name:"Drawer",props:{title:{type:String,default:"标题"},width:{type:Number,default:640}},data:function(){return{visible:!1}},created:function(){},mounted:function(){},methods:{show:function(){this.visible=!0},onClose:function(){this.visible=!1}}}),r=s,l=a("2877"),o=Object(l["a"])(r,n,i,!1,null,null,null);t["a"]=o.exports}}]);