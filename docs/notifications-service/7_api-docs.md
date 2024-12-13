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
