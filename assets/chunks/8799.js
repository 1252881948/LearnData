"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[8799],{9136:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(8e3),a=n(1395),s=n(2078);const r=(0,o.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,s.yj)(),n=(0,a.iH)();(0,o.YP)((()=>t.path),(()=>n.value.focus()));const r=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,o.h)("span",{ref:n,tabindex:"-1"}),(0,o.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},8799:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(8e3),a=n(2078),s=n(6765),r=n(9136),u=n(4999),c=n(7344);const l=(0,o.aZ)({name:"404",setup(){const e=(0,s.I)(),t=(0,c.X6)(),n=()=>{const e=t.value.routeLocales["404msg"];return e[Math.floor(Math.random()*e.length)]},{navigate:l}=(0,a.nB)({to:t.value.home??e.value});return()=>[(0,o.h)(r.Z),(0,o.h)((0,o.up)("CommonWrapper"),{sidebar:!1},(()=>(0,o.h)("main",{class:"page not-found",id:"main-content"},[(0,o.h)(u.u),(0,o.h)("blockquote",n()),(0,o.h)("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},t.value.routeLocales.back),(0,o.h)("button",{class:"action-button",onClick:()=>l()},t.value.routeLocales.home)])))]}})}}]);