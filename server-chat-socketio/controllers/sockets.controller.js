const User = require('../models/userSchema');

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

module.exports = {
  userConnected,
  userDisconnected,
  getUsers,
};
