const multer = require('multer');
const upload = multer({ dest: 'public/img/users' });
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/users');
  },
  filename: (req, file, cb) => {
    // user-userId-timestamp.jpg
    const ext = file.mimetype.split('/')[1];
    cb(null, `user-${req.body.userId}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(x, false);
  }
};

module.exports = {
  saveProfileImage: (req, res, next) => {
    console.log(req.file);
    console.log(req.body);
    res.send('hello');
  },
  photoUpload: (req, res, next) => {
    upload.single('photo');
  },
};
