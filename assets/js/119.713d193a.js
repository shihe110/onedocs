(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{465:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"springboot之注解相关注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot之注解相关注解"}},[a._v("#")]),a._v(" SpringBoot之注解相关注解")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("@Primary 优先选择bean")])]),a._v(" "),s("li",[s("p",[a._v("@Qualifire 预选的bean-同类型的多实现选择一个，如数据源，适配器类型的实现类")])]),a._v(" "),s("li",[s("p",[a._v("@Autowired 自动注入的bean")])]),a._v(" "),s("li",[s("p",[a._v("@Resource")])])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("默认是按照名称来装配注入的，只有当找不到与名称匹配的bean才会按照类型来注入。\n它有两个属性是比较重要的"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\nname"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Spring")]),a._v(" 将 name 的属性值解析为 bean 的名称， 使用 byName 的自动注入策略\ntype"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Spring")]),a._v(" 将 type的属性值解析为 bean 的类型，使用 byType 的自动注入策略\n注"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 如果既不指定 name 属性又不指定 type 属性，"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Spring")]),a._v("这时通过反射机制使用 byName 自动注入策略\n\n装配顺序\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" 如果同时指定了 name 属性和 type 属性，那么 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Spring")]),a._v(" 将从容器中找唯一匹配的 bean 进行装配，找不到则抛出异常\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" 如果指定了 name 属性值，则从容器中查找名称匹配的 bean 进行装配，找不到则抛出异常\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.")]),a._v(" 如果指定了 type 属性值，则从容器中查找类型匹配的唯一的 bean 进行装配，找不到或者找到多个都会抛出异常\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.")]),a._v(" 如果都不指定，则会自动按照 byName 方式进行装配， 如果没有匹配，则回退一个原始类型进行匹配，如果匹配则自动装配\n")])])]),s("ul",[s("li",[s("p",[a._v("@ConfigurationProperties和@PropertySource\n读取配置文件，有3种方式")]),a._v(" "),s("ul",[s("li",[a._v("1.根路径下")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Component")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@PropertySource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"configDemo.properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConfigDemo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("2.文件夹下 新建config文件夹")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Component")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@PropertySource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"classpath：config/configDemo.properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConfigDemo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("3.application.properties")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Component")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConfigDemo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);