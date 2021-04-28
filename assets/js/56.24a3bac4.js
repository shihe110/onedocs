(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{402:function(a,s,t){"use strict";t.r(s);var v=t(42),_=Object(v.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"jvm入门总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm入门总结"}},[a._v("#")]),a._v(" JVM入门总结")]),a._v(" "),t("p",[a._v("jvm(Java Virtual Machine):Java虚拟机，识别Java源代码。")]),a._v(" "),t("h3",{attrs:{id:"_1、字节码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、字节码"}},[a._v("#")]),a._v(" 1、字节码")]),a._v(" "),t("p",[a._v("中间层，jvm将字节码解释执行或使用JIT编译机器码执行。")]),a._v(" "),t("h4",{attrs:{id:"字节码7种主要命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字节码7种主要命令"}},[a._v("#")]),a._v(" 字节码7种主要命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1、加载存储指令\n - ILOAD ALOAD # 压栈操作\n - ISTORE ASTORE # 弹栈存储局部变量表操作\n - ICONST BIPUSH SIPUSH LDC # 常量压栈操作\n \n2、运算指令\n - IADD IMUL # 弹栈 计算结果 压栈\n\n3、类型转换指令\n - I2L D2F # 转换数值类型\n\n4、对象创建和访问指令\n 创建、初始化、方法调用\n - NEW NEWARRAY # 创建-分配内存-引用分配内存\n - GETFIELD PUTFIELD GETSTATIC # 属性访问\n - INSTANCEOF CHECKCAST # 检查实例类型指令\n \n5、操作栈管理指令\n - POP POP2 # 弹栈操作\n - DUP 复制栈顶元素并压栈\n6、方法调用和返回指令\n - INVOKEVIRTUAL # 调用对象的实例方法。\n - INVOKESPECIAL # 调用实例初始化方法、私有方法、父类方法等。\n - 1NVOKESTATIC # 调用类静态方法。\n - RETURN # 返回VOID类型。\n7、同步指令\n - ACC_SYNCHRONIZED\n")])])]),t("p",[t("img",{attrs:{src:"D:%5Cjianguoyun%5C%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91%5Cassets%5C%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16031822842760.png",alt:"img"}})]),a._v(" "),t("h4",{attrs:{id:"字节码三种执行方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字节码三种执行方式"}},[a._v("#")]),a._v(" 字节码三种执行方式")]),a._v(" "),t("ul",[t("li",[a._v("解释执行")]),a._v(" "),t("li",[a._v("JIT编译执行（动态编译）")]),a._v(" "),t("li",[a._v("JIT编译和解释混合执行（主流jvm默认模式）")])]),a._v(" "),t("p",[t("strong",[a._v("JIT的作用")])]),a._v(" "),t("p",[a._v("将Java字节码动态编译成机器码")]),a._v(" "),t("p",[t("img",{attrs:{src:"D:%5Cjianguoyun%5C%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91%5Cassets%5C%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16031828915304.png",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"_2、类加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、类加载过程"}},[a._v("#")]),a._v(" 2、类加载过程")]),a._v(" "),t("p",[a._v("一句话：类加载是一个将.class字节码文件实例化成Class对象并进行相关初始化的过程。")]),a._v(" "),t("p",[a._v("【ClassLoader器（将字节码加载到内存中）、双亲委派模型（溯源委派加载模型）】")]),a._v(" "),t("p",[a._v("类加载的三个阶段：")]),a._v(" "),t("ul",[t("li",[a._v("Load加载")]),a._v(" "),t("li",[a._v("Link链接\n"),t("ul",[t("li",[a._v("验证")]),a._v(" "),t("li",[a._v("准备")]),a._v(" "),t("li",[a._v("解析")])])]),a._v(" "),t("li",[a._v("Init初始化")])]),a._v(" "),t("hr"),a._v(" "),t("h4",{attrs:{id:"类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[a._v("#")]),a._v(" 类加载器")]),a._v(" "),t("p",[a._v("类加载器：是一组上下等级类加载器：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("第一层：Bootstrap（通常有操作系统相关本地代码实现）")]),a._v(" "),t("p",[a._v("加载Java核心类，Object、System、String等")])]),a._v(" "),t("li",[t("p",[a._v("第二层：Platform ClassLoader（jdk9）之前是 Extension ClassLoader（平台类加载器）")]),a._v(" "),t("p",[a._v("加载一些扩展系统类，如xml、加密、压缩等功能类。")])]),a._v(" "),t("li",[t("p",[a._v("第三层：Application ClassLoader（应用类加载器）")]),a._v(" "),t("p",[a._v("加载用户定义的classpath路径下的类。")])])]),a._v(" "),t("p",[a._v("第二层第三层类加载器由Java实现。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// JDK11下")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 第三层应用类加载器：AppClassLoader")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestWhoLoad")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 第二层平台类加载器：PlatformClassLoader")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v(" c1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPerent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 第一层Bootstrap：null")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v(" c2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" c1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPerent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// JDK8下的执行结果")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AppClassLoader")]),a._v("：应用类加载器\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExtClassLoader")]),a._v("：扩展类加载器\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("："),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bootstrap")]),a._v("系统本地类实现（由c"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("来实现）\n")])])]),t("h4",{attrs:{id:"双亲委派模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派模型"}},[a._v("#")]),a._v(" 双亲委派模型")]),a._v(" "),t("p",[t("img",{attrs:{src:"D:%5Cjianguoyun%5C%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91%5Cassets%5Cimage-20201019171410719.png",alt:"image-20201019171410719"}})]),a._v(" "),t("p",[a._v("低层次的当前类加载器，不能覆盖高层次类加载器已经加载的类。")]),a._v(" "),t("p",[t("strong",[a._v("低层次类加载想加载一个类的过程")])]),a._v(" "),t("p",[a._v("不同层次的类加载器加载的类不同所有要有一系列判断才会确定是否加载")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("1、向上级类加载器询问是否已经加载了？")])]),a._v(" "),t("li",[t("p",[a._v("2、上级加载器自问：1、是否加载过？2、没有加载过，则是否可以加载？")])]),a._v(" "),t("li",[t("p",[a._v("3、上级加载器对以上两个问题都为否时，当前加载器才可以加载")])])]),a._v(" "),t("blockquote",[t("p",[a._v("追加Bootstrap类加载路径：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-Xbootclasspath/a : /Users/yangguanbao/book/easyCoding/byJdkl l/src\n")])])]),t("p",[a._v("启动时观察加载的类")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:+TraceClassLoading\n")])])])]),a._v(" "),t("p",[t("strong",[a._v("什么情况下需自定义类加载器")])]),a._v(" "),t("ul",[t("li",[a._v("隔离加载类：隔离中间件jar包中类加载（路径相同冲突）")]),a._v(" "),t("li",[a._v("修改类加载方式：按需加载")]),a._v(" "),t("li",[a._v("扩展加载源：db、网络、机顶盒")]),a._v(" "),t("li",[a._v("防止源码泄漏：")])]),a._v(" "),t("p",[t("strong",[a._v("实现自定义类加载器步骤")])]),a._v(" "),t("ul",[t("li",[a._v("1、继承ClassLoader")]),a._v(" "),t("li",[a._v("2、重写findClass()方法")]),a._v(" "),t("li",[a._v("3、调用defineClass()方法")])]),a._v(" "),t("p",[t("strong",[a._v("主流的容器类框架都会自定义类加载器，实现不同中间件之间的类隔离 有效避免了类冲突。")])]),a._v(" "),t("h3",{attrs:{id:"_3、内存布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、内存布局"}},[a._v("#")]),a._v(" 3、内存布局")]),a._v(" "),t("p",[a._v("内存是硬盘和CPU的中间仓库和桥梁，承载着操作系统和应用程序的实时运行。")]),a._v(" "),t("p",[a._v("内存布局策略：内存的申请、分配、管理")]),a._v(" "),t("p",[t("img",{attrs:{src:"D:%5Cjianguoyun%5C%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91%5Cassets%5Cimage-20201019174315974.png",alt:"image-20201019174315974"}})]),a._v(" "),t("p",[t("strong",[a._v("JVM内存布局")]),a._v("（jdk11）")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("堆区（Heap）")])]),a._v(" "),t("li",[t("p",[a._v("元数据区（Metaspace）")])]),a._v(" "),t("li",[t("p",[a._v("虚拟机栈（jvm stacks）")])]),a._v(" "),t("li",[t("p",[a._v("本地方法栈（native Method stacks）")])]),a._v(" "),t("li",[t("p",[a._v("程序计数器（Program Counter Register）")])])]),a._v(" "),t("hr"),a._v(" "),t("h4",{attrs:{id:"堆区heap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆区heap"}},[a._v("#")]),a._v(" "),t("strong",[a._v("堆区heap")])]),a._v(" "),t("p",[t("strong",[a._v("0、堆区的实质？")])]),a._v(" "),t("p",[a._v("堆区的实质是一块提供了对象的新陈代谢机制内存空间。")]),a._v(" "),t("p",[t("strong",[a._v("1、作用是什么？")])]),a._v(" "),t("p",[a._v("是一块内存区域，存储几乎所有实例对象，由各子线程共享使用。")]),a._v(" "),t("p",[t("strong",[a._v("2、堆空间大小设定")])]),a._v(" "),t("p",[a._v("JVM运行参数设定：堆空间大小设定")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-Xms256M -Xmx1024M\n# -X表示它是 JVM 运行参数， ms memory start 的简称，\nmx memory max 的简称，分别代表最小堆容量和最大堆容量。\n")])])]),t("p",[t("strong",[a._v("堆空间不断扩缩容，会造成不必要的系统压力，所以线上生产环境，JVM的Xms和Xmx设置成大小一样，避免GC后堆区调整带来的压力。")])]),a._v(" "),t("p",[t("strong",[a._v("3、堆空间分块")])]),a._v(" "),t("ul",[t("li",[a._v("新生代\n"),t("ul",[t("li",[a._v("1个 Eden区")]),a._v(" "),t("li",[a._v("2个Survivor")])])]),a._v(" "),t("li",[a._v("老年代")])]),a._v(" "),t("p",[a._v("配置计数器阈值")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:MaxTenuringThreshold=15 #默认值15，对象在Survivor区交换14后，晋升到老年代\n")])])]),t("p",[t("img",{attrs:{src:"D:%5Cjianguoyun%5C%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91%5Cassets%5C%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_160315531322.png",alt:"img"}})]),a._v(" "),t("p",[a._v("【新对象申请在Eden区】（主要是空间的问题，只要能放得下，就会分配对象内存）")]),a._v(" "),t("p",[a._v("​\t【如果放得下】（开辟空间分配对象内存）")]),a._v(" "),t("p",[a._v("​\t【如果放不下则启动YGC】（新生代垃圾回收机制）")]),a._v(" "),t("p",[a._v("【给新生代腾空间】（结果就是垃圾回收后能不能放下）")]),a._v(" "),t("p",[a._v("​\t【如果能放下】（直接开辟空间分配对象内存）")]),a._v(" "),t("p",[a._v("​\t【如果放不下】（直接放入老年代，老年代存储也要看空间是否足够）")]),a._v(" "),t("p",[a._v("​\t\t【如果老年代能放下】（直接开辟空间分配对象内存）")]),a._v(" "),t("p",[a._v("​\t\t【如果老年代放不下则启动FGC】（启动全垃圾回收机制，给对象腾空间）")]),a._v(" "),t("p",[a._v("​\t\t\t【FGC结果空间足够】（老年代开辟空间存对象）")]),a._v(" "),t("p",[a._v("​\t\t\t【如果空间不够】则内存溢出OOM")]),a._v(" "),t("p",[a._v("【YGC机制】")]),a._v(" "),t("p",[a._v("​\t将Eden区老的对象或清除或移动到Survivor区（没引用则清除，有引用则移动）")]),a._v(" "),t("p",[a._v("​\t同时判断空间--如果空间足够则移动到s0区或s1区")]),a._v(" "),t("p",[a._v("​\t如果空间不够则晋升至老年代（同理也需要判断空间及启动相应处理机制）")]),a._v(" "),t("p",[a._v("​\t每次YGC都会判断s0和s1区存活阈值，同时对象在这两个区做交换")]),a._v(" "),t("p",[a._v("每次YGC时所有的旧对象在s0和s1区相互交换，之所以要两块内存是为了判断对象存活阈值是否达到，如果达到阈值则对象晋升老年代。")]),a._v(" "),t("hr"),a._v(" "),t("p",[t("strong",[a._v("4、YGC新生代垃圾回收")])]),a._v(" "),t("p",[t("strong",[a._v("5、FGC垃圾回收")])]),a._v(" "),t("h5",{attrs:{id:"堆jvm参数设定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆jvm参数设定"}},[a._v("#")]),a._v(" 堆JVM参数设定")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-Xms256M -Xmx1024M # jvm堆内存大小参数设定，ms：memory start mx：memory max\n-XX:MaxTenuringThreshold=15 # 存活区交换次数默认15  1：直接从Eden区移至Old区\n-XX:+HeapDumpOnOutOfMemoryError # 内存溢出错误堆内错误信息\n")])])]),t("h4",{attrs:{id:"元空间metaspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元空间metaspace"}},[a._v("#")]),a._v(" 元空间Metaspace")]),a._v(" "),t("p",[a._v("JDK8元空间的前身为Perm区（永久代）已经被淘汰。")]),a._v(" "),t("p",[t("strong",[a._v("元空间的前身永久代Perm被淘汰原因")])]),a._v(" "),t("p",[a._v("Perm启动内存大小固定，调优困难。FGC时会移动类元信息。如果动态加载类过多，会造成Perm区内存溢出OOM。")]),a._v(" "),t("p",[a._v("JDK8以后Perm被元空间代替，常量池被移到堆区，其他信息如类元信息、字段、静态属性、方法、常量被移动到元空间。")]),a._v(" "),t("h5",{attrs:{id:"jvm参数设定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数设定"}},[a._v("#")]),a._v(" JVM参数设定")]),a._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[a._v("-XX:MaxPermSize=1280m # 该参数在JDK8以后被删除，如果显示配置jvm也不会报错，但会给出提示：Java Hotspot 64Bit Server VM warning：ignoring option MaxPermSize=2560m；support was removed in 8.0。\n")])])]),t("h4",{attrs:{id:"jvm-stack（虚拟机栈）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-stack（虚拟机栈）"}},[a._v("#")]),a._v(" JVM Stack（虚拟机栈）")]),a._v(" "),t("p",[t("strong",[a._v("jvm虚拟机栈是什么？")])]),a._v(" "),t("p",[a._v("是表述Java方法执行的内存区域（且线程私有:是不是说明每个线程都有自己的虚拟机栈）")]),a._v(" "),t("p",[a._v("虚拟机栈内存储着栈帧，且只能操作栈顶栈帧。（压栈弹栈）")]),a._v(" "),t("p",[t("strong",[a._v("栈帧组成")])]),a._v(" "),t("ul",[t("li",[a._v("局部变量表（存方法参数和局部变量的区域，index[0]是所属对象实例引用）")]),a._v(" "),t("li",[a._v("操作栈（初始为空的桶式结构栈）")]),a._v(" "),t("li",[a._v("动态连接（每个栈帧包含一个在常量池中对当前方法的引用）")]),a._v(" "),t("li",[a._v("方法返回地址（正常退出、异常退出")])]),a._v(" "),t("p",[t("strong",[a._v("操作栈和局部变量表交互说明")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// Java代码\npublic int add(){\n\tint x = 13;\n\tint y = 14;\n\tint z = x + y;\n\treturn z;\n}\n")])])]),t("div",{staticClass:"language-class extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 字节码操作顺序\npublic add() ; \ndescriptor:() \nflags:ACC_PUBLIC \nCode:\n\tstack=2, locals=4, args_Size=1\n\t\tBIPUSH 13  # 压栈（操作栈）\n\t\tISTORE_1   # 弹栈 存s1（局部变量表）\n\n\t\tBIPUSH 14  # 压栈\n\t\tISTORE_2   # 弹栈 存s2\n \n\t\tILOAD_1    # 压栈 s1值（将slot_1中的值压栈）\n\t\tILOAD_2    # 压栈 s2值\n\t\tIADD       # 弹栈 s1 s2 CPU加和 并结果压栈\n\t\tISTORE_3   # 弹栈 存s3\n\t\t\n\t\tILOAD_3    # 压栈 存s3\n\t\tIRETURN    # 弹栈 s3\n")])])]),t("p",[a._v("面试题：i++和++i的区别")]),a._v(" "),t("p",[a._v("++操作是在局部变量表进行的：iinc操作")]),a._v(" "),t("p",[a._v("所有有：先压栈还是先++从而影响结果。")]),a._v(" "),t("p",[a._v("i++是先压栈，后++，再弹栈，是非原子操作，有多线程问题，即使通过volatile修饰也会产生数据相互覆盖问题。")]),a._v(" "),t("p",[t("strong",[a._v("方法返回地址退出的三种可能")])]),a._v(" "),t("ul",[t("li",[a._v("返回值压入上层调用栈帧")]),a._v(" "),t("li",[a._v("异常信息抛给能够处理的栈帧")]),a._v(" "),t("li",[a._v("PC计数器指向方法调用后的下一条指令")])]),a._v(" "),t("h4",{attrs:{id:"本地方法栈（native-method-stacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈（native-method-stacks"}},[a._v("#")]),a._v(" 本地方法栈（native method stacks)")]),a._v(" "),t("p",[a._v("也是表述Java方法执行的内存区域，也是线程私有的，为调用本地方法服务。")]),a._v(" "),t("p",[a._v("本地方法通过JNI（Java native Interface）来访问虚拟机运行时的数据区，甚至可以调用寄存器，具有和jvm相同的权限和能力。内存不足也会造成本地方法栈内存溢出。")]),a._v(" "),t("p",[a._v("大量调用本地方法会架空jvm，导致jvm稳定性降低，可以使用中间框架解耦，提升jvm稳定性。如果要求高效率也可以考虑设计为JNI调用方式。")]),a._v(" "),t("h4",{attrs:{id:"程序技术寄存器pc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序技术寄存器pc"}},[a._v("#")]),a._v(" 程序技术寄存器PC")]),a._v(" "),t("p",[a._v("Program Counter Register")]),a._v(" "),t("p",[a._v("CPU只有把数据装载到寄存器才能够运行。")]),a._v(" "),t("p",[a._v("程序计数器作用：用来存放执行指令和偏移量和行号指示器等。")]),a._v(" "),t("p",[a._v("CPU时间片切换时使用程序计数器记录执行位置。用于线程的执行和恢复")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("堆区和元空间是线程共享的。")]),a._v(" "),t("p",[a._v("虚拟机栈、本地方法栈、程序计数器是线程私有的。")]),a._v(" "),t("p",[t("img",{attrs:{src:"D:%5Cjianguoyun%5C%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91%5Cassets%5C%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16031636889249.png",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"_4、对象实例化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、对象实例化"}},[a._v("#")]),a._v(" 4、对象实例化")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" ref "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("img",{attrs:{src:"E:%5Cjianguoyun%5C%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91%5Cassets%5C%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16031753593718.png",alt:"img"}})]),a._v(" "),t("h4",{attrs:{id:"字节码对象实例化过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字节码对象实例化过程"}},[a._v("#")]),a._v(" 字节码对象实例化过程")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("NEW:创建对象，先找Class类对象，否则先进行类加载。")]),a._v(" "),t("p",[a._v("分配内存（属性分配内存，0值初始化）")]),a._v(" "),t("p",[a._v("引用ref也是一个变量，占4个字节存储。")]),a._v(" "),t("p",[a._v("将指向实例对象的引用变量压栈。")])]),a._v(" "),t("li",[t("p",[a._v("DUP：在栈顶复制引用变量压栈（两个引用变量）")]),a._v(" "),t("p",[a._v("如果"),t("init",[a._v("方法有参数，还需要将参数压栈，这里没有则，栈中只有两个实例引用变量。")])],1)]),a._v(" "),t("li",[t("p",[a._v("INVOKESPECIAL：调用实例方法，通过栈顶引用调用"),t("init",[a._v("方法。")])],1),a._v(" "),t("p",[t("clinit",[a._v(" 是类初始化时执行的方法 而＜init> 是对象初始化时执行的方法。")])],1)])]),a._v(" "),t("h4",{attrs:{id:"程序执行步骤初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序执行步骤初始化"}},[a._v("#")]),a._v(" 程序执行步骤初始化")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("确认元信息是否存在。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("当jvm收到new指令时\n1、检查元空间Metaspace中类元信息是否存在。\n2、若不存在：双亲委派类加载类元信息并生成Class对象。（ClassLoader＋包名＋类名为 Key 进行查找对应的.class 文件。）\n3、若找不到则抛异常：ClassNotFoundException\n")])])])]),a._v(" "),t("li",[t("p",[a._v("分配对象内存")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Object ref = new Object()\n1、计算对象占用空间new Object()\n2、ref分配引用变量空间4字节\n3、堆区分配对象内存\n分配内存空间时必须是同步操作，方式采用：CAS、失败重试、区域加锁等保证分配操作原子性。\n")])])])]),a._v(" "),t("li",[t("p",[a._v("设定默认值")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("成员变量设置默认值，即零值（根据具体类型"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("等）\n")])])])]),a._v(" "),t("li",[t("p",[a._v("设置对象头")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("设置对象的：哈希码、GC信息、锁信息、对象所属的类元信息等\n")])])])]),a._v(" "),t("li",[t("p",[a._v("执行init方法")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("初始化成员变量、执行实例化代码、调用构造函数。\n将堆内对象的首地址赋值给引用变量\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"_5、垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、垃圾回收"}},[a._v("#")]),a._v(" 5、垃圾回收")]),a._v(" "),t("p",[a._v("Java会自动做内存管理，使上层业务更安全更无脑的使用内存-只关注程序逻辑。")]),a._v(" "),t("p",[t("strong",[a._v("垃圾回收的目的")])]),a._v(" "),t("p",[a._v("清除不再使用的对象，自动释放内存。")]),a._v(" "),t("p",[t("strong",[a._v("GC是如何判断对象是否可以被回收？")])]),a._v(" "),t("p",[a._v("即判断对象是否存活，jvm引入GC Roots。如果一个对象与GC Roots之间没有直接和间接引用关系，则认为可以被回收。")]),a._v(" "),t("p",[t("strong",[a._v("什么对象可以作为GC Roots？")])]),a._v(" "),t("p",[a._v("类静态属性中引用的对象")]),a._v(" "),t("p",[a._v("常量引用的对象")]),a._v(" "),t("p",[a._v("虚拟机栈中引用的对象")]),a._v(" "),t("p",[a._v("本地方法栈中引用的对象")]),a._v(" "),t("p",[t("strong",[a._v("垃圾回收算法")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("标记-清除算法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("GC Roots出发，标记引用关系的对象，剩下的清除\n导致大量空间碎片，导致要分配连续大内存时，触发FGC\n")])])])]),a._v(" "),t("li",[t("p",[a._v("标记-整理算法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("GC Roots出发，标记存活对象，并将存活对象整理到内存空间一端，形成连续的已用空间，最后把其余的空间清理\n")])])])]),a._v(" "),t("li",[t("p",[a._v("标记-复制算法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("开辟两块空间，每次只激活一块，gc时将活对象复制到未激活空间并激活该空间，将原已激活空间标记未激活，\n然后清除原空间的对象。\n")])])])])]),a._v(" "),t("p",[t("strong",[a._v("垃圾回收器")])]),a._v(" "),t("p",[a._v("是jvm垃圾回收的具体实现，版本很多。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Serial：用于YGC，STW暂停应用回收")])]),a._v(" "),t("li",[t("p",[a._v("CMS：并发标记扫描回收器，也会STW")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX :+UseCMSCompactAtFullCollection # 强制jvm在FGC后对老年代压缩，执行一次空间碎片整理，整理阶段会触发STW\n-XX +CMSFullGCsBeforeCompaction=n # 在执行n次FGC后，执行老年代空间碎片整理\n")])])])]),a._v(" "),t("li",[t("p",[a._v("G1：自带压缩功能，避免碎片问题，STW时间可控性更高，jdk11默认回收器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:+UseG1GC \n")])])]),t("p",[a._v("G1将堆空间分割成相同大小区域region，四种类型")]),a._v(" "),t("ul",[t("li",[a._v("Eden")]),a._v(" "),t("li",[a._v("Survivor")]),a._v(" "),t("li",[a._v("Old")]),a._v(" "),t("li",[a._v("Humongous")])])])]),a._v(" "),t("p",[a._v("G1的原理是，分割整理机制，优先清理垃圾最多的区域，采用Mark-Copy算法，不会有碎片化问题，且可预测STW时间。")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("垃圾回收机制思想：主要采用分割整理思想。")]),a._v(" "),t("p",[a._v("整理思想：标记整理Mark-Compact")]),a._v(" "),t("p",[a._v("分割思想：标记复制Mark-Copy")]),a._v(" "),t("p",[a._v("多分割：G1回收器，任务分解后采用Mark-Copy，既加快了回收速度，又避免了碎片化触发FGC")]),a._v(" "),t("hr")])}),[],!1,null,null,null);s.default=_.exports}}]);