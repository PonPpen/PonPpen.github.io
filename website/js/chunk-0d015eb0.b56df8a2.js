(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d015eb0"],{"451a":function(e,t,n){"use strict";var r=n("fe10"),a=n.n(r);a.a},ab8e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"map"}},[n("div",{staticClass:"ol-popup",attrs:{id:"popup"}},[n("a",{staticClass:"ol-popup-closer",attrs:{href:"#",id:"popup-closer"}}),n("div",{staticClass:"popup-content",attrs:{id:"popup-content"}})])])}],i=(n("4160"),n("d81d"),n("b0c0"),n("a9e3"),n("ac1f"),n("1276"),n("159b"),n("5bc0"),n("a2c7")),o=n("5eee"),s=n("4cdf"),c=n("9c78"),p=n("480c"),u=n("f2f0"),h=n("5831"),l=n("3e6b"),f=n("f403"),d=n("7a09"),m=n("256f"),g=n("0710"),w=n("6c77"),v=n("6cbff"),A=n("8295"),b=n("83a6"),P=n("8682"),y=n("c1df"),C=n.n(y),E={name:"MapPath1",data:function(){return{map:null,view:null,coordinatesData:[[110.320042,20.035132],[110.341533,20.036168],[110.371533,20.036168],[110.391533,20.036168],[110.411533,20.036168]],coordinatesData1:[[110.320042,20.055132],[110.341533,20.056168],[110.371533,20.056168]],iconImg:{red:n("4533"),orange:n("36fe"),blue:n("4b3e"),yellow:n("db2d"),start:n("d826"),middle:n("b56c"),end:n("c320")},overlay:null,lineVector:null,piontVector:null,piontArr:[],siteArr:[],siteNumberArr:[],trackTimeArr:[],nameArr:[],phoneArr:[],orderArr:[],lineColor:[[255,62,125,1],[69,130,255,1],[0,191,92,1],[255,110,27,1],[213,65,226,1]],isPopupShow:!1,infoArr:[]}},mounted:function(){this.view=new i["a"]({projection:"EPSG:4326",center:[110.320042,20.035132],zoom:12,minZoom:6}),this.map=new o["a"]({target:"map",view:this.view}),this.map.addLayer(new c["a"]({layers:this.layerData()})),this.addPopup()},methods:{onSelect:function(e){var t=this,n=0,r=this.phoneArr.length;this.phoneArr.forEach((function(r,a){r==e?t.piontArr[a].length>0&&t.view.animate({center:t.piontArr[a][0],duration:1e3}):n++})),n==r&&this.$message.warning("无轨迹点信息")},addPopup:function(){var e=document.getElementById("popup"),t=document.getElementById("popup-closer"),n=document.getElementById("popup-content");this.overlay=new g["a"]({element:e,autoPan:!0,autoPanAnimation:{duration:250}}),this.map.addOverlay(this.overlay);var r=this;this.map.on("click",(function(e){var a=r.map.forEachFeatureAtPixel(e.pixel,(function(e){return e}));if(a){r.isPopupShow=!0;var i=a.getProperties().attribute.infoIndex.split(",").map(Number);Object(m["n"])(e.coordinate,"EPSG:3857","EPSG:4326");n.innerHTML='\n\t\t    <div class="title">\n\t\t\t\t<p>'+r.nameArr[i[0]]+"（轨迹点"+r.orderArr[i[0]][i[1]]+'）</p>\n          <img src="'+r.getIcon(r.phoneArr[i[0]])+'" alt="" />\n\t\t\t</div>\n\t\t\t<div class="content">\n\t\t\t\t<p>当前定位点数目：<span>'+r.siteNumberArr[i[0]][i[1]]+"</span></p>\n        <p>定位时间：<span>"+C()(parseFloat(1e3*r.trackTimeArr[i[0]][i[1]])).format("YYYY-MM-DD HH:mm:ss")+"</span></p>\n\t\t\t\t<p>定位地点：<span>"+r.siteArr[i[0]][i[1]]+"</span></p>\n\t\t\t</div>",r.overlay.setPosition(e.coordinate)}else r.overlay.setPosition(void 0),t.blur()}))},layerData:function(){var e=[];return e.push(new p["a"]({source:new u["a"](this.$globalConfig.mapConfig.PROPL_ZW)})),e.push(new p["a"]({source:new u["a"](this.$globalConfig.mapConfig.VEGPL_ZW)})),e.push(new p["a"]({source:new u["a"](this.$globalConfig.mapConfig.HYDPL_ZW)})),e.push(new p["a"]({source:new u["a"](this.$globalConfig.mapConfig.RESPL_ZW)})),e.push(new p["a"]({source:new u["a"](this.$globalConfig.mapConfig.RAILN_ZW)})),e.push(new p["a"]({source:new u["a"](this.$globalConfig.mapConfig.ROALN_ZW)})),e.push(new p["a"]({source:new u["a"](this.$globalConfig.mapConfig.PLAPT_ZW)})),e},drawPoint:function(){var e=this,t=new h["a"];this.piontArr.forEach((function(n,r){var a=n.length-1;n.forEach((function(n,i){var o={infoIndex:r+","+i},c=new s["a"]({geometry:new f["a"](n),attribute:o}),p="",u="";0==i?(p=e.iconImg.start,u=""):i==a?(p=e.iconImg.end,u=""):(p=e.iconImg.middle,u=e.orderArr[r][i]);var h=new w["c"]({image:new v["a"]({src:p,opacity:1}),text:new A["a"]({textAlign:"center",textBaseline:"middle",font:" 20px serif",text:""+u,fill:new b["a"]({color:"#eee"}),stroke:new P["a"]({color:"rgba(255,255,255,1)"}),offsetX:0,offsetY:0,rotation:0})});c.setStyle(h),t.addFeature(c)}))})),this.piontVector=new l["a"]({source:t}),this.map.addLayer(this.piontVector)},toline:function(){var e=this,t=new h["a"];this.piontArr.forEach((function(n,r){var a=new s["a"]({geometry:new d["a"](n)});a.setStyle(new w["c"]({stroke:new P["a"]({width:2,color:e.lineColor[r]})})),t.addFeature(a)})),this.lineVector=new l["a"]({source:t}),this.map.addLayer(this.lineVector)},onCheck:function(e,t){this.infoArr=t,this.onReset(),this.changeData(e),this.toline(),this.drawPoint(),this.piontArr[0].length>0&&this.view.animate({center:this.piontArr[0][0],duration:1e3})},changeData:function(e){var t=this;e.forEach((function(e,n){var r=[],a=[],i=[],o=[],s=[];e.trackInfoList.length>0?(t.nameArr.push(e.name),t.phoneArr.push(e.phone),e.trackInfoList.forEach((function(e,t){r.push([parseFloat(e.latitude),parseFloat(e.longitude)]),a.push(e.site),i.push(e.siteNumber),o.push(e.trackTime),s.push(t+1)})),r.reverse(),a.reverse(),i.reverse(),o.reverse(),t.piontArr.push(r),t.siteArr.push(a),t.siteNumberArr.push(i),t.trackTimeArr.push(o),t.orderArr.push(s)):t.$message.warning(e.name+" 无轨迹点信息")}))},onReset:function(){this.piontArr=[],this.siteArr=[],this.siteNumberArr=[],this.trackTimeArr=[],this.nameArr=[],this.phoneArr=[],this.orderArr=[],this.map.removeLayer(this.piontVector),this.map.removeLayer(this.lineVector)},getIcon:function(e){var t="";return this.infoArr.forEach((function(n){n.phone==e&&(t=n.iconName)})),this.$globalConfig.uploadPath+"/file/"+t}}},L=E,k=(n("451a"),n("2877")),I=Object(k["a"])(L,r,a,!1,null,"8862c93c",null);t["default"]=I.exports},fe10:function(e,t,n){}}]);