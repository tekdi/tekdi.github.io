"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[9134],{36200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>x,default:()=>f,frontMatter:()=>h,metadata:()=>a,toc:()=>b});const a=JSON.parse('{"id":"attendance-service/apis/attendance-controller-multiple-attendance","title":"Create Bulk Attendance","description":"Create Bulk Attendance","source":"@site/docs/attendance-service/apis/attendance-controller-multiple-attendance.api.mdx","sourceDirName":"attendance-service/apis","slug":"/attendance-service/apis/attendance-controller-multiple-attendance","permalink":"/docs/attendance-service/apis/attendance-controller-multiple-attendance","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Ashwin Date","lastUpdatedAt":1743614200000,"frontMatter":{"id":"attendance-controller-multiple-attendance","title":"Create Bulk Attendance","description":"Create Bulk Attendance","sidebar_label":"Create Bulk Attendance","hide_title":true,"hide_table_of_contents":true,"api":"eJzFlktv20YQgP/KYk4tQEakTOvBmx85GC0Qw3ZOhlGMyJG1MV/ZXSphBf33YpYUX2Ls9lTdxJ2d5zcze4C8IIVG5tldDCFcGUNZjFlEN3lmVJ4kpP5Ky8TIIqHuEBwoUGFKhpSG8PkAGaYEIZSa1F0MDij6XkpFMYRGleSAzCCE7yWpChyISUdKFmy1vSPaGw7oaEcpQngA+olpkbBmf35BweVi6dJqvXH9eXzhYnC5cIP5YuEH/jLwPA8cMFXB0toomb3C8ei0rhnKMDOS9VtndoQxqYG18eWXOg7S5jqPK5YYhxXlmaHM8BEWRSIjm8rZN82RHc5V55tvFBlOn+LEG0na3m0ze4uGzl0Zp+xpRyJGQyLfCrMj0d0XMhPbXKVoRFVVlZumbhzDsfH0p+EqnwXanv47y43wuXHWpKO8mIjg6Ng69xAKDyPVf0ptdbJcP6KYDMpEd8VFpZAxkoZS/XFyGyanXMKBOx9H3vPqPHi+sMUyMRACK1eUonqbtJugkaaM+1azMt2Qsod59vrrU5ni63R+UzJ4i2aKZAd0lUVPMp2+qUlrWRN71j895J+79u6F/eKAkcb26NdBhW+fvsBxrGFEep/LjsIzVno2rsvkbWTDOY0JW+4bRWhoKGZ7sUxTVBWE8LmW5j4Rk9Lj0t9aAikW9PHNPSYlTfU0zL154Ppz11sPwg4hjjYrb7m6cL2Fv3aD1eXW3cxx6VIUxNu5T0tceL3shBDlu1wZMRO05+HTNh1oSrZiJjTTk03kkSf1qR1gHgRLRC9yA9/33SDarN11EPvuerVe0XaxXl6iPyx1CNBh3fVJR7M3oNdrae1kO0i7bx2bvW8nJFsUX472xw7oIs90Xe25551Pki5iURY8J2OhyygirbdlklRMzNzz3723Qy02RJmIbJmHCj6xhmDK8jXG4qFeGSxzOSVzlxlSGSZCk9qTEqRUrmyrGXzlbQpD8oe3a+wEcycG4KVkdjnXtci1HYJodhDCDAs52/uzroyzzZjZ2hE2/cJ/olJJUz3y7mrWkw3dNfkb9YcEFvIPqs72abNvr0qzy5X8225EGx5vxYdun34+7faJXmk56PfJ+OOAl1MHnD68R34rNGC7/fr/Ec6p3OY2xc246yF5dX8nbvhFFtmMjsG4ur/TvJV6Nx5J7WU9lUg1xvxPp1mCEe97LgwTk6ItbVO8X1I2sNmSwNWYFQnKzC56lfBZDeAzY8IejGaJAyMMXxzYMbnhMxwOG9T0VSXHI3+un41cwVhq3CS8SbaYaDpzp32OwW8PzdL5XZy/Lye9fqOq/4Bt5jgAvwL3qCQb5g45OifU/5tH79vtvU47y86hOb2ptbhPrKCTOHtysq/tHLj/8vjEaW6ermnOxILCH4w4/qhdyq2ntsvttwMkmL2WNdO1Tv79A8u8JZs=","sidebar_class_name":"post api-method","info_path":"docs/attendance-service/apis/attendance-api-collection","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Create Attendance","permalink":"/docs/attendance-service/apis/attendance-controller-create-attendance"},"next":{"title":"Attendance Search","permalink":"/docs/attendance-service/apis/attendance-controller-search-attendance-new"}}');var r=n(74848),d=n(28453),s=n(57742),c=n.n(s),i=n(78178),l=n.n(i),o=n(19624),p=n.n(o),u=n(96226),m=n.n(u),y=(n(77675),n(19365),n(51107));const h={id:"attendance-controller-multiple-attendance",title:"Create Bulk Attendance",description:"Create Bulk Attendance",sidebar_label:"Create Bulk Attendance",hide_title:!0,hide_table_of_contents:!0,api:"eJzFlktv20YQgP/KYk4tQEakTOvBmx85GC0Qw3ZOhlGMyJG1MV/ZXSphBf33YpYUX2Ls9lTdxJ2d5zcze4C8IIVG5tldDCFcGUNZjFlEN3lmVJ4kpP5Ky8TIIqHuEBwoUGFKhpSG8PkAGaYEIZSa1F0MDij6XkpFMYRGleSAzCCE7yWpChyISUdKFmy1vSPaGw7oaEcpQngA+olpkbBmf35BweVi6dJqvXH9eXzhYnC5cIP5YuEH/jLwPA8cMFXB0toomb3C8ei0rhnKMDOS9VtndoQxqYG18eWXOg7S5jqPK5YYhxXlmaHM8BEWRSIjm8rZN82RHc5V55tvFBlOn+LEG0na3m0ze4uGzl0Zp+xpRyJGQyLfCrMj0d0XMhPbXKVoRFVVlZumbhzDsfH0p+EqnwXanv47y43wuXHWpKO8mIjg6Ng69xAKDyPVf0ptdbJcP6KYDMpEd8VFpZAxkoZS/XFyGyanXMKBOx9H3vPqPHi+sMUyMRACK1eUonqbtJugkaaM+1azMt2Qsod59vrrU5ni63R+UzJ4i2aKZAd0lUVPMp2+qUlrWRN71j895J+79u6F/eKAkcb26NdBhW+fvsBxrGFEep/LjsIzVno2rsvkbWTDOY0JW+4bRWhoKGZ7sUxTVBWE8LmW5j4Rk9Lj0t9aAikW9PHNPSYlTfU0zL154Ppz11sPwg4hjjYrb7m6cL2Fv3aD1eXW3cxx6VIUxNu5T0tceL3shBDlu1wZMRO05+HTNh1oSrZiJjTTk03kkSf1qR1gHgRLRC9yA9/33SDarN11EPvuerVe0XaxXl6iPyx1CNBh3fVJR7M3oNdrae1kO0i7bx2bvW8nJFsUX472xw7oIs90Xe25551Pki5iURY8J2OhyygirbdlklRMzNzz3723Qy02RJmIbJmHCj6xhmDK8jXG4qFeGSxzOSVzlxlSGSZCk9qTEqRUrmyrGXzlbQpD8oe3a+wEcycG4KVkdjnXtci1HYJodhDCDAs52/uzroyzzZjZ2hE2/cJ/olJJUz3y7mrWkw3dNfkb9YcEFvIPqs72abNvr0qzy5X8225EGx5vxYdun34+7faJXmk56PfJ+OOAl1MHnD68R34rNGC7/fr/Ec6p3OY2xc246yF5dX8nbvhFFtmMjsG4ur/TvJV6Nx5J7WU9lUg1xvxPp1mCEe97LgwTk6ItbVO8X1I2sNmSwNWYFQnKzC56lfBZDeAzY8IejGaJAyMMXxzYMbnhMxwOG9T0VSXHI3+un41cwVhq3CS8SbaYaDpzp32OwW8PzdL5XZy/Lye9fqOq/4Bt5jgAvwL3qCQb5g45OifU/5tH79vtvU47y86hOb2ptbhPrKCTOHtysq/tHLj/8vjEaW6ermnOxILCH4w4/qhdyq2ntsvttwMkmL2WNdO1Tv79A8u8JZs=",sidebar_class_name:"post api-method",info_path:"docs/attendance-service/apis/attendance-api-collection",custom_edit_url:null},x=void 0,k={},b=[];function v(e){const t={p:"p",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Create Bulk Attendance"}),"\n",(0,r.jsx)(c(),{method:"post",path:"/api/v1/attendance/bulkAttendance",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Create Bulk Attendance"}),"\n",(0,r.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(l(),{parameters:[{name:"userId",required:!0,in:"query",description:"userId required",schema:{example:"123e4567-e89b-12d3-a456-426614174000",type:"string"}},{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,r.jsx)(p(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{attendanceDate:{type:"string",description:"The date of the attendance in format yyyy-mm-dd"},contextId:{type:"string"},context:{type:"string",description:"The context of the attendance"},scope:{type:"string"},userAttendance:{description:"List of user attendance details",type:"array",items:{type:"object",properties:{userId:{type:"string"},attendance:{type:"string",description:"The attendance of the attendance",default:""},remark:{type:"string"},latitude:{type:"number"},longitude:{type:"number"},image:{type:"string"},metaData:{type:"string"},syncTime:{type:"string"},session:{type:"string"}},required:["userId","attendance"],title:"UserAttendanceDTO"}}},required:["attendanceDate","contextId","context","userAttendance"],title:"BulkAttendanceDTO"},examples:{CreateBulkAttendance:{summary:"Example for CreateBulkAttendance",description:"Detailed example for CreateBulkAttendance",value:{attendanceDate:"2024-12-09",contextId:"dcb80783-0619-485f-b2a7-ec4df21e7a60",context:"cohort / event",scope:"self / student",userAttendance:[{userId:"2447aa0c-4111-4cb9-94d1-9898ef6975a1",attendance:"",remark:"string",latitude:0,longitude:0,image:"string",metaData:"string",syncTime:"string",session:"string"}]}}}}}}}),"\n",(0,r.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Attendance updated successfully"},201:{description:"Attendance has been created successfully."},400:{description:"Bad Request"},500:{description:"Internal server error"}}})]})}function f(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}}}]);