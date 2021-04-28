(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{469:function(a,n,t){"use strict";t.r(n);var s=t(42),r=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"springboot事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot事务"}},[a._v("#")]),a._v(" SpringBoot事务")]),a._v(" "),t("h2",{attrs:{id:"声明式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明式事务"}},[a._v("#")]),a._v(" 声明式事务")]),a._v(" "),t("p",[a._v("配置类声明开启事务管理器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@Configuration\n@EnableTransactionManagement\npulic void AppConfig{\n\n}\n")])])]),t("p",[a._v("使用事务注解@Transactional，来自org.springframework.transaction.annotation")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@Transactional\npublic void saveUser(Long id,String name){\n\t// 数据库操作\n}\n")])])]),t("p",[a._v("@Transactional还可以注解在类上，声明类中的所有public方法都开启事务")]),a._v(" "),t("h2",{attrs:{id:"springboot对事务的支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot对事务的支持"}},[a._v("#")]),a._v(" springboot对事务的支持")]),a._v(" "),t("ul",[t("li",[a._v("1.自动配置事务管理器-源码\n在使用jdbc访问数据库时，springboot定义了PlatformTransactionManager的实现DataSourceTransactionManager的bean。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@Bean\n@ConditionalOnMissingBean\n@ConditionalOnBean(DataSource.class)\npublic PlatformTransactionManager transactionManager(){\n\treturn new DataSourceTransactionManager(this.dataSource);\n}\n")])])]),t("p",[a._v("在使用jpa访问数据库时，springboot定义了PlatformTransactionManager的实现JpaTransactionManagerde bean")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@Bean\n@ConditionalOnMissingBean(PlatformTransactionManager.class)\npublic PlatformTransactionManager transactionManager(){\n\treturn new DataSourceTransactionManager(this.dataSource);\n}\n")])])]),t("ul",[t("li",[a._v("2.自动开启注解事务的支持")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@ConditionalOnMissingBean(AbstractTransactionManagementConfiguration.class)\n@Configuration\n@EnableTransactionManagement\nprotected static class TransactionManagementConfiguration{}\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);