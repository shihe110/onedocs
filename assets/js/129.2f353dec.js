(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{475:function(t,a,n){"use strict";n.r(a);var s=n(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"springsecurity之初始化流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springsecurity之初始化流程"}},[t._v("#")]),t._v(" SpringSecurity之初始化流程")]),t._v(" "),n("h3",{attrs:{id:"springsecurity自动化配置类-securityautoconfiguration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springsecurity自动化配置类-securityautoconfiguration"}},[t._v("#")]),t._v(" SpringSecurity自动化配置类-SecurityAutoConfiguration")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configuration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyBeanMethods "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DefaultAuthenticationEventPublisher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnableConfigurationProperties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SecurityProperties"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SpringBootWebSecurityConfiguration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WebSecurityEnablerConfiguration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tSecurityDataConfiguration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityAutoConfiguration")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t@Bean\n\t@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnMissingBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AuthenticationEventPublisher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" DefaultAuthenticationEventPublisher "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticationEventPublisher")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ApplicationEventPublisher publisher")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultAuthenticationEventPublisher")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publisher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("导入三个配置：")]),t._v(" "),n("ul",[n("li",[t._v("SpringBootWebSecurityConfiguration\n如果开发者没有自定义WebSecurityConfigurerAdapter配置，则默认提供一个。")]),t._v(" "),n("li",[t._v("WebSecurityEnablerConfiguration\n提供SpringSecurity核心配置（重点核心配置）")]),t._v(" "),n("li",[t._v("SecurityDataConfiguration\n提供Spring Data的支持")])]),t._v(" "),n("h3",{attrs:{id:"websecurityenablerconfiguration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websecurityenablerconfiguration"}},[t._v("#")]),t._v(" WebSecurityEnablerConfiguration")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configuration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyBeanMethods "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebSecurityConfigurerAdapter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnMissingBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeanIds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SPRING_SECURITY_FILTER_CHAIN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConditionalOnWebApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ConditionalOnWebApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SERVLET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@EnableWebSecurity\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSecurityEnablerConfiguration")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("该类除了一些条件配置外，核心交给了@EnableWebSecurity -开启security")]),t._v(" "),n("h4",{attrs:{id:"enablewebsecurity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enablewebsecurity"}},[t._v("#")]),t._v(" @EnableWebSecurity")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RetentionPolicy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ElementType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@Documented\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" WebSecurityConfiguration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tSpringWebMvcImportSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tOAuth2ImportSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@EnableGlobalAuthentication\n@Configuration\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" @"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableWebSecurity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * Controls debugging support for Spring Security. Default is false.\n\t * @return if true, enables debug support with Spring Security\n\t */")]),t._v("\n\tboolean "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("该类导入三个配置类和一个@EnableGlobalAuthentication注解")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("WebSecurityConfiguration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 重点\nSpringWebMvcImportSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nOAuth2ImportSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class\n")])])]),n("ul",[n("li",[t._v("WebSecurityConfiguration")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("springSecurityFilterChain 获取过滤器链\nsetFilterChainProxySecurityConfigurer 收集配置类并创建WebSecurity\n")])])]),n("h4",{attrs:{id:"enableglobalauthentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enableglobalauthentication"}},[t._v("#")]),t._v(" @EnableGlobalAuthentication")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RetentionPolicy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ElementType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@Documented\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AuthenticationConfiguration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@Configuration\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" @"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableGlobalAuthentication")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("导入：AuthenticationConfiguration配置")])])}),[],!1,null,null,null);a.default=e.exports}}]);