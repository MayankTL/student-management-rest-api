// Global error handler for Express
const errorHandler = (err, req, res, next) => {
  console.error(err);

  let statusCode = 500;
  let message = 'Internal server error';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
  }

  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue)[0];
    message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  }

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
