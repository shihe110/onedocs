(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(a,_,t){"use strict";t.r(_);var v=t(42),e=Object(v.a)({},(function(){var a=this,_=a.$createElement,t=a._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"java虚拟机读书笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java虚拟机读书笔记"}},[a._v("#")]),a._v(" Java虚拟机读书笔记")]),a._v(" "),t("h4",{attrs:{id:"_64位虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_64位虚拟机"}},[a._v("#")]),a._v(" 64位虚拟机")]),a._v(" "),t("p",[a._v("随着CPU支持64位架构，java虚拟机也需要从32位过渡到64的支持。64版本的虚拟机，内存消耗增加10-30%，原因：指针膨胀和各种数据类型的对齐补白。")]),a._v(" "),t("p",[a._v("JDK1.6 14版本也做过优化：提供了普通对象压缩功能（-XX：+UseCompressedOops参数设置，不建议显示设置，建议维持默认由虚拟机的Ergonomics机制自动开启），在执行代码时，动态植入压缩指令来节省内存。")]),a._v(" "),t("h2",{attrs:{id:"jvm内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存模型"}},[a._v("#")]),a._v(" JVM内存模型")]),a._v(" "),t("h3",{attrs:{id:"_1-1-运行时数据区域（内存模型）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-运行时数据区域（内存模型）"}},[a._v("#")]),a._v(" 1.1 运行时数据区域（内存模型）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210426112733103.png",alt:"image-20210426112733103"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/jvm.png",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("内存模型")])]),a._v(" "),t("h4",{attrs:{id:"_1-1-1-方法区（元空间）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-方法区（元空间）"}},[a._v("#")]),a._v(" 1.1.1 方法区（元空间）")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("原名-永久代（-XX：MaxPermSize）")])]),a._v(" "),t("li",[t("p",[a._v("线程共享")])]),a._v(" "),t("li",[t("p",[a._v("存储加载的类信息、访问修饰符、常量池、字段描述、方法描述、静态变量、即时编译后的代码")])]),a._v(" "),t("li",[t("p",[a._v("jdk1.7叫元空间，已经将字符串常量池移出")])]),a._v(" "),t("li",[t("p",[a._v("该区垃圾回收，主要针对常量池回收和类型卸载")])]),a._v(" "),t("li",[t("p",[a._v("内存溢出异常")])])]),a._v(" "),t("h4",{attrs:{id:"_1-1-2-虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-虚拟机栈"}},[a._v("#")]),a._v(" 1.1.2 虚拟机栈")]),a._v(" "),t("p",[a._v("描述java方法执行的内存模型：方法执行过程是创建栈帧，并入栈出栈过程-【存储局部变量表、操作数栈、动态链接、方法出口等】")]),a._v(" "),t("ul",[t("li",[a._v("局部变量表【基本数据类型、对象引用类型、returnAddress类型】")]),a._v(" "),t("li",[a._v("64位长度的long和double类型数据会占用2个局部变量空间（slot），其他类型占1个")]),a._v(" "),t("li",[a._v("异常：栈溢出、内存溢出")])]),a._v(" "),t("h4",{attrs:{id:"_1-1-3-本地方法栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-本地方法栈"}},[a._v("#")]),a._v(" 1.1.3 本地方法栈")]),a._v(" "),t("p",[a._v("和jvm栈一样，本地方法栈同理，只不过调用的是本地方法")]),a._v(" "),t("h4",{attrs:{id:"_1-1-4-堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-堆"}},[a._v("#")]),a._v(" 1.1.4 堆")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("对象生成区域，线程共享")])]),a._v(" "),t("li",[t("p",[a._v("堆分区：新生代（Eden、from survivor、to survivor）、老年代")])]),a._v(" "),t("li",[t("p",[a._v("堆内存调优参数：-Xmx最大内存 -Xms起始内存")])]),a._v(" "),t("li",[t("p",[a._v("异常 内存溢出")])]),a._v(" "),t("li",[t("p",[a._v("垃圾回收（分代）")])]),a._v(" "),t("li",[t("p",[a._v("线程私有的分配缓冲区TLAB")])])]),a._v(" "),t("h4",{attrs:{id:"_1-1-5-程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-程序计数器"}},[a._v("#")]),a._v(" 1.1.5 程序计数器")]),a._v(" "),t("p",[a._v("当前线程执行字节码的行号指示器。线程私有，不存在溢出异常。")]),a._v(" "),t("h4",{attrs:{id:"_1-1-6-运行时常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-6-运行时常量池"}},[a._v("#")]),a._v(" 1.1.6 运行时常量池")]),a._v(" "),t("p",[a._v("Runtime Constant Pool是方法区的一部分。")]),a._v(" "),t("p",[a._v("存Class文件中的常量池，用于存放编译期生成的各种字面量和符号引用。存在运行时常量池中。")]),a._v(" "),t("h4",{attrs:{id:"_1-1-7-直接内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-7-直接内存"}},[a._v("#")]),a._v(" 1.1.7 直接内存")]),a._v(" "),t("p",[a._v("虚拟机运行时数据区外的内存。通过Native函数库通过NIO直接分配堆外内存。基于Channel和Buffer（通道、缓冲区）。通过java堆中的DirectByteBuffer操作该内存。避免了堆和Native堆来回复制数据，提高了性能。")]),a._v(" "),t("h3",{attrs:{id:"_1-2-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-对象"}},[a._v("#")]),a._v(" 1.2 对象")]),a._v(" "),t("h4",{attrs:{id:"_1-2-1-虚拟机中new对象过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-虚拟机中new对象过程"}},[a._v("#")]),a._v(" 1.2.1 虚拟机中new对象过程")]),a._v(" "),t("ul",[t("li",[a._v("1、虚拟机new指令")]),a._v(" "),t("li",[a._v("2、类加载检查")]),a._v(" "),t("li",[a._v("3、分配内存（内存空间划分-指针碰撞、空闲列表）")]),a._v(" "),t("li",[a._v("4、初始化零值")]),a._v(" "),t("li",[a._v("5、设置对象头header（类元信息、对象hash码、gc分代年龄等）")]),a._v(" "),t("li",[a._v("6、初始化init方法执行")])]),a._v(" "),t("blockquote",[t("p",[a._v("类加载检查：")]),a._v(" "),t("ul",[t("li",[a._v("1、检查指令参数是否在常量池中定位到一个类的"),t("strong",[a._v("符号引用")])]),a._v(" "),t("li",[a._v("2、检查"),t("strong",[a._v("符号引用")]),a._v("代表的类是否被加载、解析、初始化过")]),a._v(" "),t("li",[a._v("3、没有-则执行类加载过程")])]),a._v(" "),t("p",[a._v("分配内存：")]),a._v(" "),t("p",[a._v("内存分配的同步处理")]),a._v(" "),t("ul",[t("li",[a._v("虚拟机采用CAS加失败重试保证原子性")]),a._v(" "),t("li",[a._v("本地线程分配缓冲-TLAB")])])]),a._v(" "),t("h4",{attrs:{id:"_1-2-2-对象的内存布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-对象的内存布局"}},[a._v("#")]),a._v(" 1.2.2 对象的内存布局")]),a._v(" "),t("p",[a._v("对象在内存中存储的布局分3个区域：")]),a._v(" "),t("ul",[t("li",[a._v("对象头Header\n"),t("ul",[t("li",[a._v("Mark Word（哈希码、gc年龄、锁状态标志、锁、偏向线程ID、偏向时间戳等）")]),a._v(" "),t("li",[a._v("类型指针（指向类元数据指针）")])])]),a._v(" "),t("li",[a._v("实例数据InstanceData（对象的实际有效信息，定义的属性，继承的信息等）")]),a._v(" "),t("li",[a._v("对齐填充Padding（VM的自动内存管理机制要求对象其实地址是8字节的整数倍，对象头是8的整数倍，实例数据可能没有对齐，就执行对齐填充来补全）")])]),a._v(" "),t("h4",{attrs:{id:"_1-2-3-对象的定位访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-对象的定位访问"}},[a._v("#")]),a._v(" 1.2.3 对象的定位访问")]),a._v(" "),t("p",[a._v("对象的定位访问，需要通过"),t("strong",[a._v("栈的reference")]),a._v("数据来操作"),t("strong",[a._v("堆")]),a._v("上的具体对象。")]),a._v(" "),t("p",[a._v("java虚拟机规范对"),t("strong",[a._v("reference类型")]),a._v("只规定了一个值对象的引用。具体的实现取决于虚拟机。")]),a._v(" "),t("p",[a._v("主流访问方式：")]),a._v(" "),t("ul",[t("li",[a._v("句柄访问")]),a._v(" "),t("li",[a._v("直接指针访问")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210426171253168.png",alt:"image-20210426171253168"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210426171327381.png",alt:"image-20210426171327381"}})]),a._v(" "),t("p",[a._v("句柄访问好处：reference中存储的是稳定的句柄地址，对象移动，只会改变句柄中的"),t("strong",[a._v("实例数据指针")]),a._v("，而不需要修改reference本身。")]),a._v(" "),t("p",[a._v("直接指针访问好处：速度快，节省一次指针定位时间开销。")]),a._v(" "),t("h4",{attrs:{id:"问题：虚拟机哪些内存区域会出现oom异常？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：虚拟机哪些内存区域会出现oom异常？"}},[a._v("#")]),a._v(" 问题：虚拟机哪些内存区域会出现OOM异常？")]),a._v(" "),t("p",[a._v("元空间、堆、jvm栈、本地方法栈，都可能会出现OOM异常。")]),a._v(" "),t("h3",{attrs:{id:"_1-3-oom异常实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-oom异常实战"}},[a._v("#")]),a._v(" 1.3 OOM异常实战")]),a._v(" "),t("h4",{attrs:{id:"_1-3-1-堆溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-堆溢出"}},[a._v("#")]),a._v(" 1.3.1 堆溢出")]),a._v(" "),t("p",[a._v("前置名词解释：")]),a._v(" "),t("ul",[t("li",[a._v("内存泄漏：无用的对象无法被垃圾回收")]),a._v(" "),t("li",[a._v("内存溢出：对象太大超出了内存容纳空间，溢出来了")])]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 堆转储配置-离线分析堆，检查内存溢出异常\n-Xms20m  \n-Xmx20m  \n-XX:+HeapDumpOnOutOfMemoryError\n-XX:HeapDumpPath=${目录}\n")])])]),t("p",[a._v("一般情况下，如果出现java堆内存的OOM异常。")]),a._v(" "),t("p",[a._v("一般的处理方案是：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("通过内存映像工具对Dump出来的堆转储快照进行分析，确认内存中的对象是否是必要的，即先确定是OOM（内存溢出）还是ML（内存泄漏）造成的异常。")])]),a._v(" "),t("li",[t("p",[a._v("如果是内存泄漏：通过工具查看泄漏对象到GC Roots的引用链。通过掌握泄漏对象的类型信息和引用链信息，准确定位泄漏代码的位置。")])]),a._v(" "),t("li",[t("p",[a._v("如果是内存溢出：1、检查jvm的堆参数（-Xms -Xmx）和物理机的实际内存对比分析。2、检查代码是否存在某些对象生命周期过长、持有状态过长的情况，尝试减少内存消耗。")])])]),a._v(" "),t("h4",{attrs:{id:"_1-3-2-虚拟机栈和本地方法栈溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-虚拟机栈和本地方法栈溢出"}},[a._v("#")]),a._v(" 1.3.2 虚拟机栈和本地方法栈溢出")]),a._v(" "),t("ul",[t("li",[a._v("栈容量配置参数："),t("code",[a._v("-Xss")])])]),a._v(" "),t("blockquote",[t("p",[a._v("注：对于HotSpot虚拟机设置本地方法栈的参数:"),t("code",[a._v("-Xoss")]),a._v(",实际上无效")])]),a._v(" "),t("ul",[t("li",[a._v("两种异常：栈溢出、内存溢出\n"),t("ul",[t("li",[a._v("1、超过栈的最大深度。2、栈内存过小")]),a._v(" "),t("li",[a._v("多线程情况下，分配给每个栈的内存一定的情况下，导致内存耗尽，新建线程就可能出现内存溢出")])])])]),a._v(" "),t("p",[t("strong",[a._v("如何处理，栈的溢出问题？")])]),a._v(" "),t("p",[a._v("确定系统的内存情况，系统分给每个进程的内存是有限制的。")]),a._v(" "),t("p",[a._v("在确定堆的方法区的内存情况，剩下的才可能分给栈，如果建立线程过多可能导致溢出。")]),a._v(" "),t("p",[a._v("处理方法：减少建立线程数。")]),a._v(" "),t("p",[a._v("如果不能减少线程数：可以更换64虚拟机来解决，如果不能更换，只能通过调整减小堆和减少栈的容量来支持更多的线程。")]),a._v(" "),t("h4",{attrs:{id:"_1-3-3-方法区和运行时常量池溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-方法区和运行时常量池溢出"}},[a._v("#")]),a._v(" 1.3.3 方法区和运行时常量池溢出")]),a._v(" "),t("p",[a._v("JDK1.6及以前，有"),t("strong",[a._v("永久代")]),a._v("概念，即方法区和常量池在同一区域。")]),a._v(" "),t("p",[a._v("配置参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:PermSize=10M # 永久代初始内存大小\n-XX:MaxPermSize=10M # 永久代最大内存大小\n")])])]),t("p",[a._v("常量池内存分配在永久代上，通过以上参数限制永久代大小")]),a._v(" "),t("p",[a._v("什么情况下会造成永久代溢出：如String字符串，会先检查常量池中有没有，如果没有则会加入常量池，并返回该对象的引用。造成内存变成，可能导致溢出异常。")]),a._v(" "),t("p",[a._v("**方法区溢出场景：**在经常动态生成大量Class的应用中，可能造成方法区溢出。如：CGLib字节码增强和动态语言（spring动态代理等）、大量JSP或动态生成jsp的应用（jsp首次运行要编程成java类）、基于OSGi的应用（同一个类文件，被不同的加载器加载会视为不同的类）。")]),a._v(" "),t("h4",{attrs:{id:"_1-3-4-直接内存溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-直接内存溢出"}},[a._v("#")]),a._v(" 1.3.4 直接内存溢出")]),a._v(" "),t("p",[a._v("DirectMemory设置参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:MaxDirectMemorySize=10M # 直接内存大小  默认和java堆最大值-Xmx一样\n")])])]),t("p",[a._v("现象：直接内存溢出后，Heap Dump文件看不出明显异常，如果发现OOM后Dump很小，而程序中又直接或间接使用了NIO，可以考虑是否是直接内存溢出。")]),a._v(" "),t("h2",{attrs:{id:"jvm垃圾收集器和内存分配策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm垃圾收集器和内存分配策略"}},[a._v("#")]),a._v(" JVM垃圾收集器和内存分配策略")]),a._v(" "),t("h4",{attrs:{id:"gc垃圾回收是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc垃圾回收是什么？"}},[a._v("#")]),a._v(" GC垃圾回收是什么？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("哪些内存需要回收？")])]),a._v(" "),t("li",[t("p",[a._v("什么时候回收？")])]),a._v(" "),t("li",[t("p",[a._v("如何回收？")])])]),a._v(" "),t("h4",{attrs:{id:"gc关注哪些区域？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc关注哪些区域？"}},[a._v("#")]),a._v(" GC关注哪些区域？")]),a._v(" "),t("p",[a._v("主要关注：堆区、方法区这两个区域的内存分配和回收的动态的，需要在程序运行期间才能确定。")]),a._v(" "),t("p",[a._v("jvm栈、本地方法栈、程序计数器三个区域随着线程而生，随线程而灭。内存的分配和回收都具备确定性。")]),a._v(" "),t("h3",{attrs:{id:"_2-1-回收对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-回收对象"}},[a._v("#")]),a._v(" 2.1 回收对象")]),a._v(" "),t("h4",{attrs:{id:"_2-1-1-回收对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-回收对象"}},[a._v("#")]),a._v(" 2.1.1 回收对象")]),a._v(" "),t("p",[t("strong",[a._v("回收对象")]),a._v("：哪些不再被使用的对象，即死对象。")]),a._v(" "),t("h4",{attrs:{id:"_2-1-2-确定回收对象的两种方式？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-确定回收对象的两种方式？"}},[a._v("#")]),a._v(" 2.1.2 确定回收对象的两种方式？")]),a._v(" "),t("ul",[t("li",[a._v("引用计数算法（Reference Counting）")]),a._v(" "),t("li",[a._v("可达性分析算法（Reachability Analysis）")])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("**引用计数算法：**给对象添加一个引用计数器，有一个地方引用，计数器+1；当引用失效则计数器-1；当计数器为0时表明对象不可能再被使用。")]),a._v(" "),t("p",[a._v("**引用计数算法的问题：**无法解决循环引用的问题。相互持有引用，导致无法释放，优点像死锁。")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("**可达性分析算法：**从GC Roots对象作为根节点出发，向下搜索。只要和GC Roots对象有链接，则为活对象。其余完全和GC Roots没有链接的对象，不可达，为死对象。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210427141343782.png",alt:"image-20210427141343782"}})]),a._v(" "),t("h4",{attrs:{id:"_2-1-3-java中哪些对象是gc-roots对象？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-java中哪些对象是gc-roots对象？"}},[a._v("#")]),a._v(" 2.1.3 java中哪些对象是GC Roots对象？")]),a._v(" "),t("ul",[t("li",[a._v("虚拟机栈中引用的对象（栈帧中的局部变量表）")]),a._v(" "),t("li",[a._v("方法区中类静态属性引用的对象")]),a._v(" "),t("li",[a._v("方法区中常量引用的对象")]),a._v(" "),t("li",[a._v("本地方法栈中JNI（Native）引用的对象")])]),a._v(" "),t("h4",{attrs:{id:"_2-1-4-引用-强、软、弱、虚引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-引用-强、软、弱、虚引用"}},[a._v("#")]),a._v(" 2.1.4 引用-强、软、弱、虚引用")]),a._v(" "),t("p",[a._v("JDK1.2前：引用（reference类型）指，保存着一段地址串，指向另外一块内存的起始地址。这块内存就代表一个引用。")]),a._v(" "),t("p",[a._v("问题：这种引用只能代表对象有两种状态：1、被引用 2、没有被引用。而对于例如缓存中的对象，希望有这样的描述，内存足够时，驻留在内存中提高访问效率，而内存不足并启动GC回收后，内存仍然紧张，则抛弃这些对象。")]),a._v(" "),t("p",[a._v("于是在JDK1.2后将引用扩充到4种：")]),a._v(" "),t("ul",[t("li",[a._v("强引用：只要引用在就不会被回收。Object obj = new Object();")]),a._v(" "),t("li",[a._v("软引用：内存将要发生溢出前才会被列入回收范围进行二次回收。SoftReference")]),a._v(" "),t("li",[a._v("弱引用：非必要对象，只能生存到下一次垃圾回收前。WeakReference")]),a._v(" "),t("li",[a._v("虚引用：无法通过一个虚引用获取对象。唯一目的是被回收时收到一个系统通知。PhantomReference")])]),a._v(" "),t("h4",{attrs:{id:"_2-1-5-对象被回收过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-对象被回收过程"}},[a._v("#")]),a._v(" 2.1.5 对象被回收过程")]),a._v(" "),t("p",[a._v("通过对对象进行引用计数或可达性分析后确定该对象是否是可被回收对象。")]),a._v(" "),t("p",[a._v("此时，该对象不会立即被回收，处于“死缓”阶段。要判定一个对象死亡，至少要经历"),t("strong",[a._v("两次标记")]),a._v("过程。")]),a._v(" "),t("p",[a._v("可达性分析确定对象死亡时，进行一次标记并进行一次筛选（筛选条件是判断此对象是否有必要执行finalize()方法。如果对象没有覆盖该方法，或已经被jvm调用过finalize(),就确定为没必要执行）。相反的如果筛选为有必要执行finalize(),会先将对象加入F-Queue队列中。并由虚拟机起一个低优先级的Finalizer线程去执行。并且虚拟机不会等待finalize()执行结束。")]),a._v(" "),t("h4",{attrs:{id:"问题：虚拟机不会等待回收对象finalize-执行的原因？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：虚拟机不会等待回收对象finalize-执行的原因？"}},[a._v("#")]),a._v(" 问题：虚拟机不会等待回收对象finalize()执行的原因？")]),a._v(" "),t("p",[a._v("执行该方法时执行缓慢，或该方法内发生死循环等异常情况，会导致F-Queue队列等待，甚至回收系统崩溃。")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("总结：1、确定回收对象。 2、加入执行队列F-Queue。 3、jvm起低优先级Finalizer执行每个对象的finalize()。4、虚拟机不会等待finalize()运行结束。5、jvm对F-Queue二次标记。6、被回收")]),a._v(" "),t("h4",{attrs:{id:"_2-1-6-方法区回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6-方法区回收"}},[a._v("#")]),a._v(" 2.1.6 方法区回收")]),a._v(" "),t("p",[a._v("回收什么？")]),a._v(" "),t("ul",[t("li",[a._v("废弃常量：常量池中没有被其他地方引用的字面量如“abc”")]),a._v(" "),t("li",[a._v("无用的类：1、所有实例都被回收。2、加载该类的ClassLoader已被回收。3、类对象没有任何地方被引用，也无法通过反射访问该类的方法。")])]),a._v(" "),t("p",[a._v("方法区回收参数设定：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-Xnoclassgc # 无用类回收\n")])])]),t("p",[a._v("java -"),t("em",[a._v("verbose")]),a._v(":class--表示在输出设备上限时虚拟机运行信息。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-垃圾收集算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-垃圾收集算法"}},[a._v("#")]),a._v(" 2.2 垃圾收集算法")]),a._v(" "),t("p",[a._v("针对java堆内存的回收问题")]),a._v(" "),t("h4",{attrs:{id:"_2-2-1-标记-清除算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-标记-清除算法"}},[a._v("#")]),a._v(" 2.2.1 标记-清除算法")]),a._v(" "),t("ul",[t("li",[a._v("标记：引用计数算法、可达性分析")]),a._v(" "),t("li",[a._v("清除：产生不连续的内存碎片问题")])]),a._v(" "),t("p",[a._v("问题：1、标记和清除的效率不高。 2、空间碎片问题")]),a._v(" "),t("h4",{attrs:{id:"_2-2-2-复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-复制算法"}},[a._v("#")]),a._v(" 2.2.2 复制算法")]),a._v(" "),t("p",[a._v("将有效对象复制到内存一端，并将另一端清空。")]),a._v(" "),t("p",[a._v("复制算法克服效率问题，简单高效，但内存利用率只有一半。")]),a._v(" "),t("p",[t("strong",[a._v("新生代回收")]),a._v("采用复制算法，（新生代对象98%朝生夕死）。新生代，一个Eden区，两个较小的Survivor区，每次回收将Eden和其中一个S区的存活对象，一次性复制到另一个S区，在清除Eden和S。")]),a._v(" "),t("h4",{attrs:{id:"问题：新生代三个区的默认比例？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：新生代三个区的默认比例？"}},[a._v("#")]),a._v(" 问题：新生代三个区的默认比例？")]),a._v(" "),t("p",[a._v("8:1:1 一般来说98%的对象都会被回收，每次就只有10%的内存被浪费。但特殊情况下空S区的空间不够时，就需要老年代进行分配担保进行内存支援。")]),a._v(" "),t("h4",{attrs:{id:"_2-2-3-标记-整理算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-标记-整理算法"}},[a._v("#")]),a._v(" 2.2.3 标记-整理算法")]),a._v(" "),t("p",[a._v("用在老年代的回收算法，根据老年代对象长生命周期特点，使用复制算法会造成空间浪费和大量复制操作。于是有标记-整理算法。")]),a._v(" "),t("p",[a._v("将活对象标记并整理到内存一端，后将边界往外的内存清空。")]),a._v(" "),t("h4",{attrs:{id:"_2-2-4-分代收集算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-分代收集算法"}},[a._v("#")]),a._v(" 2.2.4 分代收集算法")]),a._v(" "),t("p",[a._v("java虚拟机堆分为：新生代、老年代")]),a._v(" "),t("p",[a._v("根据对象的生命周期特征，分代收集，在"),t("strong",[a._v("新生代使用复制算法，老年代使用标记-整理或标记-清除算法")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"问题：java是多线程gc为什么会停顿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：java是多线程gc为什么会停顿"}},[a._v("#")]),a._v(" 问题：java是多线程GC为什么会停顿?")]),a._v(" "),t("p",[a._v("GC干的事情是：找到死的对象，并清理回收空间。找到死对象的方法在现代商业虚拟机中使用的是：可达性分析算法。这就要求，进行可能性分析的时候，必须在一个确保不能变化的快照中进行。就是说我分析的时候，对象的引用链不能变来变去。")]),a._v(" "),t("p",[a._v("而且GC的暂停只能在安全点位置暂停。OopMap记录了这些安全点Safepoint。")]),a._v(" "),t("h4",{attrs:{id:"_2-2-5-安全点有哪些？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-安全点有哪些？"}},[a._v("#")]),a._v(" 2.2.5 安全点有哪些？")]),a._v(" "),t("p",[a._v("方法调用、循环跳转、异常跳转")]),a._v(" "),t("h4",{attrs:{id:"_2-2-6-如何在gc发生时让所有线程停到最近的安全点？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-如何在gc发生时让所有线程停到最近的安全点？"}},[a._v("#")]),a._v(" 2.2.6 如何在GC发生时让所有线程停到最近的安全点？")]),a._v(" "),t("p",[a._v("两种方式：")]),a._v(" "),t("ul",[t("li",[a._v("抢先式中断Preemptive Suspension")]),a._v(" "),t("li",[a._v("主动式中断Voluntary Suspension")])]),a._v(" "),t("p",[a._v("现代虚拟机采用主动中断方式：首先让所有线程停下来，如果有线程中断的地方不是安全点，就恢复该线程，让其跑到安全点。")]),a._v(" "),t("h4",{attrs:{id:"_2-2-7-安全区概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-7-安全区概念"}},[a._v("#")]),a._v(" 2.2.7 安全区概念")]),a._v(" "),t("p",[a._v("安全点解决的是运行中的线程，到安全点中断，进入GC。")]),a._v(" "),t("p",[a._v("而对于正在阻塞或sleep状态的线程，不能响应GC，jvm也不可能等待CPU分配时间片，唤醒线程。")]),a._v(" "),t("p",[a._v("于是有安全区来解决。（safe region）。")]),a._v(" "),t("p",[a._v("GC时再安全区的线程不用考虑安全问题，只需在线程出安全区时，要求系统检测是否已经完成枚举或GC过程，来确保可以安全离开安全区。")]),a._v(" "),t("h3",{attrs:{id:"_2-3-垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-垃圾收集器"}},[a._v("#")]),a._v(" 2.3 垃圾收集器")]),a._v(" "),t("p",[a._v("垃圾收集器：是内存回收的具体实现（收集算法的具体实现）。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210427172701389.png",alt:"image-20210427172701389"}})]),a._v(" "),t("p",[a._v("注：收集器之间连线表示可以组合使用")]),a._v(" "),t("h4",{attrs:{id:"_2-3-1-serial收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-serial收集器"}},[a._v("#")]),a._v(" 2.3.1 Serial收集器")]),a._v(" "),t("p",[a._v("单线程收集器-Stop the World：该收集器会在GC时，停下其他所有线程（包括用户正常工作线程），在GC完成时恢复。")]),a._v(" "),t("p",[a._v("Serial收集器是：JVM运行在Client模式下的默认新生代收集器。简单高效，在但CPU环境下不存在CPU切换效率很高，停顿时间10-100毫秒，完全可以接受。")]),a._v(" "),t("h4",{attrs:{id:"_2-3-2-parnew收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-parnew收集器"}},[a._v("#")]),a._v(" 2.3.2 ParNew收集器")]),a._v(" "),t("p",[a._v("Serial收集器的多线程版本。")]),a._v(" "),t("p",[a._v("控制参数和Serial一致")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:SurvivorRatio\n-XX:PretenureSizeThreshold\n-XX:HandlePromotionFailure\n")])])]),t("p",[a._v("虚拟机Server模式下首选的新生代收集器，只有该收集器可以和CMS收集器配合使用。")]),a._v(" "),t("p",[a._v("默认开启的线程数和CPU数量相同。")]),a._v(" "),t("p",[a._v("GC收集线程数调优参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:ParallelGCThreads\n")])])]),t("h4",{attrs:{id:"_2-3-3-gc中的并发和并行的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-gc中的并发和并行的概念"}},[a._v("#")]),a._v(" 2.3.3 GC中的并发和并行的概念")]),a._v(" "),t("p",[a._v("并发：指用户线程和收集线程同时执行，用户程序仍然在运行。")]),a._v(" "),t("p",[a._v("并行：指多条GC线程并行工作，但此时用户线程仍然处于等待状态。")]),a._v(" "),t("h4",{attrs:{id:"_2-3-4-parallel-scavenge收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-parallel-scavenge收集器"}},[a._v("#")]),a._v(" 2.3.4 Parallel Scavenge收集器")]),a._v(" "),t("p",[a._v("吞吐量优先、自适应调节策略")]),a._v(" "),t("p",[a._v("针对新生代的多线程并行收集器，最大特点是："),t("strong",[a._v("吞吐量优先")]),a._v("以及"),t("strong",[a._v("自适应调节策略")]),a._v("收集器。")]),a._v(" "),t("p",[t("strong",[a._v("吞吐量=运行用户代码时间/(运行用户代码时间+垃圾收集时间)")])]),a._v(" "),t("p",[a._v("吞吐量控制调整参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:MaxGCPauseMillis # 控制最大垃圾收集停顿时间，取值>0的毫秒值 \n-XX:GCTimeRatio # 吞吐量大小 取值>0且<100的整数 例如：19 相当于1/(1+19),即5%，默认值为99\n-XX：UseAdaptiveSizePolicy # 开关参数，打开后\n# 1、不需要指定新生代大小（-Xmn)\n# 2、不需要指定Eden和s的比例（-XX：SurvivorRatio）\n# 3、不需要指定晋升老年代对象年龄（-XX：PretenureSizeThreshold）\n")])])]),t("p",[a._v("自适应调节策略：只需要关注最大堆-Xmx、MaxGCPauseMillis最大停顿时间、或GCTimeRatio吞吐量比例等参数，将细节调节交给收集器自己。")]),a._v(" "),t("p",[a._v("该架构中有PS MarkSweep收集器进行老年代收集。")]),a._v(" "),t("h4",{attrs:{id:"_2-3-5-serial-old收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-5-serial-old收集器"}},[a._v("#")]),a._v(" 2.3.5 Serial Old收集器")]),a._v(" "),t("p",[a._v("Serial收集器的老年代版本（单线程收集器）。使用标记-整理算法。")]),a._v(" "),t("ul",[t("li",[a._v("主要在client模式下使用")]),a._v(" "),t("li",[a._v("在server模式下两大用途：\n"),t("ul",[t("li",[a._v("1、和Parallel Scavenge搭配使用")]),a._v(" "),t("li",[a._v("2、作为CMS收集器的后备预案")])])])]),a._v(" "),t("h4",{attrs:{id:"_2-3-6-parallel-old收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-6-parallel-old收集器"}},[a._v("#")]),a._v(" 2.3.6 Parallel Old收集器")]),a._v(" "),t("p",[a._v("Parallel Scavenge的老年代版本，使用多线程"),t("strong",[a._v("标记-整理")]),a._v("算法。")]),a._v(" "),t("p",[a._v("最重要是和Parallel Scavenge收集器搭配，利用多CPU并行多线程，实现"),t("strong",[a._v("吞吐量优先")]),a._v("。即：在新生代和老年代都以吞吐量优先的收集器搭配，实现最终的吞吐量目标。")]),a._v(" "),t("h4",{attrs:{id:"_2-3-7-cms收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-7-cms收集器"}},[a._v("#")]),a._v(" 2.3.7 CMS收集器")]),a._v(" "),t("p",[a._v("希望以获得"),t("strong",[a._v("系统最短时间")]),a._v("为目标的收集器。")]),a._v(" "),t("p",[a._v("CMS（Concurrent Mark Sweep多线程标记清除）")]),a._v(" "),t("p",[t("strong",[a._v("运行过程4个步骤：")])]),a._v(" "),t("ul",[t("li",[a._v("初始标记-需停顿用户线程")]),a._v(" "),t("li",[a._v("并发标记-可以和用户线程一起工作")]),a._v(" "),t("li",[a._v("重新标记-需停顿用户线程")]),a._v(" "),t("li",[a._v("并发清除-可以和用户线程一起工作")])]),a._v(" "),t("p",[a._v("初始标记和重新标记耗时较短，所以停顿。而并发标记和并发清除耗时较长，所以设计为和用户线程一起工作。")]),a._v(" "),t("p",[t("strong",[a._v("CMS的三个缺点：")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("对CPU资源非常敏感（默认启动的回收线程数是：（CPU数量+3）/ 4）CPU数量越少，GC占用资源越大")])]),a._v(" "),t("li",[t("p",[a._v("无法处理浮动垃圾")]),a._v(" "),t("p",[a._v("即：CMS并发清理阶段和用户线程并行，此时用户线程会产生新的垃圾为浮动垃圾，无法清理这部分垃圾。同时在垃圾收集阶段，需要用户线程并行，所以必须预留部分内存供用户线程使用，而不能全部用户GC。默认当老年代使用68%后CMS就会被激活。")]),a._v(" "),t("p",[a._v("老年代增长缓慢的应用，可以考虑调高该比例")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:CMSInitiatingOccupancyFraction  # 设置该参数来调高激活比例，降低GC次数，提高性能，该参数设置太高容易导致Concurrent Mode Failure失败，而启动后备预案，Serial Old收集启动，使得停顿时间大增\n")])])])]),a._v(" "),t("li",[t("p",[a._v("标记-清除算法，导致空间碎片问题")]),a._v(" "),t("p",[a._v("为了解决空间碎片问题，提供两个调节参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:UseCMSCompactAtFullCollection # 默认开启 碎片压缩，同时导致停顿时间边长\n-XX：CMSFullGCsBeforeCompaction # 默认0 表示在压缩前，进行几次不压缩的Full GC后，压缩一次\n")])])])])]),a._v(" "),t("h4",{attrs:{id:"_2-3-8-g1收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-8-g1收集器"}},[a._v("#")]),a._v(" 2.3.8 G1收集器")]),a._v(" "),t("p",[t("strong",[a._v("G1的特点：")])]),a._v(" "),t("ul",[t("li",[a._v("并行与并发：利用多核和线程并发保证gc和用户线程同时执行")]),a._v(" "),t("li",[a._v("分代收集：")]),a._v(" "),t("li",[a._v("空间整合：基于标记-整理算法，没有内存碎片问题")]),a._v(" "),t("li",[a._v("可预测的停顿时间：让用户设置停顿时间参数")])]),a._v(" "),t("p",[t("strong",[a._v("总体的GC思路")]),a._v("：化整为零，跳出新生代老年代在整个内存上划分region，并且维护回收价值优先级列表，去根据停顿时间参数，最大程度提高回收效率。")]),a._v(" "),t("p",[t("strong",[a._v("G1收集器运行步骤4：")])]),a._v(" "),t("ul",[t("li",[a._v("初始标记：标记GC Roots直接关联对象，会stop the world，耗时很短。")]),a._v(" "),t("li",[a._v("并发标记：和用户并发可达性分析找活对象，比较耗时，但并发。")]),a._v(" "),t("li",[a._v("最终标记：标记上一步中用户线程变化的对象。Remembered Set logs 记录合并到Remembered Set中。需停顿线程。")]),a._v(" "),t("li",[a._v("筛选回收：对个Region回收价值和成本排序，根据用户期望停顿时间制定回收计划。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210428134619307.png",alt:"image-20210428134619307"}})]),a._v(" "),t("h4",{attrs:{id:"_2-3-9-gc日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-9-gc日志"}},[a._v("#")]),a._v(" 2.3.9 GC日志")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210428140053301.png",alt:"image-20210428140053301"}})]),a._v(" "),t("p",[t("strong",[a._v("33.125、100.667")]),a._v("：表示GC发生的时间，jvm启动经过的描述。即：在33.125和100.667秒发生GC。")]),a._v(" "),t("p",[t("strong",[a._v("[GC、[Full GC")]),a._v("：本次GC的停顿类型，包含Full表示发生了STW（stop the world）。")]),a._v(" "),t("p",[t("strong",[a._v("[DefNew、[Tenured、[Perm")]),a._v("：表示GC发生的区域。")]),a._v(" "),t("p",[a._v("DefNew表示Serial收集器中新生代的名称“Default New Generation”")]),a._v(" "),t("p",[a._v("ParNew表示ParNew收集器新生代名称“Parallel New Generation”")]),a._v(" "),t("p",[a._v("根据不同收集器对个各区的名称不同。")]),a._v(" "),t("p",[t("strong",[a._v("3324K->152K(3712K)")]),a._v("：表示该区“GC前使用量->GC后使用量（总容量）”")]),a._v(" "),t("p",[t("strong",[a._v("3324K->152K(11904K)")]),a._v("：GC前堆使用量->GC后堆使用量(堆总容量)")]),a._v(" "),t("p",[t("strong",[a._v("secs")]),a._v("：本区域GC占用时间")]),a._v(" "),t("p",[t("strong",[a._v("[Times: user=0.01  sys=0.00  real=0.02  secs]")]),a._v("：用户态消耗CPU时间、内核消耗时间、墙钟时间（操作开始到结束经过的）")]),a._v(" "),t("h4",{attrs:{id:"_2-3-10-收集器参数总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-10-收集器参数总结"}},[a._v("#")]),a._v(" *2.3.10 收集器参数总结")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210428142109859.png",alt:"image-20210428142109859"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/shihe110/imgBed/raw/master/imgBed/image-20210428142125443.png",alt:"image-20210428142125443"}})]),a._v(" "),t("h3",{attrs:{id:"_2-4-内存分配策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-内存分配策略"}},[a._v("#")]),a._v(" 2.4 内存分配策略")]),a._v(" "),t("h4",{attrs:{id:"_2-4-1-新生对象优先在eden分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-新生对象优先在eden分配"}},[a._v("#")]),a._v(" 2.4.1 新生对象优先在Eden分配")]),a._v(" "),t("p",[a._v("对象在Eden区分配，当Eden区空间不足时，jvm会发起一次Minor GC。")]),a._v(" "),t("p",[a._v("GC时打印内存回收日志参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:+PrintGCDetails\n")])])]),t("p",[a._v("注：实际应用中，内存回收日志会打印到文件后通过日志分析工具分析。")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/**-verbose:gc-Xms20M -Xms20M -Xmx20M -Xmn10M -XX:+PrintGCDetails -XX:SurvivorRatio=8**/\n")])])]),t("h4",{attrs:{id:"问题：新生代的内存利用率是多少？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：新生代的内存利用率是多少？"}},[a._v("#")]),a._v(" 问题：新生代的内存利用率是多少？")]),a._v(" "),t("p",[a._v("（Eden区大小+S1大小）/ -Xmn大小 为其利用率，因其中一个S保持空的状态来承接Minor GC存活对象。")]),a._v(" "),t("h4",{attrs:{id:"问题：minor-gc和full-gc有什么不一样？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：minor-gc和full-gc有什么不一样？"}},[a._v("#")]),a._v(" 问题：Minor GC和Full GC有什么不一样？")]),a._v(" "),t("p",[a._v("Minor GC是新生代垃圾收集动作，该区域对象朝生夕死的特性，GC会非常频繁，回收速度很快。")]),a._v(" "),t("p",[a._v("Full GC是发生在老年代的GC，也有叫Major GC，回收速度会比Minor GC慢10倍以上。一般会伴随一次Minor GC但不绝对。")]),a._v(" "),t("h4",{attrs:{id:"_2-4-2-大对象直接进入老年代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-大对象直接进入老年代"}},[a._v("#")]),a._v(" 2.4.2 大对象直接进入老年代")]),a._v(" "),t("p",[a._v("大对象直接进入老年代，可以设置进入老年代参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:PretenureSizeThreshold=314578 # 3M大小 即：1024*1024*3\n")])])]),t("p",[a._v("注：该参数只对Serial和ParNew有效。Parallel Scavenge收集器不认识此参数。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" _1MB "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n\t * VM参数：-verbose:gc-Xms20M -Xmx20M -Xmn10M -XX:+PrintGCDetails -XX:SurvivorRatio=8 -XX:PretenureSizeThreshold=3145728\n\t */")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("testPretenureSizeThreshold")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" allocation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\tallocation "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" _1MB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h4",{attrs:{id:"_2-4-3-长期存活对象晋升至老年代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-3-长期存活对象晋升至老年代"}},[a._v("#")]),a._v(" 2.4.3 长期存活对象晋升至老年代")]),a._v(" "),t("p",[a._v("长期存活对象晋升至老年代，其默认的对象年龄是15，对应参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:MaxTenuringThreshold=1 # 默认存活对象晋升老年代岁数\n")])])]),t("p",[a._v("年龄增加策略：每进行一次Minor GC，对象年龄+1，即在S区做一次交换。")]),a._v(" "),t("h4",{attrs:{id:"_2-4-4-动态对象年龄判定策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-4-动态对象年龄判定策略"}},[a._v("#")]),a._v(" 2.4.4 动态对象年龄判定策略")]),a._v(" "),t("p",[a._v("晋升老年代通过对象的年龄来判断，同时还要一个判断条件，是S区的空间占用情况，如果空间占用超过一半。则会动态的找到年龄最大的对象，可能不到15岁，将其晋升至老年代。")]),a._v(" "),t("h4",{attrs:{id:"_2-4-5-空间分配担保"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-5-空间分配担保"}},[a._v("#")]),a._v(" 2.4.5 空间分配担保")]),a._v(" "),t("p",[a._v("空间分配担保策略，指新生代空间不足，则到老年代来分配空间。")]),a._v(" "),t("p",[a._v("期间的过程是：新生代空间不足，触发Minor GC，此时会先检查老年代的连续空间是否大于新生代对象总空间，如果可以放下，说明本次GC确保安全。如果不成立，在老版本的JVM中会检查老年代的连续空间大小和历次Minor GC后晋升老年代的对象的平均大小比较。如果空间还足够，则冒险进行一次Minor GC。这种策略即为空间分配担保。如果担保失败则启动Full GC。")]),a._v(" "),t("p",[a._v("开启担保策略参数：")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:-HandlePromotionFailure=true # 开启 false为关闭，默认\n")])])]),t("p",[a._v("在JDK6 update 24之后，该参数不再影响JVM的空间分配担保策略。即只要老年代连续空间大于新生代对象空间或大于历次晋升平均大小就启动Minor GC，否则就启动Full GC。")])])}),[],!1,null,null,null);_.default=e.exports}}]);