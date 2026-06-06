# Student Management API

A simple RESTful API for managing student records using Node.js, Express, MongoDB, and Mongoose.

## Features

- Create, read, update, and delete students
- Validation with `express-validator`
- Error handling for invalid IDs, validation failures, duplicate emails, and missing records
- Pagination, search, sort, and course filtering
- MongoDB connection handled in `config/db.js`

## Requirements

- Node.js 18+ recommended
- MongoDB Atlas or local MongoDB instance

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/studentdb
```

3. Start the server in development mode:

```bash
npm run dev
```

## Screenshots

### Create Student
![Create Student](images/CreateStudents.png)
*Create a student with name, email, age, and course.*

### Get Students
![Get Students](images/GetStudents.png)
*List students with pagination and filtering.*

### Get Student By ID
![Get Student By ID](images/GetStudentByID.png)
*Fetch a single student by ID.*

### Update Student
![Update Student](images/UpdateStudent.png)
*Update existing student details.*

### Delete Student
![Delete Student](images/deletestudent.png)
*Delete a student record successfully.*

### Server Running
![Server Running](images/serverrunning.png)
*Server started successfully after MongoDB connection.*

### Database Schema
![Database Schema](images/databaseschema.png)
*Student schema fields and types.*

## API Endpoints

- `POST /students` - Create a student
- `GET /students` - Get all students
- `GET /students/:id` - Get a single student by ID
- `PUT /students/:id` - Update a student
- `DELETE /students/:id` - Delete a student

## Query Parameters for `GET /students`

- `page` - page number for pagination
- `limit` - number of students per page
- `search` - search by name or email
- `sort` - sort by a field (for example `age`)
- `course` - filter by course name

## Example Request Body

```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 21,
  "course": "Computer Science"
}
```

## Notes

- The server starts only after MongoDB connects successfully.
- Validation errors and duplicate emails return meaningful responses.
