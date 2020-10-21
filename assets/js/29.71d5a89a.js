(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{383:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"ajax入门总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax入门总结"}},[t._v("#")]),t._v(" ajax入门总结")]),t._v(" "),a("h2",{attrs:{id:"_1-什么是ajax？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是ajax？"}},[t._v("#")]),t._v(" 1.什么是ajax？")]),t._v(" "),a("p",[t._v("js和xml异步技术，动态创建动态网页技术。")]),t._v(" "),a("h2",{attrs:{id:"_2-ajax的工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ajax的工作原理"}},[t._v("#")]),t._v(" 2.ajax的工作原理")]),t._v(" "),a("ul",[a("li",[t._v("XMLHttpRequest对象发送HttpRequest请求")]),t._v(" "),a("li",[t._v("服务器处理并返回结果")]),t._v(" "),a("li",[t._v("js处理返回数据更新页面内容")])]),t._v(" "),a("h2",{attrs:{id:"_3-javascript关键对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-javascript关键对象"}},[t._v("#")]),t._v(" 3.JavaScript关键对象")]),t._v(" "),a("p",[t._v("XMLHttpRequest对象（异步的与服务器交换数据）")]),t._v(" "),a("h2",{attrs:{id:"_4-ajax请求的方法有哪些？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ajax请求的方法有哪些？"}},[t._v("#")]),t._v(" 4.ajax请求的方法有哪些？")]),t._v(" "),a("ul",[a("li",[t._v("open()")]),t._v(" "),a("li",[t._v("send()")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("open(method,url,)")]),t._v(" "),a("td",[t._v("规定请求的类型、URL 以及是否异步处理请求。method：请求的类型；GET 或 POST   url：文件在服务器上的位置 async：true（异步）或 false（同步）")])]),t._v(" "),a("tr",[a("td",[t._v("send(string)")]),t._v(" "),a("td",[t._v("将请求发送到服务器。string：仅用于 POST 请求")])])])]),t._v(" "),a("p",[t._v("发送一个请求的示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// get请求\nxmlhttp.open("GET","/try/ajax/demo_get2.php?fname=Henry&lname=Ford",true);\nxmlhttp.send();\n\n// post请求\nxmlhttp.open("POST","/try/ajax/demo_post.php",true);\nxmlhttp.send();\n\n\nxmlhttp.open("POST","/try/ajax/demo_post2.php",true);\nxmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");\nxmlhttp.send("fname=Henry&lname=Ford");\n')])])]),a("h2",{attrs:{id:"_5-setrequestheader-header-value-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-setrequestheader-header-value-方法"}},[t._v("#")]),t._v(" 5.setRequestHeader(header,value)方法")]),t._v(" "),a("h2",{attrs:{id:"_6-异步请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-异步请求"}},[t._v("#")]),t._v(" 6.异步请求")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// Async=true\nxmlhttp.onreadystatechange=function()\n{\n    if (xmlhttp.readyState==4 && xmlhttp.status==200)\n    {\n        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;\n    }\n}\nxmlhttp.open("GET","/try/ajax/ajax_info.txt",true);\nxmlhttp.send();\n')])])]),a("h2",{attrs:{id:"_7-服务端相应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-服务端相应"}},[t._v("#")]),t._v(" 7.服务端相应")]),t._v(" "),a("p",[t._v("XMLHttpRequest的响应属性：responseText或responseXML")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("responseText")]),t._v(" "),a("td",[t._v("获得字符串形式的响应数据")])]),t._v(" "),a("tr",[a("td",[t._v("responseXML")]),t._v(" "),a("td",[t._v("获得xml形式的响应数据")])])])]),t._v(" "),a("p",[t._v("xml形式响应")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('xmlDoc=xmlhttp.responseXML;\ntxt="";\nx=xmlDoc.getElementsByTagName("ARTIST");\nfor (i=0;i<x.length;i++)\n{\n    txt=txt + x[i].childNodes[0].nodeValue + "<br>";\n}\ndocument.getElementById("myDiv").innerHTML=txt;\n')])])]),a("h2",{attrs:{id:"_8-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-事件"}},[t._v("#")]),t._v(" 8.事件")]),t._v(" "),a("p",[t._v("readyState状态属性改变触发onreadystatechange事件")]),t._v(" "),a("p",[t._v("XMLHttpRequest 对象的三个重要的属性：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("onreadystatechange")]),t._v(" "),a("td",[t._v("函数名，当readyState改变时，就会调用该函数")])]),t._v(" "),a("tr",[a("td",[t._v("readyState")]),t._v(" "),a("td",[t._v("请求对象的状态 0：请求初始化 1：服务器连接已建立 2：请求已接收 3：请求处理中 4：请求已完成，且响应已就绪")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("200：“OK”  404：未找到页面")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);