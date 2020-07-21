module.exports = {
  saveProfileImage: (req, res, next) => {
    console.log(req.file);
    console.log(req.body);
    res.send('hello');
  },
};
