(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demoList-CustomTabs"],{"4ebb":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .uni-title {\n\n} */.uni-title__box[data-v-1def1aa4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:8px 0;-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-title__base[data-v-1def1aa4]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-1def1aa4]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-1def1aa4]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-1def1aa4]{font-size:16px;color:#333;font-weight:700\n\t/* font-weight: 400; */}.uni-h4[data-v-1def1aa4]{font-size:14px;color:#333;font-weight:700\n\t/* font-weight: 300; */}.uni-h5[data-v-1def1aa4]{font-size:12px;color:#333;font-weight:700\n\t/* font-weight: 200; */}",""]),t.exports=n},"6beb":function(t,n,e){"use strict";e.r(n);var i=e("abe3"),a=e("f1e6");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("b492");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1def1aa4",null,!1,i["a"],r);n["default"]=u.exports},7515:function(t,n,e){var i=e("4ebb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("68bd251b",i,!0,{sourceMap:!1,shadowMode:!1})},8009:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{tabsList:[{text:"菜单1",name:"menu1",icon:"/static/logo.png",icon_a:"/static/logo.png",path:"pages/tabBar/Home"},{text:"菜单2",name:"menu2",icon:"/static/logo.png",icon_a:"/static/logo.png",path:"pages/tabBar/DemoList"}],tab:"menu1"}},methods:{handelTabChange:function(t){this.tab=t}}};n.default=i},9719:function(t,n,e){"use strict";e.r(n);var i=e("8009"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},9804:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniTitle:e("6beb").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"page"},[e("uni-title",{attrs:{title:t.tab,type:"h2",align:"center"}}),e("PageFooter"),e("TabBar",{attrs:{tab:t.tab,tabsList:t.tabsList},on:{handleTabChange:function(n){arguments[0]=n=t.$handleEvent(n),t.handelTabChange.apply(void 0,arguments)}}})],1)},o=[]},abe3:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[e("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},o=[]},b492:function(t,n,e){"use strict";var i=e("7515"),a=e.n(i);a.a},deef:function(t,n,e){"use strict";e.r(n);var i=e("9804"),a=e("9719");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var r,s=e("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5a388bfc",null,!1,i["a"],r);n["default"]=u.exports},f1e6:function(t,n,e){"use strict";e.r(n);var i=e("f56c"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},f56c:function(t,n,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};n.default=i}}]);