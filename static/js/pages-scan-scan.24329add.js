(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scan-scan"],{"1fa4":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"boxcode"},[e("div",{staticStyle:{border:"0"},attrs:{id:"qr-reader"}}),e("v-uni-view",{staticClass:"changeBtn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeQrcode()}}},[e("v-uni-view",{staticClass:"changetext"},[t._v("切换摄像头(摄像头："+t._s(t.changeFlag)+")")])],1)],1)},i=[]},"26ad":function(t,n,e){"use strict";e.r(n);var a=e("1fa4"),c=e("dda3");for(var i in c)"default"!==i&&function(t){e.d(n,t,(function(){return c[t]}))}(i);e("2a37");var o,r=e("f0c5"),s=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"4d5202d1",null,!1,a["a"],o);n["default"]=s.exports},"2a37":function(t,n,e){"use strict";var a=e("f4e4"),c=e.n(a);c.a},"6ebf":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dropdown-item__selected[data-v-4d5202d1]{background:transparent;padding:0}uni-input[data-v-4d5202d1]{font-size:%?28?%}uni-checkbox .uni-checkbox-input[data-v-4d5202d1]{width:%?40?%!important;height:%?40?%!important}.boxcode[data-v-4d5202d1]{position:relative}.changeBtn[data-v-4d5202d1]{margin-top:%?80?%;text-align:center;position:absolute;width:100%}.changetext[data-v-4d5202d1]{display:inline-block;padding:%?12?% %?40?%;border-radius:%?8?%;font-size:%?26?%;color:#fff;background:#0369d6}',""]),t.exports=n},dda3:function(t,n,e){"use strict";e.r(n);var a=e("e4b6"),c=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=c.a},e4b6:function(t,n,e){"use strict";e("c975"),e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("2ce8"),c=e("7a60"),i={data:function(){return{lastResult:null,countResults:0,html5Qrcode:null,plat:"",cameraId:null,changeFlag:null,result:""}},methods:{scanSend:function(t){var n=this;if(t.indexOf("http")>-1)uni.navigateTo({url:"../scanresult/webview?url="+t});else if(this.isJSON(t)){var e=JSON.parse(t);"course"==e.type&&uni.navigateTo({url:"../scanresult/scanresult?projectId="+e.projectId+"&courseId="+e.courseId})}else{var i=t.replace(/\//g,"d-d"),o=a.qrCode+i;-1==i.indexOf("%23")&&-1==i.indexOf("%40")&&-1==i.indexOf("#")&&-1==i.indexOf("@")?uni.navigateTo({url:"../scanresult/equipdetail?urls="+i}):c.requestScan(o).then((function(t){uni.showToast({title:t.message?t.message:"操作失败,请重试！",duration:2e3,icon:"none"}),n.html5Qrcode=null,setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),2e3)})).catch((function(t){n.html5Qrcode=null,uni.showToast({title:"操作失败,请重试！",duration:2e3,icon:"none"}),setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),2e3)}))}},startScan:function(){var t=this;this.html5Qrcode.start(this.cameraId,{fps:10,qrbox:300},(function(n){t.html5Qrcode&&t.html5Qrcode.stop().then((function(e){t.scanSend(n)})).catch((function(t){}))}),(function(t){})).catch((function(t){}))},changeQrcode:function(){var t=this;this.html5Qrcode&&(this.html5Qrcode.stop().then((function(n){t.html5Qrcode.clear()})).catch((function(t){})),Html5Qrcode.getCameras().then((function(n){n&&n.length&&(1==n.length?t.cameraId=n[0].id:(t.changeFlag>0?t.changeFlag--:t.changeFlag=n.length-1,("android"==t.plat||"ios"==t.plat)&&(t.cameraId=n[t.changeFlag].id)),t.html5Qrcode.start(t.cameraId,{fps:10,qrbox:300},(function(n){t.html5Qrcode&&t.html5Qrcode.stop().then((function(e){t.scanSend(n)})).catch((function(t){}))}),(function(t){})).catch((function(t){})))})).catch((function(t){})))},isJSON:function(t){if("string"==typeof t)try{var n=_parseJSON(t);return!("object"!=typeof n||!n)}catch(e){return!1}return!1}},mounted:function(){var t=this;try{var n=uni.getSystemInfoSync();this.plat=n.platform}catch(e){}this.html5Qrcode=new Html5Qrcode("qr-reader"),this.cameraId?this.startScan():Html5Qrcode.getCameras().then((function(n){n&&n.length&&(t.changeFlag=n.length-1,1==n.length?t.cameraId=n[0].id:("android"==t.plat||"ios"==t.plat)&&(t.cameraId=n[n.length-1].id)),t.startScan()})).catch((function(t){setTimeout((function(){uni.showToast({title:t,icon:"none",duration:2e3})}),1e3)}))},onUnload:function(){this.html5Qrcode=null}};n.default=i},f4e4:function(t,n,e){var a=e("6ebf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var c=e("4f06").default;c("4aaf1c14",a,!0,{sourceMap:!1,shadowMode:!1})}}]);