(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{413:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"springboot应用监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot应用监控"}},[t._v("#")]),t._v(" SpringBoot应用监控")]),t._v(" "),s("h2",{attrs:{id:"springboot监控和管理端点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot监控和管理端点"}},[t._v("#")]),t._v(" SpringBoot监控和管理端点")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("端点名")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("actuator")]),t._v(" "),s("td",[t._v("所有EndPoint的列表，需加入spring HATEOAS支持")])]),t._v(" "),s("tr",[s("td",[t._v("autoconfig")]),t._v(" "),s("td",[t._v("当前应用的所有自动配置信息")])]),t._v(" "),s("tr",[s("td",[t._v("auditevents")]),t._v(" "),s("td",[t._v("审计事件")])]),t._v(" "),s("tr",[s("td",[t._v("beans")]),t._v(" "),s("td",[t._v("所有Bean的信息")])]),t._v(" "),s("tr",[s("td",[t._v("configprops")]),t._v(" "),s("td",[t._v("所有配置属性")])]),t._v(" "),s("tr",[s("td",[t._v("dump")]),t._v(" "),s("td",[t._v("线程状态信息")])]),t._v(" "),s("tr",[s("td",[t._v("env")]),t._v(" "),s("td",[t._v("当前环境信息")])]),t._v(" "),s("tr",[s("td",[t._v("health")]),t._v(" "),s("td",[t._v("应用健康状况")])]),t._v(" "),s("tr",[s("td",[t._v("info")]),t._v(" "),s("td",[t._v("当前应用信息")])]),t._v(" "),s("tr",[s("td",[t._v("metrics")]),t._v(" "),s("td",[t._v("应用的各项指标")])]),t._v(" "),s("tr",[s("td",[t._v("mappings")]),t._v(" "),s("td",[t._v("应用@RequestMapping映射路径")])]),t._v(" "),s("tr",[s("td",[t._v("shutdown")]),t._v(" "),s("td",[t._v("关闭当前应用（默认关闭）")])]),t._v(" "),s("tr",[s("td",[t._v("trace")]),t._v(" "),s("td",[t._v("追踪信息（最新的http请求）")])])])]),t._v(" "),s("h2",{attrs:{id:"actuator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actuator"}},[t._v("#")]),t._v(" Actuator")]),t._v(" "),s("p",[t._v("在生产环境中，需要对应用程序的状态进行监控。前面我们已经介绍了使用JMX对Java应用程序包括JVM进行监控，使用JMX需要把一些监控信息以MBean的形式暴露给JMX Server，而Spring Boot已经内置了一个监控功能，它叫Actuator。")]),t._v(" "),s("p",[t._v("使用非常简单，只需添加如下依赖：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-actuator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后正常启动应用程序，Actuator会把它能收集到的所有信息都暴露给JMX。此外，Actuator还可以通过URL/actuator/挂载一些监控点，例如，输入http://localhost:8080/actuator/health，我们可以查看应用程序当前状态：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v('{\n    "status": "UP"\n}\n')])])]),s("p",[t._v("许多网关作为反向代理需要一个URL来探测后端集群应用是否存活，这个URL就可以提供给网关使用。")]),t._v(" "),s("p",[t._v("Actuator默认把所有访问点暴露给JMX，但处于安全原因，只有health和info会暴露给Web。Actuator提供的所有访问点均在官方文档列出，要暴露更多的访问点给Web，需要在application.yml中加上配置：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("management:\n  endpoints:\n    web:\n      exposure:\n        include: info, health, beans, env, metrics\n")])])]),s("p",[t._v("要特别注意暴露的URL的安全性，例如，/actuator/env可以获取当前机器的所有环境变量，不可暴露给公网。")])])}),[],!1,null,null,null);a.default=r.exports}}]);