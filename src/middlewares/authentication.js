const { authToken } = require('../utils/jwt');

const eslintFix = (error) => error;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    const user = authToken(token);
  
    if (!user) {
      throw eslintFix({ status: 401, message: 'Invalid token' });
    }

    res.locals.user = user;
    next();
};