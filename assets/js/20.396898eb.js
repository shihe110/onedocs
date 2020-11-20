(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{367:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"elasticsearch学习笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch学习笔记"}},[a._v("#")]),a._v(" ElasticSearch学习笔记")]),a._v(" "),s("h3",{attrs:{id:"elasticsearch是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch是什么"}},[a._v("#")]),a._v(" ElasticSearch是什么")]),a._v(" "),s("p",[a._v("ElasticSearch是一个基于Lucene，分布式，通过RestFul方式进行交互的近实时的搜索平台框架。")]),a._v(" "),s("h3",{attrs:{id:"es官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es官网"}},[a._v("#")]),a._v(" ES官网")]),a._v(" "),s("p",[a._v("ElasticSearch官网：https://www.elastic.co/cn/")]),a._v(" "),s("p",[a._v("说明：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("ES安装的JDK的最低要求是1.8")])]),a._v(" "),s("li",[s("p",[a._v("java开发中，ES的依赖版本必须和ES版本一致")])])]),a._v(" "),s("h3",{attrs:{id:"下载安装es"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装es"}},[a._v("#")]),a._v(" 下载安装es")]),a._v(" "),s("p",[a._v("下载地址：https://www.elastic.co/cn/downloads/elasticsearch")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917134700966.png",alt:"image-20200917134700966"}})]),a._v(" "),s("blockquote",[s("p",[a._v("解压即用")])]),a._v(" "),s("p",[a._v("解压目录")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917134843804.png",alt:"image-20200917134843804"}})]),a._v(" "),s("p",[a._v("配置文件说明")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917135003013.png",alt:"image-20200917135003013"}})]),a._v(" "),s("p",[a._v("jvm.options")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917135059451.png",alt:"image-20200917135059451"}})]),a._v(" "),s("p",[a._v("内存设置较大，注意机器配置避免无法启动")]),a._v(" "),s("p",[a._v("elasticsearch.yml配置文件，默认9200端口，注意跨域问题解决。")]),a._v(" "),s("h3",{attrs:{id:"启动es"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动es"}},[a._v("#")]),a._v(" 启动ES")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 进入安装目录\ncd C:\\Program Files\\elasticsearch-7.9.1  \n# 启动\nbin\\elasticsearch.bat\n")])])]),s("h3",{attrs:{id:"访问9200验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问9200验证"}},[a._v("#")]),a._v(" 访问9200验证")]),a._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("http:")]),a._v("//127.0.0.1:9200\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("# 出现以下结果表示安装启动成功\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ADMIN-PC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"cluster_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"elasticsearch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"cluster_uuid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x88DE9qeRPy2rcmXyMhiUw"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"7.9.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build_flavor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"default"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build_hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"083627f112ba94dffc1232e8b42b73492789ef91"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2020-09-01T21:22:21.964974Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build_snapshot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"lucene_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8.6.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"minimum_wire_compatibility_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"6.8.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"minimum_index_compatibility_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"6.0.0-beta1"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"tagline"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"You Know, for Search"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"安装head可视化插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装head可视化插件"}},[a._v("#")]),a._v(" 安装head可视化插件")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917140424339.png",alt:"image-20200917140424339"}})]),a._v(" "),s("p",[a._v("该项目是一个标准前端项目，前提是必须有node环境")]),a._v(" "),s("p",[a._v("1、下载地址：https://github.com/mobz/elasticsearch-head")]),a._v(" "),s("p",[a._v("2、解压安装依赖:nmp install  或下载慢可使用淘宝:cnpm install")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917140314943.png",alt:"image-20200917140314943"}})]),a._v(" "),s("p",[a._v("3、head目录下cmd启动：npm run start")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917140637261.png",alt:"image-20200917140637261"}})]),a._v(" "),s("p",[a._v("4、启动es、访问head")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917141319265.png",alt:"image-20200917141319265"}})]),a._v(" "),s("p",[a._v("5、解决跨域问题elasticsearch.yml增加配置")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http.cors.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开启跨域")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http.cors.allow-origin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 允许所有人访问")]),a._v("\n")])])]),s("p",[a._v("6、重启es再次连接")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917142119596.png",alt:"image-20200917142119596"}})]),a._v(" "),s("p",[a._v("es专有名词：索引（库）、文档（数据记录）")]),a._v(" "),s("h3",{attrs:{id:"elk概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elk概览"}},[a._v("#")]),a._v(" ELK概览")]),a._v(" "),s("p",[a._v("ElasticSearch、Logstash、Kibana")]),a._v(" "),s("p",[a._v("Logstash是中央数据流引擎，用于从不同的目标（文件、db、mq）收集不同格式的数据，经过过滤后支持输出到不同目的地（文件、mq、redis、es、kafka等）")]),a._v(" "),s("p",[a._v("即：logstash服务收集清洗数据=》elasticsearch负责搜索存储=》Kibana负责分析可视化")]),a._v(" "),s("h3",{attrs:{id:"下载kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载kibana"}},[a._v("#")]),a._v(" 下载Kibana")]),a._v(" "),s("p",[a._v("Kibana下载地址：https://www.elastic.co/cn/downloads/kibana")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917094325056.png",alt:"image-20200917094325056"}})]),a._v(" "),s("h3",{attrs:{id:"解压安装kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压安装kibana"}},[a._v("#")]),a._v(" 解压安装Kibana")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917143902716.png",alt:"image-20200917143902716"}})]),a._v(" "),s("h3",{attrs:{id:"启动测试验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动测试验证"}},[a._v("#")]),a._v(" 启动测试验证")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 进入目录\ncd C:\\Program Files\\kibana-7.9.1-windows\n# 启动\nbin\\kibana.bat\n")])])]),s("p",[a._v("访问地址：")]),a._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("http:")]),a._v("//127.0.0.1:5601\n")])])]),s("h3",{attrs:{id:"汉化配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#汉化配置"}},[a._v("#")]),a._v(" 汉化配置")]),a._v(" "),s("p",[a._v("打开Kibana配置文件：kibana.yml")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917155920893.png",alt:"image-20200917155920893"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917155658938.png",alt:"image-20200917155658938"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917155742847.png",alt:"image-20200917155742847"}})]),a._v(" "),s("h3",{attrs:{id:"es核心概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es核心概述"}},[a._v("#")]),a._v(" ES核心概述")]),a._v(" "),s("p",[a._v("1.索引")]),a._v(" "),s("p",[a._v("2.字段规则（mapping）")]),a._v(" "),s("p",[a._v("3.文档（document）")]),a._v(" "),s("p",[a._v("集群、节点、索引、类型、文档、分片、映射  专有名词")]),a._v(" "),s("blockquote",[s("p",[a._v("elasticsearch是面向文档。和关系型数据库对比")]),a._v(" "),s("p",[a._v("es都是json")])]),a._v(" "),s("p",[a._v("关系型数据库和ES对比")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[a._v("Relation DB")]),a._v(" "),s("th",{staticStyle:{"text-align":"center"}},[a._v("ElasticSearch")])])]),a._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("数据库（database）")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("索引（indices）")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("表（table）")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("类型（type)将被弃用")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("行（row）")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("文档（document）")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("字段（columns）")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("属性（fields）")])])])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("正向索引：例如数据文档 id")])]),a._v(" "),s("li",[s("p",[a._v("倒排索引：将文档提取关键词，并建立关键词和文档的矩阵。")])])]),a._v(" "),s("p",[s("strong",[a._v("正向索引")]),a._v("的结构如下：")]),a._v(" "),s("p",[a._v("​    “文档1”的ID > 单词1：出现次数，出现位置列表；单词2：出现次数，出现位置列表；")]),a._v(" "),s("p",[a._v("​    “文档2”的ID > 此文档出现的关键词列表。")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917173341208.png",alt:"image-20200917173341208"}})]),a._v(" "),s("p",[s("strong",[a._v("倒排索引")]),a._v("的结构如下：")]),a._v(" "),s("p",[a._v("​    “关键词1”：“文档1”的ID，“文档2”的ID")]),a._v(" "),s("p",[a._v("​    “关键词2”：带有此关键词的文档ID列表。")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917173349597.png",alt:"image-20200917173349597"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917173404422.png",alt:"image-20200917173404422"}})]),a._v(" "),s("h3",{attrs:{id:"ik分词器插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ik分词器插件"}},[a._v("#")]),a._v(" ik分词器插件")]),a._v(" "),s("p",[a._v("1、下载")]),a._v(" "),s("p",[a._v("下载地址：https://github.com/medcl/elasticsearch-analysis-ik/releases")]),a._v(" "),s("p",[a._v("2、解压到es安装目录下的plugins文件夹新建的ik文件夹下")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917142826815.png",alt:"image-20200917142826815"}})]),a._v(" "),s("p",[a._v("3、启动es观察启动界面，ik插件已加载")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917142943241.png",alt:"image-20200917142943241"}})]),a._v(" "),s("p",[a._v("4、查看ES的插件列表")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cadmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200917173908338.png",alt:"image-20200917173908338"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);