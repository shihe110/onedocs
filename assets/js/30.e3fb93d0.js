(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(a,t,s){"use strict";s.r(t);var n=s(42),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"springboot使用docker部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot使用docker部署"}},[a._v("#")]),a._v(" springboot使用docker部署")]),a._v(" "),s("h2",{attrs:{id:"编译自己的docker镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译自己的docker镜像"}},[a._v("#")]),a._v(" 编译自己的docker镜像")]),a._v(" "),s("p",[a._v("代码十分简单")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RestController")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ShiheSpringbootDockerApplication")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ShiheSpringbootDockerApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/docker"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("helloDocker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello Docker !!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"新建目录docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建目录docker"}},[a._v("#")]),a._v(" 新建目录Docker")]),a._v(" "),s("p",[a._v("新建目录名称任意，将编译好的jar包拖入该目录下。\n在同级目录下新建一个Dockerfile文件,内容如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("FROM java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n\nMAINTAINER shihe\n\nADD shihe"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("springboot"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("SNAPSHOT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar\n\nEXPOSE "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n\nENTRYPOINT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-jar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"app.jar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"编译镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译镜像"}},[a._v("#")]),a._v(" 编译镜像")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("docker build "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t shihe"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("hellodocker\n")])])]),s("p",[a._v("shihe/hellodocker为镜像名称，shihe作为前缀，docker镜像的一种命名习惯。\n最后的“.”,用来指明Dockerfile路径的，表示Dockerfile在当前路径下。")]),a._v(" "),s("h3",{attrs:{id:"运行访"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行访"}},[a._v("#")]),a._v(" 运行访")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("docker run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("name shihe "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(" shihe"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("hellodocker \n")])])]),s("h3",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("docker\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);