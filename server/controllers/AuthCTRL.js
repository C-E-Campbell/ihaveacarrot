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
  login: async (req, res, next) => {
    const token = tokenGen(req.user);
    return res.status(200).json({ success: true, token });
  },
  register: async (req, res, next) => {
    const { email, user, password } = req.body;

    const checkEmail = await Users.findOne({ email });
    const checkuser = await Users.findOne({ user });

    if (!checkEmail && !checkuser) {
      bcrypt.hash(password, 12, async (err, hash) => {
        const newUser = new Users({
          user,
          email,
          password: hash,
        });

        await newUser.save();
        const result = await Users.findOne({ email });
        if (result) {
          const token = tokenGen(result);
          return res.status(200).json({ success: true, token });
        }
      });
    } else {
      return res.status(422).json({ success: false });
    }
  },
};
