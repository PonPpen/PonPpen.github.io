webpackJsonp([28],{"/7Iv":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("lC5x"),s=n.n(a),r=n("J0Oq"),i=n.n(r),o=n("o01X"),A=n("wSez"),l=n("y5xs"),m=n("0xDb"),c={data:function(){return{agencysInfo:this.$route.params.agencysInfo,messageList:[],tab:1}},components:{navReturn:o.a},created:function(){var e=this.$route.query.tab;void 0===e||2!==Number(e)&&3!==Number(e)||(this.tab=e),this.getStudentMessage()},computed:{curList:function(){var e=[];switch(this.tab){case 2:this.messageList.forEach(function(t){0===Number(t.is_read)&&e.push(t)});break;case 3:this.messageList.forEach(function(t){1===Number(t.is_read)&&e.push(t)});break;default:e=this.messageList}return e},unReadNum:function(){var e=0;return this.messageList.forEach(function(t){0===Number(t.is_read)&&e++}),e}},methods:{getStudentMessage:function(){var e=i()(s.a.mark(function e(){var t,n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(m.c)("userInfo"),n=2,null!==t&&(t=JSON.parse(t),n=2===Number(t.role)?1:2),A.Indicator.open(),e.next=6,Object(l.m)(n,this.agencysInfo.id);case 6:a=e.sent,A.Indicator.close(),0===a.errCode?null!==a.data?this.messageList=a.data:Object(A.Toast)("用户消息列表为空"):10003===a.errCode||10005===a.errCode?this.tokenOutOfDate():Object(A.Toast)("获取用户消息列表失败");case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("nav-return",{attrs:{title:"我的消息",goBackToLast:!1,leavePath:"/studentCenter"}},[e._v(">")]),e._v(" "),n("div",{staticClass:"nav-tab"},[n("p",{class:1===e.tab?"nav-tab-focus":"",on:{click:function(t){e.tab=1}}},[e._v("全部")]),e._v(" "),n("p",{class:2===e.tab?"nav-tab-focus":"",on:{click:function(t){e.tab=2}}},[e._v("未读"),e.unReadNum>0?n("span",{staticClass:"dot"}):e._e()]),e._v(" "),n("p",{class:3===e.tab?"nav-tab-focus":"",on:{click:function(t){e.tab=3}}},[e._v("已读")])]),e._v(" "),n("div",{staticClass:"message-list"},e._l(e.curList,function(t){return n("div",{staticClass:"message-item",on:{click:function(n){e.goToDetail("/myMessage",{messageId:t.id})}}},[n("div",{staticClass:"dot-wrap"},[1===Number(t.is_read)?n("p",{staticClass:"dot"}):n("p",{staticClass:"dot dot-red"})]),e._v(" "),n("div",{staticClass:"message-content"},[n("p",{staticClass:"title-and-date"},[n("span",{staticClass:"title"},[e._v(e._s(e._f("cutString")(t.title,35)))]),e._v(" "),n("span",{staticClass:"date"},[e._v(e._s(e._f("timeToDate")(t.created_at,!1,!0,!0)))])]),e._v(" "),n("p",{staticClass:"content"},[e._v(e._s(e._f("cutString")(e._f("deleteHref")(t.content),70)))])])])}))],1)},staticRenderFns:[]};var B=n("C7Lr")(c,d,!1,function(e){n("UoXN")},"data-v-47713e41",null);t.default=B.exports},UoXN:function(e,t,n){var a=n("gzpT");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("FIqI")("79813685",a,!0,{})},gzpT:function(e,t,n){(e.exports=n("UTlt")(!0)).push([e.i,"\n.wrap .nav-tab[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 10rem;\n  height: 1.173333rem;\n  border: 0.026667rem solid #eeeeee;\n  background-color: #ffffff;\n}\n.wrap .nav-tab p[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 1.173333rem;\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #666666;\n  cursor: pointer;\n  position: relative;\n}\n.wrap .nav-tab p .dot[data-v-47713e41] {\n  width: 0.213333rem;\n  height: 0.213333rem;\n  background-color: #fa4343;\n  border-radius: 50%;\n  position: absolute;\n  top: 0.28rem;\n  right: 1rem;\n}\n.wrap .nav-tab .nav-tab-focus[data-v-47713e41] {\n  color: #02b4a3;\n  border-bottom: 0.053333rem solid #02b4a3;\n}\n.wrap .message-list[data-v-47713e41] {\n  margin-top: 0.266667rem;\n}\n.wrap .message-list .message-item[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 10rem;\n  background-color: #ffffff;\n  cursor: pointer;\n}\n.wrap .message-list .message-item .dot-wrap[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 1.2rem;\n}\n.wrap .message-list .message-item .dot-wrap .dot[data-v-47713e41] {\n  width: 0.213333rem;\n  height: 0.213333rem;\n  background-color: #bdbdbd;\n  border-radius: 50%;\n  margin-top: 0.506667rem;\n}\n.wrap .message-list .message-item .dot-wrap .dot-red[data-v-47713e41] {\n  background-color: #fa4343;\n}\n.wrap .message-list .message-item .message-content[data-v-47713e41] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-bottom: 0.026667rem solid #eeeeee;\n  padding: 0.4rem 0.506667rem 0.4rem 0;\n}\n.wrap .message-list .message-item .message-content .title-and-date[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.wrap .message-list .message-item .message-content .title-and-date .title[data-v-47713e41] {\n  font-size: 0.4rem;\n  color: #333333;\n}\n.wrap .message-list .message-item .message-content .title-and-date .date[data-v-47713e41] {\n  font-size: 0.293333rem;\n  color: #999999;\n}\n.wrap .message-list .message-item .message-content .content[data-v-47713e41] {\n  width: 8.08rem;\n  font-size: 0.373333rem;\n  color: #999999;\n  line-height: 0.56rem;\n  margin-top: 0.28rem;\n}","",{version:3,sources:["D:/Vue/palm_h5/src/views/student/messageList.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,oBAAoB;EACpB,kCAAkC;EAClC,0BAA0B;CAC3B;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,oBAAoB;MAChB,YAAY;UACR,QAAQ;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;CACb;AACD;EACE,eAAe;EACf,yCAAyC;CAC1C;AACD;EACE,wBAAwB;CACzB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,mBAAmB;EACnB,wBAAwB;CACzB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;EAChB,yCAAyC;EACzC,qCAAqC;CACtC;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,uBAAuB;EACvB,eAAe;CAChB;AACD;EACE,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,qBAAqB;EACrB,oBAAoB;CACrB",file:"messageList.vue",sourcesContent:["\n.wrap .nav-tab[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 10rem;\n  height: 1.173333rem;\n  border: 0.026667rem solid #eeeeee;\n  background-color: #ffffff;\n}\n.wrap .nav-tab p[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 1.173333rem;\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #666666;\n  cursor: pointer;\n  position: relative;\n}\n.wrap .nav-tab p .dot[data-v-47713e41] {\n  width: 0.213333rem;\n  height: 0.213333rem;\n  background-color: #fa4343;\n  border-radius: 50%;\n  position: absolute;\n  top: 0.28rem;\n  right: 1rem;\n}\n.wrap .nav-tab .nav-tab-focus[data-v-47713e41] {\n  color: #02b4a3;\n  border-bottom: 0.053333rem solid #02b4a3;\n}\n.wrap .message-list[data-v-47713e41] {\n  margin-top: 0.266667rem;\n}\n.wrap .message-list .message-item[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 10rem;\n  background-color: #ffffff;\n  cursor: pointer;\n}\n.wrap .message-list .message-item .dot-wrap[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 1.2rem;\n}\n.wrap .message-list .message-item .dot-wrap .dot[data-v-47713e41] {\n  width: 0.213333rem;\n  height: 0.213333rem;\n  background-color: #bdbdbd;\n  border-radius: 50%;\n  margin-top: 0.506667rem;\n}\n.wrap .message-list .message-item .dot-wrap .dot-red[data-v-47713e41] {\n  background-color: #fa4343;\n}\n.wrap .message-list .message-item .message-content[data-v-47713e41] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-bottom: 0.026667rem solid #eeeeee;\n  padding: 0.4rem 0.506667rem 0.4rem 0;\n}\n.wrap .message-list .message-item .message-content .title-and-date[data-v-47713e41] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.wrap .message-list .message-item .message-content .title-and-date .title[data-v-47713e41] {\n  font-size: 0.4rem;\n  color: #333333;\n}\n.wrap .message-list .message-item .message-content .title-and-date .date[data-v-47713e41] {\n  font-size: 0.293333rem;\n  color: #999999;\n}\n.wrap .message-list .message-item .message-content .content[data-v-47713e41] {\n  width: 8.08rem;\n  font-size: 0.373333rem;\n  color: #999999;\n  line-height: 0.56rem;\n  margin-top: 0.28rem;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=28.55916f4c8d2fc98abee5.js.map