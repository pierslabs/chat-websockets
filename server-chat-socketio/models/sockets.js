class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      console.log('client conected 😄!!');

      // TODO: Validate token

      // TODO: get active users 'uid'

      // TODO Emit all conected users

      // TODO: Socket join  uid,  hall

      // TODO listen user emit msg

      // TODO: disconect user  'DB'
    });
  }
}

module.exports = Sockets;
