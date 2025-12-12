---
sidebar_position: 7
---

# API Docs

**Method:** POST  
**URL:** `http://localhost:4000/notification-templates`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "context": "EVENT",
  "title": "This is title",
  "key": "OnAfterAttendeeEnrolled",
  "status": "published",
  "replacementTags": [
    {
      "name": "campaign.first_name",
      "description": "Name of Campaign Promoter"
    }
  ],
  "email": {
    "subject": "New Event",
    "body": "This is body of {#var0#} Notification"
  },
  "push": {
    "subject": "New Event",
    "body": "This is body of Push"
  },
  "sms": {
    "subject": "This is SMS subject",
    "body": "This is body of SMS"
  }
}
```

**Status:** OK (200)

**Response Body:**
[]

**Method:** POST  
**URL:** `http://localhost:4000/notification-templates/list`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "filters": {
    "context": "TestingTemplate"
  }
}
```

**Status:** OK (200)  
**Headers:**

- `X-Powered-By: Express`
- `Content-Type: application/json; charset=utf-8`
- `Content-Length: 980`
- `ETag: W/"3d4-nqj4XvyoWDgsutcgyHm01bUJXY0"`
- `Date: Wed, 26 Jun 2024 13:07:24 GMT`
- `Connection: keep-alive`
- `Keep-Alive: timeout=5`

**Response Body:**

```json
{
  "id": "api.template.list",
  "ver": "1.0",
  "ts": "2024-06-26T13:07:24.546Z",
  "params": {
    "resmsgid": "a998d73e-f684-4cc4-b167-a510467658f6",
    "status": "successful",
    "err": null,
    "errmsg": null,
    "successmessage": "fetched successfully"
  },
  "responseCode": 200,
  "result": [
    {
      "actionId": 15,
      "title": "This is title",
      "createdOn": "2024-06-26T13:05:10.881Z",
      "updatedOn": "2024-06-26T13:05:10.881Z",
      "key": "OnAfterAttendeeEnrolled",
      "status": "published",
      "createdBy": "016badad-22b0-4566-88e9-aab1b35b1dfc",
      "updatedBy": null,
      "context": "TestingTemplate",
      "replacementTags": [
        {
          "name": "campaign.first_name",
          "description": "Name of Campaign Promoter"
        }
      ],
      "templates": {
        "email": {
          "language": "en",
          "subject": "New Event",
          "body": "This is body of Email",
          "createdOn": "2024-06-26T13:05:10.891Z"
        },
        "push": {
          "language": "en",
          "subject": "New Event",
          "body": "This is body of Push",
          "createdOn": "2024-06-26T13:05:10.900Z"
        },
        "sms": {
          "language": "en",
          "subject": "This is SMS subject",
          "body": "This is body of SMS",
          "createdOn": "2024-06-26T13:05:10.903Z"
        }
      }
    }
  ]
}
```

**Method:** PATCH  
**URL:** `http://localhost:4000/notification-templates/:template-id`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Reqquest Body:**

```json
{
  "title": "This is title",
  "key": "OnAfterAttendeeEnrolled",
  "replacementTags": [
    {
      "name": "campaign.first_name",
      "description": "Name of Campaign Promoter"
    }
  ],
  "language": "en",
  "status": "published",
  "email": {
    "subject": "New Event",
    "body": "This is body of Email"
  },
  "push": {
    "subject": "New Event",
    "body": "This is body of Push"
  },
  "sms": {
    "subject": "This is SMS subject",
    "body": "This is body of SMS"
  }
}
```

**Status:** OK (200)  
**Headers:**

- `X-Powered-By: Express`
- `Content-Type: application/json; charset=utf-8`
- `Content-Length: 257`
- `ETag: W/"101-C30/lKHFcp2E5+SWRvOViofXpVQ"`
- `Date: Wed, 26 Jun 2024 13:42:47 GMT`
- `Connection: keep-alive`
- `Keep-Alive: timeout=5`

