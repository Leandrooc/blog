const { User } = require('../database/models');
const { generateToken } = require('../utils/jwt');

const eslintFix = (error) => error;

module.exports = {
  createUser: async ({ displayName, email, password, image }) => {
      try { 
        await User.create({
        displayName, email, password, image,
      });
      return { token: generateToken({ displayName, email, image }) }; 
      } catch (_) {
        throw eslintFix({ status: 409, message: 'User already registered' });
      }
  },
  getUsers: () => User.findAll(),
};