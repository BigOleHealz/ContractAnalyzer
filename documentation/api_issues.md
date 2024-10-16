# API Documentation for Issue Creation

## Endpoint

`POST /api/issues`

## Description

This endpoint allows authenticated users to create issues programmatically.

## Request

### Headers

- `Authorization`: Bearer token for authentication.

### Body Parameters

- `title` (string, required): The title of the issue.
- `description` (string, required): The description of the issue.
- `priority` (string, required): The priority of the issue. Must be one of `low`, `medium`, or `high`.

## Responses

- `201 Created`: Issue created successfully.
- `400 Bad Request`: Validation error with details.
- `401 Unauthorized`: Missing or invalid authentication token.
- `500 Internal Server Error`: An error occurred on the server.

## Example

```bash
curl -X POST https://yourapi.com/api/issues \
  -H 'Authorization: Bearer YOUR_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"title": "Issue Title", "description": "Issue Description", "priority": "high"}'
```