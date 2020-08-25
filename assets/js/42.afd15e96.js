(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{396:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-tomcat有几种connector运行模式及其优化？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tomcat有几种connector运行模式及其优化？"}},[t._v("#")]),t._v(" 1.tomcat有几种Connector运行模式及其优化？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("bio：传统的 Java I/O 操作，同步且阻塞 IO。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("maxThreads=”150”")]),t._v(" "),s("p",[t._v("Tomcat 使用线程来处理接收的每个请求。这个值表示Tomcat 可创建的最大的线程数。默认值 200。\n可以根据机器的时期性能和内存大小调整，一般可以在 400-500。最大可以在 800 左右。")])]),t._v(" "),s("li",[s("p",[t._v("minSpareThreads=”25”")]),t._v(" "),s("p",[t._v("Tomcat 初始化时创建的线程数,默认值 4。如果当前没有空闲线程，且没有超过 maxThreads，一次性创建的空闲线程数量。\nTomcat 初始化时创建的线程数量也由此值设置。")])]),t._v(" "),s("li",[s("p",[t._v("maxSpareThreads=”75”")]),t._v(" "),s("p",[t._v("一旦创建的线程超过这个值，Tomcat 就会关闭不再需要的 socket 线程。\n默认值 50。一旦创建的线程超过此数值，Tomcat 会关闭不再需要的线程。线程数可以大致上用 “同时在线人数每秒用户操作次数系统平均操作时间” 来计算。")])]),t._v(" "),s("li",[s("p",[t._v("acceptCount=”100”")]),t._v(" "),s("p",[t._v("指定当所有可以使用的处理请求的线程数都被使用时，可以放到处理队列中的请求数，超过这个数的请求将不予处理。默认值10。\n如果当前可用线程数为 0，则将请求放入处理队列中。这个值限定了请求队列的大小，超过这个数值的请求将不予处理。")])]),t._v(" "),s("li",[s("p",[t._v("connectionTimeout=”20000”")]),t._v(" "),s("p",[t._v("网络连接超时，默认值 20000，单位：毫秒。设置为 0 表示永不超时，这样设置有隐患的。通常可设置为 30000 毫秒。")])])])])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[t._v("nio：JDK1.4 开始支持，同步阻塞或同步非阻塞 IO。")]),t._v(" "),s("p",[t._v("指定使用 NIO 模型来接受 HTTP 请求protocol=”org.apache.coyote.http11.Http11NioProtocol” 指定使用 NIO 模型\n来接受 HTTP 请求。默认是 BlockingIO，配置为 protocol=”HTTP/1.1”\nacceptorThreadCount=”2” 使用 NIO 模型时接收线程的数目")])])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[t._v("aio(nio.2)：JDK7 开始支持，异步非阻塞 IO。")]),t._v(" "),s("p",[t._v("apr：Tomcat 将以 JNI 的形式调用 Apache HTTP 服务器的核心动态链接库来\n处理文件读取或网络传输操作，从而大大地 提高 Tomcat 对静态文件的处理性\n能。")])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connector")]),t._v(" connectionTimeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20000"')]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8000"')]),t._v("\nprotocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1"')]),t._v(" redirectPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8443"')]),t._v(" uriEncoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" protocol 启用 nio 模式，"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tomcat8 默认使用的是 nio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("apr 模式利用系\n统级异步 io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" minProcessors 最小空闲连接线程数"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" maxProcessors 最大连接线程数"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" acceptCount 允许的最大连接数，应大于等于 maxProcessors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" enableLookups 如果为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("requst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getRemoteHost 会执行 DNS 查\n找，反向解析 ip 对应域名或主机名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connector")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080"')]),t._v("\nprotocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.apache.coyote.http11.Http11NioProtocol"')]),t._v("\n connectionTimeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20000"')]),t._v("\n redirectPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v("\n maxThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("”\n minSpareThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("”\n maxSpareThreads"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("”\n acceptCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200"')]),t._v("\n enableLookups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n其他配置\nmaxHttpHeaderSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8192"')]),t._v(" http 请求头信息的最大程度，超过此长度的部分\n不予处理。一般 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("K。\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URIEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),t._v(" 指定 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tomcat")]),t._v(" 容器的 URL 编码格式。\ndisableUploadTimeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" 上传时是否使用超时机制\nenableLookups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("是否反查域名，默认值为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("。为了提高处理能力，\n应设置为 "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\ncompression"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),t._v(" 打开压缩功能\ncompressionMinSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10240"')]),t._v(" 启用压缩的输出内容大小，默认为 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("KB\nnoCompressionUserAgents"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gozilla, traviata"')]),t._v(" 对于以下的浏览器，不启用\n压缩\ncompressableMimeType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/html,text/xml,text/javascript,text/css,text/plain"')]),t._v("\n哪些资源类型需要压缩\n")])])]),s("h2",{attrs:{id:"_2-tomcat有几种部署方式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tomcat有几种部署方式？"}},[t._v("#")]),t._v(" 2.tomcat有几种部署方式？")]),t._v(" "),s("ul",[s("li",[t._v("webapps")]),t._v(" "),s("li",[t._v("server.xml "),s("Context",{attrs:{path:"",docBase:"d:\\myproject"}})],1),t._v(" "),s("li",[t._v("Catalina  conf/Catalina/localhost下新建xxx.xml文件，xxx为应用名称配置"),s("Context",{attrs:{docBase:"d:\\myproject"}})],1)]),t._v(" "),s("h2",{attrs:{id:"_3-tomcat容器是如何创建servlet类实例的？原理是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-tomcat容器是如何创建servlet类实例的？原理是什么？"}},[t._v("#")]),t._v(" 3.tomcat容器是如何创建servlet类实例的？原理是什么？")]),t._v(" "),s("p",[t._v("当容器启动时，会读取在 webapps 目录下所有的 web 应用中的 web.xml 文\n件，然后对 xml 文件进行解析，\n并读取 servlet 注册信息。然后，将每个应用中注册的 servlet 类都进行加载，\n并通过反射的方式实例化。\n（有时候也是在第一次请求时实例化）在 servlet 注册时加上如果为正数，则在\n一开始就实例化，\n如果不写或为负数，则第一次请求实例化。")]),t._v(" "),s("h2",{attrs:{id:"_4-tomcat优化方式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-tomcat优化方式？"}},[t._v("#")]),t._v(" 4.tomcat优化方式？")]),t._v(" "),s("h2",{attrs:{id:"_5-tomcat工作模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-tomcat工作模式"}},[t._v("#")]),t._v(" 5.tomcat工作模式")]),t._v(" "),s("h2",{attrs:{id:"_6-tomcat请求过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-tomcat请求过程"}},[t._v("#")]),t._v(" 6.tomcat请求过程")]),t._v(" "),s("h2",{attrs:{id:"_7-tomcat的session数目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-tomcat的session数目"}},[t._v("#")]),t._v(" 7.tomcat的session数目")]),t._v(" "),s("h2",{attrs:{id:"_8-jms远程监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-jms远程监控"}},[t._v("#")]),t._v(" 8.jms远程监控")]),t._v(" "),s("h2",{attrs:{id:"_9-共享session处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-共享session处理"}},[t._v("#")]),t._v(" 9.共享session处理")]),t._v(" "),s("h2",{attrs:{id:"_10-垃圾回收策略调优"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-垃圾回收策略调优"}},[t._v("#")]),t._v(" 10.垃圾回收策略调优")]),t._v(" "),s("h2",{attrs:{id:"_11-内存调优"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-内存调优"}},[t._v("#")]),t._v(" 11.内存调优")])])}),[],!1,null,null,null);a.default=e.exports}}]);