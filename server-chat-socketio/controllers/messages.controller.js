const Message = require('../models/messageSchema');

const getMessages = async (req, res) => {
  const uid = req.uid;
  const messageFrom = req.params.from;

  const last35Messages = await Message.find({
    $or: [
      { to: uid, from: messageFrom },
      { to: messageFrom, from: uid },
    ],
  })
    .sort({ created_at: 'desc' })
    .limit(30);

  res.json({
    ok: true,
    msg: last35Messages,
    uid,
    messageFrom,
  });
};

module.exports = {
  getMessages,
};
