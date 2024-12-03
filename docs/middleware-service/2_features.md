---
sidebar_position: 2
---

# Features

Follwoing are the key features

#### 1. Role-Based Access Control (RBAC)

The middleware can check user roles and permissions to ensure that the requester has the necessary rights to access specific APIs or perform certain actions.

#### 2. Configurable Security Checks

It allows you to define and configure various security checks according to your needs. This flexibility means you can adapt the middleware to different security requirements or policies over time.

#### 3. Customizable Checks

You can add new checks as needed, such as verifying additional user attributes or enforcing specific business rules.

#### 4. Pre-Processing Requests

Before forwarding a request to the internal microservice, the middleware performs all the necessary checks. This ensures that only requests that pass these checks reach the backend services.

#### 5. Fail Response Handling

If any check fails, the middleware returns a failure response with an appropriate message, providing feedback about why the request was not processed. This helps in troubleshooting and enhances security by preventing unauthorized or invalid requests from being processed.

#### 6. Request Routing

Once all checks are successfully passed, the middleware routes the request to the appropriate internal microservice. This routing is often based on the request's content, such as the endpoint being accessed or the type of operation being requested.
