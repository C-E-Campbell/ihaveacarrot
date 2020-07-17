require('dotenv').config({ path: '../../.env' });
const Users = require('../models/user');
const { secret } = process.env;
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

function tokenGen(result) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: result._id, iat: timestamp }, secret);
}

module.exports = {
  login: async function (req, res, next) {
    const { email, user, password } = req.body;

    const result = await Users.findOne({ email });

    if (!result) {
      return res.status(404).json({ success: false });
    }

    bcrypt.compare(password, result.password, function (err, result) {
      if (result) {
        const token = tokenGen(result);
        return res.json({ success: true, token }).status(200);
      } else {
        return res.status(666).json({ success: false });
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
      bcrypt.hash(password, 12, async function (err, hash) {
        const newUser = new Users({
          user,
          email,
          password: hash,
        });

        newUser.save();
        const result = await Users.findOne({ email });
        const token = tokenGen(result);
        return res.status(200).json({ success: true, token });
      });
    } else {
      return res.status(422).json({ success: false });
    }
  },
  loginn: function (req, res, next) {
    res.send('hell');
  },
};
