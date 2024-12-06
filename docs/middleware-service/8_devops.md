---
sidebar_position: 8
---

# Devops

Installation

- Steps to install locally for development

#### 1. Clone git repository

```sh
git clone https://github.com/tekdi/shiksha-middleware
cd shiksha-middleware
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

JWT_SECRET="add-here"


RBAC_JWT_EXPIRES_IN="add-here"
RBAC_JWT_SECRET="add-here"

#Expiration Time for cache
TTL ="add-here"

NODE_TLS_REJECT_UNAUTHORIZED = 0

# microservice base url (add all microservice which you want to integrate in middleware)
USER_SERVICE ="add-here"
```

#### 4. Run the Application

```sh
npm run start:dev
```

- Steps to install on server (Should have a docker compose file)
  - Recommended Infrastructure (should cover Dev & Prod)
