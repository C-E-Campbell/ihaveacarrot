const Users = require('../models/user');
const bcrypt = require('bcrypt');
module.exports = {
  login: async function (req, res, next) {
    const { email, user, password } = req.body;

    const result = await Users.findOne({ email });

    if (!result) {
      return res.status(404).json('Create an account');
    }

    bcrypt.compare(password, result.password, function (err, result) {
      if (result) {
        // token?
        return res.json(result).status(200);
      } else {
        return res.status(666).json('Invalid username or pass');
      }
    });
  },
  register: async function (req, res, next) {
    const { email, user, password } = req.body;

    // user names and emails are unique in the db - checking them here
    const checkEmail = await Users.findOne({ email });
    const checkuser = await Users.findOne({ user });

    // if they dont exist - hash pass and save the user
    if (!checkEmail && !checkuser) {
      bcrypt.hash(password, 12, function (err, hash) {
        const newUser = new Users({
          user,
          email,
          password: hash,
        });

        newUser.save();
      });

      return res.status(200).json('Account Created');
    } else {
      return res
        .status(422)
        .json('Email or User Name in use. Already have an account?');
    }
  },
};
