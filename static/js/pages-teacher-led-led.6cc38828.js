(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teacher-led-led"],{4432:function(t,i,e){"use strict";var n=e("777c"),a=e.n(n);a.a},"456b":function(t,i,e){"use strict";var n=e("4ea4");e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("141f")),o=e("2ce8"),l=e("7a60"),s={components:{wzpPicker:a.default},data:function(){return{fontNumber:0,mode:"one",defaultIndex:[3],param:{id:null,ledId:null,text:null,textAlignment:2,textSpeed:255,textColor:"0xff",textFontSize:72,textBlob:1},alignName:"居中",alignList:[{label:"左对齐"},{label:"右对齐"},{label:"居中"}],speedList:[{label:"255"},{label:"128"},{label:"64"},{label:"32"},{label:"16"},{label:"8"},{label:"1"}],colorName:"红色",colorList:[{label:"红色"}],boldList:[{label:"否"},{label:"是"}],fontList:[{label:"8"},{label:"9"},{label:"10"},{label:"11"},{label:"12"},{label:"14"},{label:"16"},{label:"18"},{label:"20"},{label:"22"},{label:"24"},{label:"26"},{label:"28"},{label:"36"},{label:"48"},{label:"72"},{label:"100"}]}},onLoad:function(t){this.param.id=t.id,this.param.ledId=t.ledId,uni.setNavigationBarTitle({title:t.name})},methods:{countNumber:function(t){this.param.text=t.detail.value,this.fontNumber=t.detail.value.length},alignClick:function(){this.$refs.wzpPickerAlign.showPicker()},onConfirmAlign:function(t){0===t.length&&t.push(0),this.param.textAlignment=t[0],this.alignName=this.alignList[t[0]].label},speedClick:function(){this.$refs.wzpPickerSpeed.showPicker()},onConfirmSpeed:function(t){0===t.length&&t.push(0),this.param.textSpeed=parseInt(this.speedList[t[0]].label)},colorClick:function(){this.$refs.wzpPickerColor.showPicker()},onConfirmColor:function(t){0===t.length&&t.push(0),this.colorName=this.colorList[t[0]].label,0==t[0]&&(this.param.textColor="0xff")},fontClick:function(){this.$refs.wzpPickerFont.showPicker()},onConfirmFont:function(t){0===t.length&&t.push(0),this.param.textFontSize=parseInt(this.fontList[t[0]].label)},boldClick:function(){this.$refs.wzpPickerBold.showPicker()},onConfirmBold:function(t){0===t.length&&t.push(0),this.param.textBlob=t[0]},save:function(){l.request(o.writeLedText,this.param).then((function(t){200==t.status&&(l.toast("设置成功"),setTimeout((function(){}),3e3))}))}}};i.default=s},6967:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".container[data-v-734c6722]{padding:%?20?%}.wrap[data-v-734c6722]{border-radius:%?10?%;background-color:#fff;padding:%?10?%;margin-bottom:%?20?%}.fontNumber[data-v-734c6722]{text-align:right}.iconfont[data-v-734c6722]{font-size:40px}.icon-gengduo[data-v-734c6722]{font-size:%?28?%}uni-textarea[data-v-734c6722]{max-height:%?200?%;min-height:%?150?%;fontSize:%?28?%;width:95%}.btn[data-v-734c6722]{color:#fff;font-size:%?28?%;background-color:#0369d6;margin-left:0}.item[data-v-734c6722]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-radius:%?10?%;padding:%?30?% %?10?%;margin-bottom:%?20?%}.item .left[data-v-734c6722]{margin-right:%?20?%}.item .middle[data-v-734c6722]{width:65%}.item .middle .name[data-v-734c6722]{font-size:%?30?%;font-weight:700}.item .middle .position[data-v-734c6722]{font-size:%?28?%;color:#8c8c8c}.item .right[data-v-734c6722]{width:30%;text-align:right}",""]),t.exports=i},"777c":function(t,i,e){var n=e("6967");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1a6426ca",n,!0,{sourceMap:!1,shadowMode:!1})},c08f:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"top-input wrap"},[e("v-uni-textarea",{attrs:{"auto-height":"true","placeholder-style":"color:#C0C0C0;fontSize:26rpx;",placeholder:"请输入需要显示的LED文字(100字以内)",maxlength:"100"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.countNumber.apply(void 0,arguments)}},model:{value:t.param.text,callback:function(i){t.$set(t.param,"text",i)},expression:"param.text"}}),e("v-uni-view",{staticClass:"fontNumber"},[t._v(t._s(t.fontNumber)+"/100")])],1),e("v-uni-view",{staticClass:"operate wrap"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("i",{staticClass:"iconfont icon-fangxiang"})]),e("v-uni-view",{staticClass:"middle"},[e("v-uni-view",{staticClass:"name"},[t._v("方向设定")]),e("v-uni-view",{staticClass:"position"},[t._v("设定LED滚动方向")])],1),e("v-uni-view",{staticClass:"right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.alignClick()}}},[e("span",[t._v(t._s(t.alignName))]),e("i",{staticClass:"iconfont icon-gengduo"})])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("i",{staticClass:"iconfont icon-sudu"})]),e("v-uni-view",{staticClass:"middle"},[e("v-uni-view",{staticClass:"name"},[t._v("速度设定")]),e("v-uni-view",{staticClass:"position"},[t._v("设定LED滚动速度")])],1),e("v-uni-view",{staticClass:"right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.speedClick()}}},[e("span",[t._v(t._s(t.param.textSpeed))]),e("i",{staticClass:"iconfont icon-gengduo"})])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("i",{staticClass:"iconfont icon-yanse"})]),e("v-uni-view",{staticClass:"middle"},[e("v-uni-view",{staticClass:"name"},[t._v("字体颜色")]),e("v-uni-view",{staticClass:"position"},[t._v("字体颜色")])],1),e("v-uni-view",{staticClass:"right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.colorClick()}}},[e("span",[t._v(t._s(t.colorName))]),e("i",{staticClass:"iconfont icon-gengduo"})])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("i",{staticClass:"iconfont icon-zitidaxiao-01"})]),e("v-uni-view",{staticClass:"middle"},[e("v-uni-view",{staticClass:"name"},[t._v("字体大小")]),e("v-uni-view",{staticClass:"position"},[t._v("设定字体大小")])],1),e("v-uni-view",{staticClass:"right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fontClick()}}},[e("span",[t._v(t._s(t.param.textFontSize))]),e("i",{staticClass:"iconfont icon-gengduo"})])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[e("i",{staticClass:"iconfont icon-jiacu"})]),e("v-uni-view",{staticClass:"middle"},[e("v-uni-view",{staticClass:"name"},[t._v("字体加粗")]),e("v-uni-view",{staticClass:"position"},[t._v("是否加粗文字")])],1),e("v-uni-view",{staticClass:"right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.boldClick()}}},[e("span",[t._v(t._s(1==t.param.textBlob?"是":"否"))]),e("i",{staticClass:"iconfont icon-gengduo"})])],1)],1),e("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.save()}}},[t._v("保存且显示")]),e("wzp-picker",{ref:"wzpPickerAlign",attrs:{mode:t.mode,defaultIndex:t.defaultIndex,pickerList:t.alignList},on:{onConfirm:function(i){arguments[0]=i=t.$handleEvent(i),t.onConfirmAlign.apply(void 0,arguments)}}}),e("wzp-picker",{ref:"wzpPickerSpeed",attrs:{mode:t.mode,defaultIndex:t.defaultIndex,pickerList:t.speedList},on:{onConfirm:function(i){arguments[0]=i=t.$handleEvent(i),t.onConfirmSpeed.apply(void 0,arguments)}}}),e("wzp-picker",{ref:"wzpPickerColor",attrs:{mode:t.mode,defaultIndex:t.defaultIndex,pickerList:t.colorList},on:{onConfirm:function(i){arguments[0]=i=t.$handleEvent(i),t.onConfirmColor.apply(void 0,arguments)}}}),e("wzp-picker",{ref:"wzpPickerFont",attrs:{mode:t.mode,defaultIndex:t.defaultIndex,pickerList:t.fontList},on:{onConfirm:function(i){arguments[0]=i=t.$handleEvent(i),t.onConfirmFont.apply(void 0,arguments)}}}),e("wzp-picker",{ref:"wzpPickerBold",attrs:{mode:t.mode,defaultIndex:t.defaultIndex,pickerList:t.boldList},on:{onConfirm:function(i){arguments[0]=i=t.$handleEvent(i),t.onConfirmBold.apply(void 0,arguments)}}})],1)},o=[]},d898:function(t,i,e){"use strict";e.r(i);var n=e("456b"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},ffff:function(t,i,e){"use strict";e.r(i);var n=e("c08f"),a=e("d898");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("4432");var l,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"734c6722",null,!1,n["a"],l);i["default"]=c.exports}}]);