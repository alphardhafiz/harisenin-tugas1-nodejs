const express = require('express');
const Controller = require('../controllers/about-me-controller');

const router = express.Router();

router.get('/', Controller.hiApis);

module.exports = router;
