"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[7944],{87310:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"notifications-service/api-docs","title":"API Docs","description":"Method: POST","source":"@site/docs/notifications-service/7_api-docs.md","sourceDirName":"notifications-service","slug":"/notifications-service/api-docs","permalink":"/docs/notifications-service/api-docs","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Manoj L","lastUpdatedAt":1734087710000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Database Schema","permalink":"/docs/notifications-service/database-schema"},"next":{"title":"Devops","permalink":"/docs/notifications-service/devops"}}');var t=s(74848),c=s(28453);const r={sidebar_position:7},o="API Docs",l={},d=[{value:"FCM Push Notification API (Internal Call for Sending Push Notifications)",id:"fcm-push-notification-api-internal-call-for-sending-push-notifications",level:4}];function a(n){const e={br:"br",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"api-docs",children:"API Docs"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Method:"})," POST",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"URL:"})," ",(0,t.jsx)(e.code,{children:"http://localhost:4000/notification-templates"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"accept: */*"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Request Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "context": "EVENT",\n  "title": "This is title",\n  "key": "OnAfterAttendeeEnrolled",\n  "status": "published",\n  "replacementTags": [\n    {\n      "name": "campaign.first_name",\n      "description": "Name of Campaign Promoter"\n    }\n  ],\n  "email": {\n    "subject": "New Event",\n    "body": "This is body of {#var0#} Notification"\n  },\n  "push": {\n    "subject": "New Event",\n    "body": "This is body of Push"\n  },\n  "sms": {\n    "subject": "This is SMS subject",\n    "body": "This is body of SMS"\n  }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Status:"})," OK (200)"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Response Body:"}),"\n[]"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Method:"})," POST",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"URL:"})," ",(0,t.jsx)(e.code,{children:"http://localhost:4000/notification-templates/list"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"accept: */*"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Request Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "filters": {\n    "context": "TestingTemplate"\n  }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Status:"})," OK (200)",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"X-Powered-By: Express"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json; charset=utf-8"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Length: 980"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:'ETag: W/"3d4-nqj4XvyoWDgsutcgyHm01bUJXY0"'})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Date: Wed, 26 Jun 2024 13:07:24 GMT"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Connection: keep-alive"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Keep-Alive: timeout=5"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Response Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "id": "api.template.list",\n  "ver": "1.0",\n  "ts": "2024-06-26T13:07:24.546Z",\n  "params": {\n    "resmsgid": "a998d73e-f684-4cc4-b167-a510467658f6",\n    "status": "successful",\n    "err": null,\n    "errmsg": null,\n    "successmessage": "fetched successfully"\n  },\n  "responseCode": 200,\n  "result": [\n    {\n      "actionId": 15,\n      "title": "This is title",\n      "createdOn": "2024-06-26T13:05:10.881Z",\n      "updatedOn": "2024-06-26T13:05:10.881Z",\n      "key": "OnAfterAttendeeEnrolled",\n      "status": "published",\n      "createdBy": "016badad-22b0-4566-88e9-aab1b35b1dfc",\n      "updatedBy": null,\n      "context": "TestingTemplate",\n      "replacementTags": [\n        {\n          "name": "campaign.first_name",\n          "description": "Name of Campaign Promoter"\n        }\n      ],\n      "templates": {\n        "email": {\n          "language": "en",\n          "subject": "New Event",\n          "body": "This is body of Email",\n          "createdOn": "2024-06-26T13:05:10.891Z"\n        },\n        "push": {\n          "language": "en",\n          "subject": "New Event",\n          "body": "This is body of Push",\n          "createdOn": "2024-06-26T13:05:10.900Z"\n        },\n        "sms": {\n          "language": "en",\n          "subject": "This is SMS subject",\n          "body": "This is body of SMS",\n          "createdOn": "2024-06-26T13:05:10.903Z"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Method:"})," PATCH",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"URL:"})," ",(0,t.jsx)(e.code,{children:"http://localhost:4000/notification-templates/:template-id"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"accept: */*"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Reqquest Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "title": "This is title",\n  "key": "OnAfterAttendeeEnrolled",\n  "replacementTags": [\n    {\n      "name": "campaign.first_name",\n      "description": "Name of Campaign Promoter"\n    }\n  ],\n  "language": "en",\n  "status": "published",\n  "email": {\n    "subject": "New Event",\n    "body": "This is body of Email"\n  },\n  "push": {\n    "subject": "New Event",\n    "body": "This is body of Push"\n  },\n  "sms": {\n    "subject": "This is SMS subject",\n    "body": "This is body of SMS"\n  }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Status:"})," OK (200)",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"X-Powered-By: Express"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json; charset=utf-8"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Length: 257"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:'ETag: W/"101-C30/lKHFcp2E5+SWRvOViofXpVQ"'})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Date: Wed, 26 Jun 2024 13:42:47 GMT"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Connection: keep-alive"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Keep-Alive: timeout=5"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Response Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "id": "api.template.update",\n  "ver": "1.0",\n  "ts": "2024-06-26T13:42:47.683Z",\n  "params": {\n    "resmsgid": "4b5b6a1c-d262-429c-9094-bdb4afa9bb08",\n    "status": "successful",\n    "err": null,\n    "errmsg": null,\n    "successmessage": "Updated Successfully"\n  },\n  "responseCode": 200,\n  "result": {\n    "id": 15\n  }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Method:"})," DELETE",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"URL:"})," ",(0,t.jsx)(e.code,{children:"http://localhost:4000/notification-events/:templat-id"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"accept: */*"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Response Body:"})}),"\n","\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Method:"})," POST",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"URL:"})," ",(0,t.jsx)(e.code,{children:"http://localhost:4000/notification/send"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"accept: */*"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Request Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "isQueue": false,\n  "context": "EVENT2",\n  "replacements": ["John Doe", "How to use UI tools"],\n  "email": {\n    "receipients": ["email1@example.com"]\n  },\n  "push": {\n    "receipients": ["d2ihU3WpBFeoea66kOLdzM9hiZJf1Iav9b0EvXTt4"]\n  },\n  "sms": {\n    "receipients": ["1234567890"]\n  }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Status:"})," OK (200)",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"X-Powered-By: Express"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json; charset=utf-8"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Length: 951"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:'ETag: W/"3b7-qhOi/94Jy44ipStMlQQsCdeFpUs"'})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Date: Wed, 26 Jun 2024 13:53:44 GMT"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Connection: keep-alive"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Keep-Alive: timeout=5"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Response Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "id": "api.send.notification",\n  "ver": "1.0",\n  "ts": "2024-06-26T13:53:44.879Z",\n  "params": {\n    "resmsgid": "531cccb5-e5da-40bb-9eb2-5a31b4689817",\n    "status": "successful",\n    "err": null,\n    "errmsg": null,\n    "successmessage": "Notification process completed"\n  },\n  "responseCode": 200,\n  "result": [\n    {\n      "status": "success",\n      "data": [\n        {\n          "recipient": "email1@example.com",\n          "status": "success",\n          "result": "Email notification sent successfully"\n        }\n      ]\n    },\n    {\n      "status": "success",\n      "data": [\n        {\n          "recipient": "1234567890",\n          "status": "error",\n          "error": "SMS not sent: {\\"response\\":{\\"statusCode\\":400,\\"message\\":\\"Invalid Mobile Number\\",\\"error\\":\\"Bad Request\\"},\\"status\\":400,\\"options\\":{},\\"message\\":\\"Invalid Mobile Number\\",\\"name\\":\\"BadRequestException\\"}"\n        }\n      ]\n    },\n    {\n      "status": "success",\n      "data": [\n        {\n          "recipient": "d2ihU3WpBFeoeXWhzM9hiZJf1Iav9b0EvXTt4",\n          "status": "error",\n          "error": "Error: Invalid token"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Method:"})," POST",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"URL:"})," ",(0,t.jsx)(e.code,{children:"http://localhost:4000/notification/sendTopicNotification"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"accept: */*"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Request Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "topic_name": "test2",\n  "title": "Hi...",\n  "body": "First Demo Push....",\n  "image": "https://picsum.photos/200",\n  "navigate_to": "https://google.com/"\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Response Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "id": "api.send.notification",\n  "ver": "1.0",\n  "ts": "2024-06-26T13:53:44.879Z",\n  "params": {\n    "resmsgid": "531cccb5-e5da-40bb-9eb2-5a31b4689817",\n    "status": "successful",\n    "err": null,\n    "errmsg": null,\n    "successmessage": "Notification sent successfully."\n  },\n  "responseCode": 200,\n  "result": [\n    {\n      "message": "Notification sent successfully.",\n      "status": 200\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h4,{id:"fcm-push-notification-api-internal-call-for-sending-push-notifications",children:"FCM Push Notification API (Internal Call for Sending Push Notifications)"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Method:"})," POST",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"URL:"})," ",(0,t.jsx)(e.code,{children:"https://fcm.googleapis.com/v1/projects/PROJECT_ID/messages:send"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Headers:"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Authorization: Bearer YOUR_OAUTH_ACCESS_TOKEN"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Request Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "message": {\n    "token": "DEVICE_REGISTRATION_TOKEN",\n    "notification": {\n      "title": "Join Us Tomorrow for a Free Live Webinar on UI Tools!",\n      "body": "Don\u2019t miss out! Tomorrow at 10 AM, we\u2019re hosting a live session on the best UI tools. Reserve your spot by clicking here.",\n      "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&h=600"\n    },\n    "data": {\n      "click_action": "FLUTTER_NOTIFICATION_CLICK",\n      "link": "https://example.com/webinar-registration"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Response Body:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "name": "projects/PROJECT_ID/messages/0:1618924844212%6e23a5c0f9e1a1e8"\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}}}]);