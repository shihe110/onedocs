(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{363:function(e,o,r){"use strict";r.r(o);var t=r(42),v=Object(t.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"docker的基本使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker的基本使用"}},[e._v("#")]),e._v(" Docker的基本使用")]),e._v(" "),r("h3",{attrs:{id:"docker镜像命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像命令"}},[e._v("#")]),e._v(" Docker镜像命令")]),e._v(" "),r("ul",[r("li",[e._v("1.检查docker版本")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker version")])]),e._v(" "),r("ul",[r("li",[e._v("2.检索镜像")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker search tomcat")])]),e._v(" "),r("ul",[r("li",[e._v("3.拉取镜像")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker pull tomcat")])]),e._v(" "),r("ul",[r("li",[e._v("4.查看镜像列表")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker images")])]),e._v(" "),r("ul",[r("li",[e._v("5.删除一个镜像")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker rmi imageId")])]),e._v(" "),r("ul",[r("li",[e._v("6.删除所有镜像")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker rmi ${docker images -q}")])]),e._v(" "),r("h3",{attrs:{id:"docker容器命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker容器命令"}},[e._v("#")]),e._v(" Docker容器命令")]),e._v(" "),r("ul",[r("li",[e._v("1.根据镜像启动容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker run --name container-name -d image-name\n例：docker run --name mytomcat -d tomcat:latest")])]),e._v(" "),r("ul",[r("li",[e._v("2.查看运行中的容器列表")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker ps")])]),e._v(" "),r("ul",[r("li",[e._v("3.停止运行中的容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker stop containerId")])]),e._v(" "),r("ul",[r("li",[e._v("4.查看所有容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker ps -a")])]),e._v(" "),r("ul",[r("li",[e._v("5.启动容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker start 容器名称/容器id\n例：docker start test-redis")])]),e._v(" "),r("ul",[r("li",[e._v("6.停止容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker stop container-name/container-id")])]),e._v(" "),r("ul",[r("li",[e._v("7.端口映射")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker run -d -p 6378:6379 --name prot-redis redis\ndocker run -d -p 80:80 nginx #启动一个做了端口映射的容器(nginx)")])]),e._v(" "),r("p",[e._v("说明：-d：后台启动  -p：将主机的端口映射到容器的一个端口 主机端口:容器端口")]),e._v(" "),r("ul",[r("li",[e._v("8.删除一个容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker rm 容器id")])]),e._v(" "),r("ul",[r("li",[e._v("9.删除所有容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker rm ${docker ps -a -q}")])]),e._v(" "),r("ul",[r("li",[e._v("10.查看容器的日志")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker logs container-name/container-id")])]),e._v(" "),r("ul",[r("li",[e._v("11.登陆运行中的容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("docker exec -it 容器name/id  sh/ .\ndocker exec -it container-id/container-name bash")])]),e._v(" "),r("ul",[r("li",[e._v("12.退出运行中的容器")])]),e._v(" "),r("blockquote",[r("p",[e._v("exit")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方命令地址"),r("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=v.exports}}]);