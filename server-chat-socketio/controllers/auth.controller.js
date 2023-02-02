const CreateUser = async (req, res = Response) => {
  res.json({
    ok: true,
    usuer: 'new User',
  });
};

const Login = async (req, res = Response) => {
  res.json({
    ok: true,
    usuer: 'Login',
  });
};

const RefreshToken = async (req, res = Response) => {
  res.json({
    ok: true,
    usuer: 'Refresh',
  });
};

module.exports = {
  CreateUser,
  Login,
  RefreshToken,
};
