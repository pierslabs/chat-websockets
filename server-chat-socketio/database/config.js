const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://mongo-chat:27017');

    console.log('DB online 😃!!!');
  } catch (error) {
    console.log(error.message);
    throw new Error('DB connect error 💣!!! View logs 🤓!!');
  }
};

module.exports = {
  dbConnection,
};
