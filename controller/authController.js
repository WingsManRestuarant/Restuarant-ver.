const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const db = require('../utils/db')
const Admin = require('../models/Admin');

const authController = {
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const Admin = await Admin.findOne({ email });

      if (!Admin) {
        return res.send("<script>alert('Invalid account information! To gain access to the application, Please signup first.'); location.href='login'</script>");
      }

      const match = await bcrypt.compare(password, Admin.password);

      if (match) {
        req.session.admin = email;
        return res.redirect('/select');
      } else {
        return res.send("<script>alert('The Email or password you entered is incorrect! Please try again.'); location.href='login';</script>");
      }
    } catch (error) {
      return res.redirect('/select');
    }
  },
  validate: (method) => {
    switch (method) {
      case 'register': {
        return [
          body('name', 'Name is required').notEmpty(),
          body('email', 'Email is required').notEmpty(),
          body('email', 'Email is not valid').isEmail(),
          body('password', 'Password is required').notEmpty(),
          body('password', 'Password should be at least 8 characters').isLength({ min: 8 }),
        ];
      }
    }
  },
};

module.exports = authController;
