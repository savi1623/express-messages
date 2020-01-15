const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Message = require('./db/Message');

app.use(bodyParser.json());



// let newMessage = new Message();
// newMessage.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

app.post('/api/messages', (req, res) => {
  //for the create
  Message.create(req.body)
    .then((message) => {
  res.set('status', 201)
  res.send('Made Post Request')
})
});

app.get('/api/messages', (req, res) => {
  //for the find or find1
  Message.find(req.body)
   .then((message) => {
     res.set('status', 200);
     res.send('Made Get Request')
   })
});

app.get('/api/messages' + Message.id, (req, res) => {
  //for the find or find1
  Message.findOne()
    .then(() => {
      res.set('status', 200);
      res.send('Message found')
    })
});

app.put('/api/messages'+ Message.id, (req, res) => {
  //for the update
  Message.update()
    .then(() => {
      res.set('status', 201);
      res.send('Message Updated');
    })
});

app.delete('/api/messages'+ Message.id, (req, res) => {
  //for the delete
  Message.findOneAndDelete()
    .then(() => {
      res.send('Message Deleted');
    })
});

// app.use((req, res, next) => {
//   res.status(404).send(‘That route does not exist’);
// });

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
