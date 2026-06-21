# API Documentation

## Base URL

http://localhost:3000

---

# 1. Get All Users

### Endpoint

GET /users

### Description

Returns all users available in the system.

### Success Response

Status Code: 200 OK

```json
[
  {
    "id": 1,
    "name": "Rakshitha"
  },
  {
    "id": 2,
    "name": "John"
  }
]
```

---

# 2. Get User By ID

### Endpoint

GET /users/:id

### Example

GET /users/1

### Description

Returns a specific user based on the provided ID.

### Success Response

Status Code: 200 OK

```json
{
  "id": 1,
  "name": "Rakshitha"
}
```

### Error Response

Status Code: 404 Not Found

```json
{
  "message": "User not found"
}
```

---

# 3. Create User

### Endpoint

POST /users

### Description

Creates a new user.

### Request Body

```json
{
  "name": "Priya"
}
```

### Success Response

Status Code: 201 Created

```json
{
  "message": "User created successfully",
  "user": {
    "id": 4,
    "name": "Priya"
  }
}
```

---

# 4. Update User

### Endpoint

PUT /users/:id

### Example

PUT /users/1

### Request Body

```json
{
  "name": "Rakshitha Updated"
}
```

### Success Response

Status Code: 200 OK

```json
{
  "message": "User updated successfully",
  "user": {
    "id": 1,
    "name": "Rakshitha Updated"
  }
}
```

### Error Response

Status Code: 404 Not Found

```json
{
  "message": "User not found"
}
```

---

# 5. Delete User

### Endpoint

DELETE /users/:id

### Example

DELETE /users/2

### Description

Deletes a user based on the provided ID.

### Success Response

Status Code: 200 OK

```json
{
  "message": "User deleted successfully"
}
```

### Error Response

Status Code: 404 Not Found

```json
{
  "message": "User not found"
}
```

---

# HTTP Status Codes Used

| Status Code | Meaning            |
| ----------- | ------------------ |
| 200         | Request Successful |
| 201         | Resource Created   |
| 400         | Bad Request        |
| 404         | Resource Not Found |

---

# Testing Tool

Thunder Client (VS Code Extension)

All endpoints were tested successfully using Thunder Client.
