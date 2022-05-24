const express = require('express');
const dotenv = requrie('dotenv');
var cors = require('cors');
const http = require('http');
const soketIO = require('socket.io');

const app = express();
const httpServer = http.createServer(app);

const socketServer = socketIO(httpServer, {

    cors: (
        origin: '*' // for sockets to connect



    )}