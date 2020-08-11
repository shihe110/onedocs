(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(t,a,e){"use strict";e.r(a);var r=e(42),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"windows下安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows下安装docker"}},[t._v("#")]),t._v(" windows下安装docker")]),t._v(" "),e("h3",{attrs:{id:"_1-docker下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker下载"}},[t._v("#")]),t._v(" 1.docker下载")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载地址"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("可使用迅雷加快下载速度")]),t._v(" "),e("h3",{attrs:{id:"_2-启动hyper-v"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动hyper-v"}},[t._v("#")]),t._v(" 2.启动Hyper-V")]),t._v(" "),e("p",[t._v('"控制面板"->"程序"->"启动或关闭Windows功能"-重启')]),t._v(" "),e("p",[t._v("重启后检查启动情况-win图标-windows管理工具")]),t._v(" "),e("h3",{attrs:{id:"_3-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装"}},[t._v("#")]),t._v(" 3.安装")]),t._v(" "),e("p",[t._v("可能会出现内存不足问题-可以在任务栏找到-docker图标-右键settings--advanced调整内存值")]),t._v(" "),e("h3",{attrs:{id:"_4-验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证"}},[t._v("#")]),t._v(" 4.验证")]),t._v(" "),e("p",[t._v("win+R  cmd"),e("br"),t._v("\n命令：docker --version")]),t._v(" "),e("h3",{attrs:{id:"_5-win10家庭版没有hyper-v解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-win10家庭版没有hyper-v解决办法"}},[t._v("#")]),t._v(" 5.win10家庭版没有Hyper-V解决办法")]),t._v(" "),e("p",[t._v("将以下的命令保存在一个txt文件中，然后重命名为.cmd文件，最后以管理员身份运行该文件。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('pushd "%~dp0"dir /b %SystemRoot%\\servicing\\Packages\\*Hyper-V*.mum >hyper-v.txtfor /f %%i in (\'findstr /i . hyper-v.txt 2^>nul\') do dism /online /norestart /add-package:"%SystemRoot%\\servicing\\Packages\\%%i"del hyper-v.txtDism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL\n')])])]),e("p",[t._v("该命令运行过程中会出现百分比，如果运行成功不关闭的话可能会一遍遍运行，当你看到运行成功即可关闭该文件，然后重启电脑就可以拥有完整的Hyper-V选项了。")]),t._v(" "),e("p",[t._v("按照第2步进行启动Hyper-V")]),t._v(" "),e("h3",{attrs:{id:"_6-解决家庭版win10问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-解决家庭版win10问题"}},[t._v("#")]),t._v(" 6.解决家庭版win10问题")]),t._v(" "),e("p",[t._v("家庭版伪装成专业版")]),t._v(" "),e("p",[t._v("由于家庭版的系统不支持Docker Desktop版本的安装，所以我们得把家庭版伪装成专业版从而绕过软件的检测。")]),t._v(" "),e("p",[t._v("步骤很简单，在cmd命令中运行regedit，打开注册表，按照以下路径找到相应的位置进行修改。")]),t._v(" "),e("p",[t._v("路径：")]),t._v(" "),e("p",[t._v("HKEY_LOCAL_MACHINE\\software\\Microsoft\\WindowsNT\\CurrentVersion")]),t._v(" "),e("p",[t._v("点击current version，在右侧找到EditionId，右键点击EditionId 选择“修改”，在弹出的对话框中将第二项“数值数据”的内容改为Professional，然后点击确定。")]),t._v(" "),e("p",[t._v("注意，这个修改会在电脑重启之后恢复原状。只要后续安装成功的话就没有影响了。")]),t._v(" "),e("h2",{attrs:{id:"linux系统docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux系统docker安装"}},[t._v("#")]),t._v(" Linux系统docker安装")]),t._v(" "),e("h3",{attrs:{id:"centos安装命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos安装命令"}},[t._v("#")]),t._v(" centos安装命令")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("sudo yum update \nsudo yum install docker \n")])])]),e("h3",{attrs:{id:"ubuntu安装命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装命令"}},[t._v("#")]),t._v(" ubuntu安装命令")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("sudo apt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get update\nsudo apt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);