const express = require('express');
const router = express.Router();
const {
  Login,
  RefreshToken,
  CreateUser,
} = require('../controllers/auth.controller');

const { check } = require('express-validator');
const { validateFields } = require('../middlewares/fields-validate');
const { JwtValidate } = require('../middlewares/jwt-validate');

// create user
router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty().isString(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  CreateUser
);

//Login
router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields,
  ],
  Login
);

//Refresh token
router.get('/refresh', JwtValidate, RefreshToken);

module.exports = router;
