const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('list', ListSchema);