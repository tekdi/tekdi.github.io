"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[9085],{52076:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"notifications-service/getting-started","title":"Getting Started","description":"Before setting up the notification service, ensure you have the following prerequisites","source":"@site/docs/notifications-service/3_getting-started.md","sourceDirName":"notifications-service","slug":"/notifications-service/getting-started","permalink":"/docs/notifications-service/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Ashwin Date","lastUpdatedAt":1743614593000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Notification Service Features","permalink":"/docs/notifications-service/features"},"next":{"title":"Tech Stack","permalink":"/docs/notifications-service/tech-stack"}}');var n=i(74848),r=i(28453);const o={sidebar_position:3},a="Getting Started",c={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"To set up RabbitMQ use following commands",id:"to-set-up-rabbitmq-use-following-commands",level:4},{value:"Setting Up Firebase Project",id:"setting-up-firebase-project",level:4}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,n.jsx)(t.p,{children:"Before setting up the notification service, ensure you have the following prerequisites"}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"http://nodejs.org",children:"Node.js"})," - Version 14 or later"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.nestjs.com",children:"NestJS"})," - Familiarity with NestJS framework"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})," - Database for storing notification data"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.rabbitmq.com/",children:"RabbitMQ"})," - Message broker for handling notification queues."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://firebase.google.com/",children:"Firebase"})," - To send notifications via Firebase Cloud Messaging (FCM), configure OAuth 2.0 credentials for secure access."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"to-set-up-rabbitmq-use-following-commands",children:"To set up RabbitMQ use following commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"sudo docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management\n\nsudo docker start containerId\n"})}),"\n",(0,n.jsx)(t.h4,{id:"setting-up-firebase-project",children:"Setting Up Firebase Project"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"1. Go to the Firebase Console and create a new project or select an existing one.\n2. Navigate to Project Settings > Service Accounts.\n3. Click on Generate New Private Key to download the service account JSON file. This file contains the credentials required for authenticating with Google APIs.\n4. Generate Device Tokens:Implement the necessary logic in your application to obtain device tokens, which are required to send notifications to specific devices.\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);