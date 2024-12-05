"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[72],{51074:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"middleware-service/devops","title":"Devops","description":"Installation","source":"@site/docs/middleware-service/8_devops.md","sourceDirName":"middleware-service","slug":"/middleware-service/devops","permalink":"/docs/middleware-service/devops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"API Docs","permalink":"/docs/middleware-service/api-docs"},"next":{"title":"Tekdi Style Guides","permalink":"/docs/category/tekdi-style-guides"}}');var s=r(74848),t=r(28453);const d={sidebar_position:8},o="Devops",a={},l=[{value:"1. Clone git repository",id:"1-clone-git-repository",level:4},{value:"2. Setup DB",id:"2-setup-db",level:4},{value:"3. Environment Variables",id:"3-environment-variables",level:4},{value:"4. Run the Application",id:"4-run-the-application",level:4}];function c(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"devops",children:"Devops"})}),"\n",(0,s.jsx)(n.p,{children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Steps to install locally for development"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"1-clone-git-repository",children:"1. Clone git repository"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/tekdi/shiksha-middleware\ncd shiksha-middleware\nnpm install\n"})}),"\n",(0,s.jsx)(n.h4,{id:"2-setup-db",children:"2. Setup DB"}),"\n",(0,s.jsx)(n.p,{children:"Make sure you have PostgreSQL installed and running. Create a database for the notification service"}),"\n",(0,s.jsx)(n.h4,{id:"3-environment-variables",children:"3. Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"Create a .env file in the root directory of your project and add the necessary environment variables."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotenv",children:'\n#server\nPOSTGRES_HOST="add-here"\nPOSTGRES_PORT="add-here"\nPOSTGRES_USERNAME="add-here"\nPOSTGRES_PASSWORD="add-here"\nPOSTGRES_DATABASE="add-here"\nPOSTGRES_SCHEMA="add-here"\n\nJWT_SECRET="add-here"\n\n\nRBAC_JWT_EXPIRES_IN="add-here"\nRBAC_JWT_SECRET="add-here"\n\n#Expiration Time for cache\nTTL ="add-here"\n\nNODE_TLS_REJECT_UNAUTHORIZED = 0\n\n# microservice base url (add all microservice which you want to integrate in middleware)\nUSER_SERVICE ="add-here"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"4-run-the-application",children:"4. Run the Application"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm run start:dev\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Steps to install on server (Should have a docker compose file)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recommended Infrastructure (should cover Dev & Prod)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var i=r(96540);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);