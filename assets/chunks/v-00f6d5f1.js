"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[8065],{6722:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-00f6d5f1","path":"/web/Comments.html","title":"评论插件","lang":"zh-CN","frontmatter":{"article":false,"title":"评论插件","icon":"comment","order":3,"summary":"评论插件 giscus：基于 github discussion，近似于论坛。查看 配置方法。; Gitalk：基于 github commit，需配置独立库用于存储评论。; Valine：可匿名评论，因此不适合国内使用。; Waline：基于 Valine 衍生的简洁、安全的评论系统。vuepress-theme-hope 主题集成了 Waline。; G","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/Comments.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"评论插件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-06T14:53:45.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-06T14:53:45.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"评论插件","slug":"评论插件","children":[]},{"level":2,"title":"Gitalk","slug":"gitalk","children":[]}],"git":{"createdTime":1658535624000,"updatedTime":1659797625000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":5}]},"readingTime":{"minutes":1.36,"words":407},"filePathRelative":"web/Comments.md","localizedDate":"2022年7月23日"}')},9622:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var i=n(8e3);const r=(0,i._)("h2",{id:"评论插件",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#评论插件","aria-hidden":"true"},"#"),(0,i.Uk)(" 评论插件")],-1),l={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},a=(0,i.Uk)("giscus"),o=(0,i.Uk)("：基于 github discussion，近似于论坛。查看 "),s={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},c=(0,i.Uk)("配置方法"),d=(0,i.Uk)("。"),u={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},m=(0,i.Uk)("Gitalk"),p=(0,i.Uk)("：基于 github commit，需配置独立库用于存储评论。"),h={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("Valine"),b=(0,i.Uk)("：可匿名评论，因此不适合国内使用。"),k={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},f=(0,i.Uk)("Waline"),v=(0,i.Uk)("：基于 Valine 衍生的简洁、安全的评论系统。vuepress-theme-hope 主题集成了 Waline。"),_={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},U=(0,i.Uk)("Gitter"),y=(0,i.Uk)("：公共聊天室，样例如："),G={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},w=(0,i.Uk)("boardgame"),W=(0,i.Uk)("，"),q={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},C=(0,i.Uk)("regauge"),x=(0,i.Uk)("。"),T=(0,i.uE)('<h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>将以下代码放入 docsify 页面中，即可启动 Gitalk：</p><div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;\n\n&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n    /* 使用下面的 Javascript 代码生成 gitalk 插件 */\n    const gitalk = new Gitalk({\n        clientID: &#39;2f3da234d27ed9a7c290&#39;,\n        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,\n        repo: &#39;docsifytalk&#39;,        //仓库名称 (GitHub repo)\n        owner: &#39;rockbenben&#39;,        //仓库拥有者 (GitHub repo owner)\n        admin: [&#39;rockbenben&#39;],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）\n        // id: location.pathname,   // Ensure uniqueness and length less than 50\n        distractionFreeMode: false  // Facebook-like distraction free mode\n    })\n&lt;/script&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p><ul><li>每次有新页面时，都需要登录 github 初始化评论区。</li><li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li></ul><hr class="footnotes-sep">',8),L={class:"footnotes"},H={class:"footnotes-list"},z={id:"footnote1",class:"footnote-item"},D={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"},V=(0,i.Uk)("超 Nice 的评论组件 —— Gitalk"),M=(0,i.Uk)(),N=(0,i._)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),Z={},j=(0,n(1935).Z)(Z,[["render",function(e,t){const n=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[r,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",l,[a,(0,i.Wm)(n)]),o,(0,i._)("a",s,[c,(0,i.Wm)(n)]),d]),(0,i._)("li",null,[(0,i._)("a",u,[m,(0,i.Wm)(n)]),p]),(0,i._)("li",null,[(0,i._)("a",h,[g,(0,i.Wm)(n)]),b]),(0,i._)("li",null,[(0,i._)("a",k,[f,(0,i.Wm)(n)]),v]),(0,i._)("li",null,[(0,i._)("a",_,[U,(0,i.Wm)(n)]),y,(0,i._)("a",G,[w,(0,i.Wm)(n)]),W,(0,i._)("a",q,[C,(0,i.Wm)(n)]),x])]),T,(0,i._)("section",L,[(0,i._)("ol",H,[(0,i._)("li",z,[(0,i._)("p",null,[(0,i._)("a",D,[V,(0,i.Wm)(n)]),M,N])])])])])}]])},1935:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,i]of t)n[e]=i;return n}}}]);