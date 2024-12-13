"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[8194],{26784:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>x,contentTitle:()=>f,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"user-service/apis/academicyears-controller-create-academic-years","title":"Create Academic Year","description":"Create Academic Year","source":"@site/docs/user-service/apis/academicyears-controller-create-academic-years.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/academicyears-controller-create-academic-years","permalink":"/docs/user-service/apis/academicyears-controller-create-academic-years","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Manoj L","lastUpdatedAt":1734087710000,"frontMatter":{"id":"academicyears-controller-create-academic-years","title":"Create Academic Year","description":"Create Academic Year","sidebar_label":"Create Academic Year","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVE1v2zAM/SsBz8qStF1b+NYmOxRDsaLpDkEQDIxNJ2psyZXkrJ7h/z5QyoeNtFh2yYf4RD4+PqoGXZBBJ7V6SCCCuxgTymVcERo71soZnWVkfsWG0NE+OuMoCCjQYE6OjIVoXoPCnCACRwqVkwkIkAoiWBMmZECAjdeUI0Q1uKpgpHVGqhU0zUKAobeSrLvXScUI/isNJRA5U5KAWCtHynEIiyKTsec8eLVa8dlJar18pdgxR8MdOknW4xwaN0FHpywEJGRjIwtO7I/3UAH0jnmRMXg2m836j4/9yQQaAaSS85LtgZ+nCgon99W/kx2h7XSUpsPhLd72L77eXPavrq+T/vL25qafJkl6jVdpPLokLlQWybmFjtD/L9SI1gznXTUPYrQ7ORZbCHDS+Vptx02chqYJiW2hlQ0jvRiO+KvLfH+vxxd741CmNy3jmKxNyyyrPEOHK7Zu1/Zc31JcGukq72v0t/pOb0hBNF+wXbvlQoFepyoIyMmtNa9Voa33Iro1RDAoLZnBdjTAdtlBEIP3hMw27FSLyZQdHjru8jkMEQv5naqTrdtt5V3p1trIP35vfPO8O8/Hrfu2H3BnS9oubfm9e9zy7nnu6LjwbOdKlWrf784c07Xc2DX2njJ0qTb5iX/Hzz8nvbunBxDAgobD0ZchhPcEY35PWAqeT45ezJ1cn0y0k/+gvKN3NygylMovmMk4FoY9Bx42ExiBgM7AD8Kx4dbskGgOdb1ESz9N1jR8/FaSqYIRtmgkLrnx+aIR+/myPxNpOZBAlGJm6YTl4e0EEB9T3lDVfbi3mJUMg0bUu+g4ZOm/cIIj4uQ15u04GP/px/QFBCx3r3quE75j8DcI/+kpac/UW9uf1ZChWpW4YmzIyUPCkgVt233j7b77wUrsQ6pqMew6f98sf3JzH16p67BMTXPAh9CnNw7rFtAs66Jpmr9T83YY","sidebar_class_name":"post api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/user-service/apis/shiksha-platform"},"next":{"title":"Get Academic Year","permalink":"/docs/user-service/apis/academicyears-controller-get-academic-year-by-id"}}');var s=t(74848),c=t(28453),i=t(57742),d=t.n(i),n=t(78178),o=t.n(n),p=t(19624),l=t.n(p),m=t(96226),y=t.n(m),u=(t(77675),t(19365),t(51107));const h={id:"academicyears-controller-create-academic-years",title:"Create Academic Year",description:"Create Academic Year",sidebar_label:"Create Academic Year",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1v2zAM/SsBz8qStF1b+NYmOxRDsaLpDkEQDIxNJ2psyZXkrJ7h/z5QyoeNtFh2yYf4RD4+PqoGXZBBJ7V6SCCCuxgTymVcERo71soZnWVkfsWG0NE+OuMoCCjQYE6OjIVoXoPCnCACRwqVkwkIkAoiWBMmZECAjdeUI0Q1uKpgpHVGqhU0zUKAobeSrLvXScUI/isNJRA5U5KAWCtHynEIiyKTsec8eLVa8dlJar18pdgxR8MdOknW4xwaN0FHpywEJGRjIwtO7I/3UAH0jnmRMXg2m836j4/9yQQaAaSS85LtgZ+nCgon99W/kx2h7XSUpsPhLd72L77eXPavrq+T/vL25qafJkl6jVdpPLokLlQWybmFjtD/L9SI1gznXTUPYrQ7ORZbCHDS+Vptx02chqYJiW2hlQ0jvRiO+KvLfH+vxxd741CmNy3jmKxNyyyrPEOHK7Zu1/Zc31JcGukq72v0t/pOb0hBNF+wXbvlQoFepyoIyMmtNa9Voa33Iro1RDAoLZnBdjTAdtlBEIP3hMw27FSLyZQdHjru8jkMEQv5naqTrdtt5V3p1trIP35vfPO8O8/Hrfu2H3BnS9oubfm9e9zy7nnu6LjwbOdKlWrf784c07Xc2DX2njJ0qTb5iX/Hzz8nvbunBxDAgobD0ZchhPcEY35PWAqeT45ezJ1cn0y0k/+gvKN3NygylMovmMk4FoY9Bx42ExiBgM7AD8Kx4dbskGgOdb1ESz9N1jR8/FaSqYIRtmgkLrnx+aIR+/myPxNpOZBAlGJm6YTl4e0EEB9T3lDVfbi3mJUMg0bUu+g4ZOm/cIIj4uQ15u04GP/px/QFBCx3r3quE75j8DcI/+kpac/UW9uf1ZChWpW4YmzIyUPCkgVt233j7b77wUrsQ6pqMew6f98sf3JzH16p67BMTXPAh9CnNw7rFtAs66Jpmr9T83YY",sidebar_class_name:"post api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},f=void 0,x={},b=[];function j(e){const a={p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Create Academic Year"}),"\n",(0,s.jsx)(d(),{method:"post",path:"/user/v1/academicyears/create",context:"endpoint"}),"\n",(0,s.jsx)(a.p,{children:"Create Academic Year"}),"\n",(0,s.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(o(),{parameters:[{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,s.jsx)(l(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{startDate:{type:"string",description:"startDate",example:"YYYY-MM-DD"},endDate:{type:"string",description:"endDate",example:"YYYY-MM-DD"},createdBy:{type:"string",description:"createdBy",example:"eff008a8-2573-466d-b877-fddf6a4fc13e"},updatedBy:{type:"string",description:"updatedBy",example:"eff008a8-2573-466d-b877-fddf6a4fc13e"}},required:["startDate","endDate","createdBy","updatedBy"],title:"AcademicYearDto"}}}}}),"\n",(0,s.jsx)(y(),{id:void 0,label:void 0,responses:{201:{description:"Academic Year Created Successfully"}}})]})}function k(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}}}]);