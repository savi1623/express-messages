const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Message = require('./db/Message');

app.use(bodyParser.json());
app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

//where to write app.post routes and app.get routes using class that is Message
//for app/message

app.post('/messages', (res, req) => {
  //for the create
  Message.create({name, message})
    .then(() => {
  res.status(201);
  res.send('Made Post Request')})
});

app.get('/messages', (res, req) => {
  //for the find or find1
  Message.find();
});

app.get('/messages' + Message.id, (res, req) => {
  //for the find or find1
  Message.findOne();
});

app.put('/messages'+ Message.id, (res, req) => {
  //for the update
  Message.update();
});

app.delete('/messages'+ Message.id, (res, req) => {
  //for the delete
  Message.findOneAndDelete();
});

module.exports = app;
