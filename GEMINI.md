# Updated Tech Stack

Backend:

* Node.js
* Express.js

Database:

* MongoDB

ODM:

* Mongoose

Validation:

* express-validator

Development:

* Nodemon

Testing:

* Postman

---

# Folder Structure

student-management-api/

├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── middleware/
│   ├── errorHandler.js
│   └── validation.js
│
├── models/
│   └── Student.js
│
├── routes/
│   └── studentRoutes.js
│
├── .env
├── app.js
├── package.json
├── README.md
└── postman_collection.json

---

# MongoDB Requirements

Use MongoDB Atlas or Local MongoDB.

Use Mongoose for database operations.

Create database connection file:

config/db.js

Example responsibilities:

* Connect to MongoDB
* Handle connection success
* Handle connection failure
* Export connection function

Add comments explaining each step.

---

# Environment Variables

Create a .env file:

PORT=5000

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/studentdb

Do NOT hardcode database credentials.

Load variables using dotenv.

---

# Required Dependencies

Install:

express
mongoose
dotenv
cors
express-validator

Development Dependencies:

nodemon

---

# Student Schema

Create Student Schema using Mongoose.

Fields:

name

* String
* Required
* Minimum length: 3

email

* String
* Required
* Unique
* Valid email

age

* Number
* Required
* Minimum: 5
* Maximum: 100

course

* String
* Required

timestamps

* createdAt
* updatedAt

Example Schema Structure:

{
name: String,
email: String,
age: Number,
course: String
}

Enable:

{
timestamps: true
}

---

# Controller Requirements

Use Mongoose methods.

Create Student:

* Student.create()

Get All Students:

* Student.find()

Get Student By ID:

* Student.findById()

Update Student:

* Student.findByIdAndUpdate()

Delete Student:

* Student.findByIdAndDelete()

Use async/await everywhere.

Include beginner-friendly comments explaining every database operation.

---

# Database Connection

In app.js:

1. Import connectDB()
2. Connect MongoDB before starting server
3. Start Express server only after successful DB connection

Example Flow:

connectDB()
↓
Database Connected
↓
Start Express Server

---

# API Features

CRUD Endpoints:

POST /students

GET /students

GET /students/:id

PUT /students/:id

DELETE /students/:id

All endpoints must interact with MongoDB using Mongoose.

---

# Error Handling

Handle:

* Invalid MongoDB ObjectId
* Student Not Found
* Duplicate Email
* Database Connection Errors
* Validation Errors

Return proper HTTP status codes and meaningful messages.

Example:

{
"message": "Student not found"
}

or

{
"message": "Email already exists"
}

---

# Bonus Features (Recommended)

Implement:

1. Pagination

GET /students?page=1&limit=10

2. Search Students

GET /students?search=john

3. Sort Students

GET /students?sort=age

4. Filter By Course

GET /students?course=Computer Science

Use Mongoose query methods and include comments explaining query building.

---

# Expected Final Deliverables

Generate:

✔ MongoDB Connection Setup

✔ Mongoose Student Model

✔ Express Routes

✔ Controllers

✔ Validation Middleware

✔ Error Handling Middleware

✔ Environment Variables

✔ README.md

✔ Postman Collection

✔ Fully Commented Code

✔ Production-ready Folder Structure

The final project should run using:

npm install

npm run dev

and store all student data in MongoDB.
