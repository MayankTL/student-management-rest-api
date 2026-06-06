const express = require('express');
const { body } = require('express-validator');
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');
const validateRequest = require('../middleware/validation');

const router = express.Router();

const studentValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ min: 5, max: 100 })
    .withMessage('Age must be between 5 and 100'),
  body('course')
    .trim()
    .notEmpty()
    .withMessage('Course is required'),
];

router.post('/', studentValidationRules, validateRequest, createStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.put('/:id', studentValidationRules, validateRequest, updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
