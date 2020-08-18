(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{453:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"oauth2入门使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth2入门使用"}},[t._v("#")]),t._v(" OAuth2入门使用")]),t._v(" "),e("h3",{attrs:{id:"什么是oauth2？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是oauth2？"}},[t._v("#")]),t._v(" 什么是OAuth2？")]),t._v(" "),e("p",[t._v("OAuth（开放授权）是一个开放标准，允许用户授权第三方移动应用访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方移动应用或分享他们数据的所有内容，OAuth2.0是OAuth协议的延续版本，但不向后兼容OAuth 1.0即完全废止了OAuth1.0。")]),t._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),e("p",[t._v("第三方应用授权登录：在APP或者网页接入一些第三方应用时，时长会需要用户登录另一个合作平台，比如QQ，微博，微信的授权登录。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2005963405,1223119627&fm=173&app=49&f=JPEG?w=640&h=446&s=449A4C3211DE61C8547140DE0200C0B2",alt:""}})]),t._v(" "),e("p",[t._v("原生app授权：app登录请求后台接口，为了安全认证，所有请求都带token信息，如果登录验证、请求后台数据。")]),t._v(" "),e("p",[t._v("前后端分离单页面应用（spa）：前后端分离框架，前端请求后台数据，需要进行oauth2安全认证，比如使用vue、react后者h5开发的app。")]),t._v(" "),e("h3",{attrs:{id:"名词"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词"}},[t._v("#")]),t._v(" 名词")]),t._v(" "),e("p",[t._v('（1） Third-party application：第三方应用程序，本文中又称"客户端"（client），比如打开知乎，使用第三方登录，选择qq登录，这时候知乎就是客户端。')]),t._v(" "),e("p",[t._v('（2）HTTP service：HTTP服务提供商，本文中简称"服务提供商"，即上例的qq。')]),t._v(" "),e("p",[t._v('（3）Resource Owner：资源所有者，本文中又称"用户"（user）,即登录用户。')]),t._v(" "),e("p",[t._v("（4）User Agent：用户代理，本文中就是指浏览器。")]),t._v(" "),e("p",[t._v("（5）Authorization server：认证服务器，即服务提供商专门用来处理认证的服务器。")]),t._v(" "),e("p",[t._v("（6）Resource server：资源服务器，即服务提供商存放用户生成的资源的服务器。它与认证服务器，可以是同一台服务器，也可以是不同的服务器。")]),t._v(" "),e("h3",{attrs:{id:"运行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行流程"}},[t._v("#")]),t._v(" 运行流程")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=936796410,1518546136&fm=173&app=49&f=JPEG?w=640&h=343&s=358A757E510A4D494E75D1CA0000F0B1",alt:""}})]),t._v(" "),e("p",[t._v("（A）用户打开客户端以后，客户端要求用户给予授权。")]),t._v(" "),e("p",[t._v("（B）用户同意给予客户端授权。")]),t._v(" "),e("p",[t._v("（C）客户端使用上一步获得的授权，向认证服务器申请令牌。")]),t._v(" "),e("p",[t._v("（D）认证服务器对客户端进行认证以后，确认无误，同意发放令牌。")]),t._v(" "),e("p",[t._v("（E）客户端使用令牌，向资源服务器申请获取资源。")]),t._v(" "),e("p",[t._v("（F）资源服务器确认令牌无误，同意向客户端开放资源。")]),t._v(" "),e("h3",{attrs:{id:"四种授权模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四种授权模式"}},[t._v("#")]),t._v(" 四种授权模式")]),t._v(" "),e("p",[t._v("授权码模式（authorization code）")]),t._v(" "),e("p",[t._v("简化模式（implicit）")]),t._v(" "),e("p",[t._v("密码模式（resource owner password credentials）")]),t._v(" "),e("p",[t._v("客户端模式（client credentials）")]),t._v(" "),e("h3",{attrs:{id:"授权码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权码模式"}},[t._v("#")]),t._v(" 授权码模式")]),t._v(" "),e("p",[t._v("授权码模式（authorization code）是功能最完整、流程最严密的授权模式。")]),t._v(" "),e("p",[t._v('（1）用户访问客户端，后者将前者导向认证服务器，假设用户给予授权，认证服务器将用户导向客户端事先指定的"重定向URI"（redirection URI），同时附上一个授权码。')]),t._v(" "),e("p",[t._v('（2）客户端收到授权码，附上早先的"重定向URI"，向认证服务器申请令牌：GET /oauth/token?response_type=code&client_id=test&redirect_uri=重定向页面链接。请求成功返回code授权码，一般有效时间是10分钟。')]),t._v(" "),e("p",[t._v("（3）认证服务器核对了授权码和重定向URI，确认无误后，向客户端发送访问令牌（access token）和更新令牌（refresh token）。POST /oauth/token?response_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA&redirect_uri=重定向页面链接。请求成功返回access Token和refresh Token。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3360499339,3703041730&fm=173&app=49&f=JPEG?w=640&h=443&s=E6F1E27E110A454B4E5454CE0000D0B3",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"简化模式implicit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简化模式implicit"}},[t._v("#")]),t._v(" 简化模式Implicit")]),t._v(" "),e("p",[t._v("适用于公开的浏览器单页应用")]),t._v(" "),e("p",[t._v("Access Token直接从授权服务器返回(只有前端渠道)")]),t._v(" "),e("p",[t._v("不支持refresh tokens")]),t._v(" "),e("p",[t._v("假定资源所有者和公开客户应用在同一个设备上")]),t._v(" "),e("p",[t._v("最容易受安全攻击")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1094957589,2534791990&fm=173&app=49&f=JPEG?w=640&h=547&s=BD0A777E190EC44D1C75F5CE0000C0B3",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"用户名密码-resource-owner-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户名密码-resource-owner-credentials"}},[t._v("#")]),t._v(" 用户名密码 Resource Owner Credentials")]),t._v(" "),e("p",[t._v("使用用户名密码登录的应用，例如桌面App")]),t._v(" "),e("p",[t._v("使用用户名/密码作为授权方式从授权服务器上获取access token")]),t._v(" "),e("p",[t._v("一般不支持refresh token")]),t._v(" "),e("p",[t._v("假定资源拥有者和公开客户子啊相同设备上")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=890485039,2872359714&fm=173&app=49&f=JPEG?w=640&h=325&s=B55A657F3D1A4C4D18DD89DB0000C0B2",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"客户端凭证-client-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端凭证-client-credentials"}},[t._v("#")]),t._v(" 客户端凭证 Client Credentials")]),t._v(" "),e("p",[t._v("适用于服务器见通信场景，机密客户代表它自己或者一个用户")]),t._v(" "),e("p",[t._v("只有后端渠道，使用客户凭证获取一个access token")]),t._v(" "),e("p",[t._v("因为客户凭证可以使用对称或者非对称加密，该方式支持共享密码或者证书")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2824142023,4194952714&fm=173&app=49&f=JPEG?w=640&h=146&s=E6F3E27ECFE64D2010FDA1DA000080B1",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);