const emailAndPassword = require('../schemas/emailAndPassword');

module.exports = async (req, res, next) => {
    const result = await emailAndPassword.validateAsync(req.body);
    console.log(result);
    next();
};