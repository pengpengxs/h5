(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-filePreview-filePreview"],{"725a":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.info.moduleName?[n("v-uni-web-view",{attrs:{src:e.photoUrl+e.info.moduleName+"/"+e.info.fileNewName}})]:e._e()],2)},r=[]},a329:function(e,t,n){"use strict";n.r(t);var i=n("f35b"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},f35b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2ce8"),a=n("7a60"),r={data:function(){return{id:null,item:null,info:{},photoUrl:a.commonUrl()+i.linkloadUrl}},onLoad:function(e){this.item=JSON.parse(e.item),"equip"==e.page?this.getSource():this.getData()},methods:{getData:function(){var e=this;a.request(i.videpPreview,{id:this.item.id}).then((function(t){e.info=t.datas}))},getSource:function(){var e=this;a.request(i.downloadMaterial,{id:this.item.sourceId}).then((function(t){e.info=t.datas}))}}};t.default=r},f9b4:function(e,t,n){"use strict";n.r(t);var i=n("725a"),a=n("a329");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var u,o=n("f0c5"),f=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"03d0d05c",null,!1,i["a"],u);t["default"]=f.exports}}]);