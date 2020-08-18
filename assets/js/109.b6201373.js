(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{458:function(t,a,s){"use strict";s.r(a);var r=s(42),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"tomcat的并发能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat的并发能力"}},[t._v("#")]),t._v(" Tomcat的并发能力")]),t._v(" "),s("p",[t._v("一、一些限制")]),t._v(" "),s("ul",[s("li",[t._v("Windows 每个进程中的线程数不允许超过 2000")]),t._v(" "),s("li",[t._v("Linux 每个进程中的线程数不允许超过 1000")]),t._v(" "),s("li",[t._v("在 Java 中每开启一个线程需要耗用 1MB 的 JVM 内存空间用于作为线程栈之用。 （并发量上来后 可能需要修改JVM参数调优）")]),t._v(" "),s("li",[t._v("建议当某个应用拥有 250 个以上并发的时候，应考虑应用服务器的集群。")]),t._v(" "),s("li",[t._v("还需要考虑数据库读写的并发能力")]),t._v(" "),s("li",[t._v("web服务器Nginx在windows上的最大并发数为1024，在linux为8192.（受限于文件系统的最大文件打开数）。")])]),t._v(" "),s("p",[t._v("二、Tomcat")]),t._v(" "),s("p",[t._v("Tomcat 默认配置的最大请求数是 150，也就是说同时支持 150 个并发，当然了， Tomcat的最大并发数是可以配置的，实际运用中，最大并发数与硬件性能和CPU数量都有很大关系的。更好的硬件，更多的处理器都会使Tomcat支持更多的并发。")]),t._v(" "),s("p",[t._v("Tomcat 默认的 HTTP 实现是采用阻塞式的 Socket 通信，每个请求都需要创建一个线程处理。这种模式下的并发量受到线程数的限制，但对于 Tomcat 来说几乎没有 BUG 存在了。")]),t._v(" "),s("p",[t._v("Tomcat 还可以配置 NIO 方式的 Socket 通信，在性能上高于阻塞式的，每个请求也不需要创建一个线程进行处理，并发能力比前者高。但没有阻塞式的成熟。")]),t._v(" "),s("p",[t._v("这个并发能力还与应用的逻辑密切相关，如果逻辑很复杂需要大量的计算，那并发能力势必会下降。如果每个请求都含有很多的数据库操作，那么对于数据库的性能要求也是非常高的。 对于单台数据库服务器来说，允许客户端的连接数量是有限制的。")]),t._v(" "),s("p",[t._v("三、一些参数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\nmaxThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大并发数 ")]),t._v("\n\nminSpareThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化时创建的线程数")]),t._v("\n\nmaxSpareThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一旦创建的线程超过这个值，Tomcat就会关闭不再需要的socket线程。")]),t._v("\n\nacceptCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"700"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定当所有可以使用的处理请求的线程数都被使用时，可以放到处理队列中")]),t._v("\n")])])]),s("h2",{attrs:{id:"并发能力问题涉及整个系统架构和业务逻辑。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发能力问题涉及整个系统架构和业务逻辑。"}},[t._v("#")]),t._v(" 并发能力问题涉及整个系统架构和业务逻辑。")]),t._v(" "),s("p",[t._v("系统环境不同，Tomcat版本不同、JDK版本不同、以及修改的设定参数不同。并发量的差异还是蛮大的。")]),t._v(" "),s("h2",{attrs:{id:"tomcat接收请求的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat接收请求的方式"}},[t._v("#")]),t._v(" Tomcat接收请求的方式")]),t._v(" "),s("p",[t._v("Tomcat支持三种接收请求的处理方式：BIO、NIO、APR 。")]),t._v(" "),s("ul",[s("li",[t._v("1\nBio方式，阻塞式I/O操作即使用的是传统Java I/O操作，Tomcat7以下版本默认情况下是以bio模式运行的，由于每个请求都要创建一个线程来处理，线程开销较大，不能处理高并发的场景，在三种模式中性能也最低")])]),t._v(" "),s("p",[t._v("配置如下(tomcat安装目录下的/conf/server.xml)：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.west999.com/info/upload/20190522/tqotlqstp2p.png",alt:""}})]),t._v(" "),s("p",[t._v("tomcat启动如下，看到http-bio-8080便是bio模式：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.west999.com/info/upload/20190522/xeqgq2jz3b0.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("2\nNio方式，是Java SE 1.4及后续版本提供的一种新的I/O操作方式(即java.nio包及其子包)，是一个基于缓冲区、并能提供非阻塞I/O操作的Java API，它拥        有比传统I/O操作(bio)更好的并发运行性能。tomcat 8版本及以上默认nio模式")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.west999.com/info/upload/20190522/4a1nbeut3e5.png",alt:""}})]),t._v(" "),s("p",[t._v("tomcat启动如下，看到http-nio-8080便是nio模式：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.west999.com/info/upload/20190522/n23iys3p4li.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("3\napr模式：简单理解，就是从操作系统级别解决异步IO问题，大幅度的提高服务器的处理和响应性能， 也是Tomcat运行高并发应用的首选模式。\n启用这种模式稍微麻烦一些，需要安装一些依赖库， 而apr的本质就是使用jni技术调用操作系统底层的IO接口，所以需要提前安装所需要的依赖，首先是需要安装openssl和apr。")])]),t._v(" "),s("p",[t._v("https://www.cnblogs.com/freeweb/p/6430053.html")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Tomcat配置\n\n Tomcat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml修改配置\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connector port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080"')]),t._v(" protocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.apache.coyote.http11.Http11NioProtocol"')]),t._v("\n        redirectPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8443"')]),t._v("\n        URIEncoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),t._v("\n        minSpareThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v("\n        maxSpareThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),t._v("\n        maxThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000"')]),t._v("\n        acceptCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"700"')]),t._v("\n        connectionTimeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30000"')]),t._v("\n        enableLookups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n参数说明\n\nmaxIdleTime： 最大空闲时间，超过这个空闲时间，且线程数大于minSpareThreads的，都会被回收，默认值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("分钟（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),t._v("ms）；\nminSpareThreads：最小空闲线程数，任何情况都会存活的线程数，即便超过了最大空闲时间，也不会被回收，默认值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("；\nmaxSpareThreads：最大空闲线程数，在最大空闲时间（maxIdleTime）内活跃过，此时空闲，当空闲时间大于maxIdleTime则被回收，小则继续存活，等待被调度，默认值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("；\nmaxThreads：最大线程数，大并发请求时，tomcat能创建来处理请求的最大线程数，超过则放入请求队列中进行排队，默认值为"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("；\nacceptCount：当最大线程数（maxThreads）被使用完时，可以放入请求队列排队个数，超过这个数返回connection refused（请求被拒绝），一般设置和maxThreads一样，不过这个具体需要根据自己的应用实际访问峰值和平均值来权衡，默认值为"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("；\nconnectionTimeout：网络连接超时，假设设置为"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("表示永不超时，这样设置隐患巨大，通常可设置为"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("ms，默认"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),t._v("ms。\n\nWindows Tomcat允许每个进程maxThreads（最大线程数）"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\nLinux Tomcat允许每个进程maxThreads（最大线程数）"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);