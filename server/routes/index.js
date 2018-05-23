const express = require('express');
const router = express.Router();
const { allUser, signin, signup } = require('../controllers/user')

/* GET home page. */
router
  .get('/', allUser)
  .post('/login', signin)
  .post('/register', signup)

module.exports = router;
