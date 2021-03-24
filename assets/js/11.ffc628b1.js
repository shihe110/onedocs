(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{355:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"oracle实现列转行函数-两种自定义实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle实现列转行函数-两种自定义实现"}},[t._v("#")]),t._v(" Oracle实现列转行函数-两种自定义实现")]),t._v(" "),a("p",[t._v("在 Oracle 领域，我相信一说到列转行大部分人都会立马想到 WM_CONCAT 函数，我觉得主要是因为该函数比较实用。但事实上 WM_CONCAT 并非官方公开函数，使用会存在一定的风险；函数返回值的格式比较单一（只能用逗号分割）；返回值的长度也限制。本文接下来会介绍两个自定义函数分别来实现列转行的聚合效果。")]),t._v(" "),a("h2",{attrs:{id:"版本一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本一"}},[t._v("#")]),t._v(" 版本一")]),t._v(" "),a("ul",[a("li",[t._v("第 1 步（创建类型 type_table_string，用于转换 COLLECT 函数的返回值）：")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" type_table_string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("第 2 步（创建函数 fn_to_string，用于将 type_table_string 类型转换成普通字符串）：")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" fn_to_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  p_str_tab "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" type_table_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  p_separator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" VARCHAR2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" VARCHAR2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v("\n  v_ret_str VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p_str_tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COUNT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n    v_ret_str:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v_ret_str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("p_separator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("p_str_tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" LTRIM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v_ret_str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p_separator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("调用方法：")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn_to_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COLLECT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staff_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" type_table_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'|'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" staff_names\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t_staff t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"版本二（参考zh-concat）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本二（参考zh-concat）"}},[t._v("#")]),t._v(" 版本二（参考zh_concat）")]),t._v(" "),a("ul",[a("li",[t._v("第 1 步（创建类型 type_concat 的定义）：")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" type_concat\nAUTHID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_USER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" OBJECT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  v_result_string VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  STATIC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateInitialize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    concat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  MEMBER "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateIterate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    SELF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  MEMBER "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateTerminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    SELF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("return_value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  MEMBER "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateMerge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    SELF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("concat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("第 2 步（创建类型 type_concat 的 body）：")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" BODY type_concat\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v("\n  STATIC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateInitialize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("concat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    concat :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" ODCICONST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  MEMBER "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateIterate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SELF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" SELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n      SELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("\n      SELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" ODCICONST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  MEMBER "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateTerminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SELF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("return_value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    return_value :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" ODCICONST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  MEMBER "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" odciAggregateMerge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SELF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUT")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("concat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n      SELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v_result_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" ODCICONST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("第 3 步（创建函数 fn_concat，可替代 WM_CONCAT）：")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" fn_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURN")]),t._v(" VARCHAR2 AGGREGATE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" type_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("调用方法：")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn_concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staff_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" staff_names "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t_staff t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("** 说明一：** 上例中的 AUTHID CURRENT_USER 是权限控制的关键字，表示调用者权限，即当前用户。默认为 AUTHID DEFINER，表示定义者权限，即模式拥有者。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("说明二：")]),t._v(" 将 type_concat 中 v_result_string 和 return_value 的类型改为 CLOB 类型，并将 fn_concat 的返回值类型也改为 CLOB，就成了 CLOB 版的 fn_concat 了。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/hanzongze/p/oracle-wm_concat.html",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("文章出处")]),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=r.exports}}]);