(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{380:function(e,n,t){"use strict";t.r(n);var a=t(42),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"微服务架构中的服务的两种调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构中的服务的两种调用"}},[e._v("#")]),e._v(" 微服务架构中的服务的两种调用")]),e._v(" "),t("h2",{attrs:{id:"ribbon-resttemplate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ribbon-resttemplate"}},[e._v("#")]),e._v(" Ribbon+RestTemplate")]),e._v(" "),t("p",[e._v("ribbon是一个负载均衡客户端，可以很好的控制htt和tcp的一些行为。Feign默认集成了ribbon。")]),e._v(" "),t("p",[e._v("ribbon 已经默认实现了这些配置bean：")]),e._v(" "),t("p",[e._v("IClientConfig ribbonClientConfig: DefaultClientConfigImpl")]),e._v(" "),t("p",[e._v("IRule ribbonRule: ZoneAvoidanceRule")]),e._v(" "),t("p",[e._v("IPing ribbonPing: NoOpPing")]),e._v(" "),t("p",[e._v("ServerList ribbonServerList: ConfigurationBasedServerList")]),e._v(" "),t("p",[e._v("ServerListFilter ribbonServerListFilter: ZonePreferenceServerListFilter")]),e._v(" "),t("p",[e._v("ILoadBalancer ribbonLoadBalancer: ZoneAwareLoadBalancer")]),e._v(" "),t("h3",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[e._v("#")]),e._v(" 依赖")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n        </dependency>\n\n")])])]),t("h3",{attrs:{id:"配置name及注册中心等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置name及注册中心等"}},[e._v("#")]),e._v(" 配置name及注册中心等")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("spring.application.name=spring-cloud-ribbon\nserver.port=9002\neureka.client.service-url.defaultZone=http://localhost:8000/eureka/\n")])])]),t("h3",{attrs:{id:"主类注释-enablediscoveryclient-或-enableeurekaclient"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主类注释-enablediscoveryclient-或-enableeurekaclient"}},[e._v("#")]),e._v(" 主类注释 @EnableDiscoveryClient 或@EnableEurekaClient")]),e._v(" "),t("h3",{attrs:{id:"配置resttemplate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置resttemplate"}},[e._v("#")]),e._v(" 配置RestTemplate")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@SpringBootApplication\n@EnableDiscoveryClient\npublic class ServiceRibbonApplication {\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(ServiceRibbonApplication.class, args);\n\t}\n\n\t@Bean\n\t@LoadBalanced\n\tRestTemplate restTemplate() {\n\t\treturn new RestTemplate();\n\t}\n\n}\n\n")])])]),t("h3",{attrs:{id:"调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用"}},[e._v("#")]),e._v(" 调用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Service\npublic class HelloService {\n\n    @Autowired\n    RestTemplate restTemplate;\n\n    public String hiService(String name) {\n        return restTemplate.getForObject("http://spring-cloud-provider/hello?name="+name,String.class);\n    }\n\n}\n\n@RestController\npublic class HelloControler {\n\n    @Autowired\n    HelloService helloService;\n    @RequestMapping(value = "/hi")\n    public String hi(@RequestParam String name){\n        return helloService.hiService(name);\n    }\n\n\n}\n')])])]),t("h2",{attrs:{id:"feign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feign"}},[e._v("#")]),e._v(" Feign")]),e._v(" "),t("blockquote",[t("p",[e._v("Feign是一个声明式Web Service客户端。使用Feign能让编写Web Service客户端更加简单, 它的使用方法是定义一个接口，然后在上面添加注解，同时也支持JAX-RS标准的注解。Feign也支持可拔插式的编码器和解码器。Spring Cloud对Feign进行了封装，使其支持了Spring MVC标准注解和HttpMessageConverters。Feign可以与Eureka和Ribbon组合使用以支持负载均衡。")])]),e._v(" "),t("p",[e._v("提供注册中心服务http://localhost:8000/eureka/、\n服务提供者@EnableDiscoveryClient")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('spring.application.name=spring-cloud-producer\nserver.port=9000\neureka.client.serviceUrl.defaultZone=http://localhost:8000/eureka/\n\n\n@RestController\npublic class HelloController {\n\t\n    @RequestMapping("/hello")\n    public String index(@RequestParam String name) {\n        return "hello "+name+"，this is first messge";\n    }\n}\n')])])]),t("p",[e._v("服务消费者@EnableFeignClients")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('spring.application.name=spring-cloud-consumer\nserver.port=9001\neureka.client.serviceUrl.defaultZone=http://localhost:8000/eureka/\n\n@SpringBootApplication\n@EnableDiscoveryClient\n@EnableFeignClients\npublic class ConsumerApplication {\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(ConsumerApplication.class, args);\n\t}\n\n}\n\n@FeignClient(name= "spring-cloud-producer")\npublic interface HelloRemote {\n    @RequestMapping(value = "/hello")\n    public String hello(@RequestParam(value = "name") String name);\n}\n\n@RestController\npublic class ConsumerController {\n\n    @Autowired\n    HelloRemote HelloRemote;\n\t\n    @RequestMapping("/hello/{name}")\n    public String index(@PathVariable("name") String name) {\n        return HelloRemote.hello(name);\n    }\n\n}\n')])])]),t("h2",{attrs:{id:"负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[e._v("#")]),e._v(" 负载均衡")]),e._v(" "),t("p",[e._v("多个服务提供者轮询提供服务")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("spring.application.name=spring-cloud-producer\nserver.port=9003\neureka.client.serviceUrl.defaultZone=http://localhost:8000/eureka/\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);