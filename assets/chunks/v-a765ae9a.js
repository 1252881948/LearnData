"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3376],{5855:(e,t,l)=>{l.r(t),l.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-a765ae9a","path":"/_posts/2020-03-25-rsshub_on_vps.html","title":"RSS 速成篇 2：RSSHub 自部署","lang":"zh-CN","frontmatter":{"title":"RSS 速成篇 2：RSSHub 自部署","date":"2020-03-25T00:00:00.000Z","category":["自动化"],"tag":["rss","RSSHub"],"order":-28,"summary":"RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好域名和服务器。 新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。 部署步骤 1. 将 RSSHub 代码下载到根目录/root/，执行命令 git clone https://","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"RSS 速成篇 2：RSSHub 自部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T07:28:24.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"rss"}],["meta",{"property":"article:tag","content":"RSSHub"}],["meta",{"property":"article:published_time","content":"2020-03-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-27T07:28:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"部署步骤","slug":"部署步骤","children":[]},{"level":2,"title":"使用步骤","slug":"使用步骤","children":[]},{"level":2,"title":"RSSHub VS. Huginn","slug":"rsshub-vs-huginn","children":[]},{"level":2,"title":"RSS 合集","slug":"rss-合集","children":[]}],"git":{"createdTime":1658906904000,"updatedTime":1658906904000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":2.41,"words":723},"filePathRelative":"_posts/2020-03-25-rsshub_on_vps.md","localizedDate":"2020年3月25日"}')},5011:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ee});var n=l(8e3);const r=(0,n._)("p",null,[(0,n.Uk)("RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好"),(0,n._)("strong",null,"域名和服务器"),(0,n.Uk)("。")],-1),o=(0,n._)("p",null,"新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。",-1),s=(0,n._)("h2",{id:"部署步骤",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#部署步骤","aria-hidden":"true"},"#"),(0,n.Uk)(" 部署步骤")],-1),a=(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)("将 RSSHub 代码下载到根目录/root/，执行命令 "),(0,n._)("code",null,"git clone https://github.com/DIYgod/RSSHub.git"),(0,n.Uk)("。")])],-1),i=(0,n.Uk)("安装宝塔面板，查看 "),p={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("官方安装教程"),h=(0,n.Uk)("。"),_=(0,n.uE)('<li><p>登陆宝塔面板，点击「软件商店」-「运行环境」，找到并安装<strong>PM2 管理器</strong>。</p><p><img src="http://tc.seoipo.com/20200325120705.png" alt="" loading="lazy"></p></li><li><p>点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 <code>lib</code>。</p><p><img src="http://tc.seoipo.com/20200325121639.png" alt="" loading="lazy"></p></li><li><p>添加后，点击项目中的「映射」，输入指定域名，如 <code>rsshub.xxx.com</code>，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。</p><p><img src="http://tc.seoipo.com/20200325121921.png" alt="" loading="lazy"></p></li>',3),S=(0,n._)("p",null,[(0,n.Uk)("程序运行时，如果遇到报错，可以直接用命令运行 pm2，如 "),(0,n._)("code",null,"pm2 start /root/RSSHub/lib/index.js --name rsshub"),(0,n.Uk)("。")],-1),c=(0,n._)("h2",{id:"使用步骤",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#使用步骤","aria-hidden":"true"},"#"),(0,n.Uk)(" 使用步骤")],-1),b=(0,n.Uk)("打开 "),d={href:"https://docs.rsshub.app/",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("RSSHub 接口指南"),g=(0,n.Uk)("，搜索需要订阅的网站。RSSHub 支持国内大部分的主流网站。"),k=(0,n.Uk)("根据 "),R={href:"https://docs.rsshub.app/social-media.html#bilibili",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("bilibili 番剧路由"),U=(0,n.Uk)("的文档，将生成源 "),H=(0,n._)("code",null,"https://rsshub.app/bilibili/bangumi/media/9192",-1),x=(0,n.Uk)(" 其中的域名 "),y=(0,n._)("code",null,"https://rsshub.app",-1),w=(0,n.Uk)(" 替换为你自部署的域名，如 "),v=(0,n._)("code",null,"http://rsshub.xxx.com/bilibili/bangumi/media/9192",-1),z=(0,n.Uk)("。"),W=(0,n.Uk)("另外 RSSHub 支持很多实用的参数，比如内容过滤、全文输出等。全文输出参数为 "),P=(0,n._)("code",null,"mode=fulltext",-1),T=(0,n.Uk)("，应用举例：果壳科学人全文输出 "),Z=(0,n._)("code",null,"https://rsshub.xxx.com/guokr/scientific?mode=fulltext",-1),D=(0,n.Uk)("。其他可以在 "),E={href:"https://docs.rsshub.app/parameter.html",target:"_blank",rel:"noopener noreferrer"},C=(0,n.Uk)("通用参数"),M=(0,n.Uk)(" 官方文档了解具体使用方法。"),N=(0,n._)("h2",{id:"rsshub-vs-huginn",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#rsshub-vs-huginn","aria-hidden":"true"},"#"),(0,n.Uk)(" RSSHub VS. Huginn")],-1),I=(0,n._)("ul",null,[(0,n._)("li",null,"RSSHub：使用简单，使用现成的抓取规则，适用于国内主流网站；但无法抓取对小众网站，必须 RSSHub 官方定制订阅源。"),(0,n._)("li",null,"Huginn：适用于所有网站，可设定抓取频率、内容结构、js 结果、输出样式等；但部署、配置复杂，入门门槛高，需要针对网站单独定制抓取规则。")],-1),j=(0,n._)("h2",{id:"rss-合集",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#rss-合集","aria-hidden":"true"},"#"),(0,n.Uk)(" RSS 合集")],-1),F=(0,n._)("p",null,"汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。",-1),J={href:"https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},L=(0,n.Uk)("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),O={href:"https://newzone.top/_posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},V=(0,n.Uk)("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),q={href:"https://newzone.top/_posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},A=(0,n.Uk)("RSS 速成篇：RSSHub 捡现成的轮子"),Y={href:"https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},B=(0,n.Uk)("RSS 速成篇 2：RSSHub 自部署"),G={href:"https://newzone.top/_posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},K=(0,n.Uk)("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),Q={href:"https://newzone.top/_posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"},X=(0,n.Uk)("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),$={},ee=(0,l(1935).Z)($,[["render",function(e,t){const l=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[r,o,s,(0,n._)("ol",null,[a,(0,n._)("li",null,[(0,n._)("p",null,[i,(0,n._)("a",p,[u,(0,n.Wm)(l)]),h])]),_]),S,c,(0,n._)("ol",null,[(0,n._)("li",null,[(0,n._)("p",null,[b,(0,n._)("a",d,[m,(0,n.Wm)(l)]),g])]),(0,n._)("li",null,[(0,n._)("p",null,[k,(0,n._)("a",R,[f,(0,n.Wm)(l)]),U,H,x,y,w,v,z])])]),(0,n._)("p",null,[W,P,T,Z,D,(0,n._)("a",E,[C,(0,n.Wm)(l)]),M]),N,I,j,F,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("a",J,[L,(0,n.Wm)(l)])])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("a",O,[V,(0,n.Wm)(l)])])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("a",q,[A,(0,n.Wm)(l)])])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("a",Y,[B,(0,n.Wm)(l)])])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("a",G,[K,(0,n.Wm)(l)])])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("a",Q,[X,(0,n.Wm)(l)])])])])])}]])},1935:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,n]of t)l[e]=n;return l}}}]);