---
sidebar_position: 8
---

# Installation

## Steps to Install Locally for Development

### 1. Clone Git Repository

```sh
git clone  https://github.com/tekdi/todo.git
cd todo
npm install
```

### 2. Setup DB

Make sure you have PostgreSQL installed and running. Create a database for the Todo service

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
```

### 4. Run the Application

```sh
npm run start:dev
```

## Steps for Server Side Setup

@TODO
