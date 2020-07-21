module.exports = {
  saveProfileImage: (req, res, next) => {
    console.log(req.file);
    res.send('hello');
  },
};
