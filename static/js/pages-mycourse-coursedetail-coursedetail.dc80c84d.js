(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycourse-coursedetail-coursedetail"],{"395f":function(t,e,a){"use strict";var i=a("ac46"),s=a.n(i);s.a},"3c77":function(t,e,a){t.exports=a.p+"static/img/bg_login.5cb1d9a5.png"},"5d2e":function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("b7e2")),n=i(a("d08f")),o=i(a("1955")),c=i(a("141f")),l=i(a("1cd2")),r=i(a("d58e")),d=a("2ce8"),v=a("7a60"),h={components:{Tabs:s.default,DropdownMenu:n.default,DropdownItem:o.default,wzpPicker:c.default,Echarts:l.default,EchartsEl:r.default},data:function(){return{id:null,current:1,dropName:"",count:0,upLimit:0,attendClassTime:null,dropList:[],courseType:"",oldStatus:"",className:"",studentNum:0,obj:{courseId:null,taskContentId:"",workTypeId:null,workTypeName:"",timetableId:""},attendanceObj:{},attendanceList:[],attendanceChildren:[{id:1,label:"正常",ico:"../../../static/images/true.png"},{id:2,label:"缺课",ico:"../../../static/images/false.png"},{id:3,label:"迟到",ico:"../../../static/images/L.png"},{id:4,label:"早退",ico:"../../../static/images/E.png"},{id:5,label:"请假",ico:"../../../static/images/time.png"}],defaultIndex:[1],mode:"one",achievementList:{},levelsList:[],defaultIndexLevel:[1],achievementObj:{},chooseWhitch:1,workList:[],workTypeName:"",workTypeName2:"",option:{},addanceObj:{},reportObj:{},workTypeList:[],previewList:[],lessonsAttendance:{},selectedCount:null,sorts:2,sortName:"缺课",sortList:[{id:2,label:"缺课"},{id:3,label:"迟到"},{id:4,label:"早退"}],allAlarmList:[],studentId:"",animate:!1,timer:null}},onLoad:function(t){t.id&&(this.obj.taskContentId=t.id,uni.setNavigationBarTitle({title:t.name}),this.getAttendanceList()),t.courseId&&(this.obj.courseId=t.courseId),t.projectName&&(this.projectName=t.projectName),"null"!=t.attendClassTime&&(this.attendClassTime=t.attendClassTime),t.count&&(this.count=t.count),t.upLimit&&(this.upLimit=t.upLimit),t.courseType&&(this.courseType=t.courseType,"2"==this.courseType&&this.getWorkList()),t.oldStatus&&(this.oldStatus=t.oldStatus),t.courseName&&uni.setNavigationBarTitle({title:t.courseName}),t.className&&(this.className=t.className),t.studentNum&&(this.studentNum=t.studentNum),this.courseType,clearInterval(this.timer),this.changeTab(1)},methods:{getList:function(){},changeTab:function(t){var e=this;this.current=t,"2"==this.courseType&&this.workList.length>0&&this.workList.forEach((function(t){e.obj.workTypeId=e.workList[0].workTypeId,e.workTypeName2=e.workList[0].workTypeName})),1==this.current?(clearInterval(this.timer),this.selectedCount=null):2==this.current&&this.getScoreList()},dropSelect:function(t){this.dropName=t.timetableDate+t.timetableWeek+t.sectionName,this.obj.timetableId=t.id,this.$refs.rangeDropdown.close(),this.getAttendanceList()},getClassList:function(){var t=this;if(this.obj.workTypeId)var e={taskContentId:this.obj.taskContentId,workTypeId:this.obj.workTypeId};else e={taskContentId:this.obj.taskContentId};v.request(d.getTitDrowList,e).then((function(e){t.dropList=e.datas.list,t.dropList.length>0&&(t.obj.timetableId?t.dropList.forEach((function(e){e.id==t.obj.timetableId&&t.dropSelect(e)})):t.dropSelect(t.dropList[0]))}))},getAttendanceList:function(){var t=this;this.$util.request(this.$api.getStuAttendanceList,{projectId:this.obj.taskContentId},"GET").then((function(e){t.attendanceList=e.datas}))},lessonsAttendanceOverview:function(){var t=this;v.request(d.lessonsAttendanceOverview,{taskContentId:this.obj.taskContentId,timetableId:this.obj.timetableId}).then((function(e){t.lessonsAttendance=e.datas}))},getScoreList:function(){var t=this;this.$util.request(this.$api.getStuAchievementList,{projectId:this.obj.taskContentId,courseId:this.obj.courseId},"GET").then((function(e){t.achievementList=e.datas}))},getWorkList:function(){var t=this;v.request(d.findWork,{id:this.obj.taskContentId}).then((function(e){t.workList=e.datas,t.workList.length>0?(t.obj.workTypeId=t.workList[0].workTypeId,t.workTypeName=t.workList[0].workTypeName,0==t.current||t.getScoreList()):t.obj.workTypeId=null}))},dropWorkTypeName:function(t){this.obj.workTypeId=t.workTypeId,this.workTypeName=t.workTypeName,this.$refs.rangeDropdownWork.close(),0==this.current||this.getScoreList()},dropWorkTypeNameKao:function(t){this.obj.workTypeId=t.workTypeId,this.workTypeName2=t.workTypeName,this.$refs.rangeDropdownWorkkao.close(),this.getScoreList()},backStatus:function(){var t=this;v.modal("确定归档","归档后所有成绩将不可修改，确认归档吗？",!0,(function(e){e&&v.request(d.changeOldStatus,{id:t.obj.taskContentId}).then((function(e){t.oldStatus="1",v.toast(e.message)}))}))},attendanceClick:function(t){if("1"==this.oldStatus)return!1;this.studentId=t.stuId,this.$refs.wzpPicker.showPicker()},onConfirm:function(t){if(!t||0==t.length)return v.toast("请选择选项！"),!1;var e={arrangeTimetableId:this.obj.timetableId,status:this.attendanceChildren[t[0]].id,studentId:this.studentId,taskContentId:this.obj.taskContentId};v.request(d.changeAttendanceStatus,e).then((function(t){}))},getLevelsList:function(){var t=this;v.request(d.getLevelsList,{taskContentId:this.obj.taskContentId,workTypeId:this.obj.workTypeId}).then((function(e){t.levelsList=[],e.datas&&e.datas.length>0&&e.datas.forEach((function(e){t.levelsList.push({label:e.value,id:e.id})}))}))},achievementClick:function(t,e){if("1"==this.oldStatus)return!1;this.achievementObj=t,this.chooseWhitch=e,this.$refs.wzpPickerAchievement.showPicker()},onConfirmAchievement:function(t){var e=this;0===t.length&&t.push(0),1===this.chooseWhitch?this.achievementObj.oneScore=this.levelsList[t[0]].id:2===this.chooseWhitch?this.achievementObj.twoScore=this.levelsList[t[0]].id:this.achievementObj.threeScore=this.levelsList[t[0]].id,v.request(d.scoreSave,this.achievementObj).then((function(t){e.getScoreList()}))},attendanceAlter:function(){var t=this;v.request(d.attendanceAlter,{id:this.obj.taskContentId}).then((function(e){t.allAlarmList=e.datas,t.allAlarmList&&t.allAlarmList.length>0&&(t.timer=setInterval(t.prizeScroll,2e3))}))},safeExamAndAttendanceOverview:function(){var t=this;v.request(d.safeExamAndAttendanceOverview,{id:this.obj.taskContentId}).then((function(e){t.option={color:["#5bb8f0","#f6c56f"],legend:{orient:"vertical",left:10,y:"center",data:["已通过: "+e.datas.safeExamPassNumber+"人","未通过: "+e.datas.safeExamNoPassNumber+"人"]},series:[{name:"安全考试",type:"pie",radius:["60%","80%"],center:["75%","53%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:e.datas.safeExamPassNumber,name:"已通过: "+e.datas.safeExamPassNumber+"人"},{value:e.datas.safeExamNoPassNumber,name:"未通过: "+e.datas.safeExamNoPassNumber+"人"}]}]},t.addanceObj=e.datas}))},reportOverview:function(){var t,e=this;t="3"==this.courseType?{complexTaskContentId:this.obj.taskContentId,workTypeId:this.obj.workTypeId}:{taskContentId:this.obj.taskContentId,workTypeId:this.obj.workTypeId},v.request(d.reportOverview,t).then((function(t){e.reportObj=t.datas}))},getWorkType:function(){var t=this;v.request(d.getWorkType,{id:this.obj.taskContentId}).then((function(e){t.workTypeList=e.datas}))},dropWorkType:function(t){this.obj.workTypeId=t.workTypeId,this.obj.workTypeName=t.workTypeName,this.workTypeName=t.workTypeName,this.$refs.rangeDropdownWork.close(),this.reportOverview()},getProgress:function(){var t=this;v.request("course-server/course/classroom/prep/list?type=1&taskContentId="+this.obj.taskContentId,{},"GET").then((function(e){t.previewList=e.datas}))},toGetAd:function(t){this.selectedCount=t},dropSort:function(t){this.sortName=t.label,this.sorts=t.id,this.$refs.rangeDropdownSort.close()},toDetail:function(t){uni.navigateTo({url:"../../myattendance/myattendance?taskContentId="+this.obj.taskContentId+"&stuId="+t.stuId})},prizeScroll:function(){var t=this;this.animate=!0,setTimeout((function(){t.allAlarmList.push(t.allAlarmList[0]),t.allAlarmList.shift(),t.animate=!1}),500)}},onBackPress:function(){}};e.default=h},"877f":function(t,e,a){"use strict";a.r(e);var i=a("f7ee"),s=a("cf22");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("395f");var o,c=a("f0c5"),l=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"24f24cac",null,!1,i["a"],o);e["default"]=l.exports},ac46:function(t,e,a){var i=a("d6fa");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("13067536",i,!0,{sourceMap:!1,shadowMode:!1})},cf22:function(t,e,a){"use strict";a.r(e);var i=a("5d2e"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},d6fa:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".top-kuai[data-v-24f24cac]{height:%?236?%;width:100%;background:#fff}.top-content[data-v-24f24cac]{height:%?160?%;width:100%}.top-content-left[data-v-24f24cac]{width:47%;height:100%;float:left;padding:%?10?%}.top-content-right[data-v-24f24cac]{width:53%;height:100%;float:left;padding-right:%?4?%}.to-home-down[data-v-24f24cac]{text-align:center;position:relative;top:30%;color:#1890ff;font-size:%?24?%}.img-c[data-v-24f24cac]{width:%?100?%;height:100%;float:left}.avatar[data-v-24f24cac]{width:%?90?%;height:%?90?%;border-radius:%?90?%}.class-name[data-v-24f24cac]{width:calc(100% - %?100?%);padding-left:%?10?%;float:left}.tit-name[data-v-24f24cac]{font-size:%?26?%;height:%?56?%;line-height:%?56?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bt-content[data-v-24f24cac]{height:calc(100% - %?236?%);padding:%?10?%}.bt-white[data-v-24f24cac]{background:#fff;border-radius:%?8?%;height:100%;overflow-y:auto;padding:%?6?%}.item-dro[data-v-24f24cac]{line-height:40px;height:40px;display:block;float:left;width:100%;text-align:center}.list-item[data-v-24f24cac]{height:%?100?%;line-height:%?100?%;border-bottom:1px solid #f5f5f5;display:-webkit-box;display:-webkit-flex;display:flex}.list-l[data-v-24f24cac]{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-r[data-v-24f24cac]{width:30%;display:inline-block;text-align:center}.img-status[data-v-24f24cac]{width:18px;height:16px;margin-right:5px}.table-tit-th[data-v-24f24cac]{height:%?110?%;line-height:%?110?%;font-weight:700}.tit-th[data-v-24f24cac]{text-align:center;width:25%;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?24?%}.color-red[data-v-24f24cac]{color:red}.color-blue[data-v-24f24cac]{color:#0078ff}.fa-input[data-v-24f24cac]{height:%?60?%;width:80%;border:%?2?% solid #ccc;margin:%?20?% auto}.top-tab[data-v-24f24cac]{height:%?72?%;width:100%;background:#fff;line-height:%?72?%}.top-tab-box[data-v-24f24cac]{width:50%;height:100%;margin:0 auto}.tabs[data-v-24f24cac]{width:50%;float:left;text-align:center}.tab-selected[data-v-24f24cac]{color:#1890ff;border-bottom:%?4?% solid #1890ff}.bc-wit-tu[data-v-24f24cac]{padding:%?6?%;margin-bottom:%?10?%;position:relative}.top-bc-wit[data-v-24f24cac]{line-height:%?80?%;float:left;width:100%}.wit-left-tit[data-v-24f24cac]{float:left;font-size:%?26?%}.wit-right-tit[data-v-24f24cac]{float:right;width:20%}.bot-bc-wit[data-v-24f24cac]{height:%?160?%;float:left;width:100%}.one-addance[data-v-24f24cac]{width:25%;float:left;line-height:%?50?%;text-align:center}.red-font[data-v-24f24cac]{font-size:%?48?%;color:#ff8447;display:inline-block}.blue-font[data-v-24f24cac]{font-size:%?48?%;color:#1890ff;display:inline-block}.ri-min-font[data-v-24f24cac]{display:inline-block;font-size:%?24?%}.bt-one-font[data-v-24f24cac]{display:block}.progress[data-v-24f24cac]{width:86%;height:%?14?%;background:#f5f5f5;border-radius:%?6?%;display:inline-block;border:1px solid #f5f5f5;margin-right:%?8?%}.last-true[data-v-24f24cac]{display:inline-block;width:%?32?%;height:%?32?%;border-radius:50%;font-size:%?24?%;background-color:#00c734;color:#fff;line-height:%?32?%;padding-left:%?6?%}.last-false[data-v-24f24cac]{display:inline-block;width:%?32?%;height:%?32?%;border-radius:50%;font-size:%?24?%;background-color:red;color:#fff;line-height:%?28?%;text-align:center}.last-font[data-v-24f24cac]{display:inline-block;color:#ccc;font-size:%?24?%}.name-pro[data-v-24f24cac]{font-size:%?26?%;color:#8b8b8b}.gre-bc[data-v-24f24cac]{background-color:#00c734}.fal-red-bc[data-v-24f24cac]{background:red;height:100%}.true-blue-bc[data-v-24f24cac]{background:#0093ff;height:100%}.adtance-top[data-v-24f24cac]{height:%?80?%;border-bottom:1px solid #ccc}.ul-wai[data-v-24f24cac]{height:%?60?%;overflow:hidden}#box[data-v-24f24cac]{height:%?60?%;overflow:hidden;background:#ff6860}.anim[data-v-24f24cac]{-webkit-transition:all .5s;transition:all .5s;margin-top:-30px}.alarm-top[data-v-24f24cac]{padding:0 %?10?%;width:100%;height:%?60?%;line-height:%?60?%}.new-info[data-v-24f24cac]{width:%?40?%;height:%?40?%;float:left;margin:%?10?% %?10?% 0 0}.font-alarm[data-v-24f24cac]{color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.all-count[data-v-24f24cac]{height:%?200?%;border-bottom:1px solid #ccc}.one-count[data-v-24f24cac]{height:%?40?%;width:33%;float:left;cursor:pointer;margin-bottom:%?6?%}.select-one-count[data-v-24f24cac]{display:inline-block;padding:0 5px;border-radius:4px}.select-one-count-bc[data-v-24f24cac]{background:#c3f0ff}.item-bl[data-v-24f24cac]{display:inline-block}.right-icon[data-v-24f24cac]{width:8px;height:14px;margin:0 10px}.sexInp[data-v-24f24cac]{display:inline-block;position:relative;top:%?4?%}\n\n/* 表格 */.table01[data-v-24f24cac]{display:table;width:100%;background:#fff}.th01[data-v-24f24cac]{display:table-row}.tr01[data-v-24f24cac]{display:table-row}.th01 .td01[data-v-24f24cac]{display:table-cell;text-align:center;height:%?70?%;border:1px solid #ebebeb;font-size:%?24?%;padding:0 %?20?%;vertical-align:middle}.tr01 .td01[data-v-24f24cac]{display:table-cell;text-align:center;height:%?70?%;border:1px solid #ebebeb;font-size:%?24?%;padding:0 %?20?%;color:#3c3e49;vertical-align:middle}.attendanceTable .tr01 .td01[data-v-24f24cac]{width:40%}.list-bottom[data-v-24f24cac]{text-align:right;margin-top:%?40?%;padding-right:%?40?%}.list-bottom uni-view[data-v-24f24cac], .list-bottom uni-text[data-v-24f24cac]{font-size:%?24?%}.thesisScore[data-v-24f24cac]{color:red}.lastScoreLevel[data-v-24f24cac]{color:#1890ff}.list-submit[data-v-24f24cac]{text-align:center;margin:%?80?% 0}.list-submit-btn[data-v-24f24cac]{display:inline-block;padding:%?20?% %?80?%;background-color:#1890ff;color:#fff;font-size:%?24?%;cursor:pointer;border-radius:%?10?%}.green[data-v-24f24cac]{color:#00c734;font-size:12px}.orgin[data-v-24f24cac]{color:#ff8b53}.red[data-v-24f24cac]{color:#fc544b}.blue[data-v-24f24cac]{color:#1890ff}",""]),t.exports=e},f7ee:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"top-kuai"},[i("v-uni-view",{staticClass:"top-content"},[i("v-uni-view",{staticClass:"top-content-left"},[i("v-uni-view",{staticClass:"img-c"},[i("v-uni-image",{staticClass:"avatar",attrs:{src:a("3c77")}})],1),i("v-uni-view",{staticClass:"class-name"},[i("v-uni-view",{staticClass:"tit-name"},[t._v(t._s(t.projectName))]),i("v-uni-view",{staticClass:"tit-name"},[t._v("人数："+t._s(t.count)+"/"+t._s(t.upLimit))])],1)],1),i("v-uni-view",{staticClass:"top-content-right"},[t.attendClassTime?i("v-uni-view",{staticClass:"to-home-down"},[t._v("下次上课时间："+t._s(t.attendClassTime))]):t._e()],1)],1),i("v-uni-view",{staticClass:"top-tab"},[i("v-uni-view",{staticClass:"top-tab-box"},[i("v-uni-view",{staticClass:"tabs",class:{"tab-selected":1==t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(1)}}},[t._v("考勤")]),i("v-uni-view",{staticClass:"tabs",class:{"tab-selected":2==t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(2)}}},[t._v("成绩")])],1)],1)],1),i("v-uni-view",{staticClass:"bt-content"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.current,expression:"current == 1"}],staticClass:"bt-white",staticStyle:{background:"none"}},[i("v-uni-view",{staticClass:"bc-wit-tu"},[i("v-uni-view",{staticClass:"bc-wit-title"},[t._v("统计")]),i("v-uni-view",{staticClass:"table01"},[i("v-uni-view",{staticClass:"th01"},[i("v-uni-view",{staticClass:"td01"},[t._v("总次数")]),i("v-uni-view",{staticClass:"td01"},[t._v("正常")]),i("v-uni-view",{staticClass:"td01"},[t._v("迟到")]),i("v-uni-view",{staticClass:"td01"},[t._v("早退")]),i("v-uni-view",{staticClass:"td01"},[t._v("缺课")]),i("v-uni-view",{staticClass:"td01"},[t._v("请假")])],1),i("v-uni-view",{staticClass:"tr01"},[i("v-uni-view",{staticClass:"td01"},[t._v(t._s(t.attendanceList.count))]),i("v-uni-view",{staticClass:"td01"},[t._v(t._s(t.attendanceList.normal))]),i("v-uni-view",{staticClass:"td01"},[t._v(t._s(t.attendanceList.late))]),i("v-uni-view",{staticClass:"td01"},[t._v(t._s(t.attendanceList.early))]),i("v-uni-view",{staticClass:"td01"},[t._v(t._s(t.attendanceList.lack))]),i("v-uni-view",{staticClass:"td01"},[t._v(t._s(t.attendanceList.leave))])],1)],1)],1),i("v-uni-view",{staticClass:"bc-wit-tu"},[i("v-uni-view",{staticClass:"bc-wit-title"},[t._v("考勤记录")]),i("v-uni-view",{staticClass:"table01 attendanceTable"},[i("v-uni-view",{staticClass:"th01"},[i("v-uni-view",{staticClass:"td01"},[t._v("课节")]),i("v-uni-view",{staticClass:"td01"},[t._v("打卡时间")]),i("v-uni-view",{staticClass:"td01"},[t._v("状态")])],1),t._l(t.attendanceList.vos,(function(e,a){return i("v-uni-view",{staticClass:"tr01"},[i("td",{staticClass:"td01"},[t._v(t._s(e.sectionName))]),i("td",{staticClass:"td01"},[t._v(t._s(e.gmtCreate))]),i("td",{staticClass:"td01"},[0==e.status?i("v-uni-view",{staticClass:"green"},[t._v("正常")]):t._e(),1==e.status?i("v-uni-view",{staticClass:"green"},[t._v("请假")]):t._e(),2==e.status?i("v-uni-view",{staticClass:"red"},[t._v("缺课")]):t._e(),3==e.status?i("v-uni-view",{staticClass:"orgin"},[t._v("迟到")]):t._e(),4==e.status?i("v-uni-view",{staticClass:"orgin"},[t._v("早退")]):t._e()],1)])}))],2)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==t.current,expression:"current == 2"}],staticClass:"bt-white"},[i("v-uni-view",{staticClass:"table-tit-th"},[i("v-uni-view",{staticClass:"tit-th"},[t._v("工种")]),i("v-uni-view",{staticClass:"tit-th"},[t._v("操作技能")]),i("v-uni-view",{staticClass:"tit-th"},[t._v("现场管理")]),i("v-uni-view",{staticClass:"tit-th"},[t._v("作品信息")])],1),t.achievementList.scoreVOS?[t._l(t.achievementList.scoreVOS,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list-item"},[i("v-uni-view",{staticClass:"tit-th"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"tit-th",class:{"color-red":!e.skillScoreLevel,"color-blue":e.skillScoreLevel}},[t._v(t._s(e.skillScoreLevel?e.skillScoreLevel:"-"))]),i("v-uni-view",{staticClass:"tit-th",class:{"color-red":!e.sceneScoreLevel,"color-blue":e.sceneScoreLevel}},[t._v(t._s(e.sceneScoreLevel?e.sceneScoreLevel:"-"))]),i("v-uni-view",{staticClass:"tit-th",class:{"color-red":!e.worksScoreLevel,"color-blue":e.worksScoreLevel}},[t._v(t._s(e.worksScoreLevel?e.worksScoreLevel:"-"))])],1)})),i("v-uni-view",{staticClass:"list-bottom"},[i("v-uni-view",[t._v("论文成绩："),i("v-uni-text",{staticClass:"thesisScore"},[t._v(t._s(null==t.achievementList.thesisScore?"待提交":t.achievementList.thesisScore))])],1),i("v-uni-view",[t._v("最终成绩："),i("v-uni-text",{staticClass:"lastScoreLevel"},[t._v(t._s(null==t.achievementList.lastScoreLevel?"未出分":t.achievementList.lastScoreLevel))])],1)],1)]:t._e()],2)],1)],1)},n=[]}}]);