const express = require('express');
const router = express.Router();

const { register, login }  = require('../Controller/auth');


router.post('/r', register)
router.get('/l', login)

module.exports = router;