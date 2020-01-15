//Message Model
const db = require('./config');
const mongoose = require('mongoose');


let messageSchema = new mongoose.Schema({
  id: Number,
  name: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);


//equals model

module.exports = Message;
