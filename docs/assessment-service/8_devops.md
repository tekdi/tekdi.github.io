---
sidebar_position: 8
---

# DevOps Installation

## Steps to Install Locally for Development

### 1. Clone Git Repository

```sh
git clone https://github.com/tekdi/shiksha-assessment-service.git
cd shiksha-assessment-service
npm install
```

### 2. Setup DB

Make sure you have PostgreSQL installed and running. Create a database for the Assessment service:
```sql
CREATE DATABASE assessment_db;
```

### 3. Environment Variables

Create a `.env` file in the root directory of your project and add the necessary environment variables.

```dotenv
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_DATABASE=assessment_service

# Redis Configuration
CACHE_ENABLED=true
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Application Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration (for future use)
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h 

# Storage Configuration
# Supported providers: aws, azure, gcp
# CLOUD_STORAGE_PROVIDER=
# CLOUD_STORAGE_ACCESS_KEY_ID=
# CLOUD_STORAGE_SECRET_ACCESS_KEY=
# CLOUD_STORAGE_BUCKET_NAME=
# CLOUD_STORAGE_REGION=

ASSESSMENT_CONFIG_PATH=src/assessment-config.json

USER_SERVICE_URL=

LMS_SERVICE_URL=http://localhost:4000/lms-service/v1
```

### 4. Run the Application

```sh
npm run start:dev
```

## Docker Configuration

The Assessment service can be orchestrated using Docker Compose. Here's a sample `docker-compose.yml`:

### docker-compose.yml

```yaml
version: '3.8'
services:
  assessment-service:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - PORT=3000
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USERNAME=postgres
      - DB_PASSWORD=password
      - DB_DATABASE=assessment_db
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:12-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: assessment_db
    ports:
      - "5432:5432"

  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"
```

## Steps for Server Side Setup
@TODO
