(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adf47f9c"],{"068f":function(e,t,a){},6955:function(e,t,a){"use strict";var r=a("068f"),s=a.n(r);s.a},7174:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree-select",{staticStyle:{width:"100%"},attrs:{showSearch:"",treeCheckable:e.mulSelect,treeData:e.treeData,dropdownStyle:{maxHeight:"400px",overflow:"auto"},placeholder:"请选择",allowClear:"",disabled:e.disabled,treeDefaultExpandAll:e.treeDefaultExpandAll,treeDefaultExpandedKeys:e.defaultExpandedKeys},on:{change:e.change},model:{value:e.selectDep,callback:function(t){e.selectDep=t},expression:"selectDep"}})},s=[],n=(a("4160"),a("c975"),a("a9e3"),a("159b"),function e(t){for(var a=0;a<t.length;a++)t[a].value=t[a].key,t[a].status&&(t[a].disabled=!0),t[a].children.length>0&&e(t[a].children,t[a].key,t[a].title);return t}),l={name:"depTreeSelect",data:function(){return{treeData:[],selectDep:"",defaultExpandedKeys:[]}},props:{mulSelect:{type:Boolean,default:!1,required:!1},disabledList:{type:Array,default:function(){return[]},required:!1},selectDepData:{type:[Number,String,Array],default:null,required:!1},disabled:{type:Boolean,default:!1,required:!1},treeDefaultExpandAll:{type:Boolean,default:!1}},watch:{selectDepData:{handler:function(e,t){e&&(this.selectDep=e,this.defaultExpandedKeys.push(e))},immediate:!0}},methods:{change:function(e){this.$emit("getValue",e)},clear:function(){}},created:function(){var e=this,t=this.$store.state.SysDepartment.treeData;t=n(t),t.length>0&&t.forEach((function(t){t.children&&t.children.length>0&&e.defaultExpandedKeys.push(t.children[0].key)})),this.treeData=t}},i=l,o=a("2877"),u=Object(o["a"])(i,r,s,!1,null,null,null);t["a"]=u.exports},7861:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"新增用户",visible:e.visible},on:{ok:e.submit,close:e.close}},[a("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}}},[a("div",{staticClass:"form-title"},[e._v("账号信息")]),a("a-form-item",e._b({attrs:{label:"用户编号"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userCode",{rules:[{required:!1,message:"Please input your note!"}]}],expression:"['userCode', { rules: [{ required: false, message: 'Please input your note!' }] }]"}]})],1),a("a-form-item",e._b({attrs:{label:"用户密码"}},"a-form-item",e.formItemLayout,!1),[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your note!"}]}],expression:"['password', { rules: [{ required: true, message: 'Please input your note!' }] }]"}],attrs:{type:"password"}})],1),a("a-form-item",e._b({attrs:{label:"确认新密码"}},"a-form-item",e.formItemLayout,!1),[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password1",{rules:[{required:!0,message:"请输入确认新密码"}],validateTrigger:"blur"}],expression:"[\n          'password1',\n          {\n            rules: [{ required: true, message: '请输入确认新密码' }],\n            validateTrigger: 'blur',\n          },\n        ]"}],staticClass:"inputPassword",attrs:{autocomplete:"false",placeholder:"请输入确认新密码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",e._b({attrs:{label:"用户姓名","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入用户姓名"}]}],expression:"[\n          'name',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请输入用户姓名',\n              },\n            ],\n          },\n        ]"}]})],1),a("a-form-item",e._b({attrs:{label:"联系方式","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"请输入用户联系方式"},{validator:e.phoneValidata}]}],expression:"[\n          'phone',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请输入用户联系方式',\n              },\n              {\n                validator: phoneValidata,\n              },\n            ],\n          },\n        ]"}]})],1),a("div",{staticClass:"form-title"},[e._v("组织关系")]),a("a-form-item",e._b({attrs:{label:"主属部门","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("DepTreeSelect",{directives:[{name:"decorator",rawName:"v-decorator",value:["mainDeptId",{initialValue:e.currentDep,rules:[{required:!0,message:"请输入用户主属部门"}]}],expression:"[\n          'mainDeptId',\n          {\n            initialValue: currentDep,\n            rules: [\n              {\n                required: true,\n                message: '请输入用户主属部门',\n              },\n            ],\n          },\n        ]"}],ref:"mainDep",on:{getValue:e.getMainDep}})],1),a("a-form-item",e._b({attrs:{label:"附属部门","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("DepMulTreeSelect",{directives:[{name:"decorator",rawName:"v-decorator",value:["deptIds",{rules:[{required:!1}]}],expression:"[\n          'deptIds',\n          {\n            rules: [\n              {\n                required: false,\n              },\n            ],\n          },\n        ]"}],ref:"subDep",on:{getValue:e.getDep}})],1),a("a-form-item",e._b({attrs:{label:"职位","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobName",{rules:[{required:!1,message:"请输入用户职位"}]}],expression:"[\n          'jobName',\n          {\n            rules: [\n              {\n                required: false,\n                message: '请输入用户职位',\n              },\n            ],\n          },\n        ]"}]})],1)],1)],1)},s=[],n=(a("4d63"),a("ac1f"),a("25f0"),a("5530")),l=a("2f62"),i=a("7174"),o=a("e4c7"),u=a("86da"),d={name:"Department",components:{Modal:u["a"],DepTreeSelect:i["a"],DepMulTreeSelect:o["a"]},data:function(){return{currentDep:"",mainDep:"",dep:"",visible:!1,autoCompleteResult:[],form:this.$form.createForm(this),formItemLayout:{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}}},props:{title:{type:String,default:"",required:!1}},watch:{visible:function(e){this.$refs.modal.visible=e},currentDep:function(e){this.$refs.mainDep.selectDep=e}},created:function(){},mounted:function(){},computed:{},methods:Object(n["a"])(Object(n["a"])({getMainDep:function(e){this.mainDep=e},getDep:function(e){this.dep=e}},Object(l["b"])({addUser:"SysUser/onAdd"})),{},{phoneValidata:function(e,t,a){var r=new RegExp(/^[0-9]+$/);t&&!r.test(t)?a("当前联系方式不符合规范，请重新填写!"):a()},close:function(){this.mainDep="",this.dep="",this.form.resetFields(),this.visible=!1,this.$refs.mainDep.clear(),this.$refs.subDep.clear()},submit:function(){var e=this,t=this,a=this.form.getFieldsValue();a.mainDeptId=+this.mainDep;for(var r=this.dep,s=[],n=0;n<r.length;n++)""!=r[n]&&void 0!=r&&s.push(+r[n]);a.deptIds=s,this.form.setFieldsValue(a),this.form.validateFieldsAndScroll((function(a,r){if(a)e.pop.loading=!1;else{if(r.password!==r.password1)return e.$message.error("新密码和确认密码不匹配");e.addUser(r).then((function(a){null!==a&&(t.form.resetFields(),e.$message.success("用户新增成功"),e.$emit("addSuccess"),e.close())}))}}))}})},c=d,p=(a("6955"),a("2877")),m=Object(p["a"])(c,r,s,!1,null,"4e5afe4e",null);t["default"]=m.exports},e4c7:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree-select",{staticStyle:{width:"100%"},attrs:{showSearch:"",treeCheckable:!0,treeData:e.treeData,dropdownStyle:{maxHeight:"400px",overflow:"auto"},placeholder:"请选择",allowClear:"",disabled:e.disabled,treeDefaultExpandAll:e.treeDefaultExpandAll,treeDefaultExpandedKeys:e.defaultExpandedKeys},on:{change:e.change},model:{value:e.selectDep,callback:function(t){e.selectDep=t},expression:"selectDep"}})},s=[],n=(a("4160"),a("c975"),a("159b"),function e(t){for(var a=0;a<t.length;a++)t[a].value=t[a].key,t[a].children.length>0&&e(t[a].children,t[a].key,t[a].title);return t}),l={name:"depTreeSelect",data:function(){return{treeData:[],selectDep:[],defaultExpandedKeys:[]}},props:{disabledList:{type:Array,default:function(){return[]},required:!1},disabled:{type:Boolean,default:!1,required:!1},treeDefaultExpandAll:{type:Boolean,default:!1}},watch:{selectDep:function(e){var t=this.$store.state.SysDepartment.treeData;t=n(t),t.length>0&&t.forEach((function(e){return e.disabled=!0})),this.treeData=t,0===e&&(this.selectDep=t[0].key)}},methods:{change:function(e){this.$emit("getValue",e)},clear:function(){this.selectDep=null}},created:function(){var e=this,t=this.$store.state.SysDepartment.treeData;console.log(t),t=n(t),t.length>0&&t.forEach((function(t){t.children&&t.children.length>0&&(t.disabled=!0,e.defaultExpandedKeys.push(t.children[0].key))})),this.treeData=t}},i=l,o=a("2877"),u=Object(o["a"])(i,r,s,!1,null,null,null);t["a"]=u.exports}}]);