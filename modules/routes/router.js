const express = require('express');
const router = express.Router();
const controller = require('./routesController');

router.get('/', controller.listar);

module.exports = router;