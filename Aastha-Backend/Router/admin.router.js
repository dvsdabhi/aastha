const express = require('express');
const adminrouter = express.Router();
const adminController = require('../Controller/admin');

adminrouter.post('/create-admin',adminController.createAdmin);
adminrouter.post('/admin-login',adminController.adminLogin);

module.exports = adminrouter