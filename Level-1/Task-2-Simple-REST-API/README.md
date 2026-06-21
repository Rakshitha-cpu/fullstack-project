# 🚀 Task 2: Simple REST API using Node.js & Express

## 📌 Project Overview

This project demonstrates the development of a RESTful API using **Node.js** and **Express.js**. The API performs complete CRUD (Create, Read, Update, Delete) operations on a User resource and follows REST architecture principles.

The project was developed as part of a Full Stack Development Internship to understand backend development fundamentals, API design, HTTP methods, and server-side programming.

---

## 🎯 Objectives

* Set up an Express.js server
* Create REST API endpoints
* Perform CRUD operations on user data
* Handle errors and return proper HTTP responses
* Test API endpoints using Thunder Client/Postman
* Manage project using Git and GitHub

---

## 🛠️ Tech Stack

| Technology     | Purpose             |
| -------------- | ------------------- |
| Node.js        | Runtime Environment |
| Express.js     | Backend Framework   |
| Thunder Client | API Testing         |
| Git            | Version Control     |
| GitHub         | Repository Hosting  |

---

## 📂 Project Structure

```text
Task-2-Simple-REST-API
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── api-documentation.md
├── screenshots
│   ├── server-running.png
│   ├── get-users.png
│   ├── post-user.png
│   ├── update-user.png
│   └── delete-user.png
│
└── notes
    └── learning-report.md
```

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd Task-2-Simple-REST-API
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

---

## 🔥 API Endpoints

### Get All Users

```http
GET /users
```

### Get User By ID

```http
GET /users/:id
```

### Create New User

```http
POST /users
```

Request Body:

```json
{
  "name": "Priya"
}
```

### Update User

```http
PUT /users/:id
```

Request Body:

```json
{
  "name": "Rakshitha Updated"
}
```

### Delete User

```http
DELETE /users/:id
```

---

## ✅ Features Implemented

* RESTful API Architecture
* CRUD Operations
* JSON Data Handling
* Dynamic Route Parameters
* Error Handling
* HTTP Status Codes
* API Testing with Thunder Client
* GitHub Version Control

---

## 📸 Testing Evidence

The `screenshots` folder contains proof of successful execution of:

* GET Requests
* POST Requests
* PUT Requests
* DELETE Requests
* Server Execution

---

## 📚 Learning Outcomes

Through this project, I learned:

* Express.js fundamentals
* REST API development
* CRUD implementation
* Request and Response handling
* Error management
* API testing techniques
* Git and GitHub workflow

---

## 👩‍💻 Author

**Rakshitha R**

Full Stack Development Intern
