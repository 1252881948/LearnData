"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2136],{6274:(t,o,e)=>{e.r(o),e.d(o,{data:()=>r});const r=JSON.parse('{"key":"v-e9d74ee6","path":"/_posts/2018-06-10-koolproxy_https.html","title":"koolproxy 无法下载 https 证书？","lang":"zh-CN","frontmatter":{"title":"koolproxy 无法下载 https 证书？","date":"2018-06-10T00:00:00.000Z","category":["网络"],"tag":["koolproxy"],"order":-20,"summary":"koolproxy 是可以运行在路由器上的广告屏蔽软件，跟其他最大的区别就是支持 https , 能有效屏蔽最新的视频应用广告（播个 10 分钟视频，广告 60 秒。。。） 为了屏蔽 https 广告，koolproxy 需要在每台设备上安装 https 证书。但我访问证书地址 110.110.110.110 时，却被提示无法访问。 这是我们需要进入路由器后","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2018-06-10-koolproxy_https.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"koolproxy 无法下载 https 证书？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T07:28:24.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"koolproxy"}],["meta",{"property":"article:published_time","content":"2018-06-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-27T07:28:24.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658906904000,"updatedTime":1658906904000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"_posts/2018-06-10-koolproxy_https.md","localizedDate":"2018年6月10日"}')},3489:(t,o,e)=>{e.r(o),e.d(o,{default:()=>f});var r=e(8e3);const l=(0,r._)("p",null,"koolproxy 是可以运行在路由器上的广告屏蔽软件，跟其他最大的区别就是支持 https , 能有效屏蔽最新的视频应用广告（播个 10 分钟视频，广告 60 秒。。。）",-1),p=(0,r._)("p",null,"为了屏蔽 https 广告，koolproxy 需要在每台设备上安装 https 证书。但我访问证书地址 110.110.110.110 时，却被提示无法访问。",-1),n=(0,r._)("p",null,"这是我们需要进入路由器后台，对证书地址进行操作。",-1),a=(0,r._)("p",null,[(0,r.Uk)("进入路由器后台，一般设置-Tools-Run Cmd ,运行命令 "),(0,r._)("code",null,"iptables -t nat -I PREROUTING -d 110.110.110.110 -p tcp --dport 80 -j REDIRECT --to 3000"),(0,r.Uk)("。重启后，该命令失效。")],-1),s=(0,r._)("p",null,[(0,r._)("img",{src:"http://tc.seoipo.com/20180610143928.png",alt:"",loading:"lazy"})],-1),c=(0,r.Uk)("运行命令后，就可以下载 https 证书，之后的设置参考"),i={href:"http://koolshare.cn/thread-80430-1-1.html",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("Merlin 版 Koolproxy3.1.x 使用教程"),m=(0,r.Uk)("。"),k=(0,r._)("p",null,[(0,r.Uk)("保存 Koolproxy 设置后，一定要"),(0,r._)("strong",null,"重启路由"),(0,r.Uk)("，否则可能部分屏蔽设置未成功生效。")],-1),u=(0,r._)("p",null,[(0,r._)("strong",null,"参考资料：")],-1),_={href:"https://github.com/koolproxy/merlin-koolproxy",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("koolproxy 项目地址"),d={href:"http://koolshare.cn/thread-81712-1-1.html",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Uk)("失效链接"),x={},f=(0,e(1935).Z)(x,[["render",function(t,o){const e=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[l,p,n,a,s,(0,r._)("p",null,[c,(0,r._)("a",i,[h,(0,r.Wm)(e)]),m]),k,u,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",_,[y,(0,r.Wm)(e)])]),(0,r._)("li",null,[(0,r._)("a",d,[g,(0,r.Wm)(e)])])])])}]])},1935:(t,o)=>{o.Z=(t,o)=>{const e=t.__vccOpts||t;for(const[t,r]of o)e[t]=r;return e}}}]);