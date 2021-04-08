(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{465:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"springboot之应用配置（定制配置）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot之应用配置（定制配置）"}},[t._v("#")]),t._v(" SpringBoot之应用配置（定制配置）")]),t._v(" "),a("h3",{attrs:{id:"springapplication配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springapplication配置"}},[t._v("#")]),t._v(" SpringApplication配置")]),t._v(" "),a("p",[t._v("SpringBoot自动化配置提供了大批的配置，我们还是可以通过SpringApplication类对应用启动进行配置。如下所示：")]),t._v(" "),a("p",[t._v("增加一个监听器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationListener")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ApplicationStartingEvent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @Override\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onApplicationEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ApplicationStartingEvent event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"监听到应用启动事件"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("SpringApplication app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBannerMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Banner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置关闭Banner")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListeners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//增加监听器")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("SpringApplication还支持很多和容器相关的配置，可以通过在SpringApplication的API中查找以set和add开头的方法。")]),t._v(" "),a("h3",{attrs:{id:"springapplicationbuilder配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springapplicationbuilder配置"}},[t._v("#")]),t._v(" SpringApplicationBuilder配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplicationBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bannerMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Banner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listeners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SpringBootInDepthApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("SpringApplication配置与SpringApplicationBuilder配置是等同的，前者的方法名去掉前缀（set和add）即后者的方法名，符合建造者模式的命名规则，如：setBannerMode()变为bannerMode()。具体有特殊情况请参照API文档。")]),t._v(" "),a("h3",{attrs:{id:"外部配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部配置"}},[t._v("#")]),t._v(" 外部配置")]),t._v(" "),a("p",[t._v("外部配置包括：application.properties/命令行/系统环境变量/yaml")]),t._v(" "),a("p",[t._v("这个能力是Environment（Profile、Property）提供的，我们可以通过三种方式来访问Environment中的属性：")]),t._v(" "),a("ul",[a("li",[t._v("1.使用@Value注解")]),t._v(" "),a("li",[t._v("2.注入Environment的bean")]),t._v(" "),a("li",[t._v("3.通过@ConfigurationProperties注解来访问")])]),t._v(" "),a("h4",{attrs:{id:"外部配置源与environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部配置源与environment"}},[t._v("#")]),t._v(" 外部配置源与Environment")]),t._v(" "),a("p",[t._v("Environment包含两部分的内容：Profile和Property")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Environment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PropertyResolver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveProfiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDefaultProfiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   boolean "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("acceptsProfiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Profiles profiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Environment的三个接口方法负责Profile相关内容，而它继承的PropertyResolver接口负责的是对Property的查询。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PropertyResolver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   boolean "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   @Nullable\n   String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String defaultValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   @Nullable\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Class"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" targetType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Class"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" targetType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" defaultValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequiredProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws IllegalStateException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequiredProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Class"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" targetType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws IllegalStateException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolvePlaceholders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveRequiredPlaceholders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws IllegalArgumentException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在Environment中每一个配置属性都是PropertySource，多个PropertySource可聚集成PropertySources。")]),t._v(" "),a("p",[t._v("PropertyResolver的实现类PropertySourcesPropertyResolver负责对PropertySources进行查询操作，即Environment可对PropertySources进行查询操作。")]),t._v(" "),a("p",[t._v("Spring不支持YAML文件作为PropertySource，Spring Boot使用YamlPropertySourceLoader来读取YAML文件并获得PropertySource。")]),t._v(" "),a("p",[t._v("在Spring Boot下外部配置属性的加载顺序优先级如下，先列的属性配置优先级高，先列的配置属性可覆盖后列的配置属性。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("命令行参数\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SPRING_APPLICATION_JSON")]),t._v("\n\nServletConfig 初始化参数\n\nServletContext 初始化参数\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JNDI")]),t._v(" （java"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("comp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("env）\n\nJava系统属性（System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ）\n\n操作系统变量\n\nRandomValuePropertySource 随机值\n\n应用部署jar包外部的application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yml\n\n应用部署jar包内部的application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yml\n\n应用部署jar包外部的application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yml\n\n应用部署jar包内部的application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yml\n\n@PropertySource\n\nSpringApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setDefaultProperties\n")])])]),a("h3",{attrs:{id:"容器其他的默认配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器其他的默认配置"}},[t._v("#")]),t._v(" 容器其他的默认配置")]),t._v(" "),a("p",[t._v("Spring Boot除了给我们做了大量的自动配置以外，还给我们提供了一些默认的容器配置，如：")]),t._v(" "),a("ul",[a("li",[t._v("应用监听")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("上面给我们一个提示：我们也可以通过相同的方法来注册监听器。在当前应用新建resources"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("META")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factories文件，内容加上：\n")])])]),a("ul",[a("li",[t._v("容器配置")]),t._v(" "),a("li",[t._v("Environment和应用配置")])])])}),[],!1,null,null,null);s.default=e.exports}}]);