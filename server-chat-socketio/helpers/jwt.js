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

const verifyJWT = (token = '') => {
  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    return [true, uid];
  } catch (error) {
    return [false, null];
  }
};

module.exports = {
  JwtGenerate,
  verifyJWT,
};
