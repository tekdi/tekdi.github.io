---
sidebar_position: 8
---

# Installation

## Steps to Install Locally for Development

### 1. Clone Git Repository

```sh
git clone  https://github.com/tekdi/event-management-service
cd event-management-service
npm install
```

### 2. Setup DB

Make sure you have PostgreSQL installed and running. Create a database for the event service

### 3. Environment Variables

Create a .env file in the root directory of your project and add the necessary environment variables.

```dotenv

#server
POSTGRES_HOST="add-here"
POSTGRES_PORT="add-here"
POSTGRES_USERNAME="add-here"
POSTGRES_PASSWORD="add-here"
POSTGRES_DATABASE="add-here"
POSTGRES_SCHEMA="add-here"

EVENT_CREATION_LIMIT=2000
TIMEZONE=Asia/Kolkata
TIMEZONE_OFFSET=5.5
TIMEZONE_OFFSET_STRING=+05:30

# zoom attendance marking (Requires Prior setup on zoom)
ZOOM_AUTH_URL=https://zoom.us/oauth/token
ZOOM_PAST_MEETINGS=https://api.zoom.us/v2/past_meetings
ATTENDANCE_SERVICE="add-here"
USER_SERVICE="add-here"
ONLINE_MEETING_ADAPTER=zoom
```

### 4. Run the Application

```sh
npm run start:dev
```

## Steps for Server Side Setup
@TODO
