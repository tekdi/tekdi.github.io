---
sidebar_position: 7
---

# API Docs

**1. Create Event API:**
**Method:** POST  
**URL:** `{{url}}/event-service/event/v1/create`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "title": "Recurring Event",
  "shortDescription": "This is a sample event",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "eventType": "offline",
  "isRestricted": true,
  "autoEnroll": false,
  "startDatetime": "2024-09-30T07:00:00Z",
  "endDatetime": "2024-09-30T11:30:00Z",
  "location": "Event Location ",
  "longitude": 18.508345134886994,
  "latitude": 18.508345134886994,
  "status": "live",
  "createdBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
  "updatedBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
  "isRecurring": true,
  "recurrencePattern": {
    "frequency": "weekly",
    "daysOfWeek": [3, 4, 5],
    "endCondition": {
      "type": "endDate",
      "value": "2024-10-15T11:30:00Z"
    },
    "recurringStartDate": "2024-09-30T07:00:00Z"
  },
  "metaData": {},
  "erMetaData": {}
}
```

**Status:** CREAETD (201)

**Response Body:**

```json
{
  "id": "api.event.create",
  "ver": "1.0",
  "ts": "2024-09-13T06:52:57.633Z",
  "params": {
    "resmsgid": "1fd5eaea-ea43-48b9-9348-513e8ca7167a",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "Created",
  "result": {
    "title": "Recurring Event Pooja",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "shortDescription": "This is a sample event",
    "eventType": "offline",
    "isRestricted": true,
    "location": "Event Location ",call
    "longitude": 18.508345134886994,
    "latitude": 18.508345134886994,
    "onlineProvider": null,
    "maxAttendees": 0,
    "recordings": null,
    "status": "live",
    "meetingDetails": null,
    "idealTime": null,
    "metadata": {},
    "createdBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
    "updatedBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
    "createdAt": "2024-09-13T06:52:57.619Z",
    "updatedAt": "2024-09-13T06:52:57.619Z",
    "eventDetailId": "ea2f8715-cb6b-4163-b2c4-27da51b8a29d",
    "isRecurring": true,
    "recurrencePattern": {
      "interval": 1,
      "frequency": "weekly",
      "daysOfWeek": [3, 4, 5],
      "endCondition": {
        "type": "endDate",
        "value": "2024-10-15T11:30:00Z"
      },
      "recurringStartDate": "2024-09-30T07:00:00Z"
    },
    "autoEnroll": false,
    "registrationStartDate": null,
    "registrationEndDate": null,
    "eventId": "0cca64c6-eab5-477e-8563-d6d7912ce454",
    "eventRepetitionId": "9dab2000-a9fd-4922-834e-3ffd54c2e998",
    "startDateTime": "2024-10-02T07:00:00.000Z",
    "endDateTime": "2024-10-02T11:30:00.000Z",
    "onlineDetails": null,
    "erMetaData": {},
    "createdEventCount": 6
  }
}
```

**2. GET LIST OF EVENT API :**
**Method:** POST  
**URL:** `{{url}}/event-service/event/v1/list`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "filters": {
    "date": {
      "after": "2024-08-24T18:30:00Z",
      "before": "2024-08-25T18:29:59Z"
    }
    // "startDate": {
    //     "after": "2024-08-21T18:30:00Z",
    //     "before": "2024-08-22T18:29:59Z"
    // }
    // "endDate": {
    //   "after": "2024-08-24T18:30:00Z",
    //   "before": "2024-08-25T18:29:59Z"
    // }
    // get in between start and endDate
    // "startDate": {
    //     "after": "2024-08-21T18:30:00Z" // ek din piche ki date dalni hai like you want to see from 22 date then pass 21
    // },
    // "endDate": {
    //     "before": "2024-08-25T18:29:59Z"
    // }
    // "status": [
    //   "live",
    //   "draft",
    //   "inActive",
    //   "archived"
    // ],
    // "eventType": [
    // //   "online"
    //   "offline"
    // ],
    // "title": "Event Title",
    // "cohortId": "0278fd6a-ed93-4f29-b961-d3c87697c76a",
    // "createdBy" : "eff008a8-2573-466d-b877-fddf6a4fc13e"
  }
}
```

**Status:** OK (200)  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Response Body:**

```json
{
  "id": "api.events.get",
  "ver": "1.0",
  "ts": "2024-09-13T10:47:00.302Z",
  "params": {
    "resmsgid": "ced2516b-8449-485b-9c8d-d958c543fd60",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "OK`",
  "result": {
    "totalCount": "1",
    "events": [
      {
        "eventRepetition_eventDetailId": "b03d100f-101f-4d90-9ea3-22a3f73bfcb5",
        "eventRepetition_createdBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
        "eventRepetitionId": "78041c1b-d201-4ee0-b3ae-1e4e775524b8",
        "eventId": "be4aa360-14d3-49a8-b8aa-c9783389a1dc",
        "eventDetailId": "b03d100f-101f-4d90-9ea3-22a3f73bfcb5",
        "onlineDetails": null,
        "startDateTime": "2024-10-02T07:00:00.000Z",
        "endDateTime": "2024-10-02T11:30:00.000Z",
        "createdAt": "2024-09-11T13:52:26.082Z",
        "updatedAt": "2024-09-11T13:52:26.082Z",
        "createdBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
        "updatedBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
        "erMetaData": {},
        "event_eventId": "be4aa360-14d3-49a8-b8aa-c9783389a1dc",
        "event_eventDetailId": "b03d100f-101f-4d90-9ea3-22a3f73bfcb5",
        "isRecurring": true,
        "recurrenceEndDate": null,
        "recurrencePattern": {
          "interval": 1,
          "frequency": "weekly",
          "daysOfWeek": [3, 4, 5],
          "endCondition": {
            "type": "endDate",
            "value": "2024-10-15T11:30:00Z"
          },
          "recurringStartDate": "2024-09-30T07:00:00Z"
        },
        "autoEnroll": false,
        "registrationStartDate": null,
        "registrationEndDate": null,
        "eventDetail_eventDetailId": "b03d100f-101f-4d90-9ea3-22a3f73bfcb5",
        "title": "Testing Event",
        "shortDescription": "This is a sample event",
        "eventType": "offline",
        "isRestricted": true,
        "location": "Event Location ",
        "longitude": 18.508345134886994,
        "latitude": 18.508345134886994,
        "onlineProvider": null,
        "maxAttendees": 0,
        "recordings": null,
        "status": "live",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "meetingDetails": null,
        "idealTime": null,
        "metadata": {},
        "attendees": null,
        "isEnded": false
      }
    ]
  }
}
```

**3. UPDATE EVENT API:**
**Method:** PATCH  
**URL:** `{{url}}/event-service/event/v1/:eventRepetation-id`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  //   "status": "archived",
  "title": "recurring 28AUg",
  "isMainEvent": false,
  "updatedBy": "c3170f52-dda5-4b04-8757-4d331acf8b23",
  // "metadata": {
  //     "framework": {
  //         "board": "EXAMPLE",
  //         "medium": "EXAMPLE",
  //         "grade": "10",
  //         "subject": "EXAMPLE",
  //         "topic": "",
  //         "subTopic": ""
  //     },
  //     "eventType": "Extra session or Planned Session",
  //     "doId": "3333",
  //     "cohortId": "333",
  //     "cycleId": "2026",
  //     "tenant": "zzzz"
  // }
  //   "onlineDetails": {
  //     "url": "https://us04web.zoom.us/j/71054687203",
  //     "id": "888-888-888",
  //     "password": "zzzz"
  //   },
  // "onlineProvider": "Zoom"
  //   "erMetaData": {
  //     "topic": "Java",
  //     "mentorId": "1244546647",
  //     "subTopic": "Type of fetaures"
  //   },
  "startDatetime": "2024-08-30T08:00:00Z",
  "endDatetime": "2024-08-29T10:00:00Z"
  //   "location": "Event Location",
  //   "longitude": 18.508345134886994,
  //   "latitude": 18.508345134886994,
}
```

