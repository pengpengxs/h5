(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teacher-trend-record"],{"4d08":function(e,t,a){"use strict";a.r(t);var i=a("85a5"),r=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},"6f22":function(e,t,a){var i=a("d75f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("3f284930",i,!0,{sourceMap:!1,shadowMode:!1})},"85a5":function(e,t,a){"use strict";a("4160"),a("a434"),a("ac1f"),a("5319"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("8f16"),r=a("cebd"),n={data:function(){return{approvalopoin:"",imgUrlbase:r.commonUrl()+i.linkloadUrl,pictures:[],arrageTableObj:{},currId:null,currType:null,currentTab:null,editteachersSize:null,editstudentSize:null,currDate:null}},methods:{timeChange:function(e){return e?e.replace(/T/," "):"/"},getDetail:function(e){var t=this,a="";1==this.currentTab||2==this.currentTab||3==this.currentTab?0==this.currType?a=i.queryDetailsOnSaveDetails:1==this.currType&&(a=i.queryArrageTableDetails):4==this.currentTab&&(a=i.classTouchDetail),r.request(a,{id:e}).then((function(e){var a;200===e.status&&(t.arrageTableObj=e.datas,0==t.currType&&(t.approvalopoin=t.arrageTableObj.teachInfo,t.editteachersSize=t.arrageTableObj.teachersSize,t.editstudentSize=t.arrageTableObj.studentSize,t.pictures=(null===(a=t.arrageTableObj.sources)||void 0===a?void 0:a.fileData)||[],t.pictures.length>0&&t.pictures.forEach((function(e){e.url=r.commonUrl()+i.linkloadUrl+e.moduleName+"/"+e.fileNewName}))))}))},upPhoto:function(){var e=this;uni.chooseImage({count:6,sizeType:["original"],success:function(t){if("chooseImage:ok"===t.errMsg){var a=t.tempFilePaths,i=e.pictures||[];if(i.length+a.length>6)return void uni.showToast({title:"最多只能上传6张图片!",duration:2e3,icon:"none"});e.uploadImg(a)}}})},uploadImg:function(e){for(var t=e,a=[],n=0;n<t.length;n++)a.push({name:"files",uri:t[n]});var s=this.pictures||[];r.uploadFileMulti(i.batchUpload,a).then((function(e){200===e.status&&e.datas.forEach((function(e){s.push({id:e.id,fileOriginalName:e.fileOriginalName,url:r.commonUrl()+i.linkloadUrl+e.moduleName+"/"+e.fileNewName,uploadType:1})}))})),this.pictures=s},previewImg:function(e){var t=[];t[0]=e,uni.previewImage({current:0,urls:t})},deletrImg:function(e,t){this.pictures.splice(t,1),r.request(i.deletePhoto,[e.id]).then((function(e){200==e.status&&uni.showToast({title:e.message,duration:2e3,icon:"none"})}))},textareaInput:function(e){this.approvalopoin=e.detail.value},approvalSend:function(){var e=this,t={};if(this.approvalopoin){var a=[];this.pictures.length>0&&this.pictures.forEach((function(e){a.push(e.id)}));var n="";if(0==this.currType){if(!this.editteachersSize||!this.editstudentSize)return void uni.showToast({title:"考勤情况必须填写!",duration:3e3,icon:"none"});t={id:this.arrageTableObj.id,teachInfo:this.approvalopoin,sourceIds:a,teachersSize:this.editteachersSize,studentSize:this.editstudentSize},n=i.classTouchUpdate}else t={classId:this.arrageTableObj.classId,className:this.arrageTableObj.className,classTime:this.arrageTableObj.classTime,courseImg:this.arrageTableObj.courseImg,curriculumId:this.arrageTableObj.curriculumId,curriculumImg:this.arrageTableObj.curriculumImg,curriculumImgPath:this.arrageTableObj.curriculumImgPath,curriculumName:this.arrageTableObj.curriculumName,teachers:this.arrageTableObj.teachers,arrageTableId:this.currId,teachInfo:this.approvalopoin,sourceIds:a,teachersSize:this.arrageTableObj.teachersSize,studentSize:this.arrageTableObj.studentSize},n=i.classTouchAdd;r.request(n,t).then((function(t){200===t.status?(uni.showToast({title:t.message,duration:1500,icon:"none"}),setTimeout((function(){e.backFun()}),1500)):uni.showToast({title:t.message,duration:3e3,icon:"none"})}))}else uni.showToast({title:"教学情况必须填写!",duration:3e3,icon:"none"})},backFun:function(){var e=getCurrentPages(),t=e[e.length-2];t.$vm.navBackFun({isSellBack:!0}),uni.navigateBack()}},onLoad:function(e){var t=this;e&&e.id?(t.currId=e.id,t.currentTab=e.currentTab,t.currType=e.type,t.currDate=e.date,t.getDetail(e.id)):(t.currId=null,t.currentTab=null,t.currType=null),0==t.currType?uni.setNavigationBarTitle({title:"巡课记录"}):1==t.currType&&uni.setNavigationBarTitle({title:"新增巡课记录"})}};t.default=n},b28f:function(e,t,a){e.exports=a.p+"static/img/xunke_shangchuan@3x.e1590578.png"},bab3:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"blockone"},[0==e.currType?i("v-uni-view",{staticClass:"topmsg"},[i("v-uni-text",[e._v(e._s(e.timeChange(e.arrageTableObj.gmtCreate)))]),i("v-uni-text",[e._v(e._s(e.arrageTableObj.operator))])],1):e._e(),e.arrageTableObj.curriculumImg?i("v-uni-image",{staticClass:"photo",attrs:{src:e.imgUrlbase+e.arrageTableObj.curriculumImg}}):i("v-uni-image",{staticClass:"photo",attrs:{src:"/static/trend/xunke_tu@3x.png"}}),i("v-uni-view",{staticClass:"onemsg"},[i("v-uni-view",{staticClass:"titlemsg f-15"},[e._v(e._s(e.arrageTableObj.curriculumName))]),i("v-uni-view",{staticClass:"phonemsg"},[i("v-uni-text",{staticClass:"f-14"},[e._v(e._s(e.arrageTableObj.className))])],1),i("v-uni-view",{staticClass:"classmsg"},[i("v-uni-text",{staticClass:"f-14"},[e._v(e._s(e.arrageTableObj.classTime)+" "+e._s(e.arrageTableObj.teachers))])],1)],1)],1),i("v-uni-view",{staticClass:"blockone"},[i("v-uni-view",{staticClass:"leaveTimebox"},[i("v-uni-view",{staticClass:"leavetitle f-15"},[e._v("考勤情况")]),i("v-uni-view",{staticClass:"leaveTime"},[i("v-uni-view",{staticClass:"leavetextkq"},[i("v-uni-view",{staticClass:"leavetexttea"},[e._v("老师")]),0==e.currType?i("v-uni-view",{staticClass:"leavetextteanr"},[i("v-uni-input",{attrs:{type:"text"},model:{value:e.editteachersSize,callback:function(t){e.editteachersSize=t},expression:"editteachersSize"}})],1):1==e.currType?i("v-uni-view",{staticClass:"leavetextteanr"},[e._v(e._s(e.arrageTableObj.teachersSize))]):e._e()],1),i("v-uni-view",{staticClass:"leavetextkq"},[i("v-uni-view",{staticClass:"leavetexttea"},[e._v("学生")]),0==e.currType?i("v-uni-view",{staticClass:"leavetextteanr"},[i("v-uni-input",{attrs:{type:"text"},model:{value:e.editstudentSize,callback:function(t){e.editstudentSize=t},expression:"editstudentSize"}})],1):1==e.currType?i("v-uni-view",{staticClass:"leavetextteanr"},[e._v(e._s(e.arrageTableObj.studentSize))]):e._e()],1)],1)],1)],1),i("v-uni-view",{staticClass:"blockone"},[i("v-uni-view",{staticClass:"leavetitle f-15"},[e._v("教学情况")]),i("v-uni-view",{staticClass:"leaveTime"},[i("v-uni-view",{staticClass:"areabox"},[i("v-uni-textarea",{staticStyle:{"min-height":"80rpx",fontSize:"28rpx",width:"100%"},attrs:{"auto-height":"true",value:e.approvalopoin,"placeholder-style":"color:#C0C0C0;fontSize:24rpx;",maxlength:"300",placeholder:"请输入教学情况。"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.textareaInput.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"areatipbox"},[e._v("已输入 "+e._s(e.approvalopoin.length)+"/300")]),i("v-uni-view",{staticClass:"upimg"},[e._l(e.pictures,(function(t,a){return i("v-uni-view",{key:a,staticClass:"imgbox"},[i("v-uni-icon",{attrs:{type:"clear",size:"13"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.deletrImg(t,a)}}}),t.url?i("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:t.url},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.previewImg(t.url)}}}):i("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:"/static/images/upphoto.png"}})],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.pictures.length<6,expression:"pictures.length < 6"}],staticClass:"imgbox",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upPhoto.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:a("b28f")}})],1)],2)],1)],1)],1),i("v-uni-view",{staticClass:"submitbtns",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.approvalSend.apply(void 0,arguments)}}},[e._v(e._s(0==e.currType?"修改":"提交"))])],1)},n=[]},d75f:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".blockone[data-v-df8cf0d2]{overflow:hidden;background-color:#fff;padding:%?20?%;margin:%?20?%}.photo[data-v-df8cf0d2]{border:1px solid #f6f6f6;width:20%;height:%?170?%;float:left;margin-right:%?20?%}.onemsg[data-v-df8cf0d2]{width:77%;float:left;margin-top:%?20?%}.seficon[data-v-df8cf0d2]{width:%?32?%;height:%?32?%;display:inline-block;vertical-align:middle}.titlemsg[data-v-df8cf0d2]{font-weight:700}.phonemsg[data-v-df8cf0d2]{margin:%?16?% 0}.phonemsg uni-text[data-v-df8cf0d2]{font-size:%?24?%}.classmsg[data-v-df8cf0d2]{color:#bdbdbd}.classmsg uni-text[data-v-df8cf0d2]{font-size:%?24?%;margin:0 %?20?%}.classmsg uni-text[data-v-df8cf0d2]:first-child{margin-left:0}.leaveTimebox[data-v-df8cf0d2]{margin-bottom:%?30?%}.leavetitle[data-v-df8cf0d2]{font-size:%?28?%;color:#333;font-weight:700;border-bottom:%?2?% solid #f2f2f2;height:%?70?%;line-height:%?56?%;padding-left:%?30?%}.leaveTime[data-v-df8cf0d2]{padding-left:%?30?%}.leavetextkq[data-v-df8cf0d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:%?20?% 0}.leavetexttea[data-v-df8cf0d2]{width:%?80?%;color:#999;font-size:%?28?%}.leavetextteanr[data-v-df8cf0d2]{width:80%;font-size:%?28?%}.leavetextteanr uni-input[data-v-df8cf0d2]{color:#333;border:%?2?% solid #f2f2f2;width:60%;font-size:%?24?%;padding-left:%?6?%}.leavetext[data-v-df8cf0d2]{color:#333;font-size:%?24?%}.areabox[data-v-df8cf0d2]{width:100%;margin-top:%?20?%}.areatipbox[data-v-df8cf0d2]{color:#999;font-size:%?20?%;text-align:right}.upimg[data-v-df8cf0d2]{overflow:hidden;margin-top:%?20?%}.imgbox[data-v-df8cf0d2]{position:relative;float:left;margin-left:%?20?%}.imgbox uni-icon[data-v-df8cf0d2]{position:absolute;top:0;right:0;z-index:1}.submitbtns[data-v-df8cf0d2]{text-align:center;height:%?70?%;line-height:%?70?%;width:95%;margin:0 auto;background-color:#0369d6;border-radius:%?10?%;color:#fff;font-size:%?32?%}.topmsg[data-v-df8cf0d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?2?% solid #f2f2f2;margin-bottom:%?20?%;padding-bottom:%?20?%}.topmsg uni-text[data-v-df8cf0d2]{color:#999;font:%?24?%}",""]),e.exports=t},dc21:function(e,t,a){"use strict";var i=a("6f22"),r=a.n(i);r.a},ee67:function(e,t,a){"use strict";a.r(t);var i=a("bab3"),r=a("4d08");for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("dc21");var s,l=a("f0c5"),c=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,"df8cf0d2",null,!1,i["a"],s);t["default"]=c.exports}}]);