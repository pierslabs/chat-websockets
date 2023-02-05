const {
  userConnected,
  userDisconnected,
  getUsers,
  createMessage,
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

      // TODO: ADD user to chat room
      socket.join(uid);

      // TODO: Validate token

      // TODO: get active users 'uid'

      // TODO Emit all conected users
      this.io.emit('get', await getUsers());

      // TODO: Socket join  uid,  hall

      // TODO listen user emit msg

      socket.on('message-to-user', async (payload) => {
        const message = await createMessage(payload);
        this.io.to(payload.to).emit('message-to-user', message);
        this.io.to(payload.from).emit('message-to-user', message);
      });

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
