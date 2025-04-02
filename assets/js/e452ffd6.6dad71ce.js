"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[8715],{98899:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>R,contentTitle:()=>h,default:()=>b,frontMatter:()=>g,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"user-service/apis/role-controller-get-role","title":"Get Role","description":"Get Role","source":"@site/docs/user-service/apis/role-controller-get-role.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/role-controller-get-role","permalink":"/docs/user-service/apis/role-controller-get-role","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Ashwin Date","lastUpdatedAt":1743614200000,"frontMatter":{"id":"role-controller-get-role","title":"Get Role","description":"Get Role","sidebar_label":"Get Role","hide_title":true,"hide_table_of_contents":true,"api":"eJyVU0tv2zAM/isBTxug1cm2k25FuxXFLkW6noJgYCwmFqJIrkQHywz994G2YyRNOmAXPySR34OfWgg1RWQb/KMBDfPg6C54jsE5ir82xLICCmqMuCOmmEAvWvC4I9BgDSiI9NrYSAY0x4YUWA8aauQKFKSyoh2CboEPtVQkjtZvIGc1NmHy6Llr1ZVWhIbiP4uXgprq4BMl2f88ncrLUCqjrUXNoGVyT4zW3UBW8HX65fLQ9xBX1hjyQgkYN6IP4gpLWCpIVDbR8qHTjGVJKX3isCUPerEUFufNHogng1874iqIoxvizj6uQEPRJIrFflYIQBGDo1REQlO01mRRTHHfW3wC/iw29DrPKYy+YG1/0OHCv8Hf24arEO2fbsqdTOvXoSu37OTEc2W3qcLJk0Neh7iDt8Lu5i/3k9unR1Ag/PrF2c0UFJTBM5YMupXOdUi8w47bgH7iyVnPkTzTby5qh9bLkJroZK/3awHil4DOJGcyFAWda13sUCKjrZFJVSGxFLTtChO9RJezLL82FA+9nXuMFleid9GCsUm+Deg1ukQX3EQVeQYNH+ZDvD9OQF3nfJyClxHs0TXyBwq2dOjvSF5mdRzL/6G/B9m3Prk5I6ykcgzfw7efoAAbMfM0LdsuLcOHMLoq4Tw4R1B5yu29WtK2fRZzHs/3W+9WjGkd3PLiVs5/AQDXiDE=","sidebar_class_name":"get api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Delete Role","permalink":"/docs/user-service/apis/role-controller-delete-role"},"next":{"title":"Search Role","permalink":"/docs/user-service/apis/role-controller-search-role"}}');var i=t(74848),o=t(28453),l=t(57742),a=t.n(l),n=t(78178),d=t.n(n),c=t(19624),u=t.n(c),p=t(96226),m=t.n(p),f=(t(77675),t(19365),t(51107));const g={id:"role-controller-get-role",title:"Get Role",description:"Get Role",sidebar_label:"Get Role",hide_title:!0,hide_table_of_contents:!0,api:"eJyVU0tv2zAM/isBTxug1cm2k25FuxXFLkW6noJgYCwmFqJIrkQHywz994G2YyRNOmAXPySR34OfWgg1RWQb/KMBDfPg6C54jsE5ir82xLICCmqMuCOmmEAvWvC4I9BgDSiI9NrYSAY0x4YUWA8aauQKFKSyoh2CboEPtVQkjtZvIGc1NmHy6Llr1ZVWhIbiP4uXgprq4BMl2f88ncrLUCqjrUXNoGVyT4zW3UBW8HX65fLQ9xBX1hjyQgkYN6IP4gpLWCpIVDbR8qHTjGVJKX3isCUPerEUFufNHogng1874iqIoxvizj6uQEPRJIrFflYIQBGDo1REQlO01mRRTHHfW3wC/iw29DrPKYy+YG1/0OHCv8Hf24arEO2fbsqdTOvXoSu37OTEc2W3qcLJk0Neh7iDt8Lu5i/3k9unR1Ag/PrF2c0UFJTBM5YMupXOdUi8w47bgH7iyVnPkTzTby5qh9bLkJroZK/3awHil4DOJGcyFAWda13sUCKjrZFJVSGxFLTtChO9RJezLL82FA+9nXuMFleid9GCsUm+Deg1ukQX3EQVeQYNH+ZDvD9OQF3nfJyClxHs0TXyBwq2dOjvSF5mdRzL/6G/B9m3Prk5I6ykcgzfw7efoAAbMfM0LdsuLcOHMLoq4Tw4R1B5yu29WtK2fRZzHs/3W+9WjGkd3PLiVs5/AQDXiDE=",sidebar_class_name:"get api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},h=void 0,R={},k=[];function y(e){const r={p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get Role"}),"\n",(0,i.jsx)(a(),{method:"get",path:"/user/v1/rbac/roles/read/{id}",context:"endpoint"}),"\n",(0,i.jsx)(r.p,{children:"Get Role"}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(d(),{parameters:[{name:"id",required:!0,in:"path",schema:{type:"string"}},{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,i.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Role Detail."},403:{description:"Forbidden"}}})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}}}]);