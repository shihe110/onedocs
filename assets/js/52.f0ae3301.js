(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{400:function(t,a,n){"use strict";n.r(a);var s=n(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"springboot运行原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot运行原理"}},[t._v("#")]),t._v(" SpringBoot运行原理")]),t._v(" "),n("h2",{attrs:{id:"自动配置原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动配置原理"}},[t._v("#")]),t._v(" 自动配置原理")]),t._v(" "),n("p",[t._v("查看项目中已启用和未启用的自动配置报告。")]),t._v(" "),n("h3",{attrs:{id:"_1-运行jar时增加-debug参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行jar时增加-debug参数"}},[t._v("#")]),t._v(" 1.运行jar时增加--debug参数")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("java "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jar xx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("debug\n")])])]),n("h3",{attrs:{id:"_2-在application-properties中设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-在application-properties中设置"}},[t._v("#")]),t._v(" 2.在application.properties中设置")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("debug"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),n("h3",{attrs:{id:"_3-在ide中设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-在ide中设置"}},[t._v("#")]),t._v(" 3.在IDE中设置")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Asrguments")]),t._v("中设置VM arguments参数："),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ddebug")]),t._v("\n")])])]),n("h2",{attrs:{id:"springboot运作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot运作原理"}},[t._v("#")]),t._v(" SpringBoot运作原理")]),t._v(" "),n("p",[t._v("从@SpringBootApplication注解，这是个组合注解")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\n@SpringBootConfiguration\n@EnableAutoConfiguration\n@ComponentScan(\n    excludeFilters = {@Filter(\n    type = FilterType.CUSTOM,\n    classes = {TypeExcludeFilter.class}\n), @Filter(\n    type = FilterType.CUSTOM,\n    classes = {AutoConfigurationExcludeFilter.class}\n)}\n)\npublic @interface SpringBootApplication {\n")])])]),n("p",[t._v("@EnableAutoCofiguration注解启动自动配置功能，这也是一个组合注解。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inherited")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigurationPackage")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigurationImportSelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAutoConfiguration")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),n("p",[t._v("@AutoConfigurationPackage引入一个注册器\n@Import({AutoConfigurationImportSelector.class})导入自动配置选择器，\n通过SpringFactoryLoader.loadFactoryNames扫描META-INF/spring.factories文件中声明的自动配置类。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCandidateConfigurations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")]),t._v(" metadata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationAttributes")]),t._v(" attributes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" configurations "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringFactoriesLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadFactoryNames")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSpringFactoriesLoaderFactoryClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBeanClassLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("notEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No auto configuration classes found in META-INF/spring.factories. If you are using a custom packaging, make sure that file is correct."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configurations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"核心注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心注解"}},[t._v("#")]),t._v(" 核心注解")]),t._v(" "),n("p",[t._v("以上的任意一个配置类，一般都有条件注解。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnBean")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("当容器里有指定的bean的条件下\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnClass")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("当类路径下有指定的类的条件下\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnExpression")]),t._v("：基于"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringEL")]),t._v("表达式作为判断条件\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnJava")]),t._v("：基于JVM版本做判断条件\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnJndi")]),t._v("：在JNDI存在条件下查找指定位置\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnMissingBean")]),t._v("：当容器里没有指定bean的情形下\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnMissingClass")]),t._v("：当类路径下没有指定的类的条件下\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnNotWebApplication")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("当前项目不是web项目的条件下\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnProperty")]),t._v("：指定的属性是否有指定值\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnResource")]),t._v("：类路径是否有指定值\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnSingleCandidate")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("当指定的bean在容器中只有一个，或者虽然有多个但是指定首选的bean\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnWebApplication")]),t._v("：当前项目是web项目条件下\n\n")])])]),n("p",[t._v("这些注解都是组合了@Conditional元注解的组合注解，使用不同的条件创建不同的bean")])])}),[],!1,null,null,null);a.default=e.exports}}]);