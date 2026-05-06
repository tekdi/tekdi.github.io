---
sidebar_position: 8
---

# Installation & DevOps Setup

## 🚀 Complete Local Development Setup

To run the Event Management Service locally, you must set up the necessary infrastructure, configure the environment, and spin up both the API and Worker processes.

---

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18+)
- **PostgreSQL** (v14+)
- **Redis** (Used for BullMQ background job queues, e.g., attendance processing)

### 2. Clone Git Repository

```sh
git clone https://github.com/tekdi/event-management-service
cd event-management-service
npm install
```

### 3. Setup Database & Redis
Ensure your **Redis instance** is running locally on port `6379`.
Ensure your **PostgreSQL instance** is running and create a blank database (e.g., `event_management`). *See the Database Initialization section below for table schemas.*

### 4. Steps for Database Initialization

Since the repository does not use automated TypeORM synchronization, you must create the database and tables manually.

Run the following SQL script on your PostgreSQL instance (in the `event_management` database):

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "EventDetails" (
    "eventDetailId" uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    title character varying(255) NOT NULL,
    "shortDescription" character varying(255) NOT NULL,
    "eventType" character varying(255) NOT NULL,
    "isRestricted" boolean DEFAULT false NOT NULL,
    location character varying(255),
    longitude double precision,
    latitude double precision,
    "onlineProvider" character varying(255),
    "maxAttendees" integer DEFAULT 0 NOT NULL,
    recordings jsonb NOT NULL,
    status character varying(255) NOT NULL,
    description text NOT NULL,
    attendees text[],
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    "createdBy" uuid,
    "updatedBy" uuid,
    "idealTime" integer,
    metadata jsonb,
    "meetingDetails" jsonb,
    "minAttendanceDurationMinutes" integer,
    image text
);

CREATE TABLE "Events" (
    "eventId" uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    "isRecurring" boolean DEFAULT false NOT NULL,
    "recurrenceEndDate" timestamp with time zone,
    "recurrencePattern" jsonb NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    "autoEnroll" boolean DEFAULT false NOT NULL,
    "registrationStartDate" timestamp with time zone,
    "registrationEndDate" timestamp with time zone,
    "createdBy" uuid,
    "updatedBy" uuid,
    "eventDetailId" uuid NOT NULL UNIQUE REFERENCES "EventDetails"("eventDetailId") ON DELETE CASCADE ON UPDATE CASCADE,
    "platformIntegration" boolean DEFAULT false
);

CREATE TABLE "EventRepetition" (
    "eventRepetitionId" uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    "eventId" uuid REFERENCES "Events"("eventId") ON DELETE CASCADE ON UPDATE CASCADE,
    "eventDetailId" uuid REFERENCES "EventDetails"("eventDetailId") ON DELETE CASCADE ON UPDATE CASCADE,
    "onlineDetails" jsonb,
    "erMetaData" jsonb,
    "startDateTime" timestamp with time zone DEFAULT timezone('utc'::text, now()),
    "endDateTime" timestamp with time zone DEFAULT timezone('utc'::text, now()),
    "createdAt" timestamp with time zone DEFAULT timezone('utc'::text, now()),
    "updatedAt" timestamp with time zone DEFAULT timezone('utc'::text, now()),
    "createdBy" uuid,
    "updatedBy" uuid,
    "attendanceMarked" boolean DEFAULT false,
    "totalParticipantsProcessed" integer DEFAULT 0,
    "totalParticipantsExpected" integer DEFAULT 0,
    params jsonb
);

CREATE TABLE "EventAttendees" (
    "eventAttendeesId" uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    "userId" uuid NOT NULL,
    "eventId" uuid,
    "eventRepetitionId" uuid,
    "isAttended" boolean,
    "joinedLeftHistory" jsonb,
    duration integer DEFAULT 0 NOT NULL,
    status character varying,
    "enrolledAt" timestamp with time zone,
    "enrolledBy" uuid,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedBy" uuid,
    params jsonb,
    "registrantId" character varying
);

