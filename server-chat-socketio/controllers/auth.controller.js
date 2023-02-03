const { validationResult } = require('express-validator');
const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const { JwtGenerate } = require('../helpers/jwt');

const CreateUser = async (req, res = Response) => {
  try {
    const { email, password, name } = req.body;

    const existEmail = await User.findOne({ email });

    if (existEmail) {
      return res.status(400).json({
        ok: false,
        msg: 'This email is not allowed 😢. ',
      });
    }

    const user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save(user);

    const token = await JwtGenerate(user.id);

    res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    handleError(error, res);
  }
};

const Login = async (req, res = Response) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res
        .status(404)
        .json({ ok: false, msg: 'Email or password are incorrect 👎' });
    }

    const matchPassword = await bcrypt.compareSync(password, findUser.password);

    if (!matchPassword) {
      return res
        .status(404)
        .json({ ok: false, msg: 'Email or password are incorrect 😲.' });
    }

    const token = await JwtGenerate(findUser.id);

    res.json({
      ok: true,
      user: findUser,
      token,
    });
  } catch (error) {
    handleError(error, res);
  }
};

const RefreshToken = async (req, res = Response) => {
  const uid = req.uid;

  const token = await JwtGenerate(uid);

  const user = await User.findById(uid);

  res.json({
    ok: true,
    user,
    token,
  });
};

const handleError = (error, res) => {
  console.log(error);
  res.status(500).json({
    ok: false,
    msg: 'Contact with admin 🧑.',
  });
};

module.exports = {
  CreateUser,
  Login,
  RefreshToken,
};
