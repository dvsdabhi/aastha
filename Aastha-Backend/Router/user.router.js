const express = require('express');
const router = express.Router();
const inquiryController = require('../Controller/inquiry');

router.post('/create',inquiryController.createInquiry);

module.exports = router;