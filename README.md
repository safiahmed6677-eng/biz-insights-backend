# 📌 Biz Insights Backend  
A Node.js + Express backend with secure JWT authentication, MongoDB persistence, and modular architecture — built as part of a full-stack SaaS web application.

---

## ⭐ Features
- 🔐 **User Authentication**
  - Register new users  
  - Login users  
  - Password hashing with bcrypt  
  - JWT authentication  
  - Protected routes  

- 🗄 **MongoDB Integration**
  - Connection via Mongoose  
  - Clean schema design  

- 🧱 **Modular Architecture**
  - Controllers  
  - Routes  
  - Models  
  - Middleware  
  - Utils  

- 🚀 **Scalable Structure**
  - Designed to add CSV upload  
  - Analytics endpoints  
  - Dashboard functionality  
  - AI/insight features  

---

## 🛠 Tech Stack
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT (jsonwebtoken)  
- bcryptjs  
- dotenv  
- Nodemon  

---

## 📁 Project Structure



---

## 🔑 Environment Variables
Create a `.env` file in the project root:


> `.env` is ignored via `.gitignore` for security.

---

## 🚦 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user and receive JWT |
| GET  | `/api/auth/protected` | Protected route (requires token) |

---

## 🔒 Authentication Workflow
1. User registers → password hashed → JWT created  
2. User logs in → receives JWT  
3. JWT is passed in request headers:

4. Middleware validates the token  
5. Access is granted to protected routes  

---

## ▶️ Running Locally

### 1️⃣ Install dependencies


### 2️⃣ Create your `.env` file  
Add MongoDB credentials & JWT secret.


### 2️⃣ Create your `.env` file  
Add MongoDB credentials & JWT secret.

### 3️⃣ Start development server

Server defaults to:
http://localhost:5000

MongoDB must be running locally or via MongoDB Atlas.

---

## 🧩 Planned Features (Phase 2)
- CSV upload & parsing  
- Data analytics & insights  
- User dashboard  
- Chart endpoints for frontend  
- AI-generated business insights  
- Role-based access control  
- Deployment (Render/Netlify/Vercel)  

---

## 🧑‍💻 Author
**Safi Ahmed**  
Developing a production-grade full-stack SaaS application using modern web technologies.

