---
sidebar_position: 1
---

# About

The middleware service acts as an additional layer that facilitates communication between various microservices. It includes configurable security checks, such as user roles and privileges, which can be customized to meet your specific needs. Additionally, you have the option to implement new checks as required. As its name suggests, the middleware operates before the API is reached. If all the checks for a particular API are successful, the middleware forwards the request to the appropriate internal microservice. However, if any of the checks fail, the middleware will return a failure response with a relevant message.
