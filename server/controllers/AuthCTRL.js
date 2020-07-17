const Users = require('../models/user');

module.exports = {
  login: async function (req, res, next) {
    const { email, user, password } = req.body;

    const result = await Users.findOne({ email });

    if (!result) {
      res.status(404).json('Create an account');
      return;
    }

    res.json({ result }).status(200);
    return;
  },
  register: async function (req, res, next) {
    const { email, user, password } = req.body;
    const newUser = new Users({
      user,
      email,
      password,
    });
    const checkEmail = await Users.findOne({ email });
    const checkuser = await Users.findOne({ user });

    if (!checkEmail && !checkuser) {
      newUser.save();
      res.status(200).json('Account Created');
      return;
    } else {
      res.status(409).json('Already have an account?');
    }
  },
};
