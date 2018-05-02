'use strict'

const express = require('express');
const initHttpServer = require('./src/api')

const APIAI_TOKEN = "754774bf5754433dbbc691c4436abcd0"
const APIAI_SESSION_ID = "12asdlashr34sfsd"
const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const apiai = require('apiai')(APIAI_TOKEN);

const io = require('socket.io')(initHttpServer(app))

io.on('connection', function(socket) {
  socket.on('chat message', (text) => {
    // Get a reply from API.AI

    let apiaiReq = apiai.textRequest(text, {
      sessionId: APIAI_SESSION_ID
    });

    apiaiReq.on('response', (response) => {
      let aiText = response.result.fulfillment.speech;
      socket.emit('bot reply', aiText); // Send the result back to the browser!
    });

    apiaiReq.on('error', (error) => {
      console.log(error);
    });

    apiaiReq.end();

  });
});
