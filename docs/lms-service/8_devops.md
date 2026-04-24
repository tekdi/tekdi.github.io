---
sidebar_position: 8
---

# Installation

## Steps to Install Locally for Development

### 1. Clone Git Repository

```sh
git clone https://github.com/tekdi/shiksha-lms-service
cd shiksha-lms-service/app
npm install
```

### 2. Setup DB

Make sure you have PostgreSQL installed and running. Create a database for the LMS service:
```sql
CREATE DATABASE shiksha_lms;
```

### 3. Environment Variables

Create a `.env` file in the root directory of your project and add the necessary environment variables.

```dotenv
# Server Configuration
PORT=4002
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_DATABASE=shiksha_lms
DB_SSLMODE=no-verify

# Cache Configuration
CACHE_STORE_TYPE=memory
LMS_CACHE_ENABLED=true

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379

# External Services
USER_SERVICE_URL=http://localhost:3002
ASSESSMENT_SERVICE_URL=http://localhost:6000/assessment/v1
EVENT_SERVICE_URL=http://localhost:3001

# Tenant Configuration
TENANT_ID=ef99949b-7f3a-4a5f-806a-e67e683e38f3
```

### 4. Run the Application

```sh
npm run start:dev
```

## Docker Configuration

The LMS service can be run using Docker Compose for easier dependency management.

### docker-compose.yml

```yaml
version: '3.8'
services:
  lms:
    build: .
    ports:
      - "4002:4002"
    env_file:
      - .env
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: root
      POSTGRES_DB: shiksha_lms
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # Optional: Elasticsearch for advanced search capabilities
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.0
    environment:
      - discovery.type=single-node
    ports:
      - "9200:9200"
```

## Steps for Server Side Setup
@TODO
