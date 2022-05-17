const express = require('express');
const indexControllers = require('../Controllers/index.controllers');
const router = express.Router();

router.get('/', indexControllers.index);

module.exports = router;