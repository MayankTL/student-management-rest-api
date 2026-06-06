const mongoose = require('mongoose');
const Student = require('../models/Student');

// Create a new student and save it to MongoDB
const createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    // Forward any error to the error handling middleware
    next(error);
  }
};

// Get all students with optional search, filter, sort, and pagination
const getStudents = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search, sort, course } = req.query;
    const query = {};

    // Filter by course if provided
    if (course) {
      query.course = { $regex: new RegExp(course, 'i') };
    }

    // Search by name or email if provided
    if (search) {
      query.$or = [
        { name: { $regex: new RegExp(search, 'i') } },
        { email: { $regex: new RegExp(search, 'i') } },
      ];
    }

    const sortOption = {};
    if (sort) {
      sortOption[sort] = 1;
    }

    const students = await Student.find(query)
      .sort(sortOption)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Student.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      students,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single student by ID
const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    next(error);
  }
};

// Update a student by ID
const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    next(error);
  }
};

// Delete a student by ID
const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
