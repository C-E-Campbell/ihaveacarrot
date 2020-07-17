const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the model

const userSchema = new Schema({
  user: {
    type: String,
    unique: true,
    lowercase: true,
    minlength: 4,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 4,
  },
  password: { type: String, trim: true },
});

// Create the model class

const ModelClass = mongoose.model('user', userSchema);

// Export the model

module.exports = ModelClass;
