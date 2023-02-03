const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.DB_URI);

    console.log('DB online 🚀!!!');
  } catch (error) {
    console.log(error.message);
    throw new Error('DB connect error 💣!!! View logs 🤓!!');
  }
};

module.exports = {
  dbConnection,
};
