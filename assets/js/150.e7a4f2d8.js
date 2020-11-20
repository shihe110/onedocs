(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{493:function(s,t,v){"use strict";v.r(t);var _=v(42),i=Object(_.a)({},(function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h2",{attrs:{id:"springsecurity之无状态登陆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#springsecurity之无状态登陆"}},[s._v("#")]),s._v(" SpringSecurity之无状态登陆")]),s._v(" "),v("ul",[v("li",[s._v("有状态登陆：在服务端维护一个登陆状态")]),s._v(" "),v("li",[s._v("无状态登陆：jwt方式")])]),s._v(" "),v("hr"),s._v(" "),v("h3",{attrs:{id:"无状态登陆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#无状态登陆"}},[s._v("#")]),s._v(" 无状态登陆")]),s._v(" "),v("h3",{attrs:{id:"有状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有状态"}},[s._v("#")]),s._v(" 有状态")]),s._v(" "),v("p",[s._v("有状态服务，即服务端需要记录每次会话的客户端信息，从而识别客户端身份，根据用户身份进行请求的处理，典型的设计如 Tomcat 中的 Session。例如登录：用户登录后，我们把用户的信息保存在服务端 session 中，并且给用户一个 cookie 值，记录对应的 session，然后下次请求，用户携带 cookie 值来（这一步有浏览器自动完成），我们就能识别到对应 session，从而找到用户的信息。这种方式目前来看最方便，但是也有一些缺陷，如下：")]),s._v(" "),v("ul",[v("li",[s._v("服务端保存大量数据，增加服务端压力")]),s._v(" "),v("li",[s._v("服务端保存用户状态，不支持集群化部署")])]),s._v(" "),v("h3",{attrs:{id:"无状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#无状态"}},[s._v("#")]),s._v(" 无状态")]),s._v(" "),v("p",[s._v("微服务集群中的每个服务，对外提供的都使用 RESTful 风格的接口。而 RESTful 风格的一个最重要的规范就是：服务的无状态性，即：")]),s._v(" "),v("ul",[v("li",[s._v("服务端不保存任何客户端请求者信息")]),s._v(" "),v("li",[s._v("客户端的每次请求必须具备自描述信息，通过这些信息识别客户端身份")])]),s._v(" "),v("p",[s._v("那么这种无状态性有哪些好处呢？")]),s._v(" "),v("ul",[v("li",[s._v("客户端请求不依赖服务端的信息，多次请求不需要必须访问到同一台服务器")]),s._v(" "),v("li",[s._v("服务端的集群和状态对客户端透明")]),s._v(" "),v("li",[s._v("服务端可以任意的迁移和伸缩（可以方便的进行集群化部署）")]),s._v(" "),v("li",[s._v("减小服务端存储压力")])]),s._v(" "),v("h3",{attrs:{id:"实现无状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现无状态"}},[s._v("#")]),s._v(" 实现无状态")]),s._v(" "),v("p",[s._v("无状态登录的流程：")]),s._v(" "),v("ul",[v("li",[s._v("首先客户端发送账户名/密码到服务端进行认证")]),s._v(" "),v("li",[s._v("认证通过后，服务端将用户信息加密并且编码成一个 token，返回给客户端")]),s._v(" "),v("li",[s._v("以后客户端每次发送请求，都需要携带认证的 token")]),s._v(" "),v("li",[s._v("服务端对客户端发送来的 token 进行解密，判断是否有效，并且获取用户登录信息")])]),s._v(" "),v("h3",{attrs:{id:"各自优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各自优缺点"}},[s._v("#")]),s._v(" 各自优缺点")]),s._v(" "),v("p",[s._v("使用 session 最大的优点在于方便。你不用做过多的处理，一切都是默认的即可。松哥本系列前面几篇文章我们也都是基于 session 来讲的。")]),s._v(" "),v("p",[s._v("但是使用 session 有另外一个致命的问题就是如果你的前端是 Android、iOS、小程序等，这些 App 天然的就没有 cookie，如果非要用 session，就需要这些工程师在各自的设备上做适配，一般是模拟 cookie，从这个角度来说，在移动 App 遍地开花的今天，我们单纯的依赖 session 来做安全管理，似乎也不是特别理想。")]),s._v(" "),v("p",[s._v("这个时候 JWT 这样的无状态登录就展示出自己的优势了，这些登录方式所依赖的 token 你可以通过普通参数传递，也可以通过请求头传递，怎么样都行，具有很强的灵活性。")]),s._v(" "),v("p",[s._v("不过话说回来，如果你的前后端分离只是网页+服务端，其实没必要上无状态登录，基于 session 来做就可以了，省事又方便。")])])}),[],!1,null,null,null);t.default=i.exports}}]);