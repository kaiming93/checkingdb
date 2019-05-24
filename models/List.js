const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  checking:{
    type: String,
    required: false
  },
  checkout:{
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('list', ListSchema);