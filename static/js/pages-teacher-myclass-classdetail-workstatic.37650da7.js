(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teacher-myclass-classdetail-workstatic"],{"0edc":function(t,a,e){var s=e("24fb");a=s(!1),a.push([t.i,".sums-content[data-v-00cb52be]{height:100%}.tit-cen[data-v-00cb52be]{position:fixed;top:%?20?%;color:#fff;z-index:999;text-align:center;width:90%;left:5%}.sums-content[data-v-00cb52be]{width:100%;padding:%?10?% %?30?%;background:#fff}.tables[data-v-00cb52be],\n.tables1[data-v-00cb52be]{width:100%;text-align:center;border-spacing:0;font-size:%?25?%}.tables td[data-v-00cb52be]{border:1px solid #ddd;padding:%?20?%}.tables td.td1[data-v-00cb52be]{border-right:0}.tables td.td2[data-v-00cb52be]{border-bottom:0}.tables td[data-v-00cb52be]:last-child{border-right:1px solid #ddd}.sumsTable[data-v-00cb52be]{margin-bottom:%?60?%}.tables1 td[data-v-00cb52be]{padding:%?20?%;border-left:1px solid #ddd;border-top:1px solid #ddd}.tables1 tr td[data-v-00cb52be]:last-child{border-right:1px solid #ddd}.tables1 tr[data-v-00cb52be]:first-child{background-color:#f2f2f2}.tables1 tr:first-child td[data-v-00cb52be]{border-right:0;border-bottom:0}.tables1 tr:first-child td[data-v-00cb52be]:last-child{border-right:1px solid #ddd}.tables1 tr:last-child td[data-v-00cb52be]{border-bottom:1px solid #ddd}.titles[data-v-00cb52be]{text-align:center;margin:%?30?% 0}.green[data-v-00cb52be]{color:#00c734;font-size:%?24?%}.orgin[data-v-00cb52be]{color:#ff8b53;font-size:%?24?%}.red[data-v-00cb52be]{color:#fc544b;font-size:%?24?%}.blue[data-v-00cb52be]{color:#1890ff;font-size:%?24?%}",""]),t.exports=a},"29ec":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=e("8f16"),d=e("cebd"),i={components:{},data:function(){return{stuName:"",stuNumber:"",obj:{studentId:"",taskContentId:""},dataObj:{}}},onLoad:function(t){t.id&&(this.obj.studentId=t.id),t.taskContentId&&(this.obj.taskContentId=t.taskContentId),t.stuName&&(this.stuName=t.stuName),t.number&&(this.stuNumber=t.number),"null"!=t.workTypeId&&(this.obj.workTypeId=t.workTypeId),this.attendanceStudentDetails()},methods:{attendanceStudentDetails:function(){var t=this;d.request(s.stuScoreStatistics,this.obj,"POST").then((function(a){t.dataObj=a.datas}))}}};a.default=i},"33e4":function(t,a,e){"use strict";e.r(a);var s=e("29ec"),d=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,(function(){return s[t]}))}(i);a["default"]=d.a},"35d0a":function(t,a,e){"use strict";var s=e("af85"),d=e.n(s);d.a},"5e94":function(t,a,e){"use strict";e.r(a);var s=e("977c"),d=e("33e4");for(var i in d)"default"!==i&&function(t){e.d(a,t,(function(){return d[t]}))}(i);e("35d0a");var n,c=e("f0c5"),r=Object(c["a"])(d["default"],s["b"],s["c"],!1,null,"00cb52be",null,!1,s["a"],n);a["default"]=r.exports},"977c":function(t,a,e){"use strict";var s;e.d(a,"b",(function(){return d})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return s}));var d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tit-cen"},[t._v(t._s(t.stuName)+"（"+t._s(t.stuNumber)+"）")]),e("v-uni-view",{staticClass:"sums-content"},[e("v-uni-view",{staticClass:"sumsTable"},[e("v-uni-view",{staticClass:"titles"},[t._v("作业统计")]),e("table",{staticClass:"tables"},[e("tr",[e("td",{staticClass:"td1 td2"},[t._v("名称")]),e("td",{staticClass:"td1 td2"},[t._v("总次数")]),e("td",{staticClass:"td1 td2"},[t._v("平均分")]),e("td",{staticClass:"td1 td2"},[t._v("已打分次数")]),e("td",{staticClass:"td1 td2"},[t._v("未打分次数")])]),e("tr",[e("td",{staticClass:"td1"},[t._v(t._s(t.dataObj.name))]),e("td",{staticClass:"td1 green"},[t._v(t._s(t.dataObj.totalTaskNum))]),e("td",{staticClass:"td1 orgin"},[t._v(t._s(t.dataObj.average))]),e("td",{staticClass:"td1"},[t._v(t._s(t.dataObj.scoringNum))]),e("td",{staticClass:"td1 red"},[t._v(t._s(t.dataObj.noScoringNum))])])])],1),e("v-uni-view",{staticClass:"sumsTable"},[e("v-uni-view",{staticClass:"titles"},[t._v("作业统计")]),e("table",{staticClass:"tables1"},[e("tr",[e("td",[t._v("作业名称")]),e("td",[t._v("考核项")]),e("td",[t._v("总分")])]),t._l(t.dataObj.vos,(function(a,s){return e("tr",[e("td",[t._v(t._s(a.taskName))]),e("td",[t._v(t._s(a.examNum)+"项")]),e("td",[t._v(t._s(a.score?a.score:"-"))])])}))],2)],1)],1)],1)},i=[]},af85:function(t,a,e){var s=e("0edc");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var d=e("4f06").default;d("4e974e04",s,!0,{sourceMap:!1,shadowMode:!1})}}]);