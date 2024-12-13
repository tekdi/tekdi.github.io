---
sidebar_position: 5
---

# Architecture

![Notification Service Architecture](assets/notification.png)



![Notification High Level Design](assets/notification_service.png)



The Notification Service utilizes various adapters (emailAdapter, smsAdapter, pushAdapter) to send notifications. The type of notification sent depends on the adapter in use.