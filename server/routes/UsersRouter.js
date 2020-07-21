const express = require('express');
const usersRouter = express.Router();
const { saveProfileImage, photoUpload } = require('../controllers/UsersCTRL');
const { photoUpload } = require('../controllers/ServiceCtrl');

usersRouter.use('/save_profile_image', photoUpload);

usersRouter.route('/save_profile_image').post(saveProfileImage);

module.exports = usersRouter;
