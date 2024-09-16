---
sidebar_position: 6
---

# Database Schema

### Entities

#### Event

#### Table: Events

| Column Name           | Type                     | Purpose                                                                                   |
| --------------------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| event_id              | UUID                     | UUID, primary key, unique                                                                 |
| event_details_id      | UUID                     | UUID, FK, unique                                                                          |
| isRecurring           | boolean                  | If event is recurring, then set to true                                                   |
| recurrenceEndDate     | timestamp with time zone | Default: `timezone('utc'::text, now())`                                                   |
| recurrencePattern     | JSONB                    | Details on how to store rules for the recurring event are provided below in this document |
| autoEnroll            | boolean                  | True/false                                                                                |
| registrationStartDate | timestamp with time zone | Date Time from which users can start enrolling in an event                                |
| registrationEndDate   | timestamp with time zone | Date until which users can enroll in an event                                             |
| updated_at            | timestamp with time zone | Timestamp when the event was last updated (default: now())                                |
| created_by            | UUID                     | User who created the event                                                                |
| updated_by            | UUID                     | User who updated the event                                                                |

#### Table: Event_details

| Column Name       | Type              | Purpose                                                                                     |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| event_details_id  | UUID              | UUID, primary key, unique                                                                   |
| title             | varchar(100)      | Event Title                                                                                 |
| description       | Text              | Description to be shown on the detailed page                                                |
| short_description | varchar(500)      | Description to be shown on the card view                                                    |
| location          | varchar(500)      | Location if the event is offline                                                            |
| latitude          | float             | Latitude of the location if the event is offline                                            |
| longitude         | float             | Longitude of the location if the event is offline                                           |
| eventType         | character varying | Event type: online / offline / onlineandoffline                                             |
| onlineProvider    | character varying | Online provider options: BigBlueButton, Google, Meet, Zoom, Jitsi                           |
| recordings        | json              | Recordings information (default: `{}`)                                                      |
| idealTime         | INT               | Ideal time for the event (in minutes or other unit as required)                             |
| maxAttendees      | INT               | Maximum number of enrollments allowed for the event                                         |
| status            | character varying | Event status: draft / published / unpublished / archived                                    |
| isRestricted      | boolean           | If true, the event is restricted and will have cohortIds or UserIds                         |
| meetingDetails    | JSONB             | Online meeting details: [id/password/link]                                                  |
| attendees         | Array             | List of attendees (default: `[]`)                                                           |
| metadata          | JSONB             | Metadata with various fields, e.g., Framework, Event type, Do_ID, cohortId, CycleID, Tenant |

#### Table: Events_repetition

| Column Name       | Type                     | Purpose                                                                                                              |
| ----------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| eventRepetitionId | UUID                     | UUID, primary key, unique                                                                                            |
| event_id          | UUID                     | Foreign key from the `events` table                                                                                  |
| event_details_id  | UUID                     | Foreign key from the `event_details` table                                                                           |
| online_details    | JSONB                    | Online details such as occurrenceId, passcode, and link (default: `{"occurenceId": "", "passcode": "", "link": ""}`) |
| start_date        | timestamp with time zone | Timestamp when the event starts (default: `timezone('utc'::text, now())`)                                            |
| end_date          | timestamp with time zone | Timestamp when the event is expected to end (default: `timezone('utc'::text, now())`)                                |
| updatedBy         | UUID                     | User who last updated the record                                                                                     |
| createdBy         | UUID                     | User who created the record                                                                                          |
| updatedAt         | timestamp with time zone | Timestamp when the record was last updated (default: `timezone('utc'::text, now())`)                                 |
| createdAt         | timestamp with time zone | Timestamp when the record was created (default: `timezone('utc'::text, now())`)                                      |
|                   |

#### Table: EventAttendees

| Column Name       | Type                     | Purpose                                                                                                                                                                                                                                              |
| ----------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventAttendeesId  | UUID                     | Primary Key                                                                                                                                                                                                                                          |
| userId            | UUID                     | Foreign Key referencing the user                                                                                                                                                                                                                     |
| eventRepetitionId | UUID                     | Foreign Key referencing the event repetition                                                                                                                                                                                                         |
| isAttended        | boolean                  | True/false indicating whether the attendee attended the event                                                                                                                                                                                        |
| joinedLeftHistory | jsonb                    | JSONB with details of duration, joinedDateTime, and leftDateTime (example: `{"duration": 28, "joinedDateTime": "2021-12-30 06:08:50.250", "leftDateTime": "2021-12-30 06:09:18.393"}, {"duration": 589, "leftDateTime": "2021-12-30 07:49:28.103"}`) |
| duration          | INT                      | Duration the attendee spent in the event                                                                                                                                                                                                             |
| status            | character varying        | Status of the attendance: published / unpublished                                                                                                                                                                                                    |
| enrolled_at       | timestamp with time zone | Timestamp when the eventAttendees record was created (default: `now()`)                                                                                                                                                                              |
| enrolled_by       | UUID                     | User who created the eventAttendees record                                                                                                                                                                                                           |
| updated_at        | timestamp with time zone | Timestamp when the eventAttendees record was last updated (default: `now()`)                                                                                                                                                                         |
| updated_by        | UUID                     | User who last updated the eventAttendees record                                                                                                                                                                                                      |
| createdAt         | timestamp with time zone | Timestamp when the eventAttendees record was created                                                                                                                                                                                                 |
| createdBy         | UUID                     | User who created the eventAttendees record                                                                                                                                                                                                           |

![NotificationLogs](assets/events_public_EventRepetition.png)
