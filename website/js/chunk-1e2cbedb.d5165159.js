(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e2cbedb"],{"23bc":function(t,e,a){"use strict";var n=a("9340"),s=a.n(n);s.a},5167:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Drawer",{ref:"drawer",staticClass:"Nodedrawer",attrs:{title:"申请信息",width:900}},[a("div",{staticClass:"con-content"},[a("div",{staticClass:"con-content-top",attrs:{gutter:[16,16]}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:6}},[a("div",{staticClass:"gutter-box"},[a("a-input",{attrs:{placeholder:"2020"},model:{value:t.yearInputVal,callback:function(e){t.yearInputVal=e},expression:"yearInputVal"}})],1)]),a("a-col",{staticClass:"gutter-row",attrs:{span:6}},[a("div",{staticClass:"gutter-box"},[a("a-input",{attrs:{placeholder:"6"},model:{value:t.monthInputVal,callback:function(e){t.monthInputVal=e},expression:"monthInputVal"}})],1)])],1)],1),a("div",{staticClass:"con-content-list"},[a("CustomTable",{attrs:{showAlert:!1,columns:t.columns,dataSource:t.tableData,showSelection:!1,bordered:""}})],1)])])},s=[],o=a("5530"),l=a("2f62"),i=a("b1fe"),r={name:"controlDetail",components:{Drawer:i["a"]},props:{data:{type:Object},title:{type:String}},data:function(){return{id:"",from:{},yearInputVal:"",monthInputVal:"",columns:[{title:"序号",dataIndex:"num"},{title:"积分类型",dataIndex:"name"},{title:"积分项名称",dataIndex:"sex"},{title:"积分数",dataIndex:"note"},{title:"计算月份",dataIndex:"inte"}],tableData:[{key:0,num:"01",name:"张晓飞",sex:"男",note:"460022198403101018",inte:"--"},{key:0,num:"01",name:"张晓飞",sex:"男",note:"460022198403101018",inte:"--"},{key:0,num:"01",name:"张晓飞",sex:"男",note:"460022198403101018",inte:"--"},{key:0,num:"01",name:"张晓飞",sex:"男",note:"460022198403101018",inte:"--"},{key:0,num:"01",name:"张晓飞",sex:"男",note:"460022198403101018",inte:"--"}]}},mounted:function(){},computed:Object(o["a"])({},Object(l["d"])({loading:function(t){return t.SysUser.loading}})),methods:{},watch:{}},c=r,u=(a("23bc"),a("2877")),d=Object(u["a"])(c,n,s,!1,null,"5fa1ae82",null);e["default"]=d.exports},9340:function(t,e,a){},b1fe:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-drawer",{attrs:{title:t.title,width:t.width,maskClosable:!0,placement:"right",closable:!0,wrapClassName:"dwBox",visible:t.visible},on:{close:t.onClose}},[t._t("default")],2)],1)},s=[],o=(a("a9e3"),{name:"Drawer",props:{title:{type:String,default:"标题"},width:{type:Number,default:640}},data:function(){return{visible:!1}},created:function(){},mounted:function(){},methods:{show:function(){this.visible=!0},onClose:function(){this.visible=!1}}}),l=o,i=a("2877"),r=Object(i["a"])(l,n,s,!1,null,null,null);e["a"]=r.exports}}]);