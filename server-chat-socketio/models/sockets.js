const { verifyJWT } = require('../helpers/jwt');

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      const token = socket.handshake.query['x-token'];

      const [valid, uid] = verifyJWT(token);

      if (!valid) {
        console.log('Unidentified socket 👮.');
        return socket.disconnect();
      }

      console.log('client conected 😄!!', { uid });

      // TODO: Validate token

      // TODO: get active users 'uid'

      // TODO Emit all conected users

      // TODO: Socket join  uid,  hall

      // TODO listen user emit msg

      // TODO: disconect user  'DB'

      socket.on('disconnect', () => {
        console.log('client disconnect!!');
      });
    });
  }
}

module.exports = Sockets;
