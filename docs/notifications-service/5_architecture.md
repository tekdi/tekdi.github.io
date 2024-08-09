---
sidebar_position: 5
---

# Architecture

![Notification Service Architecture](../../assets/Notification.png)



![Notification High Level Design](../../assets/NotificationService.png)



The Notification Service utilizes various adapters (emailAdapter, smsAdapter, pushAdapter) to send notifications. The type of notification sent depends on the adapter in use.