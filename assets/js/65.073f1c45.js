(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{413:function(a,t,e){"use strict";e.r(t);var v=e(42),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"常用消息中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用消息中间件"}},[a._v("#")]),a._v(" 常用消息中间件")]),a._v(" "),e("h3",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("消息队列解决的是企业it系统内部通信的问题。其目的在于系统间耦合。它具有低耦合、可靠投递、广播、流量控制、最终一致性等一系列功能，成为异步RPC的主要手段之一。当今市面上有很多主流的消息中间件，如老牌的ActiveMQ、RabbitMQ，炙手可热的Kafka，阿里巴巴自主开发RocketMQ等。")]),a._v(" "),e("h3",{attrs:{id:"组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组成"}},[a._v("#")]),a._v(" 组成")]),a._v(" "),e("ul",[e("li",[a._v("1.Broker 消息服务器")]),a._v(" "),e("li",[a._v("2.Producer 消息生产者")]),a._v(" "),e("li",[a._v("3.Consumer 消息消费者")]),a._v(" "),e("li",[a._v("4.Topic 消息主题")]),a._v(" "),e("li",[a._v("5.Queue 队列")]),a._v(" "),e("li",[a._v("6.Message 消息体")])]),a._v(" "),e("h3",{attrs:{id:"模式分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式分类"}},[a._v("#")]),a._v(" 模式分类")]),a._v(" "),e("ul",[e("li",[a._v("1.点对点\n即PTP模式，使用queue作为通信载体。\n"),e("img",{attrs:{src:"https://leanote.com/api/file/getImage?fileId=5ad56d7cab64411333000bb0",alt:""}})])]),a._v(" "),e("p",[a._v("note:消息生产者生产消息发送到queue中，然后消息消费者从queue中取出并且消费消息。\n消息被消费以后，queue中不再存储，所以消息消费者不可能消费到已经被消费的消息。 Queue支持存在多个消费者，但是对一个消息而言，只会有一个消费者可以消费。")]),a._v(" "),e("ul",[e("li",[a._v("2.发布订阅\npub/sub模式（广播）：使用topic做通信载体。\n"),e("img",{attrs:{src:"https://leanote.com/api/file/getImage?fileId=5ad56d8bab6441153c000ab3",alt:""}})])]),a._v(" "),e("h3",{attrs:{id:"优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[a._v("#")]),a._v(" 优势")]),a._v(" "),e("ul",[e("li",[a._v("1.系统解耦 系统间没有调用关系，只通过消息传输。")]),a._v(" "),e("li",[a._v("2.提高系统响应时间")]),a._v(" "),e("li",[a._v("3.为大数据处理框架提供服务")]),a._v(" "),e("li",[a._v("4.JMS java消息服务")])]),a._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),e("ul",[e("li",[a._v("1.异步通信")]),a._v(" "),e("li",[a._v("2.解耦")]),a._v(" "),e("li",[a._v("3.冗余")]),a._v(" "),e("li",[a._v("4.扩展性")]),a._v(" "),e("li",[a._v("5.过载保护")]),a._v(" "),e("li",[a._v("6.可恢复性")]),a._v(" "),e("li",[a._v("7.顺序保证")]),a._v(" "),e("li",[a._v("8.缓冲")]),a._v(" "),e("li",[a._v("9.数据流处理")])]),a._v(" "),e("h3",{attrs:{id:"常用协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用协议"}},[a._v("#")]),a._v(" 常用协议")]),a._v(" "),e("ul",[e("li",[a._v("AMQP -高级消息队列协议（advanced message queuing Protocol）\n不受语言和不同产品限制。")]),a._v(" "),e("li",[a._v("MQTT 消息队列遥测传输")]),a._v(" "),e("li",[a._v("STOMP 流文本定向消息协议")]),a._v(" "),e("li",[a._v("XMPP 可扩展消息处理协议")]),a._v(" "),e("li",[a._v("其他基于TCP/IP自定义的协议\n有些特殊框架（如：redis、kafka、zeroMq等）根据自身需要未严格遵循MQ规范，而是基于TCP\\IP自行封装了一套协议，通过网络socket接口进行传输，实现了MQ的功能。")])]),a._v(" "),e("h3",{attrs:{id:"场景中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景中间件"}},[a._v("#")]),a._v(" 场景中间件")]),a._v(" "),e("ul",[e("li",[a._v("1 RocketMQ")])]),a._v(" "),e("p",[a._v("具有以下特点：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("能够保证严格的消息顺序\n提供针对消息的过滤功能\n提供丰富的消息拉取模式\n高效的订阅者水平扩展能力\n实时的消息订阅机制\n亿级消息堆积能力\n官方提供了一些不同于kafka的对比差异： \nhttps://rocketmq.apache.org/docs/motivation/\n")])])]),e("ul",[e("li",[a._v("2 RabbitMQ")])]),a._v(" "),e("p",[a._v("使用Erlang编写的一个开源的消息队列，本身支持很多的协议：AMQP，XMPP, SMTP,STOMP，也正是如此，使的它变的非常重量级，更适合于企业级的开发。同时实现了Broker架构，核心思想是生产者不会将消息直接发送给队列，消息在发送给客户端时先在中心队列排队。对路由(Routing)，负载均衡(Load balance)、数据持久化都有很好的支持。多用于进行企业级的ESB整合。")]),a._v(" "),e("ul",[e("li",[a._v("3 ActiveMQ")])]),a._v(" "),e("p",[a._v("Apache下的一个子项目。使用Java完全支持JMS1.1和J2EE 1.4规范的 JMS Provider实现，少量代码就可以高效地实现高级应用场景。可插拔的传输协议支持，比如：in-VM, TCP, SSL, NIO, UDP, multicast, JGroups and JXTA transports。RabbitMQ、ZeroMQ、ActiveMQ均支持常用的多种语言客户端 C++、Java、.Net,、Python、 Php、 Ruby等。")]),a._v(" "),e("ul",[e("li",[a._v("4 Redis")])]),a._v(" "),e("p",[a._v("使用C语言开发的一个Key-Value的NoSQL数据库，开发维护很活跃，虽然它是一个Key-Value数据库存储系统，但它本身支持MQ功能，所以完全可以当做一个轻量级的队列服务来使用。对于RabbitMQ和Redis的入队和出队操作，各执行100万次，每10万次记录一次执行时间。测试数据分为128Bytes、512Bytes、1K和10K四个不同大小的数据。实验表明：入队时，当数据比较小时Redis的性能要高于RabbitMQ，而如果数据大小超过了10K，Redis则慢的无法忍受；出队时，无论数据大小，Redis都表现出非常好的性能，而RabbitMQ的出队性能则远低于Redis。")]),a._v(" "),e("ul",[e("li",[a._v("5 Kafka")])]),a._v(" "),e("p",[a._v("Apache下的一个子项目，使用scala实现的一个高性能分布式Publish/Subscribe消息队列系统，具有以下特性：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("快速持久化：通过磁盘顺序读写与零拷贝机制，可以在O(1)的系统开销下进行消息持久化；\n高吞吐：在一台普通的服务器上既可以达到10W/s的吞吐速率；\n高堆积：支持topic下消费者较长时间离线，消息堆积量大；\n完全的分布式系统：Broker、Producer、Consumer都原生自动支持分布式，依赖zookeeper自动实现复杂均衡；\n支持Hadoop数据并行加载：对于像Hadoop的一样的日志数据和离线分析系统，但又要求实时处理的限制，这是一个可行的解决方案。\n")])])]),e("ul",[e("li",[a._v("6 ZeroMQ")])]),a._v(" "),e("p",[a._v("号称最快的消息队列系统，专门为高吞吐量/低延迟的场景开发，在金融界的应用中经常使用，偏重于实时数据通信场景。ZMQ能够实现RabbitMQ不擅长的高级/复杂的队列，但是开发人员需要自己组合多种技术框架，开发成本高。因此ZeroMQ具有一个独特的非中间件的模式，更像一个socket library，你不需要安装和运行一个消息服务器或中间件，因为你的应用程序本身就是使用ZeroMQ API完成逻辑服务的角色。但是ZeroMQ仅提供非持久性的队列，如果down机，数据将会丢失。如：Twitter的Storm中使用ZeroMQ作为数据流的传输。")]),a._v(" "),e("p",[a._v("ZeroMQ套接字是与传输层无关的：ZeroMQ套接字对所有传输层协议定义了统一的API接口。默认支持 进程内(inproc) ，进程间(IPC) ，多播，TCP协议，在不同的协议之间切换只要简单的改变连接字符串的前缀。可以在任何时候以最小的代价从进程间的本地通信切换到分布式下的TCP通信。ZeroMQ在背后处理连接建立，断开和重连逻辑。")]),a._v(" "),e("p",[a._v("特性：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("无锁的队列模型：对于跨线程间的交互（用户端和session）之间的数据交换通道pipe，采用无锁的队列算法CAS；在pipe的两端注册有异步事件，在读或者写消息到pipe的时，会自动触发读写事件。\n批量处理的算法：对于批量的消息，进行了适应性的优化，可以批量的接收和发送消息。\n多核下的线程绑定，无须CPU切换：区别于传统的多线程并发模式，信号量或者临界区，zeroMQ充分利用多核的优势，每个核绑定运行一个工作者线程，避免多线程之间的CPU切换开销。\n")])])]),e("h3",{attrs:{id:"主要消息中间件的比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要消息中间件的比较"}},[a._v("#")]),a._v(" 主要消息中间件的比较")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdn.net/20170816171523564?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvb01hdmVyaWNrMQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);