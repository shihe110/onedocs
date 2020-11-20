(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{359:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"oracle自定义无参函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle自定义无参函数"}},[s._v("#")]),s._v(" Oracle自定义无参函数")]),s._v(" "),a("p",[s._v("create or replace function [function name]\nreturn [数据类型]\nis [参数名称] [参数数据类型]\nbegin\n[函数体]\nend [函数名];")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 无参函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" get_user \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" varchar2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" v_user varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhangsan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" get_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 测试")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" get_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 删除函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" get_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--没有参数的函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" get_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" varchar2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v("\n  v_user varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" v_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" v_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" get_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--测试")]),s._v("\n方法一\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" get_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"自定义有参函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义有参函数"}},[s._v("#")]),s._v(" 自定义有参函数")]),s._v(" "),a("p",[s._v("create or replace function 函数名(参数1 模式 参数类型)"),a("br"),s._v("\nreturn 返回值类型"),a("br"),s._v("\nas"),a("br"),s._v("\n变量1 变量类型;"),a("br"),s._v("\n变量2 变量类型;"),a("br"),s._v("\nbegin"),a("br"),s._v("\n函数体;"),a("br"),s._v("\nend 函数名;")])])}),[],!1,null,null,null);t.default=e.exports}}]);