const User = require('../models/userSchema');
const Message = require('../models/messageSchema');

const userConnected = async (uid) => {
  const user = await User.findById(uid);
  user.online = true;
  await user.save();
  return user;
};

const userDisconnected = async (uid) => {
  const user = await User.findById(uid);
  user.online = false;
  await user.save();
  return user;
};

const getUsers = async (uid) => {
  let users = await User.find().sort('-online');

  return users;
};

const createMessage = async (payload) => {
  try {
    const msg = new Message(payload);
    await msg.save();
    return msg;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  userConnected,
  userDisconnected,
  getUsers,
  createMessage,
};
