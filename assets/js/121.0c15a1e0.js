(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{469:function(t,r,e){"use strict";e.r(r);var n=e(42),a=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"springsecurity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springsecurity"}},[t._v("#")]),t._v(" springsecurity")]),t._v(" "),e("p",[t._v("两个重要概念：")]),t._v(" "),e("ul",[e("li",[t._v("1.认证-Authentication\n认证确定是谁在访问资源；用户认证。")]),t._v(" "),e("li",[t._v("2.授权-Authoraztion\n授权确定当前的用户是否有权限访问指定的受保护资源；即确认访问权限。")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"springboot关于springsecurity的自动配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springboot关于springsecurity的自动配置"}},[t._v("#")]),t._v(" springboot关于springsecurity的自动配置")]),t._v(" "),e("p",[t._v("SpringBoot的提供的关于springsecurity的自动配置类：SecurityAutoConfiguration\n该类导入三个自动配置，并通过SecurityProperties使用spring.security.*来配置Spring Security：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SecurityAutoConfiguration")]),t._v(" "),e("ul",[e("li",[t._v("SpringBootWebSecurityConfiguration：提供默认的web安全配置（DefaultConfigurerAdapter继承WebSecurityConfigurerAdapter），若我们自己继承了WebSecurityConfigurerAdapter配置，我们只需要定制自己需要的部分，其余的保持默认。")]),t._v(" "),e("li",[t._v("WebSecurityEnableConfiguration：如果系统中有WebSecurityConfigurerAdapter的Bean，则使用@EnableWebSecurity自动开启Web安全配置。")]),t._v(" "),e("li",[t._v("SecurityDataConfiguration:当jar包org.springframework.security:spring-security-data在类路径中时，允许在使用Spring Data进行查询时引用安全相关的表达式。")])])]),t._v(" "),e("li",[e("p",[t._v("UserDetailsServiceAutoConfiguration：自动配置一个内存中的用户，可通过spring.security.user.*来配置；如果我们自定了认证的实现，则自动配置无效。")])])]),t._v(" "),e("h2",{attrs:{id:"开启web安全配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启web安全配置"}},[t._v("#")]),t._v(" 开启web安全配置")]),t._v(" "),e("p",[t._v("在Spring Boot下我们无需手动使用@EnableWebSecurity开启Web安全配置。但是我们还是需要了解下它为我们做了什么，它导入的配置有：")]),t._v(" "),e("ul",[e("li",[t._v("1.WebSecurityConfiguration：注册Bean名为springSecurityFilterChain的Servlet过滤器（Filter），它创建Spring Security Filter Chain，负责应用中所有关于安全的内容。")]),t._v(" "),e("li",[t._v("2.WebMvcSecurityConfiguration：实现了Spring MVC的WebMvcConfigurer，并额外注册了3个ArgumentResolvers，我们可以在控制器方法参数中可以直接获取：\n"),e("ul",[e("li",[t._v("2.1 AuthenticationPrincipalArgumentResolver：使用@AuthenticationPrincipal注解用户参数获得用户信息；")]),t._v(" "),e("li",[t._v("2.2 CurrentSecurityContextArgumentResolver：@CurrentSecurityContext注解用户参数获得与SecurityContext中包含的信息。")]),t._v(" "),e("li",[t._v("2.3 CsrfTokenArgumentResolver：获取参数中的CsrfToken。")])])]),t._v(" "),e("li",[t._v("3.OAuth2ClientConfiguration：OAuth 2.0客户端支持配置。")]),t._v(" "),e("li",[t._v("4.EnableGlobalAuthentication：配置全局的AuthenticationManagerBuilder")])]),t._v(" "),e("h2",{attrs:{id:"定制web安全配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定制web安全配置"}},[t._v("#")]),t._v(" 定制web安全配置")]),t._v(" "),e("p",[t._v("我们只需定义一个配置类继承WebSecurityConfigurerAdapter类或者实现WebSecurityConfigurer接口")]),t._v(" "),e("h2",{attrs:{id:"springsecurity的核心功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springsecurity的核心功能"}},[t._v("#")]),t._v(" springsecurity的核心功能")]),t._v(" "),e("p",[t._v("对于一个权限管理框架而言，无论是 Shiro 还是 Spring Security，最最核心的功能，无非就是两方面：")]),t._v(" "),e("p",[t._v("认证\n授权\n通俗点说，认证就是我们常说的登录，授权就是权限鉴别，看看请求是否具备相应的权限。")]),t._v(" "),e("p",[t._v("虽然就是一个简简单单的登录，可是也能玩出很多花样来。")]),t._v(" "),e("p",[t._v("Spring Security 支持多种不同的认证方式，这些认证方式有的是 Spring Security 自己提供的认证功能，有的是第三方标准组织制订的，主要有如下一些：")]),t._v(" "),e("p",[t._v("一些比较常见的认证方式：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASIC")]),t._v(" authentication headers：基于"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IETF")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RFC")]),t._v(" 标准。\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" Digest authentication headers：基于"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IETF")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RFC")]),t._v(" 标准。\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".509")]),t._v(" client certificate exchange：基于"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IETF")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RFC")]),t._v(" 标准。\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LDAP")]),t._v("：跨平台身份验证。\nForm"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("based authentication：基于表单的身份验证。\nRun"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" authentication：用户用户临时以某一个身份登录。\nOpenID authentication：去中心化认证。\n")])])]),e("p",[t._v("除了这些常见的认证方式之外，一些比较冷门的认证方式，Spring Security 也提供了支持。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Jasig Central Authentication Service：单点登录。\nAutomatic "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"remember-me"')]),t._v(" authentication：记住我登录（允许一些非敏感操作）。\nAnonymous authentication：匿名登录。\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[t._v("作为一个开放的平台，Spring Security 提供的认证机制不仅仅是上面这些。如果上面这些认证机制依然无法满足你的需求，我们也可以自己定制认证逻辑。当我们需要和一些“老破旧”的系统进行集成时，自定义认证逻辑就显得非常重要了。")]),t._v(" "),e("p",[t._v("除了认证，剩下的就是授权了。")]),t._v(" "),e("p",[t._v("Spring Security 支持基于 URL 的请求授权、支持方法访问授权以及对象访问授权。")])])}),[],!1,null,null,null);r.default=a.exports}}]);