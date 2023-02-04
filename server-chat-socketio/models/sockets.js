const {
  userConnected,
  userDisconnected,
  getUsers,
} = require('../controllers/sockets.controller');
const { verifyJWT } = require('../helpers/jwt');

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', async (socket) => {
      const token = socket.handshake.query['x-token'];

      const [valid, uid] = verifyJWT(token);

      if (!valid) {
        console.log('Unidentified socket 👮.');
        return socket.disconnect();
      }

      await userConnected(uid);

      console.log('client conected 😄!!', { uid });

      // TODO: Validate token

      // TODO: get active users 'uid'

      // TODO Emit all conected users
      this.io.emit('get', await getUsers());

      // TODO: Socket join  uid,  hall

      // TODO listen user emit msg

      // TODO: disconect user  'DB'

      socket.on('disconnect', async () => {
        console.log('client disconnect!!');
        await userDisconnected(uid);
        this.io.emit('get', await getUsers());
      });
    });
  }
}

module.exports = Sockets;
