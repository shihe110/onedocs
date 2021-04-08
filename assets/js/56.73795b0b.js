(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{401:function(a,t,l){"use strict";l.r(t);var s=l(42),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h2",{attrs:{id:"jvm内存调优"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存调优"}},[a._v("#")]),a._v(" JVM内存调优")]),a._v(" "),l("ul",[l("li",[a._v("堆大小设置")]),a._v(" "),l("li",[a._v("回收器选择\n"),l("ul",[l("li",[a._v("在对JVM内存调优的时候不能只看操作系统级别Java进程所占用的内存，这个数值不能准确的反应堆内存的真实占用情况，因为GC过后这个值是不会变化的，因此内存调优的时候要更多的使用JDK提供的内存查看工具，比如JConsole和JavaVisualVM。")]),a._v(" "),l("li",[a._v("对JVM内存的系统级的调优主要的目的是减少GC的频率和Full GC的次数，过多的GC和Full GC是会占用很多的系统资源（主要是CPU），影响系统的吞吐量。特别要关注Full GC，因为它会对整个堆进行整理，导致Full GC一般由于以下几种情况：")])])])]),a._v(" "),l("h3",{attrs:{id:"_1、导致full-gc的几种情况："}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1、导致full-gc的几种情况："}},[a._v("#")]),a._v(" 1、导致Full GC的几种情况：")]),a._v(" "),l("ul",[l("li",[a._v("新生代空间不足\n"),l("ul",[l("li",[a._v("尽量让对象在新生代YGC时被回收")]),a._v(" "),l("li",[a._v("让对象在新生代多活一段时间")]),a._v(" "),l("li",[a._v("不要创建过大的对象及数组，避免新生代放不下，直接在老年代创建对象")])])]),a._v(" "),l("li",[a._v("Permanet Generation空间不足（永久代）\n"),l("ul",[l("li",[a._v("增大Perm Gen空间，避免太多静态对象（JDK8以后就被元空间代替了）")]),a._v(" "),l("li",[a._v("统计GC后晋升到老年代的平均大小大于老年代剩余空间")]),a._v(" "),l("li",[a._v("控制好新生代和老年代的比例")])])]),a._v(" "),l("li",[a._v("System.gc()被显示调用\n"),l("ul",[l("li",[a._v("垃圾回收尽量依靠JVM自身机制，不做手动回收")])])])]),a._v(" "),l("h3",{attrs:{id:"_2、主要的调优手段"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2、主要的调优手段"}},[a._v("#")]),a._v(" 2、主要的调优手段")]),a._v(" "),l("p",[a._v("调优手段主要是通过控制堆内存的各个部分的比例和GC策略来实现的，内存比例不良设置会导致一些不良后果：")]),a._v(" "),l("ul",[l("li",[a._v("新生代设置过小\n"),l("ul",[l("li",[a._v("导致YGC频繁启动，增大系统消耗")]),a._v(" "),l("li",[a._v("导致大对象直接进入老年代，占据老年代剩余空间，诱发Full GC")])])]),a._v(" "),l("li",[a._v("新生代设置过大\n"),l("ul",[l("li",[a._v("堆总量一定地情况下会导致老年代过小，易诱发Full GC")]),a._v(" "),l("li",[a._v("YGC的耗时大幅增加")]),a._v(" "),l("li",[a._v("【一般来说新生代占1/3比较合适】")])])]),a._v(" "),l("li",[a._v("Survivor设置过小\n"),l("ul",[l("li",[a._v("YGC时s0/s1放不下，导致对象到达老年代，降低在新生代存活时间")])])]),a._v(" "),l("li",[a._v("Survivor设置过大\n"),l("ul",[l("li",[a._v("S区过大，导致Eden区过小，增加了YGC的频率")]),a._v(" "),l("li",[a._v("通过-XX:MaxTenuringThreshold=n参数控制新生代存活时间，尽量让对象在新生代被回收")])])])]),a._v(" "),l("h3",{attrs:{id:"_3、新生代和老年代gc策略和组合搭配"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3、新生代和老年代gc策略和组合搭配"}},[a._v("#")]),a._v(" 3、新生代和老年代GC策略和组合搭配")]),a._v(" "),l("p",[a._v("JVM提供了两种较为简单的GC策略设置方式：")]),a._v(" "),l("ul",[l("li",[l("p",[a._v("1、吞吐量优先")]),a._v(" "),l("p",[a._v("JVM已吞吐量为指标，自行选择相应的GC策略及控制新生代和老年代的大小比例，来达到吞吐量指标。")]),a._v(" "),l("p",[a._v("设置参数为：-XX:GCTimeRatio=n")])]),a._v(" "),l("li",[l("p",[a._v("2、暂停时间优先")]),a._v(" "),l("p",[a._v("JVM以暂停时间为指标，自行选择相应的GC策略及控制新生代和老年代的大小比例，尽量保证每次GC造成的应用停止时间都在指定的数值范围内完成。")]),a._v(" "),l("p",[a._v("设置参数为：-XX:MaxGCPauseRatio=n")])])]),a._v(" "),l("h3",{attrs:{id:"_4、几种常见的jvm配置原则"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4、几种常见的jvm配置原则"}},[a._v("#")]),a._v(" 4、几种常见的JVM配置原则")]),a._v(" "),l("h4",{attrs:{id:"_1、堆设置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1、堆设置"}},[a._v("#")]),a._v(" 1、堆设置")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("-Xms # 初始堆大小 如：-Xms512m\n\n-Xmx # 最大堆大小\n\n-XX:NewSize=n # 设置新生代大小\n\n-XX:NewRatio=n # 设置新生代和老年代的比值。 如：为3，表示新生代与老年代比值为1：3，年轻代占整个堆的1/4\n\n-XX:SurvivorRation=n # 新生代中Eden取和两个Survivor区（S0、S1区）的比值。如3，表示Eden区是3份，两个S区是2份，一个s区占新生代的1/5\n\n-XX:MaxPermSize=n # 设置永久代大小 JDK8后设置该参数不会报错，会提示\n")])])]),l("h4",{attrs:{id:"_2、收集器设置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2、收集器设置"}},[a._v("#")]),a._v(" 2、收集器设置")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("-XX:+UseSerialGC # 设置串行收集器\n\n-XX:+UseParallelGC # 设置并行收集器\n\n-XX:+UseParalleldOldGC # 设置老年代并行收集器\n\n-XX:+UseConcMarkSweepGC # 设置并发收集器\n")])])]),l("h4",{attrs:{id:"_3、垃圾回收统计信息"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3、垃圾回收统计信息"}},[a._v("#")]),a._v(" 3、垃圾回收统计信息")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("-XX:+PrintGC\n-XX:+PrintGCDetails\n-XX:+PrintGCTimeStamps\n-Xloggc:filename  # 配置垃圾回收日志\n")])])]),l("h4",{attrs:{id:"_4、并行收集器设置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4、并行收集器设置"}},[a._v("#")]),a._v(" 4、并行收集器设置")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("-XX:ParallelGCThreads=n # 设置并行收集器收集时使用的CPU核心数。并行收集线程数。\n\n-XX:MaxGCPauseMillis=n # 设置并行收集最大暂停时间\n\n-XX:GCTimeRatio=n # 设置垃圾回收时间占程序运行时间的百分比。公式为1/(1+n)\n")])])]),l("h4",{attrs:{id:"_5、并发收集器设置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5、并发收集器设置"}},[a._v("#")]),a._v(" 5、并发收集器设置")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("-XX:+CMSIncrementalMode  # 设置为增量模式。使用于单CPU情况。\n\n-XX:ParallelGCThreads=n # 设置并发收集器年轻代收集方式为并行收集时，使用的CPU数。并行收集线程数。\n")])])]),l("p",[a._v("资料地址：https://www.cnblogs.com/diegodu/p/9849611.html")])])}),[],!1,null,null,null);t.default=e.exports}}]);