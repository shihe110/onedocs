(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{468:function(a,t,n){"use strict";n.r(t);var r=n(42),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"springboot项目打包瘦身"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot项目打包瘦身"}},[a._v("#")]),a._v(" SpringBoot项目打包瘦身")]),a._v(" "),n("p",[a._v("原理：将项目代码和jar包依赖分开打包，部署时将jar包通过命令载入")]),a._v(" "),n("h2",{attrs:{id:"_1-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置"}},[a._v("#")]),a._v(" 1.配置")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <configuration>\n        <mainClass>com.warmer.kgmaker.KgmakerApplication</mainClass>\n        <layout>ZIP</layout>\n        <includes>\n           <include>\n              要打包的依赖\n           </include>\n        </includes>\n     </configuration>\n     <executions>\n        <execution>\n           <goals>\n               <goal>repackage</goal>\n           </goals>\n        </execution>\n     </executions>\n</plugin>\n")])])]),n("h2",{attrs:{id:"_2-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令"}},[a._v("#")]),a._v(" 2.命令")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("java -Dloader.path=./xxx/BOOT-INF/lib/ -jar xxx.jar\n")])])]),n("p",[a._v("注：第一个xxx是jar包的目录，第二个是代码的可执行jar")])])}),[],!1,null,null,null);t.default=e.exports}}]);