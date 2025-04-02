---
sidebar_position: 2
title: Users Service Features
---

## Features of the Users Service

### 1. User Profile Management:

**View and Update User Profiles:** Ability for users or administrators to view and update personal information stored in the user profiles. This may include core fields or custome fields depends on requirement.

### 2. Field Management

**Manage Core Fields:** Core fields are essential data attributes directly stored in the database (e.g., username, email, contact number). These are key identifiers and contact points for users.

**Update Core Fields:** Ability to update essential user information stored in the system. This could include updating usernames, contact details, or email addresses.

**Create Custom Fields:** Custom fields can be created for specific needs, such as gathering additional information beyond the core fields (e.g., gender, age group, location).

**Custom Field Types:** Support for multiple custom field types, such as text fields, dropdowns, radio buttons, checkboxes, etc.

Custom Field Examples: For instance, a gender field could use a radio button to allow users to select between options like "Male" or "Female." Custom fields are stored separately from core fields and can be managed based on the specific requirements of each tenant or user group.

### 3. Dynamic Form Management:

**Create Dynamic Form:** The ability to create dynamic forms based on specific requirements using customizable fields.


### 4. Tenant Management

**Create and Manage Tenants:** Ability to define and manage multiple tenants, which could represent distinct programs or domains within the system (e.g., different courses or educational programs).

**Assign Users to tenant:** Assign users to specific tenants, ensuring that each user is linked to the relevant domain or program.

**Update Tenants:** Modify tenant details as needed, such as updating tenant names, descriptions, or settings.

### 5. Cohort Management

**Create and Manage Cohorts:** Ability to group users based on common characteristics (e.g., by class, location, or course). Cohorts help organize users into smaller units for targeted management.

**Assign Users to Cohorts:** Users (e.g., students) can be assigned to specific cohorts, such as specific classes or groups within a state or program.

**Edit Cohorts:** Modify or update cohort membership and details, including adding/removing users from a cohort.

**Multi year Support:** Cohorts can be managed on an annual basis, allowing a cohort to be available in previous years but not in the current year, or a new cohort to be added for the current year. This flexibility is enabled through multiyear support.

### 6. Role Management

**Define Roles:** Ability to create and manage various roles such as Admin, Teacher, and Student. These roles define the level of access and responsibility for users within the system.

**Custom Roles:** Support for defining custom roles based on specific needs for each tenant, such as a specialized role for staff or course facilitators.

**Assign Roles to Users:** Assign appropriate roles to users based on their responsibilities (e.g., Admin for system-wide access, Teacher for course management, Student for course participation).

**Role-based Permissions:** Control and restrict user actions based on assigned roles, ensuring the right access levels.

### 7. Privilege Management (RBAC)

**Custom Privileges:** Ability to create custom privileges based on specific organizational needs, such as granting permissions for specific actions like creating users, managing courses, or updating user profiles.

**Role-Based Access Control (RBAC):** Privileges are mapped to specific roles, allowing for precise access control. Users with different roles (e.g., Admin, Teacher, Student) can be granted different sets of privileges.

**Privilege Assignment:** Ability to assign specific privileges to users depending on their role, ensuring that they have the necessary permissions for their tasks (e.g., Admins can create/delete users, Teachers can update course content).
