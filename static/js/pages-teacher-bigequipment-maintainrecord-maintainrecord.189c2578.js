(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teacher-bigequipment-maintainrecord-maintainrecord"],{"02ea":function(t,e,i){"use strict";i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("8f16"),s=i("cebd"),n={data:function(){return{activeEquip:null,yearSel:null,schoolYear:null,semester:null,queryTime:null,selTabs:0,waitDataList:[],pageobj0:{state:"nomore",rows:10,total:0,listState:0},nomoreData0:!1,remindOuttimeList:[],pageobj1:{state:"nomore",rows:10,total:0,listState:0},nomoreData1:!1,warningTodayList:[],pageobj2:{state:"nomore",rows:10,total:0,listState:0},nomoreData2:!1}},onBackPress:function(t){return 0==this.yearSel?uni.redirectTo({url:"/pages/teacher/bigequipment/bigequipment?yearSel="+this.yearSel+"&schoolYear="+this.schoolYear+"&semester="+this.semester+"&activeEquip="+this.activeEquip}):uni.redirectTo({url:"/pages/teacher/bigequipment/bigequipment?yearSel="+this.yearSel+"&queryTime="+this.queryTime+"&activeEquip="+this.activeEquip}),!0},methods:{wbTabsClick:function(t){this.selTabs=t,this.tabChanges()},tabChanges:function(){0==this.selTabs?(this.waitDataList=[],this.pageobj0={state:"nomore",rows:10,total:0,listState:0},this.getWaitRepair()):1==this.selTabs?(this.remindOuttimeList=[],this.pageobj1={state:"nomore",rows:10,total:0,listState:0},this.getRemindOuttime()):2==this.selTabs&&(this.warningTodayList=[],this.pageobj2={state:"nomore",rows:10,total:0,listState:0},this.getWarningToday())},timeChange:function(t){return t.replace(/T/," ")},getWaitRepair:function(){var t=this,e={};0==t.yearSel?(e.schoolYear={matchMode:"equals",value:t.schoolYear,whereType:"AND"},e.semester={matchMode:"equals",value:t.semester,whereType:"AND"},delete e.queryTime):(e.queryTime={matchMode:"between",value:t.queryTime,whereType:"AND"},delete e.schoolYear,delete e.semester),s.request(a.waitRepairPage,{rows:t.pageobj0.rows,first:1,filters:e,sortOrder:1}).then((function(e){t.waitDataList=e.datas.data||[],t.pageobj0.total=e.datas.totalRecords,0==t.pageobj0.listState&&uni.stopPullDownRefresh(),t.waitDataList.length>=e.datas.totalRecords?t.pageobj0.state="nomore":t.pageobj0.state="more"})).catch((function(e){0==t.pageobj0.listState&&uni.stopPullDownRefresh()}))},loadMore0:function(){var t=this;this.pageobj0.listState=1,this.waitDataList.length<this.pageobj0.total?(this.pageobj0.rows=this.pageobj0.rows+10,this.getWaitRepair()):(this.nomoreData0=!0,setTimeout((function(){t.nomoreData0=!1}),3e3),this.pageobj0.state="nomore")},getRemindOuttime:function(){var t=this,e={};0==t.yearSel?(e.schoolYear={matchMode:"equals",value:t.schoolYear,whereType:"AND"},e.semester={matchMode:"equals",value:t.semester,whereType:"AND"},delete e.queryTime):(e.queryTime={matchMode:"between",value:t.queryTime,whereType:"AND"},delete e.schoolYear,delete e.semester),s.request(a.remindOuttimePage,{rows:t.pageobj1.rows,first:1,filters:e,sortOrder:1}).then((function(e){t.remindOuttimeList=e.datas.data||[],t.pageobj1.total=e.datas.totalRecords,0==t.pageobj1.listState&&uni.stopPullDownRefresh(),t.remindOuttimeList.length>=e.datas.totalRecords?t.pageobj1.state="nomore":t.pageobj1.state="more"})).catch((function(e){0==t.pageobj1.listState&&uni.stopPullDownRefresh()}))},loadMore1:function(){var t=this;this.pageobj1.listState=1,this.remindOuttimeList.length<this.pageobj1.total?(this.pageobj1.rows=this.pageobj1.rows+10,this.getRemindOuttime()):(this.nomoreData1=!0,setTimeout((function(){t.nomoreData1=!1}),3e3),this.pageobj1.state="nomore")},getWarningToday:function(){var t=this,e={};0==t.yearSel?(e.schoolYear={matchMode:"equals",value:t.schoolYear,whereType:"AND"},e.semester={matchMode:"equals",value:t.semester,whereType:"AND"},delete e.queryTime):(2!=this.selTabs&&(e.queryTime={matchMode:"between",value:t.queryTime,whereType:"AND"}),delete e.schoolYear,delete e.semester),s.request(a.warningTodayPage,{rows:t.pageobj2.rows,first:1,filters:e,sortOrder:1}).then((function(e){t.warningTodayList=e.datas.data||[],t.pageobj2.total=e.datas.totalRecords,0==t.pageobj2.listState&&uni.stopPullDownRefresh(),t.warningTodayList.length>=e.datas.totalRecords?t.pageobj2.state="nomore":t.pageobj2.state="more"})).catch((function(e){0==t.pageobj2.listState&&uni.stopPullDownRefresh()}))},loadMore2:function(){var t=this;this.pageobj2.listState=1,this.warningTodayList.length<this.pageobj2.total?(this.pageobj2.rows=this.pageobj2.rows+10,this.getRemindOuttime()):(this.nomoreData2=!0,setTimeout((function(){t.nomoreData2=!1}),3e3),this.pageobj2.state="nomore")},getTime:function(t){if(t){var e=Math.floor(t%86400/3600),i=e+"小时";return i}return 0}},onPullDownRefresh:function(){this.tabChanges()},onReachBottom:function(){0==this.selTabs?this.loadMore0():1==this.selTabs?this.loadMore1():2==this.selTabs&&this.loadMore2()},onLoad:function(t){var e=this;e.yearSel=t.yearSel,e.selTabs=t.selTabs,e.activeEquip=t.activeEquip,t&&0==t.yearSel?(e.schoolYear=t.schoolYear,"null"==t.semester?e.semester=null:e.semester=t.semester):t&&1==t.yearSel&&(e.queryTime=t.queryTime),this.tabChanges()}};e.default=n},"403b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"wbtabsbox"},[i("v-uni-view",{staticClass:"wbtabs"},[i("v-uni-view",{staticClass:"wbtabstxt",class:{activeTabs:0==t.selTabs},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wbTabsClick(0)}}},[t._v("待维修")])],1),i("v-uni-view",{staticClass:"wbtabs"},[i("v-uni-view",{staticClass:"wbtabstxt",class:{activeTabs:1==t.selTabs},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wbTabsClick(1)}}},[t._v("超时未保养")])],1),i("v-uni-view",{staticClass:"wbtabs"},[i("v-uni-view",{staticClass:"wbtabstxt",class:{activeTabs:2==t.selTabs},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wbTabsClick(2)}}},[t._v("实时告警")])],1)],1),i("v-uni-view",{staticClass:"wbcontbox"},[0==t.selTabs?i("v-uni-view",{staticClass:"waitList"},[t._l(t.waitDataList,(function(e,a){return i("v-uni-view",{staticClass:"waitcard"},[i("v-uni-view",{staticClass:"waitcardhead"},[i("v-uni-view",{staticClass:"cardheadtitle"},[i("v-uni-view",{staticClass:"iconbox"},[i("v-uni-image",{attrs:{src:"/static/images/bigequip/weibao_weixiu_tubiao.png"}})],1),i("v-uni-text",[t._v("维修单号："+t._s(e.code))])],1),i("v-uni-view",{staticClass:"cardheadstatus"},[t._v(t._s(e.nodeName))])],1),i("v-uni-view",{staticClass:"waitcardcont"},[i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("设备编号")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.number))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("设备名称")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("设备型号")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.specModel))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("报修人")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.repairUserName))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("损坏原因")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.damageSituation))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("损坏情况")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.damageCause))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("报修时间")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(t.timeChange(e.repairTime)))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("维修情况")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.repairCause))])],1),i("v-uni-view",{staticClass:"cardcontbox"},[i("v-uni-view",{staticClass:"contboxtitle"},[t._v("维修金额")]),i("v-uni-view",{staticClass:"contboxnr"},[t._v(t._s(e.allMount)+" 元")])],1)],1)],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.nomoreData0&&t.waitDataList.length>0,expression:"nomoreData0 && waitDataList.length > 0"}],staticClass:"nomore"},[t._v("没有更多数据了~")]),t.waitDataList.length<=0?i("v-uni-view",{staticClass:"nodate_allheight"},[i("v-uni-image",{staticClass:"nodate_img",attrs:{src:"/static/images/bigequip/wushuju@2x.png"}}),i("v-uni-view",{staticClass:"nodate_text"},[t._v("暂无数据")])],1):t._e()],2):1==t.selTabs?i("v-uni-view",{staticClass:"outtimeList"},[t._l(t.remindOuttimeList,(function(e,a){return i("v-uni-view",{staticClass:"outtimecard"},[i("v-uni-view",{staticClass:"outtimecardbox"},[i("v-uni-view",{staticClass:"outimg"},[i("v-uni-view",{staticClass:"outiconbox"},[i("v-uni-image",{attrs:{src:"/static/images/bigequip/daxing_chaoshi.png"}})],1)],1),i("v-uni-view",{staticClass:"outcont"},[i("v-uni-view",{staticClass:"outtitle"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"outdesc"},[i("v-uni-view",{staticClass:"outdescnum"},[t._v("编号："+t._s(e.number))]),i("v-uni-view",{staticClass:"outdescnum"},[t._v("型号："+t._s(e.specModel))])],1)],1),i("v-uni-view",{staticClass:"outtimes"},[t._v(t._s(t.getTime(e.outTimes)))])],1)],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.nomoreData1&&t.remindOuttimeList.length>0,expression:"nomoreData1 && remindOuttimeList.length > 0"}],staticClass:"nomore"},[t._v("没有更多数据了~")]),t.remindOuttimeList.length<=0?i("v-uni-view",{staticClass:"nodate_allheight"},[i("v-uni-image",{staticClass:"nodate_img",attrs:{src:"/static/images/bigequip/wushuju@2x.png"}}),i("v-uni-view",{staticClass:"nodate_text"},[t._v("暂无数据")])],1):t._e()],2):2==t.selTabs?i("v-uni-view",{staticClass:"waitList"},[t._l(t.warningTodayList,(function(e,a){return i("v-uni-view",{staticClass:"warningcard"},[i("v-uni-view",{staticClass:"warningcardbox"},[i("v-uni-view",{staticClass:"warnningcont"},[i("v-uni-view",{staticClass:"warnimg"},[i("v-uni-view",{staticClass:"warniconbox"},[i("i",{staticClass:"iconfont icon-jinggao f-50 redcolor"})])],1),i("v-uni-view",{staticClass:"warncont"},[i("v-uni-view",{staticClass:"warntitle"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"warnnum"},[t._v("编号："+t._s(e.number))]),i("v-uni-view",{staticClass:"warnnum"},[t._v("告警时间："+t._s(t.timeChange(e.warningTime)))])],1)],1),i("v-uni-view",{staticClass:"warnmsg"},[t._v(t._s(e.warnings.toString()))])],1)],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.nomoreData2&&t.warningTodayList.length>0,expression:"nomoreData2 && warningTodayList.length > 0"}],staticClass:"nomore"},[t._v("没有更多数据了~")]),t.warningTodayList.length<=0?i("v-uni-view",{staticClass:"nodate_allheight"},[i("v-uni-image",{staticClass:"nodate_img",attrs:{src:"/static/images/bigequip/wushuju@2x.png"}}),i("v-uni-view",{staticClass:"nodate_text"},[t._v("暂无数据")])],1):t._e()],2):t._e()],1)],1)},n=[]},"5dc2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".container[data-v-0109163c]{position:relative}uni-image[data-v-0109163c]{width:100%;height:100%}.wbtabsbox[data-v-0109163c]{width:100%;height:%?100?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;position:fixed;z-index:999}.wbtabs[data-v-0109163c]{width:33.3%;height:%?100?%;line-height:%?100?%;text-align:center}.wbtabstxt[data-v-0109163c]{width:63%;height:98%;font-size:%?30?%;color:#404040;display:inline-block}.activeTabs[data-v-0109163c]{color:#0369d6;border-bottom:%?4?% solid #0369d6}.wbcontbox[data-v-0109163c]{position:absolute;top:%?100?%;left:0;right:0;margin:auto;width:95%}.waitcard[data-v-0109163c]{\n\t/* min-height: 500rpx; */width:100%;border-radius:%?10?%;background-color:#fff;padding:0 %?18?%;margin:%?22?% 0}.waitcardhead[data-v-0109163c]{width:100%;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?2?% solid #d9d9d9}.cardheadtitle[data-v-0109163c]{width:80%}.cardheadtitle uni-text[data-v-0109163c]{color:#0d0d0d;font-size:%?30?%}.iconbox[data-v-0109163c]{display:inline-block;width:%?26?%;height:%?26?%;margin-right:%?8?%}.cardheadstatus[data-v-0109163c]{width:20%;color:#f39800;font-size:%?24?%;text-align:right}.waitcardcont[data-v-0109163c]{width:100%;padding:%?10?% 0 %?22?%}.cardcontbox[data-v-0109163c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-top:%?10?%}.contboxtitle[data-v-0109163c]{width:30%;color:#7d7d7d;font-size:%?24?%;padding-left:%?30?%}.contboxnr[data-v-0109163c]{width:70%;color:#333;font-size:%?24?%}\n\n/* 超时未保养 */.outtimecard[data-v-0109163c]{min-height:%?110?%;width:100%;border-radius:%?10?%;background-color:#fff;padding:%?16?% %?18?%;margin:%?22?% 0}.outtimecardbox[data-v-0109163c]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.outimg[data-v-0109163c]{width:13%}.outiconbox[data-v-0109163c]{width:%?70?%;height:%?70?%;margin:0 auto}.outcont[data-v-0109163c]{width:67%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;flex-flow:column}.outtitle[data-v-0109163c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;color:#333;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?16?%}.outdesc[data-v-0109163c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.outdescnum[data-v-0109163c]{width:50%;color:#7d7d7d;font-size:%?24?%}.outtimes[data-v-0109163c]{width:20%;color:#d81e06;font-size:%?30?%}.warningcard[data-v-0109163c]{width:100%;border-radius:%?10?%;background-color:#fff;padding:%?16?% %?18?%;margin:%?22?% 0}.warningcardbox[data-v-0109163c]{width:100%;height:100%}.warnningcont[data-v-0109163c]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding-bottom:%?4?%;margin-bottom:%?12?%}.warnimg[data-v-0109163c]{width:13%}.warniconbox[data-v-0109163c]{width:%?70?%;height:%?70?%;margin:0 auto}.warncont[data-v-0109163c]{width:77%;margin-left:%?60?%}.warntitle[data-v-0109163c]{color:#333;font-size:%?30?%;margin-bottom:%?8?%}.warnnum[data-v-0109163c]{color:#7d7d7d;font-size:%?24?%;margin-bottom:%?8?%}.warnmsg[data-v-0109163c]{color:#404040;font-size:%?24?%}",""]),t.exports=e},9919:function(t,e,i){"use strict";i.r(e);var a=i("02ea"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"9f58":function(t,e,i){"use strict";var a=i("e739"),s=i.n(a);s.a},e739:function(t,e,i){var a=i("5dc2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("2733dab2",a,!0,{sourceMap:!1,shadowMode:!1})},ea2a:function(t,e,i){"use strict";i.r(e);var a=i("403b"),s=i("9919");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("9f58");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"0109163c",null,!1,a["a"],o);e["default"]=l.exports}}]);