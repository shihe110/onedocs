(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{371:function(e,a,t){"use strict";t.r(a);var l=t(42),n=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"input输入框只能输入数字和小数点后两位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input输入框只能输入数字和小数点后两位"}},[e._v("#")]),e._v(" input输入框只能输入数字和小数点后两位")]),e._v(" "),t("ul",[t("li",[e._v("函数：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    function inputnum(obj,val){\n        obj.value = obj.value.replace(/[^\\d.]/g,""); //清除"数字"和"."以外的字符\n        obj.value = obj.value.replace(/^\\./g,""); //验证第一个字符是数字\n        obj.value = obj.value.replace(/\\.{2,}/g,""); //只保留第一个, 清除多余的\n        obj.value = obj.value.replace(".","$#$").replace(/\\./g,"").replace("$#$",".");\n        obj.value = obj.value.replace(/^(\\-)*(\\d+)\\.(\\d\\d).*$/,\'$1$2.$3\'); //只能输入两个小数\n    }\n')])])]),t("ul",[t("li",[e._v("调用：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' <input type="text"  name="" oninput="inputnum(this)">\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);