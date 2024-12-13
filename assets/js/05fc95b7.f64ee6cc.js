"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[536],{66897:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>z,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"user-service/apis/cohort-controller-search-cohort","title":"Search Cohort","description":"Search Cohort","source":"@site/docs/user-service/apis/cohort-controller-search-cohort.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/cohort-controller-search-cohort","permalink":"/docs/user-service/apis/cohort-controller-search-cohort","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Manoj L","lastUpdatedAt":1734087710000,"frontMatter":{"id":"cohort-controller-search-cohort","title":"Search Cohort","description":"Search Cohort","sidebar_label":"Search Cohort","hide_title":true,"hide_table_of_contents":true,"api":"eJytVktv2zgQ/ivCnNXYWbQX3fJogWCLxqiTw8IIFmNpFLGhRJWk0qqG//tiSOphSbt1gPXBgObFjzPfzPAAqiaNVqjqLoMEblShtL1RldVKStJ/G0KdFl4MMdSosSRL2kCyO0CFJUECmGJGpUhbQi0yiEFUkEBBmJGGGExaUImQHMC2Ndsbq0X1DMdj3IewVGFl3+T8FIOm7w0Ze62yli34U2jKILG6oRhSVVmqLKuwrqVI3UVX34yqWDYLrfbfKHXX1JwWK8iwVopS2JFZ1ZR7hy0jk2pRc1BI4LMzO8ag8tzQGQ733u4YQy6kz+lhYvIpKGJAKe9zl/T/BtsY0lzKab6mhz8a0tFd5uQ5NtJCAgwldaU+J4InxVKMjg9/EZ6F5SrYR+ywFNCT5HdhHgqK2DJSeWQLitKOtafBatRUhRueBtg4zQTA7inuzkWtsWWGWirNIp+D5BykbPEbpMaibRZYwe5e9+8B3gabo9GCbgp8y3YMLRNskdozfG6DKbvtpUpfzvC5ZjtHx8ZYVX4SJDPz5ZQFfQPMkzP1mqSJbzzMil3XMyPyzzgcODhiT0hvX6UFrFwCYSWDDR2+8b3awvGJs85gZtXd+krSTyxr9t11R6NJ4Q1VnVzST7F+Og1DZ4TSt/TWzfxbqziIi2JqVRnPjz/W6znkMAqkMK7K75dsrjGLwry+YKMPS0Z3lSVdoYy2pF9JRx+1VvrCdxY+89IJZzHqSdoc6qhfVSXZQvFOq5Xxq8sWkMCKi716vVz5Wq/8guMyuhON7xxDaaOFbbe8IvzFMU3JmHdWvVA1SjfW4k9qZ2srrLWrxhZKi19u8bhr8PL5Oqytj12V+zWzHhbI+mQzdJN96JlhVg+y6ewdNAFS/z3MwV0nHNjVW3UzaGzTTYtR9w7jYBB2zT4CPO/mY98Hpzw/ckZz5TId2LktxIspMNpItLnS5XwjfX28ja42dxADl9ILLy/W4J8CmNpwIFOiRFfGkJUpe04C98W29NOuaomiYgY3WrLOE8tPET75sq+MY5Wj11MMBdMw2cHhsEdDj1oejyz+3pBuPeleUQvcu5bn6wcu8crPhGFFBkmO0tAMXv/QAYiXsb5Qu/RQe0XZkN82/98po7fcSXyvvfFR3j346dlZzB5o/L7re3hzv31gRoWHXqky9tH4A2L37yAph9T1ipMdQGL13OAz2/qY/PsHYgm65A==","sidebar_class_name":"post api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"My Cohort","permalink":"/docs/user-service/apis/cohort-controller-get-cohorts-hierarachy-data"},"next":{"title":"Delete Cohort","permalink":"/docs/user-service/apis/cohort-controller-update-cohort-status"}}');var i=r(74848),o=r(28453),a=r(57742),c=r.n(a),d=r(78178),n=r.n(d),p=r(19624),h=r.n(p),l=r(96226),u=r.n(l),y=(r(77675),r(19365),r(51107));const z={id:"cohort-controller-search-cohort",title:"Search Cohort",description:"Search Cohort",sidebar_label:"Search Cohort",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktv2zgQ/ivCnNXYWbQX3fJogWCLxqiTw8IIFmNpFLGhRJWk0qqG//tiSOphSbt1gPXBgObFjzPfzPAAqiaNVqjqLoMEblShtL1RldVKStJ/G0KdFl4MMdSosSRL2kCyO0CFJUECmGJGpUhbQi0yiEFUkEBBmJGGGExaUImQHMC2Ndsbq0X1DMdj3IewVGFl3+T8FIOm7w0Ze62yli34U2jKILG6oRhSVVmqLKuwrqVI3UVX34yqWDYLrfbfKHXX1JwWK8iwVopS2JFZ1ZR7hy0jk2pRc1BI4LMzO8ag8tzQGQ733u4YQy6kz+lhYvIpKGJAKe9zl/T/BtsY0lzKab6mhz8a0tFd5uQ5NtJCAgwldaU+J4InxVKMjg9/EZ6F5SrYR+ywFNCT5HdhHgqK2DJSeWQLitKOtafBatRUhRueBtg4zQTA7inuzkWtsWWGWirNIp+D5BykbPEbpMaibRZYwe5e9+8B3gabo9GCbgp8y3YMLRNskdozfG6DKbvtpUpfzvC5ZjtHx8ZYVX4SJDPz5ZQFfQPMkzP1mqSJbzzMil3XMyPyzzgcODhiT0hvX6UFrFwCYSWDDR2+8b3awvGJs85gZtXd+krSTyxr9t11R6NJ4Q1VnVzST7F+Og1DZ4TSt/TWzfxbqziIi2JqVRnPjz/W6znkMAqkMK7K75dsrjGLwry+YKMPS0Z3lSVdoYy2pF9JRx+1VvrCdxY+89IJZzHqSdoc6qhfVSXZQvFOq5Xxq8sWkMCKi716vVz5Wq/8guMyuhON7xxDaaOFbbe8IvzFMU3JmHdWvVA1SjfW4k9qZ2srrLWrxhZKi19u8bhr8PL5Oqytj12V+zWzHhbI+mQzdJN96JlhVg+y6ewdNAFS/z3MwV0nHNjVW3UzaGzTTYtR9w7jYBB2zT4CPO/mY98Hpzw/ckZz5TId2LktxIspMNpItLnS5XwjfX28ja42dxADl9ILLy/W4J8CmNpwIFOiRFfGkJUpe04C98W29NOuaomiYgY3WrLOE8tPET75sq+MY5Wj11MMBdMw2cHhsEdDj1oejyz+3pBuPeleUQvcu5bn6wcu8crPhGFFBkmO0tAMXv/QAYiXsb5Qu/RQe0XZkN82/98po7fcSXyvvfFR3j346dlZzB5o/L7re3hzv31gRoWHXqky9tH4A2L37yAph9T1ipMdQGL13OAz2/qY/PsHYgm65A==",sidebar_class_name:"post api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},m=void 0,f={},b=[];function S(t){const e={p:"p",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Search Cohort"}),"\n",(0,i.jsx)(c(),{method:"post",path:"/user/v1/cohort/search",context:"endpoint"}),"\n",(0,i.jsx)(e.p,{children:"Search Cohort"}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(n(),{parameters:[{name:"academicyearid",in:"header",schema:{type:"string"}},{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,i.jsx)(h(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{limit:{type:"number",description:"Limit"},offset:{type:"number",description:"Offset"},filters:{description:"Filters",allOf:[{type:"object",properties:{userId:{type:"string",description:"User Id",default:""},cohortId:{type:"string",description:"Cohort Id",default:""},academicYearId:{type:"string",description:"Academic Year Id",default:""},name:{type:"string",description:"The name of the cohort",default:""},parentId:{description:"Parent Id",default:[],type:"array",items:{type:"string"}},type:{type:"string",description:"The type of the cohort",default:""},status:{description:"The status of the cohort",default:[],type:"array",items:{type:"string"}},states:{type:"string",description:"State"},districts:{type:"string",description:"District"},blocks:{type:"string",description:"Block"},customFieldsName:{type:"object",description:"The customFieldsName of the cohort"}},required:["userId","cohortId","academicYearId","name","parentId","type","status","customFieldsName"],title:"filtersProperty"}]},sort:{description:"Sort",example:["name","asc"],type:"array",items:{type:"string"}}},required:["limit","offset","filters"],title:"CohortSearchDto"}}}}}),"\n",(0,i.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Cohort list"},400:{description:"Bad request."},500:{description:"Internal Server Error."}}})]})}function g(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(S,{...t})}):S(t)}}}]);