// Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { dbConnection } = require('../database/config');
const cors = require('cors');

const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // DB Connection
    dbConnection();

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {});
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use('/api/v1', require('../router/index'));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server Run at port:', this.port);
    });
  }
}

module.exports = Server;
