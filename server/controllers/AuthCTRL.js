const Users = require('../models/user');

module.exports = {
  login: async function (req, res, next) {
    const { email, user, password } = req.body;

    const data = await Users.find();
    console.log(data);
    res.send('logged in');
  },
  register: async function (req, res, next) {
    const { email, user, password } = req.body;

    const newUser = new Users({
      user,
      email,
      password,
    });

    await newUser.save();

    res.send('registered');
  },
};
