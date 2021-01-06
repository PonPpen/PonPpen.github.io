(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a71fc58"],{"140a":function(t,e,n){"use strict";var a=n("5c97"),r=n.n(a);r.a},"32b0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"map"}},[n("div",{staticClass:"ol-popup",attrs:{id:"popup"}},[n("a",{staticClass:"ol-popup-closer",attrs:{href:"#",id:"popup-closer"}}),n("div",{staticClass:"popup-content",attrs:{id:"popup-content"}})])])}],i=(n("4160"),n("d81d"),n("159b"),n("5530")),o=(n("5bc0"),n("a2c7")),s=n("5eee"),c=n("4cdf"),p=n("9c78"),l=n("480c"),u=n("f2f0"),h=n("5831"),d=n("3e6b"),f=n("f403"),m=n("7a09"),w=n("256f"),g=n("0710"),v=n("6c77"),b=n("6cbff"),A=n("8295"),y=n("83a6"),P=n("8682"),C=n("c1df"),L=n.n(C),E=n("2f62"),O={name:"MapPath1",data:function(){return{map:null,view:null,iconImg:{red:n("4533"),orange:n("36fe"),blue:n("4b3e"),yellow:n("db2d"),start:n("d826"),middle:n("b56c"),end:n("c320")},overlay:null,lineVector:null,piontVector:null,piontArr:[],siteArr:[],siteNumberArr:[],trackTimeArr:[],phoneArr:[],orderArr:[],lineColor:[[255,62,125,1],[69,130,255,1],[0,191,92,1],[255,110,27,1],[213,65,226,1]],isPopupShow:!1,infoObj:{}}},mounted:function(){this.view=new o["a"]({projection:"EPSG:4326",center:[110.320042,20.035132],zoom:12,minZoom:6}),this.map=new s["a"]({target:"map",view:this.view}),this.map.addLayer(new p["a"]({layers:this.layerData()})),this.addPopup()},computed:Object(i["a"])({},Object(E["d"])({travelObj:function(t){return t.SysPersonnel.travelObj}})),methods:{addPopup:function(){var t=document.getElementById("popup"),e=document.getElementById("popup-closer"),n=document.getElementById("popup-content");this.overlay=new g["a"]({element:t,autoPan:!0,autoPanAnimation:{duration:250}}),this.map.addOverlay(this.overlay);var a=this;this.map.on("click",(function(t){var r=a.map.forEachFeatureAtPixel(t.pixel,(function(t){return t}));if(r){a.isPopupShow=!0;var i=r.getProperties().attribute.infoIndex;Object(w["n"])(t.coordinate,"EPSG:3857","EPSG:4326");n.innerHTML='\n\t\t    <div class="title">\n\t\t\t\t<p>'+a.travelObj.userName+"（轨迹点"+a.orderArr[i]+'）</p>\n          <img src="'+a.travelObj.iconURL+'" alt="" />\n\t\t\t</div>\n\t\t\t<div class="content">\n\t\t\t\t<p>当前定位点数目：<span>'+a.siteNumberArr[i]+"</span></p>\n\t\t\t\t<p>定位时间：<span>"+L()(parseInt(1e3*a.trackTimeArr[i])).format("YYYY-MM-DD HH:mm:ss")+"</span></p>\n\t\t\t\t<p>定位地点：<span>"+a.siteArr[i]+"</span></p>\n\t\t\t</div>",a.overlay.setPosition(t.coordinate)}else a.overlay.setPosition(void 0),e.blur()}))},layerData:function(){var t=[];return t.push(new l["a"]({source:new u["a"](this.$globalConfig.mapConfig.PROPL_ZW)})),t.push(new l["a"]({source:new u["a"](this.$globalConfig.mapConfig.VEGPL_ZW)})),t.push(new l["a"]({source:new u["a"](this.$globalConfig.mapConfig.HYDPL_ZW)})),t.push(new l["a"]({source:new u["a"](this.$globalConfig.mapConfig.RESPL_ZW)})),t.push(new l["a"]({source:new u["a"](this.$globalConfig.mapConfig.RAILN_ZW)})),t.push(new l["a"]({source:new u["a"](this.$globalConfig.mapConfig.ROALN_ZW)})),t.push(new l["a"]({source:new u["a"](this.$globalConfig.mapConfig.PLAPT_ZW)})),t},drawPoint:function(){var t=this,e=new h["a"],n=this.piontArr.length-1;this.piontArr.forEach((function(a,r){var i={infoIndex:r},o=new c["a"]({geometry:new f["a"](a),attribute:i}),s="",p="";s=0==r?t.iconImg.start:r==n?t.iconImg.end:t.iconImg.middle,p=r+1;var l=new v["c"]({image:new b["a"]({src:s,opacity:1}),text:new A["a"]({textAlign:"center",textBaseline:"middle",font:" 12px serif",text:""+p,fill:new y["a"]({color:"#000"}),stroke:new P["a"]({color:"rgba(255,255,255,1)"}),offsetX:0,offsetY:0,rotation:0})});o.setStyle(l),e.addFeature(o)})),this.piontVector=new d["a"]({source:e}),this.map.addLayer(this.piontVector)},toline:function(){var t=new h["a"],e=new c["a"]({geometry:new m["a"](this.piontArr)});e.setStyle(new v["c"]({stroke:new P["a"]({width:2,color:this.lineColor[0]})})),t.addFeature(e),this.lineVector=new d["a"]({source:t}),this.map.addLayer(this.lineVector)},setIconUrl:function(t){this.infoObj.iconURL=t},onCheck:function(t){this.onReset(),this.changeData(t),this.toline(),this.drawPoint()},changeData:function(t){var e=this;t.length>0?t.forEach((function(t,n){e.piontArr.push([parseFloat(t.latitude),parseFloat(t.longitude)]),e.siteArr.push(t.site),e.siteNumberArr.push(t.siteNumber),e.trackTimeArr.push(t.trackTime),e.orderArr.push(n+1)})):this.$message.warning("无轨迹点信息")},onReset:function(){this.piontArr=[],this.siteArr=[],this.siteNumberArr=[],this.trackTimeArr=[],this.phoneArr=[],this.orderArr=[],this.map.removeLayer(this.piontVector),this.map.removeLayer(this.lineVector)}}},k=O,I=(n("140a"),n("2877")),_=Object(I["a"])(k,a,r,!1,null,"21f79aac",null);e["default"]=_.exports},"5c97":function(t,e,n){}}]);