'use strict'

const express = require('express');
const initHttpServer = require('./src/api')


const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images


initHttpServer(app);
