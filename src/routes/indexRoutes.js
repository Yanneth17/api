const indexController = require('../controllers/indexController')
const express = require('express');
const router = express.Router();

router.get('/index', indexController.index);

module.exports = router;