const express = require('express');
const router = express.Router();
const { read, 
    list,
    create,
    update,
    remove
} = require('../Controller/products');


router.get('/p', list)
router.get('/p/:id', read)
router.post('/p', create)
router.put('/p/:id', update)
router.delete('/p/:id', remove)



module.exports = router;