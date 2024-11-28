---
sidebar_position: 8
---

# Devops

Installation

- Steps to install locally for development

#### 1. Clone git repository

```sh
git clone https://github.com/tekdi/notification-microservice
cd notification-microservice
npm install
```

#### 2. Setup DB

Make sure you have PostgreSQL installed and running. Create a database for the notification service

#### 3. Environment Variables

Create a .env file in the root directory of your project and add the necessary environment variables.

```dotenv

#server
POSTGRES_HOST="add-here"
POSTGRES_PORT="add-here"
POSTGRES_USERNAME="add-here"
POSTGRES_PASSWORD="add-here"
POSTGRES_DATABASE="add-here"
POSTGRES_SCHEMA="add-here"

#Email config
EMAIL_TYPE=smtp
EMAIL_HOST="add-here"
EMAIL_PORT="add-here"
EMAIL_USER="add-here"
EMAIL_PASS="add-here"
EMAIL_FROM="add-here"

#RABBITMQ LOCAL
RABBITMQ_URL=amqp://localhost:5672

#push notification
FCM_KEY="add-here"
FCM_URL=""add-here"
FIREBASE_PROJECT_ID="add-here"
FIREBASE_PRIVATE_KEY="add-here"
FIREBASE_CLIENT_EMAIL="add-here"

TWILIO_ACCOUNT_SID ="add-here"
TWILIO_AUTH_TOKEN ="add-here"
SMS_FROM ="add-here"
```

#### 4. Run the Application

Before starting application make sure RabbitMQ server should be up and running.

```sh
npm run start:dev
```

- Steps to install on server (Should have a docker compose file)
  - Recommended Infrastructure (should cover Dev & Prod)
