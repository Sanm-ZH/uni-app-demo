(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demoList-todoList-TodoList"],{"1b00":function(t,e,n){var o=n("f1b9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("65f3149a",o,!0,{sourceMap:!1,shadowMode:!1})},"27db":function(t,e,n){"use strict";var o=n("4ea4");n("4de4"),n("c740"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("3063")),a=o(n("5b16")),r={components:{Item:i.default,Tabs:a.default},data:function(){return{inputText:"",todoList:[],filter:"all"}},computed:{filterTodoList:function(){if("all"===this.filter)return this.todoList;var t="completed"===this.filter;return this.todoList.filter((function(e){return t===e.completed}))}},methods:{handelAddTodo:function(){this.inputText&&(this.todoList.unshift({id:+new Date,content:this.inputText,completed:!1}),this.inputText="",uni.pageScrollTo({duration:100,scrollTop:0}))},handleDeleteTodo:function(t){this.todoList=this.todoList.filter((function(e){return e.id!==t}))},handelOptCompleted:function(t){var e=this.todoList.findIndex((function(e){return e.id===t}));this.todoList[e]["completed"]=!this.todoList[e]["completed"]},handelChangeFilter:function(t){this.filter=t},handleClearAllCompleted:function(){this.todoList=this.todoList.filter((function(t){return!t.completed}))}}};e.default=r},"2bf1":function(t,e,n){"use strict";var o=n("1b00"),i=n.n(o);i.a},3063:function(t,e,n){"use strict";n.r(e);var o=n("bea1"),i=n("afa1");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("2bf1");var r,d=n("f0c5"),l=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"608b4a88",null,!1,o["a"],r);e["default"]=l.exports},"56f2":function(t,e,n){"use strict";var o=n("bd4f"),i=n.n(o);i.a},"5b16":function(t,e,n){"use strict";n.r(e);var o=n("e0cb"),i=n("bece");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("56f2");var r,d=n("f0c5"),l=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"3ac6f1bf",null,!1,o["a"],r);e["default"]=l.exports},7411:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"input-cont"},[n("v-uni-input",{attrs:{placeholder:"接下来要做什么？"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handelAddTodo.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.handelAddTodo.apply(void 0,arguments)}},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}})],1),t._l(t.filterTodoList,(function(e){return n("Item",{key:e.id,attrs:{todo:e},on:{del:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDeleteTodo.apply(void 0,arguments)},opt:function(e){arguments[0]=e=t.$handleEvent(e),t.handelOptCompleted.apply(void 0,arguments)}}})})),n("Tabs",{attrs:{todoList:t.todoList,filter:t.filter},on:{clearAll:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClearAllCompleted.apply(void 0,arguments)},changeFilter:function(e){arguments[0]=e=t.$handleEvent(e),t.handelChangeFilter.apply(void 0,arguments)}}}),n("PageFooter")],2)},a=[]},"7f44":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.helper[data-v-3ac6f1bf]{padding:10px;font-weight:100;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:30px;background-color:#fff;font-size:14px;-webkit-font-smoothing:antialiased;position:-webkit-sticky;position:sticky;bottom:var(--window-bottom);-webkit-box-shadow:0 0 5px #d2d4da;box-shadow:0 0 5px #d2d4da;margin-top:10px}.left[data-v-3ac6f1bf],\n.tabs[data-v-3ac6f1bf]{padding:10px 10px 0;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;font-weight:400}.left[data-v-3ac6f1bf],\n.clear[data-v-3ac6f1bf]{width:150px}.left[data-v-3ac6f1bf]{text-align:left}.left b[data-v-3ac6f1bf]{color:#007aff}.clear[data-v-3ac6f1bf]{text-align:right;cursor:pointer;border:1px solid #e3e3e3;height:30px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;border-radius:3px;margin-top:10px;color:#b9b9b9;font-weight:700;-webkit-transition-property:text-shadow,-webkit-box-shadow;transition-property:text-shadow,-webkit-box-shadow;transition-property:text-shadow,box-shadow;transition-property:text-shadow,box-shadow,-webkit-box-shadow;-webkit-transition-duration:.5s,1s;transition-duration:.5s,1s}.clear[data-v-3ac6f1bf]:active{text-shadow:5px 3px 3px;-webkit-box-shadow:0 0 10px 2px;box-shadow:0 0 10px 2px}.tabs[data-v-3ac6f1bf]{width:200px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.tabs > span[data-v-3ac6f1bf]{font-weight:700}.tabs *[data-v-3ac6f1bf]{display:inline-block;padding:0 10px;cursor:pointer}.tabs *.actived[data-v-3ac6f1bf]{background-color:#007aff;border-radius:3px;color:#fff;font-weight:700;-webkit-transition:background-color .5s;transition:background-color .5s}@media (max-width:28.125rem){.helper[data-v-3ac6f1bf]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:-webkit-sticky;position:sticky;bottom:0}.left[data-v-3ac6f1bf]{width:6.25rem;padding:0}.tabs[data-v-3ac6f1bf]{padding:0}.clear[data-v-3ac6f1bf]{position:relative;left:calc(100% - 9.7rem)}}@media (max-width:18.75rem){.helper[data-v-3ac6f1bf]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:-webkit-sticky;position:sticky;bottom:0}.left[data-v-3ac6f1bf]{padding:0}.tabs[data-v-3ac6f1bf]{padding:0}.clear[data-v-3ac6f1bf]{position:relative;left:0}}',""]),t.exports=e},8072:function(t,e,n){"use strict";n.r(e);var o=n("7411"),i=n("ed1d");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("c614");var r,d=n("f0c5"),l=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"398f34fc",null,!1,o["a"],r);e["default"]=l.exports},8893:function(t,e,n){"use strict";n("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{todoList:{type:Array,required:!0},filter:{type:String,required:!0}},data:function(){return{statusList:["all","active","completed"]}},computed:{unFinishedNum:function(){return this.todoList.filter((function(t){return!t.completed})).length}},methods:{handelToggleFilterClick:function(t){this.$emit("changeFilter",t)},handleClearAllCompletedClick:function(){this.$emit("clearAll")}}};e.default=o},9700:function(t,e,n){var o=n("d9d0");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("d1484198",o,!0,{sourceMap:!1,shadowMode:!1})},afa1:function(t,e,n){"use strict";n.r(e);var o=n("d12e"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},bd4f:function(t,e,n){var o=n("7f44");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("aaff185c",o,!0,{sourceMap:!1,shadowMode:!1})},bea1:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.todoStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.todoMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.todoEnd.apply(void 0,arguments)}}},[n("v-uni-view",{class:["todo-item",t.todo.completed?"completed":""],style:"right: "+t.right+"px"},[n("v-uni-view",{class:["toggle",t.todo.completed?"toggle-check":""],attrs:{type:"checkbox",checked:t.todo.completed},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOptCompletedClick.apply(void 0,arguments)}}}),n("v-uni-label",[t._v(t._s(t.todo.content))])],1),n("v-uni-view",{staticClass:"todo-remove",style:"right: "+t.delRigth+"px",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDelTodoCilck.apply(void 0,arguments)}}},[t._v("删 除")])],1)},a=[]},bece:function(t,e,n){"use strict";n.r(e);var o=n("8893"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},c614:function(t,e,n){"use strict";var o=n("9700"),i=n.n(o);i.a},d12e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{todo:{type:Object,required:!0}},data:function(){return{right:0,delBtnWidth:80}},computed:{delRigth:function(){return-this.delBtnWidth+this.right}},methods:{todoStart:function(t){console.log("开始触发");var e=t.touches[0];this.startX=e.clientX},todoMove:function(t){console.log("滑动"),this.right=0;var e=t.touches[0],n=this.startX-e.clientX;n>=20?(n>this.delBtnWidth&&(n=this.delBtnWidth),this.right=n):this.right=0},todoEnd:function(t){console.log("滑动结束"),Math.abs(this.right)<this.delBtnWidth&&(this.right=0)},handleDelTodoCilck:function(){this.$emit("del",this.todo.id)},handleOptCompletedClick:function(){this.$emit("opt",this.todo.id),this.right=0}}};e.default=o},d9d0:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-398f34fc]{height:100%}.input-cont[data-v-398f34fc]{padding:20px 0;padding-left:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;position:-webkit-sticky;position:sticky;top:var(--window-top);z-index:99;-webkit-box-shadow:0 0 5px #d2d4da;box-shadow:0 0 5px #d2d4da;margin-bottom:10px}.input-cont uni-input[data-v-398f34fc]{color:#007aff;text-align:center}',""]),t.exports=e},e0cb:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"helper"},[n("span",{staticClass:"left"},[n("b",{staticClass:"margin-right-5",domProps:{textContent:t._s(t.unFinishedNum)}}),t._v("iteams left")]),n("span",{staticClass:"tabs"},t._l(t.statusList,(function(e){return n("span",{key:e,class:[e,t.filter===e?"actived":""],domProps:{textContent:t._s(e)},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),function(){return t.handelToggleFilterClick(e)}.apply(void 0,arguments)}}})})),0),n("span",{staticClass:"clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClearAllCompletedClick.apply(void 0,arguments)}}},[t._v("Clear completed")])])},a=[]},ed1d:function(t,e,n){"use strict";n.r(e);var o=n("27db"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},f1b9:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-608b4a88]{position:relative;border-bottom:1px solid rgba(0,0,0,.06);overflow-x:hidden}.todo-item[data-v-608b4a88]{position:relative;background:#fff;font-size:18px;width:100%}.todo-item uni-label[data-v-608b4a88]{white-space:pre-line;word-break:break-all;padding:15px 15px 15px 5px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s;color:#000;font-weight:500}.completed[data-v-608b4a88]{color:#d9d9d9;text-decoration:line-through}.completed uni-label[data-v-608b4a88]{color:#c1c1c1}.toggle[data-v-608b4a88]{text-align:center;width:100%;height:40px;position:absolute;top:-3px;bottom:0;left:0;margin:auto 0;border:none;outline:none;-webkit-appearance:none;appearance:none}.toggle[data-v-608b4a88]:before{content:url(/static/round.png);position:absolute;left:12px;top:12px;cursor:pointer}.toggle-check[data-v-608b4a88]:before{content:url(/static/done.png);position:absolute;left:12px;top:12px;cursor:pointer}.todo-remove[data-v-608b4a88]{width:80px;height:100%;background-color:red;color:#fff;position:absolute;top:0;right:-80px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:16px}',""]),t.exports=e}}]);