<div align="center">

# 📌 Biz Insights Backend  
A production-ready Node.js + Express backend with secure JWT authentication, MongoDB persistence, and a scalable architecture.

---

![NodeJS](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Status](https://img.shields.io/badge/Status-ACTIVE--DEVELOPMENT-blueviolet?style=for-the-badge&logo=github)

</div>

---


---

# 📑 Table of Contents
- [✨ Features](#-features)  
- [🛠 Tech Stack](#-tech-stack)  
- [📁 Project Structure](#-project-structure)  
- [🔑 Environment Variables](#-environment-variables)  
- [🚦 API Endpoints](#-api-endpoints)  
- [🔒 Authentication Workflow](#-authentication-workflow)  
- [▶️ Running Locally](#️-running-locally)  
- [🧩 Planned Features (Phase 2)](#-planned-features-phase-2)  
- [👤 Author](#-author)

---

## ✨ Features
- 🔐 **Full Authentication System**
  - Register new users  
  - Login users  
  - Passwords hashed with bcrypt  
  - JWT token generation  
  - Protected routes  

- 🗄 **MongoDB Data Layer**
  - Mongoose schema  
  - DB connection handler  

- 🧱 **Clean Architecture**
  - Controllers  
  - Models  
  - Routes  
  - Middleware  
  - Utils  

- 🔮 **Future-Ready Infrastructure**
  - CSV upload support  
  - Analytics endpoints  
  - Dashboard metrics  
  - AI insights  

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT**
- **bcryptjs**
- **dotenv**
- **Nodemon**

---

## 🔑 Environment Variables
Create a `.env` file in the project root:


> `.env` is ignored via `.gitignore` for security.

---

## 🚦 API Endpoints

---

### 🟦 Register User  
`POST /api/auth/register`

**Body:**
```json
{
  "username": "safi",
  "email": "safi@test.com",
  "password": "password123"
}
```
---

### 🟦 Login User  
`POST /api/auth/login`

**Body:**
```json
{
  "email": "safi@test.com",
  "password": "password123"
}
```

---

### 🔐 Protected Route  
GET /api/auth/protected`

**Headers:**

Authorization: Bearer <JWT_TOKEN>

**Response:**
```json
{
  "message": "Access granted",
  "user": {
    "id": "user_id_here",
    "email": "user_email_here"
  }
}
```

---

### 🔒 Authentication Workflow 

1. User registers → password hashed → JWT generated
2. User logs in → receives JWT token
3. On protected routes, client sends:

Authorization: Bearer <token>

4. Middleware validates the token 
5. Access granted only if the token is valid

---

### ▶️ Running Locally

## 1️⃣ Install dependencies

npm install

## 2️⃣ Create .env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

## 3️⃣ Start development server

npm run dev

Server runs at:

http://localhost:5000

---

## 🧠 What I Learned

Building the Biz Insights backend strengthened my understanding of real-world backend development, including:

- Designing a **modular Express architecture** using routes, controllers, middleware, and utilities
- Implementing **JWT authentication** and protecting API routes securely
- Managing **user-specific data access** to prevent unauthorized dataset access
- Handling **file uploads with Multer** and validating CSV inputs
- Parsing and storing structured CSV data in **MongoDB using Mongoose**
- Writing analytics logic to extract **numeric insights and summaries** from datasets
- Debugging common production issues such as environment variables, file paths, and database authentication
- Structuring APIs with scalability in mind for future features like AI insights and dashboards

This project helped bridge the gap between theoretical backend knowledge and production-ready API development.

---