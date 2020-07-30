(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{355:function(t,n,a){"use strict";a.r(n);var e=a(42),r=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"静态代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态代理"}},[t._v("#")]),t._v(" 静态代理")]),t._v(" "),a("p",[t._v("小米自营和代理商销售的例子\n小米工厂自营（）\n代理商销售（）")]),t._v(" "),a("p",[t._v("抽象一个销售接口\n代理商持有一个销售接口的引用，去调用小米工厂销售方法，同时可以增加售前广告动作和售后服务动作。")]),t._v(" "),a("p",[t._v("静态代理的问题在于，可扩展性不行，如果新业务为卖电脑就要创建新的电脑代理类取完成卖电脑。\n进而需要做动态代理：")]),t._v(" "),a("h2",{attrs:{id:"动态代理-cglib和jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态代理-cglib和jdk"}},[t._v("#")]),t._v(" 动态代理 cglib和jdk")]),t._v(" "),a("h2",{attrs:{id:"jdk动态代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk动态代理"}},[t._v("#")]),t._v(" jdk动态代理")]),t._v(" "),a("p",[t._v("实现步骤：")]),t._v(" "),a("ul",[a("li",[t._v("1.代理类需要实现InvocationHandler接口")]),t._v(" "),a("li",[t._v("2.实现invoke方法")]),t._v(" "),a("li",[t._v("3.通过Proxy类的newProxyInstance方法来创建代理对象。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('1.定义接口\n\npublic interface MyCalculator {\n    int add(int a, int b);\n}\n2.定义计算机接口的实现：\n\npublic class MyCalculatorImpl implements MyCalculator {\n    public int add(int a, int b) {\n        return a+b;\n    }\n}\n3.定义代理类\n\npublic class CalculatorProxy {\n    public static Object getInstance(final MyCalculatorImpl myCalculator) {\n        return Proxy.newProxyInstance(CalculatorProxy.class.getClassLoader(), myCalculator.getClass().getInterfaces(), new InvocationHandler() {\n            /**\n             * @param proxy 代理对象\n             * @param method 代理的方法\n             * @param args 方法的参数\n             * @return\n             * @throws Throwable\n             */\n            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n                System.out.println(method.getName()+"方法开始执行啦...");\n                Object invoke = method.invoke(myCalculator, args);\n                System.out.println(method.getName()+"方法执行结束啦...");\n                return invoke;\n            }\n        });\n    }\n}\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);