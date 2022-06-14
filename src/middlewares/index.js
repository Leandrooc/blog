const validateUserData = require('./validateUserData');
const isNotEmpty = require('./isNotEmpty');
const authenticate = require('./authentication');
const validatePostData = require('./validatePostData');

module.exports = {
  validateUserData,
  isNotEmpty,
  authenticate,
  validatePostData,
};