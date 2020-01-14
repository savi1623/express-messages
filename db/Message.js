//Message Model
const db = require('./config');
const mongoose = require('mongoose');


let messageSchema = new mongoose.Schema({
  name: String,
  message: String
});

let Message = mongoose.model('Message', messageSchema);


//equals model

module.exports = Message;
