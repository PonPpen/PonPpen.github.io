(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a768"],{bc2c:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("Header",{attrs:{title:"详情"}}),l("videoComponets",{attrs:{src:n("468a"),poster:n("d8ca")}}),l("contComponents")],1)},i=[],o=n("cff1"),a=n("d242"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return n("van-cell",{key:e,attrs:{icon:"location-o",title:t.title,value:t.value,label:t.label,"is-link":""}})})),1)},c=[],r={data:function(){return{list:[],loading:!1,finished:!1}},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var e=0;e<10;e++)t.list.push({title:"标题"+(t.list.length+1),value:"内容"+(t.list.length+1),label:"描述信息"+(t.list.length+1)});t.loading=!1,t.list.length>=40&&(t.finished=!0)}),500)}}},u=r,d=n("2877"),f=Object(d["a"])(u,s,c,!1,null,"7a027698",null),h=f.exports,p=n("6850"),v={components:{Header:o["a"],videoComponets:a["a"],contComponents:h},data:function(){return{active:1,list:[]}},created:function(){this.getData()},methods:{getData:function(){for(var t=0;t<10;t++){var e=this.list.length+1;this.list.push({title:"标题"+e,src:e/2===Math.floor(e/2)?n("468a"):n("2ecb"),poster:e/2===Math.floor(e/2)?n("8bfc"):n("d8ca")})}},getopenUrlByBrowser:function(t){Object(p["h"])(t,!0)}}},g=v,b=Object(d["a"])(g,l,i,!1,null,null,null);e["default"]=b.exports}}]);