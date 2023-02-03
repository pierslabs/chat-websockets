const { getMessages } = require('../controllers/messages.controller');
const { JwtValidate } = require('../middlewares/jwt-validate');

const router = require('express').Router();

router.get('/:from', JwtValidate, getMessages);

module.exports = router;
