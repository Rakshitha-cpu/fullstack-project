
# 📘 Learning Report – Task 2: Simple REST API Using Node.js & Express.js

## 🌟 Overview

As part of my Full Stack Development Internship, I developed a Simple REST API using Node.js and Express.js. The goal of this task was to understand how backend servers work, how APIs are created, and how data can be managed through CRUD operations.

This project helped me gain practical experience in server-side development and improved my understanding of how modern web applications communicate with backend services.

---

# 🎯 Objectives Completed

✅ Set up a Node.js development environment

✅ Installed and configured Express.js

✅ Created a RESTful API server

✅ Implemented CRUD operations

✅ Tested API endpoints using Thunder Client

✅ Implemented proper HTTP status codes

✅ Handled common API errors

✅ Managed project using Git and GitHub

---

# 🛠 Technologies Used

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| Node.js        | JavaScript Runtime Environment |
| Express.js     | Backend Framework              |
| Thunder Client | API Testing Tool               |
| Git            | Version Control                |
| GitHub         | Repository Hosting             |
| VS Code        | Development Environment        |

---

# 📚 Key Concepts Learned

## 1. REST API

A REST API (Representational State Transfer Application Programming Interface) enables communication between a client and a server using standard HTTP methods.

REST APIs are widely used in modern web applications because they are simple, scalable, and easy to maintain.

---

## 2. Express.js Framework

Express.js is a lightweight framework built on top of Node.js that simplifies the process of building web servers and APIs.

I learned how Express makes routing and request handling much easier compared to using pure Node.js.

---

## 3. CRUD Operations

CRUD represents the four fundamental operations performed on data:

### Create

Adds new data to the system.

Example:

POST /users

### Read

Retrieves data from the system.

Example:

GET /users

### Update

Modifies existing data.

Example:

PUT /users/1

### Delete

Removes data from the system.

Example:

DELETE /users/2

---

## 4. HTTP Methods

During this task, I learned the purpose of different HTTP methods:

| Method | Purpose       |
| ------ | ------------- |
| GET    | Retrieve Data |
| POST   | Create Data   |
| PUT    | Update Data   |
| DELETE | Remove Data   |

Understanding these methods helped me design API endpoints more effectively.

---

# 🚧 Challenges Faced and Solutions

## Challenge 1: Git Push Rejected

### Problem

While pushing my project to GitHub, I encountered an error because the remote repository contained files that were not present locally.

### Solution

I used:

git pull origin main --allow-unrelated-histories

to synchronize local and remote repositories before pushing my changes.

### Learning

I learned how Git manages repository history and how to resolve push conflicts.

---

## Challenge 2: Understanding Thunder Client

### Problem

Initially, I was unsure how to test POST, PUT, and DELETE requests.

### Solution

I explored Thunder Client and learned how to send requests with JSON bodies and inspect API responses.

### Learning

I understood how frontend applications communicate with backend APIs using HTTP requests.

---

## Challenge 3: Request Body Error

### Problem

I encountered the following error:

TypeError: Cannot read properties of undefined (reading 'name')

### Solution

I correctly configured JSON request bodies and used:

app.use(express.json());

to parse incoming JSON data.

### Learning

I learned the importance of middleware in Express.js.

---

# 💡 Skills Gained

Through this project, I improved my skills in:

* Backend Development
* API Design
* Express.js Routing
* HTTP Protocol
* JSON Data Handling
* Error Handling
* API Testing
* Git & GitHub Workflow
* Debugging and Problem Solving

---

# 🏆 Outcome

Successfully developed and tested a fully functional REST API using Node.js and Express.js with complete CRUD functionality.

This project strengthened my understanding of backend development concepts and provided hands-on experience in building and testing APIs that can be integrated into real-world web applications.

---

## ✨ Personal Reflection

This task was my first practical experience building a backend application from scratch. It helped me understand how data flows between clients and servers, how APIs are structured, and how professional developers test and manage backend projects.

Completing this project increased my confidence in backend development and prepared me for more advanced full-stack development projects in the future.
