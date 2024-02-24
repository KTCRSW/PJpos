const express = require('express');
const router = express.Router();


const {register} = require('../Controller/auth');


router.post('/r', register)

module.exports = router;