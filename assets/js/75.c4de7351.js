(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{418:function(r,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"断路器hystrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断路器hystrix"}},[r._v("#")]),r._v(" 断路器Hystrix")]),r._v(" "),a("hr"),r._v(" "),a("h2",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[r._v("#")]),r._v(" 引言")]),r._v(" "),a("p",[r._v("在微服务架构中，服务之间要相互调用（RPC），在spring Cloud中可以使用Feign和RestTemplate+ribbon。服务集群经常由于网络或自身原因，导致服务不可用，容易出现线程阻塞，导致瘫痪。服务调用又可能导致故障传播，对微服务集群造成灾难性后果，即服务故障的“雪崩”效应。")]),r._v(" "),a("p",[r._v("于是引出断路器模式来避免雪崩事故。")]),r._v(" "),a("h2",{attrs:{id:"断路器hystrix-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断路器hystrix-2"}},[r._v("#")]),r._v(" 断路器Hystrix")]),r._v(" "),a("p",[r._v("Netflix开源的Hystrix组件，实现了断路器模式，SpringCloud对这一组件进行了整合。\n较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值（Hystric 是5秒20次） 断路器将会被打开。\n断路打开后，可用避免连锁故障，fallback方法可以直接返回一个固定值。")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v(" <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>\n        </dependency>\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("@SpringBootApplication\n@EnableEurekaClient\n@EnableCircuitBreaker // 断路器\npublic class EurekaClientRibbonApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaClientRibbonApplication.class, args);\n    }\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('@HystrixCommand(fallbackMethod = "producerError")// 故障回调方法\n    public String hello(String name){\n        String s = restTemplate.getForObject("http://spring-cloud-producer/hello?name=" + name, String.class);\n        return s;\n    }\n\n    public String producerError(String name){\n        return "hello "+ name + " spring-cloud-producer service error!";\n    }\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);