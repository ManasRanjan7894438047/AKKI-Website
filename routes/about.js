const express = require('express');
const aboutController = require('../controllers/aboutController');

const router = express.Router();

router.get('/', aboutController.getAbout);

module.exports = router;
