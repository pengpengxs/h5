(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scan-scan"],{"11df":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return a}));var c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"boxcode"},[e("div",{staticStyle:{border:"0"},attrs:{id:"qr-reader"}}),e("v-uni-view",{staticClass:"changeBtn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changeQrcode()}}},[e("v-uni-view",{staticClass:"changetext"},[n._v("切换摄像头(摄像头："+n._s(n.changeFlag)+")")])],1)],1)},i=[]},"140d":function(n,t,e){"use strict";var a=e("7003"),c=e.n(a);c.a},"26ad":function(n,t,e){"use strict";e.r(t);var a=e("11df"),c=e("dda3");for(var i in c)"default"!==i&&function(n){e.d(t,n,(function(){return c[n]}))}(i);e("140d");var o,r=e("f0c5"),u=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"46e7c74f",null,!1,a["a"],o);t["default"]=u.exports},7003:function(n,t,e){var a=e("9058");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var c=e("4f06").default;c("6fede210",a,!0,{sourceMap:!1,shadowMode:!1})},9058:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dropdown-item__selected[data-v-46e7c74f]{background:transparent;padding:0}uni-input[data-v-46e7c74f]{font-size:%?28?%}uni-checkbox .uni-checkbox-input[data-v-46e7c74f]{width:%?40?%!important;height:%?40?%!important}.boxcode[data-v-46e7c74f]{position:relative}.changeBtn[data-v-46e7c74f]{margin-top:%?80?%;text-align:center;position:absolute;width:100%}.changetext[data-v-46e7c74f]{display:inline-block;padding:%?12?% %?40?%;border-radius:%?8?%;font-size:%?26?%;color:#fff;background:#0369d6}',""]),n.exports=t},dda3:function(n,t,e){"use strict";e.r(t);var a=e("e4b6"),c=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);t["default"]=c.a},e4b6:function(n,t,e){"use strict";e("c975"),e("ac1f"),e("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("2ce8"),c=e("7a60"),i={data:function(){return{lastResult:null,countResults:0,html5Qrcode:null,plat:"",changeFlag:null,result:""}},methods:{scanSend:function(n){var t=this;if(n.indexOf("http")>-1)uni.navigateTo({url:"../scanresult/webview?url="+n});else if(this.isJSON(n)){var e=JSON.parse(n);"course"==e.type&&uni.navigateTo({url:"../scanresult/scanresult?projectId="+e.projectId+"&courseId="+e.courseId})}else{var i=n.replace(/\//g,"d-d"),o=a.qrCode+i;-1==i.indexOf("%23")&&-1==i.indexOf("%40")&&-1==i.indexOf("#")&&-1==i.indexOf("@")?uni.navigateTo({url:"../scanresult/equipdetail?urls="+i}):c.requestScan(o).then((function(n){uni.showToast({title:n.message?n.message:"操作失败,请重试！",duration:2e3,icon:"none"}),t.html5Qrcode=null,setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),2e3)})).catch((function(n){t.html5Qrcode=null,uni.showToast({title:"操作失败,请重试！",duration:2e3,icon:"none"}),setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),2e3)}))}},changeQrcode:function(){var n=this;this.html5Qrcode&&(this.html5Qrcode.stop().then((function(t){n.html5Qrcode.clear()})).catch((function(n){})),Html5Qrcode.getCameras().then((function(t){if(t&&t.length){var e=null;1==t.length?e=t[0].id:(n.changeFlag>0?n.changeFlag--:n.changeFlag=t.length-1,("android"==n.plat||"ios"==n.plat)&&(e=t[n.changeFlag].id)),n.html5Qrcode.start(e,{fps:10,qrbox:300},(function(t){n.html5Qrcode&&n.html5Qrcode.stop().then((function(e){n.scanSend(t)})).catch((function(n){}))}),(function(n){})).catch((function(n){}))}})).catch((function(n){})))},isJSON:function(n){if("string"==typeof n)try{var t=_parseJSON(n);return!("object"!=typeof t||!t)}catch(e){return!1}return!1}},mounted:function(){var n=this;try{var t=uni.getSystemInfoSync();this.plat=t.platform}catch(e){}this.html5Qrcode=new Html5Qrcode("qr-reader"),Html5Qrcode.getCameras().then((function(t){if(t&&t.length){n.changeFlag=t.length-1;var e=null;1==t.length?e=t[0].id:("android"==n.plat||"ios"==n.plat)&&(e=t[t.length-1].id),setTimeout((function(){n.html5Qrcode.start(e,{fps:10,qrbox:300},(function(t){n.html5Qrcode.stop().then((function(e){n.scanSend(t)})).catch((function(n){}))}),(function(n){})).catch((function(n){}))}),2e3)}})).catch((function(n){setTimeout((function(){uni.showToast({title:n,icon:"none",duration:2e3})}),1e3)}))},onUnload:function(){this.html5Qrcode=null}};t.default=i}}]);