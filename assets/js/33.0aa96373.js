(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{363:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"获取容器applicationcontext的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取容器applicationcontext的几种方式"}},[t._v("#")]),t._v(" 获取容器ApplicationContext的几种方式")]),t._v(" "),s("h3",{attrs:{id:"方法一-在初始化时保存bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一-在初始化时保存bean"}},[t._v("#")]),t._v(" 方法一.在初始化时保存bean")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassPathXmlApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" con "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileSystemXmlApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"方法二-使用spring提供的工具类获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二-使用spring提供的工具类获取"}},[t._v("#")]),t._v(" 方法二.使用spring提供的工具类获取")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前提是要获取servletContext")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebApplicationContextUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWebApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContext")]),t._v(" sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" ac1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebApplicationContextUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequiredWebApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContext")]),t._v(" sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"方法三：继承自抽象类applicationobjectsupport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法三：继承自抽象类applicationobjectsupport"}},[t._v("#")]),t._v(" 方法三：继承自抽象类ApplicationObjectSupport")]),t._v(" "),s("p",[t._v("说明：抽象类ApplicationObjectSupport提供getApplicationContext()方法，可以方便的获取到ApplicationContext。\nSpring初始化时，会通过该抽象类的setApplicationContext(ApplicationContext context)方法将ApplicationContext 对象注入。")]),t._v(" "),s("h3",{attrs:{id:"方法四：继承自抽象类webapplicationobjectsupport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法四：继承自抽象类webapplicationobjectsupport"}},[t._v("#")]),t._v(" 方法四：继承自抽象类WebApplicationObjectSupport")]),t._v(" "),s("p",[t._v("说明：类似上面方法，调用getWebApplicationContext()获取WebApplicationContext")]),t._v(" "),s("h3",{attrs:{id:"方法五：实现接口applicationcontextaware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法五：实现接口applicationcontextaware"}},[t._v("#")]),t._v(" 方法五：实现接口ApplicationContextAware")]),t._v(" "),s("p",[t._v("说明：实现该接口的setApplicationContext(ApplicationContext context)方法，并保存ApplicationContext 对象。\nSpring初始化时，会通过该方法将ApplicationContext对象注入。")]),t._v(" "),s("p",[t._v("虽 然，spring提供了后三种方法可以实现在普通的类中继承或实现相应的类或接口来获取spring 的ApplicationContext对象，但是在使用是一定要注意实现了这些类或接口的普通java类一定要在Spring 的配置文件application-context.xml文件中进行配置。否则获取的ApplicationContext对象将为null。")]),t._v(" "),s("h3",{attrs:{id:"方法六-注意一点，在服务器启动时，spring容器初始化时，不能通过以下方法获取spring-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法六-注意一点，在服务器启动时，spring容器初始化时，不能通过以下方法获取spring-容器"}},[t._v("#")]),t._v(" 方法六:注意一点，在服务器启动时，Spring容器初始化时，不能通过以下方法获取Spring 容器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("WebApplicationContext wac = ContextLoader.getCurrentWebApplicationContext();\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);