**Response Body:**

```json
{
  "id": "api.template.update",
  "ver": "1.0",
  "ts": "2024-06-26T13:42:47.683Z",
  "params": {
    "resmsgid": "4b5b6a1c-d262-429c-9094-bdb4afa9bb08",
    "status": "successful",
    "err": null,
    "errmsg": null,
    "successmessage": "Updated Successfully"
  },
  "responseCode": 200,
  "result": {
    "id": 15
  }
}
```

**Method:** DELETE  
**URL:** `http://localhost:4000/notification-events/:templat-id`  
**Headers:**

- `accept: */*`

**Response Body:**
{}

**Method:** POST  
**URL:** `http://localhost:4000/notification/send`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "isQueue": false,
  "context": "EVENT2",
  "replacements": ["John Doe", "How to use UI tools"],
  "email": {
    "receipients": ["email1@example.com"]
  },
  "push": {
    "receipients": ["d2ihU3WpBFeoea66kOLdzM9hiZJf1Iav9b0EvXTt4"]
  },
  "sms": {
    "receipients": ["1234567890"]
  }
}
```

**Status:** OK (200)  
**Headers:**

- `X-Powered-By: Express`
- `Content-Type: application/json; charset=utf-8`
- `Content-Length: 951`
- `ETag: W/"3b7-qhOi/94Jy44ipStMlQQsCdeFpUs"`
- `Date: Wed, 26 Jun 2024 13:53:44 GMT`
- `Connection: keep-alive`
- `Keep-Alive: timeout=5`

**Response Body:**

```json
{
  "id": "api.send.notification",
  "ver": "1.0",
  "ts": "2024-06-26T13:53:44.879Z",
  "params": {
    "resmsgid": "531cccb5-e5da-40bb-9eb2-5a31b4689817",
    "status": "successful",
    "err": null,
    "errmsg": null,
    "successmessage": "Notification process completed"
  },
  "responseCode": 200,
  "result": [
    {
      "status": "success",
      "data": [
        {
          "recipient": "email1@example.com",
          "status": "success",
          "result": "Email notification sent successfully"
        }
      ]
    },
    {
      "status": "success",
      "data": [
        {
          "recipient": "1234567890",
          "status": "error",
          "error": "SMS not sent: {\"response\":{\"statusCode\":400,\"message\":\"Invalid Mobile Number\",\"error\":\"Bad Request\"},\"status\":400,\"options\":{},\"message\":\"Invalid Mobile Number\",\"name\":\"BadRequestException\"}"
        }
      ]
    },
    {
      "status": "success",
      "data": [
        {
          "recipient": "d2ihU3WpBFeoeXWhzM9hiZJf1Iav9b0EvXTt4",
          "status": "error",
          "error": "Error: Invalid token"
        }
      ]
    }
  ]
}
```

**Method:** POST  
**URL:** `http://localhost:4000/notification/sendTopicNotification`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "topic_name": "test2",
  "title": "Hi...",
  "body": "First Demo Push....",
  "image": "https://picsum.photos/200",
  "navigate_to": "https://google.com/"
}
```

**Response Body:**

```json
{
  "id": "api.send.notification",
  "ver": "1.0",
  "ts": "2024-06-26T13:53:44.879Z",
  "params": {
    "resmsgid": "531cccb5-e5da-40bb-9eb2-5a31b4689817",
    "status": "successful",
    "err": null,
    "errmsg": null,
    "successmessage": "Notification sent successfully."
  },
  "responseCode": 200,
  "result": [
    {
      "message": "Notification sent successfully.",
      "status": 200
    }
  ]
}
```

#### FCM Push Notification API (Internal Call for Sending Push Notifications)

**Method:** POST  
**URL:** `https://fcm.googleapis.com/v1/projects/PROJECT_ID/messages:send`  
**Headers:**

