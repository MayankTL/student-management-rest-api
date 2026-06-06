const mongoose = require('mongoose');

// Define the Student schema with validation rules.
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [3, 'Name must be at least 3 characters long'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: [5, 'Age must be at least 5'],
      max: [100, 'Age must be 100 or less'],
    },
    course: {
      type: String,
      required: [true, 'Course is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
