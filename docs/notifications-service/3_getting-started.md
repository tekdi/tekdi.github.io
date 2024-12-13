---
sidebar_position: 3
---

# Getting Started

Before setting up the notification service, ensure you have the following prerequisites

### Prerequisites

- [Node.js] - Version 14 or later
- [NestJS] - Familiarity with NestJS framework
- [PostgreSQL] - Database for storing notification data
- [RabbitMQ] - Message broker for handling notification queues.
- [Firebase] - To send notifications via Firebase Cloud Messaging (FCM), configure OAuth 2.0 credentials for secure access.

#### To set up RabbitMQ use following commands

```sh
sudo docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

sudo docker start containerId
```

#### Setting Up Firebase Project

```sh
1. Go to the Firebase Console and create a new project or select an existing one.
2. Navigate to Project Settings > Service Accounts.
3. Click on Generate New Private Key to download the service account JSON file. This file contains the credentials required for authenticating with Google APIs.
4. Generate Device Tokens:Implement the necessary logic in your application to obtain device tokens, which are required to send notifications to specific devices.
```

[//]: #
[Node.js]: http://nodejs.org
[NestJS]: https://docs.nestjs.com
[PostgreSQL]: https://www.postgresql.org/
[RabbitMQ]: https://www.rabbitmq.com/
[Firebase]: https://firebase.google.com/
