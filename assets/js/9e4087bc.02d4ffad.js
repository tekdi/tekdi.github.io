"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[2711],{9331:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});r(6540);var a=r(8774),n=r(1312),s=r(1213),i=r(6266),c=r(781),l=r(1107),o=r(4848);function d(e){let{year:t,posts:r}=e;const n=(0,i.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{as:"h3",id:t,children:t}),(0,o.jsx)("ul",{children:r.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(a.A,{to:e.metadata.permalink,children:[(t=e.metadata.date,n.format(new Date(t)))," - ",e.metadata.title]})},e.metadata.date);var t}))})]})}function h(e){let{years:t}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},t)))})})})}function m(e){let{archive:t}=e;const r=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const t=e.reduce(((e,t)=>{const r=t.metadata.date.split("-")[0],a=e.get(r)??[];return e.set(r,[t,...a])}),new Map);return Array.from(t,(e=>{let[t,r]=e;return{year:t,posts:r}}))}(t.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.be,{title:r,description:a}),(0,o.jsxs)(c.A,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:r}),(0,o.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},6266:(e,t,r)=>{r.d(t,{i:()=>n});var a=r(4586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,a.A)(),r=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,a.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:r,...e})}}}]);