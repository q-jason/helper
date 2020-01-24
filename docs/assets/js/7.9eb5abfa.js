(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{235:function(t,e,n){"use strict";var o=n(90);n.n(o).a},242:function(t,e,n){"use strict";n.r(e);n(207);var o,r,a=n(208),c=(n(39),n(126)),i="log",s="info",l="warn",u="err",f=(o={},Object(c.a)(o,i,"#4CAF50"),Object(c.a)(o,s,"#2196F3"),Object(c.a)(o,l,"#F57C00"),Object(c.a)(o,u,"#FF5252"),o),p=function(t){var e=t.type,n=t.title,o=t.desc,r=f[e]||f[i];if("string"==typeof t||"number"==typeof t)n=t,o=[];else{var a="number"==typeof n,c="string"==typeof n,s=o instanceof Array;if(r=o instanceof Error?f[u]:r,!n)throw new TypeError("title 必须存在");if(!1===a&&!1===c)throw new TypeError("title 必须是 String 或 Number 类型");!1===s&&(o=void 0!==o?[o]:[])}console.log(""),console.log("============================================================="),console.log("%c".concat(n),"color: white; font-size: 12px; background-color: ".concat(r,"; padding: 2px 5px; border-radius: 2px")),o.length&&(console.log("-"),o.forEach((function(t){console.log(t)})),console.log("-")),console.log("============================================================="),console.log("")},v=n(127),d={},g=function(t){if("string"!=typeof t)throw new TypeError("waitValue 的 name 参数必须为字符串");return new Promise((function(e,n){var o,r=d[t]=d[t]||(o={},Object(c.a)(o,"resolveArr",[]),Object(c.a)(o,"rejectArr",[]),o);r&&!0===r.ok?e(r.value):(r.resolveArr.push(e),r.rejectArr.push(n))}))},b=function(t,e){var n,o=d[t]=d[t]||(n={},Object(c.a)(n,"resolveArr",[]),Object(c.a)(n,"rejectArr",[]),n);if("string"!=typeof t)throw new TypeError("waitValue 的 name 参数必须为字符串");if(o.ok)return console.warn("来自 waitValue 的警告，".concat(t," 已被赋值，请勿重复通知"));e instanceof Error==!0?o.rejectArr.forEach((function(t){t(e)})):(o.resolveArr.forEach((function(t){t(e)})),o.ok=!0,o.value="object"===Object(v.a)(e)?JSON.parse(JSON.stringify(e)):e,o.resolveArr=null,o.rejectArr=null)},w={},y=function(t,e){var n=String(t),o=e;"object"===Object(v.a)(o)&&(o=JSON.parse(JSON.stringify(e))),w[n]=o},h=function(t,e){e(w[String(t)])},m=(n(75),function(t){return!!(null==t||"number"==typeof t&&isNaN(t)||""===t)||"string"==typeof t&&""===t.replace(/(^\s*)|(\s*$)/g,"")}),_={data:function(){return{test:null}},methods:{log:function(){p({title:"用户改变了所在地区",desc:["省份：山东省","城市：青岛市","地区：城阳区"]})},info:function(){p({type:"info",title:"接收到了后端给的数据，并格式化数据",desc:[{name:"姓名",age:18,other:[1,2,3]},{name:"班级 - 姓名",age:"18岁",other:[1,2,3]}]})},warn:function(){p({type:"warn",title:"转换后端数据时发现问题, 缺少字段",desc:[{name:"姓名",age:18,other:[1,2,3]}]})},err:function(){p({title:"请求接口失败，打印出错误原因",desc:new Error("失败了"),type:"warn"})},waitValue:(r=Object(a.a)(regeneratorRuntime.mark((function t(){var e,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={num:1},setTimeout((function(){b("test",e)}),2e3),t.next=4,g("test");case 4:return n=t.sent,p({title:"结束了",desc:n}),e={num:2},t.next=9,g("test");case 9:o=t.sent,p({title:"立刻返回",desc:o});case 11:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),cacheValue:function(){var t={sons1:[{name:"son1"},{name:"son2"}]};y("myData",t),p({title:"1. 首先定义了数据 data 并缓存了",desc:[t],type:"info"}),t.sons1.push({name:"son3"}),p({title:"2. 改变了数据 data",desc:[t],type:"info"}),h("myData",(function(e){t=e})),p({title:"3. 回退了数据 data",desc:[t],type:"info"})},isEmptyValue:function(){p({title:"测试空值情况",desc:[null,m(null),"-------------------","--------------------",void 0,m(void 0),"-------------------","--------------------",NaN,m(NaN),"-------------------","--------------------",'""',m(""),"-------------------","--------------------","字符串判断时会去除开头和结尾的空格再判断",'"      "',m("      ")],type:"err"}),p({title:"测试对象是否为空值",desc:[{},m({})]}),p({title:"测试数组是否为空值",desc:[[],m([])]}),p({title:"测试数字 0 是否为空值",desc:[0,m(0)]}),p({title:"测试 true/false 是否为空值",desc:["真：true",m(!0),"------","假：false",m(!1)]}),p({title:"测试字符串是否为空值",desc:["字符串",m("字符串")]})}}},j=(n(235),n(0)),O=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[t._v("\n      漂亮的日志(console)\n    ")]),t._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:t.log}},[t._v("\n        打印常规日志\n      ")]),t._v(" "),n("button",{on:{click:t.info}},[t._v("\n        打印信息日志\n      ")]),t._v(" "),n("button",{on:{click:t.warn}},[t._v("\n        打印警告日志\n      ")]),t._v(" "),n("button",{on:{click:t.err}},[t._v("\n        打印错误日志\n      ")])])]),t._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[t._v("\n      等值操作（wait-value）\n    ")]),t._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:t.waitValue}},[t._v("\n        等值操作（wait-value）\n      ")])])]),t._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[t._v("\n      缓存回退数据\n    ")]),t._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:t.cacheValue}},[t._v("\n        点击按钮后，看控制台吧\n      ")])])]),t._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[t._v("\n      点击按钮后，看控制台吧\n    ")]),t._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:t.isEmptyValue}},[t._v("\n        点击按钮后，看控制台吧\n      ")])])])])}),[],!1,null,"3d26cc9a",null);e.default=O.exports},90:function(t,e,n){}}]);