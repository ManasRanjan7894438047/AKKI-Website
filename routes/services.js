const express = require('express');
const servicesController = require('../controllers/servicesController');

const router = express.Router();

router.get('/', servicesController.getServices);
router.get('/:id', servicesController.getServiceDetail);

module.exports = router;