**Status:** OK (200)  
**Headers:**

**Response Body:**

```json
{
  "id": "api.event.update",
  "ver": "1.0",
  "ts": "2024-09-16T10:44:25.578Z",
  "params": {
    "resmsgid": "f1c6ce41-b03f-4955-a8e1-b747e569f688",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "OK",
  "result": {
    "eventDetails": {
      "eventDetailId": "553e5eeb-c484-4afa-93f0-c285a56ba331",
      "title": "chemistry",
      "shortDescription": "This is a private event",
      "eventType": "offline",
      "isRestricted": true,
      "location": "Event Location PCMC",
      "longitude": 18.508345134886994,
      "latitude": 18.508345134886994,
      "onlineProvider": "Zoom",
      "maxAttendees": 0,
      "recordings": {
        "url": "https://example.com/recording"
      },
      "status": "live",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "attendees": null,
      "createdAt": "2024-09-13T07:39:22.931Z",
      "updatedAt": "2024-09-16T10:44:25.547Z",
      "meetingDetails": {
        "id": "123-456-789",
        "url": "https://us02web.zoom.us/j/84460628730?pwd=Y2tyTGdvYnZicWhHMGNFbXJMT3lYUT09",
        "password": "xxxxxxx",
        "onlineProvider": "Zoom",
        "providerGenerated": false
      },
      "createdBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
      "updatedBy": "1a691b52-ba4f-4a38-9478-96965537de6e",
      "idealTime": 120,
      "metadata": {
        "doId": "31232131231232",
        "tenant": "jgkgkjgjg",
        "cycleId": "2024",
        "subject": "Mathematics",
        "cohortId": "31232131231232",
        "eventType": "Extra session or Planned Session"
      },
      "isMainEvent": true,
      "startDatetime": "2024-09-20T13:30:00Z",
      "endDatetime": "2024-09-20T14:30:00Z",
      "recurrencePattern": {
        "interval": 1,
        "frequency": "weekly",
        "daysOfWeek": [3, 5],
        "endCondition": {
          "type": "endDate",
          "value": "2024-09-30T14:30:00Z"
        },
        "recurringStartDate": "2024-09-17T13:30:00Z"
      },
      "isRecurring": true,
      "eventRepetitionId": "e6c56a35-21e0-49ee-8e59-f182a45579a2"
    }
  }
}
```

