const express = require('express');
const router = express.Router();
const controller = require('../controllers/elancoControllers');

router.get('/elancoAPI',controller.elancoAPI);

module.exports = router;