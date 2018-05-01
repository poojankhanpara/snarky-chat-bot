'use strict'

const express = require('express');
const initHttpServer = require('./src/api')


const app = express();

initHttpServer(app);
