(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{362:function(e,t,n){"use strict";n.r(t);var a=n(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"spring配置文件加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring配置文件加载"}},[e._v("#")]),e._v(" Spring配置文件加载")]),e._v(" "),n("h2",{attrs:{id:"案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[e._v("#")]),e._v(" 案例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-beans</artifactId>\n            <version>5.2.6.RELEASE</version>\n        </dependency>\n")])])]),n("h2",{attrs:{id:"新建实体"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建实体"}},[e._v("#")]),e._v(" 新建实体")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class User {\n\n    private Integer id;\n    private String username;\n    private String password;\n...\n}\n")])])]),n("h2",{attrs:{id:"xml配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xml配置文件"}},[e._v("#")]),e._v(" xml配置文件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean class="com.shihe.bean.User" id="user">\n        <property name="id" value="123"></property>\n        <property name="username" value="zhangsan"/>\n        <property name="password" value="123"/>\n    </bean>\n\n</beans>\n')])])]),n("h2",{attrs:{id:"test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" test")]),e._v(" "),n("h2",{attrs:{id:"文件读取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件读取"}},[e._v("#")]),e._v(" 文件读取")]),e._v(" "),n("p",[e._v("文件读取在 Spring 中很常见，也算是一个比较基本的功能，而且 Spring 提供的文件加载方式，不仅仅在 Spring 框架中可以使用，我们在项目中有其他文件加载需求也可以使用。")]),e._v(" "),n("p",[e._v("首先，Spring 中使用 Resource 接口来封装底层资源，Resource 接口本身实现自 InputStreamSource 接口：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public interface InputStreamSource {\n InputStream getInputStream() throws IOException;\n}\npublic interface Resource extends InputStreamSource {\n boolean exists();\n default boolean isReadable() {\n  return exists();\n }\n default boolean isOpen() {\n  return false;\n }\n default boolean isFile() {\n  return false;\n }\n URL getURL() throws IOException;\n URI getURI() throws IOException;\n File getFile() throws IOException;\n default ReadableByteChannel readableChannel() throws IOException {\n  return Channels.newChannel(getInputStream());\n }\n long contentLength() throws IOException;\n long lastModified() throws IOException;\n Resource createRelative(String relativePath) throws IOException;\n @Nullable\n String getFilename();\n String getDescription();\n\n}\n")])])]),n("ul",[n("li",[e._v("InputStreamSource 类只提供了一个 getInputStream 方法，该方法返回一个 InputStream，也就是说，InputStreamSource 会将传入的 File 等资源，封装成一个 InputStream 再重新返回。")]),e._v(" "),n("li",[e._v("Resource 接口实现了 InputStreamSource 接口，并且封装了 Spring 内部可能会用到的底层资源，如 File、URL 以及 classpath 等。")]),e._v(" "),n("li",[e._v("exists 方法用来判断资源是否存在。")]),e._v(" "),n("li",[e._v("isReadable 方法用来判断资源是否可读。")]),e._v(" "),n("li",[e._v("isOpen 方法用来判断资源是否打开。")]),e._v(" "),n("li",[e._v("isFile 方法用来判断资源是否是一个文件。")]),e._v(" "),n("li",[e._v("getURL/getURI/getFile/readableChannel 分别表示获取资源对应的 URL/URI/File 以及将资源转为 ReadableByteChannel 通道。")]),e._v(" "),n("li",[e._v("contentLength 表示获取资源的大小。")]),e._v(" "),n("li",[e._v("lastModified 表示获取资源的最后修改时间。")]),e._v(" "),n("li",[e._v("createRelative 表示根据当前资源创建一个相对资源。")]),e._v(" "),n("li",[e._v("getFilename 表示获取文件名。")]),e._v(" "),n("li",[e._v("getDescription 表示在资源出错时，详细打印出出错的文件。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);