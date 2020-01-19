(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{250:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("blockquote",[s("p",[t._v("用于缓存和回退数据的场景")])]),t._v(" "),s("h2",{attrs:{id:"方法设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法设计"}},[t._v("#")]),t._v(" 方法设计")]),t._v(" "),s("blockquote",[s("p",[t._v("back 方法没有设计成基于 Promise\n该功能函数宗旨是简单的缓存、回退值，并不想有其他复杂逻辑")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("function")]),t._v(" "),s("th",[t._v("params")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("cacheValue.cache")]),t._v(" "),s("td",[t._v("name, value")]),t._v(" "),s("td",[t._v("缓存某数据，name 为缓存标识，value 为需要缓存的值，若为引用类型，内部会自动深拷贝")])]),t._v(" "),s("tr",[s("td",[t._v("cacheValue.back")]),t._v(" "),s("td",[t._v("name, backHandler")]),t._v(" "),s("td",[t._v("回退数据，name 为缓存标识，backHandler 为自定义的回退方法，实现回退逻辑")])])])]),t._v(" "),s("h2",{attrs:{id:"包罗万象的例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包罗万象的例子"}},[t._v("#")]),t._v(" 包罗万象的例子")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 定义了 data 并缓存 **/")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sons1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'son1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'son2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  cacheValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myData'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { sons1: [ { name: 'son1' }, { name: 'son2' } ] }")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 这里修改 data 数据 **/")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sons1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'son3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { sons1: [ { name: 'son1' }, { name: 'son2' }, { name: 'son3' } ] }")]),t._v("\n \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 由于某原因，回退数据 **/")]),t._v("\n  cacheValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myData'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cacheData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cacheData\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { sons1: [ { name: 'son1' }, { name: 'son2' } ] }")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);