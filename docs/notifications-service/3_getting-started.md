---
sidebar_position: 3
---

# Getting Started

Before setting up the notification service, ensure you have the following prerequisites
### Prerequisites ###

- [Node.js] - Version 14 or later
- [NestJS] - Familiarity with NestJS framework
- [PostgreSQL] - Database for storing notification data
- [RabbitMQ] - Message broker for handling notification queues.

To set up RabbitMQ use following commands

```sh
sudo docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

sudo docker start containerId
```




[//]: #
   [Node.js]: <http://nodejs.org>
   [NestJS]: <https://docs.nestjs.com>
   [PostgreSQL]: <https://www.postgresql.org/>
   [RabbitMQ]:https://www.rabbitmq.com/
   