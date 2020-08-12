(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{401:function(t,a,s){"use strict";s.r(a);var r=s(42),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"springboot常用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot常用配置"}},[t._v("#")]),t._v(" SpringBoot常用配置")]),t._v(" "),s("h2",{attrs:{id:"springboot之关闭特定自动配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot之关闭特定自动配置"}},[t._v("#")]),t._v(" SpringBoot之关闭特定自动配置")]),t._v(" "),s("p",[t._v("关闭特定的自动配置应该使用@SpringBootApplication注解的exclude参数\n@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})")]),t._v(" "),s("h2",{attrs:{id:"定制banner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定制banner"}},[t._v("#")]),t._v(" 定制Banner")]),t._v(" "),s("ul",[s("li",[t._v("1.在src/main/resources下新建一个banner.txt")]),t._v(" "),s("li",[t._v("2.通过字符画生成网站，生成图案，复制到banner.txt中。")])]),t._v(" "),s("h2",{attrs:{id:"关闭banner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭banner"}},[t._v("#")]),t._v(" 关闭banner")]),t._v(" "),s("ul",[s("li",[t._v("1.main入口修改")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxxApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setShowBanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("2.使用fluent API修改")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplicationBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxxApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showBanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"starter-pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starter-pom"}},[t._v("#")]),t._v(" starter pom")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("spring-boot-starter")]),t._v(" "),s("td",[t._v("spring boot核心starter，包含自动配置，日志，yaml配置文件的支持")])]),t._v(" "),s("tr",[s("td",[t._v("spring-boot-starter-actuator")]),t._v(" "),s("td",[t._v("准生产特性，用来监控和管理应用")])]),t._v(" "),s("tr",[s("td",[t._v("spring-boot-starter-remote-shell")]),t._v(" "),s("td",[t._v("提供基于ssh协议的监控和管理")])]),t._v(" "),s("tr",[s("td",[t._v("spring-boot-starter-amqp")]),t._v(" "),s("td",[t._v("使用spring-rabbit来支持AMQP")])]),t._v(" "),s("tr",[s("td",[t._v("spring-boot-starter-aop")]),t._v(" "),s("td",[t._v("使用spring-aop和AspectJ支持面向切面编程")])]),t._v(" "),s("tr",[s("td",[t._v("spring-boot-starter-batch")]),t._v(" "),s("td",[t._v("对spring Batch的支持")])]),t._v(" "),s("tr",[s("td",[t._v("spring-boot-starter-cache")]),t._v(" "),s("td",[t._v("对spring Cache抽象的支持")])])])]),t._v(" "),s("h2",{attrs:{id:"使用xml配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用xml配置"}},[t._v("#")]),t._v(" 使用xml配置")]),t._v(" "),s("p",[t._v("通过使用@ImportResource来加载xml配置")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ImportResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:some-context.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:another-context.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"外部配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部配置"}},[t._v("#")]),t._v(" 外部配置")]),t._v(" "),s("ul",[s("li",[t._v("1.命令行参数配置")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("java "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jar xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n")])])]),s("h2",{attrs:{id:"常规属性配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常规属性配置"}},[t._v("#")]),t._v(" 常规属性配置")]),t._v(" "),s("p",[t._v("通过使用@PropertySource指明properties文件的位置，然后通过@Value注入值。")]),t._v(" "),s("h2",{attrs:{id:"类型安全的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型安全的配置"}},[t._v("#")]),t._v(" 类型安全的配置")]),t._v(" "),s("p",[t._v("通过@ConfigurationProperties将properties属性和一个bean机器属性关联，从而实现类型安全的配置。")]),t._v(" "),s("p",[t._v("@ConfigurationProperties加载配置，通过prefix属性指定properties配置的前缀\n通过locations指定文件的位置。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shihe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:config/shihe.properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"日志配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[t._v("#")]),t._v(" 日志配置")]),t._v(" "),s("p",[t._v("配置日志级别：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("loggin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframwork"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DEBUG\n")])])]),s("p",[t._v("配置日志文件")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("D")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mylog"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log\n")])])]),s("h2",{attrs:{id:"profile配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profile配置"}},[t._v("#")]),t._v(" Profile配置")]),t._v(" "),s("p",[t._v("切换配置环境\napplication-dev.properties\napplication-pro.properties")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dev\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);