**4. DELETE EVENT BY ID API:**
**Method:** Patch [soft Delete]  
**URL:** `{{url}}/event-service/event/v1/:eventRepetation-id`  
**Headers:**

- `accept: */*`

**Request Body:**

```json
{
  "status": "archived",
  "isMainEvent": false,
  "updatedBy": "243375b7-3a84-438a-8d1e-95990581ae4e"
}
```

**Response Body:**

```json
{
  "id": "api.event.update",
  "ver": "1.0",
  "ts": "2024-09-16T06:47:56.743Z",
  "params": {
    "resmsgid": "142575cf-5247-4706-a800-7927881a327c",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "OK",
  "result": {
    "eventDetails": {
      "title": "recurring 3sep.",
      "shortDescription": "This is a sample event",
      "eventType": "offline",
      "isRestricted": true,
      "location": "Event Location ",
      "longitude": 18.508345134886994,
      "latitude": 18.508345134886994,
      "onlineProvider": null,
      "maxAttendees": 0,
      "recordings": null,
      "status": "archived",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "attendees": null,
      "createdAt": "2024-08-30T14:26:22.510Z",
      "updatedAt": "2024-09-16T06:47:56.721Z",
      "meetingDetails": null,
      "createdBy": "eff008a8-2573-466d-b877-fddf6a4fc13e",
      "updatedBy": "243375b7-3a84-438a-8d1e-95990581ae4e",
      "idealTime": null,
      "metadata": {},
      "isMainEvent": false,
      "eventRepetitionId": "2320a34d-4b31-49d2-b39d-fadfa39b38fd",
      "eventDetailId": "3e38bb9f-26af-4a7a-a9e6-92b3c5f0afdb"
    }
  }
}
```