CREATE TABLE "RolePermission" (
    "rolePermissionId" uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    "roleTitle" character varying NOT NULL,
    module character varying NOT NULL,
    "requestType" character varying NOT NULL,
    "apiPath" character varying NOT NULL,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE attendance_jobs (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    job_id character varying(255) NOT NULL UNIQUE,
    event_repetition_id uuid,
    status character varying(50) DEFAULT 'pending'::character varying NOT NULL,
    progress integer DEFAULT 0 NOT NULL,
    error_message text,
    result jsonb,
    started_at timestamp without time zone,
    completed_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "contextType" character varying(255)
);

CREATE INDEX "IDX_attendance_jobs_contextType" ON attendance_jobs USING btree ("contextType");
CREATE INDEX idx_attendance_jobs_created_at ON attendance_jobs USING btree (created_at DESC);
CREATE INDEX idx_attendance_jobs_event_repetition_id ON attendance_jobs USING btree (event_repetition_id);
CREATE INDEX idx_attendance_jobs_event_status ON attendance_jobs USING btree (event_repetition_id, status);
CREATE INDEX idx_attendance_jobs_status ON attendance_jobs USING btree (status);
CREATE INDEX idx_attendance_jobs_status_created_at ON attendance_jobs USING btree (status, created_at DESC);
CREATE INDEX idx_eventattendees_event_repetition_user_attended ON "EventAttendees" USING btree ("eventId", "eventRepetitionId", "userId", "isAttended");
CREATE INDEX idx_eventattendees_eventid ON "EventAttendees" USING btree ("eventId");
CREATE INDEX idx_eventattendees_eventid_userid ON "EventAttendees" USING btree ("eventId", "userId");
CREATE INDEX idx_eventattendees_userid ON "EventAttendees" USING btree ("userId");
CREATE INDEX idx_eventattendees_userid_eventrepetitionid ON "EventAttendees" USING btree ("userId", "eventRepetitionId");
CREATE INDEX idx_eventrepetition_eventid ON "EventRepetition" USING btree ("eventId");
```

### 5. Environment Variables Configuration

Create a `.env` file in the root directory. Make sure to define the Redis configurations explicitly if you are not using default local settings!

```dotenv
# ===========================================
# Database Configuration (PostgreSQL)
# ===========================================
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DATABASE=event_management
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=your_password_here
POSTGRES_SSL=false
POSTGRES_LOGGING=true

# ===========================================
# Redis Configuration (For BullMQ)
# ===========================================
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# ===========================================
# External Service Connections
# ===========================================
USER_SERVICE=http://localhost:3001/api/users
ATTENDANCE_SERVICE=http://localhost:3002/api/attendance
LMS_SERVICE_URL=http://localhost:4000/lms-service

# ===========================================
# Online Meeting Configuration (Zoom)
# ===========================================
ONLINE_MEETING_ADAPTER=zoom
ZOOM_AUTH_URL=https://zoom.us/oauth/token
ZOOM_PAST_MEETINGS=https://api.zoom.us/v2/report/meetings
ZOOM_PAST_WEBINARS=https://api.zoom.us/v2/report/webinars

# ===========================================
# App Settings
# ===========================================
EVENT_CREATION_LIMIT=2000
TIMEZONE=Asia/Kolkata
TIMEZONE_OFFSET=330
TIMEZONE_OFFSET_STRING=+05:30
PORT=3001
JWT_SECRET=your_jwt_secret_here
```

### 6. Run the Application Services

This specific microservice requires **two** parallel processes to function correctly because it heavily relies on BullMQ for background job processing (such as scheduled tasks and attendance syncing).

You must open two separate terminal tabs and run both commands concurrently:

**Terminal 1 (REST API Server):**
```sh
npm run start:dev
```

**Terminal 2 (Background Worker):**
```sh
npm run start:worker:dev
```

---
