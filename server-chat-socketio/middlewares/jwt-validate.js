const jwt = require('jsonwebtoken');

const JwtValidate = (req, res, next) => {
  try {
    const token = req.header('x-token');

    if (!token) {
      res.status(401).json({
        status: false,
        msg: 'Unauthorize',
      });
    }

    const { uid } = jwt.verify(token, process.env.JWT_KEY);

    req.uid = uid;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      ok: false,
      msg: 'Token not valid 💣!',
    });
  }
};

module.exports = {
  JwtValidate,
};
