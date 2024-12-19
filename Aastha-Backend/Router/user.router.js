const express = require('express');
const router = express.Router();
const inquiryController = require('../Controller/inquiry');

router.post('/create',inquiryController.createInquiry);
router.get('/inquiry',inquiryController.PendingInquiry);
router.put('/update-status/:id',inquiryController.SolveInquiry);

module.exports = router;