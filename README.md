<div align="center">

# 📌 Biz Insights Backend  
A production-ready Node.js + Express backend with secure JWT authentication, MongoDB persistence, and a scalable architecture.

---

## 🏷️ Tech Stack

![Python](https://img.shields.io/badge/PYTHON-3776AB?style=flat-square&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/PANDAS-150458?style=flat-square&logo=pandas&logoColor=white)
![Matplotlib](https://img.shields.io/badge/MATPLOTLIB-003B57?style=flat-square&logo=matplotlib&logoColor=white)
![Data Automation](https://img.shields.io/badge/DATA--AUTOMATION-46A037?style=flat-square)


</div>

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

## 📁 Project Structure

---


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
