const express = require('express');
const userControllers = require('../Controllers/users.controllers');
const router = express.Router();

router.get('/', userControllers.reads);
router.post('/', userControllers.create);
router.put('/:id', userControllers.update);
router.delete('/:id', userControllers.destroy);

module.exports = router;