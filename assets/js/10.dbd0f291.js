(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{359:function(e,r,a){"use strict";a.r(r);var t=a(42),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"eureka服务注册和发现（注册中心）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka服务注册和发现（注册中心）"}},[e._v("#")]),e._v(" Eureka服务注册和发现（注册中心）")]),e._v(" "),a("p",[e._v("由Netflix开源，二代注册中心还有阿里的Nocos")]),e._v(" "),a("p",[e._v("Eureka 采用了 C-S 的设计架构。Eureka Server 作为服务注册功能的服务器，它是服务注册中心。而系统中的其他微服务，使用 Eureka 的客户端连接到 Eureka Server，并维持心跳连接。这样系统的维护人员就可以通过 Eureka Server 来监控系统中各个微服务是否正常运行。Spring Cloud 的一些其他模块（比如Zuul）就可以通过 Eureka Server 来发现系统中的其他微服务，并执行相关的逻辑。")]),e._v(" "),a("p",[e._v("Eureka由两个组件组成：Eureka服务器和Eureka客户端。Eureka服务器用作服务注册服务器。Eureka客户端是一个java客户端，用来简化与服务器的交互、作为轮询负载均衡器，并提供服务的故障切换支持。Netflix在其生产环境中使用的是另外的客户端，它提供基于流量、资源利用率以及出错状态的加权负载均衡。")]),e._v(" "),a("h2",{attrs:{id:"创建服务注册中心eureka-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务注册中心eureka-server"}},[e._v("#")]),e._v(" 创建服务注册中心eureka server")]),e._v(" "),a("p",[e._v("1.创建maven工程")]),e._v(" "),a("p",[e._v("2.创建两个model：一个作为服务注册中心Eureka server，一个作为客户端Eureka Client。")]),e._v(" "),a("p",[e._v("3.启动注册中心")]),e._v(" "),a("p",[e._v("4.配置application.properties")]),e._v(" "),a("p",[e._v("eureka.client.register-with-eureka ：表示是否将自己注册到Eureka Server，默认为true。\neureka.client.fetch-registry ：表示是否从Eureka Server获取注册信息，默认为true。\neureka.client.serviceUrl.defaultZone ：设置与Eureka Server交互的地址，查询服务和注册服务都需要依赖这个地址。默认是http://localhost:8761/eureka ；多个地址可使用 , 分隔。")]),e._v(" "),a("p",[e._v("server.port=8080\neureka.client.register-with-eureka=false  //不注册自己\neureka.client.fetch-registry=false  // 表示自己是eureka server\neureka.client.service-url.defaultZone=http://localhost:${server.port}/eureka/")]),e._v(" "),a("p",[e._v("5.浏览http://localhost:8080")]),e._v(" "),a("h2",{attrs:{id:"创建eureka-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建eureka-client"}},[e._v("#")]),e._v(" 创建eureka client")]),e._v(" "),a("p",[e._v("1.创建工程")]),e._v(" "),a("p",[e._v("2.声明eureka client")]),e._v(" "),a("p",[e._v("3.配置application  服务中心地址   注册服务")]),e._v(" "),a("p",[e._v("eureka.client.service-url.defaultZone=http://localhost:8080/eureka/\nserver.port=8762\nspring.application.name=service-hi")]),e._v(" "),a("h2",{attrs:{id:"集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[e._v("#")]),e._v(" 集群")]),e._v(" "),a("p",[e._v("集群概念由注册中心作为关键服务，不适合单点部署，为维持注册中心得高可用，使用集群方案来解决。Eureka通过互相注册的方式来实现高可用的部署，所以我们只需要将Eureke Server配置其他可用的serviceUrl就能实现高可用部署。")]),e._v(" "),a("h2",{attrs:{id:"双节点注册中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双节点注册中心"}},[e._v("#")]),e._v(" 双节点注册中心")]),e._v(" "),a("ul",[a("li",[e._v("1.创建application-peer1.properties,作为peer1服务中心的配置，并将serviceUrl指向peer2")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("spring.application.name=spring-cloud-eureka\nserver.port=8000\neureka.instance.hostname=peer1\n\neureka.client.serviceUrl.defaultZone=http://peer2:8001/eureka/\n\n")])])]),a("ul",[a("li",[e._v("2.创建application-peer2.properties,作为peer2服务中心的配置，并将serviceUrl指向peer1")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("spring.application.name=spring-cloud-eureka\nserver.port=8001\neureka.instance.hostname=peer2\n\neureka.client.serviceUrl.defaultZone=http://peer1:8001/eureka/\n\n")])])]),a("ul",[a("li",[e._v("3.host转换")])]),e._v(" "),a("p",[e._v("在host文件中增加配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1 peer1\n127.0.0.1 peer2\n")])])]),a("ul",[a("li",[e._v("4.打包启动")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#打包\nmvn clean package\n# 分别以peer1和peeer2 配置信息启动eureka\njava -jar spring-cloud-eureka-0.0.1-SNAPSHOT.jar --spring.profiles.active=peer1\njava -jar spring-cloud-eureka-0.0.1-SNAPSHOT.jar --spring.profiles.active=peer2\n")])])]),a("h2",{attrs:{id:"eureka集群使用-比双节点更进一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka集群使用-比双节点更进一步"}},[e._v("#")]),e._v(" Eureka集群使用-比双节点更进一步")]),e._v(" "),a("p",[e._v("三节点application.yml配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("---\nspring:\n  application:\n    name: spring-cloud-eureka\n  profiles: peer1\nserver:\n  port: 8000\neureka:\n  instance:\n    hostname: peer1\n  client:\n    serviceUrl:\n      defaultZone: http://peer2:8001/eureka/,http://peer3:8002/eureka/\n---\nspring:\n  application:\n    name: spring-cloud-eureka\n  profiles: peer2\nserver:\n  port: 8001\neureka:\n  instance:\n    hostname: peer2\n  client:\n    serviceUrl:\n      defaultZone: http://peer1:8000/eureka/,http://peer3:8002/eureka/\n---\nspring:\n  application:\n    name: spring-cloud-eureka\n  profiles: peer3\nserver:\n  port: 8002\neureka:\n  instance:\n    hostname: peer3\n  client:\n    serviceUrl:\n      defaultZone: http://peer1:8000/eureka/,http://peer2:8001/eureka/\n\n")])])]),a("h3",{attrs:{id:"分别以peer1、peer2、peer3的配置参数启动eureka注册中心。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分别以peer1、peer2、peer3的配置参数启动eureka注册中心。"}},[e._v("#")]),e._v(" 分别以peer1、peer2、peer3的配置参数启动eureka注册中心。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("java -jar spring-cloud-eureka-0.0.1-SNAPSHOT.jar --spring.profiles.active=peer1\njava -jar spring-cloud-eureka-0.0.1-SNAPSHOT.jar --spring.profiles.active=peer2\njava -jar spring-cloud-eureka-0.0.1-SNAPSHOT.jar --spring.profiles.active=peer3\n")])])])])}),[],!1,null,null,null);r.default=n.exports}}]);