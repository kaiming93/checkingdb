const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  object:{
    type: Array,
    required: false
  },
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);