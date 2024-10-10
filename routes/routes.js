const express = require('express');
const router =express.Router();
const turingan = require('../controller/turingan');

router.get('/', turingan.index);
router.post('/save', turingan.save);

module.exports = router;
