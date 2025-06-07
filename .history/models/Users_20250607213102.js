const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String, 
    maxlength: 50, 
  },
  email: {
    type: String, 
    trim: true, 
  }
})