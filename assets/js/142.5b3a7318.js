(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{486:function(e,t,r){"use strict";r.r(t);var n=r(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"springmvc的配置原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springmvc的配置原理"}},[e._v("#")]),e._v(" SpringMvc的配置原理")]),e._v(" "),r("p",[e._v("spring web MVC是基于Servlet构建的，其实现为DispatherServlet,他使用了一个Spring容器（webApplicationContext）从而让servlet和spring容器结合在一起。")]),e._v(" "),r("h3",{attrs:{id:"springmvc的工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springmvc的工作原理"}},[e._v("#")]),e._v(" SpringMVC的工作原理")]),e._v(" "),r("p",[e._v("从DispatherServlet出发，在springboot中通过DispatherServletAutoConfiguration来定义DispatherServlet的bean。\n并通过DispatherServletRegistrationBean的bean来注册DispatherServlet到servlet容器中。")]),e._v(" "),r("p",[e._v("DispatherServlet在处理时将主要的功能代理给两个bean：")]),e._v(" "),r("ul",[r("li",[e._v("HandlerMapping处理器映射器")]),e._v(" "),r("li",[e._v("HandlerAdapter处理器适配器")])]),e._v(" "),r("h3",{attrs:{id:"配置mvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置mvc"}},[e._v("#")]),e._v(" 配置MVC")]),e._v(" "),r("p",[e._v("SpringMVC通过@EnableWebMvc注解，通过导入DelegatingWebMvcConfiguration中的配置（将处理器映射器和处理器适配器负责的内容），做了默认配置。")]),e._v(" "),r("p",[e._v("SpringBoot没有使用该注解，但通过封装继承DelegatingWebMvcConfiguration类WebMvcAutoConfiguration.EnableWebMvcConfiguration做了等价该注解的配置。除了这些配置springboot配置类WebMvcAutoConfiguration做了更多的配置。")]),e._v(" "),r("p",[e._v("我们通过实现WebMvcConfigurer接口，自定义配置类来定制配置MVC。同时启用springboot提供的默认自动配置。如果不想用默认配置，则只需在配置类上添加@EnableWebMvc注解即可使得默认配置失效。")]),e._v(" "),r("p",[e._v("因子spring5.0开始，全面支持java8，WebMvcConfigurerAdapter将被废弃。")])])}),[],!1,null,null,null);t.default=a.exports}}]);