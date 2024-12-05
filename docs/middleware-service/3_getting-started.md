---
sidebar_position: 3
---

# Getting Started

Before setting up the notification service, ensure you have the following prerequisites

### Prerequisites

- [Node.js] - Version 14 or later
- [NestJS] - Familiarity with NestJS framework
- [PostgreSQL] - Database for storing notification data

Let's say you have two microservices: a user service and a notification service. We will use a middleware service as a single point to call these microservices. This middleware will include an API configuration file that lists all the APIs along with any checks that need to be executed for each specific API. Defining checks is optional. If an API is public, no checks will be required. You can include as many checks as you want for each API.

[//]: #
[Node.js]: http://nodejs.org
[NestJS]: https://docs.nestjs.com
[PostgreSQL]: https://www.postgresql.org/
[RabbitMQ]: https://www.rabbitmq.com/
