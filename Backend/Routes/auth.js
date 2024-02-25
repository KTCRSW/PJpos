const express = require('express');
const router = express.Router();

const { register, login, listUser }  = require('../Controller/auth');


router.post('/register', register)
router.get('/login', login)
router.get('/users', listUser)

module.exports = router;