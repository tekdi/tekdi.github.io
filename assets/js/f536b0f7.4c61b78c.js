"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[7320],{1031:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>X,frontMatter:()=>u,metadata:()=>s,toc:()=>M});const s=JSON.parse('{"id":"user-service/apis/cohort-members-controller-create-cohort-members","title":"Create Cohort Member","description":"Create Cohort Member","source":"@site/docs/user-service/apis/cohort-members-controller-create-cohort-members.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/cohort-members-controller-create-cohort-members","permalink":"/docs/user-service/apis/cohort-members-controller-create-cohort-members","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Ashwin Date","lastUpdatedAt":1743614200000,"frontMatter":{"id":"cohort-members-controller-create-cohort-members","title":"Create Cohort Member","description":"Create Cohort Member","sidebar_label":"Create Cohort Member","hide_title":true,"hide_table_of_contents":true,"api":"eJy1VU1v2zAM/SsGTxugNs2OvnXtDsUwrOjHYQiCgbGZWI0tuZKc1jP83wdKjmMn6ZAO26WpRfHpkXxPakCXZNBJrW5SiOFKZ9q4b1QsyNgrrZzReU7mZ2IIHY2iIKBEgwU5/ohnDSgsCGKoLJmbFAQYeq6koRRiZyoSIBXE8FyRqUGATTIqEOIGXF1ymnVGqhW0reiRUtrIhCRj+dyMMCVzYjImmFIhk5rQ/CWEI4XKvSt5Hsom6z7rtOYd+11ItHKkHIewLHOZ+O5PnqxWvHYArRdPlDjutuFZOUmWo4mfBQ9tn4SAlGxiZMm4EMNDRtF2d6SXkeu/o6IfZUpLrHIHMUArOvDLroM/CM0pBx3N2ofu1HES67D3JM7tUG6zXXfeqKXnMRfgpMtpX/vXTkPbBlhbamVD1z9dTPlnTDUkRiEzytBGCyIVBc+kka2ShKxdVnlen3umDlfsmHEiU7GUVEa62tsJfdqZ02tSEM/mrK29g/0J0RhGQEEu0+zmUlsvHHQZxDDhkieb6SR0JPRxEliypslsgpMHRO5ZjaH0MZ1+fFjKr1QfOKRz0GXlMm3kL69xXzvr/G7nkC+vWJTc/qGid5o4LsRdfKum3oDMY6k9v26s95lc2wyj2xzdUpviQGlXd4/X0eXtDQjgBoTF6fkFBK9iwl5l6tzOAn3xXXlvDGCE33fK0aublDlK5X1gco6F2cx8IUxg2hddbNG6Cc0FZDzPeAZNs0BLjyZvW14OVypLJpUWFzlbYIm5pQMm/d0DH+46t3yMQBxnuKZ6eJtvMK/Ie23OH0bySV6XYjv291H487mDu393svh3+AfPw385ZfCCjPBD9CqgnD0wwG7HwbPAHe9Nffv9/gEELLrnpdAp5xh84RcXXwIl7Zl63/q1BnJUqwpXvDdgsqKxYvUNvbz2Xu7+4XluQ6oeMBzbelss/+XijqY0Tbgp2rbfH0JvZvR3SdjNbZ23bfsbYd/4mQ==","sidebar_class_name":"post api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Bulk Cohort Member Create","permalink":"/docs/user-service/apis/cohort-members-controller-create-bulk-cohort-members"},"next":{"title":"Delete Cohort Member","permalink":"/docs/user-service/apis/cohort-members-controller-delete-cohort-member"}}');var o=t(74848),i=t(28453),a=t(57742),n=t.n(a),c=t(78178),d=t.n(c),m=t(19624),l=t.n(m),h=t(96226),p=t.n(h),b=(t(77675),t(19365),t(51107));const u={id:"cohort-members-controller-create-cohort-members",title:"Create Cohort Member",description:"Create Cohort Member",sidebar_label:"Create Cohort Member",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VU1v2zAM/SsGTxugNs2OvnXtDsUwrOjHYQiCgbGZWI0tuZKc1jP83wdKjmMn6ZAO26WpRfHpkXxPakCXZNBJrW5SiOFKZ9q4b1QsyNgrrZzReU7mZ2IIHY2iIKBEgwU5/ohnDSgsCGKoLJmbFAQYeq6koRRiZyoSIBXE8FyRqUGATTIqEOIGXF1ymnVGqhW0reiRUtrIhCRj+dyMMCVzYjImmFIhk5rQ/CWEI4XKvSt5Hsom6z7rtOYd+11ItHKkHIewLHOZ+O5PnqxWvHYArRdPlDjutuFZOUmWo4mfBQ9tn4SAlGxiZMm4EMNDRtF2d6SXkeu/o6IfZUpLrHIHMUArOvDLroM/CM0pBx3N2ofu1HES67D3JM7tUG6zXXfeqKXnMRfgpMtpX/vXTkPbBlhbamVD1z9dTPlnTDUkRiEzytBGCyIVBc+kka2ShKxdVnlen3umDlfsmHEiU7GUVEa62tsJfdqZ02tSEM/mrK29g/0J0RhGQEEu0+zmUlsvHHQZxDDhkieb6SR0JPRxEliypslsgpMHRO5ZjaH0MZ1+fFjKr1QfOKRz0GXlMm3kL69xXzvr/G7nkC+vWJTc/qGid5o4LsRdfKum3oDMY6k9v26s95lc2wyj2xzdUpviQGlXd4/X0eXtDQjgBoTF6fkFBK9iwl5l6tzOAn3xXXlvDGCE33fK0aublDlK5X1gco6F2cx8IUxg2hddbNG6Cc0FZDzPeAZNs0BLjyZvW14OVypLJpUWFzlbYIm5pQMm/d0DH+46t3yMQBxnuKZ6eJtvMK/Ie23OH0bySV6XYjv291H487mDu393svh3+AfPw385ZfCCjPBD9CqgnD0wwG7HwbPAHe9Nffv9/gEELLrnpdAp5xh84RcXXwIl7Zl63/q1BnJUqwpXvDdgsqKxYvUNvbz2Xu7+4XluQ6oeMBzbelss/+XijqY0Tbgp2rbfH0JvZvR3SdjNbZ23bfsbYd/4mQ==",sidebar_class_name:"post api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},f=void 0,v={},M=[];function C(e){const r={p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Create Cohort Member"}),"\n",(0,o.jsx)(n(),{method:"post",path:"/user/v1/cohortmember/create",context:"endpoint"}),"\n",(0,o.jsx)(r.p,{children:"Create Cohort Member"}),"\n",(0,o.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(d(),{parameters:[{name:"userId",required:!0,in:"query",schema:{type:"string"}},{name:"deviceid",in:"header",schema:{type:"string"}},{name:"academicyearid",in:"header",schema:{type:"string"}},{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,o.jsx)(l(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{cohortId:{type:"string",description:"The cohortId of the cohort members",default:""},cohortAcademicYearId:{type:"string",description:"cohortAcademicYearId",default:""},userId:{type:"string",description:"The userId of the cohort members",default:""}},required:["cohortId","cohortAcademicYearId","userId"],title:"CohortMembersDto"}}}}}),"\n",(0,o.jsx)(p(),{id:void 0,label:void 0,responses:{201:{description:"Cohort Member has been created successfully."}}})]})}function X(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(C,{...e})}):C(e)}}}]);