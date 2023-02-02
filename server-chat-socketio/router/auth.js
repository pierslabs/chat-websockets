const express = require('express');
const router = express.Router();

// create user
router.post('/new', (req, res) => {
  res.json({
    ok: true,
    usuer: 'new User',
  });
});

//Login
router.post('/login', (req, res) => {
  res.json({
    ok: true,
    usuer: 'Login',
  });
});

//Refresh token
router.get('/refresh', (req, res) => {
  res.json({
    ok: true,
    usuer: 'Refresh',
  });
});

module.exports = router;
