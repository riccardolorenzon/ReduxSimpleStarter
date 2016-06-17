// main starting point of the application

// parse response + routing
const express = require('express');
// handle http request
const http = require('http');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

//mongodb ORM
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
// every request is gonna go through morgan(loggin system) ...
app.use(morgan('combined'));
// ... and be parsed
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on:', port);
