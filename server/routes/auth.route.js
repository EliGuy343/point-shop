const router = require('express').Router();
const { 
  registerUser,
  loginUser 
} = require('../controller/auth.controller');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;