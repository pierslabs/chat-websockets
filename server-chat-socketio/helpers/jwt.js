const jwt = require('jsonwebtoken');

const JwtGenerate = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
    };

    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        expiresIn: '72h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Failed to generate token 💣.');
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  JwtGenerate,
};
