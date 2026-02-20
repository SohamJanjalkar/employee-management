# Employee Management System (MERN Stack)

A full-stack Employee Management application built using the MERN stack.  
This project implements authentication, employee CRUD operations, image upload, search & filter functionality, and a clean dashboard UI.

## 🚀 Tech Stack

### Frontend
- React.js
- Axios
- CSS (Custom styling)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (Image Upload)

## ✨ Features Implemented
### 🔐 Authentication
- User login with username/email & password
- JWT token generation on successful login
- Protected routes using authentication middleware
- Logout functionality (clears token)

### 🧑‍💼 Employee Management
- Create employee with details:
  - Full Name
  - Date of Birth
  - Email
  - Phone Number
  - Department (Dropdown)
  - Designation (Dropdown)
  - Gender
  - Employee Photo (Image Upload)
- Backend validation for required fields
- Store employee data in MongoDB
- Delete employee functionality

### 📊 Dashboard
- Structured dashboard layout:
  - Header
  - Search & filter controls
  - Employee table
- Employee photo displayed as avatar
- Responsive and clean UI

### 🔍 Search & Filter (Backend-driven)
- Search employees by:
  - Name
  - Email
- Filter employees by:
  - Department
  - Designation
  - Gender
- Search and filters work together using query parameters

## 🗂️ Project Structure

employee-management/
│
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── pages/
│ └── components/
│
├── server/ # Node + Express backend
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── uploads/
│
└── README.md

🔐 Authentication Flow

User logs in using username/email & password
Backend verifies credentials
JWT token is generated and sent to frontend
Token is stored in localStorage
Token is sent in Authorization header for protected routes

🖼️ Image Upload Handling

Employee photo is uploaded using multipart/form-data
Multer stores images in server/uploads/
Images are served statically using Express
Images displayed in dashboard table

API Endpoints
Auth
POST /api/auth/login – User login
POST /api/auth/register – User registration (if enabled)

Employees
POST /api/employees – Create employee
GET /api/employees – Get employees (search & filter supported)
DELETE /api/employees/:id – Delete employee

All employee routes are JWT protected.

Setup Instructions (Local)

``` Clone the Repository
bash
git clone https://github.com/<your-username>/employee-management-mern.git
cd employee-management-mern

Backend Setup
cd server
npm install

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start backend server:
npx nodemon index.js

Backend runs on:
http://localhost:5000

Frontend Setup
cd client
npm install
npm start

Frontend runs on:
http://localhost:300
