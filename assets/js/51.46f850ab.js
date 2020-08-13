(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{402:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"springboot之beanpostprocessor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot之beanpostprocessor"}},[t._v("#")]),t._v(" SpringBoot之BeanPostProcessor")]),t._v(" "),n("p",[t._v("我们可以通过实现BeanPostProcessor接口，对容器内所有或者部分指定Bean在构造的时候进行对其进行处理。它和@PostConstruct与@PreDestroy不同的是它针对的是IoC容器里所有的Bean。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('@Component\npublic class GlobalPostProcessor implements BeanPostProcessor {\n    @Override // 初始化之前的处理\n    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException { \n        System.out.println("----" + beanName + "----");\n        System.out.println("----" + beanName.getClass() + "----");\n        return bean;\n    }\n\n    @Override //初始化之后的处理\n    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        System.out.println("++++" + beanName + "++++");\n        System.out.println("++++" + beanName.getClass() + "++++");\n        return bean;\n    }\n}\n')])])]),n("p",[t._v("通过重载postProcessBeforeInitialization和postProcessAfterInitialization方法，所有的Bean在初始化之前会执行postProcessBeforeInitialization里的处理逻辑，在初始化之后会执行postProcessAfterInitialization里的处理逻辑。")]),t._v(" "),n("p",[t._v("如果我们要缩小Processor的处理范围可以通过判断Bean类型来实现：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("@Override\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postProcessAfterInitialization")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object bean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String beanName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws BeansException "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bean "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifeService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用instanceof减少处理范围")]),t._v("\n        System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"++++"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" beanName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"++++"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"++++"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" beanName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"++++"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);