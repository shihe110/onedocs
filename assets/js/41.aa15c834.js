(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{393:function(a,e,n){"use strict";n.r(e);var t=n(42),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"maven入门总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven入门总结"}},[a._v("#")]),a._v(" Maven入门总结")]),a._v(" "),n("h2",{attrs:{id:"_1-maven介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven介绍"}},[a._v("#")]),a._v(" 1.maven介绍")]),a._v(" "),n("p",[a._v("1.1 maven旨在解决什么问题？\njava生态中各种jar包之间存在关联，在使用前要确认jar包的其他依赖包，所以依赖管理会很麻烦，这是maven要解决的一个问题。")]),a._v(" "),n("p",[a._v("多模块项目，每个模块无法独立运行，maven工具可以实现项目一键打包。")]),a._v(" "),n("p",[a._v("1.2 maven是什么\nMaven 是一个项目管理工具，它包含了一个项目对象模型（Project Object Model），反映在配置中，就是一个 pom.xml 文件。是一组标准集合，一个项目的生命周期、一个依赖管理系统，另外还包括定义在项目生命周期阶段的插件(plugin)以及目标(goal)。")]),a._v(" "),n("p",[a._v("当我们使用 Maven 的使用，通过一个自定义的项目对象模型，pom.xml 来详细描述我们自己的项目。")]),a._v(" "),n("p",[a._v("Maven 中的有两大核心：")]),a._v(" "),n("ul",[n("li",[a._v("依赖管理：对 jar 的统一管理(Maven 提供了一个 Maven 的中央仓库，https://mvnrepository.com/，当我们在项目中添加完依赖之后，Maven 会自动去中央仓库下载相关的依赖，并且解决依赖的依赖问题)")]),a._v(" "),n("li",[a._v("项目构建：对项目进行编译、测试、打包、部署、上传到私服等")])]),a._v(" "),n("h2",{attrs:{id:"_2-maven安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-maven安装"}},[a._v("#")]),a._v(" 2.maven安装")]),a._v(" "),n("p",[a._v("前提：安装jdk")]),a._v(" "),n("p",[a._v("1.下载maven  地址：http://maven.apache.org/download.cgi")]),a._v(" "),n("p",[a._v("2.解压配置")]),a._v(" "),n("p",[a._v("配置环境变量：")]),a._v(" "),n("p",[a._v("新建系统变量MAVEN_HOME  D:\\apache-maven-3.3.9")]),a._v(" "),n("p",[a._v("编辑环境变量")]),a._v(" "),n("p",[a._v("%MAVEN_HOME%\\bin")]),a._v(" "),n("p",[a._v("3.配置完毕检查安装情况")]),a._v(" "),n("p",[a._v("cmd：mvn -v")]),a._v(" "),n("p",[a._v("-- 安装成功则会打印出版本信息")]),a._v(" "),n("h2",{attrs:{id:"_3-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[a._v("#")]),a._v(" 3.配置")]),a._v(" "),n("p",[a._v("maven默认使用其中央仓库，下载速度较慢，可以配置国内镜像如：阿里云中央仓库")]),a._v(" "),n("p",[a._v("3.1 仓库类型")]),a._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[a._v("仓库类型\t说明\n本地仓库\t就是你自己电脑上的仓库，每个人电脑上都有一个仓库，默认位置在 当前用户名\\.m2\\repository\n私服仓库\t一般来说是公司内部搭建的 Maven 私服，处于局域网中，访问速度较快，这个仓库中存放的 jar 一般就是公司内部自己开发的 jar\n中央仓库\t有 Apache 团队来维护，包含了大部分的 jar，早期不包含 Oracle 数据库驱动，从 2019 年 8 月开始，包含了 Oracle 驱动\n")])])]),n("p",[a._v("jar 包查找顺序：")]),a._v(" "),n("p",[a._v("首先查找【本地仓库】-找不到-则优先去【私服仓库】-再去中央仓库（如果没有安装私服则直接取中央仓库）")]),a._v(" "),n("p",[a._v("3.2 配置本地仓库")]),a._v(" "),n("p",[a._v("本地仓库默认位置：用户.m2\\repository, 一般使用默认地址，也可自定义配置")]),a._v(" "),n("p",[a._v("在settings下配置：如  "),n("localRepository",[a._v("d:\\maven\\repositry")])],1),a._v(" "),n("p",[a._v("3.3 配置阿里镜像仓库")]),a._v(" "),n("p",[a._v("在settings中的"),n("mirrors",[a._v("下添加")])],1),a._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirror")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("nexus-aliyun"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirrorOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("central"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirrorOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Nexus aliyun"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("http://maven.aliyun.com/nexus/content/groups/public"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirror")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),n("h2",{attrs:{id:"maven常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven常用命令"}},[a._v("#")]),a._v(" maven常用命令")]),a._v(" "),n("p",[a._v("maven中常见命令，idea工具可以直接只用菜单，eclipse则需要手动输入命令。")]),a._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[a._v("mvn clean  清理  可以用来清理已经编译好的文件\nmvn compile 编译 将java代码编译成class文件\nmvn test  测试 项目测试\nmvn package 打包 根据配置，将项目打成jar包或war包\nmvn install 安装 手动向本地仓库安装一个jar \nmvn deploy 上传 将jar包上传到私服\n")])])]),n("p",[a._v("这里需要注意的是，这些命令都不是独立运行的，它有一个顺序。举个简单例子：")]),a._v(" "),n("p",[a._v("我想将 jar 上传到私服，那么就要构建 jar，就需要执行 package 命令，要打包，当然也需要测试，那就要走 mvn test 命令，要测试就要先编译…..，因此，最终所有的命令都会执行一遍。不过，开发者也可以手动配置不执行某一个命令，这就是跳过。一般来是，除了测试，其他步骤都不建议跳过。")]),a._v(" "),n("p",[a._v("4.1 使用命令构建项目")]),a._v(" "),n("p",[a._v("mvn archetype:generate -DgroupId=com.shihe -DartifactId=myapp -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false")]),a._v(" "),n("p",[a._v("4.2 对项目进行打包")]),a._v(" "),n("p",[a._v("打包时命令行要定位到pom文件所在目录")]),a._v(" "),n("p",[a._v("4.3 将项目安装到本地仓库")]),a._v(" "),n("p",[a._v("mvn install")]),a._v(" "),n("h2",{attrs:{id:"maven依赖管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven依赖管理"}},[a._v("#")]),a._v(" maven依赖管理")]),a._v(" "),n("p",[a._v("Maven解决了依赖管理问题。")]),a._v(" "),n("p",[a._v("例如，我们的项目依赖abc这个jar包，而abc又依赖xyz这个jar包：")]),a._v(" "),n("p",[a._v("当我们声明了abc的依赖时，Maven自动把abc和xyz都加入了我们的项目依赖，不需要我们自己去研究abc是否需要依赖xyz。")]),a._v(" "),n("h3",{attrs:{id:"依赖关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系"}},[a._v("#")]),a._v(" 依赖关系")]),a._v(" "),n("p",[a._v("Maven定义了几种依赖关系，分别是compile、test、runtime和provided：")]),a._v(" "),n("table",[n("thead",[n("tr",[n("th",[a._v("范围")]),a._v(" "),n("th",{staticStyle:{"text-align":"center"}},[a._v("说明")]),a._v(" "),n("th",{staticStyle:{"text-align":"right"}},[a._v("示例")])])]),a._v(" "),n("tbody",[n("tr",[n("td",[a._v("compile")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("编译时要用到（默认）")]),a._v(" "),n("td",{staticStyle:{"text-align":"right"}},[a._v("commons-logging")])]),a._v(" "),n("tr",[n("td",[a._v("test")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("测试时")]),a._v(" "),n("td",{staticStyle:{"text-align":"right"}},[a._v("Junit")])]),a._v(" "),n("tr",[n("td",[a._v("runtime")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("编译时不需要，但运行时需要")]),a._v(" "),n("td",{staticStyle:{"text-align":"right"}},[a._v("mysql")])]),a._v(" "),n("tr",[n("td",[a._v("provided")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("编译时要用，但运行时由jdk或某个服务器提供")]),a._v(" "),n("td",{staticStyle:{"text-align":"right"}},[a._v("servlet-api")])])])]),a._v(" "),n("p",[a._v("最后一个问题是，Maven如何知道从何处下载所需的相关的jar包？")]),a._v(" "),n("p",[a._v("答案是Maven维护了一个中央仓库（repo1.maven.org），所有第三方库将自身的jar以及相关信息上传至中央仓库，Maven就可以从中央仓库把所需依赖下载到本地。")]),a._v(" "),n("p",[a._v("Maven并不会每次都从中央仓库下载jar包。一个jar包一旦被下载过，就会被Maven自动缓存在本地目录（用户主目录的.m2目录），所以，除了第一次编译时因为下载需要时间会比较慢，后续过程因为有本地缓存，并不会重复下载相同的jar包。")]),a._v(" "),n("h3",{attrs:{id:"唯一id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#唯一id"}},[a._v("#")]),a._v(" 唯一ID")]),a._v(" "),n("p",[a._v("对于某个依赖，Maven只需要3个变量即可唯一确定某个jar包：")]),a._v(" "),n("ul",[n("li",[a._v("groupId：属于组织的名称，类似Java的包名；")]),a._v(" "),n("li",[a._v("artifactId：该jar包自身的名称，类似Java的类名；")]),a._v(" "),n("li",[a._v("version：该jar包的版本。")])]),a._v(" "),n("p",[a._v("通过上述3个变量，即可唯一确定某个jar包。")]),a._v(" "),n("p",[a._v("Maven通过对jar包进行PGP签名确保任何一个jar包一经发布就无法修改。修改已发布jar包的唯一方法是发布一个新版本。")]),a._v(" "),n("p",[a._v("因此，某个jar包一旦被Maven下载过，即可永久地安全缓存在本地。")]),a._v(" "),n("p",[a._v("注：只有以-SNAPSHOT结尾的版本号会被Maven视为开发版本，开发版本每次都会重复下载，这种SNAPSHOT版本只能用于内部私有的Maven repo，公开发布的版本不允许出现SNAPSHOT。")]),a._v(" "),n("p",[a._v("对于第三方组件jar，我们可以去maven中央仓库搜索关键字，获取器唯一id，并引入该依赖。")]),a._v(" "),n("h3",{attrs:{id:"命令行编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令行编译"}},[a._v("#")]),a._v(" 命令行编译")]),a._v(" "),n("p",[a._v("在pom.xml文件目录下，使用命令")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mvn clean  package\n")])])]),n("h2",{attrs:{id:"构建流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建流程"}},[a._v("#")]),a._v(" 构建流程")]),a._v(" "),n("p",[a._v("mavan定义了一个标准化的项目结构，同时也定义了一套标准化的构建流程，可以自动化实现编译，打包，发布，等等。")]),a._v(" "),n("h3",{attrs:{id:"lifecycle、phase、goal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle、phase、goal"}},[a._v("#")]),a._v(" lifecycle、phase、goal")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("lifecycle相当于Java的package，它包含一个或多个phase；")])]),a._v(" "),n("li",[n("p",[a._v("phase相当于Java的class，它包含一个或多个goal；")])]),a._v(" "),n("li",[n("p",[a._v("goal相当于class的method，它其实才是真正干活的。")])])]),a._v(" "),n("p",[a._v("大多数情况，我们只要指定phase，就默认执行这些phase默认绑定的goal，只有少数情况，我们可以直接指定运行一个goal，例如，启动Tomcat服务器：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mvn tomcat:run\n")])])]),n("p",[a._v("Maven通过lifecycle、phase和goal来提供标准的构建流程。")]),a._v(" "),n("p",[a._v("最常用的构建命令是指定phase，然后让Maven执行到指定的phase：")]),a._v(" "),n("ul",[n("li",[a._v("mvn clean")]),a._v(" "),n("li",[a._v("mvn clean compile")]),a._v(" "),n("li",[a._v("mvn clean test")]),a._v(" "),n("li",[a._v("mvn clean package")])]),a._v(" "),n("p",[a._v("通常情况，我们总是执行phase默认绑定的goal，因此不必指定goal。")]),a._v(" "),n("h2",{attrs:{id:"插件使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件使用"}},[a._v("#")]),a._v(" 插件使用")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mvn compile\n")])])]),n("p",[a._v("Maven将执行compile这个phase，这个phase会调用compiler插件执行关联的compiler:compile这个goal。")]),a._v(" "),n("p",[a._v("实际上，执行每个phase，都是通过某个插件（plugin）来执行的，Maven本身其实并不知道如何执行compile，它只是负责找到对应的compiler插件，然后执行默认的compiler:compile这个goal来完成编译。")]),a._v(" "),n("p",[a._v("所以，使用Maven，实际上就是配置好需要使用的插件，然后通过phase调用它们。")]),a._v(" "),n("table",[n("thead",[n("tr",[n("th",[a._v("插件名称")]),a._v(" "),n("th",{staticStyle:{"text-align":"center"}},[a._v("对应执行phase")])])]),a._v(" "),n("tbody",[n("tr",[n("td",[a._v("clean")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("clean")])]),a._v(" "),n("tr",[n("td",[a._v("compiler")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("compile")])]),a._v(" "),n("tr",[n("td",[a._v("surefire")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("test")])]),a._v(" "),n("tr",[n("td",[a._v("jar")]),a._v(" "),n("td",{staticStyle:{"text-align":"center"}},[a._v("package")])])])]),a._v(" "),n("p",[a._v("如果标准插件无法满足需求，我们还可以使用自定义插件。使用自定义插件的时候，需要声明。例如，使用maven-shade-plugin可以创建一个可执行的jar，要使用这个插件，需要在pom.xml中声明它：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("<project>\n    ...\n\t<build>\n\t\t<plugins>\n\t\t\t<plugin>\n\t\t\t\t<groupId>org.apache.maven.plugins</groupId>\n\t\t\t\t<artifactId>maven-shade-plugin</artifactId>\n                <version>3.2.1</version>\n\t\t\t\t<executions>\n\t\t\t\t\t<execution>\n\t\t\t\t\t\t<phase>package</phase>\n\t\t\t\t\t\t<goals>\n\t\t\t\t\t\t\t<goal>shade</goal>\n\t\t\t\t\t\t</goals>\n\t\t\t\t\t\t<configuration>\n                            ...\n\t\t\t\t\t\t</configuration>\n\t\t\t\t\t</execution>\n\t\t\t\t</executions>\n\t\t\t</plugin>\n\t\t</plugins>\n\t</build>\n</project>\n")])])]),n("p",[a._v("自定义插件往往需要一些配置，例如，maven-shade-plugin需要指定Java程序的入口，它的配置是：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<configuration>\n    <transformers>\n        <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">\n            <mainClass>com.itranswarp.learnjava.Main</mainClass>\n        </transformer>\n    </transformers>\n</configuration>\n')])])]),n("p",[a._v("Maven自带的标准插件例如compiler是无需声明的，只有引入其它的插件才需要声明。")]),a._v(" "),n("p",[a._v("下面列举了一些常用的插件：")]),a._v(" "),n("ul",[n("li",[a._v("maven-shade-plugin：打包所有依赖包并生成可执行jar；")]),a._v(" "),n("li",[a._v("cobertura-maven-plugin：生成单元测试覆盖率报告；")]),a._v(" "),n("li",[a._v("findbugs-maven-plugin：对Java源码进行静态分析以找出潜在问题。")])]),a._v(" "),n("h2",{attrs:{id:"多模块管理聚合工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多模块管理聚合工程"}},[a._v("#")]),a._v(" 多模块管理聚合工程")]),a._v(" "),n("p",[a._v("Maven可以有效地管理多个模块，我们只需要把每个模块当作一个独立的Maven项目，它们有各自独立的pom.xml。例如，模块A的pom.xml：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.itranswarp.learnjava</groupId>\n    <artifactId>module-a</artifactId>\n    <version>1.0</version>\n    <packaging>jar</packaging>\n\n    <name>module-a</name>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n        <maven.compiler.source>11</maven.compiler.source>\n        <maven.compiler.target>11</maven.compiler.target>\n        <java.version>11</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>1.7.28</version>\n        </dependency>\n        <dependency>\n            <groupId>ch.qos.logback</groupId>\n            <artifactId>logback-classic</artifactId>\n            <version>1.2.3</version>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-engine</artifactId>\n            <version>5.5.2</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n')])])]),n("p",[a._v("模块B的pom.xml")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.itranswarp.learnjava</groupId>\n    <artifactId>module-b</artifactId>\n    <version>1.0</version>\n    <packaging>jar</packaging>\n\n    <name>module-b</name>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n        <maven.compiler.source>11</maven.compiler.source>\n        <maven.compiler.target>11</maven.compiler.target>\n        <java.version>11</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>1.7.28</version>\n        </dependency>\n        <dependency>\n            <groupId>ch.qos.logback</groupId>\n            <artifactId>logback-classic</artifactId>\n            <version>1.2.3</version>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-engine</artifactId>\n            <version>5.5.2</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n')])])]),n("p",[a._v("可以看出来，模块A和模块B的pom.xml高度相似，因此，我们可以提取出共同部分作为parent：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.itranswarp.learnjava</groupId>\n    <artifactId>parent</artifactId>\n    <version>1.0</version>\n    <packaging>pom</packaging>\n\n    <name>parent</name>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n        <maven.compiler.source>11</maven.compiler.source>\n        <maven.compiler.target>11</maven.compiler.target>\n        <java.version>11</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>1.7.28</version>\n        </dependency>\n        <dependency>\n            <groupId>ch.qos.logback</groupId>\n            <artifactId>logback-classic</artifactId>\n            <version>1.2.3</version>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-engine</artifactId>\n            <version>5.5.2</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n')])])]),n("p",[a._v("注意到parent的"),n("packaging",[a._v("是pom而不是jar，因为parent本身不含任何Java代码。编写parent的pom.xml只是为了在各个模块中减少重复的配置。现在我们的整个工程结构如下：")])],1),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("multiple-project\n├── pom.xml\n├── parent\n│   └── pom.xml\n├── module-a\n│   ├── pom.xml\n│   └── src\n├── module-b\n│   ├── pom.xml\n│   └── src\n└── module-c\n    ├── pom.xml\n    └── src\n")])])]),n("p",[a._v("这样模块A就可以简化为：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>com.itranswarp.learnjava</groupId>\n        <artifactId>parent</artifactId>\n        <version>1.0</version>\n        <relativePath>../parent/pom.xml</relativePath>\n    </parent>\n\n    <artifactId>module-a</artifactId>\n    <packaging>jar</packaging>\n    <name>module-a</name>\n</project>\n')])])]),n("p",[a._v("模块B、模块C都可以直接从parent继承，大幅简化了pom.xml的编写。")]),a._v(" "),n("p",[a._v("如果模块A依赖模块B，则模块A需要模块B的jar包才能正常编译，我们需要在模块A中引入模块B：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  ...\n    <dependencies>\n        <dependency>\n            <groupId>com.itranswarp.learnjava</groupId>\n            <artifactId>module-b</artifactId>\n            <version>1.0</version>\n        </dependency>\n    </dependencies>\n\n")])])]),n("p",[a._v("最后，在编译的时候，需要在根目录创建一个pom.xml统一编译：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">\n\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.itranswarp.learnjava</groupId>\n    <artifactId>build</artifactId>\n    <version>1.0</version>\n    <packaging>pom</packaging>\n    <name>build</name>\n\n    <modules>\n        <module>parent</module>\n        <module>module-a</module>\n        <module>module-b</module>\n        <module>module-c</module>\n    </modules>\n</project>\n')])])]),n("p",[a._v("这样，在根目录执行mvn clean package时，Maven根据根目录的pom.xml找到包括parent在内的共4个"),n("module",[a._v("，一次性全部编译。")])],1),a._v(" "),n("h3",{attrs:{id:"中央仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中央仓库"}},[a._v("#")]),a._v(" 中央仓库")]),a._v(" "),n("p",[a._v("其实我们使用的大多数第三方模块都是这个用法，例如，我们使用commons logging、log4j这些第三方模块，就是第三方模块的开发者自己把编译好的jar包发布到Maven的中央仓库中。")]),a._v(" "),n("h3",{attrs:{id:"私有仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#私有仓库"}},[a._v("#")]),a._v(" 私有仓库")]),a._v(" "),n("p",[a._v("私有仓库是指公司内部如果不希望把源码和jar包放到公网上，那么可以搭建私有仓库。私有仓库总是在公司内部使用，它只需要在本地的~/.m2/settings.xml中配置好，使用方式和中央仓位没有任何区别。")]),a._v(" "),n("h3",{attrs:{id:"本地仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库"}},[a._v("#")]),a._v(" 本地仓库")]),a._v(" "),n("p",[a._v("本地仓库是指把本地开发的项目“发布”在本地，这样其他项目可以通过本地仓库引用它。但是我们不推荐把自己的模块安装到Maven的本地仓库，因为每次修改某个模块的源码，都需要重新安装，非常容易出现版本不一致的情况。更好的方法是使用模块化编译，在编译的时候，告诉Maven几个模块之间存在依赖关系，需要一块编译，Maven就会自动按依赖顺序编译这些模块。")]),a._v(" "),n("h2",{attrs:{id:"maven-wrapper"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven-wrapper"}},[a._v("#")]),a._v(" Maven Wrapper")]),a._v(" "),n("p",[a._v("简单地说，Maven Wrapper就是给一个项目提供一个独立的，指定版本的Maven给它使用。")]),a._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),n("p",[a._v("安装Maven Wrapper最简单的方式是在项目的根目录（即pom.xml所在的目录）下运行安装命令：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mvn -N io.takari:maven:0.7.6:wrapper\n")])])]),n("p",[n("a",{attrs:{href:"https://github.com/takari/maven-wrapper",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("它会自动使用最新版本的Maven。注意0.7.6是Maven Wrapper的版本。最新的Maven Wrapper版本可以去官方网站查看。")]),a._v(" "),n("p",[a._v("如果要指定使用的Maven版本，使用下面的安装命令指定版本，例如3.3.3：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mvn -N io.takari:maven:0.7.6:wrapper -Dmaven=3.3.3\n")])])]),n("p",[a._v("安装后，查看项目结构：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("my-project\n├── .mvn\n│   └── wrapper\n│       ├── MavenWrapperDownloader.java\n│       ├── maven-wrapper.jar\n│       └── maven-wrapper.properties\n├── mvnw\n├── mvnw.cmd\n├── pom.xml\n└── src\n    ├── main\n    │   ├── java\n    │   └── resources\n    └── test\n        ├── java\n        └── resources\n")])])]),n("p",[a._v("发现多了mvnw、mvnw.cmd和.mvn目录，我们只需要把mvn命令改成mvnw就可以使用跟项目关联的Maven。例如：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("mvnw clean package\n")])])]),n("p",[a._v("在Linux或macOS下运行时需要加上./：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("./mvnw clean package\n")])])]),n("p",[a._v("Maven Wrapper的另一个作用是把项目的mvnw、mvnw.cmd和.mvn提交到版本库中，可以使所有开发人员使用统一的Maven版本。")]),a._v(" "),n("h2",{attrs:{id:"发布artifact到maven的repo中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布artifact到maven的repo中"}},[a._v("#")]),a._v(" 发布Artifact到Maven的repo中")]),a._v(" "),n("h3",{attrs:{id:"法1、以静态文件发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#法1、以静态文件发布"}},[a._v("#")]),a._v(" 法1、以静态文件发布")]),a._v(" "),n("p",[a._v("如果我们观察一个中央仓库的Artifact结构，例如Commons Math，它的groupId是org.apache.commons，artifactId是commons-math3，以版本3.6.1为例，发布在中央仓库的文件夹路径就是https://repo1.maven.org/maven2/org/apache/commons/commons-math3/3.6.1/，在此文件夹下，commons-math3-3.6.1.jar就是发布的jar包，commons-math3-3.6.1.pom就是它的pom.xml描述文件，commons-math3-3.6.1-sources.jar是源代码，commons-math3-3.6.1-javadoc.jar是文档。其它以.asc、.md5、.sha1结尾的文件分别是GPG签名、MD5摘要和SHA-1摘要。")]),a._v(" "),n("p",[a._v("我们只要按照这种目录结构组织文件，它就是一个有效的Maven仓库。")]),a._v(" "),n("p",[a._v("我们以广受好评的开源项目how-to-become-rich为例，先创建Maven工程目录结构如下：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("how-to-become-rich\n├── maven-repo        <-- Maven本地文件仓库\n├── pom.xml           <-- 项目文件\n├── src\n│   ├── main\n│   │   ├── java      <-- 源码目录\n│   │   └── resources <-- 资源目录\n│   └── test\n│       ├── java      <-- 测试源码目录\n│       └── resources <-- 测试资源目录\n└── target            <-- 编译输出目录\n")])])]),n("h3",{attrs:{id:"通过nexus发布到中央仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过nexus发布到中央仓库"}},[a._v("#")]),a._v(" 通过Nexus发布到中央仓库")]),a._v(" "),n("p",[a._v("有的童鞋会问，能不能把自己的开源库发布到Maven的中央仓库，这样用户就不需要声明repo地址，可以直接引用，显得更专业。")]),a._v(" "),n("p",[a._v("当然可以，但我们不能直接发布到Maven中央仓库，而是通过曲线救国的方式，发布到central.sonatype.org，它会定期自动同步到Maven的中央仓库。Nexus是一个支持Maven仓库的软件，由Sonatype开发，有免费版和专业版两个版本，很多大公司内部都使用Nexus作为自己的私有Maven仓库，而这个central.sonatype.org相当于面向开源的一个Nexus公共服务。")]),a._v(" "),n("p",[a._v("所以，第一步是在central.sonatype.org上注册一个账号，注册链接非常隐蔽，可以自己先找找，找半小时没找到点这里查看攻略。")]),a._v(" "),n("p",[a._v("如果注册顺利并审核通过，会得到一个登录账号，然后，通过这个页面一步一步操作就可以成功地将自己的Artifact发布到Nexus上，再耐心等待几个小时后，你的Artifact就会出现在Maven的中央仓库中。")]),a._v(" "),n("p",[a._v("这里简单提一下发布重点与难点：")]),a._v(" "),n("p",[a._v("必须正确创建GPG签名，Linux和Mac下推荐使用gnupg2；\n必须在~/.m2/settings.xml中配置好登录用户名和口令，以及GPG口令：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("<settings ...>\n    ...\n    <servers>\n        <server>\n            <id>ossrh</id>\n            <username>OSSRH-USERNAME</username>\n            <password>OSSRH-PASSWORD</password>\n        </server>\n    </servers>\n    <profiles>\n        <profile>\n            <id>ossrh</id>\n            <activation>\n                <activeByDefault>true</activeByDefault>\n            </activation>\n            <properties>\n                <gpg.executable>gpg2</gpg.executable>\n                <gpg.passphrase>GPG-PASSWORD</gpg.passphrase>\n            </properties>\n        </profile>\n    </profiles>\n</settings>\n")])])]),n("p",[a._v("在待发布的Artifact的pom.xml中添加OSS的Maven repo地址，以及maven-jar-plugin、maven-source-plugin、maven-javadoc-plugin、maven-gpg-plugin、nexus-staging-maven-plugin：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("<project ...>\n    ...\n    <distributionManagement>\n        <snapshotRepository>\n            <id>ossrh</id>\n            <url>https://oss.sonatype.org/content/repositories/snapshots</url>\n        </snapshotRepository>\n\n        <repository>\n            <id>ossrh</id>\n            <name>Nexus Release Repository</name>\n            <url>http://oss.sonatype.org/service/local/staging/deploy/maven2/</url>\n        </repository>\n    </distributionManagement>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-jar-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>jar</goal>\n                            <goal>test-jar</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-source-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>attach-sources</id>\n                        <goals>\n                            <goal>jar-no-fork</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-javadoc-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>attach-javadocs</id>\n                        <goals>\n                            <goal>jar</goal>\n                        </goals>\n                        <configuration>\n                            <additionalOption>\n                                <additionalOption>-Xdoclint:none</additionalOption>\n                            </additionalOption>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-gpg-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>sign-artifacts</id>\n                        <phase>verify</phase>\n                        <goals>\n                            <goal>sign</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.sonatype.plugins</groupId>\n                <artifactId>nexus-staging-maven-plugin</artifactId>\n                <version>1.6.3</version>\n                <extensions>true</extensions>\n                <configuration>\n                    <serverId>ossrh</serverId>\n                    <nexusUrl>https://oss.sonatype.org/</nexusUrl>\n                    <autoReleaseAfterClose>true</autoReleaseAfterClose>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n\n")])])]),n("p",[a._v("最后执行命令mvn clean package deploy即可发布至central.sonatype.org。")]),a._v(" "),n("p",[a._v("此方法前期需要复杂的申请账号和项目的流程，后期需要安装调试GPG，但只要跑通流程，后续发布都只需要一行命令。")]),a._v(" "),n("h3",{attrs:{id:"发布到私有仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布到私有仓库"}},[a._v("#")]),a._v(" 发布到私有仓库")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\n通过nexus-staging-maven-plugin除了可以发布到central.sonatype.org外，也可以发布到私有仓库，例如，公司内部自己搭建的Nexus服务器。\n\n如果没有私有Nexus服务器，还可以发布到GitHub Packages。GitHub Packages是GitHub提供的仓库服务，支持Maven、NPM、Docker等。使用GitHub Packages时，无论是发布Artifact，还是引用已发布的Artifact，都需要明确的授权Token，因此，GitHub Packages只能作为私有仓库使用。\n\n在发布前，我们必须首先登录后在用户的Settings-Developer settings-Personal access tokens中创建两个Token，一个用于发布，一个用于使用。发布Artifact的Token必须有repo、write:packages和read:packages权限：\n\ntoken-scopes\n\n使用Artifact的Token只需要read:packages权限。\n\n在发布端，把GitHub的用户名和发布Token写入~/.m2/settings.xml配置中：\n\n<settings ...>\n    ...\n    <servers>\n        <server>\n            <id>github-release</id>\n            <username>GITHUB-USERNAME</username>\n            <password>f052...c21f</password>\n        </server>\n    </servers>\n</settings>\n然后，在需要发布的Artifact的pom.xml中，添加一个<repository>声明：\n\n<project ...>\n    ...\n    <distributionManagement>\n        <repository>\n            <id>github-release</id>\n            <name>GitHub Release</name>\n            <url>https://maven.pkg.github.com/michaelliao/complex</url>\n        </repository>\n    </distributionManagement>\n</project>\n注意到<id>和~/.m2/settings.xml配置中的<id>要保持一致，因为发布时Maven根据id找到用于登录的用户名和Token，才能成功上传文件到GitHub。我们直接通过命令mvn clean package deploy部署，成功后，在GitHub用户页面可以看到该Artifact：\n\ngithub-packages\n\n完整的配置请参考complex项目，这是一个非常简单的支持复数运算的库。\n\n使用该Artifact时，因为GitHub的Package只能作为私有仓库使用，所以除了在使用方的pom.xml中声明<repository>外：\n\n<project ...>\n    ...\n    <repositories>\n        <repository>\n            <id>github-release</id>\n            <name>GitHub Release</name>\n            <url>https://maven.pkg.github.com/michaelliao/complex</url>\n        </repository>\n    </repositories>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.itranswarp</groupId>\n            <artifactId>complex</artifactId>\n            <version>1.0.0</version>\n        </dependency>\n    </dependencies>\n    ...\n</project>\n还需要把有读权限的Token配置到~/.m2/settings.xml文件中。\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);