- `Authorization: Bearer YOUR_OAUTH_ACCESS_TOKEN`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "message": {
    "token": "DEVICE_REGISTRATION_TOKEN",
    "notification": {
      "title": "Join Us Tomorrow for a Free Live Webinar on UI Tools!",
      "body": "Don’t miss out! Tomorrow at 10 AM, we’re hosting a live session on the best UI tools. Reserve your spot by clicking here.",
      "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&h=600"
    },
    "data": {
      "click_action": "FLUTTER_NOTIFICATION_CLICK",
      "link": "https://example.com/webinar-registration"
    }
  }
}
```

**Response Body:**

```json
{
  "name": "projects/PROJECT_ID/messages/0:1618924844212%6e23a5c0f9e1a1e8"
}
```


# In-App Notifications - API & Integration Guide

This document explains how to use the new in-app notifications in the Notification Service.

## Endpoints

- Create in-app notification (raw or template-based)
  - POST `notification/inApp`
- List notifications with filters and pagination
  - GET `notification/inApp?userId={uuid}&status=unread|read|all&page=1&limit=20`
- Count unread (reuse list with `limit=0`)
  - GET `notification/inApp?userId={uuid}&status=unread&limit=0`
- Mark read (single or all)
  - PATCH `notification/inApp/mark-read`

All endpoints require `Authorization: Bearer <token>` header (Swagger auth key `access-token`).

---

## Create (Raw)

POST `notification/inApp`

Body:
```json
{
  "userId": "c12fa913-6fc1-4e90-bd44-2c75724f2b3c",
  "title": "Task Completed",
  "message": "Your review task is completed.",
  "link": "https://app.example.com/tasks/T-9001",
  "metadata": { "taskId": "T-9001" },
  "tenant_code": "TENANT1",
  "org_code": "ORG1",
  "expiresAt": "2026-01-01T00:00:00.000Z"
}
```

Notes:
- `title` is required only when neither `templateId` nor `key` is provided.
- `message` (body) is stored at create time from template and replacements (if provided). List returns stored message directly.
- Optional fields: `link`, `metadata`, `tenant_code`, `org_code`, `expiresAt`.

---

## Create (Template-based)

POST `notification/inApp`

Body:
```json
{
  "userId": "c12fa913-6fc1-4e90-bd44-2c75724f2b3c",
  "templateId": "0d3b4b24-8a00-4f1d-9a1c-2f6f1c5f2b11",
  "replacements": {
    "userName": "Sachin",
    "{taskId}": "T-9001"
  },
  "metadata": { "priority": "high" }
}
```

Rules:
- The template is taken from `NotificationActionTemplates` with `type='inApp'`.
- Placeholders in the template subject/body/link are replaced by `replacements`.
  - Keys can be provided either with braces (`"{userName}"`) or without (`"userName"`).
- If both `templateId` and raw `title/message` are provided, the template takes precedence.

---

## Create (Action-based, consistent with Email/SMS/Push)

POST `notification/inApp`

Body:
```json
{
  "userId": "c12fa913-6fc1-4e90-bd44-2c75724f2b3c",
  "context": "USER",
  "key": "OnRegister",
  "replacements": {
    "userName": "Sachin"
  },
  "metadata": { "role": "superuser" }
}
```

Rules:
- We resolve `NotificationActions` by `context` and `key`, then pick the `NotificationActionTemplates` with `type='inApp'`.
- Placeholders are replaced using `replacements`.
- We store `context`, `key`, and resolved fields; template is used transiently at create time.

---

## Create (Key-only)

POST `notification/inApp`

Body:
```json
{
  "userId": "c12fa913-6fc1-4e90-bd44-2c75724f2b3c",
  "key": "OnRegister",
  "replacements": { "userName": "Sachin" }
}
```

Rules:
- If `key` resolves to a single action, we use that. If multiple actions share the same key, provide `context` as well.
- We fetch the in-app template for the resolved action and perform placeholder replacement.

---

## Create (Send-structure, bulk over recipients)

POST `notification/inApp`

Curl:
```bash
curl -X POST http://localhost:4000/notification/inApp \
  -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" \
  -d '{
    "context":"USER",
    "key":"OnRegister",
    "replacements":{"userName":"Sachin"},
    "inApp": { "receipients": ["<USER_UUID_1>", "<USER_UUID_2>"] }
  }'
