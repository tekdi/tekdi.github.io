"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[4727],{67010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"event-service/devops","title":"Installation","description":"Steps to Install Locally for Development","source":"@site/docs/event-service/8_devops.md","sourceDirName":"event-service","slug":"/event-service/devops","permalink":"/docs/event-service/devops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"API Docs","permalink":"/docs/event-service/api-docs"},"next":{"title":"Introduction","permalink":"/docs/event-service/apis/event-management"}}');var r=t(74848),i=t(28453);const a={sidebar_position:8},l="Installation",d={},o=[{value:"Steps to Install Locally for Development",id:"steps-to-install-locally-for-development",level:2},{value:"1. Clone Git Repository",id:"1-clone-git-repository",level:3},{value:"2. Setup DB",id:"2-setup-db",level:3},{value:"3. Environment Variables",id:"3-environment-variables",level:3},{value:"4. Run the Application",id:"4-run-the-application",level:3},{value:"Steps for Server Side Setup",id:"steps-for-server-side-setup",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,r.jsx)(n.h2,{id:"steps-to-install-locally-for-development",children:"Steps to Install Locally for Development"}),"\n",(0,r.jsx)(n.h3,{id:"1-clone-git-repository",children:"1. Clone Git Repository"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone  https://github.com/tekdi/event-management-service\ncd event-management-service\nnpm install\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-setup-db",children:"2. Setup DB"}),"\n",(0,r.jsx)(n.p,{children:"Make sure you have PostgreSQL installed and running. Create a database for the event service"}),"\n",(0,r.jsx)(n.h3,{id:"3-environment-variables",children:"3. Environment Variables"}),"\n",(0,r.jsx)(n.p,{children:"Create a .env file in the root directory of your project and add the necessary environment variables."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotenv",children:'\n#server\nPOSTGRES_HOST="add-here"\nPOSTGRES_PORT="add-here"\nPOSTGRES_USERNAME="add-here"\nPOSTGRES_PASSWORD="add-here"\nPOSTGRES_DATABASE="add-here"\nPOSTGRES_SCHEMA="add-here"\n\nEVENT_CREATION_LIMIT="add-here"\nTIMEZONE="add-here"\nTIMEZONE_OFFSET="add-here"\nTIMEZONE_OFFSET_STRING="add-here"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"4-run-the-application",children:"4. Run the Application"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm run start:dev\n"})}),"\n",(0,r.jsx)(n.h2,{id:"steps-for-server-side-setup",children:"Steps for Server Side Setup"}),"\n",(0,r.jsx)(n.p,{children:"@TODO"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);