# Corbik Requirements Elicitation

- [Corbik Requirements Elicitation](#corbik-requirements-elicitation)
  * [Description](#description)
  * [User](#user)
  * [Food Library](#food-library)
  * [Log Entries](#log-entries)
  * [Application Deployment](#application-deployment)
  * [Outros](#outro)

## Description

Corbik is an application which helps people understand how their body works.

## User

| Feature                                     | Description                                                  | Notes |
| ------------------------------------------- | ------------------------------------------------------------ | ----- |
| Create Account                              | Create a new user in the application. User gives email for registration. |      |
| Login                                       | Users should login to the system to use the application.     |       |
| Onboarding                                  | Users should finish onboarding to use the application.       |       |
| Forgot Password                             | Users should be able to reset their password.                |       |

## Food Library

| Feature                   | Description                                                  | Notes |
| ------------------------- | ------------------------------------------------------------ | ----- |
| Create a food             | Create a new food. User who creates a food will be its owner.|      |
| Delete a food             | Deleting a food deletes all the log entries that uses it.    |      |
| Clone a food              | When trying to use a food of another user, the food will be cloned and the log entry will be linked to it. |      |
| Search food               | User should be able to search through their Food Library and the public one. |      |

## Log Entries

| Feature                  | Description                                               | Notes |
| ------------------------ | --------------------------------------------------------- | ----- |
| Create a log             | User should be able to create a log.                      |       |
| Update a log             | User should be able to update their logs.                 |       |
| Delete a log             | User should be able to delete their logs.                 |       |

## Application Deployment

| Feature                   | Description                                               | Notes |
| ------------------------- | --------------------------------------------------------- | ----- |
| Dockerize the application | Easy deployment with docker-compose                       |       |

## Outro

| Feature                   | Description                                                  | Notes |
| ------------------------- | ------------------------------------------------------------ | ----- |
| Implement product analytics tool | User events should be tracked for usability improvements. |       |
| Feedback tool             | Users should be able to easily give feedback.                    |       |
| Documentation             | It should be easy to understand how the application works.       |       |