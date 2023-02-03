const getMessages = (req, res) => {
  const uid = req.uid;
  res.json({
    ok: true,
    msg: 'messgaes',
    uid,
  });
};

module.exports = {
  getMessages,
};
