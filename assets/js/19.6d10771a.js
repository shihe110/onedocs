(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{364:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-外键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-外键"}},[s._v("#")]),s._v(" 1.外键")]),s._v(" "),a("p",[s._v("表1-students 主键id 表2-classes class_id外键")]),s._v(" "),a("ul",[a("li",[s._v("创建外键")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" students\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" fk_class_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("class_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" classes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("删除外键")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" students\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" fk_class_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"_2-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-索引"}},[s._v("#")]),s._v(" 2.索引")]),s._v(" "),a("ul",[a("li",[s._v("创建索引")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建给students表的score字段，创建名称为idx_score的索引。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" students\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" idx_score "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给多个字段创建索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" students\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" idx_score "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("删除索引")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" students\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" idx_sorce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("唯一索引")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" students\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" uni_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标记字段唯一性，就添加了一个唯一索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" students\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" uni_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"_3-分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-分页"}},[s._v("#")]),s._v(" 3.分页")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// limit 3 -取3条记录，offset 0 - 从0开始")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" students "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// limit 3 -取3条记录，offset 3 - 从3开始")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" students "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);