(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{366:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vuepress基于github-pages部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress基于github-pages部署"}},[t._v("#")]),t._v(" vuepress基于github pages部署")]),t._v(" "),a("h2",{attrs:{id:"前提："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提："}},[t._v("#")]),t._v(" 前提：")]),t._v(" "),a("ul",[a("li",[t._v("本地安装nodejs  npm")]),t._v(" "),a("li",[t._v("本地安装git")]),t._v(" "),a("li",[t._v("申请github账号")])]),t._v(" "),a("p",[t._v("以上可搜索引擎")]),t._v(" "),a("h2",{attrs:{id:"step-1-搭建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-搭建项目"}},[t._v("#")]),t._v(" step 1 搭建项目")]),t._v(" "),a("p",[t._v("新建onedocs文件夹，cd到该文件夹下，初始化项目")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("npm init -y\n")])])]),a("p",[t._v("安装vuepress")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("npm install -D vuepress\n")])])]),a("p",[t._v("在package.json的script中添加，代码")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v('"scripts": {\n        "test": "echo \\"Error: no test specified\\" && exit 1",\n        "dev": "vuepress dev docs",\n        "build": "vuepress build docs",\n        "deploy": "bash deploy.sh"\n}\n')])])]),a("p",[t._v("在项目根目录下，新建 docs 文件夹")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("mkdir docs\n")])])]),a("p",[t._v("新建一个README.md文件写一段信息,可手动编写，也可使用命令")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("echo '# Hello VuePress!' > docs/README.md\n")])])]),a("p",[t._v("启动，并查在浏览器中访问 http://localhost:8080/ 即可预览效果")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("npm run dev\n")])])]),a("h2",{attrs:{id:"step-2-配置vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-配置vuepress"}},[t._v("#")]),t._v(" step 2 配置vuepress")]),t._v(" "),a("ul",[a("li",[t._v("在 docs 目录下新建 .vuepress 文件夹")]),t._v(" "),a("li",[t._v("接着在 .vuepress 文件夹下新建 config.js 文件,这里的 config.js 便是一个 Vuepress 网站必要的配置文件，在其中添加如下代码：")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("module.exports = {\n    title: '合抱之木生于毫末',\n\tbase: '/onedocs/',\n\tdescription: '合抱之木生于毫末，九层之台起于累土，千里之行始于足下',\n    head: [\n        ['link', {rel: 'icon', href: '/logo.png'}]\n    ],\n\tplugins: {\n\t\t'vuepress-plugin-auto-sidebar': {}\n\t},\n    themeConfig: {\n        logo: '/logo.png',\n        nav: [\n\t\t\t{text: '首页', link: '/'},\n\t\t\t{text: '导航', items: [\n\t\t\t\t{text: 'spring-boot', link: '/SpringBoot/'},\n\t\t\t\t{text: 'spring-cloud', link: '/SpringCloud/'},\n\t\t\t\t{text: 'spring', link: '/Spring/'},\n\t\t\t\t{text: 'spring-mvc', link: '/SpringMVC/'},\n\t\t\t\t{text: 'web', link: '/web/'},\n\t\t\t\t{text: 'maven', link: '/maven/'},\n\t\t\t\t{text: 'github', link: '/github/'}\n\t\t\t]},\n\t\t\t{text: 'github', link: 'https://github.com/shihe110',target:'_blank'}\n\t\t\t\n\t\t],\n\t\tsidebarDepth: 4,\n\t\tdisplayAllHeaders: false,\n\t\tsearch: true,\n\t\tsearchMaxSuggestions: 10\n    }\n};\n")])])]),a("p",[t._v("具体详细配置可参照vuepress官方文档"),a("a",{attrs:{href:"https://www.vuepress.cn/guide/basic-config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("网址"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"step-3-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-部署"}},[t._v("#")]),t._v(" step 3 部署")]),t._v(" "),a("p",[t._v("在根目录下新建deploy.sh并添加内容")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".github.io\n# git push -f git@github.com:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".github.io.git master\n\n# 如果发布到 https://"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".github.io/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n# git push -f git@github.com:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".git master:gh-pages\n\ncd -\n")])])]),a("p",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在github上新建仓库配置deploy.sh文件中的")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("# 如果发布到 https://"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".github.io\n# git push -f git@github.com:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".github.io.git master\n\n# 如果发布到 https://"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".github.io/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n# git push -f git@github.com:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(".git master:gh-pages\n")])])]),a("p",[t._v("两种方式二选一")]),t._v(" "),a("p",[t._v("在此我选择第二种")]),t._v(" "),a("p",[t._v("执行deploy.sh")]),t._v(" "),a("p",[t._v("执行完毕后可去github查看上传情况和访问网址：在仓库下settings，找到github pages")]),t._v(" "),a("p",[t._v("例如我的地址为： Your site is published at "),a("a",{attrs:{href:"https://shihe110.github.io/onedocs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://shihe110.github.io/onedocs/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("到此完成，是不是很简单！")])])}),[],!1,null,null,null);s.default=n.exports}}]);