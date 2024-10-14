# API Endpoints

## Create Issue

### Endpoint

`POST /api/issues/create`

### Description

Creates a new issue in the system.

### Request Headers

- `Authorization`: Bearer token for authentication.

### Request Body

- `title`: The title of the issue (string, required).
- `body`: The body of the issue (string, required).

### Response

Returns the created issue object with status code 201 on success.