---
sidebar_position: 7
---

# API Docs

**1. CREATE Todo API:**

**Method:** POST  
**URL:** `{{url}}/todo/create`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
  "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",
  "sender_msg": "Move from A-> B",
  "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f917",
  "context": "user",
  "start_date": "2024-11-05T19:00:00Z",
  "due_date": "2024-11-07T19:00:00Z",
  "status": "incomplete",
  "completion_date": "2024-03-23T10:00:00Z",
  "state": "publish",
  "title": "Reassign",
  "type": "assign",
  "action_data": {
    "action_name": "delete",
    "status": "archived",
    "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"],
    "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"]
  },
  "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
  "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e"
}
```

**Status:** CREATED (201)

**Response Body:**

```json
{
  "id": "api.todo.create",
  "ver": "1.0",
  "ts": "2024-10-17T16:10:19.909Z",
  "params": {
    "resmsgid": "a474af92-5855-4a67-ac0e-b52cf36094ee",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "CREATED",
  "result": {
    "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
    "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea4",
    "sender_msg": "Mahima Shastri requested to re-assign Aisha Bhatt learning Center from: Koradi -> Khapari Dharmu",
    "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f918",
    "context": "user",
    "start_date": "2026-11-05T19:00:00Z",
    "due_date": "2026-11-07T19:00:00Z",
    "status": "incomplete",
    "state": "publish",
    "title": "Reassign",
    "type": "assign",
    "action_data": {
      "action_name": "delete",
      "status": "archived",
      "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"],
      "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"]
    },
    "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
    "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
    "asset_id": null,
    "ideal_time": null,
    "spent_time": null,
    "todo_id": "4077ff48-c941-4239-b539-4f3b4324edf9",
    "created_at": "2024-10-17T16:10:19.904Z",
    "updated_at": "2024-10-17T16:10:19.904Z"
  }
}
```

**2. GET List Of Todo API :**

**Method:** POST  
**URL:** `{{url}}/todo/list`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
  // "limit": 0,
  // "offset": 0,
  "filters": {
    // "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",
    // "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea4",
    // "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fe46",
    "context": "user"
    // "title": "Reassign",
    // "state":"publish",
    // "action_name": "delete",
    // "status": [
    //     "incomplete",
    //     "complete"
    // ],
    // "due_date": {
    //     "from": "2024-10-07T18:30:00Z",
    //     "to": "2024-10-08T18:29:59Z"
    // }
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
  "id": "api.todo.list",
  "ver": "1.0",
  "ts": "2024-10-17T16:11:34.235Z",
  "params": {
    "resmsgid": "9130fc57-7663-49c6-8529-6127a833a7cd",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "OK",
  "result": {
    "totalCount": "3",
    "fecthTodo": [
      {
        "todo_id": "edaebd9d-b045-481e-a27a-4c2c95e44e70",
        "asset_id": null,
        "ordering": 1,
        "state": "publish",
        "sender_msg": "Move A -> B",
        "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f913",
        "context": "user",
        "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
        "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",
        "start_date": "2024-10-05T19:00:00.000Z",
        "due_date": "2024-10-07T19:00:00.000Z",
        "status": "incomplete",
        "title": "Reassign",
        "type": "assign",
        "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
        "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
        "created_at": "2024-09-30T12:23:58.589Z",
        "updated_at": "2024-09-30T12:23:58.589Z",
        "ideal_time": null,
        "spent_time": null,
        "completion_date": null,
        "action_data": {
          "status": "archived",
          "action_name": "delete",
          "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"],
          "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"]
        }
      },
      {
        "todo_id": "ddf13cbe-f9d6-472e-b8dc-a9078c43bdba",
        "asset_id": null,
        "ordering": 1,
        "state": "publish",
        "sender_msg": "Center from: Koradi -> Khapari Dharmu",
        "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f917",
        "context": "user",
        "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
        "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",
        "start_date": "2024-11-05T19:00:00.000Z",
        "due_date": "2024-11-07T19:00:00.000Z",
        "status": "incomplete",
        "title": "Reassign",
        "type": "assign",
        "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
        "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
        "created_at": "2024-10-17T16:09:41.787Z",
        "updated_at": "2024-10-17T16:09:41.787Z",
        "ideal_time": null,
        "spent_time": null,
        "completion_date": null,
        "action_data": {
          "status": "archived",
          "action_name": "delete",
          "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"],
          "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"]
        }
      }
    ]
  }
}
```

**3. UPDATE Todo API:**

**Method:** PATCH  
**URL:** `{{url}}/todo/:todoId`  
**Headers:**

- `accept: */*`
- `Content-Type: application/json`

**Request Body:**

```json
{
 {
  "sender_msg": "updated requested to re-assign Aisha Bhatt learning Center from: Y -> Z",
   "updated_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
    "spent_time" : "03:00:00"
//    "status" : "rejected"
}
}
```

**Status:** OK (200)

**Response Body:**

```json
{
  "id": "api.todo.update",
  "ver": "1.0",
  "ts": "2024-10-17T16:13:43.494Z",
  "params": {
    "resmsgid": "529e3a66-dd4d-4a6e-b611-9fce16ed3049",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "OK",
  "result": {
    "sender_msg": "updated requested to re-assign Aisha Bhatt learning Center from: Y -> Z",
    "updated_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
    "spent_time": "03:00:00"
  }
}
```

**4. Get By Todo Id API:**

**Method:** GET  
**URL:** `{{url}}/todo/:todoId`

**Response Body:**

```json
{
  "id": "api.todo.get",
  "ver": "1.0",
  "ts": "2024-10-17T16:14:29.802Z",
  "params": {
    "resmsgid": "2bfcfc2b-a98a-4b3b-8083-75de2b85fc55",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "OK",
  "result": {
    "todo_id": "4077ff48-c941-4239-b539-4f3b4324edf9",
    "asset_id": null,
    "ordering": 1,
    "state": "publish",
    "sender_msg": "updated requested to re-assign Aisha Bhatt learning Center from: Y -> Z",
    "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f918",
    "context": "user",
    "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
    "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea4",
    "start_date": "2026-11-06",
    "due_date": "2026-11-08",
    "status": "incomplete",
    "title": "Reassign",
    "type": "assign",
    "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",
    "updated_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",
    "created_at": "2024-10-17T16:10:19.904Z",
    "updated_at": "2024-10-17T16:13:43.490Z",
    "ideal_time": null,
    "spent_time": "03:00:00",
    "completion_date": "2024-10-17",
    "action_data": {
      "status": "archived",
      "action_name": "delete",
      "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"],
      "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"]
    }
  }
}
```

**5. DELETE By Todo Id API:**

**Method:** DELETE  
**URL:** `{{url}}/todo/:todoId`

**Response Body:**

```json
{
  "id": "api.todo.delete",
  "ver": "1.0",
  "ts": "2024-10-17T16:14:40.150Z",
  "params": {
    "resmsgid": "2fff9046-8c6b-4593-9192-39e297583eae",
    "status": "successful",
    "error": null,
    "errmsg": null
  },
  "responseCode": "OK",
  "result": {
    "generatedMaps": [],
    "raw": [],
    "affected": 1
  }
}
```