```

Behavior:
- For each userId in `inApp.receipients`, the service resolves the action/template and creates an in-app record with stored title/message/link and metadata.
- Response returns `{ inApp: { data: [{recipient, id}, ...] } }`.

## List

GET `notification/inApp?userId={uuid}&status=unread|read|all&offset=0&limit=20`

Examples:
```
GET notification/inApp?userId=c12f...&status=unread&offset=0&limit=20
GET notification/inApp?userId=c12f...&status=read
GET notification/inApp?userId=c12f...            (defaults to status=all)
```

Response:
```json
{
  "id": "api.send.notification",
  "responseCode": "OK",
  "result": {
    "data": [
      {
        "id": "7f7e6b10-5bdc-4f8b-bf4b-3e4f11a1b2c3",
        "userId": "c12f...",
        "title": "Task Completed",
        "message": "Your review task is completed.",
        "link": "https://app.example.com/tasks/T-9001",
        "metadata": { "taskId": "T-9001" },
        "isRead": false,
        "createdAt": "2025-12-05T10:30:00.000Z",
        "readAt": null,
        "expiresAt": null
      }
    ],
    "count": 1,
    "offset": 0,
    "limit": 20
  }
}
```

---

## Count Unread

GET `notification/inApp?userId={uuid}&status=unread&limit=0`

Response:
```json
{
  "id": "api.send.notification",
  "responseCode": "OK",
  "result": { "count": 3 }
}
```

---

## Mark Read

PATCH `notification/inApp/mark-read`

- Mark single:
```json
{ "notificationId": "7f7e6b10-5bdc-4f8b-bf4b-3e4f11a1b2c3" }
```

- Mark all for a user:
```json
{ "userId": "c12fa913-6fc1-4e90-bd44-2c75724f2b3c", "markAll": true }
```

Responses:
- Success (single):
```json
{ "updated": 1, "message": "Notification marked as read" }
```


---

## Logging

All in-app operations write to `notificationLogs` for audit:
- Create (raw or template): `type='inApp'`, `action='create'`, `subject=title`, `recipient=userId`
- Mark read (single): `type='inApp'`, `action='mark-read-single'`, body includes notificationId
- Mark read (all): `type='inApp'`, `action='mark-read-all'`, body includes affected count and userId

Use these logs for tracing, analytics, and support.

---

## Kafka Integration (optional)

If you publish to Kafka to create in-app notifications, use the unified service topic:
- `notifications`

Message formats:

1) Raw create (channel discriminator)
```json
{
  "channel": "inApp",
  "userId": "c12fa913-6fc1-4e90-bd44-2c75724f2b3c",
  "title": "Task Completed",
  "message": "Your review task is completed.",
  "link": "https://app.example.com/tasks/T-9001",
  "metadata": { "taskId": "T-9001" },
  "tenant_code": "TENANT1",
  "org_code": "ORG1",
  "expiresAt": "2026-01-01T00:00:00.000Z",
  "traceId": "d9f7a1a0-6e4f-4a44-a9d0-1234567890ab"
}
```

2) Key-based create (channel discriminator)
```json
{
  "channel": "inApp",
  "userId": "c12fa913-6fc1-4e90-bd44-2c75724f2b3c",
  "key": "OnRegister",
  "context": "USER",
  "replacements": {
    "userName": "Sachin",
    "{taskId}": "T-9001"
  },
  "metadata": { "priority": "high" },
  "traceId": "d9f7a1a0-6e4f-4a44-a9d0-1234567890ab"
}
```
