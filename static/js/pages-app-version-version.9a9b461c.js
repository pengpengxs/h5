(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-app-version-version"],{"0057":function(t,e,i){"use strict";i.r(e);var a=i("0b7c"),n=i("0220");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("2f08");var d,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d9f0f5de",null,!1,a["a"],d);e["default"]=s.exports},"0220":function(t,e,i){"use strict";i.r(e);var a=i("35f8"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"0b7c":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"profile"},[a("v-uni-view",{staticClass:"desc"},[a("v-uni-image",{staticClass:"avatar",attrs:{src:i("243e")}}),a("v-uni-view",{staticClass:"name"},[t._v("数智实训")]),a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.versionId))])],1)],1),t.data.versionRemark?a("v-uni-view",{staticClass:"remarks"},[a("v-uni-view",{staticClass:"title"},[t._v("版本说明:")]),t._l(t.data.versionRemark,(function(e,i){return a("v-uni-view",{staticClass:"txt"},[t._v(t._s(i+1)+". "+t._s(e))])}))],2):t._e(),1===t.data.newApp?a("v-uni-button",{staticClass:"btn-update f-15",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateAppVersion()}}},[t._v("检查更新")]):t._e(),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"txt"},[t._v("贵州鑫智联科技有限公司")]),a("v-uni-view",{staticClass:"txt"},[t._v("版权所有")])],1)],1)},o=[]},"243e":function(t,e,i){t.exports=i.p+"static/img/512.3050540b.png"},"2f08":function(t,e,i){"use strict";var a=i("e7b9"),n=i.n(a);n.a},"35f8":function(t,e,i){"use strict";i("ac1f"),i("5319"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2ce8"),n=i("7a60"),o={data:function(){return{data:null,versionDate:null,versionId:n.judgeObj().versionId}},onLoad:function(){n.judgeObj().isAPP&&this.getVersion()},methods:{getVersion:function(){var t=this;n.request(a.getCurrentVersion,{appName:"数智实训",appVersionId:n.judgeObj().versionId},"POST",void 0,0,!0).then((function(e){if(e.datas.versionId){t.data=e.datas;var i=[],a=JSON.parse(JSON.stringify(t.data.versionRemark));i=a.split("\n"),t.data.versionRemark=i}}))},updateAppVersion:function(){var t=this;n.request(a.getVersion,{appName:"数智实训",appVersionId:n.judgeObj().versionId},"POST",void 0,0,!0).then((function(e){t.versionDate=e.datas,e.datas.versionId!=n.judgeObj().versionId&&t.downWgt()}))},downWgt:function(){var t=uni.getSystemInfoSync();if("android"==t.platform.toLocaleLowerCase()){var e=this;e.hasNewApp=!1;var i=n.commonUrl()+"security-server/dietc/source/view/"+e.versionDate.appDownLoadUrl.replace("\\","/");plus.nativeUI.showWaiting("下载更新文件..."),plus.downloader.createDownload(i,{filename:"_doc/update/"},(function(t,i){200==i?(alert("下载更新文件成功："+t.filename),e.installWgt(t.filename)):plus.nativeUI.alert("下载失败！"),plus.nativeUI.closeWaiting()})).start()}else document.location.href="https://apps.apple.com/cn/app/%E6%95%B0%E6%99%BA%E5%AE%9E%E8%AE%AD/id1585640881"},installWgt:function(t){plus.nativeUI.showWaiting("安装更新文件..."),plus.runtime.install(t,{},(function(){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("应用资源更新完成！",(function(){plus.runtime.restart()}))}),(function(t){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("安装更新文件失败["+t.code+"]："+t.message),10==t.code&&alert("请清除临时目录")}))}}};e.default=o},e2df:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dropdown-item__selected[data-v-d9f0f5de]{background:transparent;padding:0}uni-input[data-v-d9f0f5de]{font-size:%?28?%}uni-checkbox .uni-checkbox-input[data-v-d9f0f5de]{width:%?40?%!important;height:%?40?%!important}uni-page-body[data-v-d9f0f5de]{background-color:#fff}.bottom[data-v-d9f0f5de]{text-align:center;position:absolute;bottom:%?40?%;width:100%}.bottom .txt[data-v-d9f0f5de]{color:#a0a0a0;font-size:%?24?%}.profile[data-v-d9f0f5de]{position:relative;height:%?350?%}.profile .icon[data-v-d9f0f5de]{position:absolute;top:0;height:%?430?%;width:100%}.desc[data-v-d9f0f5de]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?430?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:999;top:0;position:absolute}.logout[data-v-d9f0f5de]{width:%?138?%;height:%?90?%;color:#fff;font-size:%?24?%;float:right;text-align:center;line-height:%?90?%}.avatar[data-v-d9f0f5de]{width:%?128?%;height:%?128?%;margin-top:%?60?%;border-radius:%?10?%}.btn-update[data-v-d9f0f5de]{width:95%;background-color:#0369d6;color:#fff;margin-top:%?80?%}.name[data-v-d9f0f5de]{font-size:%?30?%;color:#1a1a1a;margin-top:%?18?%}.phone[data-v-d9f0f5de]{font-size:%?24?%;margin-top:%?18?%}.remarks[data-v-d9f0f5de]{padding:0 %?20?%;min-width:%?400?%;margin:0 auto}.remarks .title[data-v-d9f0f5de], .remarks .txt[data-v-d9f0f5de]{font-size:%?30?%;color:#313131;margin-bottom:%?20?%}.remarks .title[data-v-d9f0f5de]{font-size:%?30?%;color:#666}.remarks .txt[data-v-d9f0f5de]{padding-left:%?30?%}.item[data-v-d9f0f5de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?100?%;line-height:%?100?%;border-bottom:%?2?% solid #f8f8f8}.item .left .icon[data-v-d9f0f5de]{width:%?40?%;height:%?40?%}.left .txt[data-v-d9f0f5de]{font-size:%?24?%;color:#999;margin-left:%?40?%}.item .icon[data-v-d9f0f5de]{width:%?16?%;height:%?28?%}.item .right[data-v-d9f0f5de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item .right .txt[data-v-d9f0f5de]{font-size:%?24?%;color:#fc544b;margin-right:%?20?%}.item .right .has_discern[data-v-d9f0f5de]{color:green}.item .right .icon[data-v-d9f0f5de]{width:%?16?%;height:%?28?%}.divider[data-v-d9f0f5de]{background-color:#f2f2f2;height:%?1?%}.version[data-v-d9f0f5de]{margin-right:%?30?%;color:#999}body.?%PAGE?%[data-v-d9f0f5de]{background-color:#fff}',""]),t.exports=e},e7b9:function(t,e,i){var a=i("e2df");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("796bc7b4",a,!0,{sourceMap:!1,shadowMode:!1})}}]);