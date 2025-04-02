"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[941],{64162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>T,default:()=>k,frontMatter:()=>f,metadata:()=>n,toc:()=>U});const n=JSON.parse('{"id":"user-service/apis/tenant-controller-update-tenants","title":"Update Tenants","description":"Update Tenants","source":"@site/docs/user-service/apis/tenant-controller-update-tenants.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/tenant-controller-update-tenants","permalink":"/docs/user-service/apis/tenant-controller-update-tenants","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Ashwin Date","lastUpdatedAt":1743614200000,"frontMatter":{"id":"tenant-controller-update-tenants","title":"Update Tenants","description":"Update Tenants","sidebar_label":"Update Tenants","hide_title":true,"hide_table_of_contents":true,"api":"eJytVUtv2kAQ/ivWnFrJqUPbk28JaRTUS5THCaFq8A54E3vX2R2TUOT/Xs0uGCemPZULYufxzeP7hh3YhhyytmamIIcHMmh4ag07W1XkfrWNQqb47CGFBh3WxOQ85PMdGKwJctAKUnD00mpHCnJ2LaWgDeTQIJeQgi9KqhHyHfC2kQjPTps1dF3aJ2k9udlfE7205Lb/zLSIkeT50qqteHxMVFjDZFhM2DSVLkLj2ZO3Rt5Gqe3yiQqWrp2MiTV5scZ6RwWkoGyN2pw0hbn5ce4uJF87rGc1rmnogc6hdKyZ3kUeRweKfOF0I12cRPWM3J6I/RAJ98EvsauES0o4bBtSINPWkM+haZeV9iXJcpTDldjQFaXekIKFJFthW7Gsu/fsUigcIZO63J6eSGz7hlCdbo41V9Rz8jEQ8YotdJ1YHfnGGh8n9vV8Il/vm4pxyRUyJtfERSmo38+/jT2vrVtqpchEXFwLuffxsb+hd6wkOWqiJi6timQvyiASLiGHTBidbSZZHGgWtZTttOqEyOQ2UUYL+VG0TvP2XigYe8KiIO/P2D7TcLnY6J8UaCG1lISKHKQHDV20XFqnfwdih26E3HdHWfx4w7qp6EjjASX27D2+9KQds3R+8BqNp48+kO8dfQacGOAMqTCgiDYrG1rfM+G+1M++xOS2Ql5ZV494PL17vEoubmeQgsw2Pk6+nEPUPhaifZlKYz3XaAZjGG31tLaY3jhrKhlUl0LrKrHFfc/DBRPoCaTQiyhuHVLIdRBLaT2L8263RE+Pruo6eY73TW6q0h6XlVytFVaeRpX0Vww+3e0P3OdEEE9V+Ezb4WndYNWKE8i13KDTgvT/UQ9cNdsh5qEaraBbdOmBvIIeDdOIcfYg4cfA0a2W4nvR3V48TG8gheX+6NdWSZDDV/krwdeIbEMjQVjhbQcVmnWLa/GNSeXzB1pLaQE=","sidebar_class_name":"patch api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"TenantController_searchTenants","permalink":"/docs/user-service/apis/tenant-controller-search-tenants"},"next":{"title":"Check User","permalink":"/docs/user-service/apis/user-controller-check-user"}}');var s=a(74848),i=a(28453),r=a(57742),d=a.n(r),p=a(78178),c=a.n(p),o=a(19624),l=a.n(o),h=a(96226),u=a.n(h),m=(a(77675),a(19365),a(51107));const f={id:"tenant-controller-update-tenants",title:"Update Tenants",description:"Update Tenants",sidebar_label:"Update Tenants",hide_title:!0,hide_table_of_contents:!0,api:"eJytVUtv2kAQ/ivWnFrJqUPbk28JaRTUS5THCaFq8A54E3vX2R2TUOT/Xs0uGCemPZULYufxzeP7hh3YhhyytmamIIcHMmh4ag07W1XkfrWNQqb47CGFBh3WxOQ85PMdGKwJctAKUnD00mpHCnJ2LaWgDeTQIJeQgi9KqhHyHfC2kQjPTps1dF3aJ2k9udlfE7205Lb/zLSIkeT50qqteHxMVFjDZFhM2DSVLkLj2ZO3Rt5Gqe3yiQqWrp2MiTV5scZ6RwWkoGyN2pw0hbn5ce4uJF87rGc1rmnogc6hdKyZ3kUeRweKfOF0I12cRPWM3J6I/RAJ98EvsauES0o4bBtSINPWkM+haZeV9iXJcpTDldjQFaXekIKFJFthW7Gsu/fsUigcIZO63J6eSGz7hlCdbo41V9Rz8jEQ8YotdJ1YHfnGGh8n9vV8Il/vm4pxyRUyJtfERSmo38+/jT2vrVtqpchEXFwLuffxsb+hd6wkOWqiJi6timQvyiASLiGHTBidbSZZHGgWtZTttOqEyOQ2UUYL+VG0TvP2XigYe8KiIO/P2D7TcLnY6J8UaCG1lISKHKQHDV20XFqnfwdih26E3HdHWfx4w7qp6EjjASX27D2+9KQds3R+8BqNp48+kO8dfQacGOAMqTCgiDYrG1rfM+G+1M++xOS2Ql5ZV494PL17vEoubmeQgsw2Pk6+nEPUPhaifZlKYz3XaAZjGG31tLaY3jhrKhlUl0LrKrHFfc/DBRPoCaTQiyhuHVLIdRBLaT2L8263RE+Pruo6eY73TW6q0h6XlVytFVaeRpX0Vww+3e0P3OdEEE9V+Ezb4WndYNWKE8i13KDTgvT/UQ9cNdsh5qEaraBbdOmBvIIeDdOIcfYg4cfA0a2W4nvR3V48TG8gheX+6NdWSZDDV/krwdeIbEMjQVjhbQcVmnWLa/GNSeXzB1pLaQE=",sidebar_class_name:"patch api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},T=void 0,b={},U=[];function y(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Update Tenants"}),"\n",(0,s.jsx)(d(),{method:"patch",path:"/user/v1/tenant/update/{id}",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Update Tenants"}),"\n",(0,s.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(c(),{parameters:[{name:"id",required:!0,in:"path",schema:{type:"string"}},{name:"userId",required:!0,in:"query",schema:{type:"string"}}]}),"\n",(0,s.jsx)(l(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string"},domain:{type:"string"},params:{type:"object"},programImages:{type:"array",items:{type:"string"}},description:{type:"string"},status:{type:"string",description:"Status of the tenant",enum:["published","draft","archived"],default:"published"},createdBy:{type:"string"},programHead:{type:"string"}},title:"TenantUpdateDto"}}}}}),"\n",(0,s.jsx)(u(),{id:void 0,label:void 0,responses:{201:{description:"Tenant Data Fetch"},403:{description:"Forbidden"}}})]})}function k(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}}}]);