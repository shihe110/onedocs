(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(n,E,t){"use strict";t.r(E);var s=t(42),l=Object(s.a)({},(function(){var n=this,E=n.$createElement,t=n._self._c||E;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"mysql优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql优化"}},[n._v("#")]),n._v(" mysql优化")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("1.主键自增，插入10条记录，后删除9，10两条记录，再插入是11还是9？\n两种情况：\n1.表类型是InnoDB是9，InnoDB 表只是把自增主键的最大 ID 记录到内存中，所以重启数据库或者是对表进行OPTIMIZE 操作，都会导致最大 ID 丢失。"),t("br"),n._v("\n2.表的类型是 MyISAM，那么是 11，该类型表会把主键记录到数据文件里。重启mysql也不会丢失。")])]),n._v(" "),t("li",[t("p",[n._v("2.create可创建哪些对象\nDATABASE\nEVENT\nFUNCTION\nINDEX\nPROCEDURE\nTABLE\nTRIGGER\nUSER\nVIEW")])]),n._v(" "),t("li",[t("p",[n._v("3.Mysql 表中允许有多少个 TRIGGERS？\n在 Mysql 表中允许有六个触发器，如下：\nBEFORE INSERT\nAFTER INSERT\nBEFORE UPDATE\nAFTER UPDATE\nBEFORE DELETE\nAFTER DELETE")])])])])}),[],!1,null,null,null);E.default=l.exports}}]);