(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{447:function(e,t,v){"use strict";v.r(t);var s=v(42),_=Object(s.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"拦截器和过滤器的区别总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拦截器和过滤器的区别总结"}},[e._v("#")]),e._v(" 拦截器和过滤器的区别总结")]),e._v(" "),v("p",[e._v("过滤器--一堆东西中取你想要的")]),e._v(" "),v("p",[e._v("拦截器--一个流程正在进行的时候，希望干预他的进展，设置结束他，一个方法前或后边调用点什么。")]),e._v(" "),v("p",[e._v("拦截器 ：是在面向切面编程的就是在你的service或者一个方法，前调用一个方法，或者在方法后调用一个方法比如动态代理就是拦截器的简单实现，在你调用方法前打印出字符串（或者做其它业务逻辑的操作），也可以在你调用方法后打印出字符串，甚至在你抛出异常的时候做业务逻辑的操作。")]),e._v(" "),v("p",[e._v("过滤器：是在javaweb中，你传入的request、response提前过滤掉一些信息，或者提前设置一些参数，然后再传入servlet或者struts的action进行业务逻辑，比如过滤掉非法url（不是login.do的地址请求，如果用户没有登陆都过滤掉），或者在传入servlet或者 struts的action前统一设置字符集，或者去除掉一些非法字符.。")]),e._v(" "),v("h2",{attrs:{id:"使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),v("p",[e._v("spring Web MVC的处理器拦截器类似于Servlet开发中的过滤器Filter，用于对处理器进行预处理和后处理。")]),e._v(" "),v("p",[e._v("1、日志记录：记录请求信息的日志，以便进行信息监控、信息统计、计算PV（Page View）等。")]),e._v(" "),v("p",[e._v("2、权限检查：如登录检测，进入处理器检测检测是否登录，如果没有直接返回到登录页面；")]),e._v(" "),v("p",[e._v("3、性能监控：有时候系统在某段时间莫名其妙的慢，可以通过拦截器在进入处理器之前记录开始时间，在处理完后记录结束时间，从而得到该请求的处理时间（如果有反向代理，如apache可以自动记录）；")]),e._v(" "),v("p",[e._v("4、通用行为：读取cookie得到用户信息并将用户对象放入请求，从而方便后续流程使用，还有如提取Locale、Theme信息等，只要是多个处理器都需要的即可使用拦截器实现。")]),e._v(" "),v("p",[e._v("5、OpenSessionInView：如hibernate，在进入处理器打开Session，在完成后关闭Session。")]),e._v(" "),v("h2",{attrs:{id:"具体区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#具体区别"}},[e._v("#")]),e._v(" 具体区别")]),e._v(" "),v("p",[e._v("拦截器是aop的一种实现，底层通过动态代理完成。")]),e._v(" "),v("p",[e._v("区别：")]),e._v(" "),v("p",[e._v("（1）拦截器是基于java的反射机制的，而过滤器是基于函数回调。")]),e._v(" "),v("p",[e._v("（2）拦截器不依赖于servlet容器，而过滤器依赖于servlet容器。")]),e._v(" "),v("p",[e._v("（3）拦截器只能对action请求起作用，而过滤器则可以对几乎所有的请求起作用。")]),e._v(" "),v("p",[e._v("（4）拦截器可以访问action上下文、值栈里的对象，而过滤器不能。")]),e._v(" "),v("p",[e._v("（5）在action的生命周期中，拦截器可以多次被调用，而过滤器只能在容器初始化时被调用一次。")]),e._v(" "),v("p",[e._v("两者的本质区别：从灵活性上说拦截器功能更强大些，Filter能做的事情，他都能做，而且可以在请求前，请求后执行，比较灵活。Filter主要是针对URL地址做一个编码的事情、过滤掉没用的参数、安全校验（比较泛的，比如登录不登录之类），太细的话，还是建议用interceptor。不过还是根据不同情况选择合适的。")])])}),[],!1,null,null,null);t.default=_.exports}}]);