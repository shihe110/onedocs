(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{440:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"springboot之自动化配置原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot之自动化配置原理"}},[t._v("#")]),t._v(" SpringBoot之自动化配置原理")]),t._v(" "),a("h3",{attrs:{id:"springboot加载自动配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot加载自动配"}},[t._v("#")]),t._v(" SpringBoot加载自动配")]),t._v(" "),a("p",[t._v("Spring Boot的入口类是一个简单的包含可执行main()方法的Java类，如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@SpringBootApplication \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      SpringApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个类就像钥匙一样，打开自动化配置大门。\n该类提供了一个类和一个注解。")]),t._v(" "),a("ul",[a("li",[t._v("SpringApplication类")])]),t._v(" "),a("p",[t._v("该类开启了一个容器，即springIOC容器。它在非Web环境中为我们新建一个AnnotationConfigApplicationContext，Web环境中新建AnnotationConfigServletWebServerApplicationContext，响应式Web环境中新建AnnotationConfigReactiveWebServerApplicationContext")]),t._v(" "),a("ul",[a("li",[t._v("@SpringBootApplication注解")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ElementType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RetentionPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@Documented\n@Inherited\n@SpringBootConfiguration\n@EnableAutoConfiguration\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentScan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    excludeFilters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FilterType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CUSTOM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    classes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("TypeExcludeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FilterType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CUSTOM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    classes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("AutoConfigurationExcludeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个组合注解组合了3个注解：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@SpringBootConfiguration # 配置类"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("也是一个组合注解，组合了@Configuration 即声明配置类\n@EnableAutoConfiguration # 开启自动配注解\n@ComponentScan # 提供组件扫描注册bean\n")])])]),a("p",[t._v("@SpringBootConfiguration注解-也是一个组合注解，组合了@Configuration 即声明配置类。")]),t._v(" "),a("p",[t._v("@ComponentScan注解提供组件扫描功能。那么自动化配置就只能来自@EnableAutoConfiguration注解。")]),t._v(" "),a("p",[t._v("@SpringBootConfiguration注解定义如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ElementType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RetentionPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@Documented\n@Inherited\n@AutoConfigurationPackage\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("AutoConfigurationImportSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAutoConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    String "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENABLED_OVERRIDE_PROPERTY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.boot.enableautoconfiguration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Class"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("excludeName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("@AutoConfigurationPackage注解也是一个组合注解，导入一个注册器。")]),t._v(" "),a("p",[t._v("@Import({AutoConfigurationImportSelector.class})选择导入自动化配置。")]),t._v(" "),a("p",[t._v("AutoConfigurationImportSelector类选择导入哪些自动配置。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigurationImportSelector")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeferredImportSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BeanClassLoaderAware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ResourceLoaderAware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BeanFactoryAware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EnvironmentAware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ordered "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final AutoConfigurationImportSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AutoConfigurationEntry "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EMPTY_ENTRY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigurationImportSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AutoConfigurationEntry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动化配置列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO_IMPORTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final Log logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LogFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AutoConfigurationImportSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final String "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PROPERTY_NAME_AUTOCONFIGURE_EXCLUDE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.autoconfigure.exclude"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" ConfigurableListableBeanFactory beanFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Environment environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" ClassLoader beanClassLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" ResourceLoader resourceLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" AutoConfigurationImportSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigurationClassFilter configurationClassFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置类的过滤器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("即该类的作用是选择提供了自动化配置的列表。")]),t._v(" "),a("p",[t._v("该类中的获取自动化配置列表的方法如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" AutoConfigurationImportSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AutoConfigurationEntry "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAutoConfigurationEntry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("AnnotationMetadata annotationMetadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EMPTY_ENTRY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            AnnotationAttributes attributes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" configurations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCandidateConfigurations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            configurations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeDuplicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" exclusions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkExcludedClasses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exclusions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            configurations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfigurationClassFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireAutoConfigurationImportEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigurationImportSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AutoConfigurationEntry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中有一个getCandidateConfigurations方法，顾名思义-获取候选配置。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCandidateConfigurations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("AnnotationMetadata metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AnnotationAttributes attributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" configurations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SpringFactoriesLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadFactoryNames")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSpringFactoriesLoaderFactoryClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBeanClassLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Assert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No auto configuration classes found in META-INF/spring.factories. If you are using a custom packaging, make sure that file is correct."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("即使用List"),a("String",[t._v(" configurations = SpringFactoriesLoader.loadFactoryNames(this.getSpringFactoriesLoaderFactoryClass(), this.getBeanClassLoader());方法获取配置列表。")])],1),t._v(" "),a("p",[t._v("而加载的路径位于：META-INF/spring.factories该文件声明了自动化配置的配置项")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# Auto Configure\norg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnableAutoConfiguration"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\\\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h3",{attrs:{id:"如何自动配置springboot提供的所有自动配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何自动配置springboot提供的所有自动配置"}},[t._v("#")]),t._v(" 如何自动配置"),a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#auto-configuration-classes",target:"_blank",rel:"noopener noreferrer"}},[t._v("springboot提供的所有自动配置"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("例:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@Configuration\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" EnableAspectJAutoProxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Aspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Advice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      AnnotatedElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.aop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" havingValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchIfMissing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopAutoConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   @Configuration\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnableAspectJAutoProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyTargetClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.aop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy-target-class"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" havingValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchIfMissing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdkDynamicAutoProxyConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   @Configuration\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnableAspectJAutoProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyTargetClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.aop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy-target-class"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" havingValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchIfMissing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CglibAutoProxyConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("@ConditionalOnClass代表的是@Conditional在OnClassCondition条件下的语义。我们通过语义即可知道该注解的功能，即检测特定的一些类是否都存在于类路径中，当这些类全存在的时候，被注解的类或方法才有效，如果不符合则可视被注解的类或方法不存在。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("与@ConditionalOnClass同类的条件注解有如下：\n\n@ConditionalOnBean：只有在指定的一批Bean都已存在容器中有效；\n@ConditionalOnMissingBean：只有在指定的一批Bean不存在于容器中才有效；\n@ConditionalOnClass：只有在指定的一批类都在当前类路径中有效；\n@ConditionalOnMissingClass：只有在指定的一批类都不在当前类路径中有效；\n@ConditionalOnProperty：只有当前的配置属性符合条件时有效；\n@ConditionalOnResource：只有指定的一批资源在类路径中有效；\n@ConditionalOnExpression：只有Spring "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EL")]),t._v("运算结果为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("时有效；\n@ConditionalOnJava：只有满足支持的Java版本才有效；\n@ConditionalOnWebApplication：只有在Web应用时才有效；\n@ConditionalOnNotWebApplication：只有在非Web应用时有效；\n@ConditionalOnSingleCandidate：只有在指定的一批Bean在容器中已存在且只有一个候选Bean下才有效；\n@ConditionalOnCloudPlatform：只在指定的云平台下有效。\n")])])]),a("p",[t._v("配置文件之间如果有先后依赖顺序的话，我们可以用@AutoConfigureAfter和@AutoConfigureBefore注解指定配置顺序，也可以通过@AutoConfigureOrder来指定优先级。")]),t._v(" "),a("p",[t._v("Spring Boot自带的自动配置位于spring-boot-autoconfigure-x.x.x.RELEASE.jar的org.springframework.boot.autoconfigure包下以AutoConfiguration结尾的都是自动配置类。")])])}),[],!1,null,null,null);s.default=r.exports}}]);