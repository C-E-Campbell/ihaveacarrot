const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

// Define the model

const userSchema = new Schema({
  user: {
    type: String,
    unique: true,
    lowercase: true,
    minlength: 4,
    trim: true,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
    required: [true, 'Please provide your email!'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Please provide a password'],
    minlength: 5,
  },
  photo: { type: String },
});

// Create the model class

const ModelClass = mongoose.model('users', userSchema);

// Export the model

module.exports = ModelClass;
