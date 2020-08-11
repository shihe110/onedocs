(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{420:function(t,a,r){"use strict";r.r(a);var e=r(42),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"windows下载安装配置rabbitmq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows下载安装配置rabbitmq"}},[t._v("#")]),t._v(" Windows下载安装配置RabbitMQ")]),t._v(" "),r("h2",{attrs:{id:"step-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[t._v("#")]),t._v(" step 1")]),t._v(" "),r("p",[t._v("安装Erlang：RabbitMQ依赖Erlang环境，"),r("a",{attrs:{href:"https://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[t._v("设置环境变量ERLANG_HOME")]),t._v(" "),r("li",[t._v("配置path，%ERLANG_HOME%\\bin")]),t._v(" "),r("li",[t._v("验证cmd命令>erl\n成功：")])]),t._v(" "),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[t._v("Eshell V11.0 (abort with ^G)\n1>\n")])])]),r("h2",{attrs:{id:"step-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[t._v("#")]),t._v(" step 2")]),t._v(" "),r("p",[t._v("下载安装rabbitmq，官网经常打不开，可找一些国内镜像地址下载"),r("a",{attrs:{href:"https://www.newbe.pro/Mirrors/Mirrors-RabbitMQ/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.newbe.pro/Mirrors/Mirrors-RabbitMQ/"),r("OutboundLink")],1),t._v("\n这里使用：rabbitmq-server-windows-3.8.3.zip版本")]),t._v(" "),r("ul",[r("li",[t._v("解压")]),t._v(" "),r("li",[t._v("配置环境变量：RABBITMQ_SERVER")]),t._v(" "),r("li",[t._v("配置path：%RABBITMQ_SERVER%\\sbin")]),t._v(" "),r("li",[t._v("sbin目录下cmd命令：rabbitmqctl status")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/a2yUAKXzX0auWZU7rmmIkhAQ4QJK6L7YDKMic4K33aOB9ZicIlsWsJayticunWKoWoNR8TZnH9nichgks65qQNtayA/0?wx_fmt=png",alt:"rabbmitmq未启动需安装插件"}})]),t._v(" "),r("ul",[r("li",[t._v("安装插件，命令：rabbitmq-plugins.bat enable rabbitmq_management")]),t._v(" "),r("li",[t._v("输入命令：rabbitmq-server.bat")]),t._v(" "),r("li",[t._v("rabbitmq启动成功，浏览器中http://localhost:15672")])]),t._v(" "),r("blockquote",[r("p",[t._v("username:guest")]),t._v(" "),r("p",[t._v("password:guest")])]),t._v(" "),r("ul",[r("li",[t._v("打开cmd，再次输入命令验证：rabbitmqctl status")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/zhm3023/article/details/82217222",target:"_blank",rel:"noopener noreferrer"}},[t._v("转载地址"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"管理rabbitmq-management的用户"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#管理rabbitmq-management的用户"}},[t._v("#")]),t._v(" 管理rabbitmq_management的用户")]),t._v(" "),r("ul",[r("li",[t._v("查看rabbitmq_management注册用户")])]),t._v(" "),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[t._v("rabbitmqctl list_users\n")])])]),r("ul",[r("li",[t._v("创建用户命令")])]),t._v(" "),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[t._v("rabbitmqctl add_user [username] [password]\n")])])]),r("ul",[r("li",[t._v("使用命令给rabbit设置tag，设置tag的命令格式")])]),t._v(" "),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[t._v("rabbitmqctl set_user_tags [tag1] [tag2] ...\n")])])]),r("p",[t._v("例如：rabbitmqctl set_user_tags admin administrator none")]),t._v(" "),r("p",[t._v("有5个tag可供选择，分别是：administrator ，monitoring，policymaker，management和none 有兴趣的同学可以到这里了解各个tag的含义，其实这里的tag代表的是权限，administrator是最高权限，none表示不能访问，这里administrator和none的组合，权限应该是向高看齐，忽略none，用的是administrator的权限。我们用rabbit1/rabbit1 登录rabbitmq_management。")]),t._v(" "),r("ul",[r("li",[t._v("查看rabbitmq所有插件：rabbitmq-plugins list")])]),t._v(" "),r("p",[t._v("rabbitmq_management插件，这款插件是可以可视化的方式查看RabbitMQ 服务器实例的状态，以及操控RabbitMQ服务器。")]),t._v(" "),r("ul",[r("li",[t._v("安装rabbitmq_management插件\nrabbitmq-plugins enable rabbitmq_management")])])])}),[],!1,null,null,null);a.default=s.exports}}]);