"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[3321],{70573:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>y,contentTitle:()=>Y,default:()=>v,frontMatter:()=>k,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"user-service/apis/cohort-academic-year-controller-create-cohort-academic-year","title":"Create Cohort Academic Year","description":"Create Cohort Academic Year","source":"@site/docs/user-service/apis/cohort-academic-year-controller-create-cohort-academic-year.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/cohort-academic-year-controller-create-cohort-academic-year","permalink":"/docs/user-service/apis/cohort-academic-year-controller-create-cohort-academic-year","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Manoj L","lastUpdatedAt":1735539477000,"frontMatter":{"id":"cohort-academic-year-controller-create-cohort-academic-year","title":"Create Cohort Academic Year","description":"Create Cohort Academic Year","sidebar_label":"Create Cohort Academic Year","hide_title":true,"hide_table_of_contents":true,"api":"eJyNlE1v2zAMhv+KwbPTJMN28a1NO6DYYUXTHoYgGBibidXYkkvJWT3D/32g5Hw6G3bJh0hR70s+UgumIkanjH7MIIGZyQ272xQzKlX6g5BnRjs2RUH8M2VCR8MUiKFCxpIcsYVk0YLGkiABRxq1UxnEoDQkkBNmJOk2zalESFpwTSWZ1rHSG+i6ZQxM7zVZd2eyRjLkr2LKIHFcUwyp0Y60kxBWVaFSr378Zo2WtUFps3qj1IlGFq9OkZVo6m2I6UsRMWRkU1aV1IXkmCmBNdaFgwSgiwFPevA/hS7yz8t18YnTxemhF9uWMTjlCro6rXtnoOtCMVsZbYPZT5OpfJ3L+Wq4jHK00YpIR2G4WWTrNCVr13VRNDfi8vNkMtx7h1nUz8knfbmW9KgdscYimhPviKMHZsM33qrDjZByxYH4s5TWrFzjWUKvZ+TMljQki6Ugcn7OzEuPQq1oXyzq0SzJ5UbYroz1GKDLIYFxbYnHu+k4dHq07/KoIeRx6IaQ6qWL1hNdc2EsdPZc3YEArNQ3agbc9/fitna5YfXbk+v7IfQ+H7l/+MCykhGfcnrE6hK8w/WR89bG6+gRmedqa3OMngp0a8PlAMrZ8+t9dPv0CDGI0bA4vZlAuGmYyk0TidK+Er3J3sa/+352zKExjj7cuCpQaVFbcyGxMJIFyEhEx9QfPhyLLIfBLGPIZZzJAtp2hZZeueg6WX6viZswrh2ywpW0YbHs4v0UhKlMWQlkkKyxsDQQe3hjAOLryrfUnD9wOyxqCg9D20dnocroRQocMwavlhB9oPTp+/wFYlj1r19pMtnD+Ati/+klGa/UA+jXWihQb2rcSG6oKSPDWvp6CuXWQ9n/kE7sQ7o5UXjO596sfIq5q1vaNiDfdYf8EPrrjsOlCNnS1mXXdX8AGZ4/lg==","sidebar_class_name":"post api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Get Refresh Token","permalink":"/docs/user-service/apis/auth-controller-refresh-token"},"next":{"title":"Create Cohort","permalink":"/docs/user-service/apis/cohort-controller-create-cohort"}}');var o=a(74848),c=a(28453),i=a(57742),s=a.n(i),d=a(78178),n=a.n(d),l=a(19624),h=a.n(l),p=a(96226),m=a.n(p),u=(a(77675),a(19365),a(51107));const k={id:"cohort-academic-year-controller-create-cohort-academic-year",title:"Create Cohort Academic Year",description:"Create Cohort Academic Year",sidebar_label:"Create Cohort Academic Year",hide_title:!0,hide_table_of_contents:!0,api:"eJyNlE1v2zAMhv+KwbPTJMN28a1NO6DYYUXTHoYgGBibidXYkkvJWT3D/32g5Hw6G3bJh0hR70s+UgumIkanjH7MIIGZyQ272xQzKlX6g5BnRjs2RUH8M2VCR8MUiKFCxpIcsYVk0YLGkiABRxq1UxnEoDQkkBNmJOk2zalESFpwTSWZ1rHSG+i6ZQxM7zVZd2eyRjLkr2LKIHFcUwyp0Y60kxBWVaFSr378Zo2WtUFps3qj1IlGFq9OkZVo6m2I6UsRMWRkU1aV1IXkmCmBNdaFgwSgiwFPevA/hS7yz8t18YnTxemhF9uWMTjlCro6rXtnoOtCMVsZbYPZT5OpfJ3L+Wq4jHK00YpIR2G4WWTrNCVr13VRNDfi8vNkMtx7h1nUz8knfbmW9KgdscYimhPviKMHZsM33qrDjZByxYH4s5TWrFzjWUKvZ+TMljQki6Ugcn7OzEuPQq1oXyzq0SzJ5UbYroz1GKDLIYFxbYnHu+k4dHq07/KoIeRx6IaQ6qWL1hNdc2EsdPZc3YEArNQ3agbc9/fitna5YfXbk+v7IfQ+H7l/+MCykhGfcnrE6hK8w/WR89bG6+gRmedqa3OMngp0a8PlAMrZ8+t9dPv0CDGI0bA4vZlAuGmYyk0TidK+Er3J3sa/+352zKExjj7cuCpQaVFbcyGxMJIFyEhEx9QfPhyLLIfBLGPIZZzJAtp2hZZeueg6WX6viZswrh2ywpW0YbHs4v0UhKlMWQlkkKyxsDQQe3hjAOLryrfUnD9wOyxqCg9D20dnocroRQocMwavlhB9oPTp+/wFYlj1r19pMtnD+Ati/+klGa/UA+jXWihQb2rcSG6oKSPDWvp6CuXWQ9n/kE7sQ7o5UXjO596sfIq5q1vaNiDfdYf8EPrrjsOlCNnS1mXXdX8AGZ4/lg==",sidebar_class_name:"post api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},Y=void 0,y={},f=[];function C(e){const r={p:"p",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Create Cohort Academic Year"}),"\n",(0,o.jsx)(s(),{method:"post",path:"/user/v1/cohort-academic-year/create",context:"endpoint"}),"\n",(0,o.jsx)(r.p,{children:"Create Cohort Academic Year"}),"\n",(0,o.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(n(),{parameters:[{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,o.jsx)(h(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{cohortId:{type:"string",description:"cohortId",default:""},academicYearId:{type:"string",description:"academicYearId",default:""}},required:["cohortId","academicYearId"],title:"CohortAcademicYearDto"}}}}}),"\n",(0,o.jsx)(m(),{id:void 0,label:void 0,responses:{201:{description:"Form has been created successfully."},400:{description:"Bad request."},500:{description:"Internal Server Error."}}})]})}function v(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(C,{...e})}):C(e)}}}]);