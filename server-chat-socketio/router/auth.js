const express = require('express');
const router = express.Router();
const {
  Login,
  RefreshToken,
  CreateUser,
} = require('../controllers/auth.controller');

// create user
router.post('/new', CreateUser);

//Login
router.post('/login', Login);

//Refresh token
router.get('/refresh', RefreshToken);

module.exports = router;
