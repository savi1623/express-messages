const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

module.exports = mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req,res) => res.send('Server Up'));

app.listen(port, () => console.log('server up on port: ' + port));