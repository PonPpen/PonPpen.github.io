(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67f45a9a"],{1774:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"转移执行地"},on:{ok:e.okHandler}},[a("div",{staticClass:"waitChangePersonnel"},[a("span",[e._v("待变更人员：")]),e._l(e.nameList,(function(t,n){return a("div",{key:n,staticClass:"waitChangePersonnelName"},[a("a-tag",{attrs:{closable:0!==n},on:{close:function(){return e.deleteName(t)}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2),a("div",{staticClass:"waitChangePersonnel"},[a("span",[e._v("执行地选择：")]),a("a-cascader",{staticStyle:{width:"70%"},attrs:{"change-on-select":"",allowClear:"",options:e.regionOptions,placeholder:"选择省市县",AUTOCOMPLETE:"off"},on:{change:e.onCascaderChange}})],1)])},i=[],s=(a("4de4"),a("4160"),a("a15b"),a("b0c0"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("86da")),r=a("385c"),l={components:{Modal:s["a"]},data:function(){return{formData:{},regionOptions:[],nameList:[],levelData:""}},created:function(){},methods:{show:function(e,t){var a=this,n=t;this.$refs.modal.show(),this.levelData="",this.nameList=Object.assign([],[]),this.regionOptions=[],this.formData={},n.forEach((function(e){a.nameList.push({name:e.realName,id:e.id})})),e[0].children.forEach((function(e){var t={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var a={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var t={value:e.extendData,label:e.title,children:[]};e.children.forEach((function(e){var a={value:e.extendData,label:e.title};t.children.push(a)})),a.children.push(t)})),t.children.push(a)})),a.regionOptions.push(t)}))},onCascaderChange:function(e,t){var a="";t.forEach((function(e){a+=e.label+"-"})),a=a.substr(0,a.length-1),this.formData.companyAddress=a,this.levelData=e[e.length-1]},deleteName:function(e){this.nameList=this.nameList.filter((function(t){return t.name!==e.name}))},okHandler:function(){var e=this;if(""!=this.levelData){var t=[];this.nameList.forEach((function(e){t.push(e.id)}));var a=this.levelData.split(",").filter((function(e){return e&&e.trim()})),n={ids:t,level:a.join(","),departmentId:a[a.length-1]};Object(r["q"])(n).then((function(t){e.$emit("transferPlaceRefresh"),e.$message.success(t),e.$refs.modal.close()})).catch((function(){}))}else this.$message.error("请先选择执行地")},changePrompt:function(e){this.$error({title:"不可操作提示",content:e})}}},o=l,c=(a("ad17"),a("2877")),h=Object(c["a"])(o,n,i,!1,null,"3ce9e518",null);t["default"]=h.exports},a843:function(e,t,a){},ad17:function(e,t,a){"use strict";var n=a("a843"),i=a.n(n);i.a}}]);