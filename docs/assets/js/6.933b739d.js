(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{317:function(e,t,n){},380:function(e,t,n){"use strict";var r=n(317);n.n(r).a},387:function(e,t,n){"use strict";n.r(t);n(9);var r,o=n(357),a=n.n(o),i=(n(96),n(97),n(332)),s="log",c="info",l="warn",u="err",v=(r={},Object(i.a)(r,s,"#4CAF50"),Object(i.a)(r,c,"#2196F3"),Object(i.a)(r,l,"#F57C00"),Object(i.a)(r,u,"#FF5252"),r),f=function(e){var t=e.type,n=e.title,r=e.desc,o=v[t]||v[s];"string"==typeof e||"number"==typeof e?(n=e,r=[]):(o=r instanceof Error?v[e.type]?o:v[u]:o,r instanceof Array==!1&&(r=void 0!==r?[r]:[])),console.log(""),console.log("============================================================="),console.log("%c".concat(n),"color: white; font-size: 12px; background-color: ".concat(o,"; padding: 2px 5px; border-radius: 2px")),r.length&&(console.log("-"),r.forEach((function(e){console.log(e)})),console.log("-")),console.log("============================================================="),console.log("")},b=n(28),p={},d=function e(){Object(b.a)(this,e),this.resolveArr=[],this.rejectArr=[],this.value=null},_=function(e,t){var n=new Promise((function(t,n){var r=p[e]=p[e]||new d;r.value?t(r.value):(r.resolveArr.push(t),r.rejectArr.push(n))}));return t?(n.then((function(e){return t(null,e)})).catch((function(e){return t(e,null)})),null):n},g=function(e,t){var n=p[e]=p[e]||new d;if(n.value)return console.warn("来自 waitValue 的警告，".concat(e," 已被赋值，请勿重复通知"));t instanceof Error==!0?n.rejectArr.forEach((function(e){e(t)})):(n.resolveArr.forEach((function(e){e(t)})),n.value=t||!0,delete n.resolveArr,delete n.rejectArr)},h=n(64),m={},w=function(e,t){var n=String(e),r=t;"object"===Object(h.a)(r)&&(r=JSON.parse(JSON.stringify(t))),m[n]=r},k=function(e,t){t(m[String(e)])},y=(n(43),n(69),function(e){return!!(null==e||"number"==typeof e&&isNaN(e)||""===e)||"string"==typeof e&&""===e.replace(/(^\s*)|(\s*$)/g,"")}),C=(n(168),n(45),n(167),n(374),{betterShow:function(e,t){var n=null;switch(t.toLowerCase()){case"b":n=e;break;case"kb":n=1024*e;break;case"mb":n=1024*e*1024;break;case"gb":n=1024*e*1024*1024;break;case"tb":n=1024*e*1024*1024*1024;break;default:throw new Error("fileSizeConver：originUnit 参数单位错误 ".concat(originUnit))}var r=(n<102.4?n.toFixed(2)+"B":n<104857.6?(n/1024).toFixed(2)+"KB":n<107374182.4?(n/1048576).toFixed(2)+"MB":(n/1073741824).toFixed(2)+"GB")+"",o=r.indexOf(".");return"00"==r.substr(o+1,2)?r.substring(0,o)+r.substr(o+3,2):r},format:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=null,a=null,i=t.toLowerCase(),s=n.toLowerCase();switch(i){case"b":o=e;break;case"kb":o=1024*e;break;case"mb":o=1024*e*1024;break;case"gb":o=1024*e*1024*1024;break;case"tb":o=1024*e*1024*1024*1024;break;default:throw new Error("fileSizeConver：originUnit 参数单位错误 ".concat(t))}switch(s){case"b":a=o+"b";break;case"kb":a=o/1024+"kb";break;case"mb":a=o/1024/1024+"mb";break;case"gb":a=o/1024/1024/1024+"gb";break;case"tb":a=o/1024/1024/1024/1024+"tb";break;default:throw new Error("fileSizeConver：converUnit 参数单位错误 ".concat(n))}return r?a:parseFloat(a)}}),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{arrayBrackets:!1},n=new FormData,r=function(r){var o=e[r];null!=o&&(o instanceof Array?o.forEach((function(e,o){n.append(t.arrayBrackets?r+"[]":r,e)})):n.append(r,o))};for(var o in e)r(o);return n};n(173),n(104);var x=n(63),j=n(377),z=n(65),A=n(379),U=function(){function e(t,n){Object(b.a)(this,e),n=Object(j.a)({retry:!1,retryDelay:1e3},n),this.ws=null,this.data=[],this._events=new A.EventEmitter,this._activClose=!1,this._init(t,n)}return Object(z.a)(e,[{key:"_init",value:function(e,t){var n=this;this.ws=null,this.ws=new WebSocket(e),this.ws.onopen=function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=n._events).emit.apply(e,["open"].concat(r))},this.ws.onmessage=function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=n._events).emit.apply(e,["message"].concat(r))},this.ws.onerror=function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=n._events).emit.apply(e,["error"].concat(r))},this.ws.onclose=function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=n._events).emit.apply(e,["close"].concat(r))},this.on("message",(function(e){n.data.push(e.data)})),this.once("close",(function(r){if(!1===Boolean(t.retry)||!0===n._activClose)return null;setTimeout(Object(x.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"function"!=typeof t.retry){e.next=7;break}return e.next=4,t.retry();case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!0;case 8:return e.abrupt("return",e.t0);case 11:return e.prev=11,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))();case 2:r.sent&&n._init(e,t);case 4:case"end":return r.stop()}}),r)}))),t.retryDelay)}))}},{key:"on",value:function(e,t){return this._events.on(e,t)}},{key:"once",value:function(e,t){return this._events.once(e,t)}},{key:"off",value:function(e,t){return this._events.off(e,t)}},{key:"send",value:function(){var e;return(e=this.ws).send.apply(e,arguments)}},{key:"close",value:function(){var e;return this._activClose=!0,(e=this.ws).close.apply(e,arguments)}}]),e}(),E={data:function(){return{prefixZero:{before:null,after:null},fileSizeConver:{size:"",beforeUnit:"b",afterUnit:"mb",result:"",betterResult:""},jws:null}},methods:{log:function(){f("用户改变了所在地区"),f({title:"用户改变了所在地区",desc:["1. 改变地区","2. 获取数据"]})},info:function(){f({type:"info",title:"接收到了后端给的数据，并格式化数据",desc:[{name:"姓名",age:18,other:[1,2,3]},{name:"班级 - 姓名",age:"18岁",other:[1,2,3]}]})},warn:function(){f({type:"warn",title:"转换后端数据时发现问题, 缺少字段",desc:[{name:"姓名",age:18,other:[1,2,3]}]})},err:function(){f({title:"请求接口失败，打印出错误原因",desc:new Error("失败了")})},waitValue:function(){setTimeout((function(){g("data",10086)}),2e3),_("data").then((function(e){console.log("基于 Promise："+e)})).catch((function(e){console.err(e)})),_("data",(function(e,t){console.log("基于 callback："+t)})),f({title:"等值操作测试流程：",desc:["1. 约定好标志","2. 通过 waitValue.on 方法监听对应标志的赋值操作","3. 异步获取到值后通过 waitValue.emit 广播","4. waitValue.on 触发 callback 函数 或 进入 resolve 状态"]})},cacheValue:function(){var e={sons1:[{name:"son1"},{name:"son2"}]},t=e;w("myData",e),e.sons1.push({name:"son3"}),k("myData",(function(t){e=t})),f({title:"缓存值函数例子说明：",desc:["1. 定义了对象类型数据 data","2. 使用缓存值函数将 data 缓存（由于是引用类型，内部自动深拷贝，这里简称为 _data）","3. 修改 data 数据，通过 push 的方法加入新元素","4. 通过缓存值函数回退值 _data = data","-----------------------------","修改后的 data",t,"------------------------------","还原后的 data",e]})},isEmptyValue:function(){f({title:"测试空值情况",desc:[null,y(null),"-------------------","--------------------",void 0,y(void 0),"-------------------","--------------------",NaN,y(NaN),"-------------------","--------------------",'""',y(""),"-------------------","--------------------","字符串判断时会去除开头和结尾的空格再判断",'"      "',y("      ")],type:"err"}),f({title:"测试对象是否为空值",desc:[{},y({})]}),f({title:"测试数组是否为空值",desc:[[],y([])]}),f({title:"测试数字 0 是否为空值",desc:[0,y(0)]}),f({title:"测试 true/false 是否为空值",desc:["真：true",y(!0),"------","假：false",y(!1)]}),f({title:"测试字符串是否为空值",desc:["字符串",y("字符串")]})},prefixZeroHandler:function(){var e,t;this.prefixZero.after=(e=this.prefixZero.before,t=2,(Array(t).join(0)+e).slice(-t))},fileSizeConverHandler:function(){var e=this.fileSizeConver,t=e.size,n=e.beforeUnit,r=e.afterUnit,o=C.format(t,n,r),a=C.betterShow(parseFloat(o),r);this.fileSizeConver.result=o,this.fileSizeConver.betterResult=a},objToFormData:function(){var e={a:1,b:2,c:[1,2,3],d:void 0,f:null},t=S(e),n=S(e,{arrayBrackets:!0});console.log(t),a.a.post("https://www.baidu.com",t),a.a.post("https://www.baidu.com",n)},hidePartStr:function(){console.log(function(e,t,n,r){t=t||"*",n=n||null,r=r||null;var o=(e=String(e)).length,a=parseInt(o/2),i=parseInt((o-a)/2),s=i+a,c="";"number"==typeof n&&"number"==typeof r&&(n<0&&(n=o+n),r<0&&(r=o+r),a=++r-n,i=n,s=r);for(var l=0;l<a;l++)c+=t;return e.substr(0,i)+c+e.substr(s)}("17754123612","*",3,-4))},startJasonWebSocket:function(){var e=this,t=new U("ws://121.40.165.18:8800",{retry:function(){return new Promise((function(e,t){setTimeout((function(){e(!0)}),1e3)}))}});t.on("open",(function(n){f("连接成功"),e.jws=t})),t.on("message",(function(e){f({title:"接收到了消息",desc:e.data})})),t.on("close",(function(t){f("关闭了 ws 连接"),e.jws=null}))},sendJasonWebSocket:function(){this.jws.send(123123)},closeJasonWebSocket:function(){this.jws.close()}}},O=(n(380),n(42)),F=Object(O.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      漂亮的日志(console)\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:e.log}},[e._v("\n        打印常规日志\n      ")]),e._v(" "),n("button",{on:{click:e.info}},[e._v("\n        打印信息日志\n      ")]),e._v(" "),n("button",{on:{click:e.warn}},[e._v("\n        打印警告日志\n      ")]),e._v(" "),n("button",{on:{click:e.err}},[e._v("\n        打印错误日志\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      等值操作（wait-value）\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:e.waitValue}},[e._v("\n        等值操作（wait-value）\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      缓存回退数据\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:e.cacheValue}},[e._v("\n        点击按钮后，看控制台吧\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      判断值是否是为 null, undefined, '', '  ', NAN\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:e.isEmptyValue}},[e._v("\n        点击按钮后，看控制台吧\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      输入个位数字，点击按钮\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.prefixZero.before,expression:"prefixZero.before",modifiers:{number:!0}}],domProps:{value:e.prefixZero.before},on:{input:function(t){t.target.composing||e.$set(e.prefixZero,"before",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("input",{attrs:{type:"text",disabled:""},domProps:{value:e.prefixZero.after}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("button",{on:{click:e.prefixZeroHandler}},[e._v("\n        点击按钮后，看控制台吧\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      点击按钮后，看控制台吧\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("div",[n("p",[e._v("文件体积：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.fileSizeConver.size,expression:"fileSizeConver.size",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:e.fileSizeConver.size},on:{input:function(t){t.target.composing||e.$set(e.fileSizeConver,"size",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("div",[n("p",[e._v("转换前的单位：")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.fileSizeConver.beforeUnit,expression:"fileSizeConver.beforeUnit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fileSizeConver,"beforeUnit",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"b"}},[e._v("b")]),e._v(" "),n("option",{attrs:{value:"kb"}},[e._v("kb")]),e._v(" "),n("option",{attrs:{value:"mb"}},[e._v("mb")]),e._v(" "),n("option",{attrs:{value:"gb"}},[e._v("gb")]),e._v(" "),n("option",{attrs:{value:"tb"}},[e._v("tb")])])]),e._v(" "),n("div",[n("p",[e._v("转换后的单位：")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.fileSizeConver.afterUnit,expression:"fileSizeConver.afterUnit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fileSizeConver,"afterUnit",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"b"}},[e._v("b")]),e._v(" "),n("option",{attrs:{value:"kb"}},[e._v("kb")]),e._v(" "),n("option",{attrs:{value:"mb"}},[e._v("mb")]),e._v(" "),n("option",{attrs:{value:"gb"}},[e._v("gb")]),e._v(" "),n("option",{attrs:{value:"tb"}},[e._v("tb")])])]),e._v(" "),n("div",[n("p",[e._v("结果：")]),e._v(" "),n("p",[e._v(e._s(e.fileSizeConver.result))]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("更好的显示结果：")]),e._v(" "),n("p",[e._v(e._s(e.fileSizeConver.betterResult))])]),e._v(" "),n("button",{on:{click:e.fileSizeConverHandler}},[e._v("\n        转换\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      obj 转 formData\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:e.objToFormData}},[e._v("\n        点击后，看控制台，看 network 的请求（看参数用）（注意控制台会报错）\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      隐藏部分字符串\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[n("button",{on:{click:e.hidePartStr}},[e._v("\n        点击后看控制台\n      ")])])]),e._v(" "),n("div",{staticClass:"group"},[n("h3",{staticClass:"group-title"},[e._v("\n      JasonWebSocket\n    ")]),e._v(" "),n("div",{staticClass:"group-body"},[e.jws?e._e():n("button",{on:{click:e.startJasonWebSocket}},[e._v("\n        连接\n      ")]),e._v(" "),e.jws?[n("button",{on:{click:e.sendJasonWebSocket}},[e._v("\n          发送消息\n        ")]),e._v(" "),n("button",{on:{click:e.closeJasonWebSocket}},[e._v("\n          关闭连接\n        ")])]:e._e()],2)])])}),[],!1,null,"6bc289f4",null);t.default=F.exports}}]);