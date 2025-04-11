---
sidebar_position: 8
---

# Devops

Installation

- Steps to install locally for development

#### 1. Clone git repository

```sh
git clone https://github.com/tekdi/user-microservice
cd user-microservice
npm install
```

#### 2. Setup DB

Make sure you have PostgreSQL installed and running. Create a database for the user service

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

#KEYCLOAK
KEYCLOAK="add-here"
KEYCLOAK_ADMIN="add-here"
KEYCLOAK_ADMIN="add-here"
KEYCLOAK_USER_TOKEN="add-here"
KEYCLOAK_REALM_RSA_PUBLIC_KEY="add-here"
KEYCLOAK_CLIENT_ID="add-here"
KEYCLOAK_REALM="add-here"
KEYCLOAK_CLIENT_SECRET="add-here"
KEYCLOAK_USERNAME="add-here"
KEYCLOAK_PASSWORD="add-here"
KEYCLOAK_ADMIN_TOKEN="add-here"

#Course Planner
AUTH_TOKEN="add-here"
INTERNAL_ACCESS_TOKEN="add-here"
#AWS
AWS_BUCKET_NAME = "add-here"
AWS_ACCESS_KEY_ID = "add-here"
AWS_SECRET_ACCESS_KEY= "add-here"
AWS_REGION = "add-here"

# sms for reset password and phone verification during signup
SMS_KEY="add-here"
OTP_EXPIRY="add-no-of-minutes"
OTP_DIGITS="add-no-of-digits"
```

#### 4. Run the Application

Before starting application make sure KEYCLOAK server should be up and running.

```sh
npm run start:dev
```

- Steps to install on server (Should have a docker compose file)
  - Recommended Infrastructure (should cover Dev & Prod)
